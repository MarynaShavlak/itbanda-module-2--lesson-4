!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("6bPr4",(function(o,n){t(o.exports,"toggleIconActiveStyle",(function(){return s})),t(o.exports,"appendElement",(function(){return m}));var r=i("8nrFW"),l=i("f8kn7"),c=["/","/index.html","/office.html","/success-order.html","/after-repair.html","/calc-order.html","/services.html","/contacts.html","/faq.html"];function d(t){var o=document.querySelectorAll(".dynamic-link");e(r)(o).forEach((function(e){return e.href=t}))}function a(e){var t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function u(){document.querySelector("main").classList.add("section--dark-background")}function s(e){e.classList.toggle("isActive")}function f(e,t){document.querySelectorAll(e).forEach((function(e){return e.style.flexBasis=t}))}function m(e,t){e.appendChild(t)}document.addEventListener("DOMContentLoaded",(function(){var e,t,o=window.location.pathname;c.includes(o)||"/error.html"===o||c.includes("/error.html")||(window.location.href="/error.html"),"/"===o||"/index.html"===o?(a(".nav__link"),d("index.html#order-cleaning-block")):"/office.html"===o?(a(".nav__list .nav__item:nth-child(2) .nav__link"),d("office.html#office-calc-block"),f(".buildings__element","calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.remove("isHidden")})),document.querySelector(".element--calculator-page").classList.add("isHidden")):"/after-repair.html"===o?(t=document.querySelector(".data-order .data-order__title"),document.querySelector(".buildings").style.display="none",t.style.display="none",e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((function(e){return e.classList.add("isHidden")})),d("after-repair.html#office-calc-block")):"/calc-order.html"===o?(f(".buildings__element","calc(100% / 2)"),document.querySelectorAll(".element--office-page").forEach((function(e){return e.classList.add("isHidden")})),document.querySelector(".element--calculator-page").classList.remove("isHidden"),function(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("block--white")}))}(".block")):"/contacts.html"===o?(document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),u()):"/success-order.html"!==o&&"/error.html"!==o||(u(),window.addEventListener("beforeunload",(function(){(0,l.resetLocalStorage)("userOrderDataObj")})))}))})),i.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return o.default(e)||n.default(e)||l.default(e)||r.default()};var o=c(i("kMC0W")),n=c(i("7AJDX")),r=c(i("8CtQK")),l=c(i("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),i.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var o,n=(o=i("8NIkP"))&&o.__esModule?o:{default:o}})),i.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}})),i.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),i.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),i.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n.default(e,t)};var o,n=(o=i("8NIkP"))&&o.__esModule?o:{default:o}})),i.register("f8kn7",(function(e,o){function n(e,t){var o=JSON.stringify(t);localStorage.setItem(e,o)}function r(e){var t=localStorage.getItem(e);return JSON.parse(t)}function i(e){localStorage.removeItem(e)}t(e.exports,"storeDataInLocalStorage",(function(){return n})),t(e.exports,"getDataFromStorage",(function(){return r})),t(e.exports,"resetLocalStorage",(function(){return i}))})),i.register("lEcfz",(function(e,t){var o,n,r,l,c=i("gnsaF");o=document.querySelector(".aside-menu"),n=document.querySelector(".open-menu-btn"),r=document.querySelector(".close-menu-btn"),l=function(){var e="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!e),o.classList.toggle("is-open"),(e?c.enableBodyScroll:c.disableBodyScroll)(document.body)},n.addEventListener("click",l),r.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(o.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),(0,c.enableBodyScroll)(document.body))}))})),i.register("gnsaF",(function(e,o){t(e.exports,"disableBodyScroll",(function(){return v})),t(e.exports,"enableBodyScroll",(function(){return g}));var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],c=!1,d=-1,a=void 0,u=void 0,s=void 0,f=function(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},p=function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==a&&(document.body.style.overflow=a,a=void 0)},y=function(){if(void 0!==u){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(t,e),u=void 0}},v=function(e,t){if(e){if(!l.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[o]),i?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===s){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);s=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===a&&(a=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-d;!f(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?m(e):e.stopPropagation())}(t,e)},c||(document.addEventListener("touchmove",m,n?{passive:!1}:void 0),c=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},g=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,c&&0===l.length&&(document.removeEventListener("touchmove",m,n?{passive:!1}:void 0),c=!1)),i?y():p()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}))}();
//# sourceMappingURL=contacts.983c1cc1.js.map
