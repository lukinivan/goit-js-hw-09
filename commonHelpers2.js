import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),m=t.elements.email,r=t.elements.message,o="feedback-form-state",a={email:"",message:""};u();function i(e,n){let l;return function(...s){console.log(s),clearTimeout(l),l=setTimeout(()=>e.apply(this,s),n)}}const c=i(()=>{localStorage.setItem(o,JSON.stringify(a))},300);t.addEventListener("input",e=>{e.target.type==="email"&&(a.email=m.value),e.target.type==="textarea"&&(a.message=r.value),c()});t.addEventListener("submit",e=>{if(e.preventDefault(),!t.checkValidity())return alert("All form fields must be filled in");localStorage.removeItem(o),t.reset()});function u(){const e=JSON.parse(localStorage.getItem(o));e&&(m.value=a.email=e.email,r.value=a.message=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
