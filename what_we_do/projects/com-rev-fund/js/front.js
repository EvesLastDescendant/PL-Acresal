/**
 * @package     EmbedPress
 * @author      EmbedPress <help@embedpress.com>
 * @copyright   Copyright (C) 2023 EmbedPress. All rights reserved.
 * @license     GPLv2 or later
 * @since       1.7.0
 */
let epGlobals={};!function(e){"use strict";var t;function r(){var e,t;document.querySelectorAll("iframe").forEach((function(r){r.width&&r.height&&(e=parseFloat(r.width)/parseFloat(r.height),t=parseFloat(window.getComputedStyle(r.parentElement,null).width.replace("px","")),r.style.maxWidth="100%",r.style.maxHeight=Math.round(t/e).toString()+"px")}))}t=function(){let e={forceObject:!0},t=document.querySelectorAll(".embedpress-embed-document-pdf");t.length&&t.forEach((function(t,r,n){let a=t.dataset.emid,o=t.dataset.emsrc;PDFObject.embed(o,"."+a,e)})),"function"==typeof epGlobals.youtubeChannelGallery&&epGlobals.youtubeChannelGallery()},"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t),r(),window.onresize=r,Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1});var n=function(e,t,r,n){e.addEventListener(t,(function(e){for(var t=e.target;t&&t!==this;)t.matches(r)&&n.call(t,e),t=t.parentNode}))};function a(e,t,r){var n=function(){for(var e=!1,t=0;t<o.length;t++){try{e=o[t]()}catch(e){continue}break}return e}();if(n){var a=t?"POST":"GET";n.open(a,e,!0),t&&n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4==n.readyState&&(200!=n.status&&304!=n.status||r(n))},4!=n.readyState&&n.send(t)}}var o=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Msxml2.XMLHTTP.6.0")},function(){return new ActiveXObject("Msxml2.XMLHTTP.3.0")},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];function s(e){n(e,"click",".item",(function(t){var r=this.getAttribute("data-vid"),n=e.getElementsByTagName("iframe");if(r&&n){var a=n[0].src.replace(/(.*\/embed\/)([^\?&"'>]+)(.+)?/,`$1${r}$3`);a.indexOf("autoplay")>0?a=a.replace("autoplay=0","autoplay=1"):a+="&autoplay=1",n[0].src=a,e.scrollIntoView()}}));var t=1;let r=e.querySelector(".ep-youtube__content__block").getAttribute("data-unique-id");n(e,"click",".ep-next, .ep-prev",(function(n){n.target.closest(".ose-youtube").getAttribute("data-total-pages");const o=n.target.closest(".ose-youtube").classList;document.querySelector(`.${o[1]} .embedpress-page-active`)&&document.querySelector(`.${o[1]} .embedpress-page-active`).classList.remove("embedpress-page-active"),this.classList.contains("ep-next")?t++:t--;var s={action:"youtube_rest_api",playlistid:this.getAttribute("data-playlistid"),pagetoken:this.getAttribute("data-pagetoken"),pagesize:this.getAttribute("data-pagesize"),currentpage:t},l=[];for(var i in s){var c=encodeURIComponent(i),p=encodeURIComponent(s[i]);l.push(c+"="+p)}l=l.join("&");var d=e.getElementsByClassName("ep-youtube__content__block");e.setAttribute("data-current-page",t);let u=1;a("/wp-admin/admin-ajax.php",l,(function(e){if(d&&d[0]&&e.responseText){var r=JSON.parse(e.responseText);d[0].outerHTML=r.html;var n=d[0].getElementsByClassName("current-page");n&&n[0]&&(n[0].textContent=t)}}));const m=setInterval((()=>{if(u++,e.querySelector(".ep-youtube__content__block")){const n=e.querySelector(".ep-youtube__content__block").getAttribute("data-unique-id");n!==r&&e.querySelector(`[data-page="${t}"]`)&&(e.querySelector(`[data-page="${t}"]`).classList.add("embedpress-page-active"),r=n,clearInterval(m))}u>100&&clearInterval(m)}),100)}))}epGlobals.youtubeChannelGallery=function(){var e=document.getElementsByClassName("ep-player-wrap");if(e&&e.length)for(var t=0,r=e.length;r>t;t++)s(e[t])};const l=()=>{e(".embedpress-gutenberg-wrapper .ep-nft-gallery-wrapper").each((function(){let t=`[data-nftid='${e(this).data("nftid")}']`,r=e(t).data("loadmorelabel"),n=`<svg width="18" height="18" fill="${e(t+" .nft-loadmore").data("iconcolor")||"#fff"}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_GuJz{transform-origin:center;animation:spinner_STY6 1.5s linear infinite}@keyframes spinner_STY6{100%{transform:rotate(360deg)}}</style><g class="spinner_GuJz"><circle cx="3" cy="12" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="12" cy="21" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="5.64" cy="5.64" r="2"/><circle cx="18.36" cy="18.36" r="2"/><circle cx="5.64" cy="18.36" r="2"/><circle cx="18.36" cy="5.64" r="2"/></g></svg>`;e(t+" .ep_nft_item").slice(0,e(t).data("itemparpage")).show(),e(".embedpress-gutenberg-wrapper .ep-nft-gallery-wrapper .ep-loadmore-wrapper button").css("display","flex"),e(t+" .nft-loadmore").click((function(a){e(this).html(r+n),e(this).prop("disabled",!0),setTimeout((function(){e(t+" .nft-loadmore").text(r),e(t+" .nft-loadmore").prop("disabled",!1),e(t+" .ep_nft_item:hidden").slice(0,e(t).data("itemparpage")).fadeIn("slow"),0==e(t+" .ep_nft_item:hidden").length&&e(t+" .nft-loadmore").fadeOut("slow")}),500)}))}))};e(".embedpress-gutenberg-wrapper .ep-nft-gallery-wrapper").length>0&&l();jQuery(".ep-gutenberg-content .password-form").submit((function(t){t.preventDefault(),((t,r)=>{var n=jQuery(r).closest("form").find('input[name="ep_client_id"]').val(),a=jQuery(`input[name="pass_${n}"]`).val(),o=jQuery(`input[name="ep_base_${n}"]`).val(),s=jQuery(`input[name="hash_key_${n}"]`).val();const i=jQuery(r).closest(".password-form-container").find('input[type="submit"]').val(),c=jQuery(r).data("unlocking-text");var p={action:"lock_content_form_handler",client_id:n,password:a,hash_key:s,epbase:o};jQuery("#"+t+"-"+n+' .password-form input[type="submit"]').val(c),jQuery.post(eplocalize.ajaxurl,p,(function(a){a.success?a.embedHtml?(jQuery("#"+t+"-"+n+" .ep-embed-content-wraper").html(a.embedHtml),jQuery("#"+t+"-"+n+" .ose-youtube").length>0&&epGlobals.youtubeChannelGallery(),e(".embedpress-gutenberg-wrapper .ep-nft-gallery-wrapper").length>0&&l()):(jQuery("#"+t+"-"+n+' .password-form input[type="submit"]').val(i),jQuery("#"+t+"-"+n+' .password-form input[type="password"]').val(""),jQuery(r).closest(".password-form-container").find(".error-message").removeClass("hidden")):(jQuery("#password-error_"+n).html(a.form),jQuery("#password-error_"+n).show())}),"json")})("ep-gutenberg-content",this)})),window.addEventListener("load",(function(e){const t=new URLSearchParams(window.location.search).get("hash"),r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})}))}(jQuery),jQuery(window).on("elementor/frontend/init",(function(){var e=function(e,t){e[0].className.split(" ").join(".");const r=()=>{t(".elementor-widget-container .ep-nft-gallery-wrapper").each((function(){let e=`.elementor-widget-container [data-nftid='${t(this).data("nftid")}']`,r=t(e).data("loadmorelabel");t(e+" .ep_nft_item").slice(0,t(e).data("itemparpage")).show(),t(".elementor-widget-container .ep-nft-gallery-wrapper .ep-loadmore-wrapper button").css("display","flex"),t(e+" .nft-loadmore").click((function(n){t(this).html(r+'<svg width="18" height="18" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><style>.spinner_GuJz{transform-origin:center;animation:spinner_STY6 1.5s linear infinite}@keyframes spinner_STY6{100%{transform:rotate(360deg)}}</style><g class="spinner_GuJz"><circle cx="3" cy="12" r="2"/><circle cx="21" cy="12" r="2"/><circle cx="12" cy="21" r="2"/><circle cx="12" cy="3" r="2"/><circle cx="5.64" cy="5.64" r="2"/><circle cx="18.36" cy="18.36" r="2"/><circle cx="5.64" cy="18.36" r="2"/><circle cx="18.36" cy="5.64" r="2"/></g></svg>'),t(this).prop("disabled",!0),setTimeout((function(){t(e+" .nft-loadmore").text(r),t(e+" .nft-loadmore").prop("disabled",!1),t(e+" .ep_nft_item:hidden").slice(0,t(e).data("itemparpage")).fadeIn("slow"),0==t(e+" .ep_nft_item:hidden").length&&t(e+" .nft-loadmore").fadeOut("slow")}),500)}))}))};t(".elementor-widget-container .ep-nft-gallery-wrapper").length>0&&r();jQuery(".ep-elementor-content .password-form").submit((function(e){e.preventDefault(),((e,n)=>{var a=jQuery(n).closest("form").find('input[name="ep_client_id"]').val(),o=jQuery(`input[name="pass_${a}"]`).val(),s=jQuery(`input[name="ep_base_${a}"]`).val(),l=jQuery(`input[name="hash_key_${a}"]`).val();const i=jQuery(n).closest(".password-form-container").find('input[type="submit"]').val(),c=jQuery(n).data("unlocking-text");var p={action:"lock_content_form_handler",client_id:a,password:o,hash_key:l,epbase:s};jQuery("#"+e+"-"+a+' .password-form input[type="submit"]').val(c),jQuery.post(eplocalize.ajaxurl,p,(function(o){o.success?o.embedHtml?(t(".ep-content-locked").has("#"+e+"-"+a).length&&t(".ep-content-locked").removeClass("ep-content-locked"),jQuery("#"+e+"-"+a+" .ep-embed-content-wraper").html(o.embedHtml),t("#"+e+"-"+a).removeClass("ep-content-protection-enabled"),jQuery("#"+e+"-"+a+" .ose-youtube").length>0&&epGlobals.youtubeChannelGallery(),t(".elementor-widget-container .ep-nft-gallery-wrapper").length>0&&r()):(jQuery("#"+e+"-"+a+' .password-form input[type="submit"]').val(i),jQuery("#"+e+"-"+a+' .password-form input[type="password"]').val(""),jQuery(n).closest(".password-form-container").find(".error-message").removeClass("hidden")):(jQuery("#password-error_"+a).html(o.form),jQuery("#password-error_"+a).show())}),"json")})("ep-elementor-content",this)}))};elementorFrontend.hooks.addAction("frontend/element_ready/embedpres_elementor.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/embedpress_pdf.default",e),elementorFrontend.hooks.addAction("frontend/element_ready/embedpres_document.default",e)}));