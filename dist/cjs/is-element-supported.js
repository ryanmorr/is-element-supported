/*! @ryanmorr/is-element-supported v0.2.0 | https://github.com/ryanmorr/is-element-supported */
"use strict";module.exports=function(t){if(t.indexOf("-")>-1)return void 0!==customElements.get(t);const e=document.createElement(t);return"[object HTMLUnknownElement]"!==Object.prototype.toString.call(e)};
