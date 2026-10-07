import{Ot as e}from"./periodic-noise-DIDp6cIr.js";import{C as t,b as n,g as r,h as i,r as a,x as o}from"./environment-B7MmBhz8.js";import{E as s,G as c,Jt as l,Ot as u,W as d,Wt as f,ct as p,gn as m,mt as h,pn as ee,pt as g,tn as te,tt as _,un as v,v as y,y as b,yn as x}from"./three.module-D3z5eOsJ.js";import{a as S,c as C,i as w,n as T,o as E,r as ne,s as D,t as O}from"./water-field-CptgikS2.js";var k=600,A=30,j=58*Math.PI/180,M=36*Math.PI/180,N=e=>Math.min(i,Math.max(r,e)),P=(e,t)=>{let n=Math.cos(e)/Math.SQRT2,{x:r,z:i}=o(n,n,t);return{x:r,y:Math.sin(e),z:i}},re=1.5,F=(e,r)=>{let i=P(N(t+r.tilt),r.yaw),{halfHeight:a,halfWidth:o}=n(r);e.left=-o,e.right=o,e.top=a,e.bottom=-a,e.position.set(r.centerX+i.x*k,i.y*k,r.centerZ+i.z*k),e.lookAt(r.centerX,0,r.centerZ),e.updateProjectionMatrix()},I=(t,r,i)=>{let{halfHeight:a}=n(r),o=e(.5,2.6,r.zoom),s=N(j+(M-j)*o+r.tilt),c=a/Math.tan(A*Math.PI/360)*1.05,l=P(s,r.yaw);t.aspect=r.viewportWidth/r.viewportHeight,t.near=Math.max(.1,c*.05),t.far=c*6+400;let u=r.centerX+l.x*c,d=r.centerZ+l.z*c;t.position.set(u,Math.max(l.y*c,i(u,d)+re),d),t.lookAt(r.centerX,0,r.centerZ),t.updateProjectionMatrix()},L=e=>{let t=new g(-1,1,1,-1,1,k*3),n=new h(A,1,1,1e3),r=`iso`;return{getMode:()=>r,setMode:e=>{r=e},update:i=>r===`iso`?(F(t,i),t):(I(n,i,e),n)}},R=300,z=R*2-1,B=.04,V=18,H=8,U=`
const float SHADOW_DEPTH_BIAS = ${(B/z).toExponential(4)};
const float SHADOW_MAX_BIAS = ${(.9/z).toExponential(4)};
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
`,W=(e,r)=>{if(r!==`iso`)return null;let{halfHeight:i,halfWidth:a}=n(e),o=N(t+e.tilt);return{radius:Math.hypot(a,i/Math.sin(o)),x:e.centerX,z:e.centerZ}},G=e=>e?{DEPTH_ONLY:``}:{},K=new _().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),q=(e,t,n)=>{let[r,i,o]=a(n);e.position.set(t.x+r*R,i*R,t.z+o*R),e.lookAt(t.x,0,t.z),e.updateMatrixWorld()},J=(e,t)=>{e.left=-t,e.right=t,e.top=t,e.bottom=-t,e.updateProjectionMatrix()},Y=new m,ie=(e,t)=>{Y.set(0,0,0).applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);let n=Y.x*t/2,r=Y.y*t/2;e.projectionMatrix.elements[12]+=(Math.round(n)-n)*2/t,e.projectionMatrix.elements[13]+=(Math.round(r)-r)*2/t},ae=(e,t)=>{let n=new x(t,t,{depthTexture:new b(t,t,ee)});n.depthTexture.minFilter=p,n.depthTexture.magFilter=p;let r=Math.max(e.cellsX,e.cellsZ)*.78,i=new m(e.cellsX/2,0,e.cellsZ/2),a=new m,o=new g(-1,1,1,-1,1,R*2),s=new te,c=new _;return{render:(e,l,u)=>{let d=u?Math.ceil((u.radius+V)/H)*H:0,f=u!==null&&d<r;J(o,f?d:r),f?a.set(u.x,0,u.z):a.copy(i),q(o,a,l),ie(o,t),c.multiplyMatrices(K,o.projectionMatrix).multiply(o.matrixWorldInverse),e.setRenderTarget(n),e.clear(),e.render(s,o),e.setRenderTarget(null)},scene:s,uniforms:{uShadowMap:{value:n.depthTexture},uShadowMatrix:{value:c},uShadowTexel:{value:1/t}}}},oe=`
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
`,se=`
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec4 vSplatA;
in vec4 vSplatB;
in vec4 vSplatC;
in vec4 vShading;
in vec4 vWater;
out vec4 fragColor;
${w}
${C}
${D}
`,X=e=>`
${se}
/** The seabed under Three's real weed strands keeps a softer weed tint (Pixi: the whole weed). */
const float WEED_BED_STRENGTH = 0.5;
${ne[e]}
${T}
${O}
${S}
${U}
${E}

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
`,ce=`
precision highp float;
in vec3 position;
in vec4 water;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
out vec3 vWorld;
out vec4 vWater;
${w}
${Z}

void main() {
  float lift = getSwell(position.xz, uTime).x * getSwellCalm(water.x, water.zw);
  vec3 moved = position + vec3(0.0, lift * getMapInterior(position.xz), 0.0);
  vWorld = moved;
  vWater = water;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(moved, 1.0);
}
`,le=`
precision highp float;
in vec3 vWorld;
in vec4 vWater;
uniform sampler2D uRefraction;
uniform vec2 uViewport;
out vec4 fragColor;
${w}
${C}
${D}
${T}
${O}
${S}
${U}
${Z}
${E}

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
`,ue=(e,t)=>{let n=Q(e,t,t);return n.wrapS=l,n.wrapT=l,n},Q=(e,t,n)=>{let r=new y(e,t,n,u,v);return r.generateMipmaps=!0,r.minFilter=c,r.magFilter=d,r.anisotropy=8,r.premultiplyAlpha=!1,r.flipY=!1,r.needsUpdate=!0,r},$=e=>{let t=Q(e.pixels,e.width,e.height);return t.userData.hasSnow=e.hasSnow,t},de=Q(new Uint8Array([255,255,255,255]),1,1),fe=e=>({uLiveFog:{value:e.uLiveFog},uFogMap:{value:de},uAmbientGround:{value:e.uAmbientGround},uAmbientSky:{value:e.uAmbientSky},uBakedShadowWeight:{value:e.uBakedShadowWeight},uCloudCover:{value:e.uCloudCover},uFogColor:{value:e.uFogColor},uRain:{value:e.uRain},uSunColor:{value:e.uSunColor},uSunDirection:{value:e.uSunDirection},uTime:{value:e.uTime},uViewDirection:{value:e.uViewDirection},uWind:{value:e.uWind},uWorldSize:{value:e.uWorldSize}}),pe=(e,t,n,r)=>new f({defines:{MINE_GLINT:``,SNOW_SPARKLE:``},fragmentShader:X(r),glslVersion:s,uniforms:{...e,uAlbedoAtlas:{value:t},uNormalAtlas:{value:n}},vertexShader:oe}),me=(e,t)=>{e.fragmentShader=X(t),e.needsUpdate=!0},he=e=>new f({fragmentShader:le,glslVersion:s,uniforms:e,vertexShader:ce});export{fe as a,U as c,W as d,L as f,pe as i,ae as l,ue as n,he as o,$ as r,me as s,Q as t,G as u};