(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0075":function(e,t,r){"use strict";var a=r("1b02"),n=r.n(a);n.a},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"1b02":function(e,t,r){},"3ef4":function(e,t,r){},5574:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("4de4"),r("b680"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("5f5b"),o=r("b1e0"),s=(r("4989"),r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)}),i=[],c=(r("034f"),r("2877")),u={},l=Object(c["a"])(u,s,i,!1,null,null,null),p=l.exports,m=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("HomeComponent")],1)},f=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("div",{staticClass:"container"},[r("h1",[e._v("Products Available")]),r("br"),e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.success))]):e._e(),r("div",{staticClass:"row"},e._l(e.products,(function(t,a){return r("div",{key:t._id,staticClass:"col-md-4 bcard",attrs:{item:t,index:a}},[r("div",{staticClass:"card",staticStyle:{width:"18rem"}},[r("div",{staticClass:"card-header"},[r("button",{staticStyle:{float:"left",border:"none",background:"white",margin:"2px"},on:{click:function(r){return e.likeProduct(t._id,t.likes,t.name)}}},[r("b-icon-heart-fill",{staticClass:"like",staticStyle:{color:"red"},attrs:{animation:"throb"}})],1),r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.likes))]),r("h3",[r("strong",[e._v(e._s(t.name))])])]),r("ul",{staticClass:"list-group list-group-flush"},[r("li",{staticClass:"list-group-item"},[r("strong",[r("span",{staticStyle:{"font-size":"18px","font-weight":"800"}},[e._v("Category: "+e._s(t.category))])])]),r("li",{staticClass:"list-group-item"},[e._v(e._s(t.description))]),r("li",{staticClass:"list-group-item"},[r("strong",[r("span",{staticStyle:{"font-size":"16px"}},[e._v("Price: "+e._s(e._f("currency")(t.price)))])])]),r("li",{staticClass:"list-group-item"},[r("strong",[r("span",{staticStyle:{"font-size":"15px"}},[e._v("Quantity Remains: "+e._s(t.quantity))])])]),r("li",{staticClass:"list-group-item"},[r("strong",[r("span",{staticStyle:{"font-size":"15px"}},[e._v("Likedby: "+e._s(t.likedBy.toString()))])])])]),r("div",[r("button",{staticClass:"btn btn-warning",staticStyle:{float:"left",margin:"4px","margin-left":"50px"},attrs:{id:"editbtn"},on:{click:function(r){return e.editProduct(t._id)}}},[r("b-icon-pencil-square",{staticClass:"icons"}),e._v(" Edit ")],1),r("button",{staticClass:"btn btn-danger",staticStyle:{float:"left",margin:"4px","margin-left":"10px"},on:{click:function(r){return e.deleteProduct(t._id)}}},[r("b-icon-trash",{staticClass:"icons"}),e._v(" Delete ")],1)])])])})),0)],1)],1)},g=[],b=(r("96cf"),r("1da1")),h=(r("a4d3"),r("e01a"),r("d81d"),r("b0c0"),r("5530")),y=r("d4ec"),w=r("bee2"),D=r("bc3a"),_=r.n(D),x="api/products/",k=function(){function e(){Object(y["a"])(this,e)}return Object(w["a"])(e,null,[{key:"getProducts",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get(x,{headers:{token:sessionStorage.getItem("token")}});case 3:if(t=e.sent,r=t.data,!t.data.session){e.next=7;break}return e.abrupt("return",t);case 7:return e.abrupt("return",r.map((function(e){return Object(h["a"])(Object(h["a"])({},e),{},{created_dt:new Date(e.created_dt)})})));case 10:return e.prev=10,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"insertProduct",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("".concat(x,"insert"),{name:t.name,category:t.category,price:t.price,quantity:t.quantity,description:t.description},{headers:{token:sessionStorage.getItem("token")}});case 3:return r=e.sent,a=r.data,console.log(a),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getProductById",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.get("".concat(x).concat(t),{headers:{token:sessionStorage.getItem("token")}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"editProduct",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.patch("".concat(x,"/edit/").concat(t),{name:r.name,category:r.category,price:r.price,quantity:r.quantity,description:r.description},{headers:{token:sessionStorage.getItem("token")}});case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"likeProduct",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,r){var a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=r+1,e.next=4,_.a.patch("".concat(x,"like/").concat(t),{likes:a},{headers:{token:sessionStorage.getItem("token")}});case 4:return n=e.sent,o=n.data,e.abrupt("return",o);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"deleteProduct",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.delete("".concat(x).concat(t),{headers:{token:sessionStorage.getItem("token")}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),C=k,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("link",{attrs:{rel:"stylesheet",href:"https://bootswatch.com/4/pulse/bootstrap.min.css"}}),r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[r("b-navbar-brand",{attrs:{href:"#"}},[e._v("Product App")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"/"}},[e._v("Home")]),r("b-nav-item",{attrs:{href:"/AddProduct"}},[e._v("Add Products")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[r("b-badge",{staticClass:"logout",attrs:{pill:"",variant:"success"}},[r("b-icon-person-fill",{staticClass:"icons"}),e._v(" "+e._s(e.decoded.name)+" ")],1)]},proxy:!0}])},[r("b-dropdown-item",{on:{click:e.logout}},[e._v("Sign Out")])],1)],1)],1)],1)],1)},O=[],S={data:function(){return{decoded:{name:"",email:""}}},methods:{logout:function(){localStorage.clear(),sessionStorage.clear(),this.$router.push("/login")}},created:function(){var e=sessionStorage.getItem("token"),t=this.$jwt.decode(e);this.decoded.name=t.name,this.decoded.email=t.email}},R=S,j=(r("6b99"),Object(c["a"])(R,P,O,!1,null,"5a3b3908",null)),$=j.exports,q={name:"HomeComponent",components:{Header:$},data:function(){return{products:[],error:"",success:"",search:""}},methods:{deleteProduct:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!window.confirm("Are you sure to delete")){r.next=11;break}return r.next=3,C.deleteProduct(e);case 3:if(a=r.sent,!a.success){r.next=10;break}return t.success=a.success,t.error="",r.next=9,C.getProducts();case 9:t.products=r.sent;case 10:a.error&&(t.error=a.error,t.success="");case 11:case"end":return r.stop()}}),r)})))()},editProduct:function(e){return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Xe.push({path:"/editproduct/".concat(e)});case 1:case"end":return t.stop()}}),t)})))()},likeProduct:function(e,t,r){var a=this;return Object(b["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C.likeProduct(e,t);case 3:if(o=n.sent,!o.success){n.next=9;break}return window.alert("Suceesfully liked for "+r),n.next=8,C.getProducts();case 8:a.products=n.sent;case 9:o.error&&window.alert("you are already liked for "+r),o.session&&a.$router.push("/session"),n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](0),a.error=n.t0.message;case 16:case"end":return n.stop()}}),n,null,[[0,13]])})))()}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return localStorage.getItem("tokenvariable"),null===sessionStorage.getItem("token")&&(e.$emit("session","Oops...! Session Expired"),Xe.push({path:"/login"})),t.prev=2,t.next=5,C.getProducts();case 5:r=t.sent,r.session&&e.$router.push("/session"),e.products=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),e.error=t.t0.message;case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}},E=q,A=(r("0075"),Object(c["a"])(E,v,g,!1,null,"646f6eec",null)),I=A.exports,U={name:"Home",components:{HomeComponent:I}},H=U,T=Object(c["a"])(H,d,f,!1,null,"04c6dd9e",null),L=T.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AddProductComponent")],1)},z=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("b-container",[r("h1",[e._v("ADD PRODUCT")]),r("div",[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.success))]):e._e(),r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter Product Name"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("b-form-group",{attrs:{id:"input-group-2"}},[r("b-form-input",{attrs:{id:"category",required:"",placeholder:"Enter Category"},model:{value:e.formData.category,callback:function(t){e.$set(e.formData,"category",t)},expression:"formData.category"}})],1),r("b-form-group",{attrs:{id:"input-group-3"}},[r("b-form-input",{attrs:{id:"price",type:"number",required:"",placeholder:"Enter Price"},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),r("b-form-group",{attrs:{id:"input-group-4"}},[r("b-form-input",{attrs:{id:"quantity",type:"number",required:"",placeholder:"Enter Quantity"},model:{value:e.formData.quantity,callback:function(t){e.$set(e.formData,"quantity",t)},expression:"formData.quantity"}})],1),r("b-form-group",{attrs:{id:"input-group-5"}},[r("b-form-textarea",{attrs:{id:"description",placeholder:"Description"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),r("b-button",{attrs:{disabled:e.formData.name.length<3||e.formData.category.length<3||e.formData.price<1||e.formData.quantity<1,type:"submit",variant:"primary"}},[e._v(" Submit ")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)])],1)},B=[],Q={name:"AddProductComponent",components:{Header:$},data:function(){return{formData:{name:"",category:"",price:"",quantity:"",description:""},error:"",success:""}},methods:{onSubmit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,C.insertProduct(t.formData);case 4:a=r.sent,a.success&&(t.success=a.success,t.error="",t.formData.name="",t.formData.category="",t.formData.price="",t.formData.quantity="",t.formData.description=""),a.error&&(t.error=a.error,t.success=""),a.session&&t.$router.push({path:"/session"}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),t.error=r.t0.message;case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},onReset:function(e){var t=this;e.preventDefault(),this.formData.name="",this.formData.category="",this.formData.price="",this.formData.quantity="",this.formData.description="",this.error="",this.success="",this.show=!1,this.$nextTick((function(){t.show=!0}))}},created:function(){localStorage.getItem("tokenvariable"),null===sessionStorage.getItem("token")&&(this.$emit("session","Oops...! Session Expired"),this.$router.push({path:"/login"}))}},F=Q,J=(r("cae6"),Object(c["a"])(F,M,B,!1,null,"66943414",null)),G=J.exports,K={name:"AddProduct",components:{AddProductComponent:G}},V=K,W=Object(c["a"])(V,N,z,!1,null,"790ffe00",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("EditProductComponent")],1)},Z=[],ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("Header"),r("div",[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.success))]):e._e(),r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Enter Product Name"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("b-form-group",{attrs:{id:"input-group-2"}},[r("b-form-input",{attrs:{id:"category",required:"",placeholder:"Enter Category"},model:{value:e.formData.category,callback:function(t){e.$set(e.formData,"category",t)},expression:"formData.category"}})],1),r("b-form-group",{attrs:{id:"input-group-3"}},[r("b-form-input",{attrs:{id:"price",type:"number",required:"",placeholder:"Enter Price"},model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),r("b-form-group",{attrs:{id:"input-group-4"}},[r("b-form-input",{attrs:{id:"quantity",type:"number",required:"",placeholder:"Enter Quantity"},model:{value:e.formData.quantity,callback:function(t){e.$set(e.formData,"quantity",t)},expression:"formData.quantity"}})],1),r("b-form-group",{attrs:{id:"input-group-5"}},[r("b-form-textarea",{attrs:{id:"description",placeholder:"Description"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),r("b-button",{attrs:{disabled:e.formData.name.length<1||e.formData.category.length<3||e.formData.price<1||e.formData.quantity<1,type:"submit",variant:"primary"}},[e._v(" Submit ")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1)},te=[],re={name:"EditProductComponent",components:{Header:$},data:function(){return{id:"",formData:{name:"",category:"",price:"",quantity:"",description:""},error:"",success:""}},created:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.id=e.$route.params.id,t.next=3,C.getProductById(e.id);case 3:r=t.sent,r.session&&e.$router.push({path:"/session"}),e.formData.name=r.name,e.formData.category=r.category,e.formData.price=r.price,e.formData.quantity=r.quantity,e.formData.description=r.description;case 10:case"end":return t.stop()}}),t)})))()},methods:{onSubmit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,C.editProduct(t.id,t.formData);case 4:a=r.sent,console.log(a),a.success&&(t.success=a.success,t.error="",t.formData.name="",t.formData.category="",t.formData.price=0,t.formData.quantity=0,t.formData.description="",setTimeout((function(){Xe.push({path:"/"})}),2e3)),a.error&&(t.error=a.error,t.success=""),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](1),t.error=r.t0.message;case 13:case"end":return r.stop()}}),r,null,[[1,10]])})))()},onReset:function(e){var t=this;e.preventDefault(),this.formData.name="",this.formData.category="",this.formData.price=0,this.formData.quantity=0,this.formData.description="",this.error="",this.success="",this.show=!1,this.$nextTick((function(){t.show=!0}))}}},ae=re,ne=(r("f330"),Object(c["a"])(ae,ee,te,!1,null,"9a377754",null)),oe=ne.exports,se={name:"EditProduct",components:{EditProductComponent:oe}},ie=se,ce=Object(c["a"])(ie,Y,Z,!1,null,"16497e2a",null),ue=ce.exports,le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("RegisterUserComponent")},pe=[],me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("div",{staticClass:"login-form"},[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.success))]):e._e(),r("form",{on:{submit:e.onSubmit}},[r("h1",{staticClass:"text-center"},[e._v(" Register ")]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Name",required:"required"},domProps:{value:e.formData.name},on:{input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",required:"required"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",minlength:"6",required:"required"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",disabled:e.formData.email.length<5||e.formData.name.length<3||e.formData.password.length<6}},[e._v("Signup")])]),r("a",{attrs:{href:"/login",id:"login"}},[e._v("Login")])])],1)])},de=[],fe="api/users/",ve=function(){function e(){Object(y["a"])(this,e)}return Object(w["a"])(e,null,[{key:"registerUser",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("".concat(fe,"register"),{name:t.name,email:t.email,password:t.password});case 3:return r=e.sent,a=r.data,console.log(r),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"loginUser",value:function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("".concat(fe,"login"),{email:t.email,password:t.password});case 3:return r=e.sent,a=r.data,localStorage.setItem("tokenvariable","token"),sessionStorage.setItem("token",r.data.token),e.abrupt("return",a);case 10:return e.prev=10,e.t0=e["catch"](0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),ge=ve,be={name:"RegisterUserComponent",data:function(){return{formData:{name:"",email:"",password:""},success:"",error:""}},methods:{onSubmit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,ge.registerUser(t.formData);case 4:a=r.sent,a.success&&(t.success=a.success,t.error="",t.formData.name="",t.formData.email="",t.formData.password="",setTimeout((function(){Xe.push({path:"/login"})}),2e3)),a.error&&(t.error=a.error,t.success=""),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),t.error=r.t0.message;case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},he=be,ye=(r("d880"),Object(c["a"])(he,me,de,!1,null,null,null)),we=ye.exports,De={name:"RegisterUser",components:{RegisterUserComponent:we}},_e=De,xe=Object(c["a"])(_e,le,pe,!1,null,null,null),ke=xe.exports,Ce=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LoginUserComponent")},Pe=[],Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",[r("div",{staticClass:"login-form"},[e.error?r("b-alert",{attrs:{show:"",variant:"danger"}},[e._v(e._s(e.error))]):e._e(),e.success?r("b-alert",{attrs:{show:"",variant:"success"}},[e._v(e._s(e.success))]):e._e(),r("form",{on:{submit:e.onSubmit}},[r("h1",{staticClass:"text-center"},[e._v(" Login ")]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email",required:"required"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:"required"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("a",{attrs:{href:"/register",id:"signup"}},[e._v("Create an account")]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.formData.email.length<5||e.formData.password.length<6}},[e._v("Login")])])])],1)])},Se=[],Re={name:"LoginUserComponent",data:function(){return{formData:{email:"",password:""},success:"",error:""}},methods:{onSubmit:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.preventDefault(),r.prev=1,r.next=4,ge.loginUser(t.formData);case 4:a=r.sent,a.success&&(Xe.push({path:"/"}),setTimeout((function(){localStorage.clear(),sessionStorage.clear()}),36e5)),a.error&&(t.error=a.error,t.success=""),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](1),t.error=r.t0;case 12:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}},je=Re,$e=(r("ceeb"),Object(c["a"])(je,Oe,Se,!1,null,null,null)),qe=$e.exports,Ee={name:"LoginUser",components:{LoginUserComponent:qe}},Ae=Ee,Ie=Object(c["a"])(Ae,Ce,Pe,!1,null,null,null),Ue=Ie.exports,He=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("AccessDeniedComponent")},Te=[],Le=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"body"},[r("h1",[e._v(" Access Denied... Please login to continue...")]),r("p",[e._v(" Page will automatically redirects to login page in "+e._s(e.timerCount)+"s ")])])},Ne=[],ze={name:"AccessDeniedComponent",data:function(){return{timerCount:5}},watch:{timerCount:{handler:function(e){var t=this;e>0&&setTimeout((function(){t.timerCount--}),1e3),0===this.timerCount&&this.$router.push("/login")},immediate:!0}}},Me=ze,Be=(r("cb96"),Object(c["a"])(Me,Le,Ne,!1,null,"767cdc17",null)),Qe=Be.exports,Fe={name:"AccessDenied",components:{AccessDeniedComponent:Qe}},Je=Fe,Ge=Object(c["a"])(Je,He,Te,!1,null,null,null),Ke=Ge.exports;a["default"].use(m["a"]);var Ve=[{path:"/",name:"Home",component:L},{path:"/addproduct",name:"AddProduct",component:X},{path:"/editproduct/:id",name:"EditProduct",component:ue},{path:"/register",name:"RegisterUser",component:ke},{path:"/login",name:"LoginUser",component:Ue},{path:"/session",name:"Session",component:Ke}],We=new m["a"]({mode:"history",base:"/",routes:Ve}),Xe=We,Ye=r("2f62");a["default"].use(Ye["a"]);var Ze=new Ye["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=r("c051"),tt=r.n(et);a["default"].use(tt.a),a["default"].use(n["a"]),a["default"].use(o["a"]),a["default"].config.productionTip=!1,a["default"].filter("currency",(function(e){return"Rs."+parseFloat(e).toFixed(2)})),new a["default"]({router:Xe,store:Ze,props:["currency"],render:function(e){return e(p)}}).$mount("#app")},"6b99":function(e,t,r){"use strict";var a=r("5574"),n=r.n(a);n.a},"85ec":function(e,t,r){},8875:function(e,t,r){},"89af":function(e,t,r){},b835:function(e,t,r){},cae6:function(e,t,r){"use strict";var a=r("3ef4"),n=r.n(a);n.a},cb96:function(e,t,r){"use strict";var a=r("b835"),n=r.n(a);n.a},ceeb:function(e,t,r){"use strict";var a=r("89af"),n=r.n(a);n.a},d880:function(e,t,r){"use strict";var a=r("e585"),n=r.n(a);n.a},e585:function(e,t,r){},f330:function(e,t,r){"use strict";var a=r("8875"),n=r.n(a);n.a}});
//# sourceMappingURL=app.f4d995e6.js.map