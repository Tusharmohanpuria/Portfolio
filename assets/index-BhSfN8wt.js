import{j as e,r as c}from"./react-DUmIWLMH.js";import{c as T}from"./react-dom-e0W_Sqpv.js";import{L as x,B as E}from"./react-router-dom-Drd7b_82.js";import{A as L,a as B,b as I,C as A,c as M,d as P,e as v,F as k,f as C,g as R,D,h as F,S as _,i as z,j as O,k as q,l as S,m as W,n as H,o as G,p as J,q as K,I as b,r as V,s as Y,t as Q,u as U,B as X,v as Z,w as N}from"./react-icons-nwfhhqvF.js";import{N as g,C as o,a as l,B as p,R as n,b as s,c as h}from"./react-bootstrap-Cq2vu3yJ.js";import{P as $}from"./react-tsparticles-CXpRhqbz.js";import{l as ee}from"./tsparticles-b7O6_B2z.js";import{o as se}from"./react-parallax-tilt-C78BytAK.js";import{T as te}from"./typewriter-effect-QnVjKkm0.js";import{_ as ie}from"./react-github-calendar-D_AO36Fd.js";import"./react-pdf-CBUbwZMh.js";import{_ as ae,a as re}from"./pdfjs-dist-ZaNt0unF.js";import{b as ne,d as oe,e as u,f as le}from"./react-router-2kstSC6W.js";/* empty css                  */import"./chroma-js-CSFU0e9T.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dj_uVd1O.js";import"./classnames-BbqVnQV1.js";import"./@restart-C8E-14D8.js";import"./dom-helpers-D3m26cvm.js";import"./prop-types-extra-_x66_ok4.js";import"./uncontrollable-D2suiuuN.js";import"./@babel-DfNrjYUS.js";import"./react-transition-group-CY4SDznX.js";import"./prop-types-CHDuQ6FE.js";import"./tsparticles-engine-iXPTmHw2.js";import"./@tsparticles-DnnMVyax.js";import"./react-activity-calendar-CzFNbQLM.js";import"./date-fns-CS3utnwM.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&m(y)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}})();const ce=({isLoading:i})=>{const a=i?"loading-screen":"loading-screen-hidden";return e.jsx("div",{id:a})},de="/assets/logo-B2v9KJdr.png",he=()=>{const[i,a]=c.useState(!1),[d,m]=c.useState(!1),t=()=>{m(window.scrollY>=20)};return c.useEffect(()=>(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)),[]),e.jsx(g,{expanded:i,fixed:"top",expand:"md",className:d?"posfixed":"navbar",children:e.jsxs(o,{children:[e.jsx(g.Brand,{as:x,to:"/",className:"d-flex align-items-center",children:e.jsx("img",{src:de,alt:"brand logo",className:"img-fluid logo"})}),e.jsx(g.Toggle,{"aria-controls":"navbar-responsive",onClick:()=>a(!i),children:e.jsx("span",{className:"navbar-toggler-icon"})}),e.jsx(g.Collapse,{id:"navbar-responsive",children:e.jsxs(l,{className:"ms-auto",defaultActiveKey:"/",children:[e.jsx(l.Item,{children:e.jsxs(l.Link,{as:x,to:"/",onClick:()=>a(!1),children:[e.jsx(L,{style:{marginBottom:"2px"}})," Home"]})}),e.jsx(l.Item,{children:e.jsxs(l.Link,{as:x,to:"/about",onClick:()=>a(!1),children:[e.jsx(B,{style:{marginBottom:"2px"}})," About"]})}),e.jsx(l.Item,{children:e.jsxs(l.Link,{as:x,to:"/project",onClick:()=>a(!1),children:[e.jsx(I,{style:{marginBottom:"2px"}})," ","Projects"]})}),e.jsx(l.Item,{children:e.jsxs(l.Link,{as:x,to:"/resume",onClick:()=>a(!1),children:[e.jsx(A,{style:{marginBottom:"2px"}})," Resume"]})}),e.jsx(l.Item,{className:"fork-btn",children:e.jsxs(p,{href:"https://github.com/Tusharmohanpuria/Portfolio",target:"_blank",className:"fork-btn-inner",children:[e.jsx(M,{style:{fontSize:"1.2em"}})," ",e.jsx(P,{style:{fontSize:"1.1em"}})]})})]})})]})})},me="/assets/home-MhbUawyj.png",xe="/assets/home-alt-D1v7QOab.svg",f=()=>{const i=c.useCallback(async d=>{await ee(d)},[]),a={particles:{number:{value:160,density:{enable:!0,area:1500}},links:{enable:!1,opacity:.02},move:{direction:"left",speed:.1,random:!0,straight:!1},size:{value:1.5},opacity:{animation:{enable:!0,speed:.8,minimumValue:.1,sync:!1}}},interactivity:{events:{onClick:{enable:!0,mode:"repulse"}},modes:{repulse:{distance:100,duration:.4}}},detectRetina:!0};return e.jsx($,{id:"particles",init:i,options:a})},ue="/assets/avatar-BGCTOe-q.svg",je=()=>e.jsx(o,{fluid:!0,className:"about-section",id:"about",children:e.jsxs(o,{children:[e.jsxs(n,{children:[e.jsxs(s,{md:8,className:"description",children:[e.jsxs("h1",{style:{fontSize:"2.6em"},children:["ALLOW ME TO ",e.jsx("span",{className:"highlight",children:"INTRODUCE"})," MYSELF"]}),e.jsxs("p",{className:"body-text",children:["My adventure in programming has been filled with discovery and enthusiasm, and I've built a versatile skill set along the way.",e.jsx("br",{}),e.jsx("br",{}),"I specialize in languages such as",e.jsx("i",{children:e.jsx("b",{className:"highlight",children:" C++, JavaScript, and Python."})}),e.jsx("br",{}),e.jsx("br",{}),"I am drawn to crafting cutting-edge",e.jsx("i",{children:e.jsx("b",{className:"highlight",children:" Web Technologies and Solutions "})}),"and am intrigued by domains like",e.jsx("i",{children:e.jsx("b",{className:"highlight",children:" Artificial Intelligence and Machine Learning. "})}),e.jsx("br",{}),e.jsx("br",{}),"My passion lies in developing applications using",e.jsx("b",{className:"highlight",children:" React.js"})," and the",e.jsx("i",{children:e.jsx("b",{className:"highlight",children:" MERN Stack"})}),", while also exploring frameworks like",e.jsx("i",{children:e.jsx("b",{className:"highlight",children:" Next.js"})}),"."]})]}),e.jsx(s,{md:4,className:"avatar",children:e.jsx(se,{children:e.jsx("img",{src:ue,style:{maxHeight:"300px",borderRadius:"60%"},className:"img-fluid",alt:"profile"})})})]}),e.jsx(n,{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("hr",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(n,{children:e.jsxs(s,{md:12,className:"social-links",children:[e.jsx("h1",{children:"LET'S CONNECT"}),e.jsx("p",{children:"I'm eager to connect, share ideas, or discuss exciting tech projects!"}),e.jsxs("ul",{className:"social-icon-lists",children:[e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://github.com/Tusharmohanpuria",target:"_blank",rel:"noreferrer",className:"icon-colour home-social-icons",children:e.jsx(v,{})})}),e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://www.linkedin.com/in/tusharmohanpuria",target:"_blank",rel:"noreferrer",className:"icon-colour home-social-icons",children:e.jsx(k,{})})}),e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://www.instagram.com/tusharmohanpuria",target:"_blank",rel:"noreferrer",className:"icon-colour home-social-icons",children:e.jsx(C,{})})})]})]})})]})}),pe=()=>e.jsx(te,{options:{strings:["Software Engineer","Frontend Engineer","MERN Stack Specialist","Backend Engineer",""],autoStart:!0,loop:!0,deleteSpeed:60}});function ge(){return e.jsxs("section",{children:[e.jsxs(o,{fluid:!0,className:"home-section",id:"home",children:[e.jsx(f,{}),e.jsx(o,{className:"home-content",children:e.jsxs(n,{children:[e.jsxs(s,{md:7,className:"home-header",children:[e.jsxs("h1",{style:{paddingBottom:15},className:"heading",children:["Hello!"," ",e.jsx("span",{className:"wave",role:"img","aria-labelledby":"wave",children:"👋🏻"})]}),e.jsxs("h1",{className:"heading-name",children:["I'M",e.jsx("strong",{className:"main-name",children:" Tushar Mohanpuria"})]}),e.jsx("div",{style:{padding:50,textAlign:"left"},children:e.jsx(pe,{})})]}),e.jsx(s,{md:5,style:{paddingBottom:20},children:e.jsx("img",{src:me,onError:i=>{i.target.onerror=null,i.target.src=xe},alt:"Home Logo",className:"img-fluid",style:{maxHeight:"500px"}})})]})})]}),e.jsx(je,{})]})}function fe(){return e.jsxs(n,{style:{justifyContent:"center",paddingBottom:"50px"},children:[e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(R,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(D,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(F,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(_,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(z,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(O,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(q,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(S,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(W,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(H,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(G,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(J,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(K,{})})]})}function ye(){return e.jsx(h,{className:"about-card",children:e.jsx(h.Body,{children:e.jsxs("blockquote",{className:"blockquote mb-0",children:[e.jsxs("p",{style:{textAlign:"justify"},children:["Hello! I'm ",e.jsx("span",{className:"gold",children:"Tushar Mohanpuria"}),", currently pursuing a B.Tech in Computer Science Engineering at the Indian Institute of Information Technology, Manipur.",e.jsx("br",{}),"I have a strong interest in software development and cybersecurity, with hands-on experience in ethical hacking and penetration testing.",e.jsx("br",{}),"I am proficient in various programming languages, including C++, Python, and JavaScript, and have developed several full-stack projects using the MERN stack.",e.jsx("br",{}),e.jsx("br",{}),"When I'm not coding, you can find me:"]}),e.jsxs("ul",{children:[e.jsxs("li",{className:"about-activity",children:[e.jsx(b,{})," Gaming"]}),e.jsxs("li",{className:"about-activity",children:[e.jsx(b,{})," Reading Novels"]}),e.jsxs("li",{className:"about-activity",children:[e.jsx(b,{})," Watching Anime or Movies"]})]}),e.jsx("p",{style:{color:"rgb(155 126 172)"},children:'"Crafting Code, Securing Tomorrow"'}),e.jsx("footer",{className:"blockquote-footer",children:"Tushar"})]})})})}const be="/assets/about-FEa5sPAK.png";function Ne(){return e.jsxs(n,{style:{justifyContent:"center",paddingBottom:"50px"},children:[e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(V,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(Y,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(Q,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(S,{})}),e.jsx(s,{xs:4,md:2,className:"tech-icons",children:e.jsx(U,{})})]})}function we(){return e.jsxs(n,{style:{justifyContent:"center",paddingBottom:"10px"},children:[e.jsxs("h1",{className:"project-heading",style:{paddingBottom:"20px"},children:["Days I ",e.jsx("strong",{className:"gold",children:"Code"})]}),e.jsx(ie,{username:"Tusharmohanpuria",blockSize:15,blockMargin:5,color:"#c084f5",fontSize:16})]})}function ve(){return e.jsxs(o,{fluid:!0,className:"about-section",children:[e.jsx(f,{}),e.jsxs(o,{children:[e.jsxs(n,{style:{justifyContent:"center",padding:"10px"},children:[e.jsxs(s,{md:7,style:{justifyContent:"center",paddingTop:"30px",paddingBottom:"50px"},children:[e.jsxs("h1",{style:{fontSize:"2.1em",paddingBottom:"20px"},children:["Get to Know ",e.jsx("strong",{className:"gold",children:"Me"})]}),e.jsx(ye,{})]}),e.jsx(s,{md:5,style:{paddingTop:"120px",paddingBottom:"50px"},className:"about-img",children:e.jsx("img",{src:be,alt:"About me",className:"img-fluid"})})]}),e.jsxs("h1",{className:"project-heading",children:["My ",e.jsx("strong",{className:"gold",children:"Skillset"})]}),e.jsx(fe,{}),e.jsxs("h1",{className:"project-heading",children:[e.jsx("strong",{className:"gold",children:"Tools"})," I Use"]}),e.jsx(Ne,{}),e.jsx(we,{})]})]})}function j({title:i,description:a,imgPath:d,ghLink:m,demoLink:t,isBlog:r}){return e.jsxs(h,{className:"project-card-view",children:[e.jsx(h.Img,{variant:"top",src:d,alt:"Project Image"}),e.jsxs(h.Body,{children:[e.jsx(h.Title,{children:i}),e.jsx(h.Text,{style:{textAlign:"justify"},children:a}),e.jsxs(p,{variant:"primary",href:m,target:"_blank",children:[e.jsx(X,{}),"  ",r?"Read Blog":"View Code"]}),`
`,`
`,!r&&t&&e.jsxs(p,{variant:"primary",href:t,target:"_blank",style:{marginLeft:"10px"},children:[e.jsx(Z,{}),"  ","Live Demo"]})]})]})}const ke="/assets/library-DKCqf_qS.png",Ce="/assets/audioEqualizer-ChCxzwkR.png",Se="/assets/multilingualDictionary-DqwDNym9.png",Te="/assets/handwrite2type-ugMFEklx.png",Ee="/assets/movieExplorer-DHyXwpQZ.png";function Le(){return e.jsxs(o,{fluid:!0,className:"project-section",children:[e.jsx(f,{}),e.jsxs(o,{children:[e.jsxs("h1",{className:"project-heading",children:["My Recent ",e.jsx("strong",{className:"gold",children:"Works "})]}),e.jsx("p",{style:{color:"white"},children:"Here are a few projects I've worked on recently."}),e.jsxs(n,{style:{justifyContent:"center",paddingBottom:"10px"},children:[e.jsx(s,{md:4,className:"project-card",children:e.jsx(j,{imgPath:ke,isBlog:!1,title:"Library Management System",description:"A library management system (a full-stack project using MERN) that increased efficiency by 50%. Features include streamlined book transactions, automated tasks, self-checkout, QR code generation for books, automatic fine collection, and E-ID generation.",ghLink:"https://github.com/Tusharmohanpuria/Library-Management-System",demoLink:"https://www.youtube.com/watch?v=YOPJ7nz6FaA&feature=youtu.be"})}),e.jsx(s,{md:4,className:"project-card",children:e.jsx(j,{imgPath:Ce,isBlog:!1,title:"Audio Equalizer Application",description:"An audio equalizer with file support that reduces processing time by 30%. It offers fine-tuning across multiple frequency bands, improving audio equalization precision and user comprehension with playback and visualization features.",ghLink:"https://github.com/Tusharmohanpuria/Audio-Equilizer"})}),e.jsx(s,{md:4,className:"project-card",children:e.jsx(j,{imgPath:Se,isBlog:!1,title:"Multilingual Dictionary",description:"A web application providing word translations and definitions in multiple languages. It enhances user experience with a responsive interface, rich language features, and accurate image displays for user queries.",ghLink:"https://github.com/Tusharmohanpuria/Multilingual-Dictionary"})}),e.jsx(s,{md:4,className:"project-card",children:e.jsx(j,{imgPath:Te,isBlog:!1,title:"HandWrite2Type",description:"HandWrite2Type is a web application that generates personalized fonts from handwritten samples, converts documents between PDF and Word formats, and summarizes text documents. Built with ReactJS and Flask, it uses image processing, contour detection, and the FontForge library for font generation, while leveraging NLP techniques for text summarization.",ghLink:"https://github.com/Tusharmohanpuria/handwrite2type",demoLink:"https://www.youtube.com/watch?v=4afRhcApeOw&feature=youtu.be"})}),e.jsx(s,{md:4,className:"project-card",children:e.jsx(j,{imgPath:Ee,isBlog:!1,title:"Movie Explorer",description:"The Movie Explorer application was developed using a client-server architecture. The server-side was implemented using Node.js with Express.js framework, while the client-side was developed using React.js library.",ghLink:"https://github.com/Tusharmohanpuria/Movie-Explorer",demoLink:"https://movie-explorer-1-p91x.onrender.com/"})})]})]})]})}const Be=()=>{const i=new Date().getFullYear();return e.jsx(o,{fluid:!0,className:"footer",children:e.jsxs(n,{children:[e.jsx(s,{md:"4",className:"footer-copywright",children:e.jsx("h3",{children:"Created and Built by Tushar Mohanpuria"})}),e.jsx(s,{md:"4",className:"footer-copywright",children:e.jsxs("h3",{children:["© ",i," TM. All Rights Reserved."]})}),e.jsx(s,{md:"4",className:"footer-body",children:e.jsxs("ul",{className:"footer-icons",children:[e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://github.com/tusharmohanpuria",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:e.jsx(v,{})})}),e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://www.linkedin.com/in/tushar-mohanpuria/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:e.jsx(k,{})})}),e.jsx("li",{className:"social-icons",children:e.jsx("a",{href:"https://www.instagram.com/tusharmohanpuria/",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:e.jsx(C,{})})})]})})]})})},w="/assets/resume-CrM4oQFO.pdf",Ie="/assets/resume-B_3kkzsa.jpg";ae.workerSrc=`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${re}/pdf.worker.min.js`;function Ae(){const[i,a]=c.useState(1200);return c.useEffect(()=>{a(window.innerWidth)},[]),e.jsx("div",{children:e.jsxs(o,{fluid:!0,className:"resume-section",children:[e.jsx(f,{}),e.jsx(n,{style:{justifyContent:"center",position:"relative"},children:e.jsxs(p,{variant:"primary",href:w,target:"_blank",style:{maxWidth:"250px"},children:[e.jsx(N,{})," Download CV"]})}),e.jsx(n,{className:"resume",children:e.jsx("img",{src:Ie,alt:"resume",className:"d-flex justify-content-center",style:{width:"92%"}})}),e.jsx(n,{style:{justifyContent:"center",position:"relative"},children:e.jsxs(p,{variant:"primary",href:w,target:"_blank",style:{maxWidth:"250px"},children:[e.jsx(N,{})," Download CV"]})})]})})}const Me=()=>{const i=ne();return c.useEffect(()=>{window.scrollTo(0,0)},[i.pathname]),null};function Pe(){const[i,a]=c.useState(!0);return c.useEffect(()=>{const d=setTimeout(()=>{a(!1)},1200);return()=>clearTimeout(d)},[]),e.jsxs(E,{children:[e.jsx(ce,{load:i}),e.jsxs("div",{className:"App",id:i?"no-scroll":"scroll",children:[e.jsx(he,{}),e.jsx(Me,{}),e.jsxs(oe,{children:[e.jsx(u,{path:"/",element:e.jsx(ge,{})}),e.jsx(u,{path:"/project",element:e.jsx(Le,{})}),e.jsx(u,{path:"/about",element:e.jsx(ve,{})}),e.jsx(u,{path:"/resume",element:e.jsx(Ae,{})}),e.jsx(u,{path:"*",element:e.jsx(le,{to:"/"})})]}),e.jsx(Be,{})]})]})}T(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(Pe,{})}));
