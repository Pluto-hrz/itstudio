(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4908130f"],{"065a":function(t,e,s){"use strict";var a=s("9ad4"),n=s.n(a);n.a},"0f42":function(t,e,s){},"2ad7":function(t,e,s){},"59ae":function(t,e,s){"use strict";var a=s("a9a0"),n=s.n(a);n.a},"64f6":function(t,e,s){"use strict";var a=s("bb24"),n=s.n(a);n.a},7156:function(t,e,s){var a=s("861d"),n=s("d2bb");t.exports=function(t,e,s){var i,r;return n&&"function"==typeof(i=e.constructor)&&i!==s&&a(r=i.prototype)&&r!==s.prototype&&n(t,r),t}},7579:function(t,e,s){"use strict";var a=s("2ad7"),n=s.n(a);n.a},"8da2":function(t,e,s){"use strict";var a=s("ec39"),n=s.n(a);n.a},"9ad4":function(t,e,s){},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"","enter-active-class":"animated fadeInRight "}},[s("div",{staticClass:"Login",style:{height:t.height+"px"}},[s("JoinH"),s("div",{staticClass:"Application"},[s("div",{staticClass:"Buttons"},[s("button",{on:{click:function(e){return t.toggle(1)}}},[t._v("提交报名")]),s("button",{on:{click:function(e){return t.toggle(2)}}},[t._v("查询结果")])]),s("keep-alive",[s(t.name,{tag:"component"})],1)],1)],1)])},n=[],i=(s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loginTop"},[t._m(0),s("div",{staticClass:"topR"},[s("span",{on:{click:t.mainClick}},[t._v("返回首页")])])])}),r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topL"},[a("img",{attrs:{src:s("9d64")}}),a("span",[t._v(" ITStudio ")])])}],o={name:"JoinH",methods:{mainClick:function(){this.$router.push("./main")}}},c=o,l=(s("64f6"),s("2877")),u=Object(l["a"])(c,i,r,!1,null,"4a28733a",null),h=u.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"JoinF"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"pInfo"},[s("div",{staticClass:"Info"},[s("span",[t._v("学生姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.person.name,expression:"person.name"}],class:{active:""!==t.form[0].Warn},attrs:{placeholder:"16位以内",maxlength:"16"},domProps:{value:t.person.name},on:{focus:function(e){return t.blackRed("name",0)},input:function(e){e.target.composing||t.$set(t.person,"name",e.target.value)}}}),s("p",[t._v(t._s(t.form[0].Warn))])]),s("div",{staticClass:"Info"},[s("span",[t._v("手机号码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.person.phone,expression:"person.phone"}],class:{active:""!==t.form[1].Warn},attrs:{placeholder:"11位手机号码",maxlength:"12"},domProps:{value:t.person.phone},on:{focus:function(e){return t.blackRed("phone",1)},input:function(e){e.target.composing||t.$set(t.person,"phone",e.target.value)}}}),s("p",[t._v(t._s(t.form[1].Warn))])]),s("div",{staticClass:"Info"},[s("span",[t._v("邮箱地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.person.email,expression:"person.email"}],class:{active:""!==t.form[2].Warn},attrs:{maxlength:"20"},domProps:{value:t.person.email},on:{focus:function(e){return t.blackRed("email",2)},input:function(e){e.target.composing||t.$set(t.person,"email",e.target.value)}}}),s("p",[t._v(t._s(t.form[2].Warn))])]),s("div",{staticClass:"Info"},[s("span",[t._v("专业年级")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.person.major,expression:"person.major"}],class:{active:""!==t.form[3].Warn},attrs:{placeholder:"20xx级xxx样式"},domProps:{value:t.person.major},on:{focus:function(e){return t.blackRed("major",3)},input:function(e){e.target.composing||t.$set(t.person,"major",e.target.value)}}}),s("p",[t._v(t._s(t.form[3].Warn))])]),s("div",{staticClass:"Info"},[s("span",[t._v("意向部门")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.person.departer,expression:"person.departer"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.person,"departer",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:"Web开发",selected:""}},[t._v("Web开发")]),s("option",{attrs:{value:"程序开发"}},[t._v("程序开发")]),s("option",{attrs:{value:"游戏开发"}},[t._v("游戏开发")]),s("option",{attrs:{value:"APP开发"}},[t._v("APP开发")]),s("option",{attrs:{value:"UI设计"}},[t._v("UI设计")])]),s("p")]),s("div",{staticClass:"gura"},[s("span",[t._v("验证码 ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.person.code,expression:"person.code"}],class:{active:""!==t.form[4].Warn},attrs:{placeholder:"验证码将发送至您的邮箱",maxlength:"6"},domProps:{value:t.person.code},on:{focus:function(e){return t.blackRed("code",4)},input:function(e){e.target.composing||t.$set(t.person,"code",e.target.value)}}}),s("button",{directives:[{name:"show",rawName:"v-show",value:t.inCode,expression:"inCode"}],on:{click:t.sendCode}},[t._v(t._s(t.btn_text))]),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.inCode,expression:"!inCode"}]},[s("span",{staticClass:"CODE"},[t._v(t._s(t.code_time))]),t._v("(重新发送)")]),s("button",{on:{click:t.send}},[t._v("提交")])]),s("p",{staticClass:"codeCheck"},[t._v(t._s(t.form[4].Warn))])]),s("h1",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"result"},[t._v("您已成功提交报名表")])])},p=[],f=(s("4795"),s("36b2")),d=s("4328"),v=s.n(d),_={phone:function(t){var e=/^((13|14|15|17|18)[0-9]{1}\d{8})$/;return""===t?"请输入手机号码":e.test(t)?"":(t="","手机格式不正确")},Card:function(t){var e=/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;return e.test(t)?"":(t="","邮箱格式不正确")},Name:function(t){return""===t?"要填写姓名哦":""},DepartmentChoice:function(t){return""===t?"请输入年级专业":""},CodeC:function(t){return""===t?"请输入验证码":""}},b={name:"JoinF",data:function(){return{form:[{isNAME:!1,Warn:""},{isTEL:!1,Warn:""},{isEMAIL:!1,Warn:""},{isGrade:!1,Warn:""},{isCODE:!1,Warn:""}],person:{name:"",phone:"",email:"",major:"",code:"",departer:"Web开发"},isSEND:!0,inCode:!0,code_time:0,btn_text:"获取验证码",isShow:!0}},methods:{send:function(){var t=this;this.CheckA(this.person),this.isSEND&&Object(f["i"])(v.a.stringify(this.person)).then((function(e){var s=e.messages;"emailError"===e.state?t.form[2].Warn=s:"nameError"===e.state?t.form[0].Warn=s:"phoneError"===e.state?t.form[1].Warn=s:"majorError"===e.state?t.form[3].Warn=s:"codeError"===e.state?t.form[4].Warn=s:"访问提交成功"===s&&(t.isShow=!1)}))["catch"]((function(t){console.log(t)}))},sendCode:function(){var t=this;Object(f["g"])(v.a.stringify({email:this.person.email})).then((function(e){if("emailError"===e.state){var s=e.messages;t.form[2].Warn=s}else t.inCode=!1,t.code_time=30,t.timer()}))["catch"]((function(t){console.log(t)}))},timer:function(){this.code_time>0?(this.code_time--,this.btn_text="".concat(this.code_time,"s后重新发送"),setTimeout(this.timer,1e3)):(this.code_time=0,this.btn_text="获取验证码",this.inCode=!0)},CheckA:function(t){this.form[0].Warn=_.Name(t.name),this.form[1].Warn=_.phone(t.phone),this.form[2].Warn=_.Card(t.email),this.form[3].Warn=_.DepartmentChoice(t.major),this.form[4].Warn=_.CodeC(t.code);for(var e=0;e<5;e++)""!==this.form[e].Warn?this.isSEND=!1:this.isSEND=!0},blackRed:function(t,e){this.form[e].Warn&&(this.form[e].Warn="",this.person[t]="")}}},g=b,C=(s("8da2"),Object(l["a"])(g,m,p,!1,null,"1d1c8024",null)),w=C.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ResultMini"},[s("div",{staticClass:"resultBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{active:""!==t.emailWarn},attrs:{placeholder:"请输入报名邮箱，录取结果将发送至您的邮箱"},domProps:{value:t.email},on:{focus:t.blackRed,input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("button",{on:{click:t.result}},[t._v("查询")])]),s("p",[t._v(t._s(t.emailWarn))]),s("result-show",{attrs:{parentEmail:t.email,parentShow:t.isShow,parentStatus:t.status}})],1)},E=[],N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"resultShow"},[s("TitleSmall",{attrs:{parenttitle:t.Title}}),s("br"),t.parentShow?s("p",{staticClass:"showEmail"},[t._v(t._s(t.parentEmail))]):t._e(),s("div",{staticClass:"state"},t._l(t.state,(function(e,a){return s("div",{key:a,staticClass:"res",style:{border:"8px solid "+t.colors[e]}},[s("h4",[t._v(t._s(t.title[a]))]),s("p",[t._v(t._s(t.position[e]))])])})),0)],1)},W=[],S=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Titles"},[s("h2",{staticClass:"titleUp"},[t._v(t._s(t.parenttitle))]),t._m(0)])}),x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"titleUnder"},[s("div",{staticClass:"line"}),s("div",{staticClass:"square"}),s("div",{staticClass:"line"})])}],k={name:"Title",props:["parenttitle"]},I=k,A=(s("7579"),Object(l["a"])(I,S,x,!1,null,"06db145a",null)),y=A.exports,j={name:"resultShow",components:{TitleSmall:y},data:function(){return{Title:"录取状态",email:"",colors:["rgba(107, 107, 107, 1)","rgba(137, 201, 151, 1)","rgba(235, 104, 119, 1)"],position:["未开始","已通过","未通过"],title:["初审","面试","笔试","录取"],state:[0,0,0,0]}},props:{parentEmail:{type:String,default:"",required:!0},parentShow:{type:Boolean,default:!1,required:!0},parentStatus:{type:Number,default:0,required:!0}},watch:{parentEmail:function(t,e){""===t&&(this.$set(this.state,0,0),this.$set(this.state,1,0),this.$set(this.state,2,0),this.$set(this.state,3,0))},parentShow:function(t,e){},parentStatus:{handler:function(t,e){switch(t){case 1:this.$set(this.state,0,1);break;case 2:this.$set(this.state,0,2);break;case 3:this.$set(this.state,1,1),this.$set(this.state,0,1);break;case 4:this.$set(this.state,1,2),this.$set(this.state,0,1);break;case 5:this.$set(this.state,2,1),this.$set(this.state,1,1),this.$set(this.state,0,1);break;case 6:this.$set(this.state,2,2),this.$set(this.state,1,1),this.$set(this.state,0,1);break;case 7:this.$set(this.state,3,1),this.$set(this.state,2,1),this.$set(this.state,1,1),this.$set(this.state,0,1);break;case 8:this.$set(this.state,3,2),this.$set(this.state,2,1),this.$set(this.state,1,1),this.$set(this.state,0,1);break}},immediate:!0}}},T=j,R=(s("065a"),Object(l["a"])(T,N,W,!1,null,"34b92a58",null)),O=R.exports,P={name:"ResultMini",components:{resultShow:O},data:function(){return{email:"",isShow:!1,emailWarn:"",status:0}},methods:{result:function(){var t=this;this.show(),Object(f["d"])({email:this.email}).then((function(e){t.status=0,"访问提交成功"!==e.messages?t.emailWarn=e.messages:(t.status=e.status,setTimeout((function(){t.status=0}),3))}))["catch"]((function(t){console.log(t)}))},show:function(){""!==this.email?this.isShow=!0:this.isShow=!1},blackRed:function(){this.emailWarn&&(this.emailWarn="",this.email="",this.isShow=!1),this.isShow&&(this.isShow=!1)}}},F=P,M=(s("e0e9"),Object(l["a"])(F,$,E,!1,null,"e94027c2",null)),D=M.exports,J={name:"Login",components:{JoinH:h,JoinF:w,ResultMini:D},data:function(){return{name:w,height:1280}},methods:{toggle:function(t){1===t?(this.name=w,this.height=1280):(this.name=D,this.height=1280)}}},L=J,U=(s("59ae"),Object(l["a"])(L,a,n,!1,null,"4d072a2f",null));e["default"]=U.exports},a9a0:function(t,e,s){},a9e3:function(t,e,s){"use strict";var a=s("83ab"),n=s("da84"),i=s("94ca"),r=s("6eeb"),o=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),h=s("d039"),m=s("7c73"),p=s("241c").f,f=s("06cf").f,d=s("9bf2").f,v=s("58a8").trim,_="Number",b=n[_],g=b.prototype,C=c(m(g))==_,w=function(t){var e,s,a,n,i,r,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+l}for(i=l.slice(2),r=i.length,o=0;o<r;o++)if(c=i.charCodeAt(o),c<48||c>n)return NaN;return parseInt(i,a)}return+l};if(i(_,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var $,E=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof E&&(C?h((function(){g.valueOf.call(s)})):c(s)!=_)?l(new b(w(e)),s,E):w(e)},N=a?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),W=0;N.length>W;W++)o(b,$=N[W])&&!o(E,$)&&d(E,$,f(b,$));E.prototype=g,g.constructor=E,r(n,_,E)}},b0c0:function(t,e,s){var a=s("83ab"),n=s("9bf2").f,i=Function.prototype,r=i.toString,o=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},bb24:function(t,e,s){},e0e9:function(t,e,s){"use strict";var a=s("0f42"),n=s.n(a);n.a},ec39:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4908130f.0b13989f.js.map