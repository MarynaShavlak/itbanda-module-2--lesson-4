!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r("6bPr4"),r("lEcfz"),document.querySelectorAll(".toggle-question-btn").forEach((function(e){e.addEventListener("click",(function(){var t;(t=e).closest(".questions__item").querySelectorAll(".questions__text").forEach((function(e){var t,n;t=e,n="none"===window.getComputedStyle(t).display,t.style.display=n?"block":"none"})),function(e){var t=e.querySelector(".icon--plus"),n=e.querySelector(".icon--minus");"none"===t.style.display?(t.style.display="block",n.style.display="none"):(t.style.display="none",n.style.display="block")}(t)}))})),r("ianEp"),r("eza0P"),r("cYklY"),r("6Zya5"),r("lXOyw");var a=r("8nrFW"),c=document.querySelectorAll(".buildings__element"),o=document.querySelector(".control-quantity-btn--plus"),u=document.querySelector(".control-quantity-btn--minus"),l=(document.querySelectorAll(".square-value"),document.querySelectorAll(".service-element .checkbox")),s=document.querySelector(".table__data"),d=document.querySelector("#take-keys-btn"),y=document.querySelector("#give-keys-btn"),q=document.querySelector(".keys-address-block"),f=document.querySelector(".keys-address-block__take-item"),v=document.querySelector(".keys-address-block__give-item");o.addEventListener("click",S),u.addEventListener("click",S),d.addEventListener("click",h),y.addEventListener("click",h),c.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var t=e.target;if(t.classList.contains("buildings__element--current"))return;c.forEach((function(e){if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),l.forEach((function(t){t.addEventListener("change",(function(t){!function(t){var n=t.currentTarget,i=n.closest("label"),r=i.nextElementSibling,c=n.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(r,c),function(e){var t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",g),n.addEventListener("click",g)}(r);var o=function(e){var t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),i=e.getAttribute("data-id"),r=document.createElement("li");r.id=i,r.className="table__item table__block";var a=E("item__name","".concat(t)),c=E("","x"),o=E("name-wrapper"),u=E("quantity-wrapper"),l=E("item__quantity service-quantity",p[i].quantity);L(u,[c,l]),L(o,[a,u]);var s=E("service-value","".concat(n,"zł"));return s.setAttribute("data-service",i),L(r,[o,s]),r}(i),u=i.getAttribute("data-id");(function(t,n){var i=n.id,r=function(t){var n=s.querySelectorAll("li");return e(a)(n).find((function(e){return e.id===t}))}(i);t&&!r?(!function(e){s.insertAdjacentElement("beforeend",e)}(n),k(i)):!t&&r&&(k(i,0),function(e){s.removeChild(e)}(r))})(c,o),_(u),x()}(t)}))}));var p={square:{quantity:1,price:2},windowsStandard:{quantity:1,price:35},windowsLarge:{quantity:1,price:40},microWave:{quantity:1,price:15},refrigerator:{quantity:1,price:40},plate:{quantity:1,price:35},officeChair:{quantity:1,price:20},sofaDry2x:{quantity:1,price:109.99},sofaDry3x:{quantity:1,price:129.99},sofaDry4x:{quantity:1,price:149.99}},m={square:{quantity:1,price:2},windowsStandard:{quantity:0,price:35},windowsLarge:{quantity:0,price:40},microWave:{quantity:0,price:15},refrigerator:{quantity:0,price:40},plate:{quantity:0,price:35},officeChair:{quantity:0,price:20},sofaDry2x:{quantity:0,price:109.99},sofaDry3x:{quantity:0,price:129.99},sofaDry4x:{quantity:0,price:149.99}};function b(t){var n=w(t),i=function(e){return e.currentTarget.getAttribute("data-type")}(t);!function(e,t){if("plus"===t)p[e].quantity+=1;else if("minus"===t){if(1===p[e].quantity)return;p[e].quantity-=1}}(n,i),function(t){var n=document.querySelectorAll(".service-element"),i=e(a)(n).find((function(e){return e.getAttribute("data-id")===t})),r=null==i?void 0:i.nextElementSibling.querySelector('[data-name="'.concat(t,'"]')),c=document.querySelector(".wrap--square").querySelector('[data-name="'.concat(t,'"]'));r&&(r.textContent=p[t].quantity),c&&(c.textContent=p[t].quantity,document.querySelector(".square-value-total").textContent=p[t].quantity)}(n),function(e){var t,n,i=null===(t=document.querySelector('[data-name="'.concat(e,'"]')).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===p[e].quantity?i.style.fill="rgba(\t77, 18, 153, 0.3)":i.style.fill="#4D1299"}(n)}function g(e){var t=w(e);b(e),_(t),x()}function S(e){var t;b(e),t=document.querySelector('[data-service="square"]'),m.square.quantity=p.square.quantity,t.textContent="".concat(m.square.quantity*m.square.price,"zł"),x()}function _(e){var t=document.querySelector('[data-service="'.concat(e,'"]')),n=document.querySelector("#".concat(e," .service-quantity")),i=p[e].price;if(t&&n){var r=k(e),a=(r*i).toFixed(2);console.log("cost: ",a),t.textContent="".concat(a,"zł"),n.textContent=r}else k(e,0)}function k(e,t){var n=void 0!==t?t:p[e].quantity;return m[e].quantity=n,n}function x(){var e=Object.keys(m).reduce((function(e,t){var n=m[t];return e+n.quantity*n.price}),0).toFixed(2);document.querySelector(".total-order-value").textContent="".concat(e,"zł")}function E(e,t){var n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function L(e,t){t.forEach((function(t){e.appendChild(t)}))}function w(e){var t,n,i,r,a,c=null===(i=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===i?void 0:i.getAttribute("data-id"),o=null===(a=null===(r=e.currentTarget)||void 0===r?void 0:r.closest(".wrap--square"))||void 0===a?void 0:a.getAttribute("data-id");return c||o}function h(e){var t,n,i=e.currentTarget;i.classList.toggle("active"),function(e){"take-keys-btn"===e?f.classList.toggle("isHidden"):v.classList.toggle("isHidden")}(i.id),t=f.classList.contains("isHidden"),n=v.classList.contains("isHidden"),t&&n?q.classList.add("isHidden"):q.classList.remove("isHidden")}r("2u430")}();
//# sourceMappingURL=office.0dd534f6.js.map
