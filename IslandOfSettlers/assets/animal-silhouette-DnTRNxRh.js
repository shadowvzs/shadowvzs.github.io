import{n as e}from"./periodic-noise-DIDp6cIr.js";import{T as t,r as n}from"./environment-B7MmBhz8.js";var r=[`uBakedShadowWeight`,`uCloudCover`,`uRain`,`uTime`,`uLiveFog`],i=(e=null)=>({uLiveFog:0,uAmbientGround:new Float32Array(3),uAmbientSky:new Float32Array(3),uBakedShadowWeight:1,uCloudCover:0,uFogColor:new Float32Array(3),uRain:0,uSunColor:new Float32Array(3),uSunDirection:new Float32Array(3),uTime:0,uViewDirection:Float32Array.from([t.x,t.y,t.z]),uWind:new Float32Array(2),uWorldSize:Float32Array.from(e?[e.cellsX,e.cellsZ]:[0,0])}),a=(e,t)=>{let{environment:r}=t;e.uTime=t.time,e.uCloudCover=r.cloudCover,e.uRain=r.rain,e.uBakedShadowWeight=r.bakedShadowWeight,e.uAmbientGround.set(r.ambientGround),e.uAmbientSky.set(r.ambientSky),e.uFogColor.set(r.fogColor),e.uSunColor.set(r.sunColor),e.uSunDirection.set(n(r.sun)),e.uWind[0]=r.windX,e.uWind[1]=r.windZ},o=`
/**
 * Horizontal sway (world units) at bend weight 1: a steady lean downwind, pushed further by the
 * travelling gusts; the springy back-and-forth grows with the gust and a quick tremble runs only
 * while a gust passes, so calm air is calm (a constant slow sine and a sideways loop read as
 * plants swaying in a water current).
 */
vec2 windDisplacement(vec2 xz, float phase, float time) {
  float strength = length(uWind);
  vec2 direction = uWind / max(strength, 0.001);
  float gust = valueNoise(xz * 0.07 - uWind * time * 0.35);
  float push = (0.3 + gust * gust * 1.8) * strength;
  float sway = sin(time * 1.9 + phase + dot(xz, vec2(0.37, 0.23))) * (0.4 + 0.6 * gust);
  float tremble = sin(time * 7.3 + phase * 2.3) * gust * gust;
  vec2 across = vec2(-direction.y, direction.x) * sin(time * 1.3 + phase * 1.7) * 0.006;
  return direction * push * (0.08 + sway * 0.035 + tremble * 0.012) + across * strength;
}

/** Small fast leaf movement, about 1.5-2 Hz (pinned at the leaf base by the flutter weight). */
vec3 flutterOffset(vec3 position, float phase, float time) {
  return vec3(
    sin(time * 11.0 + phase * 3.0 + position.y * 11.0),
    sin(time * 9.4 + phase + position.x * 9.0) * 0.5,
    cos(time * 12.3 + phase * 2.0 + position.z * 13.0)
  ) * 0.014;
}

/**
 * Secondary branch motion, about 0.5 Hz: neighbouring branches move slightly out of step. The
 * phase follows the position, so every point of one branch moves together (nothing detaches);
 * scaled by the bend weight, so roots stay put.
 */
vec3 branchSway(vec3 position, float phase, float time) {
  float wave = phase + dot(position.xz, vec2(5.3, 4.1)) + position.y * 2.0;
  float strength = 0.4 + length(uWind);
  return vec3(sin(time * 3.1 + wave), 0.0, cos(time * 2.7 + wave * 1.3)) * 0.012 * strength;
}
`,s=`
/**
 * Light through leaves (back-light) was tuned for the day sun; a low dawn / dusk sun shines
 * nearly level through every crown with an orange light, so it fades to 30 % near the horizon.
 */
float getBackLightWeight() {
  return mix(0.3, 1.0, smoothstep(0.15, 0.5, uSunDirection.y));
}

/** Props: same light as the ground; a little translucency on leaves facing away (before fog). */
vec3 lightProp(vec3 albedo, vec3 normal, float sunVisibility, vec2 xz) {
  vec3 color = lightSurface(albedo, normal, sunVisibility, 1.0, xz);
  float backLight =
    max(dot(-normal, uSunDirection), 0.0) * sunVisibility * 0.18 * getBackLightWeight();
  return color + albedo * uSunColor * backLight;
}

vec3 shadeProp(vec3 albedo, vec3 normal, float sunVisibility, vec2 xz, float fog) {
  return applyFogOfWar(lightProp(albedo, normal, sunVisibility, xz), fog, xz);
}
`,c=`
uniform sampler2D uLeafAtlas;

vec4 sampleLeaf(vec2 uv) {
  if (uv.x < 0.0) return vec4(1.0);
  return texture(uLeafAtlas, uv);
}

/** Sharpened alpha (stays crisp when minified), for alpha to coverage or alpha test. */
float sharpenCoverage(float alpha) {
  return clamp((alpha - 0.5) / max(fwidth(alpha), 0.0001) + 0.5, 0.0, 1.0);
}
`,l=`
bool isHiddenByFog(float fog, vec2 xz) {
  fog=sampleLiveFog(fog,xz);
  return fog < 0.24 + valueNoise(xz * 0.7) * 0.16;
}
`,u=`
const float PROP_CUT_HEIGHT = ${e.toFixed(4)};
const float PROP_FALL_ANGLE = 1.48;

vec3 rotateAboutAxis(vec3 vector, vec3 axis, float angle) {
  float c = cos(angle);
  return vector * c + cross(axis, vector) * sin(angle) + axis * dot(axis, vector) * (1.0 - c);
}

vec3 chopPropPosition(vec3 position, vec2 wind, vec4 chop, vec3 fallDirection, float time) {
  vec3 across = vec3(-fallDirection.z, 0.0, fallDirection.x);
  float rattle = sin(time * 36.0 + position.y * 3.0) * chop.x;
  position += (across * 0.6 + fallDirection * 0.4) * rattle * (wind.x * 0.12 + wind.y * 0.03);
  if (chop.y <= 0.0) return position;
  if (position.y < PROP_CUT_HEIGHT) return vec3(0.0, PROP_CUT_HEIGHT * 0.5, 0.0);
  vec3 pivot = vec3(0.0, PROP_CUT_HEIGHT, 0.0);
  vec3 axis = normalize(cross(vec3(0.0, 1.0, 0.0), fallDirection));
  position = pivot + rotateAboutAxis(position - pivot, axis, chop.y * PROP_FALL_ANGLE);
  position.y -= chop.w * 1.6;
  return position;
}

vec3 chopPropNormal(vec3 normal, vec4 chop, vec3 fallDirection) {
  if (chop.y <= 0.0) return normal;
  vec3 axis = normalize(cross(vec3(0.0, 1.0, 0.0), fallDirection));
  return rotateAboutAxis(normal, axis, chop.y * PROP_FALL_ANGLE);
}
`,d=[.93,.86,.68],f=.32;export{l as a,r as c,u as i,i as l,d as n,s as o,c as r,o as s,f as t,a as u};