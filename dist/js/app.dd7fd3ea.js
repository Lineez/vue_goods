(function(){"use strict";var e={169:function(e,o,t){var i=t(963),r=t(252);function n(e,o,t,i,n,l){const d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("main",null,[(0,r.Wm)(d)])}var l={components:{}},d=t(744);const s=(0,d.Z)(l,[["render",n]]);var a=s,c=t(577);const u={for:"field-name"},f=["id","placeholder"],m=["id","placeholder"],p={key:2,class:"form-goods__errors"};function g(e,o,t,n,l,d){return(0,r.wg)(),(0,r.iD)("fieldset",{class:(0,c.C_)({_required:t.field.isRequired,_error:this.error})},[(0,r._)("label",u,(0,c.zw)(t.field.name),1),t.field.isTextarea?(0,r.wy)(((0,r.wg)(),(0,r.iD)("textarea",{key:1,id:t.field.id,placeholder:t.field.placeholder,"onUpdate:modelValue":o[2]||(o[2]=e=>l.value=e),type:"text"},null,8,m)),[[i.nr,l.value]]):(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{key:0,id:t.field.id,placeholder:t.field.placeholder,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value=e),onInput:o[1]||(o[1]=(...e)=>d.validation&&d.validation(...e)),type:"text"},null,40,f)),[[i.nr,l.value]]),this.error?((0,r.wg)(),(0,r.iD)("span",p,"Поле является обязательным")):(0,r.kq)("",!0)],2)}var v={name:"form-field",components:{},data(){return{value:"",error:!1}},props:{field:{type:Object,required:!0}},methods:{validation(e){this.error=!e.target.value}}};const h=(0,d.Z)(v,[["render",g]]);var _=h,w=[_],y={name:"focus",mounted(e){e.focus()}},b={name:"intersection",mounted(e,o){function t(e){e[0].isIntersecting&&o.value()}new IntersectionObserver(t.bind(this),{rootMargin:"0px",threshold:1}).observe(e)}},C=[y,b],V=t(119);const F={class:"goods"},k={class:"goods__head"},x=(0,r._)("h1",{class:"goods__title"},"Добавление товара",-1),O={class:"goods__select"},j=["value"],q={class:"goods__body"},D={class:"goods__view view-goods"};function G(e,o,t,n,l,d){const s=(0,r.up)("goods-form"),a=(0,r.up)("goods-list");return(0,r.wg)(),(0,r.iD)("section",F,[(0,r._)("div",k,[x,(0,r._)("div",O,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.selectFilter=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.filters,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.value,value:e.value},(0,c.zw)(e.name),9,j)))),128))],512),[[i.bM,d.selectFilter]])])]),(0,r._)("div",q,[(0,r.Wm)(s),(0,r._)("div",D,[(0,r.Wm)(a,{goods:e.sortedGoods},null,8,["goods"])])])])}const S={class:"goods__form form-goods"},T=["disabled"];function H(e,o,t,n,l,d){const s=(0,r.up)("goods-field");return(0,r.wg)(),(0,r.iD)("form",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.form.fields,((e,o)=>((0,r.wg)(),(0,r.j4)(s,{key:e.id,field:e,modelValue:l.form.fields[o].value,"onUpdate:modelValue":e=>l.form.fields[o].value=e,onFormValidation:d.formValidation},null,8,["field","modelValue","onUpdate:modelValue","onFormValidation"])))),128)),(0,r._)("button",{onClick:o[0]||(o[0]=(0,i.iM)(((...e)=>d.addGood&&d.addGood(...e)),["prevent"])),class:(0,c.C_)(["form-goods__submit",{_success:l.form.isFormValid}]),disabled:!l.form.isFormValid,type:"submit"}," Добавить товар ",10,T)])}const Z=["for"],I=["value","id","placeholder","type"],M=["value","id","placeholder","type"],B={key:2,class:"form-goods__errors"};function E(e,o,t,i,n,l){return(0,r.wg)(),(0,r.iD)("fieldset",{class:(0,c.C_)(["form-goods__field",{_required:t.field.isRequired,_error:!t.field.isValid&&t.field.isBlur}])},[(0,r._)("label",{for:t.field.id},(0,c.zw)(t.field.name),9,Z),t.field.isTextarea?((0,r.wg)(),(0,r.iD)("textarea",{key:1,onInput:o[1]||(o[1]=e=>l.checkField(e,t.field)),value:t.modelValue,id:t.field.id,placeholder:t.field.placeholder,type:t.field.fieldType},null,40,M)):((0,r.wg)(),(0,r.iD)("input",{key:0,onInput:o[0]||(o[0]=e=>l.checkField(e,t.field)),value:t.modelValue,id:t.field.id,placeholder:t.field.placeholder,type:t.field.fieldType},null,40,I)),!t.field.isValid&&t.field.isBlur?((0,r.wg)(),(0,r.iD)("span",B,(0,c.zw)(t.field.errors.required.text),1)):(0,r.kq)("",!0)],2)}var P={methods:{checkField(e,o){this.$emit("update:modelValue",e.target.value),e.target.value?(o.isValid=!0,o.isBlur=!1):(o.isValid=!1,o.isBlur=!0),this.$emit("formValidation")}},props:{modelValue:String,field:{type:Object,required:!0}}};const R=(0,d.Z)(P,[["render",E]]);var z=R,A=t(907),L={components:{GoodsField:z},data(){return{form:{fields:{name:{id:1,name:"Наименование товара",placeholder:"Введите наименование товара",errors:{required:{text:"Поле является обязательным"}},fieldType:"text",isRequired:!0,isValid:!1,isBlur:!1,value:""},content:{id:2,name:"Описание товара",placeholder:"Введите описание товара",fieldType:"text",isTextarea:!0,isRequired:!1,value:""},img:{id:3,name:"Ссылка на изображение товара",placeholder:"Введите ссылку",errors:{required:{text:"Поле является обязательным"}},fieldType:"text",isRequired:!0,isValid:!1,isBlur:!1,value:""},price:{id:4,name:"Цена товара",placeholder:"Введите цену",errors:{required:{text:"Поле является обязательным"}},fieldType:"number",isRequired:!0,isValid:!1,isBlur:!1,value:""}},isFormValid:!1}}},methods:{addGood(){const e={id:Date.now(),url:"javascript:void(0);",name:this.form.fields.name.value,content:this.form.fields.content.value,img:this.form.fields.img.value,price:this.form.fields.price.value};this.setGood(e),this.clearForm()},clearForm(){for(const e of Object.values(this.form.fields))"isValid"in e&&(e.isValid=!1),"isBlur"in e&&(e.isBlur=!1),e.value="";this.form.isFormValid=!1},formValidation(){for(const e of Object.values(this.form.fields))if(e.isRequired){if(!e.isValid)return void(this.form.isFormValid=!1);this.form.isFormValid=!0}},...(0,A.OI)({setGood:"goods/setGood"})}};const N=(0,d.Z)(L,[["render",H]]);var U=N;const $={key:1};function W(e,o,t,n,l,d){const s=(0,r.up)("good-item");return(0,r.wg)(),(0,r.j4)(i.W3,{name:"list"},{default:(0,r.w5)((()=>[t.goods.length>0?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(t.goods,(e=>((0,r.wg)(),(0,r.j4)(s,{key:e.id,good:e},null,8,["good"])))),128)):((0,r.wg)(),(0,r.iD)("div",$,"Loading..."))])),_:1})}const J=["href"],K={class:"view-goods__img"},Y=["src","alt"],Q={class:"view-goods__info info-goods"},X={class:"info-goods__name"},ee={class:"info-goods__desc"},oe={class:"info-goods__price"};function te(e,o,t,i,n,l){const d=(0,r.up)("remove-svg");return(0,r.wg)(),(0,r.iD)("a",{href:t.good.url,class:"view-goods__item"},[(0,r._)("div",K,[(0,r._)("img",{src:t.good.img,alt:t.good.name},null,8,Y)]),(0,r._)("div",Q,[(0,r._)("div",X,(0,c.zw)(t.good.name),1),(0,r._)("div",ee,(0,c.zw)(t.good.content),1),(0,r._)("div",oe,(0,c.zw)(t.good.price.toLocaleString("fr"))+" руб. ",1)]),(0,r._)("button",{onClick:o[0]||(o[0]=e=>l.removeGood(t.good)),type:"button",class:"view-goods__remove"},[(0,r.Wm)(d)])],8,J)}const ie={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re=(0,r.uE)('<g clip-path="url(#clip0_4_349)"><path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="currentColor"></path><path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="currentColor"></path><path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="currentColor"></path><path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4_349"><rect width="16" height="16" fill="currentColor"></rect></clipPath></defs>',2),ne=[re];function le(e,o){return(0,r.wg)(),(0,r.iD)("svg",ie,ne)}const de={},se=(0,d.Z)(de,[["render",le]]);var ae=se,ce={components:{RemoveSvg:ae},props:{good:{type:Object,required:!0}},methods:{removeGood(e){this.remove(e)},...(0,A.OI)({remove:"goods/removeGood"})}};const ue=(0,d.Z)(ce,[["render",te]]);var fe=ue,me={components:{GoodItem:fe},props:{goods:{type:Array,required:!0}}};const pe=(0,d.Z)(me,[["render",W],["__scopeId","data-v-40151001"]]);var ge=pe,ve={name:"Home-page",components:{GoodsList:ge,GoodsForm:U},data(){return{}},computed:{...(0,A.rn)({goods:e=>e.goods.goods,filters:e=>e.goods.filters,selectedFilter:e=>e.goods.selectedFilter}),...(0,A.Se)({sortedGoods:"goods/sortedGoods"}),selectFilter:{get(){return this.selectedFilter},set(e){this.setFilter(e)}}},methods:{...(0,A.OI)({setFilter:"goods/setSelectedFilter"})},beforeUnmount(){localStorage.setItem("goods",JSON.stringify(this.$store.state))},created(){localStorage.getItem("goods")&&this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(localStorage.getItem("goods")))),window.addEventListener("beforeunload",(()=>{localStorage.setItem("goods",JSON.stringify(this.$store.state))}),{once:!0})}};const he=(0,d.Z)(ve,[["render",G]]);var _e=he;const we=[{path:"/",name:"Home-page",component:_e},{path:"/about",name:"About-page",component:()=>t.e(405).then(t.bind(t,405))}],ye=(0,V.p7)({history:(0,V.PO)("/vue_goods/"),routes:we});var be=ye,Ce={namespaced:!0,state:()=>({goods:[{id:1,img:"https://via.placeholder.com/332x200",url:"javascript:void(0);",name:"Наименование товара",content:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e5},{id:2,img:"https://via.placeholder.com/332x200",url:"javascript:void(0);",name:"товара товара",content:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e3},{id:3,img:"https://via.placeholder.com/332x200",url:"javascript:void(0);",name:"Наименование Наименование",content:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4},{id:4,img:"https://via.placeholder.com/332x200",url:"javascript:void(0);",name:"Наименование товара",content:"Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",price:1e4}],selectedFilter:"min",filters:[{name:"По цене min",value:"min"},{name:"По цене max",value:"max"},{name:"По наименованию",value:"name"}]}),getters:{sortedGoods(e){return e.goods.sort(((o,t)=>"min"===e.selectedFilter?o.price-t.price:"max"===e.selectedFilter?t.price-o.price:o[e.selectedFilter]?.localeCompare(t[e.selectedFilter])))}},mutations:{setGood(e,o){e.goods.push(o)},removeGood(e,o){e.goods=e.goods.filter((e=>e.id!==o.id))},setSelectedFilter(e,o){e.selectedFilter=o}}},Ve=(0,A.MT)({modules:{goods:Ce}});const Fe=(0,i.ri)(a);w.forEach((e=>{Fe.component(e.name,e)})),C.forEach((e=>{Fe.directive(e.name,e)})),Fe.use(be).use(Ve).mount("#app")}},o={};function t(i){var r=o[i];if(void 0!==r)return r.exports;var n=o[i]={exports:{}};return e[i](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,i,r,n){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],n=e[c][2];for(var d=!0,s=0;s<i.length;s++)(!1&n||l>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[s])}))?i.splice(s--,1):(d=!1,n<l&&(l=n));if(d){e.splice(c--,1);var a=r();void 0!==a&&(o=a)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,r,n]}}(),function(){t.d=function(e,o){for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(o,i){return t.f[i](e,o),o}),[]))}}(),function(){t.u=function(e){return"js/"+e+".94724c54.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="vue-default:";t.l=function(i,r,n,l){if(e[i])e[i].push(r);else{var d,s;if(void 0!==n)for(var a=document.getElementsByTagName("script"),c=0;c<a.length;c++){var u=a[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==o+n){d=u;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,t.nc&&d.setAttribute("nonce",t.nc),d.setAttribute("data-webpack",o+n),d.src=i),e[i]=[r];var f=function(o,t){d.onerror=d.onload=null,clearTimeout(m);var r=e[i];if(delete e[i],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(e){return e(t)})),o)return o(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue_goods/"}(),function(){var e={143:0};t.f.j=function(o,i){var r=t.o(e,o)?e[o]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise((function(t,i){r=e[o]=[t,i]}));i.push(r[2]=n);var l=t.p+t.u(o),d=new Error,s=function(i){if(t.o(e,o)&&(r=e[o],0!==r&&(e[o]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;d.message="Loading chunk "+o+" failed.\n("+n+": "+l+")",d.name="ChunkLoadError",d.type=n,d.request=l,r[1](d)}};t.l(l,s,"chunk-"+o,o)}},t.O.j=function(o){return 0===e[o]};var o=function(o,i){var r,n,l=i[0],d=i[1],s=i[2],a=0;if(l.some((function(o){return 0!==e[o]}))){for(r in d)t.o(d,r)&&(t.m[r]=d[r]);if(s)var c=s(t)}for(o&&o(i);a<l.length;a++)n=l[a],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},i=self["webpackChunkvue_default"]=self["webpackChunkvue_default"]||[];i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(169)}));i=t.O(i)})();
//# sourceMappingURL=app.dd7fd3ea.js.map