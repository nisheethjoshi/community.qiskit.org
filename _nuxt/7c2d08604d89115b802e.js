(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{188:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",function(){return n})},189:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",function(){return n})},190:function(t,e,r){"use strict";var n=r(17);function o(t,e){return!e||"object"!==Object(n.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",function(){return o})},191:function(t,e,r){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",function(){return o})},192:function(t,e,r){"use strict";var n=r(1),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach(function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)})}var d={__proto__:[]}instanceof Array;function f(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})})};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach(function(t){void 0!==data[t]&&(n[t]=data[t])}),n}(this,t)}});var f=t.__decorators__;f&&(f.forEach(function(t){return t(e)}),delete t.__decorators__);var m,v,y=Object.getPrototypeOf(t.prototype),O=y instanceof n.a?y.constructor:n.a,_=O.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if(!h[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(e,n);if(!d){if("cid"===n)return;var m=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,f=typeof c,null!=c&&("object"===f||"function"===f)&&m&&m.value===l.value)return}0,Object.defineProperty(t,n,l)}}})}(_,t,O),o&&(c(m=_,v=t),Object.getOwnPropertyNames(v.prototype).forEach(function(t){c(m.prototype,v.prototype,t)}),Object.getOwnPropertyNames(v).forEach(function(t){c(m,v,t)})),_}var h={prototype:!0,arguments:!0,callee:!0,caller:!0};function v(t){return"function"==typeof t?m(t):function(e){return m(e,t)}}v.registerHooks=function(t){l.push.apply(l,t)};var y=v;r.d(e,"b",function(){return w}),r.d(e,"a",function(){return y});var O="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function _(t,e,r){O&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,r)))}function w(t){return void 0===t&&(t={}),function(e,r){_(t,e,r),f(function(e,r){(e.props||(e.props={}))[r]=t})(e,r)}}},193:function(t,e,r){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",function(){return o})},198:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("46b20a43",content,!0,{sourceMap:!1})},200:function(t,e,r){"use strict";r(95);var n=r(188),o=r(193),c=r(190),d=r(189),f=r(191),l=r(17),m=r(1),h=r(192),v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){function e(){return Object(n.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(o.a)(e,[{key:"isPointingOutside",get:function(){return this.$props.href.startsWith("http")}}]),e}(m.a);v([Object(h.b)(String)],y.prototype,"href",void 0);var O=y=v([h.a],y),_=(r(216),r(36)),component=Object(_.a)(O,function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"button",attrs:{href:this.href,target:this.isPointingOutside?"_blank":"_self"}},[this._t("default")],2)},[],!1,null,"60d604c6",null);e.a=component.exports},216:function(t,e,r){"use strict";var n=r(198);r.n(n).a},217:function(t,e,r){(t.exports=r(67)(!1)).push([t.i,"a[data-v-60d604c6]{border:1px solid #000;padding:.5rem 1rem;display:inline-block;background-color:#fff;text-align:center;color:#000}a[call-to-action][data-v-60d604c6]{background-color:var(--ibm-blue);color:#fff}@media (max-width:800px){a[data-v-60d604c6]{display:block}}",""])},227:function(t,e,r){var content=r(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("74ddff14",content,!0,{sourceMap:!1})},237:function(t,e,r){"use strict";var n=r(188),o=r(193),c=r(190),d=r(189),f=r(191),l=r(17),m=r(1),h=r(192),v=r(200),y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){function e(){return Object(n.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(o.a)(e,[{key:"render",value:function(t){return this.$data.templateRender?this.$data.templateRender():t("div","Rendering...")}},{key:"created",value:function(){this.$data.templateRender=new Function(this.$props.renderFn)().bind(this),this.$options.staticRenderFns=new Function(this.$props.staticRenderFns)()}}]),e}(m.a);y([Object(h.b)(String)],O.prototype,"renderFn",void 0),y([Object(h.b)(String)],O.prototype,"staticRenderFns",void 0);var _=O=y([Object(h.a)({components:{Button:v.a}})],O),w=r(36),component=Object(w.a)(_,void 0,void 0,!1,null,null,null);e.a=component.exports},273:function(t,e,r){"use strict";var n=r(6),o=r(21),c=r(69),d="".endsWith;n(n.P+n.F*r(70)("endsWith"),"String",{endsWith:function(t){var e=c(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,n=o(e.length),f=void 0===r?n:Math.min(o(r),n),l=String(t);return d?d.call(e,l,f):e.slice(f-l.length,f)===l}})},274:function(t,e,r){var map={"./index/toc.md":[157,11],"./qiskit-blocks.md":[158,12],"./qonway-game-of-life.md":[159,13],"./quantum-toy-piano.md":[160,14],"./tictacq.md":[161,15]};function n(t){if(!r.o(map,t))return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e});var e=map[t],n=e[0];return r.e(e[1]).then(function(){return r.t(n,7)})}n.keys=function(){return Object.keys(map)},n.id=274,t.exports=n},275:function(t,e,r){"use strict";var n=r(227);r.n(n).a},276:function(t,e,r){(t.exports=r(67)(!1)).push([t.i,'*{margin:0;padding:0}html{background-image:url(/images/events/deco/dots.svg),url(/images/events/deco/dots.svg),url(/images/events/deco/dots.svg),url(/images/events/deco/lines.svg),url(/images/events/deco/lines.svg),url(/images/events/deco/lines.svg);background-repeat:repeat-x,repeat-x,repeat-x,repeat-y,repeat-y,repeat-y;background-position:top calc(100vh + 890px) left 0,top calc(100vh + 930px) left 0,top calc(100vh + 970px) left 0,top 0 right 100px,top 0 right 0,top 0 right -100px}ul{margin:1rem 0 1rem 3rem}a{text-decoration:none;color:#4a90e2}a:hover{opacity:.6}h2:before{content:"";float:left;width:5%;margin-top:.5rem;margin-right:5%;border-top:1px solid var(--ibm-blue)}h2{margin:2rem 0 2.5rem;color:var(--ibm-blue)}.wrapper{display:flex;flex-direction:column}main{position:relative;top:63px;flex:1}header{margin:2rem 10% 3rem;max-width:60rem}.author{color:grey;margin:1rem 0}.holder{width:100%}.featured{margin-top:2rem}.featured>*{width:100%}.secondary{display:flex}.secondary>*{max-width:50%}.content{margin-top:3rem}.content>:not(h2):not(iframe):not(table){margin-left:10%;margin-right:1.5rem;line-height:1.4rem;margin-bottom:1rem;max-width:40rem;text-align:justify}.content ul{list-style-type:square;padding-left:2rem;margin-bottom:2rem}.content ul li{margin:.5rem 0}.content .clarification{font-size:.7rem;line-height:1rem}.content h3{font-weight:700;margin-top:2.5rem;margin-bottom:1rem}@media (max-width:800px){.secondary{display:block}.secondary>*{max-width:100%}.button{margin-bottom:.5rem}.content>:not(h2):not(iframe):not(table){margin-right:10%}}',""])},296:function(t,e,r){"use strict";r.r(e);r(273),r(25);var n,o=r(3),c=r(188),d=r(190),f=r(189),l=r(191),m=r(17),h=r(1),v=r(192),y=r(200),O=r(237),_=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},w=function(t){function e(){return Object(c.a)(this,e),Object(d.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(l.a)(e,t),e}(h.a),j=w=_([Object(v.a)({layout:"secondary",components:{Button:y.a,MdContent:O.a},head:function(){var title=this.attributes.title,t=this.attributes.description;return{title:title,meta:[{hid:"description",name:"description",content:t},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:site",name:"twitter:site",content:"@qiskit"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",name:"twitter:image",content:this.attributes.media[0].url}]}},asyncData:(n=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(c=function(t){return[".mp4"].some(function(e){return t.endsWith(e)})},"undefined"!==(n=e.route.params.experiment)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,r(274)("./".concat(n,".md"));case 6:return(o=t.sent).attributes.media=(o.attributes.media||[]).slice(0,3),o.attributes.media.forEach(function(t,e){o.attributes.media[e]={url:t,isVideo:c(t)}}),t.abrupt("return",o);case 10:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})})],w),x=(r(275),r(36)),component=Object(x.a)(j,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("header",[r("h1",[t._v(t._s(t.attributes.title))]),t._v(" "),r("p",{staticClass:"author"},[t._v("\n      by "+t._s(t.attributes.author)+"\n    ")]),t._v(" "),t.attributes.launch?r("Button",{attrs:{href:t.attributes.launch,"call-to-action":""}},[t._v("\n      Launch\n    ")]):t._e(),t._v(" "),t.attributes.source?r("Button",{attrs:{href:t.attributes.source}},[t._v("\n      Explore the sources\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"holder featured"},[t.attributes.media[0]&&t.attributes.media[0].isVideo?r("video",{attrs:{src:t.attributes.media[0].url,muted:"",autoplay:"",controls:"",loop:""},domProps:{muted:!0}}):t._e(),t._v(" "),t.attributes.media[0]&&!t.attributes.media[0].isVideo?r("img",{attrs:{src:t.attributes.media[0].url}}):t._e()]),t._v(" "),r("div",{staticClass:"holder secondary"},[t.attributes.media[1]&&t.attributes.media[1].isVideo?r("video",{attrs:{src:t.attributes.media[1].url,muted:"",autoplay:"",controls:"",loop:""},domProps:{muted:!0}}):t._e(),t._v(" "),t.attributes.media[1]&&!t.attributes.media[1].isVideo?r("img",{attrs:{src:t.attributes.media[1].url}}):t._e(),t._v(" "),t.attributes.media[2]&&t.attributes.media[2].isVideo?r("video",{attrs:{src:t.attributes.media[2].url,muted:"",autoplay:"",controls:"",loop:""},domProps:{muted:!0}}):t._e(),t._v(" "),t.attributes.media[2]&&!t.attributes.media[2].isVideo?r("img",{attrs:{src:t.attributes.media[2].url}}):t._e()])],1),t._v(" "),r("MdContent",{attrs:{"render-fn":t.vue.render,"static-render-fns":t.vue.staticRenderFns}})],1)},[],!1,null,null,null);e.default=component.exports}}]);