(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3,4],{296:function(e,t,s){},297:function(e,t,s){e.exports={mainPhoto:"Profile_mainPhoto__3Bbgw",contact:"Profile_contact__1FP5O",formControl:"Profile_formControl__LsZtc",error:"Profile_error__38Vl4",formSummaryError:"Profile_formSummaryError__3xm5V"}},298:function(e,t,s){"use strict";t.a=s.p+"static/media/avatar.5760d89e.png"},299:function(e,t,s){e.exports={item:"Post_item__1rINQ"}},300:function(e,t,s){"use strict";s.r(t);var n=s(3),i=s(1),r=s(30),c=s(31),o=s(33),a=s(32),l=s(0),j=s.n(l),u=s(296),d=s.n(u),b=s(299),f=s.n(b),h=s(298),O=function(e){return Object(i.jsxs)("div",{className:f.a.item,children:[Object(i.jsx)("img",{src:h.a}),e.message,Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:["Like ",e.likesCount," "]})})]})},m=s(94),p=s(87),x=s(128),v=s(63),g=s(26),P=Object(v.a)(10),y=Object(x.a)({form:"ProfileMyNewPostForm"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(p.a,{name:"newPostText",component:g.b,placeholder:"",validate:[v.b,P]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Add"})})]}),Object(i.jsx)("div",{className:d.a.posts})]})})),S=function(e){var t=e.postData.map((function(e){return Object(i.jsx)(O,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"My posts"}),Object(i.jsx)(y,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(i.jsx)("div",{children:t})]})},_=s(13),k=Object(_.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(m.a)(t))}}}))(S);var w=s(96);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],n=!0,i=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(s.push(c.value),!t||s.length!==t);n=!0);}catch(a){i=!0,r=a}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}return s}}(e,t)||Object(w.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=s(65),D=function(e){var t=A(Object(l.useState)(!1),2),s=t[0],n=t[1],r=A(Object(l.useState)(e.status),2),c=r[0],o=r[1];Object(l.useEffect)((function(){o(e.status)}),[e.status]);return Object(i.jsxs)("div",{children:[!s&&Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Status: "}),Object(i.jsx)("span",{onDoubleClick:function(){n(!0)},children:e.status||"-----"})]}),s&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(c)},value:c})})]})},N=s(98),I=s(297),C=s.n(I),F=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,s=e.profile,n=e.error;return Object(i.jsxs)("form",{onSubmit:t,children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"save"})}),n&&Object(i.jsx)("div",{className:C.a.formSummaryError,children:n}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full name"}),": ",Object(g.c)("Full name","fullName",[],g.a)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking for a job"}),":  ",Object(g.c)("","lookingForAJob",[],g.a,{type:"checkbox"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"My professionals skills"}),":",Object(g.c)("My professionals skills","lookingForAJobDescription",[],g.b)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About me"}),"  :",Object(g.c)("About me","aboutMe",[],g.b)]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(e){return Object(i.jsx)("div",{className:C.a.contact,children:Object(i.jsxs)("b",{children:[e,": ",Object(g.c)(e,"contacts."+e,[],g.a)]})},e)}))]})]})})),T=function(e){var t=e.profile,s=e.isOwner,n=e.goToEditMode;return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:s&&Object(i.jsx)("div",{children:Object(i.jsx)("button",{onClick:n,children:"edit"})})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Full name"})," : ",t.fullName]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Looking for a job"})," : ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"My professionals skills"}),"  ",t.lookingForAJobDescription]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"About me"})," :",t.aboutMe]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("b",{children:"Contacts"})," :",Object.keys(t.contacts).map((function(e){return Object(i.jsx)(E,{contactTitle:e,contactValue:t.contacts[e]},e)}))]})]})},E=function(e){var t=e.contactTitle,s=e.contactValue;return Object(i.jsxs)("div",{className:C.a.contact,children:[Object(i.jsx)("b",{children:t}),": ",s]})},J=function(e){var t=e.profile,s=e.status,n=e.updateStatus,r=e.isOwner,c=e.savePhoto,o=e.saveProfile,a=A(Object(l.useState)(!1),2),j=a[0],u=a[1];if(!t)return Object(i.jsx)(M.a,{});return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{}),Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:t.photos.large||N.a,className:C.a.mainPhoto}),r&&Object(i.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),j?Object(i.jsx)(F,{initialValues:t,profile:t,onSubmit:function(e){o(e).then((function(){u(!1)}))}}):Object(i.jsx)(T,{goToEditMode:function(){u(!0)},profile:t,isOwner:r}),Object(i.jsx)(D,{status:s,updateStatus:n})]})]})},B=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(J,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),Object(i.jsx)(k,{})]})},V=(s(44),s(11)),L=(s(12),s(95),s(10)),U=function(e){Object(o.a)(s,e);var t=Object(a.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authoriseduserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(i.jsx)(B,Object(n.a)(Object(n.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);t.default=Object(L.d)(Object(_.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authoriseduserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:m.d,getStatus:m.c,updateStatus:m.g,savePhoto:m.e,saveProfile:m.f}),V.f)(U)},301:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__26EQn",dialogsItems:"Dialogs_dialogsItems__1qwd_",active:"Dialogs_active__1DegZ",messages:"Dialogs_messages__32fAl"}},303:function(e,t,s){"use strict";s.r(t);s(0);var n=s(97),i=s(1),r=s(14),c=s(11),o=s(298),a=s(301),l=s.n(a),j=s(87),u=s(128),d=s(26),b=s(63),f=function(e){return Object(i.jsxs)("div",{className:l.a.dialogs+" "+l.a.active,children:[Object(i.jsx)("img",{src:o.a}),Object(i.jsx)(r.b,{to:"/dialogs/"+e.id,children:e.name})]})},h=function(e){return Object(i.jsx)("div",{className:l.a.dialog,children:e.message})},O=Object(b.a)(50),m=Object(u.a)({form:"dialogsAddMessageForm"})((function(e){return Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)("div",{children:Object(i.jsx)(j.a,{component:d.b,name:"newMessageBody",placeholder:"Enter your message",validate:[b.b,O]})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Send"})})]})})),p=function(e){var t=e.dialogsPage,s=t.dialogsData.map((function(e){return Object(i.jsx)(f,{name:e.name,id:e.id},e.id)})),n=t.messagesData.map((function(e){return Object(i.jsx)(h,{message:e.message,id:e.id},e.id)}));t.newMessageBody;return e.isAuth?Object(i.jsxs)("div",{className:l.a.dialogs,children:[Object(i.jsx)("div",{className:l.a.dialogsItems,children:s}),Object(i.jsx)("div",{className:l.a.messages,children:n}),Object(i.jsx)(m,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]}):Object(i.jsx)(c.a,{to:"/login"})},x=s(13),v=s(95),g=(s(300),s(10));t.default=Object(g.d)(Object(x.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(Object(n.b)(t))}}})),v.a)(p)}}]);
//# sourceMappingURL=3.cb80659a.chunk.js.map