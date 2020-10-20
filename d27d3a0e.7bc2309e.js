(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return u}));var b=a(2),r=a(6),n=(a(0),a(91)),c={id:"_urx_src_utils_",title:"Module: urx/src/utils",sidebar_label:"urx/src/utils",hide_title:!0},l={unversionedId:"api/modules/_urx_src_utils_",id:"api/modules/_urx_src_utils_",isDocsHomePage:!1,title:"Module: urx/src/utils",description:'Module: "urx/src/utils"',source:"@site/docs/api/modules/_urx_src_utils_.md",slug:"/api/modules/_urx_src_utils_",permalink:"/docs/api/modules/_urx_src_utils_",editUrl:"https://github.com/virtuoso-dev/urx/edit/master/packages/docs/docs/docs/api/modules/_urx_src_utils_.md",version:"current",sidebar_label:"urx/src/utils",sidebar:"docs",previous:{title:"Module: urx/src/transformers",permalink:"/docs/api/modules/_urx_src_transformers_"},next:{title:"Module: react-urx/src/index",permalink:"/docs/api/modules/_react_urx_src_index_"}},p=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"always",id:"always",children:[]},{value:"call",id:"call",children:[]},{value:"compose",id:"compose",children:[]},{value:"curry1to0",id:"curry1to0",children:[]},{value:"curry2to1",id:"curry2to1",children:[]},{value:"joinProc",id:"joinproc",children:[]},{value:"prop",id:"prop",children:[]},{value:"tap",id:"tap",children:[]},{value:"thrush",id:"thrush",children:[]},{value:"tup",id:"tup",children:[]}]}],i={rightToc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"module-urxsrcutils"},'Module: "urx/src/utils"'),Object(n.b)("p",null,"Utils includes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"a handful of functional utilities inspired by or taken from the ",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"https://ramdajs.com/"}),"Ramda library"),";"),Object(n.b)("li",{parentName:"ul"},"TypeScript crutches - the ",Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#tup"}),"tup")," function.")),Object(n.b)("p",null,"Use these for your convenience - they are here so that urx is zero-dependency package."),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"functions"},"Functions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#always"}),"always")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#call"}),"call")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#compose"}),"compose")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#curry1to0"}),"curry1to0")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#curry2to1"}),"curry2to1")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#joinproc"}),"joinProc")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#prop"}),"prop")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#tap"}),"tap")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#thrush"}),"thrush")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(b.a)({parentName:"li"},{href:"/docs/api/modules/_urx_src_utils_#tup"}),"tup"))),Object(n.b)("h2",{id:"functions-1"},"Functions"),Object(n.b)("h3",{id:"always"},"always"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"always"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"value"),": T): (Anonymous function)"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L77"}),"urx/src/utils.ts:77"))),Object(n.b)("p",null,"returns a function which when called always returns the passed value"),Object(n.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," (Anonymous function)"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"call"},"call"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"call"),"(",Object(n.b)("inlineCode",{parentName:"p"},"proc"),": Proc): void"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L70"}),"urx/src/utils.ts:70"))),Object(n.b)("p",null,"Calls the passed function."),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"proc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Proc")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," void"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"compose"},"compose"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"compose"),"<","I, A, R>(",Object(n.b)("inlineCode",{parentName:"p"},"a"),": (arg: A) => R, ",Object(n.b)("inlineCode",{parentName:"p"},"b"),": (arg: I) => A): function"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L19"}),"urx/src/utils.ts:19"))),Object(n.b)("p",null,"Performs left to right composition of two functions."),Object(n.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"I"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"A"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"R"))))),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"a")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg: A) => R")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"b")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg: I) => A")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," function"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"curry1to0"},"curry1to0"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"curry1to0"),"<","T, R>(",Object(n.b)("inlineCode",{parentName:"p"},"proc"),": (arg: T) => R, ",Object(n.b)("inlineCode",{parentName:"p"},"arg"),": T): function"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L40"}),"urx/src/utils.ts:40"))),Object(n.b)("p",null,"Takes a 1 argument function and returns a function which when called, executes it with the provided argument."),Object(n.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"R"))))),Object(n.b)("h4",{id:"parameters-3"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"proc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg: T) => R")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arg")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," function"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"curry2to1"},"curry2to1"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"curry2to1"),"<","T, K, R>(",Object(n.b)("inlineCode",{parentName:"p"},"proc"),": (arg1: T,arg2: K) => R, ",Object(n.b)("inlineCode",{parentName:"p"},"arg1"),": T): function"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L33"}),"urx/src/utils.ts:33"))),Object(n.b)("p",null,"Takes a 2 argument function and partially applies the first argument."),Object(n.b)("h4",{id:"type-parameters-3"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"K"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"R"))))),Object(n.b)("h4",{id:"parameters-4"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"proc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg1: T,arg2: K) => R")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arg1")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," function"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"joinproc"},"joinProc"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"joinProc"),"(...",Object(n.b)("inlineCode",{parentName:"p"},"procs"),": Proc[]): (Anonymous function)"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L85"}),"urx/src/utils.ts:85"))),Object(n.b)("p",null,"returns a function which calls all passed functions in the passed order.\njoinProc does not pass arguments or collect return values."),Object(n.b)("h4",{id:"parameters-5"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"...procs")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Proc[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," (Anonymous function)"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"prop"},"prop"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"prop"),"(",Object(n.b)("inlineCode",{parentName:"p"},"property"),": string): (Anonymous function)"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L47"}),"urx/src/utils.ts:47"))),Object(n.b)("p",null,"Returns a function which extracts the property from from the passed object."),Object(n.b)("h4",{id:"parameters-6"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"property")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," (Anonymous function)"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tap"},"tap"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"tap"),"<","T>(",Object(n.b)("inlineCode",{parentName:"p"},"arg"),": T, ",Object(n.b)("inlineCode",{parentName:"p"},"proc"),": (arg: T) => any): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L54"}),"urx/src/utils.ts:54"))),Object(n.b)("p",null,"Calls callback with the first argument, and returns it."),Object(n.b)("h4",{id:"type-parameters-4"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T"))))),Object(n.b)("h4",{id:"parameters-7"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arg")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"proc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg: T) => any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"thrush"},"thrush"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"thrush"),"<","I, K>(",Object(n.b)("inlineCode",{parentName:"p"},"arg"),": I, ",Object(n.b)("inlineCode",{parentName:"p"},"proc"),": (arg: I) => K): K"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L26"}),"urx/src/utils.ts:26"))),Object(n.b)("p",null,"Takes a value and applies a function to it."),Object(n.b)("h4",{id:"type-parameters-5"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"I"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"K"))))),Object(n.b)("h4",{id:"parameters-8"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"arg")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"I")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"proc")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"(arg: I) => K")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," K"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"tup"},"tup"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"tup"),"<","T>(...",Object(n.b)("inlineCode",{parentName:"p"},"args"),": T): T"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(b.a)({parentName:"em"},{href:"https://github.com/virtuoso-dev/urx/blob/16ca3b2/packages/urx/src/utils.ts#L63"}),"urx/src/utils.ts:63"))),Object(n.b)("p",null," Utility function to help typescript figure out that what we pass is a tuple and not a generic array.\nTaken from (this StackOverflow tread)","[https://stackoverflow.com/questions/49729550/implicitly-create-a-tuple-in-typescript/52445008#52445008]"),Object(n.b)("h4",{id:"type-parameters-6"},"Type parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"T")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Array","<","any>")))),Object(n.b)("h4",{id:"parameters-9"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"...args")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"T")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," T"))}u.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),O=u(a),o=b,m=O["".concat(c,".").concat(o)]||O[o]||j[o]||n;return a?r.a.createElement(m,l(l({ref:t},i),{},{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=o;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);