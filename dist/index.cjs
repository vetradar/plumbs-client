'use strict';

var p="https://app.plumbs.com/api/v2/",h={"Content-Type":"application/json"},r=class{_apiKey;_baseUrl=p;Fetch;constructor(e){if(this._apiKey=e??process.env.PLUMBS_API_KEY??"",this._apiKey===void 0||this._apiKey===null||this._apiKey==="")throw new Error("API Key is required");this.Fetch=async(s,u)=>{let{body:c,params:t,...l}=u||{},m=new Headers({...h,Authorization:`Api-Key ${this._apiKey}`}),n=`${this._baseUrl}${s}`;if(t&&Object.keys(t).length>0){let o=Object.keys(t).map(a=>a+"="+encodeURIComponent(t[a])).join("&");n=`${n}?${o}`;}let i=await fetch(n,{...l,headers:m});if(!i.ok){let o=`An error has occurred: ${i.statusText}`;throw new Error(o)}return i.json()};}auth(){return {autologinLink:e=>this.Fetch("/auth/autologin-link",{...e,method:"GET"})}}algorithm(){return {getList:e=>this.Fetch("contents/algorithm",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/algorithm/${e}`,{method:"GET"})}}dxTx(){return {getList:e=>this.Fetch("contents/clinical-brief",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/clinical-brief/${e}`,{method:"GET"})}}monograph(){return {getList:e=>this.Fetch("contents/monograph",{params:e,method:"GET"}),getById:(e,s)=>this.Fetch(`contents/monograph/${e}`,{params:s,method:"GET"})}}patientGuide(){return {getList:e=>this.Fetch("contents/patient-guides",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/patient-guides/${e}`,{method:"GET"})}}medicationGuide(){return {getList:e=>this.Fetch("contents/veterinary-medication-guide",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/veterinary-medication-guide/${e}`,{method:"GET"})}}},P=r;

module.exports = P;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map