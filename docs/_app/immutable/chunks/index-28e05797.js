function $(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function C(){return Object.create(null)}function y(t){t.forEach(P)}function T(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return $;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(G(n,e))}function ft(t,n,e,i){if(t){const r=D(t,n,e,i);return t[0](r)}}function D(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const c=D(n,e,i,l);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&s.push(a)}n=s}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const u=n[s].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:Q(1,r,g=>n[e[g]].claim_order,u))-1;i[s]=e[a]+1;const f=a+1;e[f]=s,r=Math.max(f,r)}const l=[],c=[];let o=n.length-1;for(let s=e[r]+1;s!=0;s=i[s-1]){for(l.push(n[s-1]);o>=s;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);l.reverse(),c.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<c.length;s++){for(;u<l.length&&c[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(c[s],a)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function pt(){return A(" ")}function yt(){return A("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function L(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function xt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:L(t,i,n[i])}function bt(t,n){for(const e in n)L(t,e,n[e])}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,r=!1){tt(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const s=e(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,n,e,i){return B(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||l.push(o.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function $t(t,n,e){return q(t,n,e,X)}function vt(t,n,e){return q(t,n,e,Y)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function wt(t){return nt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList[e?"add":"remove"](n)}function et(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function At(t,n){return new t(n)}let p;function m(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function Ct(t){w().$$.on_destroy.push(t)}function Mt(){const t=w();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const l=et(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}const h=[],M=[],x=[],O=[],z=Promise.resolve();let k=!1;function F(){k||(k=!0,z.then(H))}function Ot(){return F(),z}function N(t){x.push(t)}const E=new Set;let d=0;function H(){if(d!==0)return;const t=p;do{try{for(;d<h.length;){const n=h[d];d++,m(n),it(n.$$)}}catch(n){throw h.length=0,d=0,n}for(m(null),h.length=0,d=0;M.length;)M.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];E.has(e)||(E.add(e),e())}x.length=0}while(h.length);for(;O.length;)O.pop()();k=!1,E.clear(),m(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const b=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function Tt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&(b.delete(t),t.i(n))}function Dt(t,n,e,i){if(t&&t.o){if(b.has(t))return;b.add(t),_.c.push(()=>{b.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Lt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],o=n[l];if(o){for(const s in c)s in o||(i[s]=1);for(const s in o)r[s]||(e[s]=o[s],r[s]=1);t[l]=o}else for(const s in c)r[s]=1}for(const c in i)c in e||(e[c]=void 0);return e}function Bt(t){t&&t.c()}function qt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||N(()=>{const c=t.$$.on_mount.map(P).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(N)}function st(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(h.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,l,c,o=[-1]){const s=p;m(t);const u=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(s?s.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:n.target||s.$$.root};c&&c(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,g,...S)=>{const j=S.length?S[0]:g;return u.ctx&&r(u.ctx[f],u.ctx[f]=j)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](j),a&&ot(t,f)),g}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const f=Z(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),H()}m(s)}class Ft{$destroy(){st(this,1),this.$destroy=$}$on(n,e){if(!T(e))return $;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{st as A,Ot as B,$ as C,ft as D,_t as E,dt as F,at as G,U as H,lt as I,Ct as J,I as K,ht as L,xt as M,Lt as N,Y as O,vt as P,bt as Q,Mt as R,Ft as S,Nt as T,gt as U,y as V,N as W,pt as a,mt as b,wt as c,Tt as d,yt as e,rt as f,Pt as g,V as h,zt as i,jt as j,X as k,$t as l,Z as m,L as n,St as o,kt as p,A as q,nt as r,ut as s,Dt as t,Et as u,M as v,At as w,Bt as x,qt as y,ct as z};
