(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Article"],{1877:function(t,e,n){"use strict";var r=n("add7"),o=n.n(r);o.a},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=E(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",m="completed",p={};function d(){}function g(){}function v(){}var y={};y[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,i)&&(y=x);var L=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function E(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===o)throw i;return S()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?m:h,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=m,n.method="throw",n.arg=u.arg)}}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function C(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=L.constructor=v,v.constructor=g,v[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(L),L[c]="Generator",L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},add7:function(t,e,n){},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";r&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},c824:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}}),n("div",{staticClass:"comment"},[n("van-field",{attrs:{rows:"1",autosize:"",label:"留言",type:"textarea",placeholder:"请输入留言"},model:{value:t.comment.content,callback:function(e){t.$set(t.comment,"content",e)},expression:"comment.content"}}),n("van-button",{attrs:{round:"",type:"info",size:"normal"},on:{click:t.addComment}},[t._v("发布")])],1),n("div",{staticClass:"commentList"},t._l(t.commentList.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),(function(t,e){return n("commentitem",{key:e,attrs:{avatar:t.uid.avatar,nickname:t.uid.nickname,content:t.content,date:t.date}})})),1),n("van-pagination",{attrs:{"items-per-page":5,"total-items":t.commentList.length,"show-page-size":3,"force-ellipses":""},on:{change:t.handleCurrentChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},o=[],i=(n("b0c0"),n("d3b7"),n("25f0"),n("96cf"),n("1da1")),a={props:{id:{}},data:function(){return{currentPage:1,pagesize:5,content:"",commentList:[],article:{comment:"",tags:[]},comment:{},nowTime:""}},methods:{formatDateTime:function(t){var e=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var r=t.getDate();r=r<10?"0"+r:r;var o=t.getHours();o=o<10?"0"+o:o;var i=t.getMinutes();i=i<10?"0"+i:i;var a=t.getSeconds();return a=a<10?"0"+a:a,e+"-"+n+"-"+r+" "+o+":"+i+":"+a},fetch:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("article/".concat(t.id));case 2:for(n=e.sent,t.content=n.data.content,t.title=n.data.title,r=0;r<n.data.tagid.length;r++)t.article.tags.push(n.data.tagid[r].name);case 6:case"end":return e.stop()}}),e)})))()},getCommentList:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("comment/list/".concat(t.id));case 2:return n=e.sent,t.commentList=n.data,t.article.comment=t.commentList.length.toString(),e.next=7,t.$http.put("article/edit/".concat(t.id),t.article);case 7:e.sent;case 8:case"end":return e.stop()}}),e)})))()},handleCurrentChange:function(t){this.currentPage=t},addComment:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),!n){e.next=18;break}if(!t.comment.content){e.next=15;break}return t.nowTime=new Date,t.comment.date=t.formatDateTime(t.nowTime),t.comment.aid=t.id,t.comment.title=t.title,t.comment.uid=JSON.parse(localStorage.getItem("userPermission"))._id,e.next=10,t.$http.post("/comment/create",t.comment);case 10:e.sent,t.getCommentList(),t.comment.content="",e.next=16;break;case 15:t.$notify("评论不能为空");case 16:e.next=20;break;case 18:t.$notify("请先登录"),t.$router.push("/mLogin");case 20:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetch(),this.getCommentList()}},c=a,u=(n("1877"),n("2877")),s=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=s.exports}}]);
//# sourceMappingURL=Article.36ee5802.js.map