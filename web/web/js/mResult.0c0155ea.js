(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mResult"],{"94a0":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._l(e.result.slice((e.currentPage-1)*e.pagesize,e.currentPage*e.pagesize),(function(t,r){return n("van-card",{key:r,attrs:{desc:t.introduction,title:t.title,thumb:t.cover},on:{click:function(n){return e.linkTo(t._id)}},scopedSlots:e._u([{key:"tags",fn:function(){return e._l(t.tags,(function(t,r){return n("van-tag",{key:r,attrs:{plain:"",type:"danger"}},[e._v(e._s(t))])}))},proxy:!0},{key:"footer",fn:function(){return[e._v(" "+e._s(t.date)+" ")]},proxy:!0}],null,!0)})})),n("van-pagination",{attrs:{"items-per-page":4,"total-items":e.result.length,"show-page-size":3,"force-ellipses":""},on:{change:e.handleCurrentChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],2)},a=[],u={data:function(){return{result:[],currentPage:1,pagesize:4}},methods:{fetch:function(){var e=decodeURIComponent(this.$route.query.obj);this.result=JSON.parse(e)},linkTo:function(e){this.$router.push("/mArticle/".concat(e))},handleCurrentChange:function(e){this.currentPage=e}},created:function(){this.fetch()}},c=u,o=n("2877"),i=Object(o["a"])(c,r,a,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=mResult.0c0155ea.js.map