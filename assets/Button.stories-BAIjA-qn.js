import{B as y}from"./button-CsVsdtRV.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-D5dNqmER.js";import"./iframe-MOAbemw7.js";import"./utils-bRKmu4jq.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,x={title:"Components/ui/Button",component:y,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{variant:{control:"select",description:"The variant of the button",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",description:"The size of the button",options:["default","sm","lg","icon"]},disabled:{control:"boolean",description:"Whether the button is disabled"},onClick:{action:"clicked",description:"Function to call when the button is clicked"},children:{control:"text",description:"Content of the button"},className:{control:"text",description:"Additional Tailwind CSS classes for styling the outer container. Internal styles like background color or spacing are not affected by this."},asChild:{control:"boolean",description:"Render as a child component (Slot)"}}},s={args:{variant:"default",size:"sm",disabled:!1,onClick:e("clicked"),children:"Default button",className:"shadow-lg"}},a={args:{variant:"destructive",size:"sm",disabled:!1,onClick:e("clicked"),children:"Destructive button",className:"shadow-lg"}},n={args:{variant:"outline",size:"sm",disabled:!1,onClick:e("clicked"),children:"Outline button",className:"shadow-lg"}},t={args:{variant:"secondary",size:"sm",disabled:!1,onClick:e("clicked"),children:"Secondary button",className:"shadow-lg"}},o={args:{variant:"ghost",size:"sm",disabled:!1,onClick:e("clicked"),children:"Ghost button",className:"shadow-lg"}},c={args:{variant:"link",size:"sm",disabled:!1,onClick:e("clicked"),children:"Link button",className:"shadow-lg"}};var r,i,l;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Default button",
    className: "shadow-lg"
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Destructive button",
    className: "shadow-lg"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,p,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Outline button",
    className: "shadow-lg"
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var k,b,f;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Secondary button",
    className: "shadow-lg"
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,C,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Ghost button",
    className: "shadow-lg"
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,z,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "sm",
    disabled: false,
    onClick: action("clicked"),
    children: "Link button",
    className: "shadow-lg"
  }
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const B=["Default","Destructive","Outline","Secondary","Ghost","Link"];export{s as Default,a as Destructive,o as Ghost,c as Link,n as Outline,t as Secondary,B as __namedExportsOrder,x as default};
