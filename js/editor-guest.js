(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{400:function(e,t,a){var s=a(518);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(89).default)("499816ba",s,!0,{})},517:function(e,t,a){"use strict";var s=a(400);a.n(s).a},518:function(e,t,a){(t=a(88)(!1)).push([e.i,"form.guest-name-dialog[data-v-c1266f5a]{display:flex;max-width:200px;margin:auto;margin-top:-2px;padding:3px}form.guest-name-dialog[data-v-c1266f5a] img{margin:0 !important}form.guest-name-dialog input[type=text][data-v-c1266f5a]{flex-grow:1}form.guest-name-dialog label[data-v-c1266f5a]{padding:3px;height:32px}\n",""]),e.exports=t},526:function(e,t,a){"use strict";a.r(t);var s=a(180),n=a.n(s),i=a(416),o={name:"GuestNameDialog",components:{Avatar:a.n(i).a},directives:{tooltip:n.a},props:{syncService:{type:Object,default:null}},data:function(){return{guestName:"",guestNameBuffered:""}},computed:{avatarUrl:function(){var e=OC.generateUrl("/avatar/guest/{user}/{size}",{user:this.guestNameBuffered,size:32});return window.location.protocol+"//"+window.location.host+e}},beforeMount:function(){this.guestName=this.syncService.session.guestName,this.updateBufferedGuestName()},methods:{setGuestName:function(){var e=this,t=this.syncService.session.guestName;this.syncService.updateSession(this.guestName).then((function(){localStorage.setItem("nick",e.guestName),e.updateBufferedGuestName()})).catch((function(a){e.guestName=t}))},updateBufferedGuestName:function(){this.guestNameBuffered=this.guestName}}},u=(a(517),a(19)),r=Object(u.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.t("text","Enter your name so other users can see who is editing"),expression:"t('text', 'Enter your name so other users can see who is editing')"}],staticClass:"guest-name-dialog",on:{submit:function(t){return t.preventDefault(),e.setGuestName()}}},[a("label",[a("Avatar",{attrs:{url:e.avatarUrl,"disable-tooltip":!0,size:32}})],1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.guestName,expression:"guestName"}],attrs:{type:"text","aria-label":e.t("text","Edit guest name")},domProps:{value:e.guestName},on:{input:function(t){t.target.composing||(e.guestName=t.target.value)}}}),e._v(" "),a("input",{staticClass:"icon-confirm",attrs:{type:"submit","aria-label":e.t("text","Save guest name"),value:""}})])}),[],!1,null,"c1266f5a",null);t.default=r.exports}}]);
//# sourceMappingURL=editor-guest.js.map?v=a5fe3fd03302a3b28ea5