function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i),i.register("gWa4t",(function(t,n){e(t.exports,"initializeModal",(function(){return c})),e(t.exports,"toggleModal",(function(){return o}));var r=i("8c0Ac");r=i("8c0Ac");function c(e){var t,n,r;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(()=>o(e))),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(t=>{t.stopPropagation(),o(e)})),null===(r=e.backdrop)||void 0===r||r.addEventListener("click",(t=>{t.target===e.backdrop&&o(e)}))}function o(e){var t;document.body.classList.toggle(`${e.name}-modal-open`),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(0,r.resetErrors)(null===r.subscForm||void 0===r.subscForm?void 0:r.subscForm.elements)}})),i.register("8c0Ac",(function(t,n){e(t.exports,"subscForm",(function(){return u})),e(t.exports,"setPropertyInOrderObj",(function(){return p})),e(t.exports,"resetErrors",(function(){return v}));var r=i("2in5s"),c=i("gWa4t"),o=i("1PyR0"),a=i("3K9gQ");const u=document.querySelector(".subscr__form"),s=document.querySelectorAll(".payment__btn"),l=document.querySelector(".form__payment-error-text"),d=document.querySelector(".form__policy-error-text"),y=document.querySelectorAll(".form__input"),m=document.querySelector(".calc-btn");null==u||u.addEventListener("submit",g),null==m||m.addEventListener("click",(e=>{e.preventDefault(),g(e)})),s.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");if(p(t),t.classList.contains("active"))return;[...s].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e);!l.classList.contains("isHidden")&&b()}))})),y.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const f=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],q={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function p(e){const t=e.getAttribute("data-type");var n;const r=null!==(n=e.getAttribute("data-id"))&&void 0!==n?n:"";q[t]=r}function v(e){[...e].forEach((e=>{e.classList.remove("error")}))}function b(){l.classList.toggle("isHidden")}function g(e){e.preventDefault();const t="BUTTON"===e.currentTarget.tagName,n=t?u.elements:e.currentTarget.elements,i=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(n,f);v(n),function(e){e.forEach((e=>{e.classList.add("error")}))}(i);const l=[...s].some((e=>e.classList.contains("active"))),y=document.querySelector('[name="studio-policy-check"]').checked,m=i.length>0;if(l||b(),y||d.classList.toggle("isHidden"),!l||m||!y)return;const g=t?u:e.target;var S,L,k;t&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');p(e),p(t)}(),S=q,L=a.userServicesOrderInfoObj.square.quantity,k=a.userServicesOrderInfoObj.square.price,S.userSquare={quantity:`${L}`,cost:(0,a.calculateServiceCost)(L,k)},function(e){const t=(0,a.filterObjectByQuantity)(a.userServicesOrderInfoObj);e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:r,price:i}=t[e];return{name:n,quantity:r,cost:(0,a.calculateServiceCost)(r,i)}}))}(q)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(q[t]=e)}))}(g),(0,o.storeDataInLocalStorage)("userOrderDataObj",q),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(n),[...s].forEach((e=>{e.classList.remove("active")})),t||(0,c.toggleModal)(r.refsSubscr),window.location.href="cleaning/success-order.html"}})),i.register("2in5s",(function(t,n){e(t.exports,"refsSubscr",(function(){return c}));var r=i("gWa4t");const c={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,r.initializeModal)(c)})),i.register("3K9gQ",(function(t,n){e(t.exports,"userServicesOrderInfoObj",(function(){return p})),e(t.exports,"calculateServiceCost",(function(){return L})),e(t.exports,"filterObjectByQuantity",(function(){return k}));var r=i("8c0Ac");const c=document.querySelectorAll(".buildings__element"),o=document.querySelector(".control-quantity-btn--plus"),a=document.querySelector(".control-quantity-btn--minus"),u=document.querySelectorAll(".service-element .checkbox"),s=document.querySelector(".table__data"),l=document.querySelector("#take-keys-btn"),d=document.querySelector("#give-keys-btn"),y=document.querySelector(".keys-address-block"),m=document.querySelector(".keys-address-block__take-item"),f=document.querySelector(".keys-address-block__give-item");null==o||o.addEventListener("click",g),null==a||a.addEventListener("click",g),null==l||l.addEventListener("click",O),null==d||d.addEventListener("click",O),c.forEach((e=>{e.addEventListener("click",(e=>{(0,r.setPropertyInOrderObj)(e.target),function(e){const t=e.target;if(t.classList.contains("buildings__element--current"))return;[...c].forEach((e=>{if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),u.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),r=n.nextElementSibling,i=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(r,i),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",b),n.addEventListener("click",b)}(r);const c=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),i=document.createElement("li");i.id=r,i.className="table__item table__block";const c=_("item__name",`${t}`),o=_("","x"),a=_("name-wrapper"),u=_("quantity-wrapper"),s=_("item__quantity service-quantity",q[r].quantity);h(u,[o,s]),h(a,[c,u]);const l=_("service-value",`${n}zł`);return l.setAttribute("data-service",r),h(i,[a,l]),i}(n),o=n.getAttribute("data-id");(function(e,t){const n=t.id,r=function(e){return[...s.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!r?(!function(e){s.insertAdjacentElement("beforeend",e)}(t),x(n)):!e&&r&&(x(n,0),function(e){s.removeChild(e)}(r))})(i,c),S(o),E(p)}(e)}))}));const q={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},p={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function v(e){const t=A(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)q[e].quantity+=1;else if("minus"===t){if(1===q[e].quantity)return;q[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=null==t?void 0:t.nextElementSibling.querySelector(`[data-name="${e}"]`),r=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=q[e].quantity),r&&(r.textContent=q[e].quantity,document.querySelector(".square-value-total").textContent=q[e].quantity)}(t),function(e){var t,n;const r=null===(t=document.querySelector(`[data-name="${e}"]`).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===q[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(t)}function b(e){const t=A(e);v(e),S(t),E(p)}function g(e){v(e),function(){const e=document.querySelector('[data-service="square"]');p.square.quantity=q.square.quantity,e.textContent=p.square.quantity*p.square.price+"zł"}(),E(p)}function S(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),r=q[e].price;if(t&&n){const i=x(e),c=L(i,r);t.textContent=c,n.textContent=i}else x(e,0)}function L(e,t){return`${(e*t).toFixed(2)}zł`}function k(e){return Object.keys(e).filter((t=>e[t].quantity>0)).reduce(((t,n)=>(t[n]={...e[n]},delete t[n].square,t)),{})}function x(e,t){const n=void 0!==t?t:q[e].quantity;return p[e].quantity=n,n}function E(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const r=n[t];return e+r.quantity*r.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function _(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function h(e,t){t.forEach((t=>{e.appendChild(t)}))}function A(e){var t,n,r,i,c;const o=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),a=null===(c=null===(i=e.currentTarget)||void 0===i?void 0:i.closest(".wrap--square"))||void 0===c?void 0:c.getAttribute("data-id");return o||a}function O(e){const t=e.currentTarget;t.classList.toggle("active");!function(e){"take-keys-btn"===e?m.classList.toggle("isHidden"):f.classList.toggle("isHidden")}(t.id),function(){const e=m.classList.contains("isHidden"),t=f.classList.contains("isHidden");e&&t?y.classList.add("isHidden"):y.classList.remove("isHidden")}()}}));
//# sourceMappingURL=faq.47f06d2f.js.map
