var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){t.value=null==e?"":e}let $;function h(t){$=t}const m=[],g=[],v=[],y=[],b=Promise.resolve();let x=!1;function _(t){v.push(t)}let k=!1;const w=new Set;function E(){if(!k){k=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),j(e.$$)}for(h(null),m.length=0;g.length;)g.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];w.has(e)||(w.add(e),e())}v.length=0}while(m.length);for(;y.length;)y.pop()();x=!1,k=!1,w.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const C=new Set;function A(t,e){t&&t.i&&(C.delete(t),t.i(e))}function N(t,n,u,c){const{fragment:s,on_mount:i,on_destroy:l,after_update:a}=t.$$;s&&s.m(n,u),c||_((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(_)}function O(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,e){-1===t.$$.dirty[0]&&(m.push(t),x||(x=!0,b.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,u,c,s,l,a,f=[-1]){const d=$;h(e);const p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=u?u(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&K(e,t)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&A(e.$$.fragment),N(e,r.target,r.anchor,r.customElement),E()}h(d)}class S{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,r,u,$,h,m,g,v,y,b,x,_,k,w,E;return{c(){n=l("div"),r=l("form"),u=l("p"),u.textContent="Имя пользователя",$=a(),h=l("input"),m=a(),g=l("p"),g.textContent="Пароль",v=a(),y=l("input"),b=a(),x=l("input"),_=a(),k=l("input"),d(h,"type","text"),d(y,"type","password"),d(x,"type","button"),x.value="Войти",d(x,"class","svelte-cdrotj"),d(k,"type","button"),k.value="У меня нет аккаунта",d(k,"class","svelte-cdrotj"),d(r,"class","svelte-cdrotj"),d(n,"class","svelte-cdrotj")},m(t,o){s(t,n,o),c(n,r),c(r,u),c(r,$),c(r,h),p(h,e[0]),c(r,m),c(r,g),c(r,v),c(r,y),p(y,e[1]),c(r,b),c(r,x),c(r,_),c(r,k),w||(E=[f(h,"input",e[2]),f(y,"input",e[3]),f(x,"click",e[4]),f(k,"click",e[5])],w=!0)},p(t,[e]){1&e&&h.value!==t[0]&&p(h,t[0]),2&e&&y.value!==t[1]&&p(y,t[1])},i:t,o:t,d(t){t&&i(n),w=!1,o(E)}}}function B(t,e,n){let o="",r="";return[o,r,function(){o=this.value,n(0,o)},function(){r=this.value,n(1,r)},()=>alert("KEKW! :^)"),()=>alert("Пашол нахуй")]}class M extends S{constructor(t){super(),L(this,t,B,q,u,{})}}function P(e){let n,o,r,u,f,p,$,h,m;return h=new M({}),{c(){var t;n=l("main"),o=l("h1"),o.textContent="Трекер привычек",r=a(),u=l("h2"),u.textContent="Тут вы можете поставить цель для привычки и добиться ее",f=a(),p=l("p"),p.textContent="В разработке...",$=a(),(t=h.$$.fragment)&&t.c(),d(o,"class","svelte-1e9puaw"),d(n,"class","svelte-1e9puaw")},m(t,e){s(t,n,e),c(n,o),c(n,r),c(n,u),c(n,f),c(n,p),c(n,$),N(h,n,null),m=!0},p:t,i(t){m||(A(h.$$.fragment,t),m=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(h.$$.fragment,t),m=!1},d(t){t&&i(n),O(h)}}}return new class extends S{constructor(t){super(),L(this,t,null,P,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
