(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(216),s=a(4),c=a.n(s),l=a(156),i=a(157),d=(a(183),function(e){var t=e.children;return r.a.createElement(l.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:o})});d.propTypes={children:c.a.node.isRequired};var u=d,A=a(228),g=a(169),m=a.n(g);function f(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title,c=A.data.site,l=t||c.siteMetadata.description;return r.a.createElement(m.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var p=f;t.default=function(){return r.a.createElement(u,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(162);var i=r.a.createContext({}),d=function(e){return r.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},157:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),s=a.n(o),c=a(156),l=(a(181),a(158)),i=a(169),d=function(e){return Object(l.genericHashLink)(e,c.a)},u=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?a.setState({hasScrolled:!0}):a.setState({hasScrolled:!1})},a.state={hasScrolled:!1},a}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.render=function(){return s.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},s.a.createElement(i.Helmet,null,s.a.createElement("meta",{charSet:"utf-8"}),s.a.createElement("title",null,"The Tools Team"),s.a.createElement("link",{rel:"canonical",href:"http://ux-design.rocks/"})),s.a.createElement("div",{className:"HeaderGroup"},s.a.createElement(c.a,{to:"/",className:"headera"},s.a.createElement("img",{alt:"logo",src:a(170),height:"35"})),s.a.createElement(d,{className:"headerb",smooth:!0,to:"/#about"},"About"),s.a.createElement(d,{className:"headerc",smooth:!0,to:"/#teams"},"Teams"),s.a.createElement(d,{className:"headerd",smooth:!0,to:"/#works"},"Works"),s.a.createElement(d,{className:"headere",smooth:!0,to:"/#career"},"Career")))},t}(s.a.Component);t.a=u},162:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},165:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=a(56),l=a(2),i=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=i},170:function(e,t){e.exports="data:image/png;base64,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"},216:function(e){e.exports={data:{site:{siteMetadata:{title:"Tools Team SAP"}}}}},228:function(e){e.exports={data:{site:{siteMetadata:{title:"Tools Team SAP",description:"We are The Tools Team, an\n    autonomous team inside SAP located in the SAP Labs in Silicon\n    Valley (USA) & Bangalore (India) and in the SAP Headquarters\n    (Germany).",author:"Jonathan Edward Lee"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-e661f5f532408e20c473.js.map