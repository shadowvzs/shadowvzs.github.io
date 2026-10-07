import{jt as e}from"./periodic-noise-DIDp6cIr.js";import{C as t}from"./environment-DCQQpv7Q.js";import{B as n,R as r,S as i,U as a,ht as o,pt as s,y as c,z as l}from"./animal-pose-8Enycw7S.js";import{E as u,G as d,Jt as f,M as p,N as m,W as h,Wt as g,gn as _,mt as v,nt as y,s as b,v as ee,x as te}from"./three.module-D3z5eOsJ.js";import{a as x,c as S,i as C,o as w,s as T}from"./water-field-FHXw41-_.js";import{c as E,t as D,u as O}from"./three-materials-BCBsP0Us.js";import{a as k,n as A,t as j}from"./animal-silhouette-U0y_KE9b.js";var M=2600,N=.28,P=e=>(Math.round(e)%128+128)%128,F=(e,t,n)=>{let r=5+n()*9,i=Math.PI+(n()-.5)*2*N,a=n()*128,o=n()*128,s=(n()-.5)*.5;for(let n=0;n<=r;n+=.5){let c=n/r,l=P(o+Math.sin(i)*n)*128+P(a+Math.cos(i)*n),u=Math.sin(Math.PI*c)*(.6+c*.4);u<=e[l]||(e[l]=u,t[l]=s+c*.25)}},ne=t=>{let n=e(t),r=16384,i=new Float32Array(r),a=new Float32Array(r);for(let e=0;e<M;e+=1)F(i,a,n);let o=new Uint8Array(r*4);for(let e=0;e<r;e+=1)o[e*4]=Math.round(Math.min(1,i[e])*255),o[e*4+1]=Math.round(Math.min(1,Math.max(0,.5+a[e]*.5))*255),o[e*4+2]=128,o[e*4+3]=255;return o},I=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec3 color;
in vec2 uv;
in vec3 parts;
in float spotRegion;
in vec4 fur;
in float roughness;
in vec4 animalCoat;
in vec4 animalPlace;
in vec4 animalBody;
in vec4 animalStyle;
in vec4 animalPose0;
in vec4 animalPose1;
in vec4 animalPose2;
in vec4 animalPose3;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
out vec3 vWorld;
out vec3 vNormal;
out vec3 vColor;
out vec2 vUv;
out float vSpotRegion;
out float vVisibility;
out float vHeight;
out vec3 vRest;
out vec3 vRestNormal;
out vec4 vFur;
flat out vec4 vCoat;
out vec3 vMasks;
out vec3 vTone;
out float vRoughness;
${a()}

void main() {
  for (int index = 0; index < 4; index++) {
    pose[index] = animalPose0[index];
    pose[index + 4] = animalPose1[index];
    pose[index + 8] = animalPose2[index];
    pose[index + 12] = animalPose3[index];
  }
  vec3 local = position;
  vec3 localNormal = normal;
  poseBlended(local, localNormal, parts, animalBody.w);
  vHeight = local.y;
  local = rotateX(rotateZ(local, animalBody.x), -animalBody.y) * animalBody.z * animalStyle.y;
  localNormal = rotateX(rotateZ(localNormal, animalBody.x), -animalBody.y);
  vWorld = rotateY(local, animalPlace.w) + animalPlace.xyz;
  vNormal = rotateY(localNormal, animalPlace.w);
  vRest = position;
  vRestNormal = normal;
  vUv = uv;
  vSpotRegion = spotRegion;
  vFur = fur;
  vRoughness = roughness;
  vec3 tone = vec3(1.0 + animalStyle.w * 0.07, 1.0, 1.0 - animalStyle.w * 0.08);
  vColor = color * animalStyle.x * tone;
  vCoat = animalCoat;
  vMasks = color;
  vTone = animalStyle.x * tone;
  vVisibility = animalStyle.z;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`,L=`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec3 vColor;
in vec2 vUv;
in float vSpotRegion;
in float vVisibility;
in float vHeight;
in vec3 vRest;
in vec3 vRestNormal;
in vec4 vFur;
in float vRoughness;
flat in vec4 vCoat;
in vec3 vMasks;
in vec3 vTone;
uniform sampler2D uAlbedo;
uniform float uJuvenile;
uniform sampler2D uFurTexture;
uniform float uFurScale;
uniform float uSpots;
uniform float uSpotCell;
uniform vec3 uSpotColor;
uniform vec3 uWarmTint;
#ifdef NORMAL_MAP
uniform sampler2D uNormalMap;
#endif
out vec4 fragColor;
${C}
${S}
${T}
${x}
${k}
${E}
${w}


/** Hair relief depth in world units per fur scale unit (the bump is physically scaled). */
const float FUR_DEPTH = 0.003;

/** Texture coordinates of one projection plane with the strokes along the flow. */
vec2 alongFlow(vec2 point, vec2 flow, float strokeLength) {
  vec2 direction = dot(flow, flow) > 0.01 ? normalize(flow) : vec2(1.0, 0.0);
  return vec2(-dot(point, direction) / strokeLength, dot(point, vec2(-direction.y, direction.x)));
}

vec4 sampleFur() {
  vec3 weights = pow(abs(vRestNormal), vec3(4.0));
  weights /= max(weights.x + weights.y + weights.z, 0.0001);
  vec3 p = vRest * uFurScale;
  vec3 flow = vFur.xyz;
  float strokeLength = max(vFur.w, 0.2);
  return texture(uFurTexture, alongFlow(p.xy, flow.xy, strokeLength)) * weights.z
    + texture(uFurTexture, alongFlow(p.xz, flow.xz, strokeLength)) * weights.y
    + texture(uFurTexture, alongFlow(p.zy, flow.zy, strokeLength)) * weights.x;
}

/** 1 while a stroke spans a few pixels, 0 when it would only shimmer. */
float getFurDetail() {
  float texels = length(fwidth(vRest * uFurScale)) * 128.0;
  return 1.0 - smoothstep(1.2, 3.5, texels);
}

vec3 perturbNormal(vec3 position, vec3 normal, float height) {
  vec3 sigmaX = dFdx(position);
  vec3 sigmaY = dFdy(position);
  vec3 r1 = cross(sigmaY, normal);
  vec3 r2 = cross(normal, sigmaX);
  float determinant = dot(sigmaX, r1);
  vec2 slope = vec2(dFdx(height), dFdy(height));
  vec3 gradient = sign(determinant) * (slope.x * r1 + slope.y * r2);
  return normalize(abs(determinant) * normal - gradient);
}

vec3 shadeFurSheen(vec3 albedo, vec3 normal, float sun, float hair) {
  vec3 halfway = normalize(uSunDirection + uViewDirection);
  float gloss = pow(max(dot(normal, halfway), 0.0), mix(90.0, 6.0, vRoughness));
  vec3 specular = uSunColor * gloss * (1.0 - vRoughness) * 0.7 * sun;
  float facing = max(dot(normal, uViewDirection), 0.0);
  float rim = pow(1.0 - facing, 3.0) * max(dot(normal, uSunDirection) + 0.35, 0.0);
  return specular + albedo * (uSunColor * 0.16 + uAmbientSky * 0.1) * rim * hair;
}

${n}

#ifdef RABBIT_COAT
${i}
#endif

/** The model's texture (untextured surfaces such as eyes: white, their colour is the tint). */
vec3 sampleAlbedo() {
  return vUv.x < 0.0 ? vec3(1.0) : texture(uAlbedo, vUv).rgb;
}

/**
 * Texel times the vertex tint (zones, shade, tone), with the juvenile coat: the warm tint and
 * the white spots in rest space; rabbits: the individual's coat recoloured from the texel.
 */
vec3 getCoatColor(vec3 texel) {
#ifdef RABBIT_COAT
  return shadeRabbitCoat(texel, vMasks.g, vRest, vCoat, uJuvenile) * vTone;
#else
  vec3 color = texel * vColor * uWarmTint;
  if (uSpots <= 0.0 || vSpotRegion <= 0.0) return color;
  float spot = getSpotMask(vRest, uSpotCell) * vSpotRegion * uSpots;
  return mix(color, uSpotColor * vTone, spot);
#endif
}

#ifdef NORMAL_MAP
/** Tangent space normal map with the frame from screen space derivatives (no tangents). */
vec3 applyNormalMap(vec3 normal) {
  if (vUv.x < 0.0) return normal;
  vec3 mapped = texture(uNormalMap, vUv).xyz * 2.0 - 1.0;
  mapped.y = -mapped.y;
  vec3 dp1 = dFdx(vWorld);
  vec3 dp2 = dFdy(vWorld);
  vec2 duv1 = dFdx(vUv);
  vec2 duv2 = dFdy(vUv);
  vec3 dp2perp = cross(dp2, normal);
  vec3 dp1perp = cross(normal, dp1);
  vec3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 bitangent = dp2perp * duv1.y + dp1perp * duv2.y;
  float scale = inversesqrt(max(max(dot(tangent, tangent), dot(bitangent, bitangent)), 1e-12));
  return normalize(mat3(tangent * scale, bitangent * scale, normal) * mapped);
}
#endif

void main() {
  if (isHiddenByFog(vVisibility, vWorld.xz)) discard;
#ifdef SILHOUETTE
  float aboveGrass = smoothstep(0.03, 0.12, vHeight);
  fragColor = vec4(${A.map(e=>e.toFixed(2)).join(`, `)}, ${j.toFixed(2)} * aboveGrass);
#elif defined(DEPTH_ONLY)
  fragColor = vec4(1.0);
#else
  vec3 texel = sampleAlbedo();
  vec3 surfaceNormal = normalize(vNormal);
#ifdef NORMAL_MAP
  surfaceNormal = applyNormalMap(surfaceNormal);
#endif
  float hair = step(0.01, vFur.w);
  vec4 fur = sampleFur();
  float detail = getFurDetail() * hair;
  vec3 normal = perturbNormal(vWorld, surfaceNormal, fur.r * detail * FUR_DEPTH / uFurScale);
  vec3 albedo = getCoatColor(texel) * mix(1.0, 0.88 + fur.g * 0.24, detail * 0.5);
  float occlusion = mix(0.6, 1.0, smoothstep(0.0, 0.25, vHeight)) * mix(0.8, 1.0, normal.y * 0.5 + 0.5);
  float sun = sampleSunShadow(vWorld);
  vec3 color = lightSurface(albedo, normal, sun, occlusion, vWorld.xz);
  color += shadeFurSheen(albedo, normal, sun, hair);
  fragColor = vec4(gradeColor(applyFogOfWar(color, vVisibility, vWorld.xz)), 1.0);
#endif
}
`,R={cell:1,color:[1,1,1],warm:[1,1,1]},z={main:{},shadow:O(!0),silhouette:{SILHOUETTE:``}},B=e=>(e.depthFunc=6,e.depthWrite=!1,e.transparent=!0,e),V=(e,t,n,r,i)=>{let a=r??R,o=a.warm.map(e=>1+(e-1)*t.warmth),s=new g({defines:{...z[i],...t.coatMasks?{RABBIT_COAT:``}:{},...n.normal?{NORMAL_MAP:``}:{}},fragmentShader:L,glslVersion:u,uniforms:{...e,uAlbedo:{value:n.albedo},uAntlerPivot:{value:new _(...t.antlerPivot)},uFurScale:{value:n.fur.scale},uFurTexture:{value:n.fur.texture},uJuvenile:{value:t.coatMasks?.juvenile??0},uJoints:{value:t.joints.map(e=>new _(...e))},uNormalMap:{value:n.normal},uSpotCell:{value:a.cell},uSpotColor:{value:new _(...a.color)},uSpots:{value:r?t.spots:0},uWarmTint:{value:new _(...o)}},vertexShader:I});return i===`silhouette`?B(s):s},H=46,U=150,W=3,G=.3,K=[`animalPlace`,`animalBody`,`animalStyle`,`animalCoat`],q=[`animalPose0`,`animalPose1`,`animalPose2`,`animalPose3`],J=[6,4,3],Y=17,X=()=>{let e=new ee(ne(Y),128,128);return e.wrapS=f,e.wrapT=f,e.magFilter=h,e.minFilter=d,e.generateMipmaps=!0,e.needsUpdate=!0,e},Z=e=>{let t=new Float32Array(e.parts.length*3);for(let n=0;n<e.parts.length;n+=1)t[n*3]=e.parts[n],t[n*3+1]=e.blendParts[n],t[n*3+2]=e.blendWeights[n];return t},Q=(e,t,n,r)=>{let i=new m,{mesh:a}=e;i.setAttribute(`position`,new b(a.positions,3)),i.setAttribute(`normal`,new b(a.normals,3)),i.setAttribute(`color`,new b(a.colors,3)),i.setAttribute(`uv`,new b(a.uvs,2)),i.setAttribute(`parts`,new b(Z(e),3)),i.setAttribute(`spotRegion`,new b(e.spotRegion,1)),i.setAttribute(`fur`,new b(e.fur,4)),i.setAttribute(`roughness`,new b(e.roughness,1)),i.setIndex(new b(a.indices,1));let o=[...K,...q].map(e=>{let t=new p(new Float32Array(256),4);return t.setUsage(te),i.setAttribute(e,t),t});i.instanceCount=0;let s=a=>new y(i,V(t,e,n,r,a)),c=s(`main`),l=s(`shadow`),u=s(`silhouette`);for(let e of[c,l,u])e.frustumCulled=!1,e.visible=!1;let d=o.map(e=>e.array),f=(e,t,n,r,i,a)=>{e[t]=n,e[t+1]=r,e[t+2]=i,e[t+3]=a};return{caster:l,commit:e=>{i.instanceCount=e;for(let t of[c,l,u])t.visible=e>0;if(e!==0)for(let t of o)t.clearUpdateRanges(),t.addUpdateRange(0,e*4),t.needsUpdate=!0},main:c,silhouette:u,triangles:a.indices.length/3,write:(e,t,n)=>{let r=e*4,[i,a,o,s]=d;for(let e=0;e<4;e+=1)s[r+e]=t.coat[n*4+e];f(i,r,t.x[n],t.y[n],t.z[n],t.heading[n]),f(a,r,t.pitch[n],t.roll[n],t.scale[n],t.antlers[n]),f(o,r,t.shade[n],t.appear[n],t.visibility[n],t.tone[n]);let c=n*16;for(let e=0;e<16;e+=1)d[K.length+(e>>2)][r+(e&3)]=t.pose[c+e]}}},re=(e,n,r,i)=>{let a=o(r.species[i]).length*r.scale[i];if(!(e instanceof v))return a*t*n.zoom;let s=Math.hypot(e.position.x-r.x[i],e.position.y-r.y[i],e.position.z-r.z[i]);return a/(2*Math.tan(e.fov*Math.PI/360)*Math.max(s,.1))*n.viewportHeight},ie=(e,t)=>t>=U?e.close:t>=H?e.high:e.low,$=(e,t,n)=>{let{albedo:r,normal:i}=e;return{albedo:D(r.pixels,r.width,r.height),fur:{scale:J[t],texture:n},normal:i?D(i.pixels,i.width,i.height):null}},ae=(e,t,n,r,i)=>c(e,t.asset,n).map(t=>Q(t,r,i,l[e])),oe=(e,t)=>{let n=X(),i=s.map(i=>{let a=t[i];if(!a)return null;let o=$(a,i,n),s=t=>ae(i,a,t,e,o);return{close:s(r.close),high:s(r.high),low:s(r.low)}}),a=i.flatMap(e=>e?[...e.close,...e.high,...e.low]:[]),o=new Map,c=0;return{casters:a.map(e=>e.caster),meshes:a.map(e=>e.main),silhouettes:a.map(e=>e.silhouette),getTriangles:()=>c,update:(e,t,n)=>{for(let e of a)o.set(e,0);c=0;for(let r=0;r<e.count;r+=1){let a=i[e.species[r]];if(!a||e.visibility[r]<G)continue;let s=re(t,n,e,r);if(s<W)continue;let l=ie(a,s)[e.variant[r]],u=o.get(l);l.write(u,e,r),o.set(l,u+1),c+=l.triangles}for(let e of a)e.commit(o.get(e))}}};export{oe as i,$ as n,X as r,Q as t};