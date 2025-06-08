import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{S as M}from"./index-Czj7yb73.js";import{a as Y,c as $}from"./utils-bRKmu4jq.js";import"./iframe-Do89BJTK.js";const y=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,x=Y,H=(s,a)=>e=>{var c;if((a==null?void 0:a.variants)==null)return x(s,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:d,defaultVariants:t}=a,P=Object.keys(d).map(n=>{const o=e==null?void 0:e[n],l=t==null?void 0:t[n];if(o===null)return null;const i=y(o)||y(l);return d[n][i]}),p=e&&Object.entries(e).reduce((n,o)=>{let[l,i]=o;return i===void 0||(n[l]=i),n},{}),U=a==null||(c=a.compoundVariants)===null||c===void 0?void 0:c.reduce((n,o)=>{let{class:l,className:i,...W}=o;return Object.entries(W).every(q=>{let[k,f]=q;return Array.isArray(f)?f.includes({...t,...p}[k]):{...t,...p}[k]===f})?[...n,l,i]:n},[]);return x(s,P,U,e==null?void 0:e.class,e==null?void 0:e.className)},J=H("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function K({className:s,variant:a,size:e,asChild:c=!1,...d}){const t=c?M:"button";return F.jsx(t,{"data-slot":"button",className:$(J({variant:a,size:e,className:s})),...d})}K.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,ne={title:"Components/ui/Button",component:K,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",description:"The variant of the button",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",description:"The size of the button",options:["default","sm","lg","icon"]},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Function to call when the button is clicked"},children:{control:"text",description:"Content of the button"},className:{control:"text",description:"Additional Tailwind CSS classes for styling the outer container. Internal styles like background color or spacing are not affected by this."},asChild:{control:"boolean",description:"Render as a child component (Slot)"}}},u={args:{variant:"default",size:"sm",disabled:!1,onClick:r("clicked"),children:"Default button",className:"shadow-lg"}},m={args:{variant:"destructive",size:"sm",disabled:!1,onClick:r("clicked"),children:"Destructive button",className:"shadow-lg"}},v={args:{variant:"outline",size:"sm",disabled:!1,onClick:r("clicked"),children:"Outline button",className:"shadow-lg"}},g={args:{variant:"secondary",size:"sm",disabled:!1,onClick:r("clicked"),children:"Secondary button",className:"shadow-lg"}},h={args:{variant:"ghost",size:"sm",disabled:!1,onClick:r("clicked"),children:"Ghost button",className:"shadow-lg"}},b={args:{variant:"link",size:"sm",disabled:!1,onClick:r("clicked"),children:"Link button",className:"shadow-lg"}};var C,N,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Default button",
    className: "shadow-lg"
  }
}`,...(w=(N=u.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var z,S,_;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Destructive button",
    className: "shadow-lg"
  }
}`,...(_=(S=m.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var O,V,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Outline button",
    className: "shadow-lg"
  }
}`,...(D=(V=v.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var T,j,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Secondary button",
    className: "shadow-lg"
  }
}`,...(L=(j=g.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var A,B,G;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Ghost button",
    className: "shadow-lg"
  }
}`,...(G=(B=h.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var E,I,R;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Link button",
    className: "shadow-lg"
  }
}`,...(R=(I=b.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const se=["Default","Destructive","Outline","Secondary","Ghost","Link"];export{u as Default,m as Destructive,h as Ghost,b as Link,v as Outline,g as Secondary,se as __namedExportsOrder,ne as default};
