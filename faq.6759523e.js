!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},n.parcelRequired7c6=c),c.register("ianEp",(function(t,n){e(t.exports,"initializeModal",(function(){return i})),e(t.exports,"toggleModal",(function(){return o}));var r=c("2u430");r=c("2u430");function i(e){var t,n,r;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(function(){return o(e)})),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(function(t){t.stopPropagation(),o(e)})),null===(r=e.backdrop)||void 0===r||r.addEventListener("click",(function(t){t.target===e.backdrop&&o(e)}))}function o(e){var t;document.body.classList.toggle("".concat(e.name,"-modal-open")),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(0,r.resetErrors)(null===r.subscForm||void 0===r.subscForm?void 0:r.subscForm.elements)}})),c.register("2u430",(function(n,r){e(n.exports,"subscForm",(function(){return l})),e(n.exports,"setPropertyInOrderObj",(function(){return b})),e(n.exports,"resetErrors",(function(){return g}));var i=c("8nrFW"),o=c("1FpXB"),a=c("ianEp"),u=c("f8kn7"),s=c("j9tYZ"),l=document.querySelector(".subscr__form"),d=document.querySelectorAll(".payment__btn"),f=document.querySelector(".form__payment-error-text"),y=document.querySelector(".form__policy-error-text"),m=document.querySelectorAll(".form__input"),v=document.querySelector(".calc-btn");null==l||l.addEventListener("submit",_),null==v||v.addEventListener("click",(function(e){e.preventDefault(),_(e)})),d.forEach((function(e){e.addEventListener("click",(function(e){!function(e){var n=e.target.closest("button");if(b(n),n.classList.contains("active"))return;t(i)(d).forEach((function(e){e===n?e.classList.add("active"):e.classList.remove("active")}))}(e),!f.classList.contains("isHidden")&&S()}))})),m.forEach((function(e){e.addEventListener("focus",(function(){e.classList.remove("error")}))}));var p=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],q={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function b(e){var t,n=e.getAttribute("data-type"),r=null!==(t=e.getAttribute("data-id"))&&void 0!==t?t:"";q[n]=r}function g(e){t(i)(e).forEach((function(e){e.classList.remove("error")}))}function S(){f.classList.toggle("isHidden")}function _(e){e.preventDefault();var n="BUTTON"===e.currentTarget.tagName,r=n?l.elements:e.currentTarget.elements;console.log("e.currentTarget: ",e.currentTarget);var c=function(e,t){return t.filter((function(t){return""===e[t].value.trim()})).map((function(t){return e[t]}))}(r,p);g(r),function(e){e.forEach((function(e){e.classList.add("error")}))}(c);var f=t(i)(d).some((function(e){return e.classList.contains("active")})),m=document.querySelector('[name="studio-policy-check"]').checked,v=c.length>0;if(f||S(),m||y.classList.toggle("isHidden"),f&&!v&&m){var _,E,x,L,k,h=n?l:e.target;n&&(L=document.querySelector('[data-type="userTakeKeyAddress"]'),k=document.querySelector('[data-type="userGiveKeyAddress"]'),b(L),b(k),_=q,E=s.userServicesOrderInfoObj.square.quantity,x=s.userServicesOrderInfoObj.square.price,_.userSquare={quantity:"".concat(E),cost:(0,s.calculateServiceCost)(E,x)},function(e){var t=(0,s.filterObjectByQuantity)(s.userServicesOrderInfoObj);e.userServices=Object.keys(t).filter((function(e){return"square"!==e})).map((function(e){var n=t[e],r=n.name,i=n.quantity,c=n.price;return{name:r,quantity:i,cost:(0,s.calculateServiceCost)(i,c)}}))}(q)),function(e){console.log("form: ",e),new FormData(e).forEach((function(e,t){t.startsWith("user")&&(q[t]=e)}))}(h),(0,u.storeDataInLocalStorage)("userOrderDataObj",q),function(e){t(i)(e).forEach((function(e){"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(r),t(i)(d).forEach((function(e){e.classList.remove("active")})),n||(0,a.toggleModal)(o.refsSubscr),window.location.href="/success-order.html"}}})),c.register("1FpXB",(function(t,n){e(t.exports,"refsSubscr",(function(){return i}));var r=c("ianEp"),i={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,r.initializeModal)(i)})),c.register("j9tYZ",(function(n,r){e(n.exports,"userServicesOrderInfoObj",(function(){return g})),e(n.exports,"calculateServiceCost",(function(){return L})),e(n.exports,"filterObjectByQuantity",(function(){return k}));var i=c("dDDEV"),o=c("8nrFW"),a=c("2u430"),u=document.querySelectorAll(".buildings__element"),s=document.querySelector(".control-quantity-btn--plus"),l=document.querySelector(".control-quantity-btn--minus"),d=document.querySelectorAll(".service-element .checkbox"),f=document.querySelector(".table__data"),y=document.querySelector("#take-keys-btn"),m=document.querySelector("#give-keys-btn"),v=document.querySelector(".keys-address-block"),p=document.querySelector(".keys-address-block__take-item"),q=document.querySelector(".keys-address-block__give-item");null==s||s.addEventListener("click",E),null==l||l.addEventListener("click",E),null==y||y.addEventListener("click",D),null==m||m.addEventListener("click",D),u.forEach((function(e){e.addEventListener("click",(function(e){(0,a.setPropertyInOrderObj)(e.target),function(e){var n=e.target;if(n.classList.contains("buildings__element--current"))return;t(o)(u).forEach((function(e){if(e===n){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),d.forEach((function(e){e.addEventListener("change",(function(e){!function(e){var n=e.currentTarget,r=n.closest("label"),i=r.nextElementSibling,c=n.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(i,c),function(e){var t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",_),n.addEventListener("click",_)}(i);var a=function(e){var t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),i=document.createElement("li");i.id=r,i.className="table__item table__block";var c=w("item__name","".concat(t)),o=w("","x"),a=w("name-wrapper"),u=w("quantity-wrapper"),s=w("item__quantity service-quantity",b[r].quantity);j(u,[o,s]),j(a,[c,u]);var l=w("service-value","".concat(n,"zł"));return l.setAttribute("data-service",r),j(i,[a,l]),i}(r),u=r.getAttribute("data-id");(function(e,n){var r=n.id,i=function(e){var n=f.querySelectorAll("li");return t(o)(n).find((function(t){return t.id===e}))}(r);e&&!i?(!function(e){f.insertAdjacentElement("beforeend",e)}(n),h(r)):!e&&i&&(h(r,0),function(e){f.removeChild(e)}(i))})(c,a),x(u),O()}(e)}))}));var b={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},g={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function S(e){var n=A(e),r=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)b[e].quantity+=1;else if("minus"===t){if(1===b[e].quantity)return;b[e].quantity-=1}}(n,r),function(e){var n=document.querySelectorAll(".service-element"),r=t(o)(n).find((function(t){return t.getAttribute("data-id")===e})),i=null==r?void 0:r.nextElementSibling.querySelector('[data-name="'.concat(e,'"]')),c=document.querySelector(".wrap--square").querySelector('[data-name="'.concat(e,'"]'));i&&(i.textContent=b[e].quantity),c&&(c.textContent=b[e].quantity,document.querySelector(".square-value-total").textContent=b[e].quantity)}(n),function(e){var t,n,r=null===(t=document.querySelector('[data-name="'.concat(e,'"]')).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===b[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(n)}function _(e){var t=A(e);S(e),x(t),O()}function E(e){var t;S(e),t=document.querySelector('[data-service="square"]'),g.square.quantity=b.square.quantity,t.textContent="".concat(g.square.quantity*g.square.price,"zł"),O()}function x(e){var t=document.querySelector('[data-service="'.concat(e,'"]')),n=document.querySelector("#".concat(e," .service-quantity")),r=b[e].price;if(t&&n){var i=h(e),c=L(i,r);t.textContent=c,n.textContent=i}else h(e,0)}function L(e,t){var n=(e*t).toFixed(2);return"".concat(n,"zł")}function k(e){return Object.keys(e).filter((function(t){return e[t].quantity>0})).reduce((function(n,r){return n[r]=t(i)({},e[r]),delete n[r].square,n}),{})}function h(e,t){var n=void 0!==t?t:b[e].quantity;return g[e].quantity=n,n}function O(){var e=Object.keys(g).reduce((function(e,t){var n=g[t];return e+n.quantity*n.price}),0).toFixed(2);document.querySelector(".total-order-value").textContent="".concat(e,"zł")}function w(e,t){var n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function j(e,t){t.forEach((function(t){e.appendChild(t)}))}function A(e){var t,n,r,i,c,o=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),a=null===(c=null===(i=e.currentTarget)||void 0===i?void 0:i.closest(".wrap--square"))||void 0===c?void 0:c.getAttribute("data-id");return o||a}function D(e){var t,n,r=e.currentTarget;r.classList.toggle("active"),function(e){"take-keys-btn"===e?p.classList.toggle("isHidden"):q.classList.toggle("isHidden")}(r.id),t=p.classList.contains("isHidden"),n=q.classList.contains("isHidden"),t&&n?v.classList.add("isHidden"):v.classList.remove("isHidden")}})),c.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=c("hKHmD"))&&n.__esModule?n:{default:n}})),c.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}))}();
//# sourceMappingURL=faq.6759523e.js.map
