import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./iframe-Cm3ozQoN.js";import{P as b}from"./index-BRW0ZVdA.js";import{c as I}from"./utils-bRKmu4jq.js";import"./index-DlmXgUku.js";import"./index-BA3v1MVt.js";import"./index-DIVMUEH9.js";var P="Separator",d="horizontal",R=["horizontal","vertical"],j=z.forwardRef((r,i)=>{const{decorative:c,orientation:t=d,...y}=r,l=A(t)?t:d,S=c?{role:"none"}:{"aria-orientation":l==="vertical"?l:void 0,role:"separator"};return e.jsx(b.div,{"data-orientation":l,...S,...y,ref:i})});j.displayName=P;function A(r){return R.includes(r)}var O=j;function a({className:r,orientation:i="horizontal",decorative:c=!0,...t}){return e.jsx(O,{"data-slot":"separator",decorative:c,orientation:i,className:I("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",r),...t})}a.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const F={title:"Components/ui/Separator",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},decorative:{control:{type:"boolean"}},className:{control:{type:"text"}}}},o={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm leading-none font-medium",children:"Radix Primitives"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"An open-source UI component library."})]}),e.jsx(a,{...r,className:"my-4"})]}),args:{orientation:"horizontal",decorative:!0,className:""}},n={render:r=>e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Blog"}),e.jsx(a,{...r,orientation:"vertical"}),e.jsx("div",{children:"Docs"}),e.jsx(a,{...r,orientation:"vertical"}),e.jsx("div",{children:"Source"})]}),args:{orientation:"vertical",decorative:!0,className:""}},s={render:r=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm leading-none font-medium",children:"Radix Primitives"}),e.jsx("p",{className:"text-muted-foreground text-sm",children:"An open-source UI component library."})]}),e.jsx(a,{...r})]}),args:{orientation:"horizontal",decorative:!0,className:"my-4 bg-indigo-500"}};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <>
            <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
                <p className="text-muted-foreground text-sm">
                    An open-source UI component library.
                </p>
            </div>
            <Separator {...args} className="my-4" />
        </>,
  args: {
    orientation: "horizontal",
    decorative: true,
    className: ""
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,x,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator {...args} orientation="vertical" />
            <div>Docs</div>
            <Separator {...args} orientation="vertical" />
            <div>Source</div>
        </div>,
  args: {
    orientation: "vertical",
    decorative: true,
    className: ""
  }
}`,...(g=(x=n.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,N;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
            <div className="space-y-1">
                <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
                <p className="text-muted-foreground text-sm">
                    An open-source UI component library.
                </p>
            </div>
            <Separator {...args} />
        </>,
  args: {
    orientation: "horizontal",
    decorative: true,
    className: "my-4 bg-indigo-500"
  }
}`,...(N=(f=s.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const q=["Default","Vertical","CustomClass"];export{s as CustomClass,o as Default,n as Vertical,q as __namedExportsOrder,F as default};
