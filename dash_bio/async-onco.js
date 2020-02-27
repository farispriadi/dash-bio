(window.webpackJsonpdash_bio=window.webpackJsonpdash_bio||[]).push([[6],{142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"OncoPrint",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(143))&&r.__esModule?r:{default:r}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=s(n(0)),a=s(n(44)),i=s(n(47)),u=n(144);function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=d(t).call(this,e))||"object"!==l(o)&&"function"!=typeof o?y(r):o).state={xStart:null,xEnd:null},n.resetWindowing=n.resetWindowing.bind(y(y(n))),n.handleChange=a.default.debounce(n.handleChange.bind(y(y(n))),250),n}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r.PureComponent),n=t,(o=[{key:"resetWindowing",value:function(e){var t,n,r=e.range;return 2===r.length?(t=r[0],n=r[1]):(t=null,n=null),{xStart:t,xEnd:n}}},{key:"handleChange",value:function(e){var t;this.props.onChange&&(e.points?(t="mousedown"===e.event.type?"Click":"mousemove"===e.event.type?"Hover":"Other",this.props.onChange({eventType:t,name:e.points[0].data.name,text:e.points[0].text,curveNumber:e.points[0].curveNumber,x:e.points[0].x,y:e.points[0].y})):e["xaxis.range[0]"]||e["xaxis.range"]?(this.setState({xStart:e["xaxis.range[0]"]||e["xaxis.range"][0],xEnd:e["xaxis.range[1]"]||e["xaxis.range"][1]}),this.props.onChange({eventType:"Zoom",xStart:e["xaxis.range[0]"]||e["xaxis.range"][0],xEnd:e["xaxis.range[1]"]||e["xaxis.range"][1]})):!0===e["xaxis.autorange"]?(this.setState({xStart:null,xEnd:null}),this.props.onChange({eventType:"Autoscale"})):this.props.onChange(e))}},{key:"getData",value:function(){var e=this.props,t=e.data,n=e.padding,r=e.colorscale,o=e.backgroundcolor,a=(0,u.aggregate)(t),i=(0,u.getSortedGenes)(t),s=(0,u.getSortedSamples)(t),l=(0,u.getEventRatiosPerGene)(t,s.length),c=function(e){return e.map(function(e){return"".concat(e," (").concat(l[e],"%)")})},p=0,d=[],h=[],y=[],g=[];s.forEach(function(e){d.push.apply(d,f(Array(i.length).fill(p))),h.push.apply(h,f(Array(i.length).fill(e))),y.push.apply(y,f(Array(i.length).fill(1))),g.push.apply(g,f(c(i))),p+=1});var v=[{base:d.map(function(e){return e+n}),hoverinfo:"text",marker:{color:o},name:"No alteration",text:h,orientation:"h",type:"bar",x:y.map(function(e){return e-2*n}),y:g}];return Object.keys(a).forEach(function(e){var t=a[e],o=.4;"CNA"===t.type?o=.8:"EXP"===t.type&&(o=.6);var i=t.events.map(function(e){return"".concat(e.sample,"<br>").concat((0,u.getDisplayName)(e))}),l=t.events.map(function(e){return e.sample}).map(function(e){return s.findIndex(function(t){return t===e})});v.push({base:l.map(function(e){return e+n}),hoverinfo:"text",marker:{color:(0,u.getColor)(t.events[0],r)},name:(0,u.getDisplayName)(t.events[0]),text:i,orientation:"h",type:"bar",width:o,x:Array(t.events.length).fill(1).map(function(e){return e-2*n}),y:c((0,u.getGeneNames)(t.events))})}),v}},{key:"getLayout",value:function(){var e=this.props,t=e.showlegend,n=e.showoverview,r=e.width,o=e.height,a=this.state,i={barmode:"stack",hovermode:"closest",showlegend:t,xaxis:{showgrid:!1,showticklabels:!1,zeroline:!1,range:[a.xStart,a.xEnd],automargin:!0},yaxis:{showgrid:!1,zeroline:!1,fixedrange:!0,automargin:!0},margin:{t:20,r:20,b:20}};return n&&(i.xaxis.rangeslider={autorange:!0}),{layout:i,width:r,height:o}}},{key:"componentDidMount",value:function(){var e=this.resetWindowing(this.props),t=e.xStart,n=e.xEnd;this.setState({xStart:t,xEnd:n})}},{key:"componentDidUpdate",value:function(e,t){if(this.props.data!==e.data){var n=this.resetWindowing(this.props),r=n.xStart,o=n.xEnd;this.setState({xStart:r,xEnd:o})}}},{key:"render",value:function(){var e=this.getData(),t=this.getLayout(),n=t.layout,o={style:{width:t.width,height:t.height},useResizeHandler:!0};return r.default.createElement("div",null,r.default.createElement(i.default,c({data:e,layout:n,onClick:this.handleChange,onHover:this.handleChange,onRelayout:this.handleChange},o)))}}])&&p(n.prototype,o),s&&p(n,s),t}();t.default=g,g.propTypes={data:o.default.array,padding:o.default.number,colorscale:o.default.oneOfType([o.default.bool,o.default.object]),backgroundcolor:o.default.string,range:o.default.array,showlegend:o.default.bool,showoverview:o.default.bool,width:o.default.oneOfType([o.default.number,o.default.string]),height:o.default.oneOfType([o.default.number,o.default.string])},g.defaultProps={padding:.05,colorscale:null,backgroundcolor:"rgb(190, 190, 190)",range:[null,null],showlegend:!0,showoverview:!0,width:null,height:500}},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColor=t.getDisplayName=t.aggregate=t.getSortedSamples=t.createSortEventsForGeneComparator=t.createSamplesMap=t.isMutation=t.getEventRatiosPerGene=t.getSortedGenes=t.getGeneNames=t.SupportedEvents=void 0;var r=a(n(44)),o=a(n(145));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=["INFRAME","TRUNC","MISSENSE"],s={MISSENSE:{colorHTML:"#008000",displayName:"Missense mutation"},INFRAME:{colorHTML:"#993404",displayName:"Inframe mutation"},TRUNC:{colorHTML:"#000000",displayName:"Truncation mutation"},FUSION:{colorHTML:"#8b00c9",displayName:"Fusion"},AMP:{colorHTML:"#ff0000",displayName:"Amplification"},GAIN:{colorHTML:"#ffb6c1",displayName:"Gain"},HETLOSS:{colorHTML:"#8fd8d8",displayName:"Shallow deletion"},HOMDEL:{colorHTML:"#0000ff",displayName:"Deep deletion"},UP:{colorHTML:"#ff9999",displayName:"mRNA Upregulation"},DOWN:{colorHTML:"#6699cc",displayName:"mRNA Downregulation"}};t.SupportedEvents=s;var l={AMP:0,GAIN:2,HETLOSS:3,HOMDEL:1,undefined:4},c={INFRAME:1,MISSENSE:3,TRUNC:0,undefined:4},f={UP:0,DOWN:1,undefined:2},p=function(e){return e.map(function(e){return e.gene}).filter(function(e){return null!==e})};t.getGeneNames=p;t.getSortedGenes=function(e){return i(new Set(p(e))).reverse()};t.getEventRatiosPerGene=function(e,t){var n=e.reduce(function(e,t){return t.type&&(e[t.gene]?e[t.gene]+=1:e[t.gene]=1),e},{});return Object.keys(n).forEach(function(e){n[e]=Math.floor(n[e]/t*100)}),n};var d=function(e){return u.includes(e.type)};t.isMutation=d;var h=function(e){return e>0?1:e<0?-1:0},y=function(e){var t={};return e.forEach(function(e){var n,r,o,a=(t[e.sample]||{})[e.gene]||{};d(e)?a.MUT=e.type:a[e.type]=e.alteration,t[e.sample]=Object.assign({},t[e.sample],(n={},r=e.gene,o=a,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n))}),t};t.createSamplesMap=y;var g=function(e,t){return function(n,r){return function(e,t,n,r){var o=r[e][n]||{},a=r[t][n]||{};if(o.FUSION&&!a.FUSION)return-1;if(!o.FUSION&&a.FUSION)return 1;var i=h(l[o.CNA]-l[a.CNA]);if(0!==i)return i;var u=h(c[o.MUT]-c[a.MUT]);if(0!==u)return u;var s=h(f[o.EXP]-f[a.EXP]);return 0!==s?s:0}(n,r,e,t)}};t.createSortEventsForGeneComparator=g;t.getSortedSamples=function(e){var t=y(e),n=i(new Set(p(e))),r=i(new Set(e.map(function(e){return e.sample}))).sort(),a=[];n.forEach(function(e){a.push(new o.default(i(r),g(e,t)))});var u={};r.forEach(function(e,t){u[e]=t});var s=i(r);return s.sort(function(e,t,n){return function(r,o){for(var a=0,i=0,u=0;u<e.length;u+=1){var s=n[u].compare(r,o),l=Math.abs(s);if(l>i&&(a=s,i=l),1===i)break}return 0===a&&(a=t[r]<t[o]?-1:1),a>0?1:-1}}(n,u,a)),s};t.aggregate=function(e){var t={};return e.forEach(function(e){if(e.type&&"NONE"!==e.type){var n=d(e)?e.type:e.alteration,r=t[n]||{type:e.type,alteration:e.alteration,events:[]};r.events.push(e),t[n]=r}}),t};t.getDisplayName=function(e){var t=d(e)?e.type:e.alteration;return s[t].displayName};t.getColor=function(e,t){var n,o=d(e)?e.type:e.alteration;return t&&r.default.isObject(t)&&(n=t[o])||(n=s[o].colorHTML),n}},145:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.hasElementsInInterval=void 0;var o=function(e,t,n,r){for(var o,a,i=0,u=e.length;;){if(i>=u)return!1;if((a=t(e[o=Math.floor((i+u)/2)]))>=r)u=o;else{if(!(a<n))return!0;i=o+1}}};t.hasElementsInInterval=o;var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.comparator=n,this.data=t,this.sort()}var t,n,a;return t=e,(n=[{key:"sort",value:function(){this.sortedData=this.data.sort(this.comparator),this.changePoints=[];for(var e=0;e<this.sortedData.length&&e!==this.sortedData.length-1;e+=1)0!==this.comparator(this.sortedData[e],this.sortedData[e+1])&&this.changePoints.push(e);this.samplesToIndex={};for(var t=0;t<this.sortedData.length;t+=1)this.samplesToIndex[this.sortedData[t]]=t}},{key:"compare",value:function(e,t){var n=this.samplesToIndex[e],r=this.samplesToIndex[t];if(void 0===n&&void 0===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;var a=!1;if(n===r)return 0;if(n>r){var i=n;n=r,r=i,a=!0}var u=0;return o(this.changePoints,function(e){return e},n,r)&&(u=-1),a&&(u*=-1),u}}])&&r(t.prototype,n),a&&r(t,a),e}();t.default=a},39:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(1),o=n.n(r),a=n(160),i=n(142),u=n(15);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=f(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?p(r):o).handleChange=n.handleChange.bind(p(n)),n}var n,u,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(u=[{key:"handleChange",value:function(e){var t=JSON.stringify(e);this.props.setProps({eventDatum:t})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.eventDatum;return o.a.createElement("div",{id:t,eventDatum:n},o.a.createElement(i.OncoPrint,l({onChange:this.handleChange},Object(a.a)(["setProps"],this.props))))}}])&&c(n.prototype,u),h&&c(n,h),t}();h.defaultProps=u.b,h.propTypes=u.c}}]);