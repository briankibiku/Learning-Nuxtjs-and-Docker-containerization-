(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6,7],{315:function(t,n,e){var content=e(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("364e4840",content,!0,{sourceMap:!1})},316:function(t,n,e){"use strict";e(315)},317:function(t,n,e){var r=e(82)(!1);r.push([t.i,"a.nuxt-link-active{font-weight:700;color:#0ff}a.nuxt-link-exact-active{color:#00c58e}.nuxt-link-prefetched{color:#ff4500}",""]),t.exports=r},318:function(t,n,e){"use strict";e.r(n);e(316);var r=e(56),component=Object(r.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[n("b-navbar-brand",[n("img",{staticClass:"d-inline-block align-text-top",attrs:{src:"https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n",alt:"",width:"140",height:"60"}})])],1)}),[],!1,null,null,null);n.default=component.exports},325:function(t,n,e){"use strict";e.r(n);var r={props:{cardelement:{type:Object,default:function(){}}}},c=e(56),component=Object(c.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{padding:"0px 20px 0px 20px"}},[e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("img",{staticClass:"card-img-top",attrs:{src:t.cardelement.image}}),t._v(" "),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.cardelement.title))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n        "+t._s(t.cardelement.description)+"\n      ")]),t._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v(t._s(t.cardelement.continent))])])])])}),[],!1,null,null,null);n.default=component.exports},337:function(t,n,e){"use strict";e.r(n);var r=e(27),c=(e(64),e(39),e(1),e(34),{data:function(){return{mountains:[],show:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))},fetch:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.nuxtjs.dev/mountains").then((function(t){return t.json()}));case 3:t.mountains=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),print("An error occured while fetching");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()}))}),l=c,o=e(56),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Navbar"),t._v(" "),e("br"),t._v(" "),t.show?e("a",{staticClass:"btn btn-primary",staticStyle:{"padding-left":"20px"},on:{click:function(n){t.show=!1}}},[t._v("Hide Mountains")]):t._e(),t._v(" "),t.show?e("div",{staticClass:"row",staticStyle:{padding:"0px 20px 0px 20px"}},[t.$fetchState.pending?e("p",[e("span",{staticClass:"spinner-border m-5 visually-hidden"})]):t.$fetchState.error?e("p",[t._v("An error occurred :(")]):t._e(),t._v(" "),t._l(t.mountains,(function(t){return e("Mountains",{key:t.title,attrs:{cardelement:t}})}))],2):t._e(),t._v(" "),t.show?t._e():e("a",{staticClass:"btn btn-primary",on:{click:function(n){t.show=!0}}},[t._v("View Mountains")])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navbar:e(318).default,Mountains:e(325).default})}}]);