"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{6325:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5511)),i=n(2834),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},2233:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(5987),o=n(4942),i=n(1413),a=n(9867),u=n(2026),s=n(4943),c=n(3845),d=n(6020),l=n(6307),m=(0,n(1248).ZP)(),h=n(8708),v=n(2834),f=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,h.Z)(),Z=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),x=function(e){return(0,l.Z)({props:e,name:"MuiContainer",defaultTheme:p})},b=function(e,t){var n=e.classes,r=e.fixed,o=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,s.Z)(String(i))),r&&"fixed",o&&"disableGutters"]};return(0,d.Z)(a,(function(e){return(0,c.Z)(t,e)}),n)};var g=n(6892),S=n(3078),k=n(7090),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?Z:t,s=e.useThemeProps,c=void 0===s?x:s,d=e.componentName,l=void 0===d?"MuiContainer":d,m=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)((0,i.Z)({},"xs"===n.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)})),n.maxWidth&&"xs"!==n.maxWidth&&(0,o.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),h=a.forwardRef((function(e,t){var n=c(e),o=n.className,a=n.component,s=void 0===a?"div":a,d=n.disableGutters,h=void 0!==d&&d,p=n.fixed,Z=void 0!==p&&p,x=n.maxWidth,g=void 0===x?"lg":x,S=(n.classes,(0,r.Z)(n,f)),k=(0,i.Z)((0,i.Z)({},n),{},{component:s,disableGutters:h,fixed:Z,maxWidth:g}),W=b(k,l);return(0,v.jsx)(m,(0,i.Z)({as:s,ownerState:k,className:(0,u.Z)(W.root,o),ref:t},S))}));return h}({createStyledComponent:(0,S.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),y=W},6742:function(e,t,n){var r=n(9439),o=n(1413),i=n(9867),a=n(7090),u=n(381),s=n(2834),c=function(e,t){return(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&!e.vars&&{colorScheme:e.palette.mode})},d=function(e){return(0,o.Z)((0,o.Z)({color:(e.vars||e).palette.text.primary},e.typography.body1),{},{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}})};t.ZP=function(e){var t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),n=t.children,l=t.enableColorScheme,m=void 0!==l&&l;return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)(u.Z,{styles:function(e){return function(e){var t,n,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};i&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach((function(t){var n,o=(0,r.Z)(t,2),i=o[0],u=o[1];a[e.getColorSchemeSelector(i).replace(/\s*&/,"")]={colorScheme:null==(n=u.palette)?void 0:n.mode}}));var u=(0,o.Z)({html:c(e,i),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)((0,o.Z)({margin:0},d(e)),{},{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},a),s=null==(t=e.components)||null==(n=t.MuiCssBaseline)?void 0:n.styleOverrides;return s&&(u=[u,s]),u}(e,m)}}),n]})}},6866:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(1413),o=n(5987),i=n(9867),a=n(4942);var u=i.createContext(null);function s(){return i.useContext(u)}var c="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",d=n(2834);var l=function(e){var t=e.children,n=e.theme,o=s(),a=i.useMemo((function(){var e=null===o?n:function(e,t){return"function"===typeof t?t(e):(0,r.Z)((0,r.Z)({},e),t)}(o,n);return null!=e&&(e[c]=null!==o),e}),[n,o]);return(0,d.jsx)(u.Provider,{value:a,children:t})},m=n(7226),h=n(6846),v={};function f(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return i.useMemo((function(){var i=e&&t[e]||t;if("function"===typeof n){var u=n(i),s=e?(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,u)):u;return o?function(){return s}:s}return e?(0,r.Z)((0,r.Z)({},t),{},(0,a.Z)({},e,n)):(0,r.Z)((0,r.Z)({},t),n)}),[e,t,n,o])}var p=function(e){var t=e.children,n=e.theme,r=e.themeId,o=(0,h.Z)(v),i=s()||v,a=f(r,o,n),u=f(r,i,n,!0);return(0,d.jsx)(l,{theme:u,children:(0,d.jsx)(m.T.Provider,{value:a,children:t})})},Z=n(2088),x=["theme"];function b(e){var t=e.theme,n=(0,o.Z)(e,x),i=t[Z.Z];return(0,d.jsx)(p,(0,r.Z)((0,r.Z)({},n),{},{themeId:i?Z.Z:void 0,theme:i||t}))}}}]);
//# sourceMappingURL=983.e1d81307.chunk.js.map