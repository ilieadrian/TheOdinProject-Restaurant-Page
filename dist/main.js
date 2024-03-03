(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([e.id,"body {\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\nnav {\n    display: flex;\n    justify-content: space-around;\n    width: 100vw;\n    background-color: rgba(24,24,66,0.6);\n}\n\nnav button {\n    color: white;\n    background-color: rgba(24,24,66,1);\n    padding: 1rem;\n    font-weight: 600;\n    font-size: 1rem;\n    border: none;\n    cursor: pointer;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-items  : center;\n    max-width: 980px;\n}\n\nh1 {\n    margin-bottom: 2rem;\n}\n\nimg {\n    width: 650px;\n    margin-bottom: 2rem;\n}\n\nspan {\n    color: grey;\n    font-size: 0.9rem;\n    font-style: italic;\n    margin-bottom: 2rem;\n}\n\n.adress span {\n    color: black;\n    font-size: 1.1rem;\n    font-weight: 600;\n    font-style: normal;\n}",""]);const s=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),u=t.n(l),d=t(113),p=t.n(d),f=t(208),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=t.p+"edf8dd6d33773703c90b.jpg";!function(){const e=document.getElementById("content");console.log("hello from create home");const n=document.createElement("h1");n.innerText="Thistle & Heather Tavern";const t=document.createElement("img");t.src=m;const r=document.createElement("span");r.innerText="Embark on a Gastronomic Journey at Thistle & Heather Tavern: Where Scottish Tradition Meets Culinary Innovation!";const o=document.createElement("p");o.innerHTML="\n            Welcome to Thistle & Heather Tavern, where the warm embrace of Scottish hospitality meets the culinary delights of the Highlands. Nestled in the heart of Edinburgh's historic Old Town, our restaurant offers a cozy and inviting atmosphere, perfect for a gathering of friends or a romantic evening out.\n            <br /><br />\n            Indulge in a menu inspired by Scotland's rich culinary heritage, featuring traditional dishes with a modern twist. From hearty stews made with locally sourced ingredients to succulent Scottish salmon grilled to perfection, every bite tells a story of the land and sea that surrounds us.\n            <br /><br />\n            Pair your meal with a fine selection of Scotch whiskies from renowned distilleries across the country, or choose from our curated list of Scottish ales and craft beers. Our knowledgeable staff is always on hand to guide you through our extensive drinks menu, ensuring a truly immersive dining experience.\n            <br /><br />\n            Whether you're a visitor to Scotland or a local looking for a taste of home, Thistle & Heather Tavern invites you to savor the flavors of this beautiful land in every dish we serve.\n    ";const a=document.createElement("p");a.classList.add("adress"),a.innerHTML="\n        <span>Adress: </span>Thistle & Heather Tavern, 42 Royal Mile, Edinburgh, EH1 1QN, Scotland\n    ",e.appendChild(n),e.appendChild(t),e.appendChild(r),e.appendChild(o),e.appendChild(a)}()})()})();