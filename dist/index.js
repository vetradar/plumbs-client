var h="https://app.plumbs.com/api/v2/",p={"Content-Type":"application/json"},r=class{_apiKey;_baseUrl=h;Fetch;constructor(e){if(e==null||e==="")throw new Error("API Key is required");this._apiKey=e,this.Fetch=async(s,a)=>{let{body:c,params:t,...l}=a||{},m=new Headers({...p,Authorization:`Api-Key ${this._apiKey}`}),n=`${this._baseUrl}${s}`;if(t&&Object.keys(t).length>0){let i=Object.keys(t).map(u=>u+"="+encodeURIComponent(t[u])).join("&");n=`${n}?${i}`;}let o=await fetch(n,{...l,headers:m});if(!o.ok){let i=`An error has occurred: ${o.statusText}`;throw new Error(i)}return o.json()};}auth(){return {autologinLink:e=>this.Fetch("/auth/autologin-link",{...e,method:"GET"})}}algorithm(){return {getList:e=>this.Fetch("contents/algorithm",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/algorithm/${e}`,{method:"GET"})}}dxTx(){return {getList:e=>this.Fetch("contents/clinical-brief",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/clinical-brief/${e}`,{method:"GET"})}}monograph(){return {getList:e=>this.Fetch("contents/monograph",{params:e,method:"GET"}),getById:(e,s)=>this.Fetch(`contents/monograph/${e}`,{params:s,method:"GET"})}}patientGuide(){return {getList:e=>this.Fetch("contents/patient-guides",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/patient-guides/${e}`,{method:"GET"})}}medicationGuide(){return {getList:e=>this.Fetch("contents/veterinary-medication-guide",{...e,method:"GET"}),getById:e=>this.Fetch(`contents/veterinary-medication-guide/${e}`,{method:"GET"})}}},P=r;

export { P as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map