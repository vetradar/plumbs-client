'use strict';

var axios = require('axios');

var t=class{constructor(s){this._baseUrl="https://app.plumbs.com/api/v2";if(s==null||s==="")throw new Error("API Key is required");this._apiKey=s,this.axios=new axios.Axios({baseURL:this._baseUrl,headers:{Authorization:`Api-Key ${this._apiKey}`,"Content-Type":"application/json"}});}auth(){return {autologinLink:s=>this.axios.post("/auth/autologin-link",{targetUrl:s})}}algorithm(){return {getList:s=>this.axios.get("contents/algorithm",{params:s}),getById:s=>this.axios.get(`contents/algorithm/${s}`)}}dxtx(){return {getList:s=>this.axios.get("contents/clinical-brief/",{params:s}),getById:s=>this.axios.get(`contents/clinical-brief/${s}`)}}monograph(){return {getList:s=>this.axios.get("contents/monograph/",{params:s}),getById:s=>this.axios.get(`contents/monograph/${s}`)}}patientGuide(){return {getList:s=>this.axios.get("contents/patient-guides/",{params:s}),getById:s=>this.axios.get(`contents/patient-guides/${s}`)}}medicationGuide(){return {getList:s=>this.axios.get("contents/veterinary-medication-guide/",{params:s}),getById:s=>this.axios.get(`contents/veterinary-medication-guide/${s}`)}}},o=t;

module.exports = o;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map