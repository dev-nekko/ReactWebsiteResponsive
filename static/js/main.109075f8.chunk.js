(this["webpackJsonpwebsite-app"]=this["webpackJsonpwebsite-app"]||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(17),a=s.n(i),n=s(15),r=(s(23),s(2)),l=s(0),j=["btn--primary","btn--outline","btn--test"],b=["btn--medium","btn--large"],o=function(e){var t=e.children,s=e.type,c=e.onClick,i=e.buttonStyle,a=e.buttonSize,n=j.includes(i)?i:j[0],o=b.includes(a)?a:b[0];return Object(l.jsx)(r.b,{to:"/sign-up",className:"btn-mobile",children:Object(l.jsx)("button",{className:"btn ".concat(n," ").concat(o),onClick:c,type:s,children:t})})};s(30);var d=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(!0),j=Object(n.a)(a,2),b=j[0],d=j[1],h=function(){return i(!1)},x=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(c.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)(r.b,{to:"/",className:"navbar-logo",onClick:h,children:["LOGO",Object(l.jsx)("i",{class:"fab fa-typo3"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return i(!s)},children:Object(l.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/",className:"nav-links",onClick:h,children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/servicios",className:"nav-links",onClick:h,children:"Servicios"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/productos",className:"nav-links",onClick:h,children:"Productos"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:h,children:"Sign Up"})})]}),b&&Object(l.jsx)(o,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},h=s(3);s(9),s(31);var x=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{src:e.src,alt:"Viaje",className:"cards__item__img"})}),Object(l.jsx)("div",{className:"cards__item_info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})};var O=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(x,{src:"images/img-9.jpg",text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),Object(l.jsx)(x,{src:"images/img-2.jpg",text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(x,{src:"images/img-3.jpg",text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),Object(l.jsx)(x,{src:"images/img-4.jpg",text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),Object(l.jsx)(x,{src:"images/img-8.jpg",text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})]})]})})]})};s(32);var u=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"La Adventura Espera"}),Object(l.jsx)("p",{children:"\xbfQue estas esperando?"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Inicia Aqui"}),Object(l.jsxs)(o,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["Ver Luego ",Object(l.jsx)("i",{className:"far fa-play-circle"})]})]})]})};s(33);var m=function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"Unete a nuestra comunidad para recibir mas informacion"}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"Puedes desuscribirte en cualquier momento"}),Object(l.jsx)("div",{className:"input-areas",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"email",name:"email",placeholder:"Tu Correo",className:"footer-input"}),Object(l.jsx)(o,{buttonStyle:"btn--outline",children:"Suscribete"})]})})]}),Object(l.jsxs)("div",{className:"footer-links",children:[Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(l.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(l.jsx)(r.b,{to:"/",children:"Careers"}),Object(l.jsx)(r.b,{to:"/",children:"Investors"}),Object(l.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Contact Us"}),Object(l.jsx)(r.b,{to:"/",children:"Contact"}),Object(l.jsx)(r.b,{to:"/",children:"Support"}),Object(l.jsx)(r.b,{to:"/",children:"Destinations"}),Object(l.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Videos"}),Object(l.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(l.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(l.jsx)(r.b,{to:"/",children:"Agency"}),Object(l.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Social Media"}),Object(l.jsx)(r.b,{to:"/",children:"Instagram"}),Object(l.jsx)(r.b,{to:"/",children:"Facebook"}),Object(l.jsx)(r.b,{to:"/",children:"Youtube"}),Object(l.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(l.jsx)("section",{class:"social-media",children:Object(l.jsxs)("div",{class:"social-media-wrap",children:[Object(l.jsx)("div",{class:"footer-logo",children:Object(l.jsxs)(r.b,{to:"/",className:"social-logo",children:["TRVL",Object(l.jsx)("i",{class:"fab fa-typo3"})]})}),Object(l.jsx)("small",{class:"website-rights",children:"TRVL \xa9 2020"}),Object(l.jsxs)("div",{class:"social-icons",children:[Object(l.jsx)(r.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(l.jsx)("i",{class:"fab fa-facebook-f"})}),Object(l.jsx)(r.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(l.jsx)("i",{class:"fab fa-instagram"})}),Object(l.jsx)(r.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(l.jsx)("i",{class:"fab fa-youtube"})}),Object(l.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(l.jsx)("i",{class:"fab fa-twitter"})}),Object(l.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var p=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{}),Object(l.jsx)(m,{})]})};function f(){return Object(l.jsx)("h1",{className:"services",children:"SERVICES"})}function v(){return Object(l.jsx)("h1",{className:"products",children:"PRODUCTS"})}function g(){return Object(l.jsx)("h1",{className:"sign-up",children:"LIKE & SUBSCRIBE"})}var N=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(h.c,{children:[Object(l.jsx)(h.a,{path:"/",exact:!0,component:p}),Object(l.jsx)(h.a,{path:"/servicios",exact:!0,component:f}),Object(l.jsx)(h.a,{path:"/productos",exact:!0,component:v}),Object(l.jsx)(h.a,{path:"/sign-up",exact:!0,component:g})]}),Object(l.jsx)(m,{})]})})};a.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))},9:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.109075f8.chunk.js.map