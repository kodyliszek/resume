/*! For license information please see component---src-pages-index-js-14062619e074b7cc0326.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var l=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){var t,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+l?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),l)):(t=n,e())}};t.default=l},Ijbi:function(e,t,a){var l=a("WkPL");e.exports=function(e){if(Array.isArray(e))return l(e)},e.exports.default=e.exports,e.exports.__esModule=!0},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,a(t)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},RIqP:function(e,t,a){var l=a("Ijbi"),n=a("EbDI"),r=a("ZhPi"),o=a("Bnag");e.exports=function(e){return l(e)||n(e)||r(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("7oih");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a("dI71"),i=a("YIkO"),c=a.n(i),m=a("dwco"),u=a.n(m),f=function(e){return e.children},d=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(o(t)),t}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault(),this.props.onScrollClick();var t=0,a=!0,l=this.props,n=l.type,r=l.element,o=l.offset,s=l.timeout;if(n&&r)switch(n){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,o,s):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:l+t,left:0,behavior:"smooth"})}),a):window.scroll({top:l+t,left:0,behavior:"smooth"})},a.render=function(){return n.a.createElement(f,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick,onKeyDown:this.handleClick,"aria-hidden":"true"},this.props.children))},t}(n.a.Component),p=a("TUGy"),A=a.n(p),h=a("obyI"),g=a.n(h),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(o(a)),a.hideNavbar=a.hideNavbar.bind(o(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.hideNavbar=function(){this.setState({isCollapsed:!0})},a.render=function(){var e=this,t=this.state,a=t.tabs,l=t.isCollapsed;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},n.a.createElement("span",{className:"d-inline-block d-lg-block"},n.a.createElement(d,{type:"id",onScrollClick:this.hideNavbar,element:"about"},n.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:A.a,alt:"profile"}))),n.a.createElement("span",{className:"d-inline-block d-lg-none ml-3"},g.a.firstName," ",g.a.lastName)),n.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(l?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse "+(l?"":"show"),id:"navbarSupportedContent"},n.a.createElement(c.a,{items:a.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},a.map((function(t,a){var r=t.href,o=t.content;return n.a.createElement("li",{className:"nav-item",key:r},n.a.createElement(d,{type:"id",offset:l?0:-50,onScrollClick:e.hideNavbar,element:r},n.a.createElement("a",{className:"nav-link",href:"#"+r},o)))})))))},t}(l.Component);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(E,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h1",{className:"mb-0 mt-5 first-name row"},n.a.createElement("span",{className:"text-secondary"},g.a.firstName),n.a.createElement("span",{className:"text-primary"},g.a.lastName)),n.a.createElement("h2",{className:"mb-0"},g.a.role),n.a.createElement("div",{className:"subheading mb-5"},g.a.address," · ",g.a.phone," ·",n.a.createElement("a",{href:"mailto:"+g.a.email},g.a.email)),n.a.createElement("p",{className:"lead mb-5"},"A former sailor, enchanted by three charming mermaids, decided to spend the rest of his life on a dry land, sailing between the waves of code."),n.a.createElement("div",{className:"social-icons"},g.a.socialLinks.map((function(e){var t=e.icon,a=e.name,l=e.url;return n.a.createElement("a",{key:a,href:l},n.a.createElement("i",{className:"fab "+t}))}))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Experience"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Python Trainer"),n.a.createElement("div",{className:"subheading mb-3"},"infoShare Academy"),n.a.createElement("p",null,"Knowledge spreading across the universe...")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"May 2019 - Present"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Software Engineer"),n.a.createElement("div",{className:"subheading mb-3"},"HAPAG LLOYD"),n.a.createElement("p",null,"This is the place where I managed to combine the experience gathered at sea and the skills gained in the IT industry. Thanks to experienced colleagues, I learned Java, Vue.js and how to swing in the clouds (AWS) and not fall down. I found out that some problems may not be as trival as they look on a first sight and much more.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"January 2020 - April 2021"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Python Developer"),n.a.createElement("div",{className:"subheading mb-3"},"Blue Services"),n.a.createElement("p",null,"I had a lot of fun working there because I could do what I feel best in, solve problems. Web applications for the banking and insurance sector it was my everyday life. High-performance and scalable sales systems were challenges that I loved. It was a miracle that I still found some time for machine learning and data science.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"September 2017 - January 2020"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"JUNIOR PYTHON DEVELOPER"),n.a.createElement("div",{className:"subheading mb-3"},"SAMSUNG ELECTRONICS"),n.a.createElement("p",null,"First job in IT, first challenges, new technologies and a lot of fun (I mean work). The world of tests for mobile devices stood in front of me. Particularly a lot of work and commitment went into the Bixby project, which I am proud of. Now, I think that thanks to the experience gained in Samsung, I understand better what may go wrong in the future, which is why I create better code and I am better developer.")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"June 2017 - September 2017"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Seafarer / Academic Teacher"),n.a.createElement("div",{className:"subheading mb-3"},"Gdynia Maritime Univerity"),n.a.createElement("p",null,"Adventure and beautiful memory ...")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"October 2008 - November 2016"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Education"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"CodersLab Bootcamp"),n.a.createElement("div",{className:"subheading"},"Python Backend Developer"),n.a.createElement("div",null,"Computer Science - Web Development")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"February 2017 - April 2017"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Gdynia Maritime Univerity"),n.a.createElement("div",{className:"subheading"},"Master od Science"),n.a.createElement("div",null,"Nautical Studies")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"October 2004 - September 2009"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Nautical Maritime College of Ireland"),n.a.createElement("div",{className:"subheading"},"Bachelor od Science"),n.a.createElement("div",null,"Nautical Studies")),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"January 2008 - June 2008"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Skills"),n.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),n.a.createElement("ul",{className:"list-inline dev-icons"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-python"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-html5"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-css3-alt"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-js-square"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-react"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-node-js"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-npm"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-docker"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-aws"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-vuejs"}))),n.a.createElement("div",{className:"subheading mb-3"},"Workflow"),n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"TDD - Test Driven Design"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development - Scrum"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Agile Development - Kanban"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Clean Code - SOLID")))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Interests"),n.a.createElement("ul",{className:"fa-ul mb-4"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Writing Short Novel Stories"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Homebrewing"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Board Games"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Sports - Football"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Indiana Jones Movies"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-check"}),"Collectible Card Games")),n.a.createElement("ul",{className:"list-inline dev-icons"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fas fa-feather"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fas fa-beer"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fas fa-dice"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fas fa-futbol"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-redhat"})),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("i",{className:"fab fa-wizards-of-the-coast"}))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),n.a.createElement("ul",{className:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fas fa-award text-secondary"}),"Faculty of Navigation Dean's Award for academic achievements"),n.a.createElement("li",null,n.a.createElement("i",{className:"fa-li fa fa-trophy text-secondary"}),"Gdynia Maritime University Rector's Award for didactic achievements"))))))}},TSYQ:function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var o=n.apply(null,l);o&&e.push(o)}}else if("object"===r)if(l.toString===Object.prototype.toString)for(var s in l)a.call(l,s)&&l[s]&&e.push(s);else e.push(l.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},TUGy:function(e,t){e.exports="data:image/png;base64,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"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}e.exports=function(e,t,l){return t&&a(e.prototype,t),l&&a(e,l),e},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l},e.exports.default=e.exports,e.exports.__esModule=!0},YIkO:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("pVnL")),r=l(a("lSNA")),o=l(a("RIqP")),s=l(a("lwsE")),i=l(a("a1gu")),c=l(a("Nsbk")),m=l(a("PJYZ")),u=l(a("W8MJ")),f=l(a("7W2i")),d=l(a("17x9")),p=l(a("q1tI")),A=l(a("TSYQ")),h=l(a("Fxm3"));var g=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,f.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:d.default.arrayOf(d.default.string).isRequired,currentClassName:d.default.string.isRequired,scrolledPastClassName:d.default.string,style:d.default.object,componentTag:d.default.oneOfType([d.default.string,d.default.elementType]),offset:d.default.number,rootEl:d.default.string,onUpdate:d.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],l=0,n=e.length;l<n;l++)a[l]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],l=[],n=e||this.state.targetItems,r=!1,s=0,i=n.length;s<i;s++){var c=n[s],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=s===i-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&f&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[c],l=this._fillArray(l,!1),m=!0),l.push(m)}return{inView:t,outView:a,viewStatusList:l,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(l)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,l=a.rootEl,n=a.offset;l&&(t=document.querySelector(l).getBoundingClientRect());var r=e.getBoundingClientRect(),o=l?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+o,c=l?r.top+s-t.top+n:r.top+s+n,m=c+e.offsetHeight;return c<i&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,l=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=l}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),l=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(l)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,h.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,l=a.children,o=a.className,s=a.scrolledPastClassName,i=a.style,c=0,m=p.default.Children.map(l,(function(t,a){var l;if(!t)return null;var o=t.type,i=s&&e.state.isScrolledPast[a],m=(0,A.default)((l={},(0,r.default)(l,"".concat(t.props.className),t.props.className),(0,r.default)(l,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(l,"".concat(e.props.scrolledPastClassName),i),l));return p.default.createElement(o,(0,n.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,A.default)((0,r.default)({},"".concat(o),o));return p.default.createElement(t,{className:u,style:i},m)}}]),t}(p.default.Component);t.default=g},ZhPi:function(e,t,a){var l=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},a1gu:function(e,t,a){var l=a("cDf5").default,n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||s,scrollIntoView:l.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=f(this),l=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+r.left-l.left,a.scrollTop+r.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function f(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function d(t){var a,l,n,o,s=(r()-t.startTime)/468;o=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*o)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(d.bind(e,t))}function p(a,l,o){var i,c,m,u,f=r();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=n.scroll):(i=a,c=a.scrollLeft,m=a.scrollTop,u=s),d({scrollable:i,method:u,startTime:f,startX:c,startY:m,x:l,y:o})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},obyI:function(e,t){e.exports={siteTitle:"Damian Filipkowski",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#3776ab",manifestThemeColor:"#ffdf76",manifestDisplay:"standalone",manifestIcon:"src/assets/img/favicon.png",pathPrefix:"/resume/",firstName:"Damian",lastName:"Filipkowski",role:"Python Developer",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/kodyliszek/"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://www.linkedin.com/in/damian-filipkowski/"},{icon:"fa-codepen",name:"CodePen",url:"https://codepen.io/"}],email:"damian.filipkowski@gmail.com",phone:"+48 608-453-761",address:"Gdańsk, Poland"}}}]);
//# sourceMappingURL=component---src-pages-index-js-14062619e074b7cc0326.js.map