import{S as E,i as G,s as I,F as K,c as R,m as B,t as N,a as T,d as j,C as M,q as J,e as _,w as P,b as k,f,r as L,g as b,h as c,u as z,v as O,j as Q,l as U,o as w,A as V,p as W,B as X,D as Y,x as Z,z as q}from"./index-yjdtWzFj.js";function y(r){let e,n,s;return{c(){e=P("for "),n=_("strong"),s=P(r[3]),f(n,"class","txt-nowrap")},m(l,t){b(l,e,t),b(l,n,t),c(n,s)},p(l,t){t&8&&Z(s,l[3])},d(l){l&&(w(e),w(n))}}}function x(r){let e,n,s,l,t,i,p,d;return{c(){e=_("label"),n=P("New password"),l=k(),t=_("input"),f(e,"for",s=r[8]),f(t,"type","password"),f(t,"id",i=r[8]),t.required=!0,t.autofocus=!0},m(u,a){b(u,e,a),c(e,n),b(u,l,a),b(u,t,a),q(t,r[0]),t.focus(),p||(d=z(t,"input",r[6]),p=!0)},p(u,a){a&256&&s!==(s=u[8])&&f(e,"for",s),a&256&&i!==(i=u[8])&&f(t,"id",i),a&1&&t.value!==u[0]&&q(t,u[0])},d(u){u&&(w(e),w(l),w(t)),p=!1,d()}}}function ee(r){let e,n,s,l,t,i,p,d;return{c(){e=_("label"),n=P("New password confirm"),l=k(),t=_("input"),f(e,"for",s=r[8]),f(t,"type","password"),f(t,"id",i=r[8]),t.required=!0},m(u,a){b(u,e,a),c(e,n),b(u,l,a),b(u,t,a),q(t,r[1]),p||(d=z(t,"input",r[7]),p=!0)},p(u,a){a&256&&s!==(s=u[8])&&f(e,"for",s),a&256&&i!==(i=u[8])&&f(t,"id",i),a&2&&t.value!==u[1]&&q(t,u[1])},d(u){u&&(w(e),w(l),w(t)),p=!1,d()}}}function te(r){let e,n,s,l,t,i,p,d,u,a,g,S,C,v,h,F,A,m=r[3]&&y(r);return i=new J({props:{class:"form-field required",name:"password",$$slots:{default:[x,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:r}}}),d=new J({props:{class:"form-field required",name:"passwordConfirm",$$slots:{default:[ee,({uniqueId:o})=>({8:o}),({uniqueId:o})=>o?256:0]},$$scope:{ctx:r}}}),{c(){e=_("form"),n=_("div"),s=_("h4"),l=P(`Reset your superuser password
                `),m&&m.c(),t=k(),R(i.$$.fragment),p=k(),R(d.$$.fragment),u=k(),a=_("button"),g=_("span"),g.textContent="Set new password",S=k(),C=_("div"),v=_("a"),v.textContent="Back to login",f(s,"class","m-b-xs"),f(n,"class","content txt-center m-b-sm"),f(g,"class","txt"),f(a,"type","submit"),f(a,"class","btn btn-lg btn-block"),a.disabled=r[2],L(a,"btn-loading",r[2]),f(e,"class","m-b-base"),f(v,"href","/login"),f(v,"class","link-hint"),f(C,"class","content txt-center")},m(o,$){b(o,e,$),c(e,n),c(n,s),c(s,l),m&&m.m(s,null),c(e,t),B(i,e,null),c(e,p),B(d,e,null),c(e,u),c(e,a),c(a,g),b(o,S,$),b(o,C,$),c(C,v),h=!0,F||(A=[z(e,"submit",O(r[4])),Q(U.call(null,v))],F=!0)},p(o,$){o[3]?m?m.p(o,$):(m=y(o),m.c(),m.m(s,null)):m&&(m.d(1),m=null);const D={};$&769&&(D.$$scope={dirty:$,ctx:o}),i.$set(D);const H={};$&770&&(H.$$scope={dirty:$,ctx:o}),d.$set(H),(!h||$&4)&&(a.disabled=o[2]),(!h||$&4)&&L(a,"btn-loading",o[2])},i(o){h||(N(i.$$.fragment,o),N(d.$$.fragment,o),h=!0)},o(o){T(i.$$.fragment,o),T(d.$$.fragment,o),h=!1},d(o){o&&(w(e),w(S),w(C)),m&&m.d(),j(i),j(d),F=!1,V(A)}}}function se(r){let e,n;return e=new K({props:{$$slots:{default:[te]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},m(s,l){B(e,s,l),n=!0},p(s,[l]){const t={};l&527&&(t.$$scope={dirty:l,ctx:s}),e.$set(t)},i(s){n||(N(e.$$.fragment,s),n=!0)},o(s){T(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function le(r,e,n){let s,{params:l}=e,t="",i="",p=!1;async function d(){if(!p){n(2,p=!0);try{await W.collection("_superusers").confirmPasswordReset(l==null?void 0:l.token,t,i),X("Successfully set a new superuser password."),Y("/")}catch(g){W.error(g)}n(2,p=!1)}}function u(){t=this.value,n(0,t)}function a(){i=this.value,n(1,i)}return r.$$set=g=>{"params"in g&&n(5,l=g.params)},r.$$.update=()=>{r.$$.dirty&32&&n(3,s=M.getJWTPayload(l==null?void 0:l.token).email||"")},[t,i,p,s,d,l,u,a]}class ae extends E{constructor(e){super(),G(this,e,le,se,I,{params:5})}}export{ae as default};