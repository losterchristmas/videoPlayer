(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4ffbb68"],{"12e9":function(t,e,i){},4570:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isWeixinState?t._e():i("homeHeader"),i("homeVideo",{style:t.isWeixinState?"":"margin-top:50px"}),i("homeBottom")],1)},a=[],s=(i("c975"),i("6141")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroller",{ref:"myscroller",staticClass:"wrapper",attrs:{"on-refresh":t.refresh,"on-infinite":t.infinite}},[i("div",{staticClass:"video-wrapper"},[i("div",{staticClass:"colums"},t._l(t.video,(function(e,n){return i("div",{key:e.id,staticClass:"content"},[n%2===0?i("video-item",{attrs:{video:e}}):t._e()],1)})),0),i("div",{staticClass:"colums"},t._l(t.video,(function(e,n){return i("div",{key:e.id,staticClass:"content"},[n%2===1?i("video-item",{attrs:{video:e}}):t._e()],1)})),0)])])},r=[],c=(i("99af"),i("4de4"),i("4160"),i("159b"),i("2909")),d=(i("96cf"),i("1da1")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-item"},[n("div",{staticClass:"video-img",on:{click:function(e){return t.enterListPage(t.videoData.id,t.videoData.video)}}},[n("img",{staticClass:"munt",attrs:{src:i("21fd")}}),t.videoData.video?n("img",{attrs:{src:t.videoData.video.cover}}):t._e()]),n("div",{staticClass:"video-button"},[n("img",{staticClass:"ticket",attrs:{src:i("cddf")}}),n("p",{on:{click:function(e){return t.enterListPage(t.videoData.id,t.videoData.video)}}},[t._v("查看优惠")])]),n("div",{staticClass:"video-des"},[t._v(t._s(t.videoData.title))])])},f=[],l={name:"video-item",props:{video:{type:Object,default:function(){return{}}}},computed:{videoData:{get:function(){return this.video}}},data:function(){return{}},methods:{enterListPage:function(t,e){var i=this.$router.resolve({name:"list",query:{id:t,videoData:JSON.stringify(e),title:this.videoData.title}}),n=i.href;window.open(n,"_blank")}},mounted:function(){}},v=l,m=(i("ecae"),i("2877")),g=Object(m["a"])(v,u,f,!1,null,"3214f360",null),p=g.exports,h={name:"video-wrapper",components:{videoItem:p},data:function(){return{video:[],noData:"",page:0,limit:10,firstLoading:0}},methods:{infinite:function(t){var e=this;if(this.noData)setTimeout((function(){e.$refs.myscroller.finishInfinite(2)}));else{var i=this,n=JSON.parse(sessionStorage.getItem("isAddressState"));!n&&sessionStorage.getItem("resVideoDatas")&&1===this.firstLoading?(this.video=JSON.parse(sessionStorage.getItem("resVideoDatas")),this.page=sessionStorage.getItem("resVideoPage"),this.firstLoading=0):this.getVideoDatasByPage(this.page)||(i.noData="没有更多数据"),setTimeout((function(){i.$refs.myscroller.resize(),t()}),1500)}},refresh:function(t){var e=this;this.pageInit(),this.getVideoDatasByPage(0),setTimeout((function(){e.top=e.top-10,t()}),2e3)},pageInit:function(){this.video=[],this.page=0,this.limit=10},getVideoDatasByPage:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,e.$api.WMC.getVideosDatas({offset:t,limit:e.limit});case 3:if(n=i.sent,0!==n.data.code){i.next=14;break}return a=[].concat(Object(c["a"])(e.video),Object(c["a"])(n.data.data)),a=a.filter((function(t,e){var i=[];return a.forEach((function(t){i.push(t.id)})),i.indexOf(t.id)===e})),e.video=a,e.page=parseInt(t)+parseInt(e.limit),sessionStorage.resVideoDatas=JSON.stringify(e.video),sessionStorage.resVideoPage=JSON.stringify(e.page),i.abrupt("return",!0);case 14:return i.abrupt("return",!1);case 15:i.next=20;break;case 17:i.prev=17,i.t0=i["catch"](0),e.$Message.error({content:i.t0,duration:4,closable:!0});case 20:case"end":return i.stop()}}),i,null,[[0,17]])})))()}},mounted:function(){this.firstLoading++}},b=h,_=(i("bcdc"),Object(m["a"])(b,o,r,!1,null,"9e84eb62",null)),D=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("div",{staticClass:"btn"},[i("div",[t._v("线上商城")]),i("div",[t._v("周边服务")])])])}],C={name:"bottom",data:function(){return{}},mounted:function(){}},S=C,O=(i("58a7"),Object(m["a"])(S,w,x,!1,null,"286a21a4",null)),y=O.exports,k={name:"home",components:{homeHeader:s["a"],homeVideo:D,homeBottom:y},data:function(){return{isWeixinState:!1}},methods:{webVAl:function(){var t=navigator.userAgent.toLowerCase();this.isWeixinState=-1!=t.indexOf("micromessenger")}},mounted:function(){this.webVAl()}},V=k,I=(i("7ea5"),Object(m["a"])(V,n,a,!1,null,null,null));e["default"]=I.exports},"58a7":function(t,e,i){"use strict";var n=i("c01d"),a=i.n(n);a.a},"6cae":function(t,e,i){},7651:function(t,e,i){},"7ea5":function(t,e,i){"use strict";var n=i("7651"),a=i.n(n);a.a},bcdc:function(t,e,i){"use strict";var n=i("6cae"),a=i.n(n);a.a},c01d:function(t,e,i){},cddf:function(t,e,i){t.exports=i.p+"img/ticket.png"},ecae:function(t,e,i){"use strict";var n=i("12e9"),a=i.n(n);a.a}}]);