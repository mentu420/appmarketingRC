webpackJsonp([74],{1573:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(394),s=t.n(i),A=t(15),o=t.n(A),a=t(411),r=t.n(a),l=t(59),c=(t.n(l),t(58));o.a.component(l.Actionsheet.name,l.Actionsheet),n.default={data:function(){var e=this;return{title:"",actions:[{name:"要删除这张图片吗",method:e.question},{name:"删除",method:e.del}],sheetVisible:!1,index:1,startX:0,len:0,swipe:0,deviceW:0,path:""}},components:{mybanner:r.a},created:function(){},computed:s()({},t.i(c.mapState)({picVal:function(e){return e.picVal},filesList:function(e){return e.Files}})),mounted:function(){this.deviceW=document.body.clientWidth,this.len=this.picVal.length,this.title=this.index+"/"+this.len,console.log(33344,this.picVal),console.log(33344,this.filesList)},methods:s()({},t.i(c.mapMutations)(["delFiles","delPicVal","setFiles","setPicVal"]),{openAction:function(){this.sheetVisible=!0},question:function(){this.sheetVisible=!0},del:function(){if(this.picVal.length>0){var e=this.picVal,n=this.filesList;e.splice(this.index-1,1),n.splice(this.index-1,1),this.setPicVal(e),this.setFiles(n),console.log(this.picVal),console.log(this.filesList),this.index>1&&(this.index--,this.swipe=this.swipe-this.deviceW),this.len=this.picVal.length,this.len>0?this.title=this.index+"/"+this.len:(this.$router.back(-1),this.title="0/"+this.len),this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)",this.sheetVisible=!1}},start:function(e,n){e=e||event,e.preventDefault(),1==e.changedTouches.length&&(this.startX=e.changedTouches[0].clientX)},move:function(e,n){if(e=e||event,e.preventDefault(),1==e.changedTouches.length){this.$refs.preview.style.transition="none";var t=e.changedTouches[0].clientX-this.startX;this.record}},end:function(e,n){if(e=e||event,e.preventDefault(),1==e.changedTouches.length){var t=e.changedTouches[0].clientX-this.startX;t<0&&Math.abs(t)>50&&(this.index<this.picVal.length&&(this.swipe=this.swipe+this.deviceW,this.index++),this.title=this.index+"/"+this.len,this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)"),t>0&&Math.abs(t)>50&&(this.index>1&&(this.swipe=this.swipe-this.deviceW,this.index--),this.title=this.index+"/"+this.len,this.$refs.preview.style.transition="transform .5s",this.$refs.preview.style.transform="translateX(-"+this.swipe+"px)")}}}),destroyed:function(){if(this.picVal.length>0){var e=this.picVal;window.picVal=e}},beforeRouteLeave:function(e,n,t){e.meta.isUseCache=!0,t()}}},1689:function(e,n,t){n=e.exports=t(307)(),n.push([e.i,"\n#previewBox {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n#previewBox .banner span {\n    padding-right: 0;\n}\n#previewBox .swipe {\n    transform: translateX(0);\n}\n#previewBox .trash {\n    width: 5.066vw;\n    margin-right: 4.266vw;\n}\n#previewBox .preview {\n    width: 300%;\n    height: 100vh;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n}\n#previewBox .preview li {\n      width: 100vw;\n      height: 100vh;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#previewBox .preview li img {\n        width: 100vw;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:first-child {\n    color: #909090;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:last-child {\n    color: #DB6971;\n}\n","",{version:3,sources:["/Users/guang/Desktop/test/marketing/src/pages/Personal/imgPreview.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;CAClB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,yBAAyB;CAC5B;AACD;IACI,eAAe;IACf,sBAAsB;CACzB;AACD;IACI,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,cAAc;IACd,wBAAwB;QACpB,oBAAoB;IACxB,uBAAuB;QACnB,oBAAoB;CAC3B;AACD;MACM,aAAa;MACb,cAAc;MACd,qBAAqB;MACrB,cAAc;MACd,wBAAwB;UACpB,oBAAoB;MACxB,uBAAuB;UACnB,oBAAoB;MACxB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;QACQ,aAAa;CACpB;AACD;IACI,eAAe;CAClB;AACD;IACI,eAAe;CAClB",file:"imgPreview.vue",sourcesContent:["\n#previewBox {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n#previewBox .banner span {\n    padding-right: 0;\n}\n#previewBox .swipe {\n    transform: translateX(0);\n}\n#previewBox .trash {\n    width: 5.066vw;\n    margin-right: 4.266vw;\n}\n#previewBox .preview {\n    width: 300%;\n    height: 100vh;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-align: center;\n        align-items: center;\n}\n#previewBox .preview li {\n      width: 100vw;\n      height: 100vh;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: row;\n          flex-direction: row;\n      -ms-flex-align: center;\n          align-items: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#previewBox .preview li img {\n        width: 100vw;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:first-child {\n    color: #909090;\n}\n#previewBox #ss .mint-actionsheet-list .mint-actionsheet-listitem:last-child {\n    color: #DB6971;\n}\n"],sourceRoot:""}])},1848:function(e,n,t){var i=t(1689);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(308)("706c41d4",i,!0)},1995:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADLUlEQVRYR+2YSWgUQRSG/9dDiERy8WYURAUXlLj0dHdCjip60biAuG+IBxFR9GLUk9tF0YN4EFQS94P7ye0YknqVdomoUVARXG5egmII008KpkNl0h0kMxkRpm/Vr+t/X73XVfWqCEU89fX1Y6urq48S0SRbRkQ+9/X1Heru7v45UnkaaUfTz/O8i0S0NUlDRC5prbeNVL8oMN/3NYBsivMuZvb+CVgQBI9FZGGScyJ6opRaVDIwz/M2ENFOAGMA5FKEJW+bBaA25ZteAK8BZACkZcbYfovIOa31FVtnSAff943Tsj/MPIjlvwL7BcBErVyRM8EhZq4ZNpVNTU11/f39fcz8Y5h/o1SpFt/3x1VVVVW3t7d/GxYsNrquW1NbWxuViiBJp7e31wnD0GRoyJM4WzzPW0pEd8qQThKRFVrrB4VkaWAriejWaEYr1haRVVrr238F1tDQsCyKonvlAHMcp7mzs/N+MWBmsf0AYFoK8Mf8+ykp9vcApuYX3IFPigITkW9RFC0Iw7DH87wlRGRGWGUBtDLzFtP2fb8VwCbL1g9gKTM/dF13huM4T4moLrYXBUZER5VSh2Mxz/MeEdHAPpjL5erCMPxu7K7rjs9kMvbUf8TMi+O+QRAcEZFDJQETkf1a61OxWEJUpjDzp3zEJgOI02petTHzZmtQ+4joZEnAABxk5uOW+HUiWhO3oyia0dXV9c60s9nsdMdxeqxZd0NrvdYaVAuAYxWwSsQKFtjKPxZPisS9MmFLqkSsEjERqSyw5mqgsiUNqu0KlwsialFKnbA24qsA1v3NJg7gGjOvt8qeAyIyUBAUW4/tVUqdscDaAGyM25lMZmJHR8dX025sbJyQy+W+WCO9zMwDhWMQBHtE5HSpqosLzLzdAnsGYJ7lfC4zv8zXY3MAvLBsz5l5vlUyDbq6KipiACIi2i0iBsikcNeg3ANviWiHeSci5wHMLLCfNSnNX1mZyDsjilgQBM0icrdAfFSaRLRcKTXkRJZ2rlxNRDdHhaRAVETWaK2H+EoEy2azsx3HeVUOMCKapZR6U+gr9arT9/3lBcewknMSUWtSGo2jP4dTxkWy4Z3CAAAAAElFTkSuQmCC"},2130:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{attrs:{id:"previewBox"}},[i("mybanner",{staticStyle:{border:"none",background:"#fff"},attrs:{title:e.title}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.picVal.length>0,expression:"picVal.length>0"}],staticClass:"trash",attrs:{src:t(1995),alt:""},on:{click:e.openAction}})]),e._v(" "),i("ul",{ref:"preview",staticClass:"preview"},e._l(e.picVal,function(n,t){return i("li",{key:t,on:{touchstart:function(n){return e.start(n)},touchmove:function(n){return e.move(n)},touchend:function(n){return e.end(n)}}},[i("img",{attrs:{src:n.url,alt:""}})])}),0),e._v(" "),i("mt-actionsheet",{attrs:{actions:e.actions,id:"ss"},model:{value:e.sheetVisible,callback:function(n){e.sheetVisible=n},expression:"sheetVisible"}})],1)},staticRenderFns:[]}},324:function(e,n,t){t(1848);var i=t(114)(t(1573),t(2130),null,null);e.exports=i.exports},394:function(e,n,t){"use strict";n.__esModule=!0;var i=t(116),s=function(e){return e&&e.__esModule?e:{default:e}}(i);n.default=s.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}},407:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAfJJREFUSIml1k2IjVEcx/HPYIMSslATymZIU966iMaUlWNBqUlKsxALbJBS1hYTC0UpC1mQxdiQnsnGW8gw2EzZKKGZmiQriQ2Lc69ux7lz7/Pc/+qe7zn3+5zT8zy//9NTq9V0WZdxov77/LwuZTcw3DQ+143wFg6msKrwDvZn+NEqwvvYk+GHQgg3ywofYTDDh0IIo5Q78hMMZPi+EMLdxqAT4Vw8x5bMXAghjDWDdsIFeIYNmbldeJjC2YSL8RJ9Cf+DbRjP/amVcCleY3XCf2M7JlrtIidcXr/6yoT/RA2TrWQwJxmvwLuM7Ds2t5OlO1yDF1iSrJmp7+xzO1mzcB1eiXe1uabqsulOZMQj94s3IJV9FB+XjmUN4RjmJ/xB/UJfy8gawt4Mn8SPsrKG8GSGn8aVqsJLOJuZO45rVYQwgjOZ+SNizJcWwkUcy6wZxu0qQriKw5l1B8SkLi2E6zLNR4z9ooqQeMShDN8ttoHSQhjF3gwfFNtBNvpmE8I9MZnTGhBf1/QNayskxvzODF+P8aIoFpYVwlNsFeO/ufrxpiiKf5HXqZCY4jX8SngfJoqiWAY9Fb6+1orNa1HCp7CjzA4b9R6b8C3hvXhcRQgfxPCdSfiqqkL4go341MTedvvBOS326VPiE3ChS9//9RdWbVrN+RusKgAAAABJRU5ErkJggg=="},411:function(e,n,t){t(414);var i=t(114)(t(412),t(415),"data-v-2a50e813",null);e.exports=i.exports},412:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(15);t.n(i),t(60);n.default={name:"routerLink",props:["title","MoreBtn","left"],data:function(){return{fix:"",top:""}},mounted:function(){this.isIPhoneX()},methods:{cilck:function(){this.$router.back(-1)},isIPhoneX:function(e){!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)&&(812==screen.height&&375==screen.width||896==screen.height&&414==screen.width)&&(this.fix="fix",this.top="6")}}}},413:function(e,n,t){n=e.exports=t(307)(),n.push([e.i,"\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n  align-items: center;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url("+t(407)+") no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    /* padding-right: 10.4vw; */\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    -ms-flex: 1;\n        flex: 1;\n    padding-right: 9.606vw;\n    position: relative;\n}\n.banner .myLeftStyle[data-v-2a50e813] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n.banner button[data-v-2a50e813] {\n    font-weight: bold;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    position: absolute;\n    right: 4.266vw;\n    top: 50%;\n    transform: translate(0, -50%);\n    color: #007fff;\n    font-weight: bold;\n    font-size: 15px;\n}\n","",{version:3,sources:["/Users/guang/Desktop/test/marketing/src/components/banner.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,uBAAuB;MACnB,oBAAoB;EACxB,8BAA8B;EAC9B,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;CACrB;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,YAAY;CACf;AACD;IACI,WAAW;IACX,eAAe;IACf,sBAAsB;CACzB;AACD;MACM,2DAA0D;MAC1D,sBAAsB;MACtB,cAAc;MACd,eAAe;MACf,gBAAgB;CACrB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;IACf,wBAAwB;IACxB,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;QACR,QAAQ;IACZ,uBAAuB;IACvB,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;CACpB;AACD;IACI,kBAAkB;IAClB,yBAAyB;QACrB,qBAAqB;IACzB,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,8BAA8B;IAC9B,eAAe;IACf,kBAAkB;IAClB,gBAAgB;CACnB",file:"banner.vue",sourcesContent:["\n.banner[data-v-2a50e813] {\n  font-weight: 600;\n  z-index: 99;\n  height: 16.466vw;\n  width: 100vw;\n  box-sizing: border-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  -ms-flex-align: center;\n      align-items: center;\n  border-bottom: 1px solid #ccc;\n  background: #f8f8f8;\n  padding-top: 5vw;\n  align-items: center;\n}\n.banner .fix[data-v-2a50e813] {\n    position: absolute;\n    background: #f8f8f8;\n    left: 0;\n    top: -6vw;\n    height: 7vw;\n    width: 100%;\n    z-index: 99;\n}\n.banner .icon-back[data-v-2a50e813] {\n    width: 8vw;\n    height: 6.66vw;\n    padding-left: 4.266vw;\n}\n.banner .icon-back .icon[data-v-2a50e813] {\n      background: url(../assets/imgs/back.png) no-repeat center;\n      background-size: 100%;\n      width: 2.66vw;\n      height: 4.66vw;\n      margin-top: 1vw;\n}\n.banner .my_title[data-v-2a50e813] {\n    width: 100%;\n    text-align: center;\n    /* padding-right: 10.4vw; */\n    font-size: 5.06vw;\n    letter-spacing: -1px;\n    color: #363636;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    -ms-flex: 1;\n        flex: 1;\n    padding-right: 9.606vw;\n    position: relative;\n}\n.banner .myLeftStyle[data-v-2a50e813] {\n    color: #222444;\n    font-size: 4.8vw;\n    font-weight: 500;\n    padding-left: 2vw;\n    text-align: left;\n}\n.banner button[data-v-2a50e813] {\n    font-weight: bold;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    position: absolute;\n    right: 4.266vw;\n    top: 50%;\n    transform: translate(0, -50%);\n    color: #007fff;\n    font-weight: bold;\n    font-size: 15px;\n}\n"],sourceRoot:""}])},414:function(e,n,t){var i=t(413);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(308)("34a363a4",i,!0)},415:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"banner",style:{"margin-top":e.top+"vw"}},[t("div",{class:""+e.fix}),e._v(" "),t("div",{staticClass:"icon-back",on:{click:e.cilck}},[t("div",{staticClass:"icon"})]),e._v(" "),t("div",{staticClass:"my_title",class:e.left?"myLeftStyle":""},[t("span",[e._v(e._s(e.title))]),e._t("default")],2)])},staticRenderFns:[]}}});