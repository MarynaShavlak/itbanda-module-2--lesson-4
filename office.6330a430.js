var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},c=e.parcelRequired7c6;null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in n){var c=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,c.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=c),c("cKJBV"),c("9nuA4"),c("3iCGc"),c("1GEAb");const t=document.querySelectorAll(".toggle-question-btn"),i=document.querySelectorAll(".accordion");function l(e){const o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");o.classList.remove("isHidden"),n.classList.add("isHidden")}function r(e){const o=e.querySelector(".icon--plus");console.log("plusIcon: ",o);const n=e.querySelector(".icon--minus");console.log("minusIcon: ",n),o.classList.toggle("isHidden"),n.classList.toggle("isHidden"),console.log("ПІСЛЯ ТОГЛ plusIcon: ",o),console.log(" ПІСЛЯ ТОГЛ minusIcon: ",n)}function s(e){const o=e.querySelector(".accordion__content");e.classList.remove("accordion__active"),o.style.maxHeight=null}t.forEach((e=>{e.addEventListener("click",(o=>{o.target===e&&r(e),t.forEach(l)}))})),i.forEach((e=>{e.querySelector(".accordion__intro").addEventListener("click",(()=>{!function(e){const o=e.querySelector(".toggle-question-btn");console.log("btn : ",o),t.forEach(l),n=e,n.querySelector(".accordion__content").style.maxHeight?s(n):(i.forEach((e=>{s(e)})),function(e){const o=e.querySelector(".accordion__content");e.classList.add("accordion__active"),o.style.maxHeight=o.scrollHeight+"px"}(n)),r(o);var n}(e)}))})),c("gWa4t"),c("jdLBi"),c("hxcYJ"),c("psiqy"),c("eXy63"),c("3K9gQ"),c("8c0Ac"),c("Sok8x");
//# sourceMappingURL=office.6330a430.js.map
