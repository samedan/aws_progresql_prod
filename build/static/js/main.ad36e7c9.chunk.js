(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,a){e.exports=a(301)},299:function(e,t,a){},300:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),o=a.n(r),c=a(11),u=l.a.createContext(),i=function(e){return{type:"USER_INPUT_CHANGE",payload:e}},s=function(e){return{type:"USER_INPUT_SUBMIT",payload:e}},m=a(5),p={stateprop1:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;switch((arguments.length>1?arguments[1]:void 0).type){case"SUCCESS":return Object(m.a)({},e,{stateprop1:!0});case"FAILURE":return Object(m.a)({},e,{stateprop1:!1});default:throw new Error}},E={is_authenticated:!1,db_profile:null,profile:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(m.a)({},e,{is_authenticated:!0});case"LOGIN_FAILURE":return Object(m.a)({},e,{is_authenticated:!1});case"ADD_PROFILE":return Object(m.a)({},e,{profile:t.payload});case"REMOVE_PROFILE":return Object(m.a)({},e,{profile:null});case"SET_DB_PROFILE":return Object(m.a)({},e,{db_profile:t.payload});case"REMOVE_DB_PROFILE":return Object(m.a)({},e,{db_profile:null});default:return e}},b={user_textChange:"",user_textSubmit:""},h=function(e,t){switch(t.type){case"USER_INPUT_CHANGE":return Object(m.a)({},e,{user_textChange:t.payload});case"USER_INPUT_SUBMIT":return Object(m.a)({},e,{user_textSubmit:t.payload});default:throw new Error}},g={posts:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DB_POSTS":return Object(m.a)({},e,{posts:t.payload});case"REMOVE_DB_POSTS":return Object(m.a)({},e,{posts:[]});default:return e}},v=a(15),O=a(24),S=Object(O.a)(),y=a(9),C=a.n(y),j=function(){var e=Object(n.useContext)(u);return Object(n.useEffect)(function(){if(e.authObj.isAuthenticated()){var t=e.authObj.userProfile;e.handleUserLogin(),e.handleUserAddProfile(t),C.a.post("/api/posts/userprofiletodb",t).then(C.a.get("/api/get/userprofilefromdb",{params:{email:t.profile.email}}).then(function(t){return e.handleAddDBProfile(t.data)})).then(S.replace("/"))}else e.handleUserLogout(),e.handleUserRemoveProfile(),e.handleUserRemoveProfile(),S.replace("/")},[e.authObj.userProfile,e]),l.a.createElement("div",null)},x=function(e){return l.a.createElement("div",null,"Home",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))},k=a(19),P=function(){var e=Object(n.useContext)(u);return l.a.createElement("div",null,l.a.createElement(k.a,{to:"/",style:{padding:"5px"}},"Home"),l.a.createElement(k.a,{to:"/profile",style:{padding:"5px"}},"Profile"),l.a.createElement(k.a,{to:"/hooksform",style:{padding:"5px"}},"Hooks Form"),l.a.createElement(k.a,{to:"/hookscontainer",style:{padding:"5px"}},"Hooks Container"),l.a.createElement(k.a,{to:"/privateroute",style:{padding:"5px"}},"Private Route"),l.a.createElement(k.a,{to:"/posts",style:{padding:"5px"}},"Forum"),e.authState?l.a.createElement("button",{onClick:function(){return e.authObj.logout()}},"Logout"):l.a.createElement("button",{onClick:function(){return e.authObj.login()}},"Login"))},R=function(){var e=Object(n.useContext)(u),t=Object(n.useState)(0),a=Object(c.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(null),s=Object(c.a)(i,2),m=s[0],E=s[1],f=Object(n.useReducer)(d,p),b=Object(c.a)(f,2),h=b[0],g=b[1];Object(n.useEffect)(function(){setTimeout(function(){return E("useEffect worked")},3e3)},[r]);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){E("some string")}}," Handle Value  "),l.a.createElement("button",{onClick:function(){g({type:"SUCCESS"})}},"Dispatch True "),l.a.createElement("button",{onClick:function(){g({type:"FAILURE"})}},"Dispatch False "),l.a.createElement("button",{onClick:function(){e.dispatchContextTrue()}},"Dispatch Context True "),l.a.createElement("button",{onClick:function(){e.dispatchContextFalse()}},"Dispatch Context False "),l.a.createElement("button",{onClick:function(){o(r+1)}}," Add Local Value "),l.a.createElement("button",{onClick:function(){o(r-1)}}," Dec Local Value "),l.a.createElement("br",null),l.a.createElement("br",null),e.useContextSubmitState?l.a.createElement("h3",null," ",e.useContextSubmitState," "):l.a.createElement("h3",null," No User Text "),l.a.createElement("br",null),h.stateprop1?l.a.createElement("p",null," Local stateprop1 is true "):l.a.createElement("p",null," Local stateprop1 is false "),l.a.createElement("br",null),e.stateProp1?l.a.createElement("p",null," Global Context stateprop1 is true "):l.a.createElement("p",null," Global Context stateprop1 is false "),l.a.createElement("br",null),m?l.a.createElement("p",null," ",m):l.a.createElement("p",null," No value "),l.a.createElement("br",null),l.a.createElement("p",null,"Local Value: ",r),l.a.createElement("br",null),l.a.createElement("br",null)))},w=function(e){return l.a.createElement("div",null,"Callback")},N=function(){var e=Object(n.useContext)(u),t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(""),p=Object(c.a)(m,2),d=p[0],E=p[1],f=Object(n.useReducer)(h,b),g=Object(c.a)(f,2),_=g[0],v=g[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(e.target.useState.value)}},l.a.createElement("label",null," React useState: "),l.a.createElement("input",{id:"useState",onChange:function(e){return o(e.target.value)},type:"text"}),l.a.createElement("button",{type:"submit"}," Submit ")),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v(s(e.target.useReducer.value))}},l.a.createElement("label",null," React useReducer: "),l.a.createElement("input",{id:"useReducer",onChange:function(e){return v(i(e.target.value))},type:"text"}),l.a.createElement("button",{type:"submit"}," Submit ")),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:e.useContextSubmit},l.a.createElement("label",null," React useContext: "),l.a.createElement("input",{id:"useContext",onChange:e.useContextChange,type:"text"}),l.a.createElement("button",{type:"submit"}," Submit ")),l.a.createElement("br",null),l.a.createElement("h3",null,"React useState:"),l.a.createElement("p",null,"Change: ",r),l.a.createElement("p",null,"Submit: ",d),l.a.createElement("br",null),e.prop4,l.a.createElement("h3",null,"React useReducer:"),l.a.createElement("p",null,"Change: ",_.user_textChange),l.a.createElement("p",null,"Submit: ",_.user_textSubmit),l.a.createElement("br",null),l.a.createElement("h3",null,"React useContext:"),l.a.createElement("p",null,"Change: ",e.useContextChangeState),l.a.createElement("p",null,"Submit: ",e.useContextSubmitState),l.a.createElement("br",null),l.a.createElement("br",null))},F=function(e){return l.a.createElement("div",null,"Private Component")},T=a(14),D=a.n(T),I=function(e){var t=Object(n.useContext)(u);return l.a.createElement("div",{className:"FlexRowMain"},l.a.createElement("div",null,l.a.createElement("h1",null,"Signup and Create an Account"),l.a.createElement(D.a,{color:"primary",size:"large",variant:"contained",onClick:function(){return t.authObj.login()}},"Signup")))},A=a(23),U=a(38),L=a.n(U),B=a(40),M=a.n(B),V=a(39),H=a.n(V),Y=a(115),J=a.n(Y),G=a(119),z=a.n(G),q=a(117),K=a.n(q),W=a(118),X=a.n(W),Z=a(116),Q=a.n(Z),$=function(){var e=Object(n.useContext)(u),t=Object(n.useState)({open:!1,post_id:null,posts:[]}),a=Object(c.a)(t,2),r=a[0],o=a[1];Object(n.useEffect)(function(){var t=e.dbProfileState[0].uid;C.a.get("/api/get/userposts",{params:{user_id:t}}).then(function(e){return o(Object(m.a)({},r,{posts:Object(A.a)(e.data)}))}).catch(function(e){return console.log(e)})});var i=function(){o({open:!1,post_id:null})},s=function(e){return l.a.createElement(L.a,{style:{width:"500px",height:"200px",marginBottom:"10px",paddingBottom:"80px"}},l.a.createElement(H.a,{title:l.a.createElement(k.a,{to:{pathname:"/post/"+e.post.pid,state:{post:e}}},e.post.title),subheader:l.a.createElement("div",{className:"FlexColumn"},l.a.createElement("div",{className:"FlexRow"},e.post.date_created),l.a.createElement("div",{className:"FlexRow"},l.a.createElement(k.a,{to:{pathname:"/editpost/"+e.post.pid,state:{post:e}}},l.a.createElement("button",null,"Edit")),l.a.createElement("button",{onClick:function(){return t=e.post.pid,void o({open:!0,post_id:t});var t}},"Delete")))}),l.a.createElement("br",null),l.a.createElement(M.a,null,l.a.createElement("span",{style:{overflow:"hidden"}}," ",e.post.body," ")))};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(k.a,{to:{pathname:"/showmessages/"+e.dbProfileState[0].uid}},l.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Show Messages")),l.a.createElement(function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.profile.profile.nickname),l.a.createElement("br",null),l.a.createElement("img",{src:e.profile.profile.picture,alt:""}),l.a.createElement("br",null),l.a.createElement("h4",null," ",e.profile.profile.email),l.a.createElement("br",null),l.a.createElement("h5",null," ",e.profile.profile.name," "),l.a.createElement("br",null),l.a.createElement("h6",null," Email Verified: "),e.profile.profile.email_verified?l.a.createElement("p",null,"Yes"):l.a.createElement("p",null,"No"),l.a.createElement("br",null))},{profile:e.profileState})),l.a.createElement("div",null,r.posts?r.posts.map(function(e){return l.a.createElement(s,{post:e,key:e.pid})}):null),l.a.createElement(J.a,{open:r.open,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(Q.a,{id:"alert-dialog-title"}," Confirm Delete? "),l.a.createElement(K.a,null,l.a.createElement(X.a,{id:"alert-dialog-description"},"Deleteing Post"),l.a.createElement(z.a,null,l.a.createElement(D.a,{onClick:function(){return function(){var e=r.post_id;C.a.delete("api/delete/postcomments",{data:{post_id:e}}).then(function(){return C.a.delete("/api/delete/post",{data:{post_id:e}}).then(function(e){return console.log(e)})}).catch(function(e){return console.log(e)}).then(function(){return i()}).then(function(){return setTimeout(function(){return S.replace("/")},700)})}()}},"Agree"),l.a.createElement(D.a,{onClick:function(){return i()}},"Cancel")))))},ee=a(51),te=a.n(ee),ae=function(e){var t=Object(n.useState)({}),a=Object(c.a)(t,2),r=a[0],o=a[1],u=Object(n.useState)([]),i=Object(c.a)(u,2),s=i[0],p=i[1];Object(n.useEffect)(function(){var t=e.location.state.post.post.author;C.a.get("/api/get/otheruserprofilefromdb",{params:{username:t}}).then(function(e){return o(Object(m.a)({},e.data))}).catch(function(e){console.log(e)}),C.a.get("/api/get/otheruserposts",{params:{username:t}}).then(function(e){return p(Object(A.a)(e.data))}).catch(function(e){console.log(e)}),window.scrollTo({top:0,left:0})},[e.location.state.post.post.author]);var d=function(e){return l.a.createElement("div",null,l.a.createElement(L.a,{className:"CardStyles"},l.a.createElement(H.a,{title:l.a.createElement(k.a,{to:{pathname:"/post/"+e.post.pid,state:{post:e}}},e.post.title),subheader:l.a.createElement("div",null,l.a.createElement("div",null,te()(e.post.date_created).format("MMMM Do, YYYY | h:mm a")),l.a.createElement("div",null,e.post.author))}),l.a.createElement(M.a,null,l.a.createElement("span",{style:{overflow:"hidden"}},e.post.body," "))))};return l.a.createElement("div",null,l.a.createElement("div",{className:"FlexRow"},r?l.a.createElement(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"FlexRow"},l.a.createElement("h1",null,e.profile.username)),l.a.createElement("div",{className:"FlexRow"},l.a.createElement(k.a,{to:{pathname:"/sendmessage/",state:{props:e}}},l.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Send Message"))))},{profile:r}):null),l.a.createElement("br",null),l.a.createElement("hr",{className:"style-two"}),l.a.createElement("h3",null," Latest Activity: "),l.a.createElement("div",{className:"FlexColumn"},s?s.map(function(e){return l.a.createElement("div",{key:e.pid},l.a.createElement(d,{post:e}),l.a.createElement("br",null))}):null))},ne=a(22),le=a.n(ne),re=function(e){var t=Object(n.useContext)(u);return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n=e.location.state.props.profile[0].username,l={message_sender:t.dbProfileState[0].username,message_to:n,title:a.target.title.value,body:a.target.body.value};console.log(e),C.a.post("/api/post/messagetodb",l).then(function(e){return console.log(e)}).catch(function(e){console.log(e)}).then(setTimeout(function(){S.replace("/")},700))}},l.a.createElement(le.a,{id:"title",label:"Title",margin:"normal"}),l.a.createElement("br",null),l.a.createElement(le.a,{id:"body",multiline:!0,rows:"4",margin:"normal"}),l.a.createElement("br",null),l.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Submit")),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("button",{className:"CancelButton",onClick:function(){return S.replace("/")}}," Cancel ")))},oe=a(120),ce=a.n(oe),ue=a(122),ie=a.n(ue),se=a(73),me=a.n(se),pe=a(121),de=a.n(pe),Ee=a(72),fe=a.n(Ee),be=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)([]),r=Object(c.a)(a,2),o=r[0],i=r[1];Object(n.useEffect)(function(){var e=t.dbProfileState[0].username;C.a.get("/api/get/usermessages",{params:{username:e}}).then(function(e){return i(Object(A.a)(e.data))}).catch(function(e){console.log(e)})},[]);var s=function(e){return l.a.createElement(fe.a,null,l.a.createElement(me.a,null,l.a.createElement("p",null," ",l.a.createElement("strong",null,"From: "),"  ",e.message.message_sender," "),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Title "),"   ",e.message.message_title," "),l.a.createElement("p",null,l.a.createElement("strong",null," Message:"),"  ",e.message.message_body," "),l.a.createElement("small",null," ",e.message.date_created," "),l.a.createElement("br",null),l.a.createElement(k.a,{to:{pathname:"/replytomessage",state:{props:e}}},l.a.createElement("button",null,"Reply")),l.a.createElement("button",{onClick:function(){return m(e.message.mid)}}," Delete "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return S.goBack()}}," Cancel ")))},m=function(e){C.a.delete("/api/delete/usermessage",{data:{mid:e}}).then(function(e){return console.log(e)}).catch(function(e){console.log(e)}).then(function(){return setTimeout(function(){S.replace("/")},700)})};return l.a.createElement("div",null,l.a.createElement("div",{className:"FlexRow"},l.a.createElement(ce.a,null,l.a.createElement(de.a,null,l.a.createElement(fe.a,null,l.a.createElement(me.a,null," ",l.a.createElement("strong",null," Messages ")," "))),l.a.createElement(ie.a,null,o?o.map(function(e){return l.a.createElement(s,{key:e.mid,message:e})}):null))))},he=function(e){var t=Object(n.useContext)(u);return l.a.createElement("div",null,l.a.createElement("h2",null," Message: "),l.a.createElement("div",{className:"FlexColumn"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,e.location.state.props.message.message_title))),l.a.createElement("div",null,l.a.createElement("p",null,e.location.state.props.message.message_body)),l.a.createElement("div",null,l.a.createElement("small",null," By: ",e.location.state.props.message.message_sender))),l.a.createElement("div",{className:"FlexRow"},l.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n=e.location.state.props.message.message_sender,l={message_sender:t.dbProfileState[0].username,message_to:n,title:a.target.title.value,body:a.target.body.value};C.a.post("/api/post/messagetodb",l).then(function(e){return console.log(e)}).catch(function(e){console.log(e)}).then(setTimeout(function(){S.replace("/")},700))}},l.a.createElement(le.a,{id:"title",label:"Title",margin:"normal"}),l.a.createElement("br",null),l.a.createElement(le.a,{id:"body",multiline:!0,rows:"4",margin:"normal"}),l.a.createElement("br",null),l.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Submit")),l.a.createElement("br",null)),l.a.createElement("div",{className:"FlexRow"},l.a.createElement("button",{className:"CancelButton",onClick:function(){return S.replace("/")}}," Cancel ")))},ge=(a(299),a(300),function(e){var t=Object(n.useContext)(u),a=Object(n.useState)({posts:[],fetched:!1,first_page_load:!1,pages_slice:[1,2,3,4,5],max_page:null,items_per_page:3,currentPage:1,num_posts:null,posts_slice:null,posts_search:[],posts_per_page:3}),r=Object(c.a)(a,2),o=r[0],i=r[1];Object(n.useEffect)(function(){if(t.postsState||C.a.get("/api/get/allposts").then(function(e){return t.handleAddPosts(e.data)}).catch(function(e){return console.log(e)}),t.postsState&&!o.fetched){var e=1*o.posts_per_page,a=e-o.posts_per_page,n=Math.ceil(t.postsState.length/o.posts_per_page);i(Object(m.a)({},o,{fetched:!0,posts:Object(A.a)(t.postsState),num_posts:t.postsState.length,max_page:n,posts_slice:t.postsState.slice(a,e)}))}},[t,o]),Object(n.useEffect)(function(){var e=3*o.currentPage,t=e-3;i(Object(m.a)({},o,{posts_slice:o.posts.slice(t,e)}))},[o.currentPage]);var s=function(e){return l.a.createElement("div",null,l.a.createElement(L.a,null,l.a.createElement(H.a,{title:l.a.createElement(k.a,{to:{pathname:"/post/"+e.post.pid,state:{post:e}}},e.post.title),subheader:l.a.createElement("div",{className:"FlexColumn"},l.a.createElement("div",{className:"FlexRow"},te()(e.post.date_created).format("MMMM Do, YYYY | h:mm a")),l.a.createElement("div",{className:"FlexRow"},"By:",l.a.createElement(k.a,{style:{paddingLeft:"5px",textDecoration:"none"},to:{pathname:"/user/"+e.post.author,state:{post:e}}},e.post.author)),l.a.createElement("div",{className:"FlexRow"},l.a.createElement("i",{className:"material-icons"},"thumb_up"),l.a.createElement("div",{className:"notification-num-allposts"}," ",e.post.likes," ")))}),l.a.createElement("br",null),l.a.createElement(M.a,null,l.a.createElement("span",{style:{overflow:"hidden"}}," ",e.post.body," "))))},p=function(e){window.scrollTo({top:0,left:0,behavior:"smooth"});var t=e+1,a=e-1;e>2&&e<o.max_page-1&&i(Object(m.a)({},o,{currentPage:e,pages_slice:[a-1,a,e,t,t+1]})),2===e&&i(Object(m.a)({},o,{currentPage:e,pages_slice:[a,e,t,t+1,t+2]})),1===e&&i(Object(m.a)({},o,{currentPage:e,pages_slice:[e,t,t+1,t+2,t+3]})),e===o.max_page&&i(Object(m.a)({},o,{currentPage:e,pages_slice:[a-3,a-2,a-1,a,e]})),e===o.max_page-1&&i(Object(m.a)({},o,{currentPage:e,pages_slice:[a-2,a-1,a,e,t]}))};return l.a.createElement("div",null,l.a.createElement("div",{style:{opacity:o.opacity,transition:"opacity 2s ease"}},l.a.createElement("br",null),t.authState?l.a.createElement(k.a,{to:"/addpost"},l.a.createElement(D.a,{variant:"contained",color:"primary"},"Add Post")):l.a.createElement(k.a,{to:"/signup"},l.a.createElement(D.a,{variant:"contained",color:"primary"},"Sign Up to Add Post"))),l.a.createElement("br",null),l.a.createElement(le.a,{id:"search",label:"Search",margin:"normal",onChange:function(e){i(Object(m.a)({},o,{posts_search:[]}));var t=e.target.value;C.a.get("/api/get/searchpost",{params:{search_query:t}}).then(function(e){return 0!==e.data.length?(t=e.data,i(Object(m.a)({},o,{posts_search:[]})),void i(Object(m.a)({},o,{posts_search:Object(A.a)(t)}))):null;var t}).catch(function(e){console.log(e)})}}),l.a.createElement("hr",null),l.a.createElement("button",{onClick:function(){return console.log(o)}}," Button "),l.a.createElement("button",{onClick:function(){return console.log(t)}}," Button "),l.a.createElement("br",null),l.a.createElement("div",null,o.posts_search?o.posts_search.map(function(e){return l.a.createElement(s,{key:e.pid+1e3,post:e})}):null),l.a.createElement("h1",null,"Posts"),l.a.createElement("div",null,o.posts_slice?o.posts_slice.map(function(e){return l.a.createElement(s,{key:e.pid,post:e})}):null),l.a.createElement("div",null,l.a.createElement("div",{className:"FlexRow"},l.a.createElement("button",{onClick:function(){return p(1)}}," First "),l.a.createElement("button",{onClick:function(){return p(o.currentPage-1)}}," Prev "),o.pages_slice.map(function(e){return l.a.createElement("div",{onClick:function(){return p(e)},className:o.currentPage===e?"pagination-active":"pagination-item",key:e},e)}),l.a.createElement("button",{onClick:function(){return p(o.currentPage+1)}}," Next "),l.a.createElement("button",{onClick:function(){return p(o.max_page)}}," Last "))))}),_e=function(){var e=Object(n.useContext)(u);return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=e.dbProfileState[0].uid,n=e.dbProfileState[0].username,l={title:t.target.title.value,body:t.target.body.value,username:n,uid:a};C.a.post("/api/post/posttodb",l).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}).then(setTimeout(function(){return S.replace("/")},700))}},l.a.createElement(le.a,{id:"title",label:"Title",margin:"normal"}),l.a.createElement("br",null),l.a.createElement(le.a,{id:"body",label:"Body",multiline:!0,rowsMax:"4",margin:"normal"}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"}," Submit ")),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return S.replace("/posts")}}," Cancel "))},ve=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)({comment:"",fetched:!1,cid:0,delete_comment_id:0,edit_comment_id:0,edit_comment:"",comments_arr:null,cur_user_id:null,like_post:!0,likes:0,like_user_ids:[],post_title:null,post_body:null,post_author:null,post_id:null}),r=Object(c.a)(a,2),o=r[0],i=r[1];Object(n.useEffect)(function(){e.location.state&&!o.fetched&&(console.log("tttt"),i(Object(m.a)({},o,{fetched:!0,likes:e.location.state.post.post.likes,like_user_ids:e.location.state.post.post.like_user_id,post_title:e.location.state.post.post.title,post_body:e.location.state.post.post.body,post_author:e.location.state.post.post.author,post_id:e.location.state.post.post.pid})))},[o,e.location]),Object(n.useEffect)(function(){if(!e.location.state&&!o.fetched){console.log("yyyy");var t=e.location.pathname.substring(6);C.a.get("/api/get/post",{params:{post_id:t}}).then(function(e){return 0!==e.data.length?i(Object(m.a)({},o,{fetched:!0,likes:e.data[0].likes,like_user_ids:e.data[0].like_user_id,post_title:e.data[0].title,post_body:e.data[0].body,post_author:e.data[0].author,post_id:e.data[0].pid})):null}).catch(function(e){return console.log(e)})}},[o,e.location]),Object(n.useEffect)(function(){if(!o.comments_arr&&e.location.state){var t=e.location.pathname.substring(6);C.a.get("/api/get/allpostcomments",{params:{post_id:t}}).then(function(e){return 0!==e.data.length?i(Object(m.a)({},o,{comments_arr:Object(A.a)(e.data)})):null}).catch(function(e){return console.log(e)})}},[e.location,o]);var s=function(){i(Object(m.a)({},o,{edit_comment_id:0}))},p=function(e){return l.a.createElement("div",{className:o.delete_comment_id===e.comment.cid?"FadeOutComment":"CommentStyles"},l.a.createElement("div",null,l.a.createElement("p",null,e.comment.comment," "),l.a.createElement("small",null,"Just Now"===e.comment.date_created?l.a.createElement("div",null," ",e.comment.isEdited?l.a.createElement("span",null," Edited "):l.a.createElement("span",null," Just Now ")):e.comment.date_created),l.a.createElement("p",null," By: ",e.comment.author," ")),l.a.createElement("div",null,e.cur_user_id===e.comment.user_id?e.isEditing?l.a.createElement("form",{onSubmit:function(t,a){return E(t,e.comment.cid)}},l.a.createElement("input",{autoFocus:!0,name:"edit_comment",id:"editted_comment",label:"Comment",value:o.edit_comment,onChange:d}),l.a.createElement("br",null),l.a.createElement(D.a,{type:"submit"},"Agree"),l.a.createElement(D.a,{type:"button",onClick:s},"Cancel"),l.a.createElement("button",{onClick:function(){return f(e.comment.cid)}},"Delete")):l.a.createElement("div",null,l.a.createElement(D.a,{onClick:function(){return i(Object(m.a)({},o,{edit_comment_id:e.comment.cid,edit_comment:e.comment.comment}))}},"Edit")):null))},d=function(e){return i(Object(m.a)({},o,{edit_comment:e.target.value}))},E=function(e,a){e.preventDefault(),console.log(e),console.log(a);var n=e.target.editted_comment.value,l=a,r=o.post_id,c=t.dbProfileState[0].uid,u=t.dbProfileState[0].username,s={cid:l,comment:n,user_id:c,author:u,date_created:"Just Now",isEdited:!0},p={cid:l,comment:n,post_id:r,user_id:c,username:u};C.a.put("/api/put/commenttodb",p).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),function(e){var t=o.comments_arr.findIndex(function(t){return t.cid===e.cid}),a=Object(A.a)(o.comments_arr);a[t]=e,setTimeout(function(){return i(Object(m.a)({},o,{comments_arr:Object(A.a)(a),edit_comment_id:0}))},100)}(s)},f=function(e){var t=e;console.log(e),C.a.delete("/api/delete/comment",{data:{comment_id:t}}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),function(e){i(Object(m.a)({},o,{delete_comment_id:e}));var t=o.comments_arr.filter(function(t){return t.cid!==e});i(Object(m.a)({},o,{comments_arr:t}))}(e)};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h2",null,"Post"),o.comments_arr||e.location.state?l.a.createElement("div",null,l.a.createElement("p",null,o.post_title),l.a.createElement("p",null,o.post_body),l.a.createElement("p",null,o.post_author)):null,l.a.createElement("div",{style:{cursor:"pointer"},onClick:t.authState?function(){return function(){var e=t.dbProfileState[0].uid,a={uid:e,post_id:o.post_id};console.log(a),o.like_user_ids.includes(e)||C.a.put("/api/put/likes",a).then(!o.like_user_ids.includes(e)&&o.like_post?i(Object(m.a)({},o,{likes:o.likes+1,like_post:!1})):null).catch(function(e){return console.log(e)})}()}:function(){return S.replace("/signup")}},l.a.createElement("i",{className:"material-icons"},"thumb_up"),l.a.createElement("small",{className:"notification-num-showpost"},o.likes))),l.a.createElement("div",null,l.a.createElement("h2",null," Comments:"),o.comments_arr?o.comments_arr.map(function(e){return l.a.createElement(p,{comment:e,cur_user_id:t.dbProfileState?t.dbProfileState[0].uid:null,key:e.cid,isEditing:e.cid===o.edit_comment_id})}):null),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(Object(m.a)({},o,{comment:""}));var a=e.target.comment.value,n=t.dbProfileState[0].uid,l=t.dbProfileState[0].username,r=o.post_id,c={cid:Math.floor(1e3*Math.random()),comment:a,user_id:n,author:l,date_created:"Just Now"},u={comment:e.target.comment.value,post_id:r,user_id:n,username:l};C.a.post("/api/post/commenttodb",u).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),window.scroll({top:0,left:0,behavior:"smooth"}),function(e){o.comments_arr?i(Object(m.a)({},o,{comments_arr:[e].concat(Object(A.a)(o.comments_arr))})):i(Object(m.a)({},o,{comments_arr:[e]}))}(c)}},l.a.createElement(le.a,{id:"comment",label:"Comment",margin:"normal"}),l.a.createElement("br",null),l.a.createElement("div",null,console.log("hhhhh")),t.authState?l.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit"},"Submit"):l.a.createElement(k.a,{to:"/signup"},l.a.createElement(D.a,{variant:"contained",color:"primary"},"Signup to Comment")))),l.a.createElement("div",null))},Oe=function(e){var t=Object(n.useContext)(u),a=Object(n.useState)({title:e.location.state.post.post.title,body:e.location.state.post.post.body}),r=Object(c.a)(a,2),o=r[0],i=r[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n=t.dbProfileState[0].uid,l=t.dbProfileState[0].username,r=e.location.state.post.post.pid,o={title:a.target.title.value,body:a.target.body.value,pid:r,uid:n,username:l};C.a.put("/api/put/post",o).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}).then(setTimeout(function(){return S.replace("/profile")},700))}},l.a.createElement(le.a,{id:"title",label:"title",margin:"normal",value:o.title,onChange:function(e){i(Object(m.a)({},o,{title:e.target.value}))}}),l.a.createElement("br",null),l.a.createElement(le.a,{id:"body",label:"body",multiline:!0,rows:"4",margin:"normal",value:o.body,onChange:function(e){i(Object(m.a)({},o,{body:e.target.value}))}}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit"}," Submit ")),l.a.createElement("br",null),l.a.createElement(D.a,{onClick:function(){return S.goBack()}}," Cancel "))},Se=function(e){var t=e.component,a=e.auth;return l.a.createElement(v.b,{render:function(e){return!0===a?l.a.createElement(t,Object.assign({auth:a},e)):l.a.createElement(v.a,{to:{pathname:"/signup"}})}})},ye=function(){var e=Object(n.useContext)(u);return l.a.createElement("div",null,l.a.createElement(v.c,{history:S},l.a.createElement(P,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/",component:x}),l.a.createElement(v.b,{path:"/hooksform",component:N}),l.a.createElement(v.b,{path:"/hookscontainer",component:R}),l.a.createElement(v.b,{path:"/authcheck",component:j}),l.a.createElement(v.b,{path:"/signup",component:I}),l.a.createElement(v.b,{path:"/posts",component:ge}),l.a.createElement(v.b,{path:"/post/:pid",component:ve}),l.a.createElement(v.b,{path:"/editpost/:pid",component:Oe}),l.a.createElement(v.b,{path:"/addpost",component:_e}),l.a.createElement(v.b,{path:"/user/:name",component:ae}),l.a.createElement(Se,{path:"/profile",auth:e.authState,component:$}),l.a.createElement(Se,{path:"/sendmessage",auth:e.authState,component:re}),l.a.createElement(Se,{path:"/showmessages/:id",auth:e.authState,component:be}),l.a.createElement(Se,{path:"/replytomessage",auth:e.authState,component:he}),l.a.createElement(Se,{path:"/privateroute",auth:e.authState,component:F}),l.a.createElement(Se,{path:"/profile",auth:e.authState,component:$}),l.a.createElement(v.b,{path:"/callback",render:function(t){return e.handleAuth(t),l.a.createElement(w,null)}})))))},Ce=a(123),je=a(124),xe=new function e(){var t=this;Object(Ce.a)(this,e),this.auth0=new je.a.WebAuth({domain:"dev-223uudmw.auth0.com",clientID:"Fcp36lRtJz3kRZXAKSYho1NtjB48Bhxk",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile email"}),this.userProfile={},this.login=function(){t.auth0.authorize()},this.handleAuth=function(){t.auth0.parseHash(function(e,a){if(a){localStorage.setItem("access_token",a.accessToken),localStorage.setItem("id_token",a.idToken);var n=JSON.stringify(1e3*a.expiresIn+(new Date).getTime());localStorage.setItem("expiresAt",n),t.getProfile(),setTimeout(function(){S.replace("/authcheck")},600)}else console.log(e)})},this.getAccessToken=function(){return localStorage.getItem("access_token")?localStorage.getItem("access_token"):null},this.getProfile=function(){var e=t.getAccessToken();e&&t.auth0.client.userInfo(e,function(e,a){a&&(t.userProfile={profile:a})})},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expiresAt"),setTimeout(function(){S.replace("/authcheck")},200)},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expiresAt"));return(new Date).getTime()<e}},ke=function(e){var t=Object(n.useReducer)(d,p),a=Object(c.a)(t,2),r=a[0],o=a[1],m=Object(n.useReducer)(f,E),v=Object(c.a)(m,2),O=v[0],S=v[1],y=Object(n.useReducer)(h,b),C=Object(c.a)(y,2),j=C[0],x=C[1],k=Object(n.useReducer)(_,g),P=Object(c.a)(k,2),R=P[0],w=P[1];return l.a.createElement("div",null,l.a.createElement(u.Provider,{value:{stateProp1:r.stateprop1,dispatchContextTrue:function(){o({type:"SUCCESS"})},dispatchContextFalse:function(){o({type:"FAILURE"})},authState:O.is_authenticated,dbProfileState:O.db_profile,profileState:O.profile,handleAddDBProfile:function(e){return function(e){S(function(e){return{type:"SET_DB_PROFILE",payload:e}}(e))}(e)},handleRemoveDBProfile:function(){S({type:"REMOVE_DB_PROFILE"})},handleUserAddProfile:function(e){return function(e){S(function(e){return{type:"ADD_PROFILE",payload:e}}(e))}(e)},handleUserRemoveProfile:function(){S({type:"REMOVE_PROFILE"})},handleUserLogin:function(){S({type:"LOGIN_SUCCESS"})},handleUserLogout:function(){S({type:"LOGIN_FAILURE"})},useContextChangeState:j.user_textChange,useContextSubmitState:j.user_textSubmit,useContextSubmit:function(e){return function(e){e.preventDefault(),e.persist(),x(s(e.target.useContext.value))}(e)},useContextChange:function(e){return function(e){x(i(e.target.value))}(e)},postsState:R.posts,handleAddPosts:function(e){return function(e){w(function(e){return{type:"FETCH_DB_POSTS",payload:e}}(e))}(e)},handleRemovePosts:function(){w({type:"REMOVE_DB_POSTS"})},handleAuth:function(e){return function(e){e.location.hash&&xe.handleAuth()}(e)},authObj:xe}},l.a.createElement(ye,null)))},Pe=function(){return l.a.createElement("div",null,"React",l.a.createElement(ke,null))};o.a.render(l.a.createElement(Pe,null),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.ad36e7c9.chunk.js.map