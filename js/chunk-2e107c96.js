(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e107c96"],{"31b4":function(t,e,r){"use strict";var n=r("5eab"),o=r.n(n);o.a},4570:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("homeHeader"),r("homeVideo"),r("homeBottom")],1)},o=[],i=r("6141"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video-wrapper"},t._l(t.video,(function(t){return r("div",{key:t.id,staticClass:"content"},[r("video-item",{attrs:{video:t}})],1)})),0)},c=[];r("96cf"),r("d3b7"),r("e6cf");function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}var f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-item"},[n("div",{staticClass:"video-img",on:{click:function(e){return t.enterListPage(t.videoData.id)}}},[n("img",{attrs:{src:t.videoData.img}})]),n("div",{staticClass:"video-button"},[n("img",{staticClass:"ticket",attrs:{src:r("cddf")}}),n("p",{on:{click:function(e){return t.enterListPage(t.videoData.id)}}},[t._v("查看优惠")])]),n("div",{staticClass:"video-des"},[t._v(t._s(t.videoData.des))])])},l=[],h={name:"video-item",props:{video:{type:Object,default:function(){return{}}}},computed:{videoData:{get:function(){return this.video}}},data:function(){return{}},methods:{enterListPage:function(t){var e=this.$router.resolve({name:"list",query:{id:t}}),r=e.href;window.open(r,"_blank")}},mounted:function(){}},d=h,v=(r("6f3c"),r("2877")),p=Object(v["a"])(d,f,l,!1,null,"2c90b886",null),m=p.exports,y={name:"video-wrapper",components:{videoItem:m},data:function(){return{video:[{id:1,img:"https://axure-file.lanhuhu.com/edf89465-02ff-4584-be73-4847beebdda8__54bc374daf7aa2ce1f2144ef9293e947.png",addr:"",des:"123"},{id:2,img:"https://axure-file.lanhuhu.com/edf89465-02ff-4584-be73-4847beebdda8__54bc374daf7aa2ce1f2144ef9293e947.png",addr:"",des:"45645645"},{id:3,img:"https://axure-file.lanhuhu.com/edf89465-02ff-4584-be73-4847beebdda8__54bc374daf7aa2ce1f2144ef9293e947.png",addr:"",des:"789"}]}},mounted:function(){var t=this;return s(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.video.getVideosDatas();case 2:r=e.sent,console.log(r);case 4:case"end":return e.stop()}}),e)})))()}},g=y,w=(r("f1c5"),Object(v["a"])(g,a,c,!1,null,"25c68168",null)),b=w.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bottom"},[r("div",{staticClass:"btn"},[r("div",[t._v("线上商城")]),r("div",[t._v("周边服务")])])])}],L={name:"bottom",data:function(){return{}},mounted:function(){}},E=L,k=(r("58a7"),Object(v["a"])(E,_,x,!1,null,"286a21a4",null)),O=k.exports,j={name:"home",components:{homeHeader:i["a"],homeVideo:b,homeBottom:O},data:function(){return{}},mounted:function(){}},C=j,P=(r("7ea5"),Object(v["a"])(C,n,o,!1,null,null,null));e["default"]=P.exports},"58a7":function(t,e,r){"use strict";var n=r("b1d6"),o=r.n(n);o.a},"5eab":function(t,e,r){},6141:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header"},[r("Icon",{staticClass:"back",attrs:{size:"30",type:"md-add"}}),r("p",[t._v("逛周边")]),r("Icon",{staticClass:"more",attrs:{size:"30",type:"ios-more"}})],1)])},o=[],i={name:"header-top",data:function(){return{}},methods:{back:function(){this.$router.go(-1)}},mounted:function(){}},a=i,c=(r("31b4"),r("2877")),u=Object(c["a"])(a,n,o,!1,null,"4beaf88b",null);e["a"]=u.exports},"6f3c":function(t,e,r){"use strict";var n=r("b686"),o=r.n(n);o.a},7651:function(t,e,r){},"7ea5":function(t,e,r){"use strict";var n=r("7651"),o=r.n(n);o.a},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=E(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function p(){}function m(){}function y(){}var g={};g[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==r&&n.call(b,i)&&(g=b);var _=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return $()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:l,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return m.prototype=_.constructor=y,y.constructor=m,y[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),_[c]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},b1d6:function(t,e,r){},b686:function(t,e,r){},c92b:function(t,e,r){},cddf:function(t,e,r){t.exports=r.p+"img/ticket.png"},f1c5:function(t,e,r){"use strict";var n=r("c92b"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-2e107c96.js.map