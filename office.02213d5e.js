!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i("6bPr4"),i("lEcfz"),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var t;(t=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var t,n;t=e,n="none"===window.getComputedStyle(t).display,t.style.display=n?"block":"none"})),function(e){var t=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}(t)}))}));var o=i("8nrFW"),c=document.querySelector(".subscr__form"),a=document.querySelectorAll(".payment__btn"),u=document.querySelector(".form__error-text"),l=document.querySelectorAll(".form__input");null==c||c.addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements,r=function(e,t){return t.filter((function(t){return""===e[t].value.trim()})).map((function(t){return e[t]}))}(n,s);d(n),function(e){console.log("elementsWithErrors: ",e),e.forEach((function(e){e.classList.add("error")}))}(r);var i=e(o)(a).some((function(e){return e.classList.contains("active")})),c=r.length>0;i||y();if(!i||c)return;console.log("submit"),console.log("elements: ",n)})),a.forEach((function(t){t.addEventListener("click",(function(t){!function(t){var n=t.target.closest("button");if(n.classList.contains("active"))return;e(o)(a).forEach((function(e){e===n?e.classList.add("active"):e.classList.remove("active")}))}(t),!u.classList.contains("isHidden")&&y()}))})),l.forEach((function(e){e.addEventListener("focus",(function(){e.classList.remove("error")}))}));var s=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"];function d(t){e(o)(t).forEach((function(e){e.classList.remove("error")}))}function y(){u.classList.toggle("isHidden")}function f(e){document.body.classList.toggle("".concat(e.name,"-modal-open")),e.modal.classList.toggle("backdrop--hidden"),"subscription"===e.name&&d(null==c?void 0:c.elements)}var v,m={name:"support",openModalBtn:document.querySelector("[data-support-modal-open]"),closeModalBtn:document.querySelector("[data-support-modal-close]"),modal:document.querySelector("[data-support-modal]"),backdrop:document.querySelector(".backdrop--support")};(v=m).openModalBtn.addEventListener("click",(function(){return f(v)})),v.closeModalBtn.addEventListener("click",(function(e){e.stopPropagation(),f(v)})),v.backdrop.addEventListener("click",(function(e){e.target===v.backdrop&&f(v)})),i("cYklY"),i("6Zya5"),i("lXOyw");o=i("8nrFW");var q=document.querySelectorAll(".buildings__element"),p=document.querySelector(".control-quantity-btn--plus"),g=document.querySelector(".control-quantity-btn--minus"),b=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),S=document.querySelector(".table__data"),_=document.querySelector("#take-keys-btn"),L=document.querySelector("#give-keys-btn"),k=document.querySelector(".keys-address-block"),E=document.querySelector(".keys-address-block__take-item"),x=document.querySelector(".keys-address-block__give-item");p.addEventListener("click",D),g.addEventListener("click",D),_.addEventListener("click",O),L.addEventListener("click",O),q.forEach((function(t){t.addEventListener("click",(function(t){!function(t){var n=t.target;if(n.classList.contains("buildings__element--current"))return;e(o)(q).forEach((function(e){if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(t)}))})),b.forEach((function(t){t.addEventListener("change",(function(t){!function(t){var n=t.currentTarget,r=n.closest("label"),i=r.nextElementSibling,c=n.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(i,c),function(e){var t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",C),n.addEventListener("click",C)}(i);var a=function(e){var t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),i=document.createElement("li");i.id=r,i.className="table__item table__block";var o=M("item__name","".concat(t)),c=M("","x"),a=M("name-wrapper"),u=M("quantity-wrapper"),l=M("item__quantity service-quantity",h[r].quantity);z(u,[c,l]),z(a,[o,u]);var s=M("service-value","".concat(n,"zł"));return s.setAttribute("data-service",r),z(i,[a,s]),i}(r),u=r.getAttribute("data-id");(function(t,n){var r=n.id,i=function(t){var n=S.querySelectorAll("li");return e(o)(n).find((function(e){return e.id===t}))}(r);t&&!i?(!function(e){S.insertAdjacentElement("beforeend",e)}(n),H(r)):!t&&i&&(H(r,0),function(e){S.removeChild(e)}(i))})(c,a),T(u),N()}(t)}))}));var h={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},w={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function A(t){var n=F(t),r=function(e){return e.currentTarget.getAttribute("data-type")}(t);!function(e,t){if("plus"===t)h[e].quantity+=1;else if("minus"===t){if(1===h[e].quantity)return;h[e].quantity-=1}}(n,r),function(t){var n=document.querySelectorAll(".service-element"),r=e(o)(n).find((function(e){return e.getAttribute("data-id")===t})),i=null==r?void 0:r.nextElementSibling.querySelector('[data-name="'.concat(t,'"]')),c=document.querySelector(".wrap--square").querySelector('[data-name="'.concat(t,'"]'));i&&(i.textContent=h[t].quantity),c&&(c.textContent=h[t].quantity,document.querySelector(".square-value-total").textContent=h[t].quantity)}(n),function(e){var t,n,r=null===(t=document.querySelector('[data-name="'.concat(e,'"]')).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===h[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(n)}function C(e){var t=F(e);A(e),T(t),N()}function D(e){var t;A(e),t=document.querySelector('[data-service="square"]'),w.square.quantity=h.square.quantity,t.textContent="".concat(w.square.quantity*w.square.price,"zł"),N()}function T(e){var t=document.querySelector('[data-service="'.concat(e,'"]')),n=document.querySelector("#".concat(e," .service-quantity")),r=h[e].price;if(t&&n){var i=H(e),o=(i*r).toFixed(2);t.textContent="".concat(o,"zł"),n.textContent=i}else H(e,0)}function H(e,t){var n=void 0!==t?t:h[e].quantity;return w[e].quantity=n,n}function N(){var e=Object.keys(w).reduce((function(e,t){var n=w[t];return e+n.quantity*n.price}),0).toFixed(2);document.querySelector(".total-order-value").textContent="".concat(e,"zł")}function M(e,t){var n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function z(e,t){t.forEach((function(t){e.appendChild(t)}))}function F(e){var t,n,r,i,o,c=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),a=null===(o=null===(i=e.currentTarget)||void 0===i?void 0:i.closest(".wrap--square"))||void 0===o?void 0:o.getAttribute("data-id");return c||a}function O(e){var t,n,r=e.currentTarget;r.classList.toggle("active"),function(e){"take-keys-btn"===e?E.classList.toggle("isHidden"):x.classList.toggle("isHidden")}(r.id),t=E.classList.contains("isHidden"),n=x.classList.contains("isHidden"),t&&n?k.classList.add("isHidden"):k.classList.remove("isHidden")}}();
//# sourceMappingURL=office.02213d5e.js.map
