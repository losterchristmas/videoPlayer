(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cc86cdf"],{"06d4":function(e,t,n){},"1ad1":function(e,t,n){"use strict";var i=n("2ae8"),o=n.n(i);o.a},"2ae8":function(e,t,n){},6360:function(e,t,n){},"83ed":function(e,t,n){e.exports=n.p+"img/address.png"},"95bd":function(e,t,n){"use strict";var i=n("6360"),o=n.n(i);o.a},a5b3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isWeixinState?e._e():i("homeHeader"),i("div",{staticStyle:{position:"relative"}},[i("videoPlayer",{attrs:{sources_src:e.videoUrl,poster:e.videoImg,allScreen:e.allScreen}}),e.currentDatas?i("div",{staticClass:"address-content"},[i("div",{staticClass:"title"},[e._v("为您精选")]),i("div",[i("img",{staticClass:"address",attrs:{src:n("83ed")}}),i("p",[e._v(e._s(e.currentDatas.distance))]),i("p",[e._v(e._s(e.currentDatas.city))])])]):e._e()],1),i("listWrapper",{attrs:{id:e.id,latitude:e.currentDatas.latitude,longitude:e.currentDatas.longitude},on:{changeVideoUrl:e.changeVideoUrl}})],1)},o=[],s=(n("c975"),n("6141")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},e._l(e.shop,(function(t){return n("div",{key:t.id,staticClass:"content"},[n("listItem",{attrs:{shop:t},on:{changeVideoUrl:e.changeVideoUrl}})],1)})),0)},r=[],c=(n("99af"),n("4de4"),n("4160"),n("159b"),n("2909")),d=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"header"},[i("div",{staticClass:"item-left"},[i("img",{staticClass:"logo",attrs:{src:e.shopData.logoUrl,alt:""}}),i("p",[e._v(e._s(e.shopData.name))])]),i("div",{staticClass:"item-right"},[i("p",{staticClass:"meter"},[e._v(e._s(e.shopData.distance))]),i("p",[e._v(e._s(e.shopData.addressShort))])])]),i("div",{staticClass:"content"},[i("div",{staticClass:"imgContent",on:{click:function(t){return e.enterListPage(e.shopId,e.ShopVideoData)}}},[i("img",{staticClass:"munt",attrs:{src:n("21fd")}}),i("img",{attrs:{src:e.shopData.video.coverUrl}})]),i("div",{staticClass:"content-des"},[i("p",{staticClass:"title"},[e._v(e._s(e.shopData.product.name))]),i("p",{staticClass:"des"},[e._v(e._s(e.shopData.product.intro))]),i("p",{staticClass:"price"},[e._v("￥"+e._s(e.shopData.product.price)+"+"+e._s(e.shopData.product.point)+"红包")]),e.shopData.product.stock>0?i("p",{staticClass:"discount"},[e._v("最后"+e._s(e.shopData.product.stock)+"件")]):i("p",{staticClass:"discount"},[e._v("已抢完")]),i("div",{staticClass:"redBag"},[e._v(e._s(e.shopData.product.point)+"红包")]),i("img",{attrs:{src:n("fe73"),alt:""}})])])])},u=[],h={name:"list-item",props:{shop:{type:Object,default:function(){return{}}}},computed:{shopData:{get:function(){return this.shop}},shopId:function(){return this.shop.id},ShopVideoData:function(){return this.shop.video}},data:function(){return{}},methods:{enterListPage:function(e,t){this.$emit("changeVideoUrl",t)}},mounted:function(){}},p=h,g=(n("a5d8"),n("2877")),v=Object(g["a"])(p,l,u,!1,null,"5677c263",null),f=v.exports,m={name:"list-wrapper",components:{listItem:f},props:{id:{type:String,default:function(){return""}},latitude:{type:String,default:function(){return""}},longitude:{type:String,default:function(){return""}}},data:function(){return{shop:[],page:0,limit:10,loadingEnd:!1,timer:null}},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement.scrollHeight||document.body.scrollHeight;if(e+t>=n-100){var i=JSON.parse(sessionStorage.getItem("isAddressState"));!i&&sessionStorage.getItem("resShopDatas")?this.shop=JSON.parse(sessionStorage.getItem("resShopDatas")):this.getVideoDatasByPage(this.page)}},getVideoDatasByPage:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.fnThrottle(Object(d["a"])(regeneratorRuntime.mark((function n(){var i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,console.log(t.loadingEnd),!t.loadingEnd){n.next=4;break}return n.abrupt("return");case 4:return sessionStorage.shopListID=t.id,n.next=7,t.$api.WMC.getShopsDatas({offset:e,limit:t.limit,term_id:t.id,latitude:t.latitude,longitude:t.longitude});case 7:if(i=n.sent,0!==i.data.code||!i.data.data.length){n.next=18;break}return o=[].concat(Object(c["a"])(t.shop),Object(c["a"])(i.data.data)),o=o.filter((function(e,t){var n=[];return o.forEach((function(e){n.push(e.id)})),n.indexOf(e.id)===t})),t.shop=o,t.page=parseInt(e)+parseInt(t.limit),sessionStorage.resShopDatas=JSON.stringify(t.shop),sessionStorage.resShopPage=JSON.stringify(t.page),n.abrupt("return",!0);case 18:return t.loadingEnd=!0,t.$Message.warning({content:"已到底",background:!0,duration:4,closable:!1}),n.abrupt("return",!1);case 21:n.next=26;break;case 23:n.prev=23,n.t0=n["catch"](0),t.$Message.error({content:n.t0,duration:4,closable:!1,background:!0});case 26:case"end":return n.stop()}}),n,null,[[0,23]])}))),500,2e3)();case 1:case"end":return n.stop()}}),n)})))()},fnThrottle:function(e,t,n){var i=this,o=this.timer,s=(new Date).getTime();return function(){var a=(new Date).getTime();clearTimeout(o),a-s>=n?(e(),s=a):i.timer=setTimeout((function(){e()}),t)}},pageInit:function(){this.shop=[],this.page=0,this.limit=10},changeVideoUrl:function(e){this.$emit("changeVideoUrl",e)}},mounted:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.addEventListener("scroll",e.handleScroll),n=JSON.parse(sessionStorage.getItem("isAddressState")),!n&&sessionStorage.getItem("resShopDatas")?e.shop=JSON.parse(sessionStorage.getItem("resShopDatas")):e.getVideoDatasByPage(0);case 3:case"end":return t.stop()}}),t)})))()}},S=m,b=(n("1ad1"),Object(g["a"])(S,a,r,!1,null,"1a824d25",null)),y=b.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input_video"},[n("video",{ref:"video_content",staticClass:"index_video",staticStyle:{"object-fit":"fill"},attrs:{poster:e.poster,id:"video_content","webkit-playsinline":"true",playsinline:"true","x5-playsinline":"true","x-webkit-airplay":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true","x5-video-ignore-metadata":"true","x5-video-orientation":"portraint",preload:"preload",autoplay:"",controls:"",src:e.src,type:'video/mp4; codecs="avc1.4D401E, mp4a.40.2"'}})])},w=[],C={name:"BusImg",props:{sources_src:{type:String,default:function(){return""}},poster:{type:String,default:function(){return""}},allScreen:{type:Boolean,default:function(){return!1}}},data:function(){return{fullScreenStyle:"",scrollToTop:0}},computed:{src:function(){return this.sources_src},videoPoster:function(){return this.poster}},methods:{videoFullScreen:function(){this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.$refs.video_content.style.height=this.height+"px",this.$refs.video_content.style.width="100%",this.$refs.video_content.style.position="relative",document.getElementById("header").style.display="none",this.$refs.video_content.style.zIndex="10000"},videoFull70Screen:function(){this.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.height=.7*this.height,this.$refs.video_content.style.height=this.height+"px",this.$refs.video_content.style.width="100%",this.$refs.video_content.style.position="relative",document.getElementById("header").style.display="none",this.$refs.video_content.style.zIndex="10000"},videoEvent:function(){var e=this,t=this.$refs.video_content;t.addEventListener("ended",(function(){e.videoFull70Screen(),e.backTop()})),t.addEventListener("play",(function(){console.log("开始播放"),console.log(e.allScreen),e.allScreen?e.videoFullScreen():e.videoFull70Screen()})),t.addEventListener("canplay",(function(){console.log("准备就绪"),console.log(e.$refs.video_content),e.backTop(),e.$refs.video_content.play()}))},backTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,this.$refs.video_content.scrollTop=0}},mounted:function(){this.videoEvent(),this.videoFull70Screen()}},x=C,E=(n("eba9"),Object(g["a"])(x,D,w,!1,null,null,null)),k=E.exports,N={name:"list",components:{homeHeader:s["a"],listWrapper:y,videoPlayer:k},data:function(){return{title:"",id:"",currentDatas:{},location:null,isWeixinState:!1,videoUrl:"",videoImg:"",allScreen:!1}},methods:{webVAl:function(){var e=navigator.userAgent.toLowerCase();this.isWeixinState=-1!=e.indexOf("micromessenger")},changeVideoUrl:function(e){console.log(e),this.videoUrl=e.url,this.videoImg=e.coverUrl,this.allScreen=!0}},created:function(){this.webVAl();var e=this.$route.query,t=e.videoData,n=e.id,i=e.title;t=JSON.parse(t),sessionStorage.getItem("currentPositioning")&&(this.currentDatas=JSON.parse(sessionStorage.getItem("currentPositioning"))),console.log(this.currentDatas),this.videoUrl=t.url,this.videoImg=t.coverUrl,this.title=i,this.id=n}},A=N,Q=(n("95bd"),Object(g["a"])(A,i,o,!1,null,null,null));t["default"]=Q.exports},a5d8:function(e,t,n){"use strict";var i=n("f8a3"),o=n.n(i);o.a},eba9:function(e,t,n){"use strict";var i=n("06d4"),o=n.n(i);o.a},f8a3:function(e,t,n){},fe73:function(e,t){e.exports="data:image/png;base64,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"}}]);