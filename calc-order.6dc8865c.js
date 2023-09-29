!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("cYklY",(function(e,t){var n=o("6bPr4"),r=o("5e53d");document.querySelectorAll(".calendar").forEach((function(e){var t=e.parentElement.previousElementSibling.querySelector('[name="userDate"]'),a=e.parentElement.previousElementSibling.querySelector(".icon--calendar"),o=e.parentElement.querySelector(".work-shedule");!function(e,t,a,o,i,c,u){var l=e.querySelector(".calendar__body"),s=e.querySelector(".calendar__monthYear"),d=e.querySelector(".calendar__prevMonth-btn"),f=e.querySelector(".calendar__nextMonth-btn");function v(e,t){e.textContent=t}function m(e,t){var n=t.day,r=t.month,a=t.year;e.dataset.date="".concat(n,"/").concat(r<9?"0":"").concat(r+1,"/").concat(a)}function g(e,t){var n=t.monthType,r=t.isCellSelectedDay;t.isDisabledDate&&e.classList.add("disabled-day"),"current-month"===n&&r&&e.classList.add("order-day"),e.classList.add(n)}function p(e,t){t||e.addEventListener("click",L)}function y(e){var t=e.day,n=e.month,r=e.year,a=e.isDisabledDate,o=e.monthType,i=e.isCellSelectedDay,c=document.createElement("td"),u={monthType:o,isCellSelectedDay:i,isDisabledDate:a};return v(c,t),m(c,{day:t,month:n,year:r}),p(c,a),g(c,u),c}function h(e,t){var n,a=(0,r.getCurrentYearAndMonth)(c),o=a.year,u=a.month,l=new Date;if("previous-month"===t){var s=(0,r.formatDateInfo)(e,u,o),d=s.formattedDay,f=s.formattedMonth,v=s.formattedYear;n=new Date(v,f-1,d)}else if("current-month"===t){var m=(0,r.formatDateInfo)(e).formattedDay;n=new Date(o,u,m)}else if("next-month"===t){var g=(0,r.formatDateInfo)(e,u,o).formattedDay;n=new Date(11===u?o+1:o,11===u?0:u+1,g)}var p=(0,r.isDateBeforeToday)(n,l),h=D(n,i,e);return y({day:String(n.getDate()).padStart(2,"0"),month:n.getMonth(),year:n.getFullYear(),isDisabledDate:p,monthType:t,isCellSelectedDay:h})}function D(e,t,n){var r=e.getFullYear()===t.getFullYear(),a=e.getMonth()===t.getMonth(),o=n===t.getDate();return r&&a&&o}function S(e){var t=c.toLocaleDateString("uk-UA",{month:"long"}),n=t.charAt(0).toUpperCase()+t.slice(1);s.textContent="".concat(n," ").concat(e)}function E(e){w();var t=(0,r.getCurrentYearAndMonth)(e),a=t.year,o=t.month;S(a);for(var i=(0,r.getMonthBoundaryDates)(a,o),c=i.firstDayOfMonth,u=i.lastDayOfMonthObj,s=(0,r.calculateStartDay)(c),d=(0,r.getLastDayOfPrevMonth)(a,o),f=1,v=k(),m=s-1;m>=1;m--){var g=h(d-m+1,"previous-month");(0,n.appendElement)(v,g)}for(;f<=u.getDate();){var p=h(f,"current-month");(0,n.appendElement)(v,p),7===v.children.length&&((0,n.appendElement)(l,v),v=k()),f++}if(v.children.length>0){for(var y=1;v.children.length<7;y++){var D=h(y,"next-month");(0,n.appendElement)(v,D)}(0,n.appendElement)(l,v)}}function L(e){var t=(0,r.convertDateFormat)(e.target.dataset.date),o=(new Date).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}),c=new Date(t);if(i=c,c-new Date(o)>=0){var l=(0,r.reverseConvertDateFormat)(t);u=l,b(),(0,n.toggleIconActiveStyle)(a),M(),x()}}function b(){t.value="".concat(u)}function w(){l.innerHTML=""}function _(e){c.setMonth(c.getMonth()+e),E(c)}function M(){e.classList.toggle("isHidden")}function x(){o.classList.toggle("isHidden")}function k(){return document.createElement("tr")}t.addEventListener("click",(function(){M(),x(),(0,n.toggleIconActiveStyle)(a),c=new Date(i);var t=!e.classList.contains("isHidden");E(i),t&&b()})),t.addEventListener("blur",(function(e){var n=(0,r.extractDate)(e.target.value);t.value=n})),a.addEventListener("click",(function(t){M(),x(),c=new Date(i),E(i),(0,n.toggleIconActiveStyle)(t.target),!e.classList.contains("isHidden")&&b()})),null==d||d.addEventListener("click",(function(){_(-1)})),null==f||f.addEventListener("click",(function(){_(1)})),E(i)}(e,t,a,o,new Date,new Date,(0,r.getCurrentDateAsString)())}))})),o.register("5e53d",(function(n,r){t(n.exports,"getCurrentDateAsString",(function(){return i})),t(n.exports,"extractDate",(function(){return c})),t(n.exports,"isDateBeforeToday",(function(){return u})),t(n.exports,"convertDateFormat",(function(){return l})),t(n.exports,"reverseConvertDateFormat",(function(){return s})),t(n.exports,"calculateStartDay",(function(){return d})),t(n.exports,"getLastDayOfPrevMonth",(function(){return f})),t(n.exports,"getCurrentYearAndMonth",(function(){return v})),t(n.exports,"getMonthBoundaryDates",(function(){return m})),t(n.exports,"formatDateInfo",(function(){return g}));var a=o("1t1Wn");function i(){var e=new Date,t=e.getDate().toString().padStart(2,"0"),n=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getFullYear();return"".concat(t,"/").concat(n,"/").concat(r)}function c(e){var t=e.trim().match(/\d{2}\/\d{2}\/\d{4}/);return t?t[0]:null}function u(e,t){return e<t}function l(t){var n=t.split("/"),r=e(a)(n,3),o=r[0],i=r[1],c=r[2];return"".concat(i,"/").concat(o,"/").concat(c)}function s(t){var n=t.split("/"),r=e(a)(n,3),o=r[0],i=r[1],c=r[2];return"".concat(i,"/").concat(o,"/").concat(c)}function d(e){var t=e.getDay();return 0===t&&(t=7),t}function f(e,t){return new Date(e,t,0).getDate()}function v(e){var t=e.getFullYear();return{month:e.getMonth(),year:t}}function m(e,t){return{firstDayOfMonth:new Date(e,t,1),lastDayOfMonthObj:new Date(e,t+1,0)}}function g(e,t,n){return{formattedDay:e<10?"0".concat(e):e,formattedMonth:0===t?12:t,formattedYear:0===t?n-1:n}}})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||i.default(e,t)||a.default()};var n=c(o("8slrw")),r=c(o("7AJDX")),a=c(o("ifqQW")),i=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("6Zya5",(function(t,n){var r=o("8nrFW"),a=o("6bPr4");document.querySelectorAll(".time-picker-wrap").forEach((function(t){!function(t){var n=t.parentElement.previousElementSibling.querySelector(".icon--clock"),o=t.parentElement.querySelector(".work-shedule"),i=t.querySelector(".tablo--hours"),c=t.querySelector(".tablo--minutes"),u=t.querySelector(".time-picker__hours"),l=t.querySelector(".time-picker__minutes"),s=t.querySelector(".time-picker__btn"),d=t.parentElement.previousElementSibling.querySelector('[name="userTime"]'),f={hours:"20",minutes:"00"};function v(){d.value="".concat(f.hours," : ").concat(f.minutes)}function m(e,n){var r=e.target;if(p(r)){var a=w(n);y(r,t.querySelectorAll(".".concat(a)));var o=t.querySelector(n),i=r.dataset.id;h(o,i),E(n,i)}}function g(){o.classList.toggle("isHidden")}function p(e){return e.classList.contains("number")&&!e.classList.contains("active")}function y(t,n){e(r)(n).map((function(e){return e===t?L(e):b(e)}))}function h(e,t){e.innerHTML=t}function D(e,t){!e.classList.contains("isHidden")||(e.classList.remove("isHidden"),t.classList.add("isHidden"))}function S(){t.classList.toggle("isHidden")}function E(e,t){var n=w(e);f[n]=t,v()}function L(e){e.classList.add("active")}function b(e){e.classList.remove("active")}function w(e){return e.split("__")[1]}function _(e){var t=e.trim().match(/\d{2}\s*:\s*\d{2}/);return t?t[0]:null}d.addEventListener("click",(function(){(0,a.toggleIconActiveStyle)(n),S(),g(),!t.classList.contains("isHidden")&&v()})),d.addEventListener("blur",(function(e){var t=_(e.target.value);d.value=t})),n.addEventListener("click",(function(e){S(),g(),(0,a.toggleIconActiveStyle)(e.target)})),i.addEventListener("click",(function(e){return m(e,".time-picker__hours")})),c.addEventListener("click",(function(e){return m(e,".time-picker__minutes")})),l.addEventListener("click",(function(){return D(c,i)})),u.addEventListener("click",(function(){return D(i,c)})),s.addEventListener("click",(function(){S(),g(),(0,a.toggleIconActiveStyle)(n)}))}(t)}))})),o.register("lXOyw",(function(e,t){var n=document.querySelector(".backdrop--subscr"),r=document.querySelectorAll(".form__input--location");function a(e){var t=e.target;n&&(""!==t.value.trim()&&document.activeElement===t?n.style.overflow="hidden":n.style.overflow="auto")}window.initMap||(window.initMap=function(){r.forEach((function(e){var t=new google.maps.places.Autocomplete(e);t.addListener("place_changed",(function(){t.getPlace();e.setAttribute("data-id",e.value)}))}))}),r.forEach((function(e){e.addEventListener("input",a),e.addEventListener("focus",a),e.addEventListener("blur",a),a({target:e})}))}))}();
//# sourceMappingURL=calc-order.6dc8865c.js.map
