var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=s),s("cKJBV"),s("9nuA4"),s("1GEAb");var n=s("cKJBV"),o=s("1PyR0");const c=(0,o.getDataFromStorage)("userOrderDataObj"),u=document.querySelector(".success-order-services-table"),a=document.querySelector(".success-order-info-table"),d=document.querySelector(".section--success"),l=document.querySelector(".success-order-services-table tbody");function i(e){const t=document.querySelector('.success-order--total[data-field="total"]');t.textContent=e?function(e){const{userSquare:t,userServices:r}=e,s=e=>parseFloat(e.replace("zł","").replace(",",".")),n=s(t.cost),o=r.reduce(((e,t)=>e+s(t.cost)),0);return`${n+o}zł`}(c):"399zł"}function f(e,t,r){const s=document.createElement("tr");return s.innerHTML=`\n    <th class="success-order__name">${e}</th>\n    <td class="success-order__value success-order__quantity">${t}</td>\n    <td class="success-order__value success-order__cost">${r}</td>\n  `,s}function p(){const{userSquare:e,userServices:t}=c,r=""!==e.quantity.trim()||""!==e.cost.trim();if(r){const r=f("Площа, м²",e.quantity,e.cost);(0,n.appendElement)(l,r),function(e){e.forEach((({name:e,quantity:t,cost:r})=>{const s=f(e,t,r);(0,n.appendElement)(l,s)}))}(t)}else m(u);!function(e){e?d.classList.add("isComplexOrder"):d.classList.remove("isComplexOrder")}(r),i(r)}function m(e){e.style.display="none"}document.querySelector(".back-to-home-btn").addEventListener("click",(()=>(0,o.resetLocalStorage)("userOrderDataObj"))),c?(Object.entries(c).forEach((([e,t])=>{const r=document.querySelector(`.success-order__value[data-field='${e}']`);r&&(r.textContent=t,function(e,t){e&&(e.style.display=t?"":"none")}(r.parentElement,t))})),p()):(m(a),m(u)),s("Sok8x");
//# sourceMappingURL=success-order.9a265924.js.map