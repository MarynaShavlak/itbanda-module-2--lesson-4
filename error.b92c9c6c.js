!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){return c.default(e)||d.default(e,t)||i.default(e,t)||l.default()};var c=u(a("8slrw")),d=u(a("7AJDX")),l=u(a("ifqQW")),i=u(a("auk6i"));function u(e){return e&&e.__esModule?e:{default:e}}var s=document.getElementById("calendarBody"),f=document.getElementById("monthYear"),p=document.getElementById("prevMonth"),g=document.getElementById("nextMonth"),m=new Date;function v(){var e=m.getFullYear(),t=m.getMonth(),n=new Date,r=new Date(e,t,1),a=new Date(e,t+1,0);f.textContent="".concat(new Intl.DateTimeFormat("en-US",{month:"long"}).format(m)," ").concat(e),s.innerHTML="";var o=r.getDay();0===o&&(o=7);for(var c=new Date(e,t,0).getDate(),d=1,l=document.createElement("tr"),i=o-1;i>=1;i--){var u=document.createElement("td"),p=c-i+1,g=p<10?"0".concat(p):p,v=0===t?12:t,w=0===t?e-1:e;u.textContent=g,u.classList.add("previous-month"),u.dataset.date="".concat(g,"/").concat(v<10?"0":"").concat(v,"/").concat(w),l.appendChild(u),u.addEventListener("click",h),y(new Date(w,v-1,p),n)&&u.classList.add("disabled-day")}for(;d<=a.getDate();){var D=document.createElement("td"),b=d<10?"0".concat(d):d;D.textContent=b,D.classList.add("current-month"),m.getFullYear()===n.getFullYear()&&m.getMonth()===n.getMonth()&&d===n.getDate()&&D.classList.add("current-day"),D.dataset.date="".concat(b,"/").concat(t<9?"0":"").concat(t+1,"/").concat(e),l.appendChild(D),D.addEventListener("click",h),y(new Date(e,t,d),n)&&D.classList.add("disabled-day"),7===l.children.length&&(s.appendChild(l),l=document.createElement("tr")),d++}for(var x=1;l.children.length<7;x++){var M=document.createElement("td"),_=x<10?"0".concat(x):x,E=11===t?1:t+2,L=11===t?e+1:e;M.textContent=_,M.classList.add("next-month"),M.dataset.date="".concat(_,"/").concat(E<10?"0":"").concat(E,"/").concat(L),l.appendChild(M),M.addEventListener("click",h),y(new Date(L,E-1,x),n)&&M.classList.add("disabled-day")}s.appendChild(l)}function y(e,t){return e<t}function h(t){var n=function(t){var n=t.split("/");if(3!==n.length)return"Invalid date format";var r=e(o)(n,3),a=r[0],c=r[1],d=r[2];return"".concat(c,"/").concat(a,"/").concat(d)}(t.target.dataset.date),r=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"});new Date(n)-new Date(r)>=0&&(console.log("currentDate: ",r),console.log("clickedDate: ",n))}p.addEventListener("click",(function(){m.setMonth(m.getMonth()-1),v()})),g.addEventListener("click",(function(){m.setMonth(m.getMonth()+1),v()})),v()}();
//# sourceMappingURL=error.b92c9c6c.js.map
