(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[186],{327:function(e,r,t){var o=t(552);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(154).default)("e7906548",o,!0,{})},333:function(e,r,t){var o=t(614);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(154).default)("5ba6a5c3",o,!0,{})},334:function(e,r,t){var o=t(616);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t(154).default)("ed017fbc",o,!0,{})},538:function(e,r,t){"use strict";var o=t(316),n=t(320);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,r,t){return r&&s(e.prototype,r),t&&s(e,t),e}function c(e,r){return!r||"object"!==i(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&p(e,r)}function p(e,r){return(p=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var f=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"strong"}}]),r}(n.b),m=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"name",get:function(){return"em"}}]),r}(n.m),h=function(e){function r(){return a(this,r),c(this,d(r).apply(this,arguments))}return u(r,e),l(r,[{key:"schema",get:function(){return{parseDOM:[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",getAttrs:function(e){return"line-through"===e}}],toDOM:function(){return["s",0]},toMarkdown:{open:"~~",close:"~~",mixable:!0,expelEnclosingWhitespace:!0}}}}]),r}(n.r),y=["image/png","image/jpeg","image/gif","image/x-xbitmap","image/bmp","image/svg+xml"],g=function(e,r){var t=e.split("#")[1];if(void 0!==t){var o=t.split("&");if(void 0!==o)for(var n=0;n<o.length;n++){var i=o[n].split("=");if(decodeURIComponent(i[0])===r)return decodeURIComponent(i[1])}}},v={name:"ImageView",props:["node","updateAttrs","view"],data:function(){return{imageLoaded:!1,loaded:!1,failed:!1}},computed:{mimeIcon:function(){var e=g(this.src,"mimetype");return e?{backgroundImage:"url("+window.OC.MimeType.getIconUrl(e)+")"}:{}},isSupportedImage:function(){var e=g(this.src,"mimetype");return void 0===e||-1!==y.indexOf(e)},internalLinkOrImage:function(){var e=g(this.src,"fileId");return e?OC.generateUrl("/f/"+e):this.src},src:{get:function(){return this.node.attrs.src},set:function(e){this.updateAttrs({src:e})}},alt:{get:function(){return this.node.attrs.alt?this.node.attrs.alt:""},set:function(e){this.updateAttrs({alt:e})}},t:function(){return function(e,r){return window.t(e,r)}}},beforeMount:function(){var e=this;if(!this.isSupportedImage)return this.failed=!0,this.imageLoaded=!1,void(this.loaded=!0);var r=new Image;r.src=this.node.attrs.src,r.onload=function(){e.imageLoaded=!0},r.onerror=function(){e.failed=!0,e.imageLoaded=!1,e.loaded=!0}},methods:{updateAlt:function(){this.alt=this.$refs.altInput.value},onLoaded:function(){this.loaded=!0}}},j=(t(551),t(31)),b=Object(j.a)(v,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"image",class:{"icon-loading":!e.loaded},attrs:{"data-src":e.src}},[e.imageLoaded&&e.isSupportedImage?t("div",[t("transition",{attrs:{name:"fade"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main",attrs:{src:e.src},on:{load:e.onLoaded}})]),e._v(" "),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1):t("div",{staticClass:"image__placeholder"},[t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__main"},[t("div",{staticClass:"icon-image",style:e.mimeIcon}),e._v(" "),t("p",[t("a",{attrs:{href:e.internalLinkOrImage,target:"_blank"}},[e._v(e._s(e.isSupportedImage?e.t("text","Show image"):e.t("text","Show file")))])])])]),t("transition",{attrs:{name:"fade"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"image__caption"},[t("input",{ref:"altInput",attrs:{type:"text"},domProps:{value:e.alt},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.updateAlt()}}})])])],1)])}),[],!1,null,"2ac49a8a",null).exports;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function P(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function k(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,r){return!r||"object"!==x(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function M(e,r,t){return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var o=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=_(e)););return e}(e,r);if(o){var n=Object.getOwnPropertyDescriptor(o,r);return n.get?n.get.call(t):n.value}})(e,r,t||e)}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,r){return(S=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var E=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),O(this,_(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&S(e,r)}(r,e),t=r,(o=[{key:"view",get:function(){return b}},{key:"schema",get:function(){return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(t,!0).forEach((function(r){P(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},M(_(r.prototype),"schema",this),{selectable:!1})}}])&&k(t.prototype,o),n&&k(t,n),r}(n.l),z=t(326);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function C(e,r){return!r||"object"!==I(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,r){return(R=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */var D=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),C(this,A(r).apply(this,arguments))}var t,o,n;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&R(e,r)}(r,e),t=r,(o=[{key:"keys",value:function(){var e=this;return{Tab:function(r){return Object(z.c)("\t")(r,e.editor.view.dispatch,e.editor.view),!0}}}},{key:"name",get:function(){return"doc"}},{key:"schema",get:function(){return{content:"block"}}}])&&q(t.prototype,o),n&&q(t,n),r}(o.g),T=t(343),L=t.n(T),N=t(631);
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */function U(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{o||null==s.return||s.return()}finally{if(n)throw i}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function W(e){return function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function F(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function J(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?F(t,!0).forEach((function(r){$(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function $(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function B(e,r,t,o,n,i,a){try{var s=e[i](a),l=s.value}catch(e){return void t(e)}s.done?r(l):Promise.resolve(l).then(o,n)}t.d(r,"d",(function(){return H})),t.d(r,"a",(function(){return G})),t.d(r,"b",(function(){return Q})),t.d(r,"e",(function(){return X})),t.d(r,"c",(function(){return V}));
/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
var V=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){var o,n,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[r],n={},i=0;case 3:if(!(i<o.length)){e.next=17;break}return e.prev=4,e.next=7,t(608)("./"+o[i]);case 7:a=e.sent,n[o[i]]=a.default,e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",void 0);case 14:i++,e.next=3;break;case 17:if(0!==Object.keys(n).length||n.constructor!==Object){e.next=19;break}return e.abrupt("return",void 0);case 19:return e.abrupt("return",{languages:n});case 20:case"end":return e.stop()}}),e,null,[[4,11]])})),function(){var r=this,t=arguments;return new Promise((function(o,n){var i=e.apply(r,t);function a(e){B(i,o,n,a,s,"next",e)}function s(e){B(i,o,n,a,s,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),G=function(e){var r=e.content,t=e.onInit,i=e.onUpdate,a=e.extensions,s=e.enableRichEditing,l=e.languages,c=[];return c=s?[new n.i,new n.d,new f,new m,new h,new n.h,new n.k,new n.c,new n.p,new n.a,new n.e,new n.o,new n.n,new E,new n.q({emptyNodeClass:"is-empty",emptyNodeText:"Add notes, lists or links …",showOnlyWhenEditable:!0})]:[new D,new o.j,new n.f(J({},l))],a=a||[],new o.a({content:r,onInit:t,onUpdate:i,extensions:[].concat(W(c),[new n.j]).concat(a),useBuiltInExtensions:s})},H=L()("commonmark",{html:!1,breaks:!1}).enable("strikethrough"),K=function(e){this.message=e},Q=function(e,r){var t=Object.entries(e).filter((function(e){return U(e,2)[1].toMarkdown})).reduce((function(e,r){var t=U(r,2);return J({},e,$({},t[0],t[1].toMarkdown))}),{}),o=Object.entries(r).filter((function(e){return U(e,2)[1].toMarkdown})).reduce((function(e,r){var t=U(r,2);return J({},e,$({},t[0],t[1].toMarkdown))}),{});return{serializer:new N.a(J({},N.b.nodes,{},t),J({},N.b.marks,{},o)),serialize:function(e,r){return this.serializer.serialize(e,J({},r,{tightLists:!0})).split("\\[ \\]").join("[ ]").split("\\[x\\]").join("[x]")}}},X=function(e){var r=e.getJSON();if(1!==r.content.length||void 0===r.content[0].content||1!==r.content[0].content.length){if("code_block"===r.content[0].type&&void 0===r.content[0].content)return"";throw new K("Failed to serialize document to plain text")}var t=r.content[0].content[0];if("text"!==t.type)throw new K("Failed to serialize document to plain text");return t.text}},551:function(e,r,t){"use strict";var o=t(327);t.n(o).a},552:function(e,r,t){(e.exports=t(153)(!1)).push([e.i,".image[data-v-2ac49a8a]{margin:0;padding:0}.image__caption[data-v-2ac49a8a]{text-align:center;color:var(--color-text-lighter)}.image__caption input[type='text'][data-v-2ac49a8a]{width:100%;border:none;text-align:center}.icon-image[data-v-2ac49a8a]{margin-top:10px;height:32px;padding:20px;background-size:contain}.image__loading[data-v-2ac49a8a]{height:100px}.image__placeholder .image__main[data-v-2ac49a8a]{background-color:var(--color-background-dark);text-align:center;padding:20px;border-radius:var(--border-radius)}.image__placeholder .image__main .icon-image[data-v-2ac49a8a]{opacity:0.7}.fade-enter-active[data-v-2ac49a8a]{transition:opacity .3s ease-in-out}.fade-enter-to[data-v-2ac49a8a]{opacity:1}.fade-enter[data-v-2ac49a8a]{opacity:0}\n",""])},608:function(e,r,t){var o={"./1c":[353,1],"./1c.js":[353,1],"./abnf":[354,2],"./abnf.js":[354,2],"./accesslog":[355,3],"./accesslog.js":[355,3],"./actionscript":[356,4],"./actionscript.js":[356,4],"./ada":[357,5],"./ada.js":[357,5],"./angelscript":[358,6],"./angelscript.js":[358,6],"./apache":[359,7],"./apache.js":[359,7],"./applescript":[360,8],"./applescript.js":[360,8],"./arcade":[361,9],"./arcade.js":[361,9],"./arduino":[362,10],"./arduino.js":[362,10],"./armasm":[363,11],"./armasm.js":[363,11],"./asciidoc":[364,12],"./asciidoc.js":[364,12],"./aspectj":[365,13],"./aspectj.js":[365,13],"./autohotkey":[366,14],"./autohotkey.js":[366,14],"./autoit":[367,15],"./autoit.js":[367,15],"./avrasm":[368,16],"./avrasm.js":[368,16],"./awk":[369,17],"./awk.js":[369,17],"./axapta":[370,18],"./axapta.js":[370,18],"./bash":[371,19],"./bash.js":[371,19],"./basic":[372,20],"./basic.js":[372,20],"./bnf":[373,21],"./bnf.js":[373,21],"./brainfuck":[374,22],"./brainfuck.js":[374,22],"./cal":[375,23],"./cal.js":[375,23],"./capnproto":[376,24],"./capnproto.js":[376,24],"./ceylon":[377,25],"./ceylon.js":[377,25],"./clean":[378,26],"./clean.js":[378,26],"./clojure":[380,27],"./clojure-repl":[379,28],"./clojure-repl.js":[379,28],"./clojure.js":[380,27],"./cmake":[381,29],"./cmake.js":[381,29],"./coffeescript":[382,30],"./coffeescript.js":[382,30],"./coq":[383,31],"./coq.js":[383,31],"./cos":[384,32],"./cos.js":[384,32],"./cpp":[385,33],"./cpp.js":[385,33],"./crmsh":[386,34],"./crmsh.js":[386,34],"./crystal":[387,35],"./crystal.js":[387,35],"./cs":[388,36],"./cs.js":[388,36],"./csp":[389,37],"./csp.js":[389,37],"./css":[390,38],"./css.js":[390,38],"./d":[391,39],"./d.js":[391,39],"./dart":[392,40],"./dart.js":[392,40],"./delphi":[393,41],"./delphi.js":[393,41],"./diff":[394,42],"./diff.js":[394,42],"./django":[395,43],"./django.js":[395,43],"./dns":[396,44],"./dns.js":[396,44],"./dockerfile":[397,45],"./dockerfile.js":[397,45],"./dos":[398,46],"./dos.js":[398,46],"./dsconfig":[399,47],"./dsconfig.js":[399,47],"./dts":[400,48],"./dts.js":[400,48],"./dust":[401,49],"./dust.js":[401,49],"./ebnf":[402,50],"./ebnf.js":[402,50],"./elixir":[403,51],"./elixir.js":[403,51],"./elm":[404,52],"./elm.js":[404,52],"./erb":[405,53],"./erb.js":[405,53],"./erlang":[407,54],"./erlang-repl":[406,55],"./erlang-repl.js":[406,55],"./erlang.js":[407,54],"./excel":[408,56],"./excel.js":[408,56],"./fix":[409,57],"./fix.js":[409,57],"./flix":[410,58],"./flix.js":[410,58],"./fortran":[411,59],"./fortran.js":[411,59],"./fsharp":[412,60],"./fsharp.js":[412,60],"./gams":[413,61],"./gams.js":[413,61],"./gauss":[414,62],"./gauss.js":[414,62],"./gcode":[415,63],"./gcode.js":[415,63],"./gherkin":[416,64],"./gherkin.js":[416,64],"./glsl":[417,65],"./glsl.js":[417,65],"./gml":[418,66],"./gml.js":[418,66],"./go":[419,67],"./go.js":[419,67],"./golo":[420,68],"./golo.js":[420,68],"./gradle":[421,69],"./gradle.js":[421,69],"./groovy":[422,70],"./groovy.js":[422,70],"./haml":[423,71],"./haml.js":[423,71],"./handlebars":[424,72],"./handlebars.js":[424,72],"./haskell":[425,73],"./haskell.js":[425,73],"./haxe":[426,74],"./haxe.js":[426,74],"./hsp":[427,75],"./hsp.js":[427,75],"./htmlbars":[428,76],"./htmlbars.js":[428,76],"./http":[429,77],"./http.js":[429,77],"./hy":[430,78],"./hy.js":[430,78],"./inform7":[431,79],"./inform7.js":[431,79],"./ini":[432,80],"./ini.js":[432,80],"./irpf90":[433,81],"./irpf90.js":[433,81],"./isbl":[434,82],"./isbl.js":[434,82],"./java":[435,83],"./java.js":[435,83],"./javascript":[436,84],"./javascript.js":[436,84],"./jboss-cli":[437,85],"./jboss-cli.js":[437,85],"./json":[438,86],"./json.js":[438,86],"./julia":[440,87],"./julia-repl":[439,88],"./julia-repl.js":[439,88],"./julia.js":[440,87],"./kotlin":[441,89],"./kotlin.js":[441,89],"./lasso":[442,90],"./lasso.js":[442,90],"./ldif":[443,91],"./ldif.js":[443,91],"./leaf":[444,92],"./leaf.js":[444,92],"./less":[445,93],"./less.js":[445,93],"./lisp":[446,94],"./lisp.js":[446,94],"./livecodeserver":[447,95],"./livecodeserver.js":[447,95],"./livescript":[448,96],"./livescript.js":[448,96],"./llvm":[449,97],"./llvm.js":[449,97],"./lsl":[450,98],"./lsl.js":[450,98],"./lua":[451,99],"./lua.js":[451,99],"./makefile":[452,100],"./makefile.js":[452,100],"./markdown":[453,101],"./markdown.js":[453,101],"./mathematica":[454,102],"./mathematica.js":[454,102],"./matlab":[455,103],"./matlab.js":[455,103],"./maxima":[456,104],"./maxima.js":[456,104],"./mel":[457,105],"./mel.js":[457,105],"./mercury":[458,106],"./mercury.js":[458,106],"./mipsasm":[459,107],"./mipsasm.js":[459,107],"./mizar":[460,108],"./mizar.js":[460,108],"./mojolicious":[461,109],"./mojolicious.js":[461,109],"./monkey":[462,110],"./monkey.js":[462,110],"./moonscript":[463,111],"./moonscript.js":[463,111],"./n1ql":[464,112],"./n1ql.js":[464,112],"./nginx":[465,113],"./nginx.js":[465,113],"./nimrod":[466,114],"./nimrod.js":[466,114],"./nix":[467,115],"./nix.js":[467,115],"./nsis":[468,116],"./nsis.js":[468,116],"./objectivec":[469,117],"./objectivec.js":[469,117],"./ocaml":[470,118],"./ocaml.js":[470,118],"./openscad":[471,119],"./openscad.js":[471,119],"./oxygene":[472,120],"./oxygene.js":[472,120],"./parser3":[473,121],"./parser3.js":[473,121],"./perl":[474,122],"./perl.js":[474,122],"./pf":[475,123],"./pf.js":[475,123],"./pgsql":[476,124],"./pgsql.js":[476,124],"./php":[477,125],"./php.js":[477,125],"./plaintext":[478,126],"./plaintext.js":[478,126],"./pony":[479,127],"./pony.js":[479,127],"./powershell":[480,128],"./powershell.js":[480,128],"./processing":[481,129],"./processing.js":[481,129],"./profile":[482,130],"./profile.js":[482,130],"./prolog":[483,131],"./prolog.js":[483,131],"./properties":[484,132],"./properties.js":[484,132],"./protobuf":[485,133],"./protobuf.js":[485,133],"./puppet":[486,134],"./puppet.js":[486,134],"./purebasic":[487,135],"./purebasic.js":[487,135],"./python":[488,136],"./python.js":[488,136],"./q":[489,137],"./q.js":[489,137],"./qml":[490,138],"./qml.js":[490,138],"./r":[491,139],"./r.js":[491,139],"./reasonml":[492,140],"./reasonml.js":[492,140],"./rib":[493,141],"./rib.js":[493,141],"./roboconf":[494,142],"./roboconf.js":[494,142],"./routeros":[495,143],"./routeros.js":[495,143],"./rsl":[496,144],"./rsl.js":[496,144],"./ruby":[497,145],"./ruby.js":[497,145],"./ruleslanguage":[498,146],"./ruleslanguage.js":[498,146],"./rust":[499,147],"./rust.js":[499,147],"./sas":[500,148],"./sas.js":[500,148],"./scala":[501,149],"./scala.js":[501,149],"./scheme":[502,150],"./scheme.js":[502,150],"./scilab":[503,151],"./scilab.js":[503,151],"./scss":[504,152],"./scss.js":[504,152],"./shell":[505,153],"./shell.js":[505,153],"./smali":[506,154],"./smali.js":[506,154],"./smalltalk":[507,155],"./smalltalk.js":[507,155],"./sml":[508,156],"./sml.js":[508,156],"./sqf":[509,157],"./sqf.js":[509,157],"./sql":[510,158],"./sql.js":[510,158],"./stan":[511,159],"./stan.js":[511,159],"./stata":[512,160],"./stata.js":[512,160],"./step21":[513,161],"./step21.js":[513,161],"./stylus":[514,162],"./stylus.js":[514,162],"./subunit":[515,163],"./subunit.js":[515,163],"./swift":[516,164],"./swift.js":[516,164],"./taggerscript":[517,165],"./taggerscript.js":[517,165],"./tap":[518,166],"./tap.js":[518,166],"./tcl":[519,167],"./tcl.js":[519,167],"./tex":[520,168],"./tex.js":[520,168],"./thrift":[521,169],"./thrift.js":[521,169],"./tp":[522,170],"./tp.js":[522,170],"./twig":[523,171],"./twig.js":[523,171],"./typescript":[524,172],"./typescript.js":[524,172],"./vala":[525,173],"./vala.js":[525,173],"./vbnet":[526,174],"./vbnet.js":[526,174],"./vbscript":[528,175],"./vbscript-html":[527,176],"./vbscript-html.js":[527,176],"./vbscript.js":[528,175],"./verilog":[529,177],"./verilog.js":[529,177],"./vhdl":[530,178],"./vhdl.js":[530,178],"./vim":[531,179],"./vim.js":[531,179],"./x86asm":[532,180],"./x86asm.js":[532,180],"./xl":[533,181],"./xl.js":[533,181],"./xml":[534,182],"./xml.js":[534,182],"./xquery":[535,183],"./xquery.js":[535,183],"./yaml":[536,184],"./yaml.js":[536,184],"./zephir":[537,185],"./zephir.js":[537,185]};function n(e){if(!t.o(o,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=o[e],n=r[0];return t.e(r[1]).then((function(){return t.t(n,7)}))}n.keys=function(){return Object.keys(o)},n.id=608,e.exports=n},613:function(e,r,t){"use strict";var o=t(333);t.n(o).a},614:function(e,r,t){(e.exports=t(153)(!1)).push([e.i,'#read-only-editor{overflow:scroll}#read-only-editor div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}#read-only-editor div.ProseMirror[contenteditable=true],#read-only-editor div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}#read-only-editor div.ProseMirror p:first-child,#read-only-editor div.ProseMirror h1:first-child,#read-only-editor div.ProseMirror h2:first-child,#read-only-editor div.ProseMirror h3:first-child,#read-only-editor div.ProseMirror h4:first-child,#read-only-editor div.ProseMirror h5:first-child,#read-only-editor div.ProseMirror h6:first-child{margin-top:10px}#read-only-editor div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}#read-only-editor div.ProseMirror p{margin-bottom:1em;line-height:150%}#read-only-editor div.ProseMirror em{font-style:italic}#read-only-editor div.ProseMirror h1,#read-only-editor div.ProseMirror h2,#read-only-editor div.ProseMirror h3,#read-only-editor div.ProseMirror h4,#read-only-editor div.ProseMirror h5,#read-only-editor div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}#read-only-editor div.ProseMirror h1{font-size:36px;margin-top:48px}#read-only-editor div.ProseMirror h2{font-size:28px;margin-top:48px}#read-only-editor div.ProseMirror h3{font-size:24px}#read-only-editor div.ProseMirror h4{font-size:21px}#read-only-editor div.ProseMirror h5{font-size:17px}#read-only-editor div.ProseMirror h6{font-size:14px}#read-only-editor div.ProseMirror img{cursor:default;max-width:100%}#read-only-editor div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}#read-only-editor div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}#read-only-editor div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}#read-only-editor div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}#read-only-editor div.ProseMirror li{position:relative}#read-only-editor div.ProseMirror ul,#read-only-editor div.ProseMirror ol{padding-left:14px}#read-only-editor div.ProseMirror ul li{list-style-type:disc}#read-only-editor div.ProseMirror ul>li>ul>li{list-style-type:circle}#read-only-editor div.ProseMirror ul>li>ul>li ul li{list-style-type:square}#read-only-editor div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor{display:block}#read-only-editor .editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}.thumbnailContainer #read-only-editor{width:100%}.thumbnailContainer #read-only-editor .ProseMirror{height:auto;margin:0 0 0 0;padding:0}\n',""])},615:function(e,r,t){"use strict";var o=t(334);t.n(o).a},616:function(e,r,t){(e.exports=t(153)(!1)).push([e.i,'div.ProseMirror{margin-top:44px;height:100%;position:relative;word-wrap:break-word;white-space:pre-wrap;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;padding:4px 8px 200px 14px;line-height:150%;font-size:14px;outline:none}div.ProseMirror[contenteditable=true],div.ProseMirror[contenteditable=false]{border:none !important;width:100%;background-color:transparent;color:var(--color-main-text);opacity:1;-webkit-user-select:text;user-select:text;font-size:14px}div.ProseMirror p:first-child,div.ProseMirror h1:first-child,div.ProseMirror h2:first-child,div.ProseMirror h3:first-child,div.ProseMirror h4:first-child,div.ProseMirror h5:first-child,div.ProseMirror h6:first-child{margin-top:10px}div.ProseMirror a{color:var(--color-primary-element);text-decoration:underline;padding:.5em 0}div.ProseMirror p{margin-bottom:1em;line-height:150%}div.ProseMirror em{font-style:italic}div.ProseMirror h1,div.ProseMirror h2,div.ProseMirror h3,div.ProseMirror h4,div.ProseMirror h5,div.ProseMirror h6{font-weight:600;line-height:120%;margin-top:24px;margin-bottom:12px;color:var(--color-main-text)}div.ProseMirror h1{font-size:36px;margin-top:48px}div.ProseMirror h2{font-size:28px;margin-top:48px}div.ProseMirror h3{font-size:24px}div.ProseMirror h4{font-size:21px}div.ProseMirror h5{font-size:17px}div.ProseMirror h6{font-size:14px}div.ProseMirror img{cursor:default;max-width:100%}div.ProseMirror hr{padding:2px 0;border:none;margin:1em 0;width:100%}div.ProseMirror hr:after{content:"";display:block;height:1px;background-color:var(--color-border-dark);line-height:2px}div.ProseMirror pre{white-space:pre-wrap;background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:1em 1.3em;margin-bottom:1em}div.ProseMirror p code{background-color:var(--color-background-dark);border-radius:var(--border-radius);padding:.1em .3em}div.ProseMirror li{position:relative}div.ProseMirror ul,div.ProseMirror ol{padding-left:14px}div.ProseMirror ul li{list-style-type:disc}div.ProseMirror ul>li>ul>li{list-style-type:circle}div.ProseMirror ul>li>ul>li ul li{list-style-type:square}div.ProseMirror blockquote{padding-left:1em;border-left:4px solid var(--color-primary-element);color:var(--color-text-maxcontrast);margin-left:0;margin-right:0}.ProseMirror-focused .ProseMirror-gapcursor{display:block}.editor__content p.is-empty:first-child::before{content:attr(data-empty-text);float:left;color:var(--color-text-maxcontrast);pointer-events:none;height:0}\n',""])},633:function(e,r,t){"use strict";t.r(r);var o=t(316),n=t(341),i=t.n(n),a=t(538),s={name:"ReadOnlyEditor",components:{EditorContent:o.b},props:{content:{type:String,required:!0},isRichEditor:{type:Boolean,default:!0}},data:function(){return{editor:null}},mounted:function(){this.editor=Object(a.a)({content:this.isRichEditor?a.d.render(this.content):"<pre>"+i()(this.content)+"</pre>",enableRichEditing:this.isRichEditor}),this.editor.setOptions({editable:!1})},beforeDestroy:function(){this.editor.destroy()}},l=(t(613),t(615),t(31)),c=Object(l.a)(s,(function(){var e=this.$createElement,r=this._self._c||e;return this.editor?r("EditorContent",{attrs:{id:"read-only-editor",editor:this.editor}}):this._e()}),[],!1,null,null,null);r.default=c.exports}}]);
//# sourceMappingURL=preview.js.map?v=db597934214b8e5c2c39