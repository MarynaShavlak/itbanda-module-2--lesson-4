!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r),r("6bPr4"),r("lEcfz"),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var o;(o=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var o,n;o=e,n="none"===window.getComputedStyle(o).display,o.style.display=n?"block":"none"})),function(e){var o=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===o.style.display?(o.style.display="block",n.style.display="none"):(o.style.display="none",n.style.display="block")}(o)}))}));var l=r("8nrFW"),c=document.querySelector(".subscr__form");function u(o){e(l)(o).forEach((function(e){e.classList.remove("error")}))}function a(e){document.body.classList.toggle("".concat(e.name,"-modal-open")),e.modal.classList.toggle("backdrop--hidden"),"subscription"===e.name&&u(null==c?void 0:c.elements)}null==c||c.addEventListener("submit",(function(e){console.log("form submit"),e.preventDefault();var o=e.currentTarget.elements,n=function(e,o){var n=[];return o.forEach((function(o){0===e[o].value.length&&n.push(e[o])})),n}(o,["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"]);u(o),function(e){e.forEach((function(e){e.classList.add("error")}))}(n),0===n.length&&(e.currentTarget.submit(),window.location.href="success-order.html")}));var s,i={name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")};(s=i).openModalBtn.addEventListener("click",(function(){return a(s)})),s.closeModalBtn.addEventListener("click",(function(e){e.stopPropagation(),a(s)})),s.backdrop.addEventListener("click",(function(e){e.target===s.backdrop&&a(s)}))}();
//# sourceMappingURL=faq.98818ded.js.map