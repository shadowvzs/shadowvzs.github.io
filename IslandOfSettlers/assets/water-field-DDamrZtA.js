import{t as e}from"./periodic-noise-DIDp6cIr.js";import{f as t}from"./environment-B7MmBhz8.js";var n=32,r=8,i=e=>Math.round(Math.min(1,Math.max(0,e))*255),a=t=>{let r=[0,1,2,3].map(n=>e(t+n*7717)),a=new Uint8Array(262144);for(let e=0;e<256;e+=1)for(let t=0;t<256;t+=1){let o=t/256,s=e/256,c=(e*256+t)*4;r.forEach((e,t)=>{a[c+t]=i(e.gradient(o,s,n)*.7+.5)})}return a},o=t=>{let n=e(t);return(e,t)=>n.fbm(e,t,r,3)},s=e=>{let t=[o(e),o(e+99)],n=new Uint8Array(262144),r=1/256;for(let e=0;e<256;e+=1)for(let a=0;a<256;a+=1){let o=a*r,s=e*r,c=(e*256+a)*4;t.forEach((e,t)=>{let a=(e(o+r,s)-e(o-r,s))*6,l=(e(o,s+r)-e(o,s-r))*6;n[c+t*2]=i(-a*.5+.5),n[c+t*2+1]=i(-l*.5+.5)})}return n},c=`
uniform float uTime;
uniform float uCloudCover;
uniform float uRain;
uniform float uBakedShadowWeight;
uniform vec2 uWind;
uniform vec3 uSunDirection;
uniform vec3 uSunColor;
uniform vec3 uAmbientSky;
uniform vec3 uAmbientGround;
uniform vec3 uFogColor;
uniform vec3 uViewDirection;
uniform vec2 uWorldSize;
uniform sampler2D uFogMap;
uniform float uLiveFog;
float sampleLiveFog(float fallback,vec2 xz) {
  if(uLiveFog<0.5||uWorldSize.x<=0.0)return fallback;
  return texture(uFogMap,clamp(xz/uWorldSize,vec2(0.0),vec2(1.0))).r;
}

/**
 * 1 inside the playable map, falling to 0 over the last MAP_EDGE_CELLS at its border and 0
 * beyond it; always 1 in scenes without a map (uWorldSize 0).
 */
float getMapInterior(vec2 xz) {
  if (uWorldSize.x <= 0.0) return 1.0;
  vec2 inside = min(xz, uWorldSize - xz);
  return smoothstep(0.0, ${6 .toFixed(1)}, min(inside.x, inside.y));
}
`,l=`
uniform sampler2D uNoiseTexture;
const float NOISE_LATTICE = 32.0;

float valueNoise(vec2 p) {
  return texture(uNoiseTexture, p / NOISE_LATTICE).r;
}

float fbm3(vec2 p) {
  return texture(uNoiseTexture, p / NOISE_LATTICE).r * 0.5
    + texture(uNoiseTexture, (p * 2.03 + 17.1) / NOISE_LATTICE).g * 0.3
    + texture(uNoiseTexture, (p * 4.01 + 3.7) / NOISE_LATTICE).b * 0.2;
}
`,u=`
float cloudShadow(vec2 xz) {
  float clouds = fbm3(xz * 0.022 + uWind * uTime * 0.012);
  float edge = 1.0 - uCloudCover;
  return mix(1.0, 0.7, smoothstep(edge, edge + 0.22, clouds));
}

/**
 * Wrapped Lambert sun (or moon) + hemisphere sky, shadow visibility (baked shadows fade when the
 * light moves away from the baked direction), occlusion, cloud shadows; rain darkens surfaces and
 * adds a wet sheen on upward faces.
 */
vec3 lightSurface(vec3 albedo, vec3 normal, float sunVisibility, float occlusion, vec2 xz) {
  float visibility = mix(1.0, sunVisibility, uBakedShadowWeight);
  float wrapped = clamp((dot(normal, uSunDirection) + 0.2) / 1.2, 0.0, 1.0);
  vec3 sky = mix(uAmbientGround, uAmbientSky, normal.y * 0.5 + 0.5);
  float clouds = cloudShadow(xz);
  vec3 wetAlbedo = albedo * (1.0 - uRain * 0.25);
  vec3 color = wetAlbedo * (uSunColor * wrapped * visibility * clouds + sky * occlusion * 0.8);
  float sheen = pow(max(dot(normal, normalize(uSunDirection + uViewDirection)), 0.0), 36.0);
  return color + (uSunColor * 0.35 + uAmbientSky * 0.25) * sheen * uRain * smoothstep(0.4, 0.9, normal.y);
}
`,d=`
/**
 * visibility: 1 visible, 0.5 discovered (desaturated), 0 hidden (drifting light cloud cover).
 * Beyond the playable map the open sea fades into a deep haze far out (applyMapEdge).
 */
vec3 applyFogClouds(vec3 color, float visibility, vec2 xz) {
  visibility=sampleLiveFog(visibility,xz);
  float grey = dot(color, vec3(0.3, 0.59, 0.11));
  float discovered = 1.0 - smoothstep(0.55, 0.95, visibility);
  color = mix(color, vec3(grey) * 0.82 + vec3(0.02, 0.03, 0.06), discovered * 0.5);
  float drift = fbm3(xz * 0.09 + vec2(uTime * 0.04, uTime * 0.015)) - 0.5;
  float hidden = 1.0 - smoothstep(0.1, 0.45, visibility + drift * 0.35);
  float puffs = fbm3(xz * 0.05 - vec2(uTime * 0.025, 0.0));
  vec3 cloud = mix(uFogColor * 0.62, uFogColor * 1.12, smoothstep(0.25, 0.8, puffs));
  return mix(color, cloud, hidden * 0.96);
}

/** Deep sea haze the open sea beyond the map fades into, far out. */
const vec3 FAR_SEA_HAZE = vec3(0.02, 0.07, 0.11);

/**
 * The playable border reads as a soft darker band over the last cells inside the map; beyond it
 * the open sea stays visible and fades into a deep haze far out (no black wall at the edge).
 */
vec3 applyMapEdge(vec3 color, vec2 xz) {
  if (uWorldSize.x <= 0.0) return color;
  vec2 beyond = max(-xz, xz - uWorldSize);
  float outside = max(max(beyond.x, beyond.y), 0.0);
  vec3 bordered = color * mix(0.72, 1.0, getMapInterior(xz));
  return mix(bordered, FAR_SEA_HAZE, smoothstep(4.0, 60.0, outside) * 0.85);
}

vec3 applyFogOfWar(vec3 color, float visibility, vec2 xz) {
  return applyMapEdge(applyFogClouds(color, visibility, xz), xz);
}
`,f=`
vec3 gradeColor(vec3 color) {
  float luma = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(luma), color, 1.12 - uRain * 0.3);
  return clamp((color - 0.5) * 1.05 + 0.5, 0.0, 1.0);
}
`,p=576,m=[8,8,6,7,8,9,12,7,6],h=e=>({column:e%3,row:Math.floor(e/3)}),g=`
uniform sampler2D uAlbedoAtlas;
uniform sampler2D uNormalAtlas;

const vec2 ATLAS_GRID = vec2(${3 .toFixed(1)}, ${3 .toFixed(1)});
const float ATLAS_INNER = ${(512/p).toFixed(6)};
const float ATLAS_PAD = ${(32/p).toFixed(6)};
const mat2 DETAIL_ROTATION = mat2(0.8, 0.6, -0.6, 0.8);

/** Atlas uv of a repeating tile uv inside a cell (column, row). */
vec2 atlasCellUv(vec2 cell, vec2 uv) {
  return (cell + ATLAS_PAD + fract(uv) * ATLAS_INNER) / ATLAS_GRID;
}
`,_=`
/** World space variation in 4 fetches (4 independent channels each). */
struct GroundMacro {
  vec4 region;
  vec4 patches;
  vec4 breakup;
  vec4 grain;
  float far;
};

GroundMacro sampleGroundMacro(vec2 xz, float footprint) {
  return GroundMacro(
    texture(uNoiseTexture, xz * (0.021 / NOISE_LATTICE)),
    texture(uNoiseTexture, (xz * 0.085 + 11.3) / NOISE_LATTICE),
    texture(uNoiseTexture, (xz * 0.5 + 5.1) / NOISE_LATTICE),
    texture(uNoiseTexture, (DETAIL_ROTATION * xz * 1.9 + 3.7) / NOISE_LATTICE),
    smoothstep(0.018, 0.09, footprint)
  );
}

/** Rain soaks the meadow: deeper, bluer, lush green (the generated islands have no swamps). */
const vec3 RAIN_LUSH_TINT = vec3(0.84, 0.97, 0.94);

/**
 * Meadow colour by region and patch: blue-green to yellow-green regions, lusher and paler
 * patches, dry straw patches; light starved darker grass under the canopy; lush in the rain.
 */
vec3 meadowTint(GroundMacro macro, float canopy) {
  float yellowGreen = smoothstep(0.36, 0.7, macro.region.x);
  float dry = smoothstep(0.58, 0.78, macro.patches.z) * smoothstep(0.42, 0.62, macro.region.z);
  vec3 tint = mix(vec3(0.9, 1.0, 0.97), vec3(1.07, 1.04, 0.84), yellowGreen);
  tint *= mix(0.9, 1.08, macro.region.y) * mix(0.93, 1.07, macro.patches.w);
  tint = mix(tint, vec3(1.25, 1.08, 0.66), dry * 0.6);
  tint = mix(vec3(1.0), tint, 1.0 + macro.far * 0.5);
  tint *= mix(vec3(1.0), RAIN_LUSH_TINT, uRain);
  return mix(tint, vec3(0.6, 0.7, 0.66), canopy * 0.8);
}
`,v=`
vec3 lightGround(GroundSample ground, float sunVisibility, float occlusion, vec2 xz) {
  float cavity = mix(1.0, ground.occlusion, 0.5);
  vec3 color = lightSurface(ground.albedo * cavity, ground.normal, sunVisibility, occlusion * ground.occlusion, xz);
  float gloss = 1.0 - ground.roughness * (1.0 - uRain * 0.45);
  float power = 4.0 + gloss * gloss * 80.0;
  vec3 halfway = normalize(uSunDirection + uViewDirection);
  float highlight = pow(max(dot(ground.normal, halfway), 0.0), power) * (power + 2.0) * 0.005;
  float visibility = mix(1.0, sunVisibility, uBakedShadowWeight);
  vec3 sparkle = getGroundSparkle(ground, xz, visibility);
  return color + uSunColor * highlight * gloss * visibility * ground.occlusion + sparkle;
}
`,y=`
const float MINE_GLINT_CELLS = 2.5;
const float MINE_GLINT_SHARE = 0.3;
const float MINE_GLINT_FLASH = 0.6;
const float MINE_GLINT_STRENGTH = 1.6;
const int ORE_COAL = 1;
const int ORE_IRON = 2;
const int ORE_GOLD = 3;
const int ORE_GRANITE = 4;

/** Multiplicative ore tint of the mine gravel (white: unsurveyed). */
vec3 getOreTint(int ore) {
  if (ore == ORE_COAL) return vec3(0.5, 0.49, 0.48);
  if (ore == ORE_IRON) return vec3(1.16, 0.8, 0.6);
  if (ore == ORE_GOLD) return vec3(1.1, 1.02, 0.82);
  if (ore == ORE_GRANITE) return vec3(1.08, 1.07, 1.04);
  return vec3(1.0);
}

/**
 * Faint patchy ore stain on the mine share of the ground (patchNoise: macro noise 0..1); it
 * fades in with the ore amount, so the deposit's edge is soft, not the cell outline.
 */
vec3 getOreStain(int ore, float mineShare, float oreAmount, float patchNoise) {
  if (ore == 0 || mineShare <= 0.0) return vec3(1.0);
  float fade = smoothstep(0.05, 0.6, oreAmount);
  float amount = mineShare * fade * (0.02 + 0.22 * smoothstep(0.58, 0.82, patchNoise));
  return mix(vec3(1.0), getOreTint(ore), amount);
}

vec3 getMineGlintColor(int ore) {
  if (ore == ORE_COAL) return vec3(0.62, 0.72, 0.95);
  if (ore == ORE_IRON) return vec3(0.6, 0.62, 0.66);
  if (ore == ORE_GOLD) return vec3(1.15, 0.86, 0.36);
  if (ore == ORE_GRANITE) return vec3(1.0, 1.0, 0.96);
  return vec3(0.92, 0.95, 1.0);
}

/** Share of glint cells that hold a glint, per ore (coal glints are rare, gold ones plenty). */
float getMineGlintDensity(int ore) {
  if (ore == ORE_COAL) return 0.4;
  if (ore == ORE_IRON) return 0.8;
  if (ore == ORE_GOLD) return 1.2;
  return 1.0;
}

/** 0..1 flash of a glint: a short sin^2 pulse once per period, at the glint's own phase. */
float getGlintFlash(float seed) {
  float period = 2.2 + fract(seed * 7.31) * 2.6;
  float local = mod(uTime + fract(seed * 13.7) * 10.0, period) / MINE_GLINT_FLASH;
  if (local >= 1.0) return 0.0;
  float pulse = sin(3.14159 * local);
  return pulse * pulse;
}

vec3 getMineGlint(float mine, int ore, float oreAmount, vec2 xz, float visibility) {
  if (mine <= 0.05) return vec3(0.0);
  vec2 scaled = xz * MINE_GLINT_CELLS;
  vec2 cell = floor(scaled);
  float seed = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
  float richness = oreAmount > 0.0 ? 0.35 + 0.65 * oreAmount : 0.0;
  if (seed > MINE_GLINT_SHARE * richness * getMineGlintDensity(ore)) return vec3(0.0);
  vec2 point = cell + 0.5 + (vec2(fract(seed * 91.7), fract(seed * 57.3)) - 0.5) * 0.6;
  vec2 offset = scaled - point;
  float pixel = max(fwidth(scaled.x), fwidth(scaled.y));
  float radius = max(0.07, pixel * 1.3);
  float spot = smoothstep(radius, 0.0, length(offset)) * smoothstep(0.7, 0.2, pixel);
  float flash = getGlintFlash(seed);
#ifdef MINE_GLINT
  flash *= 0.55 + 0.9 * valueNoise(point * 0.37 + uViewDirection.xz * 7.0);
  vec2 streak = abs(offset) / radius;
  float star = smoothstep(0.3, 0.0, min(streak.x, streak.y)) * smoothstep(3.5, 1.0, max(streak.x, streak.y));
  spot = max(spot, star * 0.7 * smoothstep(0.7, 0.2, pixel));
#endif
  float light = visibility * (1.0 - uRain * 0.75);
  return getMineGlintColor(ore) * uSunColor * spot * flash * mine * light * MINE_GLINT_STRENGTH;
}
`,b=m.length;if(b!==9)throw Error(`ground GLSL packs 9 layer scales, got ${b}`);var x=`
${g}
${y}
${t}

const int LAYER_COUNT = ${b};
const int ATLAS_COLUMN_COUNT = 3;
/**
 * Tile scale per layer, packed in a mat3 instead of a float[9] constant: Mali compilers reject
 * array constructors ("no default precision defined for variable 'float[9]'").
 */
const mat3 MATERIAL_SCALES = mat3(${(e=>e.map(e=>e.toFixed(6)).join(`, `))(m.map(e=>1/e))});
const float ORE_CODE_STEP = ${40 .toFixed(1)};
const float BLEND_DEPTH = 0.12;
const int MEADOW_LAYERS = 2;
const int FOREST_LAYER = 2;
const int ROCK_LAYER = 5;
const int SNOW_LAYER = 6;
const int MINE_LAYER = 8;
/** Prevailing wind over the snow (the rock snow drifts use the same direction). */
const vec2 SNOW_DRIFT_WIND = vec2(0.8, 0.6);
const vec3 SNOW_SHADE = vec3(0.8, 0.87, 1.0);
const vec3 NEEDLE_LITTER = vec3(0.26, 0.25, 0.2);
const float DETAIL_SCALE = 3.3;

struct GroundSample {
  vec3 albedo;
  vec3 normal;
  float occlusion;
  float roughness;
  /** Share of the snow layer (sparkle). */
  float snow;
  /** Share of the mine layer, its ore (ORE code, 0 unsurveyed) and the ore left 0..1. */
  float mine;
  int ore;
  float oreAmount;
};

${_}

float materialScale(int layer) {
  return MATERIAL_SCALES[layer / 3][layer % 3];
}

vec2 atlasUv(int layer, vec2 uv) {
  vec2 cell = vec2(float(layer % ATLAS_COLUMN_COUNT), float(layer / ATLAS_COLUMN_COUNT));
  return atlasCellUv(cell, uv);
}

/**
 * Snowfield tone: wind ripples (sastrugi) across the drift direction, bright drifts and duller
 * scoured patches, a faint grain, and cool blue on lee slopes and in low hollows; a little below
 * pure white overall.
 */
vec3 snowTint(GroundMacro macro, vec2 xz, vec3 normal) {
  float warp = (macro.patches.x - 0.5) * 5.0 + (macro.region.z - 0.5) * 9.0;
  float ripples = sin(dot(xz, SNOW_DRIFT_WIND) * 1.7 + warp) * 0.5 + 0.5;
  float drifts = smoothstep(0.3, 0.8, macro.region.y);
  float tone = 0.8 + drifts * 0.07 - ripples * (0.035 + macro.breakup.x * 0.045)
    + (macro.grain.y - 0.5) * 0.04;
  vec2 downhill = normal.xz / max(length(normal.xz), 0.001);
  float lee = max(dot(downhill, SNOW_DRIFT_WIND), 0.0) * smoothstep(0.02, 0.3, 1.0 - normal.y);
  float hollow = smoothstep(0.45, 0.2, macro.patches.y);
  return vec3(tone) * mix(vec3(1.0), SNOW_SHADE, clamp(lee * 2.5 + hollow * 0.3, 0.0, 0.6));
}

vec3 layerTint(int layer, float canopy, vec3 meadow) {
  if (layer < MEADOW_LAYERS) return meadow;
  if (layer == FOREST_LAYER) return vec3(mix(1.0, 0.82, canopy));
  return vec3(1.0);
}

/**
 * Forest floor in a winter area: snow with dark needle litter where the painted litter is dark,
 * and darker, thinner snow under the dense canopy (the conifer shade).
 */
vec3 getWinterForestFloor(vec3 litter, float winter, float canopy, vec3 snow) {
  float dark = smoothstep(0.32, 0.12, dot(litter, vec3(0.3, 0.59, 0.11)));
  vec3 snowFloor = mix(snow * 0.92, NEEDLE_LITTER, dark * 0.6) * mix(1.0, 0.78, canopy);
  return mix(litter, snowFloor, winter);
}

vec3 getLayerAlbedo(int layer, vec3 texel, float canopy, vec3 meadow, vec3 snow, float winter) {
  if (layer == SNOW_LAYER) return texel * snow;
  vec3 tinted = texel * layerTint(layer, canopy, meadow);
  if (layer != FOREST_LAYER || winter <= 0.0) return tinted;
  return getWinterForestFloor(tinted, winter, canopy, snow);
}

/** Rock seen from the side on steep slopes: three planar projections blended by the normal. */
vec4 sampleRockTriplanar(vec3 world, vec3 normal, vec4 top, vec3 dx, vec3 dy) {
  vec3 blend = pow(abs(normal), vec3(4.0));
  blend /= blend.x + blend.y + blend.z;
  if (blend.y > 0.98) return top;
  float scale = materialScale(ROCK_LAYER);
  vec2 gridScale = ATLAS_INNER / ATLAS_GRID * scale;
  vec4 sideX = textureGrad(uAlbedoAtlas, atlasUv(ROCK_LAYER, world.zy * scale), dx.zy * gridScale, dy.zy * gridScale);
  vec4 sideZ = textureGrad(uAlbedoAtlas, atlasUv(ROCK_LAYER, world.xy * scale), dx.xy * gridScale, dy.xy * gridScale);
  return top * blend.y + sideX * blend.x + sideZ * blend.z;
}

/** Rotated, finer normal of the dominant layer; only near the camera. */
vec3 sampleDetailNormal(int layer, vec2 uv, vec2 dx, vec2 dy) {
  vec2 detailUv = DETAIL_ROTATION * uv * DETAIL_SCALE;
  vec2 detailDx = DETAIL_ROTATION * dx * DETAIL_SCALE;
  vec2 detailDy = DETAIL_ROTATION * dy * DETAIL_SCALE;
  vec4 detail = textureGrad(uNormalAtlas, atlasUv(layer, detailUv), detailDx, detailDy);
  return vec3(detail.rg * 2.0 - 1.0, detail.b);
}

/** Element by element: Mali compilers reject a float[9] array constructor. */
void setLayerWeights(out highp float weights[LAYER_COUNT], vec4 a, vec4 b, vec4 c) {
  weights[0] = a.x;
  weights[1] = a.y;
  weights[2] = a.z;
  weights[3] = a.w;
  weights[4] = b.x;
  weights[5] = b.y;
  weights[6] = b.z;
  weights[7] = b.w;
  weights[8] = c.x;
}

GroundSample sampleGround(
  vec3 world, vec4 weightsA, vec4 weightsB, vec4 weightsC, vec3 geometryNormal, float canopy
) {
  vec2 xz = world.xz;
  highp float weights[LAYER_COUNT];
  setLayerWeights(weights, weightsA, weightsB, weightsC);
  int ore = int(weightsC.y * 255.0 / ORE_CODE_STEP + 0.5);
  vec3 worldDx = dFdx(world);
  vec3 worldDy = dFdy(world);
  float footprint = max(length(worldDx.xz), length(worldDy.xz));
  GroundMacro macro = sampleGroundMacro(xz, footprint);
  vec2 uv = xz + (macro.patches.xy - 0.5) * 3.0;
  vec2 dx = worldDx.xz * ATLAS_INNER / ATLAS_GRID;
  vec2 dy = worldDy.xz * ATLAS_INNER / ATLAS_GRID;
  highp vec4 texels[LAYER_COUNT];
  highp float scores[LAYER_COUNT];
  float best = -1.0;
  int dominant = 0;
  for (int layer = 0; layer < LAYER_COUNT; layer++) {
    scores[layer] = -1.0;
    if (weights[layer] < 0.004) continue;
    float scale = materialScale(layer);
    texels[layer] = textureGrad(uAlbedoAtlas, atlasUv(layer, uv * scale), dx * scale, dy * scale);
    if (layer == ROCK_LAYER) {
      texels[layer] = sampleRockTriplanar(world, geometryNormal, texels[layer], worldDx, worldDy);
    }
    float noise = macro.breakup[layer & 3] * 0.55 + macro.grain[(layer + 1) & 3] * 0.45;
    float breakup = layer < 4 ? noise : 1.0 - noise;
    float relief = texels[layer].a * 0.55 + (breakup - 0.5) * 0.8;
    scores[layer] = weights[layer] + relief * min(1.0, weights[layer] * 3.0);
    if (scores[layer] > best) dominant = layer;
    best = max(best, scores[layer]);
  }
  vec3 meadow = meadowTint(macro, canopy);
  vec3 snow = snowTint(macro, xz, geometryNormal);
  float winter = weights[FOREST_LAYER] > 0.004 ? getSnowMap(xz) : 0.0;
  vec3 albedo = vec3(0.0);
  vec4 surface = vec4(0.0);
  float total = 0.0;
  float snowShare = 0.0;
  float mineShare = 0.0;
  for (int layer = 0; layer < LAYER_COUNT; layer++) {
    float contribution = max(scores[layer] - (best - BLEND_DEPTH), 0.0);
    if (contribution <= 0.0) continue;
    float scale = materialScale(layer);
    vec4 normalSample = textureGrad(uNormalAtlas, atlasUv(layer, uv * scale), dx * scale, dy * scale);
    vec3 layerAlbedo = getLayerAlbedo(layer, texels[layer].rgb, canopy, meadow, snow, winter);
    albedo += layerAlbedo * contribution;
    surface += vec4(normalSample.rg * 2.0 - 1.0, normalSample.ba) * contribution;
    total += contribution;
    if (layer == SNOW_LAYER) snowShare = contribution;
    if (layer == MINE_LAYER) mineShare = contribution;
  }
  albedo /= total;
  mineShare /= total;
  albedo *= getOreStain(ore, mineShare, weightsC.z, macro.patches.y);
  surface /= total;
  float near = 1.0 - smoothstep(0.005, 0.011, footprint);
  if (near > 0.0) {
    float scale = materialScale(dominant);
    vec3 detail = sampleDetailNormal(dominant, uv * scale, dx * scale, dy * scale);
    surface.xy += detail.xy * 0.6 * near;
    surface.z *= mix(1.0, detail.z, 0.35 * near);
  }
  albedo *= mix(0.9, 1.08, macro.region.w);
  float bumpStrength = mix(0.95, 0.6, macro.far);
  vec3 normal = normalize(geometryNormal + vec3(surface.x, 0.0, surface.y) * bumpStrength);
  return GroundSample(
    albedo, normal, surface.z, surface.w, snowShare / total, mineShare, ore, weightsC.z
  );
}

/** Quality: sparse cold glints on the snow that shift as the view turns. */
vec3 getSnowSparkle(GroundSample ground, vec2 xz, float visibility) {
#ifdef SNOW_SPARKLE
  if (ground.snow <= 0.05) return vec3(0.0);
  vec2 cell = floor(xz * 26.0);
  float seed = fract(sin(dot(cell, vec2(12.9898, 78.233))) * 43758.5453);
  float facing = valueNoise(xz * 3.1 + uViewDirection.xz * 9.0);
  float glint = step(0.993, seed) * smoothstep(0.55, 0.8, facing);
  return uSunColor * glint * ground.snow * visibility * 0.9;
#else
  return vec3(0.0);
#endif
}

/** Snow sparkle (Quality) and the mine glints. */
vec3 getGroundSparkle(GroundSample ground, vec2 xz, float visibility) {
  return getSnowSparkle(ground, xz, visibility) + getMineGlint(
    ground.mine, ground.ore, ground.oreAmount, xz, visibility
  );
}
${v}
`,S=[`weightsA.x`,`weightsA.y`,`weightsA.z`,`weightsA.w`,`weightsB.x`,`weightsB.y`,`weightsB.z`,`weightsB.w`,`weightsC.x`],C=[`x`,`y`,`z`,`w`],w=2,T=2,E=6,D=4,O=e=>e<w?`meadow`:e===T?`forest`:e===E?`LITE_SNOW_TONE`:`vec3(1.0)`,k=e=>{let t=`macro.breakup.${C[e%4]} * 0.55 + macro.grain.${C[(e+1)%4]} * 0.45`;return e<D?t:`1.0 - (${t})`},A={full:x,lite:`
${g}

const vec3 LITE_SNOW_TONE = vec3(0.8, 0.82, 0.86);
/** Soft max sharpness: a 0.12 lower score gets ~1/7 of the weight (full ground: a cut-off). */
const float LITE_BLEND_SHARPNESS = 24.0;

struct GroundSample {
  vec3 albedo;
  vec3 normal;
  float occlusion;
  float roughness;
};

${_}

void addLiteLayer(
  inout vec3 albedo, inout vec4 surface, inout float total, float weight, vec2 cell, float scale,
  vec2 uv, vec2 dx, vec2 dy, vec3 tint, float breakup
) {
  if (weight < 0.004) return;
  vec2 layerUv = atlasCellUv(cell, uv * scale);
  vec4 texel = textureGrad(uAlbedoAtlas, layerUv, dx * scale, dy * scale);
  vec4 normalSample = textureGrad(uNormalAtlas, layerUv, dx * scale, dy * scale);
  float relief = texel.a * 0.55 + (breakup - 0.5) * 0.8;
  float score = weight + relief * min(1.0, weight * 3.0);
  float share = exp2((score - 1.2) * LITE_BLEND_SHARPNESS);
  albedo += texel.rgb * tint * share;
  surface += vec4(normalSample.rg * 2.0 - 1.0, normalSample.ba) * share;
  total += share;
}

GroundSample sampleGround(
  vec3 world, vec4 weightsA, vec4 weightsB, vec4 weightsC, vec3 geometryNormal, float canopy
) {
  vec2 xz = world.xz;
  vec2 worldDx = dFdx(xz);
  vec2 worldDy = dFdy(xz);
  GroundMacro macro = sampleGroundMacro(xz, max(length(worldDx), length(worldDy)));
  vec2 uv = xz + (macro.patches.xy - 0.5) * 3.0;
  vec2 dx = worldDx * ATLAS_INNER / ATLAS_GRID;
  vec2 dy = worldDy * ATLAS_INNER / ATLAS_GRID;
  vec3 meadow = meadowTint(macro, canopy);
  vec3 forest = vec3(mix(1.0, 0.82, canopy));
  vec3 albedo = vec3(0.0);
  vec4 surface = vec4(0.0);
  float total = 0.0;
${m.map((e,t)=>{let{column:n,row:r}=h(t);return`  addLiteLayer(albedo, surface, total, ${S[t]}, vec2(${n.toFixed(1)}, ${r.toFixed(1)}), ${(1/e).toFixed(6)},\n    uv, dx, dy, ${O(t)}, ${k(t)});`}).join(`
`)}
  float norm = 1.0 / max(total, 1e-30);
  albedo *= norm * mix(0.9, 1.08, macro.region.w);
  surface *= norm;
  float bumpStrength = mix(0.95, 0.6, macro.far);
  vec3 normal = normalize(geometryNormal + vec3(surface.x, 0.0, surface.y) * bumpStrength);
  return GroundSample(albedo, normal, surface.z, surface.w);
}

vec3 getGroundSparkle(GroundSample ground, vec2 xz, float visibility) {
  return vec3(0.0);
}
${v}
`},j=`
const vec3 WATER_ABSORPTION = vec3(0.5, 0.1, 0.075);
const vec3 WATER_SCATTER_SHALLOW = vec3(0.1, 0.56, 0.58);
const vec3 WATER_SCATTER_DEEP = vec3(0.025, 0.15, 0.31);
const vec3 FOAM_COLOR = vec3(0.94, 0.97, 1.0);
const vec3 GLINT_TINT = vec3(1.0, 0.9, 0.72);
const vec3 WEED_TINT = vec3(0.38, 0.58, 0.26);

uniform sampler2D uWaterNormals;

/** Raindrop rings: one drop per small cell, an expanding ring that fades, random timing. */
vec2 rainRings(vec2 p, float time) {
  vec2 scaled = p * 1.6;
  vec2 cell = floor(scaled);
  float seed = texture(uNoiseTexture, (cell + 0.5) / 211.0).g;
  vec2 offset = fract(scaled) - 0.5 - (vec2(seed, fract(seed * 7.3)) - 0.5) * 0.5;
  float age = fract(time * 0.8 + seed * 9.0);
  float distance = length(offset);
  float ring = sin((distance - age * 0.45) * 55.0) * smoothstep(0.06, 0.0, abs(distance - age * 0.45));
  return offset / max(distance, 0.001) * ring * (1.0 - age) * 0.9;
}

/** Surface slope: two scrolling tileable ripple normal maps plus two analytic swells. */
vec2 rippleSlope(vec2 p, float time) {
  vec2 a = texture(uWaterNormals, p * 0.11 + vec2(time * 0.010, time * 0.006)).rg * 2.0 - 1.0;
  vec2 b = texture(uWaterNormals, p * 0.23 - vec2(time * 0.014, -time * 0.009)).ba * 2.0 - 1.0;
  float swellA = cos(dot(p, vec2(0.55, 0.83)) * 0.7 + time * 0.9) * 0.32;
  float swellB = cos(dot(p, vec2(-0.71, 0.45)) * 1.1 + time * 1.2) * 0.27;
  vec2 swell = vec2(0.55, 0.83) * swellA + vec2(-0.71, 0.45) * swellB;
  vec2 rain = uRain > 0.01 ? rainRings(p, time) * uRain : vec2(0.0);
  return (a + b * 0.6) * (0.22 + uRain * 0.12) + swell * 0.05 + rain;
}

/** Water normal; rivers advect the ripples along the flow (two phase flow map). */
vec3 waterNormal(vec2 xz, vec2 flow, float time) {
  vec2 offsetA = vec2(0.0);
  vec2 offsetB = vec2(0.0);
  float mixB = 0.0;
  if (length(flow) > 0.01) {
    float phaseA = fract(time * 0.4);
    float phaseB = fract(time * 0.4 + 0.5);
    offsetA = flow * phaseA * 2.0;
    offsetB = flow * phaseB * 2.0;
    mixB = abs(phaseA - 0.5) * 2.0;
  }
  vec2 slope = mix(rippleSlope(xz - offsetA, time), rippleSlope(xz - offsetB + 13.7, time), mixB);
  return normalize(vec3(slope.x, 1.0, slope.y));
}

/** Bright wavy light lines on the shallow seabed. */
float caustics(vec2 xz, float time) {
  vec2 q = xz * 0.85;
  float light = 0.0;
  for (int layer = 0; layer < 2; layer++) {
    vec2 warp = vec2(valueNoise(q + time * 0.3), valueNoise(q.yx - time * 0.25 + 7.0));
    float value = valueNoise(q * 2.2 + warp * 2.0);
    light += pow(1.0 - abs(value * 2.0 - 1.0), 7.0);
    q = q * 1.7 + 3.1;
  }
  return light * 0.6;
}

/** Ground near and under water: wet sand at the waterline, caustics on the shallow bed. */
vec3 waterlineGround(vec3 lit, float signedDepth, vec2 xz, float time) {
  float runUp = 0.12 + 0.1 * sin(time * 1.3 + dot(xz, vec2(0.3, 0.2)));
  float wet = smoothstep(-0.45 - runUp, -0.02, signedDepth);
  lit *= mix(1.0, 0.68, wet);
  float depth = max(signedDepth, 0.0);
  float shallow = exp(-depth * 0.9) * smoothstep(0.0, 0.12, depth);
  return lit + caustics(xz, time) * uSunColor * 0.32 * shallow * cloudShadow(xz);
}

/** Glints only for a low sun (dawn, dusk): none below the horizon, none in daylight. */
float glintSunWeight() {
  float height = uSunDirection.y;
  return smoothstep(0.02, 0.1, height) * (1.0 - smoothstep(0.22, 0.42, height));
}

/** Low sun glints on the ripples; the peak rolls off to a warm tint instead of clipping to white. */
vec3 sunGlint(vec2 xz, vec3 normal, float clouds) {
  float weight = glintSunWeight();
  if (weight <= 0.0) return vec3(0.0);
  float alignment = max(dot(normal, normalize(uSunDirection + uViewDirection)), 0.0);
  float glint = pow(alignment, 220.0) * 2.2 * weight * clouds;
  return uSunColor * GLINT_TINT * (0.8 * glint / (0.4 + glint));
}

float shoreFoam(vec2 xz, float coast, float depth, float time, float sea) {
  float noise = valueNoise(xz * 0.35);
  float band = sin(coast * 1.6 - time * 1.3 + noise * 5.0);
  float bands = smoothstep(0.88, 0.99, band) * smoothstep(-5.0, -1.0, coast) * sea * 0.5;
  float edge = 1.0 - smoothstep(0.02, 0.18, depth);
  float breakup = smoothstep(0.3, 0.75, valueNoise(xz * 2.2 + time * 0.25)) * 0.7 + 0.3;
  return clamp((bands * 0.7 + edge * 0.85) * breakup, 0.0, 1.0);
}

/**
 * Underwater weed beds on the seabed of calm fresh water: dark green clumps streaked along the
 * current, the streaks swaying with it. Pixi's whole weed (no geometry); Three lays it softer
 * under its real strands (strength).
 */
vec3 weedBed(vec3 bed, vec2 xz, float plants, float depth, vec2 flow, float time, float strength) {
  float grow = smoothstep(0.35, 0.75, plants) * smoothstep(0.16, 0.32, depth);
  if (grow <= 0.0) return bed;
  vec2 along = length(flow) > 0.01 ? normalize(flow) : vec2(0.8, 0.6);
  vec2 local = vec2(dot(xz, along), dot(xz, vec2(-along.y, along.x)));
  float sway = sin(time * 1.3 + local.x * 1.7) * 0.08;
  float clumps = smoothstep(0.42, 0.66, valueNoise(xz * 1.2 + 11.0));
  float strands = valueNoise(vec2(local.x * 2.0 - time * 0.2, (local.y + sway) * 11.0));
  float weed = clumps * grow * (0.5 + 0.5 * strands) * strength;
  return mix(bed, bed * WEED_TINT, weed);
}

/** Water over a seabed: final colour = color + bed * transmit (linear in the bed colour). */
struct WaterLayer {
  vec3 color;
  vec3 transmit;
};

/**
 * The water without its seabed: absorption of the bed by depth (red first, so shallows turn
 * turquoise), in-scattered water colour, sky reflection, glints and foam. Three without
 * refraction blends it over the seabed already drawn.
 */
WaterLayer shadeWaterLayer(vec2 xz, float signedDepth, float coast, vec2 flow, float time, vec3 normal) {
  float depth = max(signedDepth, 0.0);
  vec3 lightTint = uSunColor * 0.6 + uAmbientSky * 0.6;
  vec3 scatter = mix(WATER_SCATTER_SHALLOW, WATER_SCATTER_DEEP, smoothstep(1.0, 5.5, depth)) * lightTint;
  float clouds = cloudShadow(xz);
  float light = (0.65 + 0.45 * max(dot(normal, uSunDirection), 0.0)) * clouds;
  float scattered = 1.0 - exp(-depth * 0.4);
  vec3 color = scatter * light * scattered;
  vec3 transmit = exp(-depth * WATER_ABSORPTION) * (1.0 - scattered);
  float facing = 1.0 - max(dot(normal, uViewDirection), 0.0);
  color += uAmbientSky * facing * facing * 0.22 + sunGlint(xz, normal, clouds);
  float speed = length(flow);
  float riverFoam = smoothstep(1.1, 2.2, speed) * smoothstep(0.45, 0.8, valueNoise((xz - flow * time) * 2.2));
  float sea = 1.0 - smoothstep(0.02, 0.2, speed);
  float foam = max(shoreFoam(xz, coast, depth, time, sea), riverFoam) * smoothstep(0.0, 0.03, depth);
  float foamCover = foam * 0.8;
  color = mix(color, FOAM_COLOR * lightTint * (0.75 + 0.25 * light), foamCover);
  transmit *= 1.0 - foamCover;
  float surface = smoothstep(0.0, 0.04, depth);
  return WaterLayer(color * surface, transmit * surface + (1.0 - surface));
}

/** Final water colour over the given seabed colour. */
vec3 shadeWater(vec2 xz, float signedDepth, float coast, vec2 flow, float time, vec3 normal, vec3 bed) {
  WaterLayer water = shadeWaterLayer(xz, signedDepth, coast, flow, time, normal);
  return water.color + bed * water.transmit;
}
`,M=`
uniform sampler2D uWaterField;

/** Seabed colour of the open sea outside the map (there is no ground mesh there). */
const vec3 OPEN_SEA_BED = vec3(0.03, 0.09, 0.13);

/** The seabed under the water fades to the open sea bed at the border: in and out match. */
vec3 blendOpenSeaBed(vec3 bed, vec2 xz) {
  return mix(OPEN_SEA_BED, bed, getMapInterior(xz));
}

/**
 * x: signed water depth, y: coast distance (negative in water), z: fog visibility, w: water
 * plants (calm fresh water stillness).
 */
vec4 sampleWaterField(vec2 xz) {
  vec4 texel = texture(uWaterField, xz / uWorldSize);
  return vec4(
    texel.r * ${7 .toFixed(1)} + ${(-1).toFixed(1)},
    (texel.g - 0.5) * ${16 .toFixed(1)},
    texel.b,
    texel.a
  );
}
`;export{d as a,l as c,c as i,a as l,j as n,f as o,A as r,u as s,M as t,s as u};