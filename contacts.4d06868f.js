function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("cKJBV",(function(t,n){e(t.exports,"appendElement",(function(){return y})),e(t.exports,"getClosestIcon",(function(){return p})),e(t.exports,"handleInputBlur",(function(){return v})),e(t.exports,"setShedulerVisibilityOptions",(function(){return h})),e(t.exports,"toggleClosestVisibility",(function(){return q}));var o=r("1PyR0"),c=r("3iCGc"),i=r("8L0UI");const a={home:["/cleaning/","/cleaning/index.html"],office:["/cleaning/office.html"],afterRepair:["/cleaning/after-repair.html"],calcOrder:["/cleaning/calc-order.html"],contacts:["/cleaning/contacts.html"],successOr404:["/cleaning/success-order.html","/cleaning/404.html"]},l={home:()=>{u([".nav__link",".nav--aside-menu .nav__link"]),s("index.html#order-cleaning-block")},office:()=>{u([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),s("office.html#office-calc-block"),f("calc(100% / 3)"),function(){document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden")));document.querySelector(".element--calculator-page").classList.add("isHidden")}()},afterRepair:()=>{var e;!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((e=>e.classList.add("isHidden"))),s("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),f("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),function(){document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden")));document.querySelector(".element--calculator-page").classList.remove("isHidden")}()},contacts:()=>{!function(){document.querySelector(".connection").classList.remove("no-padding-top");document.querySelector(".connection--second-block").classList.add("block-with-image")}(),d()},successOr404:()=>{d(),window.addEventListener("beforeunload",(function(){(0,o.resetLocalStorage)("userOrderDataObj")}))}};function s(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function u(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function d(){document.querySelector("main").classList.add("section--dark-background")}function m(e){e.classList.toggle("isActive")}function f(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}function y(e,t){e.appendChild(t)}function p(e,t){return e.parentElement.previousElementSibling.querySelector(`.${t}`)}function g(e){e.classList.toggle("isHidden")}function v(e,t){e.addEventListener("blur",(n=>{const o=t(n.target.value);e.value=o}))}function h(e,t,n){g(e),g(t),m(n)}function q(e,t,n){const o=e.querySelector(".work-shedule"),r=e.querySelector(`.${t}`);if(!o.classList.contains("isHidden")){g(o),g(r);m(p(r,n))}}document.addEventListener("DOMContentLoaded",(function(){const e=window.location.pathname,t=document.querySelector("body"),{themeToggler:n}=(0,i.getThemeTogglerElements)();n.addEventListener("click",(()=>{(0,c.setTheme)(t.classList.contains("active-dark-theme")?c.THEMES.LIGHT:c.THEMES.DARK)})),(0,c.applyTheme)();const o=Object.keys(l).find((t=>a[t].includes(e)));o&&l[o]()}))})),r.register("1PyR0",(function(t,n){function o(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function r(e){const t=localStorage.getItem(e);return JSON.parse(t)}function c(e){localStorage.removeItem(e)}e(t.exports,"storeDataInLocalStorage",(function(){return o})),e(t.exports,"getDataFromStorage",(function(){return r})),e(t.exports,"resetLocalStorage",(function(){return c}))})),r.register("3iCGc",(function(t,n){e(t.exports,"THEMES",(function(){return i})),e(t.exports,"setTheme",(function(){return l})),e(t.exports,"applyTheme",(function(){return s}));var o=r("8L0UI"),c=r("1PyR0");const i={LIGHT:"light",DARK:"dark"};let a=(0,c.getDataFromStorage)("theme")||i.LIGHT;function l(e){a=e,(0,c.storeDataInLocalStorage)("theme",e),s()}function s(){const{themeToggler:e,themeCircle:t,sunRays:n,sunIcon:r,moonIcon:c}=(0,o.getThemeTogglerElements)(),l=document.querySelector("body");a===i.DARK?(l.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),t.classList.add("theme__circle--dark"),t.classList.remove("theme__circle--light"),r.classList.add("circle__sun--hidden"),c.classList.remove("circle__moon--hidden"),n.forEach((e=>e.classList.add("circle__ray--hidden")))):(l.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),t.classList.remove("theme__circle--dark"),t.classList.add("theme__circle--light"),r.classList.remove("circle__sun--hidden"),c.classList.add("circle__moon--hidden"),n.forEach((e=>e.classList.remove("circle__ray--hidden"))))}})),r.register("8L0UI",(function(t,n){e(t.exports,"getTimePickerElements",(function(){return c})),e(t.exports,"getClosestDateInput",(function(){return i})),e(t.exports,"getClosestCalendarBlock",(function(){return a})),e(t.exports,"getCalendarElements",(function(){return l})),e(t.exports,"getClosestTimeInput",(function(){return s})),e(t.exports,"getClosestTimePickerBlock",(function(){return u})),e(t.exports,"getThemeTogglerElements",(function(){return d}));var o=r("cKJBV");function c(e){return{clockIcon:(0,o.getClosestIcon)(e,"icon--clock"),sheduleEl:e.parentElement.querySelector(".work-shedule"),hourTablo:e.querySelector(".tablo--hours"),minuteTablo:e.querySelector(".tablo--minutes"),hourPicker:e.querySelector(".time-picker__hours"),minutePicker:e.querySelector(".time-picker__minutes"),confirmTimeBtn:e.querySelector(".time-picker__btn"),timeInput:e.parentElement.previousElementSibling.querySelector('[name="userTime"]')}}function i(e){return e.closest("li").previousElementSibling.querySelector('[name="userDate"]')}function a(e){return e.closest("li").previousElementSibling.querySelector(".shedule-wrap")}function l(e){const t=(0,o.getClosestIcon)(e,"icon--calendar"),n=e.parentElement.previousElementSibling.querySelector('[name="userDate"]');e.parentElement.previousElementSibling.querySelector(".icon--calendar");return{calendarIcon:t,dateInput:n,sheduleEl:e.parentElement.querySelector(".work-shedule"),calendarBody:e.querySelector(".calendar__body"),calendarHeadMonthAndYear:e.querySelector(".calendar__monthYear"),prevMonthBtn:e.querySelector(".calendar__prevMonth-btn"),nextMonthBtn:e.querySelector(".calendar__nextMonth-btn")}}function s(e){return e.closest("li").nextElementSibling.querySelector('[name="userTime"]')}function u(e){return e.closest("li").nextElementSibling.querySelector(".shedule-wrap")}function d(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}})),r.register("9nuA4",(function(e,t){var n=r("jQ7WT");(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),o=document.querySelector(".close-menu-btn"),r=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");(o?n.enableBodyScroll:n.disableBodyScroll)(document.body)};t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),(0,n.enableBodyScroll)(document.body))}))})()})),r.register("jQ7WT",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return g})),e(t.exports,"enableBodyScroll",(function(){return v}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],a=!1,l=-1,s=void 0,u=void 0,d=void 0,m=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},y=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)},p=function(){if(void 0!==u){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(t,e),u=void 0}},g=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),c?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t),c&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(l=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-l;!m(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?f(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",f,o?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},v=function(e){e?(i=i.filter((function(t){return t.targetElement!==e})),c&&(e.ontouchstart=null,e.ontouchmove=null,a&&0===i.length&&(document.removeEventListener("touchmove",f,o?{passive:!1}:void 0),a=!1)),c?p():y()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),r.register("1GEAb",(function(e,t){const n=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?n.style.display="flex":n.style.display="none"}),{passive:!0}),n.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})),r.register("Sok8x",(function(e,t){var n=r("gWa4t");const o={name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")};(0,n.initializeModal)(o)})),r.register("gWa4t",(function(t,n){e(t.exports,"initializeModal",(function(){return c})),e(t.exports,"toggleModal",(function(){return i}));var o=r("8c0Ac");o=r("8c0Ac");function c(e){var t,n,o;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(()=>i(e))),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(t=>{t.stopPropagation(),i(e)})),null===(o=e.backdrop)||void 0===o||o.addEventListener("click",(t=>{t.target===e.backdrop&&i(e)}))}function i(e){var t;document.body.classList.toggle(`${e.name}-modal-open`),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(0,o.resetErrors)(null===o.subscForm||void 0===o.subscForm?void 0:o.subscForm.elements)}})),r.register("8c0Ac",(function(t,n){e(t.exports,"subscForm",(function(){return l})),e(t.exports,"setPropertyInOrderObj",(function(){return g})),e(t.exports,"resetErrors",(function(){return v}));var o=r("2in5s"),c=r("gWa4t"),i=r("1PyR0"),a=r("3K9gQ");const l=document.querySelector(".subscr__form"),s=document.querySelectorAll(".payment__btn"),u=document.querySelector(".form__payment-error-text"),d=document.querySelector(".form__policy-error-text"),m=document.querySelectorAll(".form__input"),f=document.querySelector(".calc-btn");null==l||l.addEventListener("submit",q),null==f||f.addEventListener("click",(e=>{e.preventDefault(),q(e)})),s.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");if(g(t),t.classList.contains("active"))return;[...s].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e);!u.classList.contains("isHidden")&&h()}))})),m.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const y=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],p={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function g(e){const t=e.getAttribute("data-type");var n;const o=null!==(n=e.getAttribute("data-id"))&&void 0!==n?n:"";p[t]=o}function v(e){[...e].forEach((e=>{e.classList.remove("error")}))}function h(){u.classList.toggle("isHidden")}function q(e){e.preventDefault();const t="BUTTON"===e.currentTarget.tagName,n=t?l.elements:e.currentTarget.elements,r=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(n,y);v(n),function(e){e.forEach((e=>{e.classList.add("error")}))}(r);const u=[...s].some((e=>e.classList.contains("active"))),m=document.querySelector('[name="studio-policy-check"]').checked,f=r.length>0;if(u||h(),m||d.classList.toggle("isHidden"),!u||f||!m)return;const q=t?l:e.target;var b,S,_;t&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');g(e),g(t)}(),b=p,S=a.userServicesOrderInfoObj.square.quantity,_=a.userServicesOrderInfoObj.square.price,b.userSquare={quantity:`${S}`,cost:(0,a.calculateServiceCost)(S,_)},function(e){const t=(0,a.filterObjectByQuantity)(a.userServicesOrderInfoObj);e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:o,price:r}=t[e];return{name:n,quantity:o,cost:(0,a.calculateServiceCost)(o,r)}}))}(p)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(p[t]=e)}))}(q),(0,i.storeDataInLocalStorage)("userOrderDataObj",p),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(n),[...s].forEach((e=>{e.classList.remove("active")})),t||(0,c.toggleModal)(o.refsSubscr),window.location.href=window.location.href="https://marynashavlak.github.io/cleaning/success-order.html"}})),r.register("2in5s",(function(t,n){e(t.exports,"refsSubscr",(function(){return c}));var o=r("gWa4t");const c={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,o.initializeModal)(c)})),r.register("3K9gQ",(function(t,n){e(t.exports,"userServicesOrderInfoObj",(function(){return g})),e(t.exports,"calculateServiceCost",(function(){return S})),e(t.exports,"filterObjectByQuantity",(function(){return _}));var o=r("8c0Ac");const c=document.querySelectorAll(".buildings__element"),i=document.querySelector(".control-quantity-btn--plus"),a=document.querySelector(".control-quantity-btn--minus"),l=document.querySelectorAll(".service-element .checkbox"),s=document.querySelector(".table__data"),u=document.querySelector("#take-keys-btn"),d=document.querySelector("#give-keys-btn"),m=document.querySelector(".keys-address-block"),f=document.querySelector(".keys-address-block__take-item"),y=document.querySelector(".keys-address-block__give-item");null==i||i.addEventListener("click",q),null==a||a.addEventListener("click",q),null==u||u.addEventListener("click",T),null==d||d.addEventListener("click",T),c.forEach((e=>{e.addEventListener("click",(e=>{(0,o.setPropertyInOrderObj)(e.target),function(e){const t=e.target;if(t.classList.contains("buildings__element--current"))return;[...c].forEach((e=>{if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),l.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),o=n.nextElementSibling,r=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(o,r),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",h),n.addEventListener("click",h)}(o);const c=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),o=e.getAttribute("data-id"),r=document.createElement("li");r.id=o,r.className="table__item table__block";const c=w("item__name",`${t}`),i=w("","x"),a=w("name-wrapper"),l=w("quantity-wrapper"),s=w("item__quantity service-quantity",p[o].quantity);k(l,[i,s]),k(a,[c,l]);const u=w("service-value",`${n}zł`);return u.setAttribute("data-service",o),k(r,[a,u]),r}(n),i=n.getAttribute("data-id");(function(e,t){const n=t.id,o=function(e){return[...s.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!o?(!function(e){s.insertAdjacentElement("beforeend",e)}(t),L(n)):!e&&o&&(L(n,0),function(e){s.removeChild(e)}(o))})(r,c),b(i),E(g)}(e)}))}));const p={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},g={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function v(e){const t=x(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)p[e].quantity+=1;else if("minus"===t){if(1===p[e].quantity)return;p[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=null==t?void 0:t.nextElementSibling.querySelector(`[data-name="${e}"]`),o=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=p[e].quantity),o&&(o.textContent=p[e].quantity,document.querySelector(".square-value-total").textContent=p[e].quantity)}(t),function(e){var t,n;const o=null===(t=document.querySelector(`[data-name="${e}"]`).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===p[e].quantity?o.style.fill="rgba(\t77, 18, 153, 0.3)":o.style.fill="#4D1299"}(t)}function h(e){const t=x(e);v(e),b(t),E(g)}function q(e){v(e),function(){const e=document.querySelector('[data-service="square"]');g.square.quantity=p.square.quantity,e.textContent=g.square.quantity*g.square.price+"zł"}(),E(g)}function b(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),o=p[e].price;if(t&&n){const r=L(e),c=S(r,o);t.textContent=c,n.textContent=r}else L(e,0)}function S(e,t){return`${(e*t).toFixed(2)}zł`}function _(e){return Object.keys(e).filter((t=>e[t].quantity>0)).reduce(((t,n)=>(t[n]={...e[n]},delete t[n].square,t)),{})}function L(e,t){const n=void 0!==t?t:p[e].quantity;return g[e].quantity=n,n}function E(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const o=n[t];return e+o.quantity*o.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function w(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function k(e,t){t.forEach((t=>{e.appendChild(t)}))}function x(e){var t,n,o,r,c;const i=null===(o=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===o?void 0:o.getAttribute("data-id"),a=null===(c=null===(r=e.currentTarget)||void 0===r?void 0:r.closest(".wrap--square"))||void 0===c?void 0:c.getAttribute("data-id");return i||a}function T(e){const t=e.currentTarget;t.classList.toggle("active");!function(e){"take-keys-btn"===e?f.classList.toggle("isHidden"):y.classList.toggle("isHidden")}(t.id),function(){const e=f.classList.contains("isHidden"),t=y.classList.contains("isHidden");e&&t?m.classList.add("isHidden"):m.classList.remove("isHidden")}()}}));
//# sourceMappingURL=contacts.4d06868f.js.map