const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./lib-CjrB4Nx5.js","./CanvasPool-CWB7dUpA.js","./preload-helper-BaNbYf_w.js","./Filter-K5N_DjEv.js","./canvasUtils-DgOpi9E8.js","./Cache-CjXwQj7Q.js","./RenderTargetSystem-CAVU-a8c.js","./GCManagedHash-D-KtdWRQ.js","./GraphicsContext-cHTD_JxT.js","./getTextureBatchBindGroup-BztqtdtG.js","./getTexelRangeRects-DypyhLPZ.js"])))=>i.map(i=>d[i]);
import{B as e,C as t,E as n,G as r,K as i,R as a,S as o,a as s,f as c,h as l,l as u,n as d,w as f,x as p}from"./CanvasPool-CWB7dUpA.js";import{Ot as m,bt as h,f as g,m as _,n as v}from"./periodic-noise-DIDp6cIr.js";import{D as y,E as ee,O as b,S as te,T as x,k as S,m as ne,p as re,q as C,r as ie,w}from"./environment-B7MmBhz8.js";import{h as ae,y as T}from"./mountain-builder-B4W7TNMO.js";import{E,f as oe,ft as se,pt as D}from"./animal-pose-D1GvDMCA.js";import{B as O,R as ce,c as le,i as ue}from"./island-rocks-B5FTjqjs.js";import{a as k,n as de,o as fe}from"./prop-meshes-mzBwaOtM.js";import{t as pe}from"./preload-helper-BaNbYf_w.js";import{A as me,E as he,O as ge,V as _e,a as ve,d as ye,f as A,i as be,k as j,n as xe,o as Se,r as M,s as Ce,t as N,u as we,w as Te,x as Ee,y as P,z as De}from"./main-vws9ZWJ3.js";import{a as F,c as I,i as L,l as Oe,n as ke,o as R,r as Ae,s as je,t as Me,u as Ne}from"./water-field-DDamrZtA.js";import{n as Pe,r as Fe}from"./rock-glsl-DjCSAbKF.js";import{a as Ie,c as Le,l as Re,n as ze,o as Be,s as Ve,t as He,u as Ue}from"./animal-silhouette-DnTRNxRh.js";import{t as We}from"./rock-mesh-registry-Bw_GCYTy.js";import{a as Ge,i as Ke,n as qe,o as Je,r as Ye,t as Xe}from"./stump-meshes-CT9d5Fi0.js";import{c as Ze,d as Qe,f as z,h as $e,l as et,m as tt,o as B,p as V,r as nt,u as rt}from"./lib-CjrB4Nx5.js";import{h as it,l as H,s as at}from"./Filter-K5N_DjEv.js";import{r as ot}from"./canvasUtils-DgOpi9E8.js";import{n as st,t as U}from"./Cache-CjXwQj7Q.js";import{t as ct}from"./GraphicsContext-cHTD_JxT.js";import{A as lt,C as ut,D as dt,E as ft,M as pt,O as mt,S as ht,T as gt,_ as _t,a as vt,b as yt,c as bt,d as xt,f as St,g as Ct,h as wt,i as Tt,j as Et,k as Dt,m as Ot,n as kt,p as At,r as jt,s as Mt,t as Nt,u as Pt,v as Ft,w as It,x as Lt}from"./waterfall-glsl-DneQ2c0x.js";var Rt={test(e){return typeof e==`string`&&e.startsWith(`info face=`)},parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let e in t){let r=t[e].match(/^[a-z]+/gm)[0],i=t[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),a={};for(let e in i){let t=i[e].split(`=`),n=t[0],r=t[1].replace(/"/gm,``),o=parseFloat(r);a[n]=isNaN(o)?r:o}n[r].push(a)}let r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},[i]=n.info,[a]=n.common,[o]=n.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(a.lineHeight,10);let s=n.page;for(let e=0;e<s.length;e++)r.pages.push({id:parseInt(s[e].id,10)||0,file:s[e].file});let c={};r.baseLineOffset=a.base===void 0?0:r.lineHeight-parseInt(a.base,10);let l=n.char;for(let e=0;e<l.length;e++){let t=l[e],n=parseInt(t.id,10),i=t.letter??t.char??String.fromCharCode(n);i===`space`&&(i=` `),c[n]=i,r.chars[i]={id:n,page:parseInt(t.page,10)||0,x:parseInt(t.x,10),y:parseInt(t.y,10),width:parseInt(t.width,10),height:parseInt(t.height,10),xOffset:parseInt(t.xoffset,10),yOffset:parseInt(t.yoffset,10),xAdvance:parseInt(t.xadvance,10),kerning:{}}}let u=n.kerning||[];for(let e=0;e<u.length;e++){let t=parseInt(u[e].first,10),n=parseInt(u[e].second,10),i=parseInt(u[e].amount,10);r.chars[c[n]]&&(r.chars[c[n]].kerning[c[t]]=i)}return r}},zt={test(e){let t=e;return typeof t!=`string`&&`getElementsByTagName`in t&&t.getElementsByTagName(`page`).length&&t.getElementsByTagName(`info`)[0].getAttribute(`face`)!==null},parse(e){let t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:``,distanceField:null,baseLineOffset:0},n=e.getElementsByTagName(`info`)[0],r=e.getElementsByTagName(`common`)[0],i=e.getElementsByTagName(`distanceField`)[0];i&&(t.distanceField={type:i.getAttribute(`fieldType`),range:parseInt(i.getAttribute(`distanceRange`),10)});let a=e.getElementsByTagName(`page`),o=e.getElementsByTagName(`char`),s=e.getElementsByTagName(`kerning`);t.fontSize=parseInt(n.getAttribute(`size`),10),t.fontFamily=n.getAttribute(`face`),t.lineHeight=parseInt(r.getAttribute(`lineHeight`),10);for(let e=0;e<a.length;e++)t.pages.push({id:parseInt(a[e].getAttribute(`id`),10)||0,file:a[e].getAttribute(`file`)});let c={},l=r.getAttribute(`base`);t.baseLineOffset=l===null?0:t.lineHeight-parseInt(l,10);for(let e=0;e<o.length;e++){let n=o[e],r=parseInt(n.getAttribute(`id`),10),i=n.getAttribute(`letter`)??n.getAttribute(`char`)??String.fromCharCode(r);i===`space`&&(i=` `),c[r]=i,t.chars[i]={id:r,page:parseInt(n.getAttribute(`page`),10)||0,x:parseInt(n.getAttribute(`x`),10),y:parseInt(n.getAttribute(`y`),10),width:parseInt(n.getAttribute(`width`),10),height:parseInt(n.getAttribute(`height`),10),xOffset:parseInt(n.getAttribute(`xoffset`),10),yOffset:parseInt(n.getAttribute(`yoffset`),10),xAdvance:parseInt(n.getAttribute(`xadvance`),10),kerning:{}}}for(let e=0;e<s.length;e++){let n=parseInt(s[e].getAttribute(`first`),10),r=parseInt(s[e].getAttribute(`second`),10),i=parseInt(s[e].getAttribute(`amount`),10);t.chars[c[r]]&&(t.chars[c[r]].kerning[c[n]]=i)}return t}},Bt={test(e){return typeof e==`string`&&e.match(/<font(\s|>)/)?zt.test(l.get().parseXML(e)):!1},parse(e){return zt.parse(l.get().parseXML(e))}},Vt=[`.xml`,`.fnt`],Ht={extension:{type:r.CacheParser,name:`cacheBitmapFont`},test:e=>!!e?.pages&&!!e?.chars&&typeof e?.fontFamily==`string`&&e.fontFamily!==``,getCacheableAssets(e,t){let n={};return e.forEach(e=>{n[e]=t,n[`${e}-bitmap`]=t}),n[`${t.fontFamily}-bitmap`]=t,n}},Ut={extension:{type:r.LoadParser,priority:V.Normal},name:`loadBitmapFont`,id:`bitmap-font`,test(e){return Vt.includes(z.extname(e).toLowerCase())},async testParse(e){return Rt.test(e)||Bt.test(e)},async parse(e,t,n){let r=Rt.test(e)?Rt.parse(e):Bt.parse(e),{src:i}=t,{pages:a}=r,o=[],s=r.distanceField?{scaleMode:`linear`,alphaMode:`premultiply-alpha-on-upload`,autoGenerateMipmaps:!1,resolution:1}:{};for(let e=0;e<a.length;++e){let t=a[e].file,n=z.join(z.dirname(i),t);n=et(n,i),o.push({src:n,data:s})}let[c,{BitmapFont:l}]=await Promise.all([n.load(o),pe(()=>import(`./lib-CjrB4Nx5.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url)]);return new l({data:r,textures:o.map(e=>c[e.src])},i)},async load(e,t){return await(await l.get().fetch(e)).text()},async unload(e,t,n){await Promise.all(e.pages.map(e=>n.unload(e.texture.source._sourceOrigin))),e.destroy()}},Wt=class{constructor(e,t=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e){e.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log(`[BackgroundLoader] assets: `,this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<t;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}},Gt={extension:{type:r.CacheParser,name:`cacheTextureArray`},test:e=>Array.isArray(e)&&e.every(e=>e instanceof f),getCacheableAssets:(e,t)=>{let n={};return e.forEach(e=>{t.forEach((t,r)=>{n[e+(r===0?``:r+1)]=t})}),n}};async function Kt(e){if(`Image`in globalThis)return new Promise(t=>{let n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e});if(`createImageBitmap`in globalThis&&`fetch`in globalThis){try{let t=await(await fetch(e)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}var qt={extension:{type:r.DetectionParser,priority:1},test:async()=>Kt(`data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=`),add:async e=>[...e,`avif`],remove:async e=>e.filter(e=>e!==`avif`)},Jt=[`png`,`jpg`,`jpeg`],Yt={extension:{type:r.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...Jt],remove:async e=>e.filter(e=>!Jt.includes(e))},Xt=`WorkerGlobalScope`in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Zt(e){return!Xt&&document.createElement(`video`).canPlayType(e)!==``}var Qt={extension:{type:r.DetectionParser,priority:0},test:async()=>Zt(`video/mp4`),add:async e=>[...e,`mp4`,`m4v`],remove:async e=>e.filter(e=>e!==`mp4`&&e!==`m4v`)},$t={extension:{type:r.DetectionParser,priority:0},test:async()=>Zt(`video/ogg`),add:async e=>[...e,`ogv`],remove:async e=>e.filter(e=>e!==`ogv`)},en={extension:{type:r.DetectionParser,priority:0},test:async()=>Zt(`video/webm`),add:async e=>[...e,`webm`],remove:async e=>e.filter(e=>e!==`webm`)},tn={extension:{type:r.DetectionParser,priority:0},test:async()=>Kt(`data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=`),add:async e=>[...e,`webp`],remove:async e=>e.filter(e=>e!==`webp`)},nn=class e{constructor(){this.loadOptions={...e.defaultOptions},this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,n)=>(this._parsersValidated=!1,e[t]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){let n={promise:null,parser:null};return n.promise=(async()=>{let r=null,i=null;if((t.parser||t.loadParser)&&(i=this._parserHash[t.parser||t.loadParser],t.loadParser&&p(`[Assets] "loadParser" is deprecated, use "parser" instead for ${e}`),i||p(`[Assets] specified load parser "${t.parser||t.loadParser}" not found while loading ${e}`)),!i){for(let n=0;n<this.parsers.length;n++){let r=this.parsers[n];if(r.load&&r.test?.(e,t,this)){i=r;break}}if(!i)return p(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,t,this),n.parser=i;for(let e=0;e<this.parsers.length;e++){let i=this.parsers[e];i.parse&&i.parse&&await i.testParse?.(r,t,this)&&(r=await i.parse(r,t,this)||r,n.parser=i)}return r})(),n}async load(t,n){this._parsersValidated||this._validateParsers();let{onProgress:r,onError:i,strategy:a,retryCount:o,retryDelay:s}=typeof n==`function`?{...e.defaultOptions,...this.loadOptions,onProgress:n}:{...e.defaultOptions,...this.loadOptions,...n||{}},c=0,l={},u=Qe(t),d=st(t,e=>({alias:[e],src:e,data:{}})),f=d.reduce((e,t)=>e+(t.progressSize||1),0),p=d.map(async e=>{let t=z.toAbsolute(e.src);l[e.src]||(await this._loadAssetWithRetry(t,e,{onProgress:r,onError:i,strategy:a,retryCount:o,retryDelay:s},l),c+=e.progressSize||1,r&&r(c/f))});return await Promise.all(p),u?l[d[0].src]:l}async unload(e){let t=st(e,e=>({alias:[e],src:e})).map(async e=>{let t=z.toAbsolute(e.src),n=this.promiseCache[t];if(n){let r=await n.promise;delete this.promiseCache[t],await n.parser?.unload?.(r,e,this)}});await Promise.all(t)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name||e.id).reduce((e,t)=>(!t.name&&!t.id?p(`[Assets] parser should have an id`):(e[t.name]||e[t.id])&&p(`[Assets] parser id conflict "${t.id}"`),e[t.name]=t,t.id&&(e[t.id]=t),e),{})}async _loadAssetWithRetry(e,t,n,r){let i=0,{onError:a,strategy:o,retryCount:s,retryDelay:c}=n,l=e=>new Promise(t=>setTimeout(t,e));for(;;)try{this.promiseCache[e]||(this.promiseCache[e]=this._getLoadPromiseAndParser(e,t)),r[t.src]=await this.promiseCache[e].promise;return}catch(n){if(delete this.promiseCache[e],delete r[t.src],i++,o===`retry`&&!(o!==`retry`||i>s)){a&&a(n,t),await l(c);continue}if(o===`skip`){a&&a(n,t);return}a&&a(n,t);let u=Error(`[Loader.load] Failed to load ${e}.
${n}`);throw n instanceof Error&&n.stack&&(u.stack=n.stack),u}}};nn.defaultOptions={onProgress:void 0,onError:void 0,strategy:`throw`,retryCount:3,retryDelay:250};var rn=nn;function W(e,t){if(Array.isArray(t)){for(let n of t)if(e.startsWith(`data:${n}`))return!0;return!1}return e.startsWith(`data:${t}`)}function G(e,t){let n=e.split(`?`)[0],r=z.extname(n).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}var an=`.json`,on=`application/json`,sn={extension:{type:r.LoadParser,priority:V.Low},name:`loadJson`,id:`json`,test(e){return W(e,on)||G(e,an)},async load(e){return await(await l.get().fetch(e)).json()}},cn=`.txt`,ln=`text/plain`,un={name:`loadTxt`,id:`text`,extension:{type:r.LoadParser,priority:V.Low,name:`loadTxt`},test(e){return W(e,ln)||G(e,cn)},async load(e){return await(await l.get().fetch(e)).text()}},dn=[`normal`,`bold`,`100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`],fn=[`.ttf`,`.otf`,`.woff`,`.woff2`],pn=[`font/ttf`,`font/otf`,`font/woff`,`font/woff2`],mn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function hn(e){let t=z.extname(e),n=z.basename(e,t).replace(/(-|_)/g,` `).toLowerCase().split(` `).map(e=>e.charAt(0).toUpperCase()+e.slice(1)),r=n.length>0;for(let e of n)if(!e.match(mn)){r=!1;break}let i=n.join(` `);return r||(i=`"${i.replace(/[\\"]/g,`\\$&`)}"`),i}var gn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function _n(e){return gn.test(e)?e:encodeURI(e)}var vn={extension:{type:r.LoadParser,priority:V.Low},name:`loadWebFont`,id:`web-font`,test(e){return W(e,pn)||G(e,fn)},async load(e,t){let n=l.get().getFontFaceSet();if(n){let r=[],i=t.data?.family??hn(e),a=t.data?.weights?.filter(e=>dn.includes(e))??[`normal`],o=t.data??{};for(let t=0;t<a.length;t++){let s=a[t],c=new FontFace(i,`url('${_n(e)}')`,{...o,weight:s});await c.load(),n.add(c),r.push(c)}return U.has(`${i}-and-url`)?U.get(`${i}-and-url`).entries.push({url:e,faces:r}):U.set(`${i}-and-url`,{entries:[{url:e,faces:r}]}),r.length===1?r[0]:r}return p(`[loadWebFont] FontFace API is not supported. Skipping loading font`),null},unload(e){let t=Array.isArray(e)?e:[e],n=t[0].family,r=U.get(`${n}-and-url`),i=r.entries.find(e=>e.faces.some(e=>t.indexOf(e)!==-1));i.faces=i.faces.filter(e=>t.indexOf(e)===-1),i.faces.length===0&&(r.entries=r.entries.filter(e=>e!==i)),t.forEach(e=>{l.get().getFontFaceSet().delete(e)}),r.entries.length===0&&U.remove(`${n}-and-url`)}};function yn(e,t=1){let n=rt.RETINA_PREFIX?.exec(e);return n?parseFloat(n[1]):t}function bn(e,t,n){e.label=n,e._sourceOrigin=n;let r=new f({source:e,label:n}),i=()=>{delete t.promiseCache[n],U.has(n)&&U.remove(n)};return r.source.once(`destroy`,()=>{t.promiseCache[n]&&(p(`[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource.`),i())}),r.once(`destroy`,()=>{e.destroyed||(p(`[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture.`),i())}),r}var xn=`.svg`,Sn=`image/svg+xml`,Cn={extension:{type:r.LoadParser,priority:V.Low,name:`loadSVG`},name:`loadSVG`,id:`svg`,config:{crossOrigin:`anonymous`,parseAsGraphicsContext:!1},test(e){return W(e,Sn)||G(e,xn)},async load(e,t,n){return t.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?Tn(e):wn(e,t,n,this.config.crossOrigin)},unload(e){e.destroy(!0)}};async function wn(e,t,n,r){let i=await l.get().fetch(e),a=l.get().createImage();a.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(await i.text())}`,a.crossOrigin=r,await a.decode();let o=t.data?.width??a.width,s=t.data?.height??a.height,c=t.data?.resolution||yn(e),u=Math.ceil(o*c),d=Math.ceil(s*c),f=l.get().createCanvas(u,d),p=f.getContext(`2d`);p.imageSmoothingEnabled=!0,p.imageSmoothingQuality=`high`,p.drawImage(a,0,0,o*c,s*c);let{parseAsGraphicsContext:m,...h}=t.data??{};return bn(new ot({resource:f,alphaMode:`premultiply-alpha-on-upload`,resolution:c,...h}),n,e)}async function Tn(e){let t=await(await l.get().fetch(e)).text(),n=new ct;return n.svg(t),n}var En=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function") return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,Dn=null,On=class{constructor(){Dn||=URL.createObjectURL(new Blob([En],{type:`application/javascript`})),this.worker=new Worker(Dn)}};On.revokeObjectURL=function(){Dn&&=(URL.revokeObjectURL(Dn),null)};var kn=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,An=null,jn=class{constructor(){An||=URL.createObjectURL(new Blob([kn],{type:`application/javascript`})),this.worker=new Worker(An)}};jn.revokeObjectURL=function(){An&&=(URL.revokeObjectURL(An),null)};var Mn=0,Nn,Pn=new class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported===void 0&&(this._isImageBitmapSupported=new Promise(e=>{let{worker:t}=new On;t.addEventListener(`message`,n=>{t.terminate(),On.revokeObjectURL(),e(n.data)})})),this._isImageBitmapSupported}loadImageBitmap(e,t){return this._run(`loadImageBitmap`,[e,t?.data?.alphaMode])}async _initWorkers(){this._initialized||=!0}_getWorker(){Nn===void 0&&(Nn=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Nn&&(this._createdWorkers++,e=new jn().worker,e.addEventListener(`message`,e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){this._resolveHash[e.uuid]&&(e.error===void 0?this._resolveHash[e.uuid].resolve(e.data):this._resolveHash[e.uuid].reject(e.error),delete this._resolveHash[e.uuid])}async _run(e,t){await this._initWorkers();let n=new Promise((n,r)=>{this._queue.push({id:e,arguments:t,resolve:n,reject:r})});return this._next(),n}_next(){if(!this._queue.length)return;let e=this._getWorker();if(!e)return;let t=this._queue.pop(),n=t.id;this._resolveHash[Mn]={resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:Mn++,id:n})}reset(){this._workerPool.forEach(e=>e.terminate()),this._workerPool.length=0,Object.values(this._resolveHash).forEach(({reject:e})=>{e?.(Error(`WorkerManager has been reset before completion`))}),this._resolveHash={},this._queue.length=0,this._initialized=!1,this._createdWorkers=0}},Fn=[`.jpeg`,`.jpg`,`.png`,`.webp`,`.avif`],In=[`image/jpeg`,`image/png`,`image/webp`,`image/avif`];async function Ln(e,t){let n=await l.get().fetch(e);if(!n.ok)throw Error(`[loadImageBitmap] Failed to fetch ${e}: ${n.status} ${n.statusText}`);let r=await n.blob();return t?.data?.alphaMode===`premultiplied-alpha`?createImageBitmap(r,{premultiplyAlpha:`none`}):createImageBitmap(r)}var Rn={name:`loadTextures`,id:`texture`,extension:{type:r.LoadParser,priority:V.High,name:`loadTextures`},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:`anonymous`},test(e){return W(e,In)||G(e,Fn)},async load(e,t,n){let r=null;return r=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Pn.isImageBitmapSupported()?await Pn.loadImageBitmap(e,t):await Ln(e,t):await new Promise((t,n)=>{r=l.get().createImage(),r.crossOrigin=this.config.crossOrigin,r.src=e,r.complete?t(r):(r.onload=()=>{t(r)},r.onerror=n)}),bn(new ot({resource:r,alphaMode:`premultiply-alpha-on-upload`,resolution:t.data?.resolution||yn(e),...t.data}),n,e)},unload(e){e.destroy(!0)}},zn=[`.mp4`,`.m4v`,`.webm`,`.ogg`,`.ogv`,`.h264`,`.avi`,`.mov`],Bn,Vn;function Hn(e,t,n){n===void 0&&!t.startsWith(`data:`)?e.crossOrigin=Wn(t):n!==!1&&(e.crossOrigin=typeof n==`string`?n:`anonymous`)}function Un(e){return new Promise((t,n)=>{e.addEventListener(`canplaythrough`,r),e.addEventListener(`error`,i),e.load();function r(){a(),t()}function i(e){a(),n(e)}function a(){e.removeEventListener(`canplaythrough`,r),e.removeEventListener(`error`,i)}})}function Wn(e,t=globalThis.location){if(e.startsWith(`data:`))return``;t||=globalThis.location;let n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?`anonymous`:``}function Gn(){let e=[],t=[];for(let n of zn){let r=tt.MIME_TYPES[n.substring(1)]||`video/${n.substring(1)}`;Zt(r)&&(e.push(n),t.includes(r)||t.push(r))}return{validVideoExtensions:e,validVideoMime:t}}var Kn={name:`loadVideo`,id:`video`,extension:{type:r.LoadParser,name:`loadVideo`},test(e){if(!Bn||!Vn){let{validVideoExtensions:e,validVideoMime:t}=Gn();Bn=e,Vn=t}let t=W(e,Vn),n=G(e,Bn);return t||n},async load(e,t,n){let r={...tt.defaultOptions,resolution:t.data?.resolution||yn(e),alphaMode:t.data?.alphaMode||await $e(),...t.data},i=document.createElement(`video`),a={preload:r.autoLoad===!1?void 0:`auto`,"webkit-playsinline":r.playsinline===!1?void 0:``,playsinline:r.playsinline===!1?void 0:``,muted:r.muted===!0?``:void 0,loop:r.loop===!0?``:void 0,autoplay:r.autoPlay===!1?void 0:``};Object.keys(a).forEach(e=>{let t=a[e];t!==void 0&&i.setAttribute(e,t)}),r.muted===!0&&(i.muted=!0),Hn(i,e,r.crossorigin);let o=document.createElement(`source`),s;if(r.mime)s=r.mime;else if(e.startsWith(`data:`))s=e.slice(5,e.indexOf(`;`));else if(!e.startsWith(`blob:`)){let t=e.split(`?`)[0].slice(e.lastIndexOf(`.`)+1).toLowerCase();s=tt.MIME_TYPES[t]||`video/${t}`}return o.src=e,s&&(o.type=s),new Promise((a,s)=>{r.preload&&!r.autoPlay&&i.load(),i.addEventListener(`canplay`,c),i.addEventListener(`error`,l),o.addEventListener(`error`,l),i.appendChild(o);async function c(){let o=new tt({...r,resource:i});u(),t.data.preload&&await Un(i),a(bn(o,n,e))}function l(e){u(),s(e)}function u(){i.removeEventListener(`canplay`,c),i.removeEventListener(`error`,l),o.removeEventListener(`error`,l)}})},unload(e){e.destroy(!0)}},qn={extension:{type:r.ResolveParser,name:`resolveTexture`},test:Rn.test,parse:e=>({resolution:parseFloat(rt.RETINA_PREFIX.exec(e)?.[1]??`1`),format:e.split(`.`).pop(),src:e})},Jn={extension:{type:r.ResolveParser,priority:-2,name:`resolveJson`},test:e=>rt.RETINA_PREFIX.test(e)&&e.endsWith(`.json`),parse:qn.parse},K=new class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new rt,this.loader=new rn,this.cache=U,this._backgroundLoader=new Wt(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){if(this._initialized){p(`[Assets]AssetManager already initialized, did you load before calling this Assets.init()?`);return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let t=e.manifest;typeof t==`string`&&(t=await this.load(t)),this.resolver.addManifest(t)}let t=e.texturePreference?.resolution??1,n=typeof t==`number`?[t]:t,r=await this._detectFormats({preferredFormats:e.texturePreference?.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:n}}),e.preferences&&this.setPreferences(e.preferences),e.loadOptions&&(this.loader.loadOptions={...this.loader.loadOptions,...e.loadOptions})}add(e){this.resolver.add(e)}async load(e,t){this._initialized||await this.init();let n=Qe(e),r=st(e).map(e=>{if(typeof e!=`string`){let t=this.resolver.getAlias(e);return t.some(e=>!this.resolver.hasKey(e))&&this.add(e),Array.isArray(t)?t[0]:t}return this.resolver.hasKey(e)||this.add({alias:e,src:e}),e}),i=this.resolver.resolve(r),a=await this._mapLoadToResolve(i,t);return n?a[r[0]]:a}addBundle(e,t){this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let n=!1;typeof e==`string`&&(n=!0,e=[e]);let r=this.resolver.resolveBundle(e),i={},a=Object.keys(r),o=0,s=[],c=()=>{t?.(s.reduce((e,t)=>e+t,0)/o)},l=a.map((e,t)=>{let n=r[e],a=Object.values(n),l=[...new Set(a.flat())].reduce((e,t)=>e+(t.progressSize||1),0);return s.push(0),o+=l,this._mapLoadToResolve(n,e=>{s[t]=e*l,c()}).then(t=>{i[e]=t})});return await Promise.all(l),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e==`string`&&(e=[e]);let t=this.resolver.resolveBundle(e);Object.values(t).forEach(e=>{this._backgroundLoader.add(Object.values(e))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e==`string`)return U.get(e);let t={};for(let n=0;n<e.length;n++)t[n]=U.get(e[n]);return t}async _mapLoadToResolve(e,t){let n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let r=await this.loader.load(n,t);this._backgroundLoader.active=!0;let i={};return n.forEach(e=>{let t=r[e.src],n=[e.src];e.alias&&n.push(...e.alias),n.forEach(e=>{i[e]=t}),U.set(n,t)}),i}async unload(e){this._initialized||await this.init();let t=st(e).map(e=>typeof e==`string`?e:e.src),n=this.resolver.resolve(t);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=st(e);let t=this.resolver.resolveBundle(e),n=Object.keys(t).map(e=>this._unloadFromResolved(t[e]));await Promise.all(n)}async _unloadFromResolved(e){let t=Object.values(e);t.forEach(e=>{U.remove(e.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(let n of e.detections)e.skipDetections||await n.test()?t=await n.add(t):e.skipDetections||(t=await n.remove(t));return t=t.filter((e,n)=>t.indexOf(e)===n),t}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(t=>{t.config&&Object.keys(t.config).filter(t=>t in e).forEach(n=>{t.config[n]=e[n]})})}};i.handleByList(r.LoadParser,K.loader.parsers).handleByList(r.ResolveParser,K.resolver.parsers).handleByList(r.CacheParser,K.cache.parsers).handleByList(r.DetectionParser,K.detections),i.add(Gt,Yt,qt,tn,Qt,$t,en,sn,un,vn,Cn,Rn,Kn,Ut,Ht,qn,Jn);var Yn={loader:r.LoadParser,resolver:r.ResolveParser,cache:r.CacheParser,detection:r.DetectionParser};i.handle(r.Asset,e=>{let t=e.ref;Object.entries(Yn).filter(([e])=>!!t[e]).forEach(([e,n])=>i.add(Object.assign(t[e],{extension:t[e].extension??n})))},e=>{let t=e.ref;Object.keys(Yn).filter(e=>!!t[e]).forEach(e=>i.remove(t[e]))});var Xn=new t,Zn=new e,Qn=new a,$n=class{cull(e,t,n=!0){this._cullRecursive(e,t,n)}_cullRecursive(e,t,n=!0){if(e.cullable&&e.measurable&&e.includeInBuild){if(e.cullArea){Qn.x=t.x,Qn.y=t.y,Qn.width=t.width,Qn.height=t.height;let r=n?e.worldTransform:e.getGlobalTransform(Zn,n);e.culled=!Qn.intersects(e.cullArea,r)}else{let r=it(e,n,Xn);e.culled=r.x>=t.x+t.width||r.y>=t.y+t.height||r.x+r.width<=t.x||r.y+r.height<=t.y}}else e.culled=!1;if(e.cullableChildren&&!e.culled&&e.renderable&&e.measurable&&e.includeInBuild)for(let r=0;r<e.children.length;r++)this._cullRecursive(e.children[r],t,n)}};$n.shared=new $n;var er=$n,tr={cameraRotation:!1,cinematicCamera:!1,dayCycle:!1,dynamicShadows:!1,rain:!1,refraction:!1,snowfall:!1},nr=class extends H{body=new at;tunic=new at;tunicFrame;constructor(e=`#d6c4a3`){super(),this.body.anchor.set(.5,.825),this.tunic.anchor.set(.5,.825),this.addChild(this.body,this.tunic),this.setTeamColor(e)}setTeamColor(e){this.tunic.tint=e}setFrame(e,t,n){let r=n?.anchor??{x:.5,y:.825};this.body.anchor.set(r.x,r.y),this.tunic.anchor.copyFrom(this.body.anchor),this.body.scale.set(n?.displayScale??1),this.tunic.scale.copyFrom(this.body.scale),this.body.texture=e,this.tunicFrame?.destroy(!1),this.tunicFrame=new f({source:t.source,frame:e.frame.clone(),orig:e.orig.clone(),trim:e.trim?.clone(),rotate:e.rotate}),this.tunic.texture=this.tunicFrame}destroy(){this.tunicFrame?.destroy(!1),this.tunicFrame=void 0,super.destroy({children:!0})}},q=new Map,rr=(e,t)=>{let n=q.get(e);return(!n||n.unloading)&&(n={users:0,urls:t,promise:(n?.unloading??Promise.resolve()).then(()=>Promise.all(t.map(e=>K.load(e))))},q.set(e,n)),n.timer&&(clearTimeout(n.timer),n.timer=void 0),n.users++,n.promise},ir=e=>{let t=q.get(e);!t||--t.users>0||(t.timer=setTimeout(()=>{t.users||q.get(e)!==t||(t.unloading=t.promise.then(()=>K.unload(t.urls)).catch(()=>{}),t.unloading.finally(()=>{!t.users&&q.get(e)===t&&q.delete(e)}))},250))},ar=class{sprite;atlases=new Map;manifest;currentPage;frameTexture;request=0;disposed=!1;customTint=!1;baseURL;constructor(e,t){this.baseURL=e.endsWith(`/`)?e:`${e}/`,this.sprite=new nr(t),this.customTint=t!==void 0}setTeamColor(e){this.customTint=!0,this.sprite.setTeamColor(e)}url(e){return new URL(e,this.baseURL).href}async loadManifest(){if(!this.manifest){let e=await fetch(this.url(`manifest.json`));if(!e.ok)throw Error(`Pixi worker manifest HTTP ${e.status}`);this.manifest=await e.json()}return this.manifest}async setPose(e,t,n){if(this.disposed)throw Error(`Pixi worker disposed`);let r=++this.request,i=(await this.loadManifest()).clips[e];if(!i)throw Error(`Pixi action not baked: ${e}`);this.customTint||this.sprite.setTeamColor(i.tunicTint??`#d6c4a3`);let o=this.atlases.get(e);o||(o=fetch(this.url(i.atlas)).then(async e=>{if(!e.ok)throw Error(`Pixi atlas HTTP ${e.status}`);return e.json()}),this.atlases.set(e,o));let s=await o;if(r!==this.request||this.disposed)return;let c=(Math.round(t)%s.meta.directions+s.meta.directions)%s.meta.directions,l=i.loop?(n%i.duration+i.duration)%i.duration:Math.max(0,Math.min(n,i.duration)),u=Math.min(s.meta.frameCount-1,Math.floor(l*s.meta.fps)),d=s.frames[`${e}/d${String(c).padStart(2,`0`)}/f${String(u).padStart(3,`0`)}`];if(!d)throw Error(`Missing worker frame ${e}/${c}/${u}`);let p=s.pages[d.page],m=new URL(i.atlas,this.baseURL),h=[new URL(p.image,m).href,new URL(p.tunicMask,m).href],g=h.join(`|`),_=await rr(g,h);if(r!==this.request||this.disposed){ir(g);return}let v=this.currentPage;this.currentPage=g,this.frameTexture?.destroy(!1);let y=d.frame,ee=d.sourceSize,b=d.spriteSourceSize;this.frameTexture=new f({source:_[0].source,frame:new a(y.x,y.y,y.w,y.h),orig:new a(0,0,ee.w,ee.h),trim:new a(b.x,b.y,b.w,b.h)}),this.sprite.setFrame(this.frameTexture,_[1],s.meta),v&&ir(v)}destroy(){this.disposed=!0,this.request++,this.sprite.destroy(),this.frameTexture?.destroy(!1),this.currentPage&&ir(this.currentPage),this.atlases.clear()}},or=e=>`#version 300 es
in vec2 aPosition;in vec2 aUV;uniform mat3 uProjectionMatrix;uniform mat3 uWorldTransformMatrix;uniform mat3 uTransformMatrix;uniform vec3 uWorld;uniform float uHeightScale;out vec2 vUV;
${e}
void main(){vec3 clip=uProjectionMatrix*uWorldTransformMatrix*uTransformMatrix*vec3(aPosition,1.0);gl_Position=vec4(clip.xy,isoDepth(uWorld+vec3(0.0,max(0.0,-aPosition.y)*uHeightScale,0.0)+DEPTH_VIEW*.015),1.0);vUV=aUV;}`,sr=e=>{let t=new Float32Array(8),n=new Float32Array(8),r=new d({attributes:{aPosition:{buffer:t,format:`float32x2`},aUV:{buffer:n,format:`float32x2`}},indexBuffer:new Uint16Array([0,1,2,0,2,3])}),i=new u({uWorld:{value:new Float32Array(3),type:`vec3<f32>`},uHeightScale:{value:1.52*P/(96*Math.cos(Math.PI/6)),type:`f32`},...e.uniforms}),a=new s({glProgram:c.from({name:e.name,vertex:or(e.depthGlsl),fragment:e.fragment}),resources:{billboardUniforms:i,uBody:f.WHITE.source,uTunic:f.WHITE.source}}),o=new B({geometry:r,shader:a});o.state.depthTest=!0,o.state.depthMask=!0;let l;return{mesh:o,syncFrame:(e,i)=>{let o=e.texture;if(o===l)return;l=o;let s=o.trim,c=o.frame,u=o.orig,d=e.scale.x,f=(s.x-u.width*e.anchor.x)*d,p=(s.y-u.height*e.anchor.y)*d,m=c.width*d,h=c.height*d;t.set([f,p,f+m,p,f+m,p+h,f,p+h]),r.getBuffer(`aPosition`).update();let g=c.x/o.source.width,_=c.y/o.source.height,v=(c.x+c.width)/o.source.width,y=(c.y+c.height)/o.source.height;n.set([g,_,v,_,v,y,g,y]),r.getBuffer(`aUV`).update(),a.resources.uBody=o.source,a.resources.uTunic=i.texture.source},uniforms:i.uniforms,destroy:()=>{o.destroy(),r.destroy(),a.destroy()}}},cr=(e,t)=>{let n=!1,r=``,i=!1;return{request:(a,o,s)=>{let c=(Math.round(o/(Math.PI*2)*16)%16+16)%16,l=Math.floor(s*24)/24,u=`${a}/${c}/${l}`;n||u===r||(n=!0,r=u,e.setPose(a,c,l).catch(e=>{i||console.error(`${t} sprite load failed`,e)}).finally(()=>{n=!1}))},dispose:()=>{i=!0}}},lr=`#version 300 es
precision highp float;in vec2 vUV;uniform sampler2D uBody;uniform sampler2D uTunic;uniform vec3 uTint;out vec4 finalColor;
void main(){vec4 b=texture(uBody,vUV),t=texture(uTunic,vUV);finalColor=vec4(t.rgb*uTint+b.rgb*(1.0-t.a),t.a+b.a*(1.0-t.a));if(finalColor.a<.02)discard;}`,ur=e=>[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255],dr=async(e,t)=>{let n=new H,r=new Ze,i=new Ze;r.ellipse(0,0,.27*w,.135*w).stroke({color:16765276,width:2}),i.ellipse(0,0,.21*w,.105*w).fill({color:2433047,alpha:.18});let a=new ar(`${mt}tripo/${e.variant}/pixi/`,Se(ve));await a.setPose(`idle_breathe`,0,0).catch(e=>{throw a.destroy(),r.destroy(),i.destroy(),n.destroy(),e}),n.addChild(i,r,a.sprite),a.sprite.scale.set(1.52*w*P/96);let o=sr({depthGlsl:t,fragment:lr,name:`worker-billboard`,uniforms:{uTint:{value:new Float32Array(3),type:`vec3<f32>`}}});a.sprite.addChild(o.mesh),a.sprite.body.visible=!1,a.sprite.tunic.visible=!1;let s=cr(a,`Worker`);return{container:n,setColor:e=>a.setTeamColor(e),update:e=>{if(n.visible=!!e,!e)return;let t=S(e.x,e.y,e.z);n.position.set(t.screenX,t.screenY),r.visible=e.selected,o.uniforms.uWorld.set([e.x,e.y,e.z]),o.uniforms.uTint.set(ur(a.sprite.tunic.tint)),o.syncFrame(a.sprite.body,a.sprite.tunic),s.request(e.action,e.heading,e.animationTime)},dispose:()=>{s.dispose(),o.destroy(),a.destroy(),r.destroy(),i.destroy(),n.destroy()}}},fr=`#version 300 es
precision highp float;in vec2 vUV;uniform sampler2D uBody;uniform sampler2D uTunic;
uniform vec3 uTint;uniform vec3 uCoat;uniform vec3 uHair;uniform vec4 uLuminance;out vec4 finalColor;
void main(){vec4 b=texture(uBody,vUV);if(b.a<.02)discard;
vec3 m=clamp(texture(uTunic,vUV).rgb/b.a,0.,1.);vec3 base=b.rgb/b.a;
float l=dot(base,vec3(.2126,.7152,.0722));
vec3 c=mix(base,uTint*(l/uLuminance.x),m.r);
c=mix(c,uCoat*pow(l/uLuminance.y,.8),m.g*uLuminance.w);
c=mix(c,uHair*pow(l/uLuminance.z,.45),m.b);
finalColor=vec4(c*b.a,b.a);}`,pr=e=>{let[t,n,r]=new o(e).toRgbArray();return .2126*t+.7152*n+.0722*r},mr=async(e,t,n)=>{let r=new H,i=new Ze;i.ellipse(0,0,.62*w,.31*w).fill({color:2433047,alpha:.18});let a=new ar(`${dt}riders/${e.rider}/pixi/`,Se(ve));await a.setPose(`idle`,0,0),r.addChild(i,a.sprite),a.sprite.scale.set(1.52*w*P/96);let s=Ee(e.coat),c=t.riders.find(t=>t.variant===e.rider),l=sr({depthGlsl:n,fragment:fr,name:`mount-billboard`,uniforms:{uCoat:{value:new Float32Array(new o(s.coat??`#000000`).toRgbArray()),type:`vec3<f32>`},uHair:{value:new Float32Array(new o(s.hair).toRgbArray()),type:`vec3<f32>`},uLuminance:{value:new Float32Array([pr(c.tunicTint),t.horse.coat.coat.srgb,t.horse.coat.hair.srgb,+!!s.coat]),type:`vec4<f32>`},uTint:{value:new Float32Array(3),type:`vec3<f32>`}}});a.sprite.addChild(l.mesh),a.sprite.body.visible=!1,a.sprite.tunic.visible=!1;let u=cr(a,`Mount`);return{container:r,setColor:e=>a.setTeamColor(e),update:e=>{if(r.visible=!!e,!e)return;let t=S(e.x,e.y,e.z);r.position.set(t.screenX,t.screenY),l.uniforms.uWorld.set([e.x,e.y,e.z]),l.uniforms.uTint.set(ur(a.sprite.tunic.tint)),l.syncFrame(a.sprite.body,a.sprite.tunic),u.request(e.clip,e.heading,e.clipTime)},dispose:()=>{u.dispose(),l.destroy(),a.destroy(),i.destroy(),r.destroy()}}},hr=async(e,t)=>{let n=await(await fetch(`${dt}manifest.json`)).json(),r=await Promise.all(e.map(e=>mr(e,n,t))),i=new H;for(let e of r)i.addChild(e.container);return{container:i,setColor:e=>r.forEach(t=>t.setColor(e)),update:e=>r.forEach((t,n)=>t.update(e?.[n])),dispose:()=>{for(let e of r)e.dispose();i.destroy()}}},gr=async(e,t)=>{let n=await ft(e.map(e=>be(e,e=>dr(e,t)))),r=new H;for(let e of n)r.addChild(e.container);return{container:r,setColor:e=>{for(let t of n)t.setColor(e)},update:e=>{n.forEach((t,n)=>t.update(e?.[n]))},dispose:()=>{for(let e of n)e.dispose();r.destroy()}}},_r=(e,t,n)=>{let r=new Float32Array(e.positions.length),i=new Float32Array(e.normals.length);for(let a=0;a<e.positions.length;a+=3)r.set(t(e.positions[a],e.positions[a+1],e.positions[a+2]),a),i.set(n(e.normals[a],e.normals[a+1],e.normals[a+2]),a);return{...e,normals:i,positions:r}},vr=(e,t)=>{let n=Math.cos(t),r=Math.sin(t),i=(e,t,i)=>[e*n-i*r,t,e*r+i*n];return _r(e,i,i)},yr=(e,t)=>{let n=Math.cos(t),r=Math.sin(t),i=(e,t,i)=>[e,t*n-i*r,t*r+i*n];return _r(e,i,i)},br=(e,t)=>_r(e,(e,n,r)=>[e+t[0],n+t[1],r+t[2]],(e,t,n)=>[e,t,n]),xr=[1,6,6,2,1,1,1],Sr=xr.map((e,t)=>xr.slice(0,t).reduce((e,t)=>e+t,0)),Cr=xr.reduce((e,t)=>e+t,0);E.juvenile,E.adult,E.adult;var wr=6,Tr=`
in vec4 aChop;
uniform float uCutHeight;
out vec3 vChop;
out float vLift;
out float vCutLift;
`,Er=`
  vLift = -local.y / max(aFrame.w, 1.0);
  vCutLift = uCutHeight * HEIGHT_PIXELS * aParams.w / max(aFrame.w, 1.0);
  local.x += sin(uTime * 36.0 + vLift * 2.0) * aChop.x * vLift * aFrame.w * 0.06;
  if (aChop.y > 0.0) {
    vec2 pivot = vec2(0.0, -aFrame.w * vCutLift);
    vec2 arm = local - pivot;
    float angle = aChop.y * 1.48 * aChop.z;
    local = pivot + vec2(arm.x * cos(angle) - arm.y * sin(angle), arm.x * sin(angle) + arm.y * cos(angle));
  }
  vChop = vec3(step(0.001, aChop.y), 1.0 - aChop.w, aChop.y);
`,Dr=`
in vec3 vChop;
in float vLift;
in float vCutLift;
`,Or=`
  if ((vChop.x > 0.5 && vLift < vCutLift) || vChop.y <= 0.01) discard;
`,kr=(e,t)=>`#version 300 es
in vec2 aCorner;
in vec2 aPosition;
in vec3 aWorld;
in vec4 aRect;
in vec4 aFrame;
in vec4 aParams;
in vec4 aTint;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
uniform float uDepthBias;
${L}
${I}
${Ve}
${te}
${e}
${t?Tr:``}
out vec2 vUv;
out vec3 vWorld;
out vec4 vParams;
out vec4 vTint;
out vec4 vRect;
out vec2 vSway;
out vec2 vUvPerPixel;
out float vUp;

void main() {
  vec2 local = aCorner * aFrame.xy - aFrame.zw;
  float up = clamp(-local.y / max(aFrame.w, 1.0), 0.0, 1.0);
  vec2 wind = windDisplacement(aWorld.xz, aParams.x, uTime) * aParams.w;
  vec2 sway = vec2((wind.x - wind.y) * HALF_TILE_WIDTH, (wind.x + wind.y) * HALF_TILE_HEIGHT);
  float mirror = mod(aTint.w, 2.0) > 0.5 ? -1.0 : 1.0;
  local.x *= mirror;
  local += sway * pow(up, 1.5);
  vSway = sway;
  vUp = up;
  vRect = aRect;
  vUvPerPixel = (aRect.zw - aRect.xy) / max(aFrame.xy, vec2(1.0)) * vec2(mirror, 1.0);
${t?Er:``}  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  vec3 clip = mvp * vec3(aPosition + local, 1.0);
  gl_Position = vec4(clip.xy, isoDepth(aWorld + DEPTH_VIEW * uDepthBias), 1.0);
  vUv = mix(aRect.xy, aRect.zw, aCorner);
  vWorld = aWorld;
  vParams = aParams;
  vTint = aTint;
}
`,Ar=`
in vec4 vRect;
in vec2 vSway;
in vec2 vUvPerPixel;
in float vUp;
uniform sampler2D uSpriteWind;

vec2 getWindUv() {
  if (vTint.w < 1.5) return vUv;
  vec2 weights = texture(uSpriteWind, vUv).rg;
  vec2 pixels = vSway * (weights.r - pow(vUp, 1.5));
  float flutter = weights.g * min(vParams.w, 1.0) * (0.5 + length(uWind));
  pixels += vec2(
    sin(uTime * 11.0 + vParams.x * 3.0 + vUv.y * 310.0),
    cos(uTime * 8.7 + vParams.x + vUv.x * 290.0) * 0.6
  ) * flutter * 0.8;
  vec2 halfTexel = 0.5 / vec2(textureSize(uSpriteAlbedo, 0));
  return clamp(vUv - clamp(pixels, -3.0, 3.0) * vUvPerPixel, vRect.xy + halfTexel, vRect.zw - halfTexel);
}
`,jr=`
  vec2 texel = uv * vec2(textureSize(uSpriteAlbedo, 0));
  float kind = texture(uSpriteWind, uv).b;
  vec4 winter = getSpriteWinter(albedo.rgb, normal, kind, getSnowMap(vWorld.xz), texel);
  if (winter.a < 0.5) discard;
  albedo.rgb = winter.rgb;
`,Mr=(e,t)=>`#version 300 es
precision highp float;
${e?Dr:``}
in vec2 vUv;
in vec3 vWorld;
in vec4 vParams;
in vec4 vTint;
uniform sampler2D uSpriteAlbedo;
uniform sampler2D uSpriteNormal;
uniform float uAlphaCutoff;
uniform float uOpacity;
out vec4 finalColor;
${L}
${I}
${je}
${F}
${Be}
${Ie}
${R}
${Ar}
${t?le:``}

void main() {
${e?Or:``}
  vec2 uv = getWindUv();
  vec4 albedo = texture(uSpriteAlbedo, uv);
  if (albedo.a < uAlphaCutoff || isHiddenByFog(vParams.z, vWorld.xz)) discard;
  vec3 normal = texture(uSpriteNormal, uv).xyz * 2.0 - 1.0;
  if (mod(vTint.w, 2.0) > 0.5) normal = normal.zyx;
  normal = normalize(normal);
${t?jr:``}
  vec3 color = shadeProp(albedo.rgb * vTint.rgb, normal, vParams.y, vWorld.xz, vParams.z);
  float alpha = albedo.a * uOpacity${e?` * vChop.y`:``};
  finalColor = vec4(gradeColor(color) * alpha, alpha);
}
`,Nr=e=>`#version 300 es
precision highp float;
${e?Dr:``}
in vec2 vUv;
in vec3 vWorld;
in vec4 vParams;
uniform sampler2D uSpriteAlbedo;
uniform float uOpacity;
out vec4 finalColor;
void main() {
  float visible = smoothstep(0.35, 0.6, vParams.z);
  float alpha = texture(uSpriteAlbedo, vUv).a * 0.42 * visible * uOpacity;
  ${e?`alpha *= vChop.y * (1.0 - vChop.z);`:``}
  finalColor = vec4(vec3(0.55, 0.6, 0.72) * alpha, alpha);
}
`,Pr=()=>`#version 300 es
precision highp float;
in vec2 vUv;
in vec3 vWorld;
in vec4 vParams;
uniform sampler2D uSpriteAlbedo;
out vec4 finalColor;
${L}
${I}
${Ie}
void main() {
  if (texture(uSpriteAlbedo, vUv).a < 0.5 || isHiddenByFog(vParams.z, vWorld.xz)) discard;
  float alpha = ${He.toFixed(2)};
  finalColor = vec4(vec3(${ze.map(e=>e.toFixed(2)).join(`, `)}) * alpha, alpha);
}
`,Fr=e=>({uAlphaCutoff:{type:`f32`,value:e.alphaCutoff},uCutHeight:{type:`f32`,value:e.cutHeight??0},uDepthBias:{type:`f32`,value:e.depthBias},uOpacity:{type:`f32`,value:1}}),Ir=(e,t,n)=>{let r=e.cutHeight!==void 0,i=e.winter===!0,a=`${r?`-choppable`:``}${i?`-winter`:``}`;return c.from({fragment:n(r,i),name:`${t}${a}`,vertex:kr(e.depthGlsl,r)})},J=e=>new s({glProgram:Ir(e,`island-sprites`,Mr),resources:{...e.shared,spriteUniforms:Fr(e),uSpriteAlbedo:e.albedo,uSpriteNormal:e.normals,uSpriteWind:e.wind}}),Lr=e=>new s({glProgram:Ir(e,`island-sprite-silhouettes`,Pr),resources:{...e.shared,spriteUniforms:Fr(e),uSpriteAlbedo:e.albedo}}),Rr=e=>new s({glProgram:Ir(e,`island-sprite-shadows`,Nr),resources:{...e.shared,spriteUniforms:Fr(e),uSpriteAlbedo:e.albedo}}),zr=4,Br=()=>{let e=[];for(let t=0;t<=zr;t+=1)e.push(0,t/zr,1,t/zr);return Float32Array.from(e)},Vr=()=>{let e=[];for(let t=0;t<zr;t+=1){let n=t*2;e.push(n,n+1,n+3,n,n+3,n+2)}return Uint16Array.from(e)},Hr=Br(),Ur=Vr(),Wr=new Set([h.smallRock,h.largeRock,h.pebbles,h.mushrooms]),Gr=[`aFrame`,`aParams`,`aPosition`,`aRect`,`aTint`,`aWorld`],Kr=[`aFrame`,`aParams`,`aRect`],qr=[0,0,0,0],Jr=(e,t=!1)=>({chop:t?new Float32Array(e*4):null,frame:new Float32Array(e*4),params:new Float32Array(e*4),position:new Float32Array(e*2),rect:new Float32Array(e*4),tint:new Float32Array(e*4),world:new Float32Array(e*3)}),Yr=e=>+!!e.mirrored+(e.plantWind?2:0),Xr=e=>!Wr.has(e)&&_(e)===void 0&&e<21,Zr=(e,t,n,r)=>{let{scale:i}=n,a=i*(n.stretch??1),{screenX:o,screenY:s}=S(n.x,n.y,n.z);e.position[t*2]=o,e.position[t*2+1]=s,e.world.set([n.x,n.y,n.z],t*3),e.rect.set([r.u0,r.v0,r.u1,r.v1],t*4),e.frame.set([r.width*i,r.height*a,r.pivotX*i,r.pivotY*a],t*4),e.params.set([n.phase,n.sunVisibility,n.fog,n.bend*r.bend],t*4),e.tint.set([n.tint[0],n.tint[1],n.tint[2],Yr(n)],t*4)},Qr=e=>Math.cos(e)+Math.sin(e)<0,$r=(e,t)=>{let n=k(e.meshIds[t]),r=e.scale[t];return{bend:Wr.has(n)?0:r,fog:e.fog[t],mirrored:Qr(e.rotation[t]),plantWind:Xr(n),stretch:e.stretch[t],phase:e.phase[t],scale:r,sunVisibility:e.sunVisibility[t],tint:e.tint.subarray(t*3,t*3+3),x:e.x[t],y:e.y[t],z:e.z[t]}},ei=(e,t)=>{let n={aCorner:{buffer:Hr,format:`float32x2`},aFrame:{buffer:e.frame,format:`float32x4`,instance:!0},aParams:{buffer:e.params,format:`float32x4`,instance:!0},aPosition:{buffer:e.position,format:`float32x2`,instance:!0},aRect:{buffer:e.rect,format:`float32x4`,instance:!0},aTint:{buffer:e.tint,format:`float32x4`,instance:!0},aWorld:{buffer:e.world,format:`float32x3`,instance:!0}};e.chop&&(n.aChop={buffer:e.chop,format:`float32x4`,instance:!0});let r=new d({attributes:n,indexBuffer:Ur});return r.instanceCount=t,r},ti=(e,t,n)=>{let r=new B({geometry:e,shader:t});return r.cullable=!1,n===`shadows`?(r.blendMode=`multiply`,r):(r.state.depthTest=!0,r.state.depthMask=!0,r)},ni=e=>{let t=new Map;for(let n=0;n<e.count;n+=1){let r=Math.floor(e.x[n]/64),i=Math.floor(e.z[n]/64),a=`${r},${i}`,o=t.get(a)??{diagonal:r+i,indices:[],key:a};o.indices.push(n),t.set(a,o)}return[...t.values()].sort((e,t)=>e.diagonal-t.diagonal)},ri=(e,t,n)=>{let r=Math.max(n.width*t.scale,n.height*t.scale*(t.stretch??1))+1,{screenX:i,screenY:a}=S(t.x,t.y,t.z),o=Math.min(e.x,i-r),s=Math.min(e.y,a-r);e.width=Math.max(e.x+e.width,i+r)-o,e.height=Math.max(e.y+e.height,a+r)-s,e.x=o,e.y=s},ii=({indices:e,key:t},n,r,i)=>{let o=Jr(e.length,r.choppable),s=e.map((e,t)=>n(o,t,e)),{screenX:c,screenY:l}=S(s[0].x,s[0].y,s[0].z),u=new a(c,l,0,0);s.forEach((t,n)=>ri(u,t,r.frameOf(e[n])));let d=ti(ei(o,e.length),i,r.layer);return d.cullable=!0,d.cullArea=u,{area:u,buffers:o,indices:e,key:t,mesh:d}},ai=(e,t,n,r)=>{let i=n=>t[e.meshIds[n]],a=(t,n,r)=>{let a=$r(e,r);return Zr(t,n,a,i(r)),a},o=ni(e).map(e=>ii(e,a,{...r,frameOf:i},n)),s=new H;for(let e of o)s.addChild(e.mesh);return{chunks:o,container:s,frameOf:i,writeIndex:a}},oi=e=>{let t=[],n={x:Math.floor(e.maxX/64),z:Math.floor(e.maxZ/64)};for(let r=Math.floor(e.minZ/64);r<=n.z;r+=1)for(let i=Math.floor(e.minX/64);i<=n.x;i+=1)t.push(`${i},${r}`);return t},si=e=>{let{geometry:t}=e;e.destroy(),t.destroy()},ci=(e,t,n,r)=>{let i={choppable:!1,layer:r},a=new H,o=new Map,s=e=>{for(let r of ai(e,t,n,i).chunks)o.set(r.key,r.mesh),a.addChild(r.mesh)};return s(e),{container:a,replaceChunks:(e,t)=>{for(let t of e){let e=o.get(t);e&&si(e),o.delete(t)}s(t)}}},Y=(e,t,n,r=!1)=>{let i=Jr(e,r),a=ei(i,e);return{commit:e=>{a.instanceCount=e;let t=i.chop?[...Gr,`aChop`]:Gr;for(let e of t)a.getAttribute(e).buffer.update()},mesh:ti(a,t,n),set:(e,t,n)=>Zr(i,e,t,n),setChop:(e,t)=>{i.chop?.set([t[0],t[1],t[2],t[3]],e*4)}}},li=(e,t,n,r)=>{let{chunks:i,container:a,frameOf:o,writeIndex:s}=ai(e,t,n,{choppable:!0,layer:r}),c=new Int32Array(e.count),l=new Int32Array(e.count);i.forEach((e,t)=>e.indices.forEach((e,n)=>{c[e]=t,l[e]=n}));let u=new Set,d=new Set,f=(e,t)=>{let n=i[c[e]];n.buffers.chop.set([t[0],t[1],t[2],t[3]],l[e]*4),u.add(n)},p=e=>{let t=i[c[e]];ri(t.area,s(t.buffers,l[e],e),o(e)),d.add(t)},m=()=>{for(let e of u)e.mesh.geometry.getAttribute(`aChop`).buffer.update();u.clear()},h=()=>{for(let e of d)for(let t of Kr)e.mesh.geometry.getAttribute(t).buffer.update();d.clear()},g=e=>{let t=i[c[e]];t.buffers.frame.set(qr,l[e]*4),d.add(t)};return{commitChop:m,commitSprites:h,mesh:a,rewriteSprite:p,setChop:f,setHidden:(e,t)=>{let n=t?g:p;for(let t of e)n(t);h()}}},X=(e,t,r)=>new n({addressMode:`clamp-to-edge`,alphaMode:`no-premultiply-alpha`,autoGenerateMipmaps:!0,format:`rgba8unorm`,height:r,maxAnisotropy:8,mipmapFilter:`linear`,resource:e,scaleMode:`linear`,width:t}),ui=(e,t)=>new n({addressMode:`repeat`,alphaMode:`no-premultiply-alpha`,autoGenerateMipmaps:!0,format:`rgba8unorm`,height:t,mipmapFilter:`linear`,resource:e,scaleMode:`linear`,width:t}),di=new WeakMap,fi=e=>{let t=di.get(e);if(t)return t;let{height:n,width:r}=e,i={albedo:X(e.albedo,r,n),normals:X(e.normals,r,n),wind:X(e.wind,r/2,n/2)};return di.set(e,i),i},pi=512,mi=[[1.1,1.05,1],[.85,.9,.85],[1.7,1.3,.7]],hi=e=>Math.cos(e)-Math.sin(e)>=0?1:-1,gi=e=>{let[t,n,r,i]=e.chop;return[t,n,hi(r),e.showTree?i:1]},_i=(e,t)=>({bend:0,fog:1,mirrored:Math.sin(e.angle[t])>0,phase:0,scale:e.size[t]/Xe*e.alpha[t],sunVisibility:1,tint:mi[e.shade[t]],x:e.x[t],y:e.y[t],z:e.z[t]}),vi=({frames:e,layers:t,shader:n,trees:r})=>{let i=Y(pi,n,`sprites`),a=Y(600,n,`sprites`),o=!1,s=n=>{let a=0,s=!1;for(let o of n.felledIds()){let c=r.find(o);if(!c)continue;let{index:l,instances:u}=c,d=n.getState(o);s||=d.phase!==`stump`;let f=gi(d);if(!c.placed)for(let e of t)e.setChop(l,f);let p=u.meshIds[l],m=e.stumps.get(Je(p));if(!d.showStump||!m||a>=pi)continue;let h=$r(u,l);h.scale*=g(k(p),fe(p)),h.bend=0,h.mirrored=!1,i.set(a,h,m),a+=1}if(s||o)for(let e of t)e.commitChop();o=s,i.commit(a)},c=t=>{let n=0;for(let r=0;r<t.capacity;r+=1)t.alpha[r]<=0||(a.set(n,_i(t,r),e.leaf),n+=1);a.commit(n)};return{meshes:[i.mesh,a.mesh],update:e=>{s(e),c(e.leaves)}}},yi=[0,0,0,1],bi=[0,0,0,0],xi=64,Si=e=>_(k(e))===void 0?-1:Je(e),Ci=e=>{let{instances:t,layers:n,trees:r}=e,i=new Map,a=0;for(let n=0;n<t.count;n+=1)e.frames.has(Si(t.meshIds[n]))&&(i.set(t.sourceIndex[n],n),a+=1);let o=Uint16Array.from(t.meshIds),s=a+xi,c=Y(s,e.spriteShader,`sprites`),l=Y(s,e.shadowShader,`shadows`),u={chop:!1,sprites:!1},d=(e,r)=>{if(t.meshIds[e]!==r){t.meshIds[e]=r;for(let t of n)t.rewriteSprite(e);u.sprites=!0}},f=yt((e,t)=>{let r=i.get(e);if(r===void 0)return;let a=o[r];t!==`hidden`&&d(r,t===`mature`?Je(a):a);for(let e of n)e.setChop(r,t===`hidden`?yi:bi);u.chop=!0}),p=()=>{for(let e of n)u.chop&&e.commitChop(),u.sprites&&e.commitSprites();u={chop:!1,sprites:!1}};return{meshes:[l.mesh,c.mesh],shadowShader:e.shadowShader,update:t=>{f.sync(t),p();let n=0;for(let i of t.growing()){let t=r.find(i.id),a=t?Si(t.instances.meshIds[t.index]):-1;if(!t||!e.frames.has(a)||n>=s)continue;let o=$r(t.instances,t.index);o.scale*=Ge(e.stageMeshes.get(a),i.stage,i.progress);let u=e.frames.get(a);c.set(n,o,u.sprites[i.stage-1]),l.set(n,o,u.shadows[i.stage-1]),n+=1}c.commit(n),l.commit(n)}}},wi=e=>{let{geometry:t}=e.mesh;e.mesh.destroy(),t.destroy()},Ti=(e,t)=>{let n=new H,r=new H,i=null,a=null;return{setInstances:e=>{a&&(wi(a.shadows),wi(a.sprites)),i=e,a=null,e.count!==0&&(a={shadows:Y(e.count,t.shadow,`shadows`,!0),sprites:Y(e.count,t.sprite,`sprites`,!0)},n.addChild(a.shadows.mesh),r.addChild(a.sprites.mesh))},shadows:n,sprites:r,update:(t,n)=>{if(!a||!i)return;let r=0;for(let o=0;o<i.count;o+=1){let s=i.sourceIndex[o],c=t.getState(s);if(n.isGrowing(s)||!c.showTree)continue;let l=i.meshIds[o],u=n.isGrown(s)?Je(l):l,d=$r(i,o),f=gi(c);a.sprites.set(r,d,e.sprites[u]),a.shadows.set(r,d,e.shadows[u]),a.sprites.setChop(r,f),a.shadows.setChop(r,f),r+=1}a.sprites.commit(r),a.shadows.commit(r)}}},Z=(e,t)=>{e.resources.spriteUniforms.uniforms.uOpacity=t},Ei=2,Di=(e,t)=>{let n=new Map;for(let r of e)n.has(r)||n.set(r,t+n.size);return n},Oi=(e,t,n,r)=>{let i=new Map(n.map((e,t)=>[e,t]));return new Map([...t].map(([t,n])=>{let a=n.map((e,t)=>(t<Ei?r:i).get(e));return[t,{shadows:a.map(t=>e.shadows[t]),sprites:a.map(t=>e.sprites[t])}]}))},ki=async(e,t,n)=>{let r=await n.propMeshes(de),i=O(`tree stage meshes`,()=>Ke(r,de)),a=O(`stump meshes`,()=>[...Ye(41)]),o=r.length+a.length,s=Di([...i.values()].flatMap(e=>e.slice(0,Ei)),o+1),c=[...r,...a.map(([,e])=>e),qe(),...s.keys()],l=await n.bakeSprites(`props`,c,e,t),u=new Map(a.map(([e],t)=>[e,l.sprites[r.length+t]]));return{baked:l,frames:{leaf:l.sprites[o],stumps:u},stageFrames:Oi(l,i,r,s),stageMeshes:i}},Ai=e=>({pixels:e.color,size:e.width}),ji=async({builders:e,foliageAtlas:t,sun:n})=>{e.propMeshes(de),await ki(n,Ai(await t),e)},Mi=async(e,t,n,r,i)=>{let a=Ai(r),o=ki(e.sun,a,i.builders),s=T(e),c=O(`prop instances`,()=>ut(e,s)),{baked:l,frames:u,stageFrames:d,stageMeshes:f}=await o,{albedo:p,normals:m,wind:h}=fi(xe(l,`props`)),g={albedo:p,depthGlsl:n,normals:m,shared:t,wind:h,winter:ne(e)},_=await i.grass,y={...g,cutHeight:v},ee=J({...g,alphaCutoff:.45,depthBias:.1,winter:!1}),b=J({...y,alphaCutoff:.03,depthBias:.6}),te=Rr({...y,alphaCutoff:0,depthBias:0}),[x,S]=O(`pixi prop and shadow layers`,()=>[li(c,l.sprites,b,`sprites`),li(c,l.shadows,te,`shadows`)]),re=Lt(c),C=vi({frames:u,layers:[x,S],trees:re,shader:J({...g,alphaCutoff:.03,depthBias:.3})}),ie=O(`pixi growth`,()=>Ci({frames:d,instances:c,layers:[x,S],shadowShader:Rr({...g,alphaCutoff:0,depthBias:0}),spriteShader:J({...g,alphaCutoff:.03,depthBias:.6}),stageMeshes:f,trees:re})),w=Ti(l,{shadow:te,sprite:b}),ae=e=>{re.setPlaced(e),w.setInstances(e)},E=O(`pixi grass layer`,()=>ci(_,l.sprites,ee,`sprites`));return{felling:C,growth:ie,grassCount:_.count,grassMesh:E.container,grassShader:ee,hideProps:e=>{let t=e.flatMap(e=>re.worldIndexOf(e)??[]);for(let e of t)c.scale[e]=0;for(let e of[x,S])e.setHidden(t,!0)},leafAtlas:a,placed:w,propCount:c.count,propMesh:x.mesh,replaceGrass:E.replaceChunks,setPlacedProps:ae,shadowMesh:S.mesh,shadowShader:te}},Ni=e=>({bend:0,fog:1,mirrored:!1,phase:0,scale:1,sunVisibility:1,tint:e,x:0,y:0,z:0}),Pi=(e,t,n)=>{let r=e.map(e=>Y(t,e,n)),i=new Int32Array(r.length),a=new H;for(let e of r)a.addChild(e.mesh);return{add:(e,t)=>{let{page:n}=t,a=i[n];r[n].set(a,e,t),i[n]=a+1},commit:()=>{r.forEach((e,t)=>{let n=i[t];e.mesh.visible=n>0,n>0&&e.commit(n)}),i.fill(0)},container:a,meshes:r.map(({mesh:e})=>e)}},Fi=({baked:e,depthGlsl:t,shared:n})=>e.pages.map(e=>({...fi(e),depthGlsl:t,shared:n})),Ii=(e,t)=>{let n=Fi(e),r=n.map(e=>Rr({...e,alphaCutoff:0,depthBias:0})),i=n.map(e=>J({...e,alphaCutoff:.03,depthBias:.3}));return{pages:n,setShadowOpacity:e=>{for(let t of r)Z(t,e)},shadows:Pi(r,t,`shadows`),sprites:Pi(i,t,`sprites`)}},Q=8,$=8,Li=8,Ri=4,zi=1.4,Bi=[[.45,.6,.95],[.95,.45,.4],[.55,.85,.45],[.95,.8,.45]],Vi=[.55,.75,.85],Hi=()=>{let e=[],t=St();for(let n=0;n<Q;n+=1)for(let r=0;r<$;r+=1)e.push(At(t,r/$*Math.PI*2,n/Q*Math.PI*2));let n=e.length;for(let t of[Ct(),Ft()])for(let n=0;n<Ri;n+=1)e.push(vr(t,-n*Math.PI/2));let r=e.length,i=_t();for(let t=0;t<Ri;t+=1)for(let n=0;n<Li;n+=1){let r=br(yr(i,n/Li*(Math.PI/2)),Ot);e.push(vr(r,-t*Math.PI/2))}let a=e.length,o=wt();for(let t=0;t<Q;t+=1)e.push(vr(o,t/Q*Math.PI*2));return{bladesStart:r,buildingsStart:n,fishStart:a,meshes:e}},Ui=(e,t)=>(Math.round(e/(Math.PI*2)*t)%t+t)%t,Wi=e=>Math.cos(-e)+Math.sin(-e)>0,Gi=(e,t,n,r,i)=>{let a=Hi(),o=N(a.meshes,t.sun,i),s={...fi(xe(o,`stress`)),depthGlsl:r,shared:n},c=T(t),l={bladesBack:Y(e.buildings.count,J({...s,alphaCutoff:.03,depthBias:.3}),`sprites`),bladesFront:Y(e.buildings.count,J({...s,alphaCutoff:.03,depthBias:1.2}),`sprites`),buildings:Y(e.buildings.count,J({...s,alphaCutoff:.03,depthBias:.7}),`sprites`),fish:Y(e.fish.count,J({...s,alphaCutoff:.1,depthBias:0}),`sprites`),shadows:Y(e.units.count+e.buildings.count,Rr({...s,alphaCutoff:0,depthBias:0}),`shadows`),units:Y(e.units.count,J({...s,alphaCutoff:.03,depthBias:.3}),`sprites`)};l.fish.mesh.state.depthTest=!1,Z(l.fish.mesh.shader,.45);let u=(e,n,r,i=!1)=>({bend:0,fog:C(t,c,e,n),mirrored:i,phase:0,scale:1,sunVisibility:C(t,t.sunShadow,e,n)/255,tint:r,x:e,y:0,z:n}),{buildings:d,fish:f,units:p}=e;(()=>{for(let e=0;e<d.count;e+=1){let t=Ui(d.rotation[e],Ri),n=a.buildingsStart+d.windmill[e]*Ri+t,r={...u(d.x[e],d.z[e],[1,1,1]),y:d.y[e]};l.buildings.set(e,r,o.sprites[n]),l.shadows.set(p.count+e,r,o.shadows[n])}l.buildings.commit(d.count)})();let m=(e,t)=>{for(let t=0;t<p.count;t+=1){let n=Ui(p.heading[t],Q)*$+(Math.floor(p.phase[t]/(Math.PI*2)*$)%$+$)%$,r={...u(p.x[t],p.z[t],Bi[p.variant[t]%Bi.length]),y:p.y[t]};l.units.set(t,r,e.sprites[n]),l.shadows.set(t,r,e.shadows[n])}let n=0,r=0;for(let i=0;i<d.count;i+=1){if(!d.windmill[i])continue;let o=Ui(d.rotation[i],Ri),s=Math.floor((t*zi+i)/(Math.PI/2)*Li)%Li,c={...u(d.x[i],d.z[i],[1,1,1]),y:d.y[i]},f=Wi(d.rotation[i])?l.bladesFront:l.bladesBack;f.set(f===l.bladesFront?n++:r++,c,e.sprites[a.bladesStart+o*Li+s])}for(let t=0;t<f.count;t+=1){let n={...u(f.x[t],f.z[t],Vi),y:f.y[t]};l.fish.set(t,n,e.sprites[a.fishStart+Ui(f.heading[t],Q)])}l.units.commit(p.count),l.shadows.commit(p.count+d.count),l.bladesFront.commit(n),l.bladesBack.commit(r),l.fish.commit(f.count)};return{shadowShader:l.shadows.mesh.shader,meshes:[l.shadows.mesh,l.fish.mesh,l.buildings.mesh,l.bladesBack.mesh,l.bladesFront.mesh,l.units.mesh],update:e=>m(o,e)}},Ki=1.6,qi=.3,Ji=(e,t)=>{let n=e.stage[t]<=E.juvenile;return e.species[t]===se.rabbit?n?wr:Math.round(e.coat[t*4]):n?0:e.antlers[t]>.5?2:1},Yi=(e,t,n)=>{let r=e.clip[t],i=xr[r],a=r===oe.graze?n*Ki+t*.37:e.clipPhase[t],o=Math.floor((a-Math.floor(a))*i)%i,s=Ui(e.heading[t],8);return(Ji(e,t)*8+s)*Cr+Sr[r]+o},Xi=(e,t)=>{let n=e.map(({geometry:e},n)=>{let r=Lr({...t[n],alphaCutoff:.5,depthBias:.3}),i=new B({geometry:e,shader:r});return i.cullable=!1,i.state.depthTest=!1,i.state.depthMask=!1,i}),r=new H;for(let e of n)r.addChild(e);return{container:r,sync:()=>{n.forEach((t,n)=>{t.visible=e[n].visible})}}},Zi=(e,t,n)=>{let r=Ii({baked:e,depthGlsl:n,shared:t},64);return{...r,baked:e,silhouettes:Xi(r.sprites.meshes,r.pages)}},Qi=(e,t,n,r,i)=>{let a=D.map(()=>null);for(let o of D){let s=r[o];s&&i.start.then(()=>i.bakeAnimal(o,s,e.sun)).then(e=>{let r=Zi(e,t,n);i.containers.shadows.addChild(r.shadows.container),i.containers.silhouettes.addChild(r.silhouettes.container),i.containers.sprites.addChild(r.sprites.container),a[o]=r})}let o=Ni(new Float32Array(3)),s=(t,n)=>{let r=t.x[n],i=t.z[n],a=o.tint,s=t.shade[n],c=t.tone[n];a[0]=s*(1+c*.07),a[1]=s,a[2]=s*(1-c*.08),o.fog=t.visibility[n],o.scale=t.scale[n]*t.appear[n],o.sunVisibility=C(e,e.sunShadow,r,i)/255,o.x=r,o.y=t.y[n],o.z=i};return{update:(e,t,n)=>{for(let n=0;n<e.count;n+=1){if(e.visibility[n]<qi)continue;let r=a[e.species[n]];if(!r)continue;let i=Yi(e,n,t);s(e,n),r.sprites.add(o,r.baked.sprites[i]),r.shadows.add(o,r.baked.shadows[i])}for(let e of a)e&&(e.sprites.commit(),e.shadows.commit(),e.silhouettes.sync(),e.setShadowOpacity(n))}}},$i=-8,ea=20,ta=4,na=e=>{let t=(e.cellsX+e.cellsZ)*x.x+ea*x.y+ta,n=$i*x.y-ta;return`
const vec3 DEPTH_VIEW = vec3(${[x.x,x.y,x.z].map(e=>e.toFixed(6)).join(`, `)});
float isoDepth(vec3 world) {
  float towardsCamera = dot(world, DEPTH_VIEW);
  return 1.0 - 2.0 * (towardsCamera - ${n.toFixed(3)}) / ${(t-n).toFixed(3)};
}
`},ra=Math.PI*2,ia=16,aa=Math.PI/4,oa=ra/ia,sa=e=>aa+e*oa,ca={index:0,mirrored:!1},la=e=>{let t=(Math.round((e-aa)/oa)%ia+ia)%ia;return ca.mirrored=t>=9,ca.index=ca.mirrored?ia-t:t,ca},ua=(e,t,n,r,i)=>{let a=Math.max(0,t.y[n]-t.ground[n]),o=Math.max(0,1-a/i)*t.visibility[n];e.x=t.x[n]-r[0]*a/r[1],e.y=t.ground[n],e.z=t.z[n]-r[2]*a/r[1],e.fog=.35+.25*o},da=e=>{let{baked:t,capacity:n,selectFrame:r,shadowFadeHeight:i}=e,{setShadowOpacity:a,shadows:o,sprites:s}=Ii(e,n),c=new Float32Array(3),l=Ni(c),u=0,d=(e,n,a)=>{c.fill(e.shade[n]);let u=r(e,n,t.sprites,l);l.fog=e.visibility[n],l.x=e.x[n],l.y=e.y[n],l.z=e.z[n],s.add(l,u),ua(l,e,n,a,i),o.add(l,r(e,n,t.shadows,l))};return{shadows:o.container,sprites:s.container,update:(e,t)=>{let r=Math.min(e.count,n);if(r===0&&u===0)return;u=r;let i=r>0?ie(t.sun):null;for(let t=0;t<r;t+=1)d(e,t,i);s.commit(),o.commit(),a(t.shadowStrength)}}},fa=Math.PI*2,pa=[Math.PI/2,Math.PI,Math.PI*1.5,0],ma=pa.length,ha=ma+1,ga=ha+1,_a=.4,va=.45,ya=.8,ba=7,xa=(e,t,n)=>(e*ga+t)*9+n,Sa=()=>{let e=[],t={angle:0,fold:0};return De.forEach((n,r)=>{let i=Pt(n.shape);for(let a=0;a<ga;a+=1){let o=a>=ma,s=o?0:pa[a];_e(s,+!o,a===ha?ya:0,n,t);for(let o=0;o<9;o+=1){let s=sa(o);e[xa(r,a,o)]=xt(n,i,t,s)}}}),e},Ca=(e,t,n)=>{if(n>va)return ha;if(t<_a)return ma;let r=((e-Math.PI/4)%fa+fa)%fa;return Math.floor(r/(Math.PI/2))%pa.length},wa=async({bake:e,depthGlsl:t,flyerAtlas:n,shared:r,sun:i})=>da({baked:await e(`birds`,Sa(),i,n,M),capacity:48,depthGlsl:t,selectFrame:(e,t,n,r)=>{let i=e.species[t],a=Ca(e.flapPhase[t],e.flapAmount[t],e.tuck[t]),o=la(e.heading[t]);return r.mirrored=o.mirrored,r.scale=e.scale[t]/De[i].size,n[xa(i,a,o.index)]},shadowFadeHeight:ba,shared:r}),Ta=[-.3,.25,.8,1.3],Ea=2.5,Da=1.6,Oa=(e,t,n,r)=>((e*3+t)*Ta.length+n)*9+r,ka=()=>{let e=[];return me.forEach((t,n)=>{let r=Mt(n),i=t.size*Ea;for(let t=0;t<3;t+=1)Ta.forEach((a,o)=>{for(let s=0;s<9;s+=1){let c={angle:a,heading:sa(s),scale:i,variant:t};e[Oa(n,t,o,s)]=bt(r,c)}})}),e},Aa=e=>{let t=0;for(let n=1;n<Ta.length;n+=1)Math.abs(Ta[n]-e)<Math.abs(Ta[t]-e)&&(t=n);return t},ja=async({bake:e,depthGlsl:t,flyerAtlas:n,shared:r,sun:i})=>da({baked:await e(`butterflies`,ka(),i,n,M),capacity:6,depthGlsl:t,selectFrame:(e,t,n,r)=>{let i=e.species[t],a=la(e.heading[t]),o=me[i].size*Ea;r.mirrored=a.mirrored,r.scale=e.scale[t]/o;let s=Aa(e.wing[t]),c=e.variant[t];return n[Oa(i,c,s,a.index)]},shadowFadeHeight:Da,shared:r}),Ma=28,Na=[.66,.78,.8],Pa=.012,Fa=(e,t)=>{let n=new vt,r=e=>Array.from({length:29},(t,n)=>{let r=n/Ma*Math.PI*2;return[Math.cos(r)*e,Pa,Math.sin(r)*e]});return n.sheet([r(e-t/2),r(e+t/2)],()=>Na,[0,1,0]),n.finish()},Ia=e=>Array.from({length:4},(t,n)=>{let r=(n+1)/4;return Fa(e*(.3+.7*r),e*(.08-.05*r))}),La=3,Ra=.5,za=()=>{let e=kt(),t=[],n=[],r=0;e.forEach((e,i)=>{n.push(r);let a=j[i].bakeScale;for(let n of e.frames){let e=Tt(jt(n),a);for(let n=0;n<9;n+=1)t.push(vr(e,sa(n)))}r+=e.frames.length});let i=r;for(let e of Ia(Ra))t.push(e);return{meshes:t,offsets:n,rippleOffset:i}},Ba=Te(),Va=.28,Ha=()=>({age:new Float32Array(40),count:0,ground:new Float32Array(40),shade:new Float32Array(40).fill(1),size:new Float32Array(40),visibility:new Float32Array(40),x:new Float32Array(40),y:new Float32Array(40),z:new Float32Array(40)}),Ua=(e,t)=>{let n=0;for(let r=0;r<e.count;r+=1)e.size[r]<Va||(t.age[n]=e.age[r],t.size[n]=e.size[r],t.visibility[n]=e.visibility[r],t.x[n]=e.x[r],t.y[n]=e.y[r],t.ground[n]=e.y[r],t.z[n]=e.z[r],n+=1);t.count=n},Wa=async({bake:e,depthGlsl:t,flyerAtlas:n,shared:r,sun:i})=>{let a=kt(),{meshes:o,offsets:s,rippleOffset:c}=za(),l=await e(`critters`,o,i,n,M),u=da({baked:l,capacity:144,depthGlsl:t,selectFrame:(e,t,n,r)=>{let i=e.species[t];ge(a[i],e.clip[t],e.pose[t],Ba);let o=la(e.heading[t]);return r.mirrored=o.mirrored,r.scale=e.scale[t]/j[i].bakeScale,n[(s[i]+he(Ba))*9+o.index]},shadowFadeHeight:La,shared:r}),d=da({baked:l,capacity:40,depthGlsl:t,selectFrame:(e,t,n,r)=>{let i=e.age[t];r.mirrored=!1,r.scale=e.size[t]/Ra;let a=Math.min(3,Math.floor(i*4));return n[c*9+a]},shadowFadeHeight:La,shared:r}),f=Ha();return{ripples:d.sprites,shadows:u.shadows,sprites:u.sprites,update:(e,t)=>{u.update(e,t),Ua(e.ripples,f),d.update(f,t)}}},Ga=(e,t,n)=>{let r=Array.from({length:t},()=>new H),i=null;return e.then(e=>{n(e,r),i=e}),{get:()=>i,slots:r}},Ka=e=>`#version 300 es
in vec2 aPosition;
in vec3 aWorld;
in vec3 aNormal;
in vec4 aMask;
in vec4 aExtra;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
out vec3 vWorld;
out vec3 vNormal;
out vec4 vMask;
out vec4 vExtra;
${e}

void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, isoDepth(aWorld), 1.0);
  vWorld = aWorld;
  vNormal = aNormal;
  vMask = aMask;
  vExtra = aExtra;
}
`,qa=`#version 300 es
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec4 vMask;
in vec4 vExtra;
out vec4 finalColor;
${L}
${I}
${je}
${F}
${Ie}
${Fe}
${Pe}
${R}

void main() {
  if (isHiddenByFog(vExtra.y, vWorld.xz)) discard;
  RockSurface rock = getRockSurface(vWorld, normalize(vNormal), vMask, vExtra.z, vExtra.w);
  vec3 color = lightSurface(rock.albedo, rock.normal, vExtra.x, rock.occlusion, vWorld.xz)
    + getRockFill(rock.albedo, rock.normal, vExtra.x, rock.occlusion);
  finalColor = vec4(gradeColor(applyFogOfWar(color, vExtra.y, vWorld.xz)), 1.0);
}
`,Ja=e=>{let t=new Float32Array(e.length/3*2);for(let n=0;n<e.length/3;n+=1){let{screenX:r,screenY:i}=S(e[n*3],e[n*3+1],e[n*3+2]);t[n*2]=r,t[n*2+1]=i}return t},Ya=e=>new d({attributes:{aExtra:{buffer:e.extra,format:`unorm8x4`},aMask:{buffer:e.mask,format:`unorm8x4`},aNormal:{buffer:e.normals,format:`float32x3`},aPosition:{buffer:Ja(e.positions),format:`float32x2`},aWorld:{buffer:e.positions,format:`float32x3`}},indexBuffer:e.indices}),Xa=({chunks:e},t,n,r)=>{let i=new s({glProgram:c.from({fragment:qa,name:`island-rocks`,vertex:Ka(n)}),resources:{...t,uRockTexture:ui(r.color,r.width)}}),a=new H,o=new H;a.addChild(o);let l=We(e=>{let{geometry:t}=e;e.destroy(),t.destroy()}),u=0,d=({chunk:e,data:t,group:n,small:r})=>{let s=new B({geometry:Ya(t),shader:i});s.cullable=!0,s.state.depthTest=!0,s.state.depthMask=!0,u+=t.triangles,(r?o:a).addChild(s),l.add(e,n,s)};return e.forEach(d),{container:a,replaceRockChunks:(e,t)=>{l.remove(e),t.forEach(d)},replaceStones:(e,t,n)=>{l.remove(t,e),n.forEach(d)},setSmallRocksVisible:e=>{o.visible=e},triangles:u}},Za=400,Qa=e=>{let t=new Float32Array(e.length/3*2);for(let n=0;n<e.length/3;n+=1){let{screenX:r,screenY:i}=S(e[n*3],e[n*3+1],e[n*3+2]);t[n*2]=r,t[n*2+1]=i}return t},$a=e=>new d({attributes:{aNormal:{buffer:e.normals,format:`float32x3`},aPosition:{buffer:Qa(e.positions),format:`float32x2`},aShading:{buffer:e.shading,format:`unorm8x4`},aSplatA:{buffer:e.splatA,format:`unorm8x4`},aSplatB:{buffer:e.splatB,format:`unorm8x4`},aSplatC:{buffer:e.splatC,format:`unorm8x4`},aWater:{buffer:e.water,format:`float32x4`},aWorld:{buffer:e.positions,format:`float32x3`}},indexBuffer:e.indices}),eo=e=>{let{indices:t,positions:n}=ae(e,Za);return new d({attributes:{aPosition:{buffer:Qa(n),format:`float32x2`},aWorld:{buffer:n,format:`float32x3`}},indexBuffer:t})},to=[[`aSplatA`,`splatA`],[`aSplatB`,`splatB`],[`aSplatC`,`splatC`],[`aShading`,`shading`]],no=({chunkX:e,chunkZ:t})=>`${e},${t}`,ro=(e,t)=>{for(let[n,r]of to){let i=e.getAttribute(n).buffer;i.data.set(t[r]),i.update()}},io=(e,t,n,r)=>{let i=new H,a=new B({geometry:eo(e),shader:r});i.addChild(a);let o=new Map,s=0;for(let e of t){let t=new B({geometry:$a(e),shader:n});o.set(no(e),t),t.cullable=!0,t.state.depthTest=!0,t.state.depthMask=!0,s+=e.indices.length/3,i.addChild(t)}return{chunkCount:i.children.length-1,container:i,setChunkGround:e=>{let t=o.get(no(e));t&&ro(t.geometry,e)},setTerrainChunk:({data:e,key:t})=>{let n=o.get(`${t.chunkX},${t.chunkZ}`);if(!n||!e)return;let r=n.geometry;n.geometry=$a(e),r.destroy()},triangles:s}},ao=e=>`#version 300 es
in vec2 aPosition;
in vec3 aWorld;
in vec3 aNormal;
in vec4 aSplatA;
in vec4 aSplatB;
in vec4 aSplatC;
in vec4 aShading;
in vec4 aWater;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

out vec3 vWorld;
out vec3 vNormal;
out vec4 vSplatA;
out vec4 vSplatB;
out vec4 vSplatC;
out vec4 vShading;
out vec4 vWater;
${e}

void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, isoDepth(aWorld), 1.0);
  vWorld = aWorld;
  vNormal = aNormal;
  vSplatA = aSplatA;
  vSplatB = aSplatB;
  vSplatC = aSplatC;
  vShading = aShading;
  vWater = aWater;
}
`,oo=`#version 300 es
in vec2 aPosition;
in vec3 aWorld;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

out vec3 vWorld;

void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
  vWorld = aWorld;
}
`,so=e=>`#version 300 es
precision highp float;
in vec3 vWorld;
in vec3 vNormal;
in vec4 vSplatA;
in vec4 vSplatB;
in vec4 vSplatC;
in vec4 vShading;
in vec4 vWater;
out vec4 finalColor;
${L}
${I}
${je}
${e}
${ke}
${Me}
${F}
${R}

void main() {
  vec2 xz = vWorld.xz;
  vec4 field = sampleWaterField(xz);
  float depth = field.x;
  vec3 waterSurfaceNormal = vec3(0.0, 1.0, 0.0);
  vec2 bedXz = xz;
  if (depth > 0.0) {
    waterSurfaceNormal = waterNormal(xz, vWater.zw, uTime);
    bedXz += waterSurfaceNormal.xz * min(depth, 1.5) * 1.2;
  }
  vec3 bed = vec3(bedXz.x, vWorld.y - max(vWater.x, 0.0), bedXz.y);
  GroundSample ground = sampleGround(bed, vSplatA, vSplatB, vSplatC, normalize(vNormal), vShading.w);
  vec3 color = lightGround(ground, vShading.x, vShading.y, xz);
  color = waterlineGround(color, depth, xz, uTime);
  if (depth > 0.0) {
    vec3 weeds = weedBed(color, bedXz, field.w, depth, vWater.zw, uTime, 1.0);
    vec3 seabed = blendOpenSeaBed(weeds, xz);
    color = shadeWater(xz, depth, field.y, vWater.zw, uTime, waterSurfaceNormal, seabed);
  }
  color = applyFogOfWar(color, field.z, xz);
  finalColor = vec4(gradeColor(color), 1.0);
}
`,co=`#version 300 es
precision highp float;
in vec3 vWorld;
out vec4 finalColor;
${L}
${I}
${je}
${ke}
${Me}
${F}
${R}

void main() {
  vec2 xz = vWorld.xz;
  vec4 field = sampleWaterField(xz);
  vec3 normal = waterNormal(xz, vec2(0.0), uTime);
  vec3 water = shadeWater(xz, field.x, field.y, vec2(0.0), uTime, normal, OPEN_SEA_BED);
  finalColor = vec4(gradeColor(applyFogOfWar(water, field.z, xz)), 1.0);
}
`,lo=e=>new u({uAmbientGround:{type:`vec3<f32>`,value:e.uAmbientGround},uAmbientSky:{type:`vec3<f32>`,value:e.uAmbientSky},uBakedShadowWeight:{type:`f32`,value:e.uBakedShadowWeight},uCloudCover:{type:`f32`,value:e.uCloudCover},uFogColor:{type:`vec3<f32>`,value:e.uFogColor},uLiveFog:{type:`f32`,value:e.uLiveFog},uRain:{type:`f32`,value:e.uRain},uSunColor:{type:`vec3<f32>`,value:e.uSunColor},uSunDirection:{type:`vec3<f32>`,value:e.uSunDirection},uTime:{type:`f32`,value:e.uTime},uViewDirection:{type:`vec3<f32>`,value:e.uViewDirection},uWind:{type:`vec2<f32>`,value:e.uWind},uWorldSize:{type:`vec2<f32>`,value:e.uWorldSize}}),uo=(e,{albedo:t,normal:n,waterField:r},i,a)=>new s({glProgram:c.from({fragment:so(Ae[a]),name:`island-terrain-${a}`,vertex:ao(i)}),resources:{...e,uAlbedoAtlas:t,uNormalAtlas:n,uWaterField:r}}),fo=(e,t)=>new s({glProgram:c.from({fragment:co,name:`island-ocean`,vertex:oo}),resources:{...e,uWaterField:t}}),po=(e,t)=>{let n=e.gl;try{let{program:r}=e.shader._getProgramData(t.glProgram);return n.getProgramParameter(r,n.LINK_STATUS)?null:A(n,r)}catch(e){return String(e)}},mo=(e,t,n)=>{let r=n(t.variant),i=po(e,r),a=i?t.fail(i):null;if(!a)return r;r.destroy();let o=n(a),s=po(e,o);return s&&t.fail(s),o},ho=e=>`#version 300 es
in vec2 aPosition;
in vec3 aWorld;
in vec2 aUv;
in vec4 aExtra;
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;
out vec3 vWorld;
out vec2 vUv;
out vec4 vExtra;
${e}

void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, isoDepth(aWorld), 1.0);
  vWorld = aWorld;
  vUv = aUv;
  vExtra = aExtra;
}
`,go=`#version 300 es
precision highp float;
in vec3 vWorld;
in vec2 vUv;
in vec4 vExtra;
out vec4 finalColor;
${L}
${I}
${je}
${F}
${Ie}
${R}
${Nt}

void main() {
  vec4 color = shadeWaterfall(vUv, vExtra, vWorld);
  finalColor = vec4(color.rgb * color.a, color.a);
}
`,_o=(e,t,n)=>{let r=new d({attributes:{aExtra:{buffer:e.extra,format:`float32x4`},aPosition:{buffer:b(e.positions),format:`float32x2`},aUv:{buffer:e.uvs,format:`float32x2`},aWorld:{buffer:e.positions,format:`float32x3`}},indexBuffer:e.indices}),i=new s({glProgram:c.from({fragment:go,name:`island-waterfalls`,vertex:ho(n)}),resources:{...t}}),a=new B({geometry:r,shader:i});return a.state.depthTest=!0,a.state.depthMask=!1,a.state.culling=!1,a.visible=e.triangles>0,{mesh:a,triangles:e.triangles}},vo=`#0b2238`,yo=77,bo=(e,t)=>{let n=S(t.centerX,0,t.centerZ);e.scale.set(t.zoom),e.position.set(t.viewportWidth/2-n.screenX*t.zoom,t.viewportHeight/2-n.screenY*t.zoom)},xo={create:async({animals:e,builders:t,canvas:n,flyerAtlas:r,foliageAtlas:i,groundShader:a=`auto`,materials:o,mounts:s,quality:c,resolution:l,rockTexture:u,stress:d,workers:f,world:p})=>{let h=t.terrainChunks(`waterTop`),g=t.islandRocks(),_=t.fieldCover(c.grassSamplesPixi),v=t.waterField(),b=new nt,te=f?gr(f,na(p)):Promise.resolve(null),x=s?.length?hr(s,na(p)):Promise.resolve(null);await b.init({antialias:l.antialias,autoDensity:!1,background:vo,canvas:n,height:n.clientHeight,preferWebGLVersion:2,resolution:Ce(window.devicePixelRatio,l),width:n.clientWidth});let S=Re(p);S.uLiveFog=1;let ne=It(p),C=X(ne.pixels,ne.width,ne.height),ie=lo(S),w=na(p),ae=re(p),T={uFogMap:C,sharedUniforms:ie,uNoiseTexture:ui(Oe(yo),256),uSnowMap:X(ae.pixels,ae.width,ae.height),uWaterNormals:ui(Ne(yo),256)},E=X(o.albedoHeight,o.atlasWidth,o.atlasHeight),oe=X(o.normalRoughness,o.atlasWidth,o.atlasHeight),se=Mi(p,T,w,i,{builders:t,grass:_}),D=lt(),le={bake:t.bakeSprites,depthGlsl:w,flyerAtlas:r,shared:T,sun:p.sun},k=Ga(D.drawn.then(()=>wa(le)),2,(e,[t,n])=>{t.addChild(e.shadows),n.addChild(e.sprites)}),de=Ga(D.drawn.then(()=>ja(le)),0,e=>{k.slots[0].addChild(e.shadows),k.slots[1].addChild(e.sprites)}),fe=Ga(D.drawn.then(()=>Wa(le)),0,e=>{k.slots[0].addChild(e.ripples,e.shadows),k.slots[1].addChild(e.sprites)}),pe={shadows:new H,silhouettes:new H,sprites:new H},me=Qi(p,T,w,e,{bakeAnimal:t.bakeAnimal,containers:pe,start:D.drawn}),[he,ge]=k.slots,[_e,ve,A]=await ce(`wait for worker builds`,()=>Promise.all([h,g,se])),be=await v,j=X(be.pixels,be.width,be.height),xe=we(b.gl,a,Math.max(o.atlasWidth,o.atlasHeight)),Se=O(`pixi terrain shader`,()=>mo(b,xe,e=>uo(T,{albedo:E,normal:oe,waterField:j},w,e))),M=O(`pixi terrain meshes`,()=>io(p,_e,Se,fo(T,j))),N=O(`pixi rock meshes`,()=>Xa(ve,T,w,u)),Te=O(`pixi waterfalls`,()=>_o(Dt(p),T,w)),Ee=new H,P=new H,De=await te;P.addChild(M.container,N.container,A.shadowMesh,A.placed.shadows,A.grassMesh,he,pe.shadows,A.propMesh,A.placed.sprites,pe.silhouettes,pe.sprites,...A.felling.meshes,...A.growth.meshes,Te.mesh,ge);let F=d?Gi(d,p,T,w,A.leafAtlas):null;F&&P.addChild(...F.meshes);let I=gt(De,e=>gr(e,w),e=>{P.addChild(e.container)}),L=await x;L&&P.addChild(L.container),Ee.addChild(P);let ke={height:n.clientHeight,width:n.clientWidth,x:0,y:0},R=null;return{dispose:()=>{I.dispose(),L?.dispose(),C.destroy(),b.destroy()},getStats:()=>({details:{chunks:M.chunkCount,...ye(xe),grass:A.grassCount,props:A.propCount,rockTriangles:N.triangles,terrainTriangles:M.triangles}}),pickGround:(e,t)=>R?pt(p,ee(R,e,t,Et.max)):null,gl:b.gl,capabilities:tr,getViewMode:()=>`iso`,projectToViewport:(e,t,n)=>R?y(R,e,t,n):{depth:0,x:NaN,y:NaN},kind:`pixi`,mapEdit:ht(p,[`waterTop`],{fieldCover:{chunkCells:64,replace:(e,t)=>A.replaceGrass(oi(e),t),samplesPerCell:c.grassSamplesPixi},hideProps:A.hideProps,replaceRockChunks:N.replaceRockChunks,replaceStones:N.replaceStones,setChunkGround:M.setChunkGround,setTerrainChunk:M.setTerrainChunk,setWaterField:e=>{j.resource.set(e.pixels),j.update()},setPlacedProps:A.setPlacedProps}),setWorkerAppearances:I.replace,setWorkerColor:e=>{I.setColor(e),L?.setColor(e)},setViewMode:()=>void 0,render:e=>{ne.update()&&C.update(),Ue(S,e);for(let e of Le)ie.uniforms[e]=S[e];F?.update(e.time),Z(A.shadowShader,e.environment.shadowStrength),A.felling.update(e.felling),A.growth.update(e.growth),A.placed.update(e.felling,e.growth),k.get()?.update(e.birds,e.environment),de.get()?.update(e.butterflies,e.environment),fe.get()?.update(e.critters,e.environment),me.update(e.animals,e.time,e.environment.shadowStrength),I.current?.update(e.workers),L?.update(e.mounts),Z(A.growth.shadowShader,e.environment.shadowStrength),F&&Z(F.shadowShader,e.environment.shadowStrength);let t=c.grass?m(.3,.6,e.camera.zoom):0;A.grassMesh.visible=t>0,Z(A.grassShader,t),N.setSmallRocksVisible(ue(e.camera.zoom,!0)),bo(P,e.camera),R=e.camera,er.shared.cull(Ee,ke),b.render(Ee),D.markDrawn()},resize:(e,t,n)=>{ke.width=e,ke.height=t,b.resize(e,t,n)}}},prefetch:ji};export{xo as rendererModule};