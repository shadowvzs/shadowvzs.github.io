import{f as e}from"./environment-B7MmBhz8.js";var t=`
uniform sampler2D uRockTexture;
${e}
const float ROCK_TILE = 0.19;

struct RockZones {
  float clean;
  float weathered;
  float loose;
};

struct RockSurface {
  vec3 albedo;
  vec3 normal;
  float occlusion;
  float roughness;
  /** 0 bare .. 1 snow covered (Quality adds sparkle and a smoother snow surface). */
  float snow;
  /** 1 on standalone stones seen close up (finer texture octave and detail normal). */
  float detailed;
  RockZones zones;
};

struct RockUv {
  vec2 x;
  vec2 y;
  vec2 z;
  vec3 weights;
};

/** Soft projection blend (a sharp exponent shows seams on 45 degree faces). */
RockUv getRockUv(vec3 world, vec3 normal) {
  vec3 weights = pow(abs(normal), vec3(2.5));
  return RockUv(
    world.zy * ROCK_TILE,
    world.xz * ROCK_TILE,
    world.xy * ROCK_TILE,
    weights / (weights.x + weights.y + weights.z)
  );
}

/**
 * Height-aware triplanar blend: where projections overlap, the higher rock (texture R) wins a
 * little, so the seam follows the stone pattern instead of a straight blend band.
 */
vec4 sampleRockTriplanar(sampler2D map, RockUv uv) {
  vec4 sampleX = texture(map, uv.x);
  vec4 sampleY = texture(map, uv.y);
  vec4 sampleZ = texture(map, uv.z);
  vec3 weights = uv.weights * (vec3(sampleX.r, sampleY.r, sampleZ.r) * 0.8 + 0.6);
  weights /= weights.x + weights.y + weights.z;
  return sampleX * weights.x + sampleY * weights.y + sampleZ * weights.z;
}

/**
 * Strata following the sculpted geometry: layers of varying thickness in world height, dipping
 * and warping regionally. x: band tone 0..1 (one per layer), y: recessed seam between layers.
 */
float hashLayer(float layer) {
  return fract(sin(layer * 12.9898 + 4.1) * 43758.5453);
}

vec2 getStrata(vec3 world) {
  float dip = (fbm3(world.xz * 0.035) - 0.5) * 3.0 + world.x * 0.06 - world.z * 0.035;
  float layer = world.y * 1.2 + dip + sin(world.y * 0.7 + world.x * 0.05) * 0.35;
  float within = fract(layer);
  float current = hashLayer(floor(layer));
  float band = mix(current, hashLayer(floor(layer) + 1.0), smoothstep(0.82, 1.0, within));
  float broken = valueNoise(world.xz * 0.7 + world.y * 0.12);
  float seam = smoothstep(0.11, 0.0, within) * smoothstep(0.35, 0.75, broken);
  return vec2(band, seam);
}

/** Broad stone colour: regional tint, macro regions, strata bands; never one uniform grey. */
vec3 getStonePalette(float tint, float region, float band) {
  vec3 coolGrey = vec3(0.43, 0.45, 0.48);
  vec3 warmGrey = vec3(0.56, 0.52, 0.47);
  vec3 brown = vec3(0.5, 0.42, 0.35);
  vec3 beige = vec3(0.64, 0.58, 0.49);
  vec3 mauve = vec3(0.5, 0.46, 0.48);
  vec3 stone = mix(coolGrey, warmGrey, smoothstep(0.25, 0.6, tint));
  stone = mix(stone, brown, smoothstep(0.6, 0.95, tint) * 0.75);
  stone = mix(stone, mauve, smoothstep(0.55, 0.85, region) * 0.35);
  stone = mix(stone, coolGrey, smoothstep(0.45, 0.15, region) * 0.3);
  stone = mix(stone, coolGrey * 0.92, smoothstep(0.4, 0.05, band) * 0.35);
  return mix(stone, beige, smoothstep(0.55, 0.95, band) * 0.45) * (0.88 + band * 0.17);
}

/**
 * Fine stone grain close up: two octaves of low-contrast grain and sparse light specks from
 * value noise in the triplanar planes (no texture fetch); fades out once a pixel covers more
 * than a few centimetres, so it never shimmers at gameplay distance. Returns a brightness factor.
 */
float sampleFineNoise(RockUv uv, float scale) {
  return valueNoise(uv.x * scale) * uv.weights.x + valueNoise(uv.y * scale) * uv.weights.y
    + valueNoise(uv.z * scale) * uv.weights.z;
}

float getFineGrain(vec3 world, RockUv uv, float loose) {
  float footprint = length(fwidth(world));
  float fade = 1.0 - smoothstep(0.015, 0.06, footprint);
  if (fade <= 0.0) return 1.0;
  float grain = sampleFineNoise(uv, 38.0) * 0.6 + sampleFineNoise(uv, 97.0) * 0.4 - 0.5;
  float speck = smoothstep(0.78, 0.95, sampleFineNoise(uv, 160.0));
  float detail = grain * 0.2 + speck * 0.04;
  return 1.0 + detail * fade * (1.0 - loose * 0.6);
}

/** Water runoff: dark vertical streaks on steep faces, broken along their length. */
float getRunoff(vec3 world, vec3 normal) {
  vec2 across = normalize(vec2(-normal.z, normal.x) + vec2(0.0001, 0.0));
  float streak = valueNoise(vec2(dot(world.xz, across) * 3.2, world.y * 0.14));
  float broken = valueNoise(vec2(dot(world.xz, across) * 0.6, world.y * 0.5));
  float steep = 1.0 - smoothstep(0.35, 0.7, abs(normal.y));
  return smoothstep(0.6, 0.85, streak) * smoothstep(0.25, 0.6, broken) * steep;
}

/**
 * Stone tone by orientation and lichen (reference study): dusty, sunlit tops, darker sides and
 * undersides, sparse pale lichen crusts on open upward faces. Uses values already sampled.
 */
vec3 applyStoneTone(
  vec3 albedo,
  vec3 normal,
  vec4 materials,
  vec2 noise,
  RockZones zones,
  vec3 world
) {
  float breakup = noise.y;
  vec3 toned = albedo * mix(0.86, 1.04, smoothstep(-0.5, 0.85, normal.y));
  /** Broad, soft warm / cool variation and faint weathering streaks on every face. */
  toned *= mix(vec3(0.95, 0.97, 1.03), vec3(1.05, 1.0, 0.93), smoothstep(-0.3, 0.3, noise.x));
  toned *= 1.0 - getRunoff(world, normal) * 0.07;
  float crust = smoothstep(0.72, 0.86, materials.g + breakup * 0.35);
  float lichen = crust * smoothstep(0.1, 0.6, normal.y) * (1.0 - zones.loose) * 0.2;
  vec3 tint = mix(vec3(0.66, 0.64, 0.46), vec3(0.7, 0.56, 0.36), step(0.25, breakup));
  return mix(toned, tint, lichen);
}

/**
 * Wet rock by falls and in gorges (vertex wetness from the world's wet rock mask): subtly darker,
 * moss tint only in patches on upward wet faces (Quality also lowers the roughness a little).
 */
vec3 applyWetRock(vec3 albedo, vec3 normal, float wetness, float breakup) {
  if (wetness <= 0.0) return albedo;
  vec3 darker = mix(albedo, albedo * vec3(0.8, 0.81, 0.84), wetness);
  float patches = smoothstep(0.62, 0.9, wetness * 0.7 + breakup + 0.35);
  float moss = patches * smoothstep(0.1, 0.6, normal.y) * smoothstep(0.3, 0.7, wetness);
  return mix(darker, darker * vec3(0.72, 0.86, 0.6), moss * 0.6);
}

/** Prevailing wind (the way it blows): lee faces collect drifts, windward faces are scoured. */
const vec2 SNOW_WIND = vec2(0.8, 0.6);
/**
 * Snow line (world height): at the top of the snow ground band (7 .. 7.8), so rock never carries
 * snow where the ground around it has none (low outcrops beside forest stay bare).
 */
const float SNOW_LINE = 7.55;
/** How far the snow line comes down in a fully snowy (winter theme) area: to the lowland. */
const float WINTER_SNOW_LINE_DROP = ${7.5.toFixed(2)};

/** Snow line here: lower where the theme brings winter (the snow map). */
float getRockSnowLine(vec3 world) {
  if (world.y < SNOW_LINE - WINTER_SNOW_LINE_DROP - 1.0) return SNOW_LINE;
  return SNOW_LINE - getSnowMap(world.xz) * WINTER_SNOW_LINE_DROP;
}

/**
 * Where snow really lies on the rock, by form first: thick caps on flat tops and broad ledges,
 * drifts in hollows (cavity) and on lee faces, a thin dusting in crevices, bare steep faces,
 * open (non-hollow) shoulders and windward faces scoured. The snow line moves with the regional
 * noise and the exposure (lower on lee, higher on windward faces), never a flat contour. Noise
 * and the stone texture only roughen the edge, which stays defined: a small soft falloff.
 */
float getSnowCover(vec3 world, vec3 normal, vec4 mask, vec4 materials, vec2 noise) {
  float lee = dot(normalize(normal.xz + vec2(1e-4)), SNOW_WIND) * (1.0 - normal.y);
  float line = getRockSnowLine(world) + noise.x * 0.6 - lee * 0.3 + noise.y * 0.2;
  float altitude = smoothstep(line, line + 0.35, world.y);
  if (altitude <= 0.0) return 0.0;
  float cap = smoothstep(0.5, 0.85, normal.y);
  float drift = (mask.w + max(lee, 0.0)) * smoothstep(0.2, 0.55, normal.y);
  float scour = max(-lee, 0.0) * 0.5 + (1.0 - mask.w) * smoothstep(0.75, 0.45, normal.y) * 0.3;
  float roughEdge = noise.y * 0.3 + (materials.g - 0.5) * 0.45 - (materials.r - 0.5) * 0.35;
  float lying = cap + drift * 0.7 - scour + roughEdge;
  float dusting = mask.w * smoothstep(0.1, 0.4, normal.y) * 0.35;
  return altitude * max(smoothstep(0.42, 0.62, lying), dusting);
}

/** Bright snow, cool blue where it turns away from the sky. */
vec3 getSnowColor(vec3 normal, vec4 materials) {
  vec3 shade = vec3(0.57, 0.65, 0.78);
  vec3 light = vec3(0.72, 0.77, 0.83);
  return mix(shade, light, smoothstep(0.25, 0.85, normal.y) * 0.8 + materials.g * 0.2);
}


/**
 * Material weights: wide blends, texture heights (soft contrast) and world noise break the
 * borders up, so they follow the stone rather than the per vertex triangles.
 */
RockZones getRockZones(vec4 mask, float weathering, vec4 materials, float breakup) {
  float loose = smoothstep(0.22, 0.78, mask.z + (materials.b - 0.4) * 0.35 + breakup * 0.3);
  float weathered = smoothstep(0.2, 0.8, weathering + (0.5 - materials.r) * 0.3
    + materials.a * 0.15) * (1.0 - loose);
  return RockZones(1.0 - weathered - loose, weathered, loose);
}

vec3 getCleanRock(vec3 stone, vec4 materials, vec3 normal, float seam) {
  vec3 color = stone * (0.66 + materials.r * 0.68);
  float dusty = smoothstep(0.4, 0.95, normal.y) * 0.3;
  color = mix(color, vec3(0.68, 0.64, 0.57) * (0.78 + materials.r * 0.44), dusty);
  return color * (1.0 - seam * 0.18);
}

vec3 getWeatheredRock(
  vec3 stone,
  vec4 materials,
  vec3 world,
  vec3 normal,
  vec4 mask,
  float breakup
) {
  vec3 color = stone * vec3(0.84, 0.82, 0.78) * (0.72 + materials.g * 0.56);
  float oxidation = smoothstep(0.66, 0.82, fbm3(world.xz * 0.13 + world.y * 0.21));
  color = mix(color, vec3(0.6, 0.46, 0.3) * (0.5 + materials.g), oxidation * 0.3);
  color *= 1.0 - getRunoff(world, normal) * (0.16 + mask.y * 0.14);
  float moss = smoothstep(0.3, 0.8, mask.y + (materials.g - 0.5) * 0.4 + breakup * 0.3);
  return mix(color, vec3(0.2, 0.26, 0.13) * (0.85 + materials.g * 0.3), moss * 0.8);
}

/** Gravel and soil, low contrast (no pockmarked tops); soil tone matches the ground's gravel. */
vec3 getLooseRock(vec3 stone, vec4 materials, vec4 mask) {
  vec3 soil = mix(vec3(0.4, 0.34, 0.27), vec3(0.3, 0.32, 0.2), mask.y * 0.6);
  float pebbles = smoothstep(0.25, 0.6, materials.b);
  return mix(soil, stone * 0.9, pebbles * 0.75) * (0.8 + materials.b * 0.35);
}

/** Finer tile of the close-up stone detail octave (relative to ROCK_TILE). */
const float STONE_DETAIL_SCALE = 2.7;

/**
 * Close-up surface detail of standalone stones (meadow stones, foot boulders): a finer octave of
 * the same packed texture (3 fetches, only on these stones) gives mottled tone, mineral
 * speckle, small pits and hairline cracks; lighter weathered tops and edges, darker crevices,
 * pale lichen spots and moss patches on the shaded (north, -z) and upper sides.
 */
vec3 applyStoneDetail(vec3 albedo, vec3 world, vec3 normal, float breakup) {
  RockUv fineUv = getRockUv(world * STONE_DETAIL_SCALE, normal);
  vec4 fine = sampleRockTriplanar(uRockTexture, fineUv);
  float mottle = valueNoise(world.xz * 0.9 + world.y * 0.7 + 3.1);
  vec3 stone = albedo * mix(0.86, 1.12, mottle) * (0.8 + fine.r * 0.45);
  float speckLight = smoothstep(0.66, 0.82, fine.g);
  float speckDark = smoothstep(0.34, 0.2, fine.b);
  stone = mix(stone, stone * 1.25 + 0.04, speckLight * 0.35);
  stone *= 1.0 - speckDark * 0.18 - fine.a * 0.45;
  stone = mix(stone, stone * 1.12 + 0.03, smoothstep(0.35, 0.9, normal.y) * 0.5);
  float lichenNoise = valueNoise(world.xz * 3.3 + world.y * 2.1);
  float lichen = smoothstep(0.74, 0.82, lichenNoise + breakup * 0.2) * smoothstep(0.0, 0.6, normal.y);
  stone = mix(stone, stone * vec3(1.08, 1.06, 0.96) + 0.03, lichen * 0.35);
  float mossSide = smoothstep(0.1, -0.7, normal.z) * 0.6 + smoothstep(0.5, 0.95, normal.y) * 0.4;
  float moss = smoothstep(0.55, 0.75, valueNoise(world.xz * 1.7 + 8.3) + breakup * 0.3) * mossSide;
  return mix(stone, stone * vec3(0.82, 0.9, 0.74), moss * 0.4);
}

/** Broken mineral faces and fine joints on the massifs, readable beneath broad strata. */
vec3 applyMountainDetail(vec3 albedo, vec3 world, vec3 normal, RockZones zones, float breakup) {
  RockUv uv = getRockUv(world * 2.35 + vec3(11.7, 3.1, -8.4), normal);
  vec4 detail = sampleRockTriplanar(uRockTexture, uv);
  float exposed = 1.0 - zones.loose * 0.8;
  float mineral = detail.r * 0.65 + detail.g * 0.35;
  vec3 color = albedo * (0.72 + mineral * 0.56);
  color *= 1.0 - detail.a * 0.22 * exposed;
  vec3 patina = mix(vec3(0.96, 0.98, 1.01), vec3(1.03, 1.00, 0.96), smoothstep(-0.2, 0.2, breakup));
  return mix(albedo, color * patina, exposed * 0.8);
}

/**
 * Ore stones on a surveyed mine field (ORE codes): coal in black seams, iron in rust patches with
 * runoff, gold as quartz veins with glinting specks, granite pale and speckled.
 */
vec3 applyOreStone(vec3 albedo, vec3 world, int ore) {
  float luma = dot(albedo, vec3(0.3, 0.59, 0.11));
  float grain = fbm3(world.xz * 2.4 + world.y * 1.7);
  if (ore == 1) {
    float seam = abs(sin(world.y * 11.0 + world.x * 2.0 + grain * 7.0));
    return mix(albedo * 0.8, vec3(0.08, 0.075, 0.07), smoothstep(0.45, 0.15, seam));
  }
  if (ore == 2) {
    float rust = smoothstep(0.52, 0.7, grain + (0.5 - fract(world.y * 0.9)) * 0.08);
    return mix(albedo, vec3(0.47, 0.26, 0.15) * (0.75 + luma), rust * 0.6);
  }
  if (ore == 3) {
    float vein = abs(sin(world.x * 6.0 - world.z * 4.5 + world.y * 3.0 + grain * 8.0));
    vec3 quartz = mix(albedo, vec3(0.86, 0.84, 0.78), smoothstep(0.22, 0.06, vein));
    float speck = fract(sin(dot(floor(world * 26.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float flash = 0.6 + 0.4 * sin(uTime * 3.0 + speck * 40.0);
    return mix(quartz, vec3(1.0, 0.78, 0.25) * (1.0 + flash), step(0.92, speck) * step(vein, 0.3));
  }
  if (ore == 4) {
    float fleck = fract(sin(dot(floor(world * 34.0), vec3(39.3, 11.7, 83.1))) * 43758.5453);
    vec3 flecked = vec3(0.8, 0.78, 0.75) * (0.85 + luma * 0.3);
    if (fleck > 0.84) flecked = vec3(0.7, 0.55, 0.5);
    if (fleck > 0.9) flecked = vec3(0.14, 0.14, 0.15);
    return mix(albedo, flecked, 0.8);
  }
  return albedo;
}

/**
 * Shared albedo and occlusion of the three materials (no detail normal): Performance draws it
 * directly; Quality adds ROCK_DETAIL_GLSL on top.
 */
RockSurface getRockSurface(vec3 world, vec3 normal, vec4 mask, float weathering, float wetness) {
  RockUv uv = getRockUv(world, normal);
  vec4 materials = sampleRockTriplanar(uRockTexture, uv);
  float packedTint = mask.x * 255.0;
  float detailed = step(127.5, packedTint);
  float stoneByte = floor(packedTint + 0.5) - 128.0;
  int ore = detailed > 0.5 ? int(stoneByte / 16.0) : 0;
  float tint = detailed > 0.5 ? mod(stoneByte, 16.0) / 15.0 : packedTint / 127.0;
  float region = fbm3(world.xz * 0.02 + world.y * 0.03);
  float zoneNoise = fbm3(world.xz * 0.09 + world.y * 0.11 + 5.3) - 0.5;
  float breakup = valueNoise(world.xz * 1.3 + world.y * 0.9) - 0.5;
  float zoneWeathering = weathering + zoneNoise * 0.9 + breakup * 0.25;
  RockZones zones = getRockZones(mask, zoneWeathering, materials, breakup);
  vec2 strata = getStrata(world);
  float layered = (1.0 - smoothstep(0.55, 0.85, normal.y)) * zones.clean;
  vec3 stone = getStonePalette(tint, region, mix(0.45, strata.x, layered));
  vec3 albedo = getCleanRock(stone, materials, normal, strata.y * layered) * zones.clean
    + getWeatheredRock(stone, materials, world, normal, mask, breakup) * zones.weathered
    + getLooseRock(stone, materials, mask) * zones.loose;
  albedo *= getFineGrain(world, uv, zones.loose);
  albedo = applyStoneTone(albedo, normal, materials, vec2(zoneNoise, breakup), zones, world);
  if (detailed > 0.5) albedo = applyStoneDetail(albedo * 1.08, world, normal, breakup);
  if (ore > 0) albedo = applyOreStone(albedo, world, ore);
  else albedo = applyMountainDetail(albedo, world, normal, zones, breakup);
  albedo = applyWetRock(albedo, normal, wetness, breakup);
  float snow = getSnowCover(world, normal, mask, materials, vec2(zoneNoise, breakup));
  snow *= 1.0 - wetness;
  albedo = mix(albedo, getSnowColor(normal, materials), snow);
  float recess = smoothstep(-0.1, -0.6, normal.y);
  albedo = mix(albedo, albedo * vec3(0.82, 0.84, 0.92), recess);
  float cavity = materials.a * (0.16 + zones.weathered * 0.12) * (1.0 - zones.loose);
  RockSurface surface;
  surface.albedo = albedo;
  surface.normal = normal;
  surface.occlusion = mix((1.0 - mask.w * 0.5) * (1.0 - cavity), 1.0, snow * 0.7);
  float dryRoughness = zones.clean * 0.8 + zones.weathered * 0.9 + zones.loose * 0.95;
  surface.roughness = mix(mix(dryRoughness, 0.6, snow), 0.45, wetness * 0.6);
  surface.snow = snow;
  surface.detailed = detailed;
  surface.zones = zones;
  return surface;
}

/** Debug colours: 1 wet rock, 2 masks (moss, loose, cavity), 3 normals, 4 material zones. */
vec3 getRockDebug(int view, vec4 mask, vec4 extra, RockSurface surface) {
  if (view == 1) return mix(vec3(0.85, 0.8, 0.7), vec3(0.1, 0.3, 0.9), extra.w);
  if (view == 2) return mask.yzw;
  if (view == 3) return surface.normal * 0.5 + 0.5;
  RockZones zones = surface.zones;
  return vec3(0.85, 0.75, 0.6) * zones.clean + vec3(0.35, 0.6, 0.3) * zones.weathered
    + vec3(0.35, 0.45, 0.8) * zones.loose;
}
`,n=`
uniform sampler2D uRockNormal;

/**
 * Bends the vertex normal by the three projected detail slopes (whiteout style blend), weakly
 * and only close up (fade): the rock reads as smooth, softly rounded stone.
 */
vec3 getRockDetailNormal(vec3 normal, RockUv uv, RockZones zones, float fade) {
  vec4 slopesX = texture(uRockNormal, uv.x) * 2.0 - 1.0;
  vec4 slopesY = texture(uRockNormal, uv.y) * 2.0 - 1.0;
  vec4 slopesZ = texture(uRockNormal, uv.z) * 2.0 - 1.0;
  vec2 nx = mix(slopesX.xy, slopesX.zw, zones.loose);
  vec2 ny = mix(slopesY.xy, slopesY.zw, zones.loose);
  vec2 nz = mix(slopesZ.xy, slopesZ.zw, zones.loose);
  vec3 detail = vec3(0.0, nx.y, nx.x) * uv.weights.x + vec3(ny.x, 0.0, ny.y) * uv.weights.y
    + vec3(nz.x, nz.y, 0.0) * uv.weights.z;
  float strength = zones.clean * 0.3 + zones.weathered * 0.34 + zones.loose * 0.2;
  return normalize(normal + detail * strength * fade);
}

/** Subtle fine detail normal on standalone stones close up (the shading stays smooth). */
void applyStoneDetailNormal(inout RockSurface surface, vec3 world, vec3 normal, float fade) {
  if (surface.detailed < 0.5 || fade <= 0.0) return;
  RockUv uv = getRockUv(world * STONE_DETAIL_SCALE, normal);
  vec4 slopesX = texture(uRockNormal, uv.x) * 2.0 - 1.0;
  vec4 slopesY = texture(uRockNormal, uv.y) * 2.0 - 1.0;
  vec4 slopesZ = texture(uRockNormal, uv.z) * 2.0 - 1.0;
  vec3 detail = vec3(0.0, slopesX.y, slopesX.x) * uv.weights.x
    + vec3(slopesY.x, 0.0, slopesY.y) * uv.weights.y
    + vec3(slopesZ.x, slopesZ.y, 0.0) * uv.weights.z;
  surface.normal = normalize(surface.normal + detail * 0.2 * fade);
}

/** Snow in Quality: smooth (little stone detail under it), matte, with a few cold glints. */
void applySnowDetail(inout RockSurface surface, vec3 world, vec3 normal) {
  if (surface.snow <= 0.0) return;
  surface.normal = normalize(mix(surface.normal, normal, surface.snow * 0.85));
  surface.roughness = mix(surface.roughness, 0.55, surface.snow);
  float near = 1.0 - smoothstep(0.012, 0.028, length(fwidth(world)));
  float glint = fract(sin(dot(floor(world * 48.0), vec3(12.9898, 78.233, 37.719))) * 43758.5453);
  surface.albedo += vec3(0.06) * step(0.9985, glint) * surface.snow * near;
}

RockSurface getRockDetailSurface(
  vec3 world,
  vec3 normal,
  vec4 mask,
  float weathering,
  float wetness
) {
  RockSurface surface = getRockSurface(world, normal, mask, weathering, wetness);
  float nearFade = 1.0 - smoothstep(0.02, 0.08, length(fwidth(world)));
  surface.normal = getRockDetailNormal(
    surface.normal,
    getRockUv(world, normal),
    surface.zones,
    nearFade
  );
  float damp = mask.w * smoothstep(0.3, 0.8, mask.y);
  surface.roughness = mix(surface.roughness, 0.7, damp * 0.5);
  float moss = smoothstep(0.5, 0.8, mask.y) * surface.zones.weathered;
  surface.roughness = mix(surface.roughness, 0.95, moss);
  applyStoneDetailNormal(surface, world, normal, nearFade);
  applySnowDetail(surface, world, normal);
  return surface;
}

`,r=`
vec3 getRockFill(vec3 albedo, vec3 normal, float sunLit, float occlusion) {
  float shade = 1.0 - sunLit * clamp(dot(normal, uSunDirection) * 1.5 + 0.3, 0.0, 1.0);
  vec3 sky = uAmbientSky * smoothstep(-0.3, 0.8, normal.y);
  vec3 bounce = uAmbientGround * vec3(1.15, 1.0, 0.85) * smoothstep(0.4, -0.6, normal.y);
  return albedo * (sky * 0.3 + bounce * 0.4) * shade * mix(0.6, 1.0, occlusion);
}
`;export{r as n,t as r,n as t};