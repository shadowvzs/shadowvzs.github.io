import{at as e,it as t}from"./periodic-noise-DIDp6cIr.js";import{c as n}from"./island-rocks-B5FTjqjs.js";import{D as r,E as i,Jt as a,Wt as o,c as s,nt as c,s as l}from"./three.module-D3z5eOsJ.js";import{a as u,c as d,i as f,o as p,s as m}from"./water-field-DDamrZtA.js";import{n as h,r as g,t as _}from"./rock-glsl-DjCSAbKF.js";import{c as v,t as y}from"./three-materials-BQPOOZo1.js";import{a as b,i as x,o as S,r as C,s as w}from"./animal-silhouette-DnTRNxRh.js";import{c as T,l as E,s as D}from"./three-props-BGeA5ORg.js";import{t as O}from"./rock-mesh-registry-Bw_GCYTy.js";var k=`
${E}
const float BIRCH_FAMILY_START = ${(2+t.birch*8).toFixed(1)};
const float BIRCH_DEPTH = 0.012;

bool isBirchBark(vec2 uv) {
  float offset = -uv.x - BIRCH_FAMILY_START;
  return offset >= 0.0 && offset < ${8 .toFixed(1)};
}

vec3 lightBirchBark(vec3 base, vec3 normal, vec2 uv, vec3 world, float sunVisibility) {
  vec2 bark = vec2(-uv.x - BIRCH_FAMILY_START, uv.y);
  vec4 surface = birchBark(base, bark, birchLower(bark));
  float depth = surface.a * BIRCH_DEPTH * barkScale(bark, world);
  vec3 bumped = perturbBarkNormal(normal, world, depth);
  float cavity = mix(0.8, 1.0, clamp(surface.a, 0.0, 1.0));
  vec3 bounce = surface.rgb * (uAmbientSky + uAmbientGround) * 0.1;
  return lightSurface(surface.rgb, bumped, sunVisibility, cavity, world.xz) + bounce;
}
`,A=e=>e.toFixed(1),j=`
${D}
const float CONIFER_FAMILY_FIRST = ${A(t.spruce)};
const float CONIFER_FAMILY_LAST = ${A(t.mountainPine)};
const float BARK_STRIDE = ${A(8)};

float getBarkFamily(vec2 uv) {
  return floor((-uv.x - BARK_UV_OFFSET) / BARK_STRIDE);
}

bool isConiferBark(vec2 uv) {
  float family = getBarkFamily(uv);
  return uv.x < BARK_UV_LIMIT && family >= CONIFER_FAMILY_FIRST && family <= CONIFER_FAMILY_LAST;
}

vec3 lightConiferBark(vec3 base, vec3 normal, vec2 uv, vec3 world, float sunVisibility) {
  float family = getBarkFamily(uv);
  vec2 bark = vec2(-uv.x - BARK_UV_OFFSET - family * BARK_STRIDE, uv.y);
  vec4 surface = coniferBark(base, bark, family);
  float depth = coniferBarkDepth(base, family);
  vec3 bumped = perturbBarkNormal(normal, world, surface.a * depth * barkScale(bark, world));
  float north = smoothstep(0.0, 0.7, -normal.z);
  float lichen = smoothstep(0.55, 0.75, coniferWrapNoise(bark, 3.0, 20.0)) * north * 0.25;
  vec3 albedo = mix(surface.rgb, LICHEN * dot(base, vec3(0.333)) * 2.0, lichen);
  float cavity = mix(0.7, 1.0, smoothstep(0.0, 0.35, surface.a));
  vec3 bounce = albedo * (uAmbientSky + uAmbientGround) * 0.12;
  return lightSurface(albedo, bumped, sunVisibility, cavity, world.xz) + bounce;
}
`,M=e=>e.toFixed(1),N=`
const float PALM_RINGED = ${M(t.palmRinged)};
const float PALM_LEAF_BASE = ${M(t.palmLeafBase)};
const float PALM_FIBROUS = ${M(t.palmFibrous)};
const float PALM_DEPTH = 0.015;
/** Lift so the trunks match the Pixi bake (thin vertical trunks get little sun in the iso view). */
const float PALM_LIFT = 1.3;

bool isPalmBark(vec2 uv) {
  float family = getBarkFamily(uv);
  return uv.x < BARK_UV_LIMIT && family >= PALM_RINGED && family <= PALM_FIBROUS;
}

/** Fades a pattern to its mean before it would alias (x: pattern coordinate). */
float palmDetail(float x) {
  return 1.0 - smoothstep(0.25, 0.6, fwidth(x));
}

/** Coconut: irregular leaf scar rings (grooves) and faint vertical fissures between them. */
float palmRings(vec2 bark) {
  float rings = bark.y * 1.7 + barkNoise(bark, 0.7, 5.0) * 0.4;
  float groove = 1.0 - smoothstep(0.02, 0.09, abs(fract(rings) - 0.5) - 0.38);
  float wander = bark.x * 11.0 + barkNoise(bark, 2.0, 9.0);
  float fissure = smoothstep(0.88, 1.0, abs(sin(wander * 3.1416)));
  float band = barkHash(floor(rings)) * 0.12;
  float height = 1.0 - groove * 0.75 - fissure * 0.2 - band;
  return mix(0.8, height, palmDetail(rings));
}

/** Date palm: staggered rows of diamond shaped cut leaf bases with dark gaps. */
float palmLeafBases(vec2 bark) {
  vec2 grid = vec2(bark.x * 7.0, bark.y * 2.4 + barkNoise(bark, 1.0, 13.0) * 0.2);
  grid.x += mod(floor(grid.y), 2.0) * 0.5;
  vec2 cell = fract(grid) - 0.5;
  float diamond = abs(cell.x) * 1.1 + abs(cell.y);
  float tilt = barkHash(dot(floor(grid), vec2(1.0, 17.0)));
  float scale = smoothstep(0.55, 0.3, diamond) * (0.85 + tilt * 0.15);
  float lip = smoothstep(0.1, -0.2, cell.y) * 0.15;
  return mix(0.6, scale - lip, palmDetail(grid.y));
}

/** Fan palm: long vertical fibres (noise wrapped around the trunk) with faint rings. */
float palmFibres(vec2 bark) {
  vec2 around = vec2(cos(bark.x * 6.2832), sin(bark.x * 6.2832));
  float fine = valueNoise(around * 7.6 + vec2(0.0, bark.y * 2.5));
  float fibres = fine * 0.7 + valueNoise(around * 2.7 + vec2(5.0, bark.y)) * 0.3;
  float rings = 1.0 - smoothstep(0.0, 0.12, abs(fract(bark.y * 0.9) - 0.5) - 0.36) * 0.4;
  return mix(0.65, fibres * rings, palmDetail(bark.x * 48.0));
}

float palmBarkHeight(vec2 bark, float family) {
  if (family == PALM_RINGED) return palmRings(bark);
  if (family == PALM_LEAF_BASE) return palmLeafBases(bark);
  return palmFibres(bark);
}

vec3 lightPalmBark(vec3 base, vec3 normal, vec2 uv, vec3 world, float sunVisibility) {
  float family = getBarkFamily(uv);
  vec2 bark = vec2(-uv.x - BARK_UV_OFFSET - family * BARK_STRIDE, uv.y);
  float height = palmBarkHeight(bark, family);
  vec3 bumped = perturbBarkNormal(normal, world, height * PALM_DEPTH * barkScale(bark, world));
  float grain = 0.94 + barkNoise(bark, 4.0, 31.0) * 0.12;
  vec3 albedo = base * mix(0.88, 1.12, height) * grain * PALM_LIFT;
  float cavity = mix(0.9, 1.0, smoothstep(0.0, 0.5, height));
  vec3 bounce = albedo * (uAmbientSky + uAmbientGround) * 0.25;
  return lightSurface(albedo, bumped, sunVisibility, cavity, world.xz) + bounce;
}
`,P=`
const float BARK_UV_LIMIT = ${e.toFixed(2)};
const float BARK_UV_OFFSET = ${2 .toFixed(2)};
/** Plates around a limb, cracks per circumference along it, relief depth (circumferences). */
const float BARK_PLATES = 8.0;
const float BARK_CRACKS = 6.0;
const float BARK_DEPTH = 0.03;
/** Relief where the pattern fades out with distance (the averaged surface). */
const float BARK_MEAN_HEIGHT = 0.7;
const vec3 LICHEN = vec3(0.4, 0.45, 0.33);
/** Leaf atlas normal map (tangent space, green = +v) and how far it tilts the crown normal. */
uniform sampler2D uLeafNormals;
const float LEAF_RELIEF = 1.0;

bool isBark(vec2 uv) {
  return uv.x < BARK_UV_LIMIT;
}

/** around (0..1, plus twist) and along (circumferences) the limb. */
vec2 toBark(vec2 uv) {
  return vec2(-uv.x - BARK_UV_OFFSET, uv.y);
}

/** Noise lookup that wraps seamlessly around the limb. */
float barkNoise(vec2 bark, float scale, float offset) {
  float angle = bark.x * 6.2831853;
  return valueNoise(vec2(cos(angle), sin(angle)) * scale + vec2(bark.y * scale * 1.9, offset));
}

float barkHash(float value) {
  return fract(sin(value * 127.1 + 31.7) * 43758.5453);
}

/** Distance (in plate widths) to the nearest line of a warped set of furrow lines. */
float lineDistance(float x) {
  return abs(fract(x + 0.5) - 0.5);
}

/**
 * Oak bark plates: two wandering sets of mostly vertical furrows, the second only in places,
 * so the furrows braid, merge and split (a network, not a grid); each plate is broken into
 * stacked blocks by short cross cracks. x: height (0 furrow bottom .. 1 rounded plate top),
 * y: detail (1 close .. 0 faded to the averaged surface before it would alias).
 */
vec2 barkPlates(vec2 bark) {
  float warpA = barkNoise(bark, 0.8, 3.1) * 0.9 + barkNoise(bark, 2.0, 7.0) * 0.3;
  float warpB = barkNoise(bark, 1.1, 11.0) * 1.8;
  float xA = bark.x * BARK_PLATES + warpA;
  float xB = bark.x * BARK_PLATES + 0.5 + warpB;
  float present = smoothstep(0.45, 0.6, barkNoise(bark, 1.6, 17.0));
  float distance = min(lineDistance(xA), lineDistance(xB) + (1.0 - present) * 0.5);
  float plate = smoothstep(0.05, 0.17, distance);
  float rounded = mix(0.8, 1.0, sqrt(clamp(distance / 0.35, 0.0, 1.0)));
  float column = floor(xA);
  float along = bark.y * BARK_CRACKS + barkHash(column) + barkNoise(bark, 3.0, 23.0) * 0.35;
  float crackDistance = abs(fract(along + 0.5) - 0.5);
  float crackOn = step(0.25, barkHash(column + floor(along) * 7.3));
  float crack = (1.0 - smoothstep(0.03, 0.1, crackDistance)) * crackOn;
  float height = plate * rounded * (1.0 - crack * 0.6);
  float detail = 1.0 - smoothstep(0.22, 0.55, fwidth(xA));
  return vec2(mix(BARK_MEAN_HEIGHT, height, detail), detail);
}

/** Ash grey plate tops, rust brown plate sides, dark brown (never black) furrow bottoms. */
vec3 barkAlbedo(vec3 base, float height, float detail, float weathering) {
  vec3 grey = vec3(dot(base, vec3(0.333)));
  vec3 top = mix(base, grey * vec3(1.12, 1.1, 1.03), 0.4) * (0.82 + weathering * 0.3);
  vec3 side = base * vec3(0.9, 0.64, 0.46);
  vec3 bottom = base * vec3(0.34, 0.29, 0.26);
  vec3 plate = mix(side, top, smoothstep(0.72, 0.92, height));
  vec3 albedo = mix(plate, bottom, 1.0 - smoothstep(0.1, 0.4, height));
  vec3 mean = mix(side, top, 0.55) * 0.9;
  return mix(mean, albedo, detail);
}

${T}

/** Plate bark with a strong bump, cavity darkening only in the furrows; before fog of war. */
vec3 lightBark(vec3 base, vec3 normal, vec2 uv, vec3 world, float sunVisibility) {
  vec2 bark = toBark(uv);
  vec2 plates = barkPlates(bark);
  float height = plates.x;
  vec3 bumped = perturbBarkNormal(normal, world, height * BARK_DEPTH * barkScale(bark, world));
  vec3 albedo = barkAlbedo(base, height, plates.y, barkNoise(bark, 5.0, 29.0));
  float north = smoothstep(0.0, 0.7, -normal.z);
  float patches = smoothstep(0.5, 0.72, barkNoise(bark, 3.0, 20.0));
  float tops = smoothstep(0.7, 0.95, height);
  albedo = mix(albedo, LICHEN * dot(base, vec3(0.333)) * 2.0, north * patches * tops * 0.3);
  float cavity = mix(0.6, 1.0, smoothstep(0.0, 0.3, height));
  vec3 bounce = albedo * (uAmbientSky + uAmbientGround) * 0.12;
  return lightSurface(albedo, bumped, sunVisibility, cavity, world.xz) + bounce;
}

/**
 * Leaf cards seen edge-on show as thin streaks in close views: they fade out (coverage) by the
 * angle between the card plane (from screen derivatives: the stored normal leans to the crown
 * outward) and the view, while cards facing the camera keep full coverage.
 */
float getCardFacing(vec3 world) {
  vec3 plane = normalize(cross(dFdx(world), dFdy(world)));
  return smoothstep(0.06, 0.28, abs(dot(plane, uViewDirection)));
}

/**
 * Per leaf relief: the atlas normal map (one sample) in the card's u / v directions, taken from
 * screen derivatives (no tangent attribute), tilts the crown normal, so every painted leaf
 * catches the sun on its own while the crown keeps its soft volume light.
 */
vec3 perturbLeafNormal(vec3 normal, vec3 world, vec2 uv) {
  vec3 q0 = dFdx(world);
  vec3 q1 = dFdy(world);
  vec2 st0 = dFdx(uv);
  vec2 st1 = dFdy(uv);
  vec3 plane = cross(q0, q1);
  vec3 q1Perp = cross(q1, plane);
  vec3 q0Perp = cross(plane, q0);
  vec3 tangent = q1Perp * st0.x + q0Perp * st1.x;
  vec3 bitangent = q1Perp * st0.y + q0Perp * st1.y;
  float frame = max(dot(tangent, tangent), dot(bitangent, bitangent));
  if (frame <= 0.0) return normal;
  vec3 relief = texture(uLeafNormals, uv).xyz * 2.0 - 1.0;
  vec3 slope = (tangent * relief.x + bitangent * relief.y) * inversesqrt(frame);
  return normalize(normal * relief.z + slope * LEAF_RELIEF);
}

/**
 * Leaves: sun light through the blade when it shines from behind them (strongest when the camera
 * looks towards the sun), and a soft waxy sheen towards the viewer.
 */
vec3 lightLeaf(vec3 albedo, vec3 normal, float sunVisibility, vec2 xz) {
  float facingSun = max(-dot(uViewDirection, uSunDirection), 0.0);
  float through = max(dot(-normal, uSunDirection), 0.0) * (0.25 + pow(facingSun, 2.0) * 0.75)
    * getBackLightWeight();
  vec3 glow = albedo * vec3(1.1, 1.25, 0.5) * through * 0.5;
  float sheen = pow(max(dot(normal, normalize(uSunDirection + uViewDirection)), 0.0), 24.0);
  vec3 extra = (glow + vec3(0.9, 1.0, 0.82) * sheen * 0.05) * uSunColor * sunVisibility;
  return lightProp(albedo, normal, sunVisibility, xz) + extra;
}
`,F=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec3 color;
in vec2 wind;
in vec2 uv;
in mat4 instanceMatrix;
in vec4 instanceData;
in vec3 instanceTint;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uGrassFade;
uniform float uIsGrass;
${f}
${d}
${w}
#ifdef PROP_CHOP
in vec4 instanceChop;
${x}
#endif
out vec3 vWorld;
out vec3 vNormal;
out vec3 vColor;
out vec3 vInstance;
out vec2 vUv;

void main() {
  if (instanceData.w > 0.5) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  vUv = uv;
  float phase = instanceData.x;
  float fade = mix(1.0, uGrassFade, uIsGrass);
  vec3 sway = flutterOffset(position, phase, uTime) * wind.y + branchSway(position, phase, uTime) * wind.x;
  vec3 local = (position + sway) * vec3(1.0, fade, 1.0);
  vec3 localNormal = normal;
  float standing = 1.0;
#ifdef PROP_CHOP
  vec3 fall = vec3(cos(instanceChop.z), 0.0, sin(instanceChop.z));
  vec3 fallDirection = normalize(transpose(mat3(instanceMatrix)) * fall);
  local = chopPropPosition(local, wind, instanceChop, fallDirection, uTime);
  localNormal = chopPropNormal(normal, instanceChop, fallDirection);
  standing = 1.0 - instanceChop.y;
#endif
  vec4 world = instanceMatrix * vec4(local, 1.0);
  float scale = length(instanceMatrix[0].xyz);
  world.xz += windDisplacement(instanceMatrix[3].xz, phase, uTime) * wind.x * scale * standing;
  vWorld = world.xyz;
  vNormal = normalize(mat3(instanceMatrix) * localNormal);
  vColor = color * instanceTint;
  vInstance = instanceData.yzw;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,I=`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vColor;
in vec3 vInstance;
in vec2 vUv;
out vec4 fragColor;
${f}
${d}
${m}
${u}
${S}
${b}
${v}
${C}
${p}
${P}
${k}
${j}
${N}
#ifdef WINTER
${n}
#endif

/** Bark relief on tree wood, leaf light on atlas cards, the plain prop light elsewhere. */
vec3 lightPropSurface(vec3 albedo, vec3 normal, float sunVisibility) {
  if (isBirchBark(vUv)) return lightBirchBark(albedo, normal, vUv, vWorld, sunVisibility);
  if (isConiferBark(vUv)) return lightConiferBark(albedo, normal, vUv, vWorld, sunVisibility);
  if (isPalmBark(vUv)) return lightPalmBark(albedo, normal, vUv, vWorld, sunVisibility);
  if (isBark(vUv)) return lightBark(albedo, normal, vUv, vWorld, sunVisibility);
  if (vUv.x >= 0.0) return lightLeaf(albedo, normal, sunVisibility, vWorld.xz);
  return lightProp(albedo, normal, sunVisibility, vWorld.xz);
}

void main() {
  if (isHiddenByFog(vInstance.y, vWorld.xz)) discard;
  vec4 leaf = sampleLeaf(vUv);
  float coverage = sharpenCoverage(leaf.a);
  vec3 albedo = vColor * leaf.rgb;
  vec3 normal = normalize(vNormal);
  if (vUv.x >= 0.0) {
    coverage *= getCardFacing(vWorld);
    normal = perturbLeafNormal(normal, vWorld, vUv);
  }
#ifdef WINTER
  float winter = getSnowMap(vWorld.xz);
  float kind = getFoliageKind(vUv);
  coverage *= keepWinterLeaf(kind, winter, vWorld);
  albedo = applyWinterTree(albedo, kind, winter, normal, vWorld);
#endif
  if (coverage < 0.02) discard;
  float sunVisibility = vInstance.x * sampleSunShadow(vWorld);
  vec3 lit = lightPropSurface(albedo, normal, sunVisibility);
  fragColor = vec4(gradeColor(applyFogOfWar(lit, vInstance.y, vWorld.xz)), coverage);
}
`,L=`
precision highp float;
in vec2 vUv;
in vec3 vInstance;
in vec3 vWorld;
out vec4 fragColor;
${f}
${d}
${C}
${b}
#ifdef WINTER
${n}
#endif
void main() {
  if (isHiddenByFog(vInstance.y, vWorld.xz) || sampleLeaf(vUv).a < 0.5) discard;
#ifdef WINTER
  if (keepWinterLeaf(getFoliageKind(vUv), getSnowMap(vWorld.xz), vWorld) < 0.5) discard;
#endif
  fragColor = vec4(1.0);
}
`,R=e=>!!(e.uSnowMap?.value)?.userData?.hasSnow,z=(e,t)=>({...e?{PROP_CHOP:``}:{},...t?{WINTER:``}:{}}),B=(e,t,n=!1)=>new o({alphaToCoverage:!0,defines:z(n,!t&&R(e)),fragmentShader:I,glslVersion:i,side:2,uniforms:{...e,uIsGrass:{value:+!!t}},vertexShader:F}),V=(e,t=!1)=>new o({defines:z(t,R(e)),fragmentShader:L,glslVersion:i,side:2,uniforms:{...e,uIsGrass:{value:0}},vertexShader:F}),H=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec4 rockMask;
in vec4 rockExtra;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
out vec3 vWorld;
out vec3 vNormal;
out vec4 vMask;
out vec4 vExtra;

void main() {
  vWorld = position;
  vNormal = normal;
  vMask = rockMask;
  vExtra = rockExtra;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,U=`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec4 vMask;
in vec4 vExtra;
out vec4 fragColor;
${f}
${d}
${m}
${u}
${b}
${v}
${g}
${_}

vec3 getRockSpecular(vec3 normal, float roughness, float sunVisibility) {
  vec3 halfway = normalize(uSunDirection + uViewDirection);
  float gloss = 1.0 - roughness;
  float highlight = pow(max(dot(normal, halfway), 0.0), mix(6.0, 40.0, gloss));
  return uSunColor * highlight * gloss * gloss * 0.6 * sunVisibility;
}

${h}

float sampleSoftRockShadow(vec3 world, vec3 normal) {
  vec3 base = world + normal * 0.08;
  vec3 side = normalize(cross(normal, abs(normal.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 other = cross(normal, side);
  float lit = sampleSunShadow(base);
  lit += sampleSunShadow(base + side * 0.14) + sampleSunShadow(base - side * 0.14);
  lit += sampleSunShadow(base + other * 0.14) + sampleSunShadow(base - other * 0.14);
  return lit / 5.0;
}

${p}

void main() {
  if (isHiddenByFog(vExtra.y, vWorld.xz)) discard;
  RockSurface rock = getRockDetailSurface(vWorld, normalize(vNormal), vMask, vExtra.z, vExtra.w);
  float sun = sampleSoftRockShadow(vWorld, normalize(vNormal));
  vec3 color = lightSurface(rock.albedo, rock.normal, sun, rock.occlusion, vWorld.xz)
    + getRockFill(rock.albedo, rock.normal, sun, rock.occlusion)
    + getRockSpecular(rock.normal, rock.roughness, sun) * rock.albedo;
  fragColor = vec4(gradeColor(applyFogOfWar(color, vExtra.y, vWorld.xz)), 1.0);
}
`,W=`
precision highp float;
in vec3 vWorld;
in vec4 vExtra;
out vec4 fragColor;
${f}
${d}
${b}
void main() {
  if (isHiddenByFog(vExtra.y, vWorld.xz)) discard;
  fragColor = vec4(1.0);
}
`,G=e=>{let t=new s;return t.setAttribute(`position`,new l(e.positions,3)),t.setAttribute(`normal`,new l(e.normals,3)),t.setAttribute(`rockMask`,new l(e.mask,4,!0)),t.setAttribute(`rockExtra`,new l(e.extra,4,!0)),t.setIndex(new l(e.indices,1)),t.computeBoundingSphere(),t},K=(e,t)=>{let n=y(e,t.width,t.height);return n.wrapS=a,n.wrapT=a,n},q=({chunks:e,count:t},n,a)=>{let s={...n,uRockNormal:{value:K(a.normal,a)},uRockTexture:{value:K(a.color,a)}},l=new o({fragmentShader:U,glslVersion:i,uniforms:s,vertexShader:H}),u=new o({fragmentShader:W,glslVersion:i,uniforms:s,vertexShader:H}),d=new r,f=new r,p=new r,m=new r;d.add(p),f.add(m);let h=O(e=>{e.removeFromParent(),e.geometry.dispose()}),g=0,_=({chunk:e,data:t,group:n,small:r})=>{let i=G(t),a=new c(i,l),o=new c(i,u);(r?p:d).add(a),(r?m:f).add(o),g+=t.triangles,h.add(e,n,a),h.add(e,n,o)};return e.forEach(_),{casters:f,count:t,group:d,replaceRockChunks:(e,t)=>{h.remove(e),t.forEach(_)},replaceStones:(e,t,n)=>{h.remove(t,e),n.forEach(_)},setSmallRocksVisible:e=>{p.visible=e,m.visible=e},triangles:g}};export{R as i,V as n,B as r,q as t};