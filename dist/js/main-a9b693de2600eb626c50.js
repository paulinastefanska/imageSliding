!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".slider__images-container"),t=document.querySelector(".slider__image-container--first img"),n=document.querySelector(".slider__image-container--second img");let r=!1;const o=document.querySelector(".slider__image-container--second"),i=document.querySelector(".slider__handle"),u=document.querySelector(".slider__divider");let d,c;function s(e){const t=function(e){const t=e-c;return t<0?0:t>d?d:t}(e)/d*100;u.style.left=`${t}%`,o.style.width=`${t}%`}function l(){d=e.offsetWidth,c=e.offsetLeft,t.style.width=d+"px",n.style.width=d+"px"}window.addEventListener("resize",l),l(),i.addEventListener("mousedown",()=>{r=!0}),i.addEventListener("mouseup",()=>{r=!1}),i.addEventListener("touchstart",()=>{r=!0}),i.addEventListener("touchend",()=>{r=!1}),window.addEventListener("mousemove",e=>{r&&s(e.clientX)}),window.addEventListener("touchmove",e=>{r&&s(e.touches[0].clientX)})})},function(e,t,n){}]);