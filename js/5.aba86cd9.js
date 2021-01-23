(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{4177:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"row justify-start text-h6"},[n("div",{staticClass:"self-center"},[t._t("head")],2)])]),n("div",[n("div",{staticClass:"row justify-evenly text-subtitle1"},[t._t("body")],2)])])},a=[],c={name:"evenly-article",data:function(){return{}}},o=c,u=n("2877"),s=Object(u["a"])(o,r,a,!1,null,null,null);e["a"]=s.exports},c6f7:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{attrs:{padding:""}},[n("EvenlyArticle",{scopedSlots:t._u([{key:"head",fn:function(){return[t._v("ログインページ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"col-6"},[n("q-input",{attrs:{type:"password",filled:"",label:"password"},model:{value:t.loginKey,callback:function(e){t.loginKey=e},expression:"loginKey"}})],1)]},proxy:!0}])}),n("EvenlyArticle",{scopedSlots:t._u([{key:"body",fn:function(){return[n("div",{staticClass:"submit-key"},[n("q-btn",{attrs:{color:"primary",label:"送信"},on:{click:t.authCheck}})],1)]},proxy:!0}])})],1)},a=[],c=n("967e"),o=n.n(c),u=(n("96cf"),n("fa84")),s=n.n(u),i=n("4177"),h=n("cc01"),p={name:"Login",components:{EvenlyArticle:i["a"]},data:function(){return{loginKey:"",isAuthenticated:!1}},mounted:function(){this.initAuthCheck()},methods:{initAuthCheck:function(){var t=this;return s()(o.a.mark((function e(){var n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.authenticatedCheck();case 2:n=e.sent,n&&(t.isAuthenticated=n,t.toTop());case 4:case"end":return e.stop()}}),e)})))()},authCheck:function(){var t=this;return s()(o.a.mark((function e(){var n,r,a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n={KEY:null},n.KEY=t.loginKey,e.next=5,h["a"].authentication(n);case 5:if(r=e.sent,!r.apiStatus||"ok"!==r.apiStatus.value){e.next=11;break}console.log("OK"),sessionStorage.token=r.data.token,e.next=13;break;case 11:throw console.log("BAD"),new Error;case 13:return e.next=15,t.authenticatedCheck();case 15:a=e.sent,a&&(t.isAuthenticated=a,t.toTop()),e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](0),console.log(e.t0),t.toError401();case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))()},authenticatedCheck:function(){return s()(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(sessionStorage.token){t.next=2;break}return t.abrupt("return",!1);case 2:return e={token:sessionStorage.token},t.next=5,h["a"].checkToken(e);case 5:return n=t.sent,t.abrupt("return",n.apiStatus&&"ok"===n.apiStatus.value);case 7:case"end":return t.stop()}}),t)})))()},toTop:function(){this.$router.push("/")},toError401:function(){console.log("toError401"),this.$router.push({path:"auth_error"})}}},l=p,f=n("2877"),d=n("9989"),v=n("27f9"),k=n("9c40"),w=n("eebe"),y=n.n(w),b=Object(f["a"])(l,r,a,!1,null,null,null);e["default"]=b.exports;y()(b,"components",{QPage:d["a"],QInput:v["a"],QBtn:k["a"]})},cc01:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return y}));var r=n("967e"),a=n.n(r),c=(n("96cf"),n("fa84")),o=n.n(c),u=n("fc74"),s=n.n(u),i=n("c47a"),h=n.n(i),p=n("b383"),l=n.n(p),f=n("d3ec"),d=n.n(f),v=function t(){s()(this,t)};h()(v,"makeGetUrl",(function(t,e){return t+(d.a.empty(e)?"":"?".concat(l.a.stringify(e)))})),h()(v,"httpHeaders",(function(){return{"X-Requested-With":"csrf","Content-Type":"application/json"}})),h()(v,"toJson",(function(t){return t.json()})),h()(v,"fetchGet",function(){var t=o()(a.a.mark((function t(e){var n,r=arguments;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.prev=1,t.next=4,window.fetch(v.makeGetUrl(e,n),{method:"GET",headers:v.httpHeaders()});case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t["catch"](1),console.log(t.t0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()),h()(v,"fetchPost",function(){var t=o()(a.a.mark((function t(e,n){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.fetch(e,{method:"POST",headers:v.httpHeaders(),body:JSON.stringify(n)});case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}()),h()(v,"fetchPatch",function(){var t=o()(a.a.mark((function t(e,n){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.fetch(e,{method:"PATCH",headers:v.httpHeaders(),body:JSON.stringify(n)});case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e,n){return t.apply(this,arguments)}}()),h()(v,"fetchDelete",function(){var t=o()(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.fetch(e,{method:"DELETE",headers:v.httpHeaders()});case 3:return t.abrupt("return",t.sent);case 6:return t.prev=6,t.t0=t["catch"](0),console.log(t.t0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}());var k={};k.BASE_URL="".concat("https://chousei-api-prod.herokuapp.com","/mng"),k.AUTH_URL="".concat("https://on8ch3z0n8.execute-api.ap-northeast-1.amazonaws.com/dev");var w={getUser:function(){return v.fetchGet("".concat(k.BASE_URL,"/user")).then((function(t){return v.toJson(t)}))},getUserSetDate:function(t){return v.fetchGet("".concat(k.BASE_URL,"/date/user"),t).then((function(t){return v.toJson(t)}))},getCandidateDate:function(t){return v.fetchGet("".concat(k.BASE_URL,"/date/month/").concat(t)).then((function(t){return v.toJson(t)}))},patchCandidateDateStatus:function(t,e){return v.fetchPatch("".concat(k.BASE_URL,"/date/").concat(t),e)},getLotteryStatus:function(t){return v.fetchGet("".concat(k.BASE_URL,"/lotteryStatus/").concat(t)).then((function(t){return v.toJson(t)}))},getApplicationDate:function(t){return v.fetchGet("".concat(k.BASE_URL,"/date/applicationDate/").concat(t)).then((function(t){return v.toJson(t)}))}},y={authentication:function(t){return v.fetchPost("".concat(k.AUTH_URL,"/auth-api/authentication"),t).then((function(t){return v.toJson(t)}))},checkToken:function(t){return v.fetchPost("".concat(k.AUTH_URL,"/auth-api/check-token"),t).then((function(t){return v.toJson(t)}))}}}}]);