import{it as e}from"./periodic-noise-DIDp6cIr.js";import{a as t}from"./prop-meshes-mzBwaOtM.js";import{M as n,P as r,T as i,c as a,gn as o,o as s,s as c,tt as l}from"./three.module-D3z5eOsJ.js";var u=`
/** Bump mapping from screen derivatives (no tangents needed on the instanced props). */
vec3 perturbBarkNormal(vec3 normal, vec3 world, float height) {
  vec3 dx = dFdx(world);
  vec3 dy = dFdy(world);
  vec3 r1 = cross(dy, normal);
  vec3 r2 = cross(normal, dx);
  float det = dot(dx, r1);
  vec3 gradient = sign(det) * (dFdx(height) * r1 + dFdy(height) * r2);
  return normalize(abs(det) * normal - gradient);
}

/** World size of one bark unit (the circumference): the mapping is about isotropic. */
float barkScale(vec2 bark, vec3 world) {
  float worldStep = length(dFdx(world)) + length(dFdy(world));
  float barkStep = length(dFdx(bark)) + length(dFdy(bark));
  return worldStep / max(barkStep, 1e-5);
}
`,d=`
const float BIRCH_MARK_ROWS = 3.1;
const float BIRCH_LENTICEL_ROWS = 13.0;
const vec3 BIRCH_MARK = vec3(0.12, 0.11, 0.1);
const vec3 BIRCH_MARK_BROWN = vec3(0.21, 0.17, 0.14);
const vec3 BIRCH_MOSS = vec3(0.2, 0.25, 0.12);

float birchHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float birchNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float bottom = mix(birchHash(cell), birchHash(cell + vec2(1.0, 0.0)), f.x);
  float top = mix(birchHash(cell + vec2(0.0, 1.0)), birchHash(cell + vec2(1.0, 1.0)), f.x);
  return mix(bottom, top, f.y);
}

/** Noise that wraps seamlessly around the limb (around enters as a circle). */
float birchWrapNoise(vec2 bark, vec2 scale, float offset) {
  float angle = bark.x * 6.2831853;
  vec2 ring = vec2(cos(angle), sin(angle)) * scale.x;
  return birchNoise(ring + vec2(bark.y * scale.y + offset, offset * 1.7));
}

/** Distance around the limb (0..0.5 of the circumference). */
float birchAround(float a, float b) {
  return abs(fract(a - b + 0.5) - 0.5);
}

/**
 * One family of horizontal marks: rows along the limb (warped, some empty), each a lens that
 * wraps part of the way around and thins towards its ends. widths: (smallest, extra range).
 */
float birchMarks(vec2 bark, float rows, float seed, vec2 widths, float thickness) {
  float along = bark.y * rows + birchWrapNoise(bark, vec2(1.2, 0.7), seed) * 0.35;
  float row = floor(along);
  float inRow = fract(along) - 0.5;
  float present = step(birchHash(vec2(row, seed + 3.7)), 0.62);
  float width = widths.x + widths.y * pow(birchHash(vec2(row, seed)), 3.0);
  float centre = birchHash(vec2(row, seed + 9.1));
  float reach = birchAround(bark.x, centre) / (width * 0.5);
  float edge = birchWrapNoise(bark, vec2(7.0, 9.0), row * 3.1 + seed);
  float lens = max(0.0, 1.0 - reach * reach);
  float halfThickness = thickness * (0.6 + birchHash(vec2(row, seed + 1.3)) * 0.8) * lens * (0.7 + edge * 0.6);
  return (1.0 - smoothstep(halfThickness * 0.6, halfThickness, abs(inRow))) * smoothstep(1.0, 0.75, reach) * present;
}

/** Rough base of a trunk: 1 at the foot, gone about two and a half circumferences up. */
float birchLower(vec2 bark) {
  return 1.0 - smoothstep(0.4, 2.6, bark.y + (birchWrapNoise(bark, vec2(1.5, 1.0), 61.0) - 0.5) * 0.8);
}

/** Vertical fissures of old lower bark (wavy, merging). */
float birchFissures(vec2 bark) {
  float x = bark.x * 14.0 + birchWrapNoise(bark, vec2(1.6, 4.0), 71.0) * 1.2;
  float line = abs(fract(x) - 0.5);
  float broken = smoothstep(0.45, 0.7, birchWrapNoise(bark, vec2(3.0, 9.0), 83.0));
  return (1.0 - smoothstep(0.02, 0.07, line)) * broken;
}

vec4 birchBark(vec3 base, vec2 bark, float lower) {
  float markDetail = 1.0 - smoothstep(0.3, 0.8, fwidth(bark.y * BIRCH_MARK_ROWS));
  float fineDetail = 1.0 - smoothstep(0.25, 0.6, fwidth(bark.y * BIRCH_LENTICEL_ROWS));
  float marks = max(
    birchMarks(bark, BIRCH_MARK_ROWS, 1.0, vec2(0.15, 0.7), 0.12),
    birchMarks(bark, BIRCH_MARK_ROWS * 1.43, 5.0, vec2(0.15, 0.45), 0.09) * 0.85
  );
  float lenticels = birchMarks(bark, BIRCH_LENTICEL_ROWS, 11.0, vec2(0.03, 0.08), 0.08);
  marks = mix(0.12, marks, markDetail);
  lenticels = mix(0.05, lenticels, fineDetail);
  float peel = smoothstep(0.64, 0.72, birchWrapNoise(bark, vec2(2.5, 11.0), 23.0));
  float grey = smoothstep(0.55, 0.85, birchWrapNoise(bark, vec2(2.0, 1.6), 41.0));
  float patches = birchWrapNoise(bark, vec2(5.0, 6.0), 53.0);
  float fissures = birchFissures(bark) * lower * lower * fineDetail;
  vec3 pale = base * mix(vec3(1.0), vec3(1.04, 1.0, 0.92), peel * 0.6);
  pale = mix(pale, vec3(dot(pale, vec3(0.333))) * 0.84, grey * 0.35);
  vec3 rough = base * vec3(0.6, 0.57, 0.53) * (0.8 + patches * 0.3);
  vec3 albedo = mix(pale, rough, lower * (0.3 + patches * 0.3));
  albedo = mix(albedo, BIRCH_MOSS * (0.8 + patches * 0.4), pow(lower, 3.0) * smoothstep(0.55, 0.8, patches) * 0.4);
  vec3 mark = mix(BIRCH_MARK, BIRCH_MARK_BROWN, birchWrapNoise(bark, vec2(4.0, 6.0), 31.0));
  albedo = mix(albedo, mark, marks * 0.9);
  albedo = mix(albedo, BIRCH_MARK_BROWN * 1.3, lenticels * 0.55);
  albedo = mix(albedo, BIRCH_MARK, fissures * 0.6);
  float height = 1.0 - marks * 0.35 - lenticels * 0.25 - fissures * 0.8 + peel * 0.1 - lower * patches * 0.2;
  return vec4(albedo, height);
}
`,f=`
const float MOUNTAIN_FAMILY = ${(e=>e.toFixed(1))(e.mountainPine)};

float coniferHash(float value) {
  return fract(sin(value * 127.1 + 31.7) * 43758.5453);
}

float coniferNoise(vec2 p) {
  vec2 cell = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = coniferHash(dot(cell, vec2(1.0, 57.0)));
  float b = coniferHash(dot(cell + vec2(1.0, 0.0), vec2(1.0, 57.0)));
  float c = coniferHash(dot(cell + vec2(0.0, 1.0), vec2(1.0, 57.0)));
  float d = coniferHash(dot(cell + vec2(1.0, 1.0), vec2(1.0, 57.0)));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

/** Noise that wraps seamlessly around the limb (around enters as a circle). */
float coniferWrapNoise(vec2 bark, float scale, float offset) {
  float angle = bark.x * 6.2831853;
  return coniferNoise(vec2(cos(angle), sin(angle)) * scale + vec2(bark.y * scale * 1.9, offset));
}

/**
 * Scale pattern of one family: columns around, rows per circumference, furrow width, relief,
 * column warp and roundness (0 long plates with straight edges .. 1 rounded scales).
 */
struct ConiferScales {
  float columns;
  float depth;
  float furrow;
  float round;
  float rows;
  float warp;
};

const ConiferScales SPRUCE_SCALES = ConiferScales(13.0, 0.014, 0.12, 1.0, 9.0, 0.7);
const ConiferScales MOUNTAIN_BLOCKS = ConiferScales(9.0, 0.03, 0.2, 0.4, 4.0, 1.5);

/**
 * Bark scales: warped columns around the limb, each broken into staggered rows; x is the height
 * (0 furrow .. 1 scale top, the lower edge of each scale lifts a little), y the detail (fades to
 * the mean before it aliases).
 */
vec2 coniferScales(vec2 bark, ConiferScales kind, float seed) {
  float x = bark.x * kind.columns + (coniferWrapNoise(bark, 0.9, seed) - 0.5) * kind.warp * 2.0;
  float column = floor(x);
  float shift = coniferHash(column + seed) * 1.7 + coniferWrapNoise(bark, 2.5, seed + 5.0) * 0.4;
  float y = bark.y * kind.rows + shift;
  float row = floor(y);
  float across = smoothstep(0.0, kind.furrow, abs(fract(x + 0.5) - 0.5));
  float crack = smoothstep(0.0, kind.furrow * 0.7, 0.5 - abs(fract(y) - 0.5));
  vec2 jitter = vec2(coniferHash(column * 7.7 + row), coniferHash(row * 3.3 + column)) - 0.5;
  vec2 local = vec2(fract(x) - 0.5, fract(y) - 0.5) - jitter * 0.4;
  float rounded = 1.0 - smoothstep(0.5 - kind.furrow, 0.62, length(local * vec2(1.0, 1.15)));
  float lift = mix(0.85, 1.0, fract(y));
  float shape = mix(across * crack, rounded, kind.round);
  float height = shape * lift * (0.78 + 0.22 * coniferHash(column * 3.1 + row));
  float detail = 1.0 - smoothstep(0.22, 0.55, fwidth(x) + fwidth(y) * 0.5);
  return vec2(mix(0.7, height, detail), detail);
}

/** Scale tops lighter and greyer, furrows a darker tone of the bark (never black). */
vec3 coniferAlbedo(vec3 base, vec2 scales, vec3 topTint, vec3 furrowTint, float weathering) {
  vec3 top = base * topTint * (0.86 + weathering * 0.28);
  vec3 bottom = base * furrowTint;
  vec3 albedo = mix(bottom, top, smoothstep(0.12, 0.55, scales.x));
  return mix(mix(bottom, top, 0.62), albedo, scales.y);
}

vec4 coniferBark(vec3 base, vec2 bark, float family) {
  float weathering = coniferWrapNoise(bark, 5.0, 29.0);
  if (family == MOUNTAIN_FAMILY) {
    vec2 blocks = coniferScales(bark, MOUNTAIN_BLOCKS, 13.0);
    vec3 albedo = coniferAlbedo(base, blocks, vec3(1.18, 1.15, 1.12), vec3(0.45, 0.38, 0.34), weathering);
    return vec4(albedo, blocks.x);
  }
  vec2 scales = coniferScales(bark, SPRUCE_SCALES, 21.0);
  vec3 albedo = coniferAlbedo(base, scales, vec3(1.08, 1.06, 1.04), vec3(0.58, 0.42, 0.35), weathering);
  return vec4(albedo, scales.x);
}

float coniferBarkDepth(vec3 base, float family) {
  if (family == MOUNTAIN_FAMILY) return MOUNTAIN_BLOCKS.depth;
  return SPRUCE_SCALES.depth;
}
`,p=3,m=-6,h=12,g=(e,t,n)=>Math.floor(t/16)*n+Math.floor(e/16),_=(e,t)=>{let n=new Set;for(let r=Math.floor(e.minZ/16);r*16<=e.maxZ;r+=1)for(let i=Math.floor(e.minX/16);i*16<=e.maxX;i+=1)n.add(r*t+i);return n},v=(e,t)=>{let n=Math.ceil(e/16),r=Math.ceil(t/16),a=Array.from({length:n*r},(e,t)=>{let r=t%n*16,i=Math.floor(t/n)*16;return new s(new o(r-p,m,i-p),new o(r+16+p,h,i+16+p))}),c=new Uint8Array(a.length),u=new i,d=new l,f=``;return{update:e=>{e.updateMatrixWorld(),d.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),u.setFromProjectionMatrix(d),a.forEach((e,t)=>{c[t]=+!!u.intersectsBox(e)});let t=c.join(``),n=t!==f;return f=t,n},visible:c}},y=e=>{let t=new a;return t.setAttribute(`position`,new c(e.positions,3)),t.setAttribute(`normal`,new c(e.normals,3)),t.setAttribute(`color`,new c(e.colors,3)),t.setAttribute(`wind`,new c(e.wind,2)),t.setAttribute(`uv`,new c(e.uvs,2)),t.setIndex(new c(e.indices,1)),t},b=(e,t,n,r)=>{let i=n.scale[r],a=Math.cos(n.rotation[r])*i,o=Math.sin(n.rotation[r])*i,s=i*n.stretch[r];e.set([a,0,-o,0,0,s,0,0,o,0,a,0],t),e.set([n.x[r],n.y[r],n.z[r],1],t+12)},x=(e,t)=>{let n={count:t.length,data:new Float32Array(t.length*4),matrices:new Float32Array(t.length*16),sources:Int32Array.from(t,t=>e.sourceIndex[t]),tint:new Float32Array(t.length*3)};return t.forEach((t,r)=>{b(n.matrices,r*16,e,t),n.data.set([e.phase[t],e.sunVisibility[t],e.fog[t],0],r*4),n.tint.set(e.tint.subarray(t*3,t*3+3),r*3)}),n},S=(e,t)=>{let n=new e.constructor(e.length+t.length);return n.set(e),n.set(t,e.length),n},C=(e,t,n)=>{let r=new e.constructor(e.length-n);return r.set(e.subarray(0,t*n)),r.set(e.subarray((t+1)*n),t*n),r},w=(e,t,n)=>{let r=x(t,[n]);return e?{count:e.count+1,data:S(e.data,r.data),matrices:S(e.matrices,r.matrices),sources:S(e.sources,r.sources),tint:S(e.tint,r.tint)}:r},T=(e,t)=>({count:e.count-1,data:C(e.data,t,4),matrices:C(e.matrices,t,16),sources:C(e.sources,t,1),tint:C(e.tint,t,3)}),E=e=>({data:new n(new Float32Array(e*4),4),matrix:new n(new Float32Array(e*16),16),tint:new n(new Float32Array(e*3),3)}),D=1.25,O=(e,t,n,i,a)=>{let o=e.clone(),s=E(n),c=new r(o,i.main,n);c.frustumCulled=!1;let l=i.depth?new r(o,i.depth,n):null;l&&(l.frustumCulled=!1);let u=()=>{o.setAttribute(`instanceData`,s.data),o.setAttribute(`instanceTint`,s.tint),c.instanceMatrix=s.matrix,l&&(l.instanceMatrix=s.matrix)};u();let d=new Map,f=null,p=!1,m=[...t.values()].reduce((e,t)=>e+t.count,0),h=e=>{f=e,p=!1;let{data:n,matrix:r,tint:i}=s,a=0;d.clear();for(let[o,s]of t)e[o]&&(d.set(o,a),r.array.set(s.matrices,a*16),n.array.set(s.data,a*4),i.array.set(s.tint,a*3),a+=s.count);c.count=a,l&&(l.count=a),r.needsUpdate=!0,n.clearUpdateRanges(),n.needsUpdate=!0,i.needsUpdate=!0},_=(e,n)=>{let r=+!!n,{data:i}=s;for(let[n,a]of t){let t=a.sources.indexOf(e);if(t<0)continue;a.data[t*4+3]=r;let o=d.get(n);return o===void 0||(i.array[(o+t)*4+3]=r,i.addUpdateRange((o+t)*4+3,1),i.needsUpdate=!0,!0)}return!1};return{addInstance:e=>{if(m>=n)return;let{chunksX:r,instances:i}=a,o=g(i.x[e],i.z[e],r);t.set(o,w(t.get(o),i,e)),m+=1,p=!0},caster:l,commitInstances:()=>{p&&f&&h(f)},hideInstance:e=>_(e,!0),mesh:c,removeInstance:e=>{for(let[n,r]of t){let i=r.sources.indexOf(e);if(!(i<0))return t.set(n,T(r,i)),--m,p=!0,!0}return!1},replaceChunks:(e,r,i)=>{for(let n of e)m-=t.get(n)?.count??0,t.delete(n);for(let[e,n]of A(r,i,a.chunksX))t.set(e,x(r,n)),m+=n.length;m>n&&(n=Math.ceil(m*D),s=E(n),u()),p=!0},shared:o,showChunks:h,showInstance:e=>_(e,!1)}},k=(e,t)=>{let n=!0;return r=>{t!==void 0&&r!==n&&(n=r,e.setDrawRange(0,r?1/0:t))}},A=(e,t,n)=>{let r=new Map;for(let i of t){let t=g(e.x[i],e.z[i],n),a=r.get(t)??[];a.push(i),r.set(t,a)}return r},j=e=>{let t=new Map;for(let n=0;n<e.count;n+=1){let r=e.meshIds[n],i=t.get(r)??[];i.push(n),t.set(r,i)}return t},M=(e,t)=>new Map([...j(e)].map(([n,r])=>[n,A(e,r,t)])),N=.3,P=e=>e.contactRadius===void 0||e.height>N,F=(e,n,r,i,a=new Map)=>{let o=Math.ceil(r/16),s=M(n,o);for(let e of a.keys())s.has(e)||s.set(e,new Map);let c=[];for(let[r,l]of s){let s=new Map,u=0;for(let[e,t]of l)s.set(e,x(n,t)),u+=t.length;let d=e[r],{shared:f,...p}=O(y(d),s,Math.max(u,a.get(r)??0),P(d)?i:{...i,depth:null},{chunksX:o,instances:n});c.push({...p,kind:t(r),meshId:r,setDetail:k(f,d.coreIndexCount),triangles:d.indices.length/3*u})}return c};export{v as a,u as c,b as i,d as l,F as n,_ as o,j as r,f as s,y as t};