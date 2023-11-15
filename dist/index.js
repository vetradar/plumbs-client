'use strict';

var m="https://app.plumbs.com/api/v2/",p={"Content-Type":"application/json"},i=class{_apiKey;_baseUrl=m;Fetch;constructor(e){if(e==null||e==="")throw new Error("API Key is required");this._apiKey=e,this.Fetch=async(s,r)=>{let{body:g,params:t,...u}=r||{},a=new Headers({...p,Authorization:`Api-Key ${this._apiKey}`}),n=`${this._baseUrl}${s}`;if(t&&Object.keys(t).length>0){let l=Object.keys(t).map(o=>o+"="+encodeURIComponent(t[o])).join("&");n=`${n}?${l}`;}return await(await fetch(n,{...u,headers:a})).json()};}auth(){return {autologinLink:e=>this.Fetch("/auth/autologin-link",{...e,method:"GET"})}}algorithm(){return {getList:e=>this.Fetch("contents/algorithm",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/algorithm/${e}`,{method:"GET"})}}dxTx(){return {getList:e=>this.Fetch("contents/clinical-brief",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/clinical-brief/${e}`,{method:"GET"})}}monograph(){return {getList:e=>this.Fetch("contents/monograph",{params:e,method:"GET"}),getById:(e,s)=>this.Fetch(`contents/monograph/${e}`,{params:s,method:"GET"})}}patientGuide(){return {getList:e=>this.Fetch("contents/patient-guides",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/patient-guides/${e}`,{method:"GET"})}}medicationGuide(){return {getList:e=>this.Fetch("contents/veterinary-medication-guide",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/veterinary-medication-guide/${e}`,{method:"GET"})}}},P=i;

module.exports = P;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map