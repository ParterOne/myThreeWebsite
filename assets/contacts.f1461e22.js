import{S as s,P as d,W as c,s as w,A as l,E as u}from"./fade-in.b5c01dca.js";import{R as p,G as m}from"./RGBELoader.4418ecb5.js";import{O as g}from"./OrbitControls.01c6151a.js";const a=new s,o=new d(75,window.innerWidth/window.innerHeight,.1,1e3),e=new c({canvas:document.querySelector("#bg"),alpha:!0});e.setPixelRatio(window.devicePixelRatio);e.setSize(window.innerWidth,window.innerHeight);o.position.setZ(30);window.addEventListener("resize",f,!1);function f(){e.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()}e.outputEncoding=w;e.toneMapping=l;e.toneMappingExposure=.6;const h=new p,E="/myThreeWebsite/assets/studio_small_02_2k.hdr";h.load(E,function(n){n.mapping=u,a.environment=n});const R=new m;let i;R.load("/myThreeWebsite/assets/BusinessCard.gltf",function(n){i=n,i.scene.scale.set(3,3,3),i.scene.castShadow=!0,i.scene.receiveShadow=!0,a.add(i.scene)},void 0,function(n){console.error(n)});const t=new g(o,e.domElement);t.enablePan=!1;t.enableZoom=!1;t.autoRotate=!0;function r(){requestAnimationFrame(r),t.update(),e.render(a,o)}r();
