!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){document.addEventListener("scroll",(function(){var e=window.scrollY,t=document.querySelectorAll("#main>section"),n=document.querySelectorAll(".navigation-link");t.forEach((function(t){t.offsetTop<=e+95&&t.offsetTop+t.offsetHeight>e+95&&n.forEach((function(e){e.classList.remove("navigation-link_active"),t.getAttribute("id")===e.getAttribute("href").substring(1)&&e.classList.add("navigation-link_active")}))})),document.documentElement.scrollHeight-document.documentElement.scrollTop===document.documentElement.clientHeight&&(n.forEach((function(e){e.classList.remove("navigation-link_active")})),n[n.length-1].classList.add("navigation-link_active"))}));document.querySelector(".navigation");document.querySelector("#hamburger").addEventListener("click",(function(){document.querySelector("#hamburger").classList.toggle("hamburger-rotate"),document.querySelector(".logo").classList.toggle("logo-mobile"),document.querySelector(".header__navigation_mobile").classList.toggle("hidden")})),document.querySelector("#next-slide").addEventListener("click",(function(){r||(c("to-right"),i(o-1),l("from-left"))})),document.querySelector("#prev-slide").addEventListener("click",(function(){r||(c("to-left"),i(o+1),l("from-right"))}));var n=document.querySelectorAll(".slide"),o=0,r=!1;function i(e){o=(e+n.length)%n.length,document.querySelector("#slider").classList.toggle("slide_second-background")}function c(e){r=!0,n[o].classList.add(e),n[o].addEventListener("animationend",(function(){this.classList.remove("slide_show",e)}))}function l(e){n[o].classList.add("next-slide",e),n[o].addEventListener("animationend",(function(){this.classList.remove("next-slide",e),this.classList.add("slide_show"),r=!1}))}for(var s=document.querySelectorAll(".tag"),u=0;u<s.length;u++)s[u].addEventListener("click",a);function a(){var e=document.querySelector(".portfolio__picture-example"),t=Array.from(document.querySelectorAll(".picture"));e.innerHTML="",t.splice(-1).concat(t).forEach((function(t){return e.append(t)})),s.forEach((function(e){return e.classList.remove("tag_active")})),event.target.classList.add("tag_active")}var d=document.querySelector(".portfolio__picture-example");d.addEventListener("click",(function(e){e.target.tagName==="img".toUpperCase()&&(d.querySelectorAll("img").forEach((function(e){e.classList.remove("picture_active")})),e.target.classList.add("picture_active"))}));var m=document.querySelector("#form");m.addEventListener("submit",(function(e){var t=document.querySelector("#form-subject").value,n=document.querySelector("#form-describe").value,o=document.querySelector("#subject-message"),r=document.querySelector("#describe-message");e.preventDefault(),m.checkValidity()&&(o.innerHTML=t?'<i class="message-title">Subject:</i> '+t:'<i class="message-title">Without subject</i>',r.innerHTML=n?'<i class="message-title">Description:</i> '+n:'<i class="message-title">Without description</i>',document.getElementById("message-block").classList.remove("hidden"))})),document.querySelector("#button-close").addEventListener("click",(function(e){document.querySelector("#message-block").classList.add("hidden"),m.reset()}))},function(e,t,n){}]);