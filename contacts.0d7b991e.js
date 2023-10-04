function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequireabe7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequireabe7=o),o.register("3SKuk",(function(t,n){e(t.exports,"appendElement",(function(){return y})),e(t.exports,"getClosestIcon",(function(){return p})),e(t.exports,"handleInputBlur",(function(){return g})),e(t.exports,"setShedulerVisibilityOptions",(function(){return h})),e(t.exports,"toggleClosestVisibility",(function(){return b}));var r=o("96sR9"),c=o("8F0ol"),i=o("lcis1");const a={home:["/cleaning/","/cleaning/index.html"],office:["/cleaning/office.html"],afterRepair:["/cleaning/after-repair.html"],calcOrder:["/cleaning/calc-order.html"],contacts:["/cleaning/contacts.html"],successOr404:["/cleaning/success-order.html","/cleaning/404.html"]},s={home:()=>{u([".nav__link",".nav--aside-menu .nav__link"]),l("index.html#order-cleaning-block")},office:()=>{u([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),l("office.html#office-calc-block"),f("calc(100% / 3)"),function(){document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden")));document.querySelector(".element--calculator-page").classList.add("isHidden")}()},afterRepair:()=>{var e;!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((e=>e.classList.add("isHidden"))),l("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),f("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),function(){document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden")));document.querySelector(".element--calculator-page").classList.remove("isHidden")}()},contacts:()=>{!function(){document.querySelector(".connection").classList.remove("no-padding-top");document.querySelector(".connection--second-block").classList.add("block-with-image")}(),d()},successOr404:()=>{d(),window.addEventListener("beforeunload",(function(){(0,r.resetLocalStorage)("userOrderDataObj")}))}};function l(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function u(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function d(){document.querySelector("main").classList.add("section--dark-background")}function m(e){e.classList.toggle("isActive")}function f(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}function y(e,t){e.appendChild(t)}function p(e,t){return e.parentElement.previousElementSibling.querySelector(`.${t}`)}function v(e){e.classList.toggle("isHidden")}function g(e,t){e.addEventListener("blur",(n=>{const r=t(n.target.value);e.value=r}))}function h(e,t,n){v(e),v(t),m(n)}function b(e,t,n){const r=e.querySelector(".work-shedule"),o=e.querySelector(`.${t}`);if(!r.classList.contains("isHidden")){v(r),v(o);m(p(o,n))}}document.addEventListener("DOMContentLoaded",(function(){const e=window.location.pathname,t=document.querySelector("body"),{themeToggler:n}=(0,i.getThemeTogglerElements)();n.addEventListener("click",(()=>{(0,c.setTheme)(t.classList.contains("active-dark-theme")?c.THEMES.LIGHT:c.THEMES.DARK)})),(0,c.applyTheme)();const r=Object.keys(s).find((t=>a[t].includes(e)));r&&s[r]()}))})),o.register("96sR9",(function(t,n){function r(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function o(e){const t=localStorage.getItem(e);return JSON.parse(t)}function c(e){localStorage.removeItem(e)}e(t.exports,"storeDataInLocalStorage",(function(){return r})),e(t.exports,"getDataFromStorage",(function(){return o})),e(t.exports,"resetLocalStorage",(function(){return c}))})),o.register("8F0ol",(function(t,n){e(t.exports,"THEMES",(function(){return i})),e(t.exports,"setTheme",(function(){return s})),e(t.exports,"applyTheme",(function(){return l}));var r=o("lcis1"),c=o("96sR9");const i={LIGHT:"light",DARK:"dark"};let a=(0,c.getDataFromStorage)("theme")||i.LIGHT;function s(e){a=e,(0,c.storeDataInLocalStorage)("theme",e),l()}function l(){const{themeToggler:e,themeCircle:t,sunRays:n,sunIcon:o,moonIcon:c}=(0,r.getThemeTogglerElements)(),s=document.querySelector("body");a===i.DARK?(s.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),t.classList.add("theme__circle--dark"),t.classList.remove("theme__circle--light"),o.classList.add("circle__sun--hidden"),c.classList.remove("circle__moon--hidden"),n.forEach((e=>e.classList.add("circle__ray--hidden")))):(s.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),t.classList.remove("theme__circle--dark"),t.classList.add("theme__circle--light"),o.classList.remove("circle__sun--hidden"),c.classList.add("circle__moon--hidden"),n.forEach((e=>e.classList.remove("circle__ray--hidden"))))}})),o.register("lcis1",(function(t,n){e(t.exports,"getTimePickerElements",(function(){return c})),e(t.exports,"getClosestDateInput",(function(){return i})),e(t.exports,"getClosestCalendarBlock",(function(){return a})),e(t.exports,"getCalendarElements",(function(){return s})),e(t.exports,"getClosestTimeInput",(function(){return l})),e(t.exports,"getClosestTimePickerBlock",(function(){return u})),e(t.exports,"getThemeTogglerElements",(function(){return d}));var r=o("3SKuk");function c(e){return{clockIcon:(0,r.getClosestIcon)(e,"icon--clock"),sheduleEl:e.parentElement.querySelector(".work-shedule"),hourTablo:e.querySelector(".tablo--hours"),minuteTablo:e.querySelector(".tablo--minutes"),hourPicker:e.querySelector(".time-picker__hours"),minutePicker:e.querySelector(".time-picker__minutes"),confirmTimeBtn:e.querySelector(".time-picker__btn"),timeInput:e.parentElement.previousElementSibling.querySelector('[name="userTime"]')}}function i(e){return e.closest("li").previousElementSibling.querySelector('[name="userDate"]')}function a(e){return e.closest("li").previousElementSibling.querySelector(".shedule-wrap")}function s(e){const t=(0,r.getClosestIcon)(e,"icon--calendar"),n=e.parentElement.previousElementSibling.querySelector('[name="userDate"]');e.parentElement.previousElementSibling.querySelector(".icon--calendar");return{calendarIcon:t,dateInput:n,sheduleEl:e.parentElement.querySelector(".work-shedule"),calendarBody:e.querySelector(".calendar__body"),calendarHeadMonthAndYear:e.querySelector(".calendar__monthYear"),prevMonthBtn:e.querySelector(".calendar__prevMonth-btn"),nextMonthBtn:e.querySelector(".calendar__nextMonth-btn")}}function l(e){return e.closest("li").nextElementSibling.querySelector('[name="userTime"]')}function u(e){return e.closest("li").nextElementSibling.querySelector(".shedule-wrap")}function d(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}})),o.register("f8GYc",(function(e,t){var n=o("jQ7WT");(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),r=document.querySelector(".close-menu-btn"),o=()=>{const r="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");(r?n.enableBodyScroll:n.disableBodyScroll)(document.body)};t.addEventListener("click",o),r.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),(0,n.enableBodyScroll)(document.body))}))})()})),o.register("jQ7WT",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return v})),e(t.exports,"enableBodyScroll",(function(){return g}));var r=!1;if("undefined"!=typeof window){var o={get passive(){r=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}var c="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),i=[],a=!1,s=-1,l=void 0,u=void 0,d=void 0,m=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},f=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},y=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)},p=function(){if(void 0!==u){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(t,e),u=void 0}},v=function(e,t){if(e){if(!i.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(i),[n]),c?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}(t),c&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-s;!m(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?f(e):e.stopPropagation())}(t,e)},a||(document.addEventListener("touchmove",f,r?{passive:!1}:void 0),a=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(e){e?(i=i.filter((function(t){return t.targetElement!==e})),c&&(e.ontouchstart=null,e.ontouchmove=null,a&&0===i.length&&(document.removeEventListener("touchmove",f,r?{passive:!1}:void 0),a=!1)),c?p():y()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),o.register("8purw",(function(t,n){e(t.exports,"initializeModal",(function(){return c})),e(t.exports,"toggleModal",(function(){return i}));var r=o("iuTcA");r=o("iuTcA");function c(e){var t,n,r;null===(t=e.openModalBtn)||void 0===t||t.addEventListener("click",(()=>i(e))),null===(n=e.closeModalBtn)||void 0===n||n.addEventListener("click",(t=>{t.stopPropagation(),i(e)})),null===(r=e.backdrop)||void 0===r||r.addEventListener("click",(t=>{t.target===e.backdrop&&i(e)}))}function i(e){var t;document.body.classList.toggle(`${e.name}-modal-open`),null===(t=e.modal)||void 0===t||t.classList.toggle("backdrop--hidden"),"subscription"===e.name&&((0,r.resetErrors)(null===r.subscForm||void 0===r.subscForm?void 0:r.subscForm.elements),(0,r.hidePaymentTypeError)(),(0,r.hidePolicyError)())}})),o.register("iuTcA",(function(t,n){e(t.exports,"subscForm",(function(){return s})),e(t.exports,"hidePolicyError",(function(){return S})),e(t.exports,"hidePaymentTypeError",(function(){return b})),e(t.exports,"setPropertyInOrderObj",(function(){return v})),e(t.exports,"resetErrors",(function(){return g}));var r=o("9bYoD"),c=o("8purw"),i=o("96sR9"),a=o("3st72");const s=document.querySelector(".subscr__form"),l=document.querySelectorAll(".payment__btn"),u=document.querySelector(".form__payment-error-text"),d=document.querySelectorAll(".form__input"),m=document.querySelector(".calc-btn"),f=document.querySelector('[name="studio-policy-check"]');if(f){new MutationObserver(((e,t)=>{console.log("mutationsList: ",e),e.forEach((e=>{if("attributes"===e.type&&"data-checked"===e.attributeName){f.getAttribute("data-checked");S()}}))})).observe(f,{attributes:!0,attributeFilter:["data-checked"]}),f.addEventListener("change",(()=>{f.setAttribute("data-checked",f.checked)}))}null==s||s.addEventListener("submit",_),null==m||m.addEventListener("click",(e=>{e.preventDefault(),_(e)})),l.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");if(v(t),t.classList.contains("active"))return;[...l].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e),b()}))})),d.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const y=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],p={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function v(e){const t=e.getAttribute("data-type");var n;const r=null!==(n=e.getAttribute("data-id"))&&void 0!==n?n:"";p[t]=r}function g(e){[...e].forEach((e=>{e.classList.remove("error")}))}function h(){document.querySelector(".form__payment-error-text").classList.toggle("isHidden")}function b(){!u.classList.contains("isHidden")&&h()}function q(){const e=document.querySelector(".form__policy-error-text");e.classList.add("isHidden");(function(){const e=document.querySelector('[name="studio-policy-check"]').checked;return console.log("isAgreed: ",e),e})()||e.classList.remove("isHidden")}function S(){document.querySelector(".form__policy-error-text").classList.add("isHidden")}function _(e){e.preventDefault();const t="BUTTON"===e.currentTarget.tagName,n=t?s.elements:e.currentTarget.elements,o=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(n,y);g(n),function(e){e.forEach((e=>{e.classList.add("error")}))}(o);const u=[...l].some((e=>e.classList.contains("active"))),d=o.length>0;if(u||h(),q(),!u||d||!isPolicyAgreed)return;const m=t?s:e.target;var f,b,S;t&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');v(e),v(t)}(),f=p,b=a.userServicesOrderInfoObj.square.quantity,S=a.userServicesOrderInfoObj.square.price,f.userSquare={quantity:`${b}`,cost:(0,a.calculateServiceCost)(b,S)},function(e){const t=(0,a.filterObjectByQuantity)(a.userServicesOrderInfoObj);e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:r,price:o}=t[e];return{name:n,quantity:r,cost:(0,a.calculateServiceCost)(r,o)}}))}(p)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(p[t]=e)}))}(m),(0,i.storeDataInLocalStorage)("userOrderDataObj",p),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(n),[...l].forEach((e=>{e.classList.remove("active")})),observer.disconnect(),t||(0,c.toggleModal)(r.refsSubscr),window.location.href=window.location.href="https://marynashavlak.github.io/cleaning/success-order.html"}})),o.register("9bYoD",(function(t,n){e(t.exports,"refsSubscr",(function(){return c}));var r=o("8purw");const c={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};(0,r.initializeModal)(c)})),o.register("3st72",(function(t,n){e(t.exports,"userServicesOrderInfoObj",(function(){return v})),e(t.exports,"calculateServiceCost",(function(){return S})),e(t.exports,"filterObjectByQuantity",(function(){return _}));var r=o("iuTcA");const c=document.querySelectorAll(".buildings__element"),i=document.querySelector(".control-quantity-btn--plus"),a=document.querySelector(".control-quantity-btn--minus"),s=document.querySelectorAll(".service-element .checkbox"),l=document.querySelector(".table__data"),u=document.querySelector("#take-keys-btn"),d=document.querySelector("#give-keys-btn"),m=document.querySelector(".keys-address-block"),f=document.querySelector(".keys-address-block__take-item"),y=document.querySelector(".keys-address-block__give-item");null==i||i.addEventListener("click",b),null==a||a.addEventListener("click",b),null==u||u.addEventListener("click",T),null==d||d.addEventListener("click",T),c.forEach((e=>{e.addEventListener("click",(e=>{(0,r.setPropertyInOrderObj)(e.target),function(e){const t=e.target;if(t.classList.contains("buildings__element--current"))return;[...c].forEach((e=>{if(e===t){e.id;e.classList.add("buildings__element--current")}else e.classList.remove("buildings__element--current")}))}(e)}))})),s.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),r=n.nextElementSibling,o=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(r,o),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",h),n.addEventListener("click",h)}(r);const c=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),o=document.createElement("li");o.id=r,o.className="table__item table__block";const c=k("item__name",`${t}`),i=k("","x"),a=k("name-wrapper"),s=k("quantity-wrapper"),l=k("item__quantity service-quantity",p[r].quantity);w(s,[i,l]),w(a,[c,s]);const u=k("service-value",`${n}zł`);return u.setAttribute("data-service",r),w(o,[a,u]),o}(n),i=n.getAttribute("data-id");(function(e,t){const n=t.id,r=function(e){return[...l.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!r?(!function(e){l.insertAdjacentElement("beforeend",e)}(t),L(n)):!e&&r&&(L(n,0),function(e){l.removeChild(e)}(r))})(o,c),q(i),E(v)}(e)}))}));const p={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},v={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function g(e){const t=x(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)p[e].quantity+=1;else if("minus"===t){if(1===p[e].quantity)return;p[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=null==t?void 0:t.nextElementSibling.querySelector(`[data-name="${e}"]`),r=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=p[e].quantity),r&&(r.textContent=p[e].quantity,document.querySelector(".square-value-total").textContent=p[e].quantity)}(t),function(e){var t,n;const r=null===(t=document.querySelector(`[data-name="${e}"]`).parentNode)||void 0===t||null===(n=t.parentNode)||void 0===n?void 0:n.querySelector(".control-quantity-btn--minus .icon--minus");1===p[e].quantity?r.style.fill="rgba(\t77, 18, 153, 0.3)":r.style.fill="#4D1299"}(t)}function h(e){const t=x(e);g(e),q(t),E(v)}function b(e){g(e),function(){const e=document.querySelector('[data-service="square"]');v.square.quantity=p.square.quantity,e.textContent=v.square.quantity*v.square.price+"zł"}(),E(v)}function q(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),r=p[e].price;if(t&&n){const o=L(e),c=S(o,r);t.textContent=c,n.textContent=o}else L(e,0)}function S(e,t){return`${(e*t).toFixed(2)}zł`}function _(e){return Object.keys(e).filter((t=>e[t].quantity>0)).reduce(((t,n)=>(t[n]={...e[n]},delete t[n].square,t)),{})}function L(e,t){const n=void 0!==t?t:p[e].quantity;return v[e].quantity=n,n}function E(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const r=n[t];return e+r.quantity*r.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function k(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function w(e,t){t.forEach((t=>{e.appendChild(t)}))}function x(e){var t,n,r,o,c;const i=null===(r=null===(n=null===(t=e.currentTarget)||void 0===t?void 0:t.closest(".wrap--service"))||void 0===n?void 0:n.parentNode.querySelector("label"))||void 0===r?void 0:r.getAttribute("data-id"),a=null===(c=null===(o=e.currentTarget)||void 0===o?void 0:o.closest(".wrap--square"))||void 0===c?void 0:c.getAttribute("data-id");return i||a}function T(e){const t=e.currentTarget;t.classList.toggle("active");!function(e){"take-keys-btn"===e?f.classList.toggle("isHidden"):y.classList.toggle("isHidden")}(t.id),function(){const e=f.classList.contains("isHidden"),t=y.classList.contains("isHidden");e&&t?m.classList.add("isHidden"):m.classList.remove("isHidden")}()}})),o.register("jzGLn",(function(e,t){var n=o("8purw");const r={name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")};(0,n.initializeModal)(r)}));
//# sourceMappingURL=contacts.0d7b991e.js.map