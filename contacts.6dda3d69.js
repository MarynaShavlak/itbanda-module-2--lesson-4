!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){return i.default(e)||c.default(e)||a.default(e)||u.default()};var i=d(o("kMC0W")),c=d(o("7AJDX")),u=d(o("8CtQK")),a=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var s=["/","/index.html","/office.html","/success-order.html","/after-repair.html","/calc-order.html","/contacts.html","/faq.html"];function f(t){var r=document.querySelectorAll(".dynamic-link");e(l)(r).forEach((function(e){return e.href=t}))}function m(e){var t=document.querySelector(e);t&&t.classList.add("nav__link--current")}function p(){document.querySelector("main").classList.add("section--dark-background")}document.addEventListener("DOMContentLoaded",(function(){var e,t=window.location.pathname;s.includes(t)||s.includes(t)||(window.location.href="/error.html"),"/"===t||"/index.html"===t?(m(".nav__link"),f("index.html#order-cleaning-block")):"/office.html"===t?(m(".nav__list .nav__item:nth-child(2) .nav__link"),f("office.html#office-calc-block")):"/after-repair.html"===t?(e=".add-services-list__item:nth-child(n+3)",document.querySelectorAll(e).forEach((function(e){return e.classList.add("isHidden")}))):"/calc-order.html"===t?function(e){document.querySelectorAll(e).forEach((function(e){return e.classList.add("block--white")}))}(".block"):"/contacts.html"===t?(document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),p()):"/success-order.html"!==t&&"/error.html"!==t||p()}))}();
//# sourceMappingURL=contacts.6dda3d69.js.map