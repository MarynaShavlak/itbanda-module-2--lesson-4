var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in t){var s=t[e];delete t[e];var c={id:e,exports:{}};return o[e]=c,s.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=s),s("cKJBV"),s("9nuA4"),s("3iCGc");const c=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?c.style.display="flex":c.style.display="none"}),{passive:!0}),c.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}));const r=document.querySelectorAll(".plus-btn--toolkit"),n=document.querySelectorAll(".rooms__item"),i=document.querySelector(".schema--kitchen"),l=document.querySelector(".schema--room"),a=document.querySelector(".schema--bath"),d=document.querySelectorAll(".rooms__schema");function u(e){e.closest(".toolkit__wrapper").querySelector(":first-child").classList.toggle("is-shown")}r.forEach((e=>{e.addEventListener("mouseenter",(()=>{u(e)})),e.addEventListener("mouseleave",(()=>{u(e)}))})),n.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const o=e.target;if(o.classList.contains("rooms__item--current"))return;n.forEach((e=>{if(e===o){!function(e){const o=["rooms__schema--current","rooms__schema--next","rooms__schema--prev"];[...d].forEach((e=>{o.forEach((o=>{e.classList.remove(o)}))})),"room-1"===e?(i.classList.add("rooms__schema--current"),l.classList.add("rooms__schema--next"),a.classList.add("rooms__schema--prev")):"room-2"===e?(i.classList.add("rooms__schema--prev"),l.classList.add("rooms__schema--current"),a.classList.add("rooms__schema--next")):"room-3"===e&&(i.classList.add("rooms__schema--next"),l.classList.add("rooms__schema--prev"),a.classList.add("rooms__schema--current"))}(e.id),e.classList.add("rooms__item--current")}else e.classList.remove("rooms__item--current")}))}(e)}))}));const m=document.querySelectorAll(".toggle-question-btn"),_=document.querySelectorAll(".accordion");function h(e){const o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");o.classList.remove("isHidden"),t.classList.add("isHidden")}function f(e){const o=e.querySelector(".icon--plus"),t=e.querySelector(".icon--minus");o.classList.toggle("isHidden"),t.classList.toggle("isHidden")}function y(e){const o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}m.forEach((e=>{e.addEventListener("click",(o=>{o.target===e&&f(e),m.forEach(h)}))})),_.forEach((e=>{e.querySelector(".accordion__intro").addEventListener("click",(()=>{!function(e){const o=e.querySelector(".toggle-question-btn");m.forEach(h),t=e,t.querySelector(".accordion__content").style.maxHeight?y(t):(_.forEach((e=>{y(e)})),function(e){const o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(t)),f(o);var t}(e)}))})),s("gWa4t"),s("jdLBi"),s("2in5s"),s("hxcYJ"),s("psiqy"),s("eXy63"),s("Sok8x");
//# sourceMappingURL=index.ab9da3b8.js.map
