(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{511:function(o,t,e){},534:function(o,t,e){"use strict";e(511)},595:function(o,t,e){"use strict";e.r(t);e(93);var n={name:"GoTop",data:function(){return{show:!1}},computed:{isPost:function(){return"posts"===this.$route.path.slice(1,6)}},mounted:function(){this.hasShow()},methods:{hasShow:function(){var o=this;window.addEventListener("scroll",(function(t){var e=o.getScrollTop();o.show=e>400}))},GoTop:function(){window.scrollTo({top:0,behavior:"smooth"})},getScrollTop:function(){var o;if("undefined"!=typeof window)return window.pageYOffset?o=window.pageYOffset:document.compatMode&&"BackCompat"!=document.compatMode?o=document.documentElement.scrollTop:document.body&&(o=document.body.scrollTop),o}}},s=(e(534),e(65)),i=Object(s.a)(n,(function(){var o=this.$createElement,t=this._self._c||o;return t("el-button",{directives:[{name:"show",rawName:"v-show",value:!this.isPost,expression:"!isPost"}],staticClass:"gotop-btn",class:{show:this.show},attrs:{type:"primary",circle:""},on:{click:this.GoTop}},[t("i",{staticClass:"el-icon-arrow-up"})])}),[],!1,null,"3e977312",null);t.default=i.exports}}]);