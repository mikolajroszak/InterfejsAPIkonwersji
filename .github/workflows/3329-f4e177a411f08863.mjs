"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3329],{603387:(s,e,a)=>{a.d(e,{Fe:()=>r,bO:()=>i,eQ:()=>t,s4:()=>_});let r={BUSINESS_HIERARCHY_CHILD:"BUSINESS_HIERARCHY_CHILD",BUSINESS_HIERARCHY_MEMBER:"BUSINESS_HIERARCHY_MEMBER"},t={business_relationship_invite:"business_relationship"},_={PARTNER_REQUEST:"PARTNER_REQUEST",MEMBER_INVITE:"MEMBER_INVITE",PARTNER_INVITE:"PARTNER_INVITE",ORGANIZATION_MANAGER_INVITE:"ORGANIZATION_MANAGER_INVITE"},i=s=>0===s?"DIRECT_PERMISSION":"AGGREGATED_PERMISSION"},250304:(s,e,a)=>{a.d(e,{EF:()=>u,Hg:()=>b,Hl:()=>T,IR:()=>l,Je:()=>E,K3:()=>h,O1:()=>U,Q6:()=>A,QE:()=>r,V3:()=>m,Z4:()=>I,c7:()=>S,cU:()=>i,cg:()=>t,dZ:()=>_,gO:()=>R,j$:()=>p,j9:()=>v,p:()=>M,pg:()=>w,pk:()=>y,pt:()=>P,qq:()=>G,sy:()=>c,tP:()=>D,uE:()=>N,vk:()=>L,w2:()=>d,we:()=>C,ww:()=>O,xX:()=>n,xw:()=>$,yR:()=>o});let r=3e3,t=280,_=500,i=1e4,n=250,d=251,E=50,c=50,u=20,o=20,A={DASHBOARD:"DASHBOARD",PEOPLE:"PEOPLE",PARTNERS:"PARTNERS",AD_ACCOUNTS:"AD_ACCOUNTS",AD_ACCOUNTS_PENDING_TAB:"AD_ACCOUNTS_PENDING_TAB",HISTORY:"HISTORY",PEOPLE_DETAIL:"PEOPLE_DETAIL",PARTNERS_DETAIL:"PARTNERS_DETAIL",SHARED_PARTNERS_DETAIL:"SHARED_PARTNERS_DETAIL",AD_ACCOUNTS_DETAIL:"AD_ACCOUNTS_DETAIL",PENDING_AD_ACCOUNTS_DETAIL:"PENDING_AD_ACCOUNTS_DETAIL",PEOPLE_INVITES:"PEOPLE_INVITES",PARTNERS_INVITES:"PARTNERS_INVITES",CHOOSER:"CHOOSER",PARTNERS_REQUEST_PAGE:"PARTNERS_REQUEST_PAGE",PARTNERS_INVITE_PAGE:"PARTNERS_INVITE_PAGE",PROFILES:"PROFILES",PROFILES_DETAIL:"PROFILES_DETAIL",PARTNERS_PENDING_TAB:"PARTNERS_PENDING_TAB",PEOPLE_PENDING_TAB:"PEOPLE_PENDING_TAB",USERS:"USERS",ACOUNTS:"ACCOUNTS",BUSINESS_SECURITY:"BUSINESS_SECURITY",SUPPORT_TOOL:"SUPPORT_TOOL",ASSETS:"ASSETS",ASSET_GROUPS:"ASSET_GROUPS",INVOICE_MANAGEMENT:"INVOICE_MANAGEMENT",BUSINESS_HIERARCHY:"BUSINESS_HIERARCHY",BUSINESS_HIERARCHY_BUSINESS_SECURITY:"BUSINESS_HIERARCHY_BUSINESS_SECURITY",MANAGERS:"MANAGERS",AUDIENCES:"AUDIENCES",SHARED_TAGS:"SHARED_TAGS",CATALOGS:"CATALOGS",BRAND_SAFETY:"BRAND_SAFETY",AD_ACCOUNTS_CEE_MIGRATION:"AD_ACCOUNTS_CEE_MIGRATION"},N={PARTNER:"PARTNER",PARTNER_ADMIN:"PARTNER_ADMIN"},I={ADVERTISER_OWNED_AD_ACCOUNT:"ADVERTISER_OWNED_AD_ACCOUNT",AGENCY_OWNED_AD_ACCOUNT:"AGENCY_OWNED_AD_ACCOUNT"},l={ASCENDING:"ASCENDING",DESCENDING:"DESCENDING"},S={AD_ACCOUNT:"AD_ACCOUNT",PERSON:"PERSON",PARTNER:"PARTNER",CATALOG:"CATALOG"},T={PERSON:"PERSON",PARTNER:"PARTNER",PROFILE:"PROFILE"},R={ADMIN:"ADMIN",ANALYST:"ANALYST",FINANCE_MANAGER:"FINANCE_MANAGER",AUDIENCE_MANAGER:"AUDIENCE_MANAGER",CAMPAIGN_MANAGER:"CAMPAIGN_MANAGER",CATALOGS_MANAGER:"CATALOGS_MANAGER"},p=["ADMIN","ANALYST","FINANCE_MANAGER","AUDIENCE_MANAGER","CAMPAIGN_MANAGER","CATALOGS_MANAGER"],y=["CATALOGS_MANAGER","CATALOGS_VIEWER"],m={EMPLOYEE:"EMPLOYEE",BIZ_ADMIN:"BIZ_ADMIN",OWNER:"OWNER"},b=["PROFILE_PUBLISHER"],D={AD_ACCOUNT:0,PROFILE:2,ASSET_GROUP:3},O={0:"AD_ACCOUNT",2:"PROFILE",3:"ASSET_GROUP"},C={id:"0",is_pin_support_user:!0,biz_roles:[m.BIZ_ADMIN],business_roles:[m.BIZ_ADMIN],user:{username:"psupport",full_name:"Pinterest support",image_small_url:"https://i.pinimg.com/60x60_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg",image_medium_url:"https://i.pinimg.com/150x150_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg"}},P={ACTIVE:0,PENDING:1},h={ACTIVE:"active",PENDING:"pending"},v="filter_type",L={page:1,totalCount:0,limit:10,sortDirection:"ASCENDING",sortBy:void 0,searchBy:void 0,searchTerm:""},G={WARNING:"WARNING",DEFAULT:"DEFAULT"},U={BUSINESS_INVITE_INVALID:2932,BUSINESS_ACCESS_PERSONAL_ACCOUNT:2936,INVALID_USERNAME:90,ACCESS_DENIED:280,BUSINESS_RELATIONSHIP_ALREADY_EXISTS:2751,ODO_BUSINESS_RELATIONSHIP_ALREADY_EXISTS:53,BUSINESS_RELATIONSHIP_COUNT_EXCEEDED:2769,BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:2938,ODO_BUSINESS_NUMBER_MEMBERS_IN_POLICY_EXCEEDS:66,ODO_BIZ_INVITE_EXISTS:71,INVALID_ODO_REQUEST:2755,BUSINESS_INVITE_STACKED_ERROR:2773,ACL_POLICY_NOT_FOUND:1110,BUSINESS_INVITE_NOT_EXIST:2770,BUSINESS_RELATIONSHIP_PREMATURE_MIGRATION_INVITE:4300},w={ALL:"ALL",OWNED:"OWNED",SHARED:"SHARED"},$=new Date("2024-10-31T12:00"),M="Httpool by Aleph"},443943:(s,e,a)=>{a.d(e,{$2:()=>n,Ah:()=>E,IW:()=>i,Vs:()=>c,dF:()=>u,sl:()=>d});var r=a(250304),t=a(728241),_=a(23234);let i=(s={},e={})=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex||0},n=(s={},e)=>{if(s.limit||s.sortBy||s.sortDirection||s.searchTerm)return 0;if(s.page){let a=s.limit||e.limit;return((s.page||e.page)-1)*a}return e.startIndex},d=(s,e,a,r)=>{let{businessId:t,..._}=a,{...i}=r;return{id:s,...i,..._,searchBy:_.searchBy,searchTerm:_.searchTerm||i.searchTerm,limit:_.limit||i.limit,page:_.page||i.page,sortBy:_.sortBy||i.sortBy,sortDirection:_.sortDirection||i.sortDirection,startIndex:e,...0===e&&{page:1}}},E=(s,e)=>e.reduce((e,a)=>({ids:e.ids.concat(s(a)),data:{...e.data,[s(a)]:a}}),{ids:[],data:{}}),c=(s,e)=>{let a={page:s.page??e.page,limit:s.limit??e.limit,sortBy:s.sortBy??e.sortBy,searchBy:s.searchBy,searchTerm:s.searchTerm??e.searchTerm,sortDirection:s.sortDirection??e.sortDirection},r=i(s,e);return{...a,startIndex:r,...0===r&&{page:1}}},u=async(s,e,a,i)=>{let n="PEOPLE"===a?_.JC:t.Eg,{data:{data:d=[],total_data_count:E}={}}=i?await i({limit:r.xX,startIndex:0})||{}:await n({...s,limit:r.xX,startIndex:0,id:s?.id||""}),c=Math.ceil(E/r.xX);if(c<=1)return{data:{data:d,total_data_count:E}};let u=[...Array(c).keys()].slice(1);return{data:{data:(await Promise.allSettled(u.map(e=>i?i({limit:r.xX,startIndex:e*r.xX}):n({...s,limit:r.xX,startIndex:e*r.xX,id:s?.id||""})))).reduce((s,e)=>(e.value?.data?.data&&(s=s.concat(e.value.data.data)),s),d),total_data_count:E}}}},938927:(s,e,a)=>{a.d(e,{BG:()=>P,Br:()=>N,EB:()=>c,G2:()=>O,GS:()=>G,JE:()=>L,N1:()=>C,Ns:()=>w,Oi:()=>U,Tm:()=>M,W3:()=>S,Yg:()=>B,_A:()=>g,cE:()=>y,cR:()=>T,cp:()=>b,eo:()=>D,fc:()=>h,ib:()=>o,jk:()=>m,l_:()=>$,lo:()=>v,oC:()=>u,ot:()=>I,pI:()=>p,xD:()=>Z,xZ:()=>l});var r=a(948659),t=a(250304),_=a(372085),i=a(944033),n=a(728241),d=a(23234),E=a(313041);let c=async(s,e,a,r,t,_,i)=>"PARTNER"===t?await (0,n.SZ)({businessId:r,partnerId:s,assetId:a,permissions:e,clientBusinessId:_,businessHierarchyNodeId:i}):await (0,d.Jg)({businessId:r,memberId:s,assetId:a,permissions:e,businessHierarchyNodeId:i}),u=async(s,e,a,r)=>{if(0===e.length)return;let t=[];e.forEach(({assigneeIds:e,adAccountIds:_,permissions:i})=>{0!==i.length&&e.forEach(e=>{_.forEach(_=>{t.push(c(e,i,_,s,a,void 0,r))})})}),await Promise.all(t)},o=async(s,e,a,r,t)=>{let i="PEOPLE"===r?"MEMBER_INVITE":"PARTNER_INVITE",n=e.reduce((s,e)=>{let a=Object.keys(e)[0],r=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),d=a.map(e=>(0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(n),invite_type:i,business_hierarchy_node_id:t}}));await Promise.all(d)},A=s=>s.reduce((s,e)=>{let a=Object.keys(e)[0],r=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{}),N=async(s,e,a)=>{let r=A(a);return(await (0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/assets/access/`,method:"POST",data:{resource_id_to_roles:r}})).resource_response.data},I=async(s,e,a,r)=>{let t=e.reduce((s,e)=>{let a=Object.keys(e)[0],r=Object.values(e)[0].includes("ADMIN")?{[a]:["ADMIN"]}:e;return{...s,...r}},{});return(await (0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${a}/assets/access/`,method:"POST",data:{resource_id_to_roles:JSON.stringify(t),invite_type:"PARTNER_REQUEST",business_hierarchy_node_id:r}})).resource_response},l=async s=>(s?await (0,_.Z)({url:"ads/v4/advertisers/countries/",method:"GET",data:{business_id:s}}):await (0,_.Z)({url:"ads/v4/advertisers/countries/",method:"GET"})).resource_response.data,S=async(s,e,a,t,i,n)=>(await (0,_.Z)({url:"/ads/v4/advertisers/",method:"POST",data:{owner_user_id:s,name:t,country:i,business_hierarchy_node_id:a,tos_id:n||(0,E.Fc)(r.tN[i]),...e&&{agency_user_id:e}}})).resource_response.data,T=async()=>{let s=await (0,_.Z)({url:"/ads/v4/business_access/businesses/me/employers/"}),e=s.resource_response.data?.data;return await Promise.all(e||[])},R=async({businessId:s,assetId:e,limit:a,sortBy:r="name",searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E,resourceType:c,permissions:u,assetOwnerBusinessIds:o,assetGroupId:A})=>{let N={};(u?.length||0)>0&&(N={...N,permissions:u}),(o?.length||0)>0&&(N={...N,asset_owner_business_ids:o}),e&&(N={...N,child_asset_id:e}),A&&(N={...N,asset_group_id:A});let I=a&&a<t.xX?a:t.xX;return(await (0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/assets/`,data:{page_size:I,sort_by:r,search_by:i,start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,resource_type:c,filters:N?JSON.stringify(N):void 0}})).resource_response},p=async({businessId:s,assetIds:e,resourceType:a,limit:r,sortBy:i="name",sortDirection:n="ASCENDING",searchBy:d,searchTerm:E="",startIndex:c=0,filtersPayload:u})=>{let o=r||Math.min(t.xX,e.length||1),A=u&&Object.keys(u).length>0?{filters:JSON.stringify(u)}:{};return(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/assets_by_ids`,data:{asset_ids:e,resource_type:a,page_size:o,sort_by:i,sort_ascending:"ASCENDING"===n,search_by:d,search_value:E,start_index:c,...A}})).resource_response},y=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:t="",startIndex:_=0,sortDirection:i="ASCENDING",forPartner:n=!1,includeAssetSummary:d=!1})=>{let E=await R({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:t,startIndex:_,sortDirection:i,resourceType:"AD_ACCOUNT",permissions:n?["OWNER"]:void 0});if(!d)return E;{let a=await p({businessId:s,assetIds:E?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"AD_ACCOUNT"}),r=E?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{...E,data:{...E?.data,data:r}}}},m=async({id:s,limit:e,sortBy:a="name",searchBy:r="name",searchTerm:t="",startIndex:_=0,sortDirection:i="ASCENDING",includeAssetSummary:n=!1})=>{let d=await R({id:s,businessId:s,limit:e,sortBy:a,searchBy:r,searchTerm:t,startIndex:_,sortDirection:i,resourceType:"CATALOG"});if(!n)return d;{let a=await p({businessId:s,assetIds:d?.data.data.map(s=>s.asset_id)||[],limit:e,resourceType:"CATALOG"}),r=d?.data.data.map(s=>a?.data.data[s.asset_id]?{...s,...a.data.data[s.asset_id]}:null).filter(s=>!!s);return{...d,data:{...d?.data,data:r}}}},b=async({id:s,limit:e,sortBy:a="name",sortDirection:r="ASCENDING",searchBy:t="name",searchTerm:_="",startIndex:i=0})=>R({id:s,businessId:s,limit:e,sortBy:a,searchBy:t,searchTerm:_,startIndex:i,sortDirection:r,resourceType:"PROFILE"}),D=async({id:s,assetIds:e,type:a})=>await p({businessId:s,resourceType:t.ww[a],assetIds:e}),O=async({businessId:s,assetId:e,resourceType:a="AD_ACCOUNT",includeAssetSummary:r=!1})=>{let t=await R({id:s,businessId:s,searchBy:"id",searchTerm:e,assetId:e,resourceType:a});if(!r)return{...t,data:{...t?.data,data:t?.data?.data[0]}};{let e=await p({businessId:s,assetIds:t?.data.data.map(s=>s.asset_id)||[],limit:1,resourceType:a}),r=t?.data.data.map(s=>({...s,...e?.data.data[s.asset_id]}));return{...t,data:{...t?.data,data:r?.[0]}}}},C=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:i,searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<t.xX?a:t.xX;return(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:c,sort_by:r,search_by:i||"FULL_NAME",start_index:d,search_value:n,sort_ascending:"ASCENDING"===E}})).resource_response},P=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:i,searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<t.xX?a:t.xX;return(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,data:{page_size:c,sort_by:r,search_by:i||"FULL_NAME",start_index:d,search_value:n,sort_ascending:"ASCENDING"===E}})).resource_response},h=async({id:s,businessId:e,assetId:a,limit:r,sortBy:t="name",searchBy:_="name",searchTerm:i,startIndex:n,sortDirection:d,resourceType:E="ASSET_GROUP"})=>R({id:s,businessId:e,assetId:a,limit:r,sortBy:t,searchBy:_,searchTerm:i,startIndex:n,sortDirection:d,resourceType:E}),v=async({id:s,businessId:e,limit:a,sortBy:r="name",searchBy:t="name",searchTerm:_,startIndex:i,sortDirection:n,resourceType:d="ASSET_GROUP"})=>R({id:s,businessId:e,limit:a,sortBy:r,searchBy:t,searchTerm:_,startIndex:i,sortDirection:n,resourceType:d}),L=async(s,e)=>(await (0,_.Z)({url:`ads/v4/businesses/${s.businessId}/advertisers/metrics`,method:"POST",data:e})).resource_response.data,G=async(s,e)=>(await (0,_.Z)({url:`ads/v4/business_hierarchy/${s.businessHierarchyId}/advertisers/metrics`,method:"POST",data:e})).resource_response.data,U=async(s,e,a=!1)=>{let r=(await (0,_.Z)({url:`ads/v4/advertisers/${s}/terms_of_service/`,method:"GET",data:{tos_type:e,include_html:a}})).resource_response.data;return{id:r.id,html:r.html,hasAccepted:r.has_accepted,advertiserId:r.advertiser_id}},w=async s=>(await (0,_.Z)({url:`ads/v4/advertisers/${s}/advertiser_settings`,method:"GET",data:{}})).resource_response.data,$=async({advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a})=>(await (0,_.Z)({url:`ads/v4/advertisers/${s??""}/advertiser_settings`,method:"POST",data:{advertiser_id:s,default_utm_source_enabled:e,custom_url_parameters:a}})).resource_response.data,M=async()=>(await (0,_.Z)({url:"ads/v4/resellers/public_reseller_info"})).resource_response,f=async(s,e,a=!1)=>(await (0,_.Z)({url:`ads/v4/resellers/business/${s}/migrating_ad_accounts`,data:{advertiser_ids:e.join(","),show_migrated_advertisers:a}})).resource_response,g=async s=>{let e;let a=await M(),r=(a?.data||[]).reduce((s,e)=>({...s,[e.id]:e}),{}),t=await y({id:s,limit:100,includeAssetSummary:!0}),_=t.data?.data||[],n=[],d=await (0,i.Bc)({id:s,type:"PARTNER_INVITE",filters:{invite_status:["PENDING","EXPIRED"]}});for(let s of _)n.push(s.asset_id);let E=await f(s,n,!0),{migrating_advertisers:c,migration_state:u}=E?.data||{},o=c||[],A=r[o[0].reseller_user_id],N=_.filter(s=>o.some(e=>s.asset_id===e.advertiser_id&&e.reseller_user_id===A.id)).map(s=>({id:s.asset_id,name:s.asset.name,billingCountry:s.country})),I=(d.data.data||[]).filter(s=>s.extended_user_info.id===A.id),l="NEED_RESELLER_PARTNERSHIP";if("INVITE_REJECTED"===u)l="RESELLER_INVITE_DECLINED";else if("INVITE_ACCEPTED"===u)l="RESELLER_INVITE_ACCEPTED";else if(I.length>0){let s=I[0];e=s.id,"PENDING"===s.invite_data.invite_status?l="RESELLER_INVITE_PENDING":"EXPIRED"===s.invite_data.invite_status&&(l="RESELLER_INVITE_EXPIRED")}return{resellerMarketInfo:{resellerUserId:A.id,resellerName:A.name,status:l,inviteId:e},adAccountsToMigrate:N}},B=async({businessId:s,firstName:e,lastName:a,resellerUserId:r,email:t,businessInformation:i})=>{let n=await (0,_.Z)({url:`ads/v4/resellers/business/${s}/migration_info`,method:"POST",data:{advertiser_body:i,first_name:e,last_name:a,reseller_user_id:r,email:t}});if(n.resource_response.error)throw Error(n.resource_response.error.message_detail||n.resource_response.error.message);return n.resource_response},Z=async(s,e,a)=>{let r=await (0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/assets/access/`,method:"POST",data:{invite_type:"PARTNER_INVITE",resource_id_to_roles:JSON.stringify(a)}});if(r.resource_response.error)throw Error(r.resource_response.error.message_detail||r.resource_response.error.message);return r.resource_response}},944033:(s,e,a)=>{a.d(e,{Bc:()=>_,ED:()=>u,KD:()=>I,Ts:()=>i,UF:()=>d,XJ:()=>c,c_:()=>E,hd:()=>A,oK:()=>R,t$:()=>n,uN:()=>T,vV:()=>o,xW:()=>l});var r=a(372085),t=a(232076);let _=async({id:s,type:e,filters:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:"MEMBER_INVITE"===e,filters:JSON.stringify({invite_type:e,...a})}})).resource_response,i=async({businessId:s,inviteOrRequestId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,data:{invite_type:a}})).resource_response,n=async({businessId:s,inviteIds:e,invite_type:a="MEMBER_INVITE"})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites`,data:{invite_or_request_ids:e,invite_type:a}})).resource_response,d=async({businessId:s,inviteId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"DELETE",data:{type:a}})).resource_response,E=async({businessId:s,inviteId:e,type:a})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites/${e}/`,method:"PUT",data:{invite_type:a}})).resource_response,c=async({id:s,filters:e})=>(await (0,r.Z)({url:`/ads/v4/business_access/businesses/${s}/invites_and_requests/`,data:{is_member:!1,filters:JSON.stringify({invite_type:"PARTNER_REQUEST",...e})}})).resource_response,u=async({requestId:s,role:e,resources:a,accept:_,businessId:i})=>{let n={accept:_};return e&&(n.role_name=e),a&&!(0,t.Z)(a)&&(n.resource_id_to_roles=JSON.stringify(a)),(await (0,r.Z)({url:`/ads/v4/business_access/requests/${s}/`,method:"POST",data:{...a&&!(0,t.Z)(a)&&{resource_id_to_roles:JSON.stringify(a)},accept_request:_,business_entity_id:i}})).resource_response},o=async({requestee:s,asset:e,requester:a,businessId:t})=>(await (0,r.Z)({url:"/ads/v4/business_access/request/entitlement/",method:"GET",data:{requestee_id:s,asset_id:e,requester_id:a,business_entity_id:t}})).resource_response,A=async s=>(await (0,r.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"GET",data:{token:s}})).resource_response,N=async(s,e)=>(0,r.Z)({url:"ads/v4/business_access/business_hierarchy_invites/unauth/",method:"PATCH",data:{token:e,action:s}}),I=async s=>N("ACCEPT",s),l=async s=>N("REJECT",s),S=async(s,e)=>(0,r.Z)({url:"/ads/v4/business_access/invites/unauth_respond/",method:"POST",data:{token:e,accept_invite:s}}),T=async s=>S(!0,s),R=async s=>S(!1,s)},728241:(s,e,a)=>{a.d(e,{Bq:()=>N,Eg:()=>c,Jq:()=>d,K7:()=>E,M9:()=>I,OA:()=>T,Of:()=>A,SB:()=>u,SZ:()=>S,Zk:()=>n,h9:()=>l,p9:()=>o,wi:()=>R});var r=a(250304),t=a(372085),_=a(232076),i=a(443943);let n=async({partnerId:s,businessId:e,businessHierarchyNodeId:a})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_INVITE",business_hierarchy_node_id:a}})).resource_response,d=async({partnerId:s,businessId:e})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${e}/partners/${s}/invite/`,method:"POST",data:{invite_type:"PARTNER_REQUEST"}})).resource_response,E=async({businessId:s,partnerId:e,businessHierarchyNodeId:a,role:r,partner_type:_})=>(await (0,t.Z)({url:`/ads/v4/business_access/businesses/${s}/partners/${e}/`,method:"DELETE",data:{role_name:r,partner_type:_,business_hierarchy_node_id:a}})).resource_response,c=async({id:s,limit:e,sortBy:a="full_name",searchBy:i=["FULL_NAME","BUSINESS_ID","USERNAME"],searchTerm:n="",startIndex:d=0,sortDirection:E="ASCENDING",includeAssetSummary:c,partnerType:u,partners:o=[],filters:A={}})=>{let N=e&&e<r.xX?e:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/`,data:{page_size:N,sort_by:a,search_by:i,start_index:d,search_value:n,assets_summary:c?"true":"false",sort_ascending:"ASCENDING"===E,partner_type:u,partner_ids:o,filters:(0,_.Z)(A)?void 0:JSON.stringify(A)}})).resource_response},u=async({businessId:s,partnerId:e,limit:a,sortBy:_,searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:c,sort_by:_,...n&&{search_by:i},start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,partner_type:"INTERNAL"}})).resource_response},o=async({businessId:s,partnerId:e,limit:a,sortBy:_,searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E,partnerType:c="INTERNAL"})=>{let u=a&&a<r.xX?a:r.xX;return({data:[],...(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:u,sort_by:_,...n&&{search_by:i},start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,partner_type:c,resource_type:"CATALOG"}})).resource_response.data}).data},A=async({businessId:s,partnerId:e,limit:a,sortBy:_,searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:c,sort_by:_,...n&&{search_by:i},start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,partner_type:"EXTERNAL"}})).resource_response},N=async({businessId:s,partnerId:e,limit:a,sortBy:_,searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{page_size:c,sort_by:_,...n?{search_by:i}:{},start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,resource_type:"ASSET_GROUP",partner_type:"INTERNAL"}})).resource_response},I=async(s,e,a=!1,_)=>{let n=(await (0,i.dF)({id:s,partnerType:"INTERNAL"},e,"PARTNER")).data.data.filter(s=>_&&s.id===_||!s.is_reseller),d=await Promise.all(n.map(async({id:e})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/`,method:"GET",data:{limit:r.xX,resource_type:r.ww[a?r.tP.PROFILE:r.tP.AD_ACCOUNT],partner_type:"INTERNAL"}})).resource_response.data));return n.map((s,e)=>({...s,assets:d[e].data}))},l=async({businessId:s,partnerId:e,assetId:a})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/`,method:"GET"})).resource_response,S=async({businessId:s,partnerId:e,assetId:a,permissions:r,clientBusinessId:_,businessHierarchyNodeId:i})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:r.includes("ADMIN")?["ADMIN"]:r,business_hierarchy_node_id:i,..._?{client_business_id:_}:{}}})).resource_response.data,T=async({businessId:s,partnerId:e,assetId:a,businessHierarchyNodeId:r,partner_type:_="INTERNAL"})=>(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/partners/${e}/assets/${a}/access/`,method:"DELETE",data:{partner_type:_,business_hierarchy_node_id:r}})).resource_response.data,R=async({businessId:s,assetId:e,limit:a,sortBy:_,searchBy:i="FULL_NAME",searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<r.xX?a:r.xX;return(await (0,t.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/partners/`,data:{page_size:c,sort_by:_,search_by:i,search_value:n,start_index:d,sort_ascending:"ASCENDING"===E}})).resource_response}},23234:(s,e,a)=>{a.d(e,{GL:()=>T,JC:()=>o,Jg:()=>R,QC:()=>I,UQ:()=>d,bP:()=>p,dx:()=>c,kF:()=>y,kH:()=>A,kY:()=>N,kZ:()=>E,mZ:()=>l,n5:()=>S,p6:()=>u,p_:()=>n,pe:()=>m});var r=a(603387),t=a(250304),_=a(372085),i=a(938927);let n=async(s,e,a,r)=>({data:[],...(await (0,_.Z)({url:`/ads/v4/business_access/businesses/${a}/members/batch_invite/`,method:"POST",data:{business_role:e,members:s,validate_only:!!r}})).resource_response.data}),d=async(s,e,a)=>({data:[],...(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.xX,...0===a||1===a?{asset_permission_type:(0,r.bO)(a)}:{}}})).resource_response.data}).data,E=async(s,e,a)=>({data:[],...(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,method:"GET",data:{limit:t.xX,resource_type:"CATALOG",...0===a||1===a?{asset_permission_type:(0,r.bO)(a)}:{}}})).resource_response.data}).data,c=async(s,e,a,r)=>({data:void 0,auxData:void 0,...(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/`,method:"DELETE",data:{business_role:a,business_hierarchy_node_id:r}})).resource_response.data}),u=async(s,e,a,r)=>(await (0,_.Z)({url:`ads/v4/business_access/businesses/${a}/members/${e}/`,method:"PUT",data:{business_role:s,...r?{business_hierarchy_node_id:r}:{}}})).resource_response.data,o=async({id:s,limit:e,filters:a,memberIds:r=[],sortBy:i="FULL_NAME",searchBy:n=["FULL_NAME","EMAIL","USERNAME"],searchTerm:d="",startIndex:E=0,sortDirection:c="ASCENDING",includeAssetSummary:u})=>{let o=e&&e<t.xX?e:t.xX;return(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/`,data:{page_size:o,member_ids:r.length?r.join(","):void 0,filters:a?JSON.stringify(a):void 0,sort_by:i,search_by:n,start_index:E,search_value:d,assets_summary:u?"true":"false",sort_ascending:"ASCENDING"===c,extend_info_from_user_api:!0}})).resource_response},A=async({id:s,limit:e,filters:a,sortBy:r="full_name",searchBy:_="full_name",searchTerm:i="",startIndex:n=0,sortDirection:d="ASCENDING",includeAssetSummary:E})=>{let c=Array.isArray(_)?_:[_],u=["FULL_NAME","USERNAME","BUSINESS_ID","EMAIL"].filter(s=>c.map(s=>s.toUpperCase().trim()).includes(s)),A=r.toUpperCase().trim()?"FULL_NAME":void 0;return o({businessId:s,id:s,limit:!e||e>t.xX?t.xX:e,filters:a,sortBy:A,searchBy:u,searchTerm:i,startIndex:n,sortDirection:d,includeAssetSummary:E})},N=async({id:s})=>(await (0,_.Z)({url:`/ads/v4/business_access/businesses/${s}/owner/`})).resource_response.data,I=async({businessId:s,personId:e,limit:a,sortBy:n,searchBy:d="name",searchTerm:E,startIndex:c,sortDirection:u,assetPermissionType:o,includeAssetSummary:A=!1})=>{let N=a&&a<t.xX?a:t.xX,I=await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:N,sort_by:n,search_by:d,start_index:c,search_value:E,sort_ascending:"ASCENDING"===u,...0===o||1===o?{asset_permission_type:(0,r.bO)(o)}:{}}});if(A){let e=await (0,i.pI)({businessId:s,assetIds:I.resource_response.data.data.map(s=>s.asset_id),resourceType:"AD_ACCOUNT"});return I.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),I.resource_response)}return I.resource_response},l=async({businessId:s,personId:e,limit:a,sortBy:n,searchBy:d="name",searchTerm:E,startIndex:c,sortDirection:u,assetPermissionType:o,includeAssetSummary:A=!1})=>{let N=a&&a<t.xX?a:t.xX,I=await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{sort_by:n,search_by:d,start_index:c,search_value:E,sort_ascending:"ASCENDING"===u,page_size:N,resource_type:"PROFILE",...0===o||1===o?{asset_permission_type:(0,r.bO)(o)}:{}}});if(A){let e=await (0,i.pI)({businessId:s,assetIds:I.resource_response.data.data.map(s=>s.asset_id),resourceType:"PROFILE"});return I.resource_response.data.data.reduce((s,e)=>({...s,data:{...s.data,data:{...s.data.data,[e.asset_id]:{...s.data.data[e.asset_id],...e}}}}),e)}return I.resource_response},S=async({businessId:s,personId:e,limit:a,sortBy:r,searchBy:i="name",searchTerm:n,startIndex:d,sortDirection:E,assetPermissionType:c})=>{let u=a&&a<t.xX?a:t.xX;return(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:u,sort_by:r,search_by:i,start_index:d,search_value:n,sort_ascending:"ASCENDING"===E,resource_type:"ASSET_GROUP",asset_permission_type:c}})).resource_response},T=async({businessId:s,personId:e,assetId:a})=>(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/`})).resource_response,R=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r,permissions:t})=>(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"PUT",data:{permissions:t.includes("ADMIN")?["ADMIN"]:t,business_hierarchy_node_id:r}})).resource_response.data,p=async({businessId:s,memberId:e,assetId:a,businessHierarchyNodeId:r})=>(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/${a}/access/`,method:"DELETE",data:{business_hierarchy_node_id:r}})).resource_response.data,y=async({businessId:s,assetId:e,limit:a,sortBy:r,searchBy:i="FULL_NAME",searchTerm:n,startIndex:d,sortDirection:E})=>{let c=a&&a<t.xX?a:t.xX,{data:u}={data:void 0,...(await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/assets/${e}/members/`,method:"GET",data:{page_size:c,sort_by:r,search_by:i,search_value:n,start_index:d,sort_ascending:"ASCENDING"===E}})).resource_response};return u},m=async({businessId:s,personId:e,limit:a,sortBy:n,searchBy:d="name",searchTerm:E,startIndex:c,sortDirection:u,assetPermissionType:o,includeAssetSummary:A=!1})=>{let N=a&&a<t.xX?a:t.xX,I=await (0,_.Z)({url:`ads/v4/business_access/businesses/${s}/members/${e}/assets/`,data:{page_size:N,resource_type:"CATALOG",sort_by:n,search_by:d,start_index:c,search_value:E,sort_ascending:"ASCENDING"===u,...0===o||1===o?{asset_permission_type:(0,r.bO)(o)}:{}}});if(A){let e=await (0,i.pI)({businessId:s,assetIds:I.resource_response.data.data.map(s=>s.asset_id),resourceType:"CATALOG"});return I.resource_response.data.data.reduce((s,a)=>({...s,data:{...s.data,data:s.data.data.map(s=>s.asset_id===a.asset_id?{...a,...e?.data.data[a.asset_id]}:s)}}),I.resource_response)}return I.resource_response}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/3329-f4e177a411f08863.mjs.map