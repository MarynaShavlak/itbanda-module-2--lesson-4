!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("6bPr4"),r("lEcfz"),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var t;(t=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var t,n;t=e,n="none"===window.getComputedStyle(t).display,t.style.display=n?"block":"none"})),function(e){var t=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}(t)}))}));var c=r("8nrFW"),l=document.querySelector(".subscr__form"),s=document.querySelectorAll(".payment__btn"),i=document.querySelector(".form__error-text"),a=document.querySelectorAll(".form__input");null==l||l.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,o=function(e,t){return t.filter((function(t){return""===e[t].value.trim()})).map((function(t){return e[t]}))}(n,u);d(n),function(e){console.log("elementsWithErrors: ",e),e.forEach((function(e){e.classList.add("error")}))}(o);var r=e(c)(s).some((function(e){return e.classList.contains("active")})),l=o.length>0;r||f();if(!r||l)return;console.log("submit"),console.log("elements: ",n)})),s.forEach((function(t){t.addEventListener("click",(function(t){!function(t){var n=t.target.closest("button");if(n.classList.contains("active"))return;e(c)(s).forEach((function(e){e===n?e.classList.add("active"):e.classList.remove("active")}))}(t),!i.classList.contains("isHidden")&&f()}))})),a.forEach((function(e){e.addEventListener("focus",(function(){e.classList.remove("error")}))}));var u=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"];function d(t){e(c)(t).forEach((function(e){e.classList.remove("error")}))}function f(){i.classList.toggle("isHidden")}function p(e){document.body.classList.toggle("".concat(e.name,"-modal-open")),e.modal.classList.toggle("backdrop--hidden"),"subscription"===e.name&&d(null==l?void 0:l.elements)}var m,y={name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")};(m=y).openModalBtn.addEventListener("click",(function(){return p(m)})),m.closeModalBtn.addEventListener("click",(function(e){e.stopPropagation(),p(m)})),m.backdrop.addEventListener("click",(function(e){e.target===m.backdrop&&p(m)}))}();
//# sourceMappingURL=faq.4c2d36f7.js.map
