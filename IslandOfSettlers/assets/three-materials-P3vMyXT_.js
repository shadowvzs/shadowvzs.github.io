import{Ot as e}from"./periodic-noise-DIDp6cIr.js";import{S as t,b as n,g as r,h as i,r as a,y as o}from"./environment-DCQQpv7Q.js";import{E as s,G as c,Jt as l,Ot as u,W as d,Wt as f,ct as p,gn as m,mt as h,pn as ee,pt as g,tn as _,tt as v,un as y,v as te,y as ne,yn as b}from"./three.module-D3z5eOsJ.js";import{a as x,c as S,i as C,n as w,o as T,r as E,s as D,t as O}from"./water-field-PVmoS_JS.js";var k=600,A=30,j=58*Math.PI/180,M=36*Math.PI/180,N=e=>Math.min(i,Math.max(r,e)),P=(e,t)=>{let r=Math.cos(e)/Math.SQRT2,{x:i,z:a}=n(r,r,t);return{x:i,y:Math.sin(e),z:a}},F=1.5,I=(e,n)=>{let r=P(N(t+n.tilt),n.yaw),{halfHeight:i,halfWidth:a}=o(n);e.left=-a,e.right=a,e.top=i,e.bottom=-i,e.position.set(n.centerX+r.x*k,r.y*k,n.centerZ+r.z*k),e.lookAt(n.centerX,0,n.centerZ),e.updateProjectionMatrix()},L=(t,n,r)=>{let{halfHeight:i}=o(n),a=e(.5,2.6,n.zoom),s=N(j+(M-j)*a+n.tilt),c=i/Math.tan(A*Math.PI/360)*1.05,l=P(s,n.yaw);t.aspect=n.viewportWidth/n.viewportHeight,t.near=Math.max(.1,c*.05),t.far=c*6+400;let u=n.centerX+l.x*c,d=n.centerZ+l.z*c;t.position.set(u,Math.max(l.y*c,r(u,d)+F),d),t.lookAt(n.centerX,0,n.centerZ),t.updateProjectionMatrix()},R=e=>{let t=new g(-1,1,1,-1,1,k*3),n=new h(A,1,1,1e3),r=`iso`;return{getMode:()=>r,setMode:e=>{r=e},update:i=>r===`iso`?(I(t,i),t):(L(n,i,e),n)}},z=300,B=z*2-1,V=.04,H=18,U=8,W=`
const float SHADOW_DEPTH_BIAS = ${(V/B).toExponential(4)};
const float SHADOW_MAX_BIAS = ${(.9/B).toExponential(4)};
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowTexel;

/** Depth change per shadow map uv of the receiving surface (receiver plane). */
vec2 getShadowDepthSlope(vec3 projected) {
  vec3 dx = dFdx(projected);
  vec3 dy = dFdy(projected);
  float det = dx.x * dy.y - dx.y * dy.x;
  if (abs(det) < 1e-12) return vec2(0.0);
  return vec2(dy.y * dx.z - dx.y * dy.z, dx.x * dy.z - dy.x * dx.z) / det;
}

float sampleSunShadow(vec3 world) {
  vec4 coords = uShadowMatrix * vec4(world, 1.0);
  vec3 projected = coords.xyz / coords.w;
  vec2 slope = abs(getShadowDepthSlope(projected)) * uShadowTexel;
  if (projected.x < 0.0 || projected.x > 1.0 || projected.y < 0.0 || projected.y > 1.0) return 1.0;
  float lit = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(x, y);
      float bias = min(SHADOW_DEPTH_BIAS + dot(slope, abs(offset) + 1.0), SHADOW_MAX_BIAS);
      float depth = texture(uShadowMap, projected.xy + offset * uShadowTexel).r;
      lit += projected.z - bias > depth ? 0.0 : 1.0;
    }
  }
  return mix(0.35, 1.0, lit / 9.0);
}
`,G=(e,n)=>{if(n!==`iso`)return null;let{halfHeight:r,halfWidth:i}=o(e),a=N(t+e.tilt);return{radius:Math.hypot(i,r/Math.sin(a)),x:e.centerX,z:e.centerZ}},K=e=>e?{DEPTH_ONLY:``}:{},q=new v().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),J=(e,t,n)=>{let[r,i,o]=a(n);e.position.set(t.x+r*z,i*z,t.z+o*z),e.lookAt(t.x,0,t.z),e.updateMatrixWorld()},Y=(e,t)=>{e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix()},X=new m,re=(e,t)=>{X.set(0,0,0).applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);let n=X.x*t/2,r=X.y*t/2;e.projectionMatrix.elements[12]+=(Math.round(n)-n)*2/t,e.projectionMatrix.elements[13]+=(Math.round(r)-r)*2/t},ie=(e,t)=>{let n=new b(t,t,{depthTexture:new ne(t,t,ee)});n.depthTexture.minFilter=p,n.depthTexture.magFilter=p;let r=Math.max(e.cellsX,e.cellsZ)*.78,i=new m(e.cellsX/2,0,e.cellsZ/2),a=new m,o=new g(-1,1,1,-1,1,z*2),s=new _,c=new v;return{render:(e,l,u)=>{let d=u?Math.ceil((u.radius+H)/U)*U:0,f=u!==null&&d<r;Y(o,f?d:r),f?a.set(u.x,0,u.z):a.copy(i),J(o,a,l),re(o,t),c.multiplyMatrices(q,o.projectionMatrix).multiply(o.matrixWorldInverse),e.setRenderTarget(n),e.clear(),e.render(s,o),e.setRenderTarget(null)},scene:s,uniforms:{uShadowMap:{value:n.depthTexture},uShadowMatrix:{value:c},uShadowTexel:{value:1/t}}}},ae=`
precision highp float;
in vec3 position;
in vec3 normal;
in vec4 splatA;
in vec4 splatB;
in vec4 splatC;
in vec4 shading;
in vec4 water;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
out vec3 vWorld;
out vec3 vNormal;
out vec4 vSplatA;
out vec4 vSplatB;
out vec4 vSplatC;
out vec4 vShading;
out vec4 vWater;

void main() {
  vWorld = position;
  vNormal = normal;
  vSplatA = splatA;
  vSplatB = splatB;
  vSplatC = splatC;
  vShading = shading;
  vWater = water;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,oe=`
${`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec4 vSplatA;
in vec4 vSplatB;
in vec4 vSplatC;
in vec4 vShading;
in vec4 vWater;
out vec4 fragColor;
${C}
${S}
${D}
`}
/** The seabed under Three's real weed strands keeps a softer weed tint (Pixi: the whole weed). */
const float WEED_BED_STRENGTH = 0.5;
${E}
${w}
${O}
${x}
${W}
${T}

void main() {
  vec2 xz = vWorld.xz;
  GroundSample ground = sampleGround(vWorld, vSplatA, vSplatB, vSplatC, normalize(vNormal), vShading.w);
  float sunVisibility = vShading.x * sampleSunShadow(vWorld);
  vec3 color = lightGround(ground, sunVisibility, vShading.y, xz);
  vec4 field = sampleWaterField(xz);
  color = weedBed(color, xz, field.w, field.x, vWater.zw, uTime, WEED_BED_STRENGTH);
  color = waterlineGround(color, field.x, xz, uTime);
  color = applyFogOfWar(color, field.z, xz);
  fragColor = vec4(gradeColor(color), 1.0);
}
`,Z=`
const vec3 WAVE_A = vec3(0.8, 0.6, 0.55);
const vec3 WAVE_B = vec3(-0.5, 0.85, 0.9);
const vec3 WAVE_C = vec3(0.2, -0.98, 1.4);

vec3 swellWave(vec3 settings, float amplitude, float speed, vec2 p, float time) {
  float phase = settings.z * dot(settings.xy, p) + time * speed;
  return vec3(sin(phase), settings.xy * settings.z * cos(phase)) * amplitude;
}

/** x: swell height, yz: its slope. */
vec3 getSwell(vec2 p, float time) {
  return swellWave(WAVE_A, 0.07, 1.1, p, time) + swellWave(WAVE_B, 0.04, 1.5, p, time)
    + swellWave(WAVE_C, 0.02, 2.1, p, time);
}

/** Calm near the shore and on rivers. */
float getSwellCalm(float depth, vec2 flow) {
  return smoothstep(0.4, 2.5, depth) * (1.0 - smoothstep(0.01, 0.2, length(flow)));
}
`,Q=`
precision highp float;
in vec3 position;
in vec4 water;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
out vec3 vWorld;
out vec4 vWater;
${C}
${Z}

void main() {
  float lift = getSwell(position.xz, uTime).x * getSwellCalm(water.x, water.zw);
  vec3 moved = position + vec3(0.0, lift * getMapInterior(position.xz), 0.0);
  vWorld = moved;
  vWater = water;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(moved, 1.0);
}
`,se=`
precision highp float;
in vec3 vWorld;
in vec4 vWater;
uniform sampler2D uRefraction;
uniform vec2 uViewport;
out vec4 fragColor;
${C}
${S}
${D}
${w}
${O}
${x}
${W}
${Z}
${T}

void main() {
  vec4 field = sampleWaterField(vWorld.xz);
  float depth = max(field.x, 0.0);
  vec2 swell = getSwell(vWorld.xz, uTime).yz * getSwellCalm(depth, vWater.zw);
  vec3 normal = normalize(waterNormal(vWorld.xz, vWater.zw, uTime) + vec3(-swell.x, 0.0, -swell.y));
  vec2 screenUv = gl_FragCoord.xy / uViewport;
  vec3 refracted = texture(uRefraction, screenUv + normal.xz * 0.25 * min(depth, 1.0)).rgb;
  vec3 bed = blendOpenSeaBed(refracted, vWorld.xz);
  vec3 color = shadeWater(vWorld.xz, field.x, field.y, vWater.zw, uTime, normal, bed);
  color *= mix(0.75, 1.0, sampleSunShadow(vWorld));
  fragColor = vec4(gradeColor(applyFogOfWar(color, field.z, vWorld.xz)), 1.0);
}
`,ce=(e,t)=>{let n=$(e,t,t);return n.wrapS=l,n.wrapT=l,n},$=(e,t,n)=>{let r=new te(e,t,n,u,y);return r.generateMipmaps=!0,r.minFilter=c,r.magFilter=d,r.anisotropy=8,r.premultiplyAlpha=!1,r.flipY=!1,r.needsUpdate=!0,r},le=e=>{let t=$(e.pixels,e.width,e.height);return t.userData.hasSnow=e.hasSnow,t},ue=$(new Uint8Array([255,255,255,255]),1,1),de=e=>({uLiveFog:{value:e.uLiveFog},uFogMap:{value:ue},uAmbientGround:{value:e.uAmbientGround},uAmbientSky:{value:e.uAmbientSky},uBakedShadowWeight:{value:e.uBakedShadowWeight},uCloudCover:{value:e.uCloudCover},uFogColor:{value:e.uFogColor},uRain:{value:e.uRain},uSunColor:{value:e.uSunColor},uSunDirection:{value:e.uSunDirection},uTime:{value:e.uTime},uViewDirection:{value:e.uViewDirection},uWind:{value:e.uWind},uWorldSize:{value:e.uWorldSize}}),fe=(e,t,n)=>new f({defines:{MINE_GLINT:``,SNOW_SPARKLE:``},fragmentShader:oe,glslVersion:s,uniforms:{...e,uAlbedoAtlas:{value:t},uNormalAtlas:{value:n}},vertexShader:ae}),pe=e=>new f({fragmentShader:se,glslVersion:s,uniforms:e,vertexShader:Q});export{de as a,ie as c,R as d,fe as i,K as l,ce as n,pe as o,le as r,W as s,$ as t,G as u};