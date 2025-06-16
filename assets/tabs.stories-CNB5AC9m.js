import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as P}from"./button-C9IgA5PC.js";import{I as v}from"./input-mOPHcNc4.js";import{r as m}from"./iframe-Bi11K4ht.js";import{c}from"./utils-bRKmu4jq.js";import{P as x,u as Q,c as W,a as T}from"./index-D4cFy7lU.js";import{c as k,R as X,I as Y}from"./index-DatCH81j.js";import{P as Z}from"./index-KMGd-UNA.js";import{u as ee}from"./index-E7iVrHvn.js";import{u as ae}from"./index-BjVVpof2.js";import"./index-vYnlUFu-.js";import"./index-BHGhgG72.js";import"./index-Dz3dJsBQ.js";function j({className:a,...t}){return e.jsx("div",{"data-slot":"card",className:c("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...t})}function w({className:a,...t}){return e.jsx("div",{"data-slot":"card-header",className:c("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...t})}function N({className:a,...t}){return e.jsx("div",{"data-slot":"card-title",className:c("leading-none font-semibold",a),...t})}function y({className:a,...t}){return e.jsx("div",{"data-slot":"card-description",className:c("text-muted-foreground text-sm",a),...t})}function _({className:a,...t}){return e.jsx("div",{"data-slot":"card-content",className:c("px-6",a),...t})}function I({className:a,...t}){return e.jsx("div",{"data-slot":"card-footer",className:c("flex items-center px-6 [.border-t]:pt-6",a),...t})}j.__docgenInfo={description:"",methods:[],displayName:"Card"};w.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};I.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};N.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};y.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};_.__docgenInfo={description:"",methods:[],displayName:"CardContent"};var te="Label",E=m.forwardRef((a,t)=>e.jsx(x.label,{...a,ref:t,onMouseDown:r=>{var s;r.target.closest("button, input, select, textarea")||((s=a.onMouseDown)==null||s.call(a,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));E.displayName=te;var re=E;function f({className:a,...t}){return e.jsx(re,{"data-slot":"label",className:c("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",a),...t})}f.__docgenInfo={description:"",methods:[],displayName:"Label"};var C="Tabs",[ne,we]=W(C,[k]),V=k(),[se,L]=ne(C),$=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,onValueChange:s,defaultValue:l,orientation:o="horizontal",dir:u,activationMode:g="automatic",...b}=a,i=ee(u),[d,p]=Q({prop:n,onChange:s,defaultProp:l??"",caller:C});return e.jsx(se,{scope:r,baseId:ae(),value:d,onValueChange:p,orientation:o,dir:i,activationMode:g,children:e.jsx(x.div,{dir:i,"data-orientation":o,...b,ref:t})})});$.displayName=C;var B="TabsList",H=m.forwardRef((a,t)=>{const{__scopeTabs:r,loop:n=!0,...s}=a,l=L(B,r),o=V(r);return e.jsx(X,{asChild:!0,...o,orientation:l.orientation,dir:l.dir,loop:n,children:e.jsx(x.div,{role:"tablist","aria-orientation":l.orientation,...s,ref:t})})});H.displayName=B;var G="TabsTrigger",z=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,disabled:s=!1,...l}=a,o=L(G,r),u=V(r),g=O(o.baseId,n),b=q(o.baseId,n),i=n===o.value;return e.jsx(Y,{asChild:!0,...u,focusable:!s,active:i,children:e.jsx(x.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":b,"data-state":i?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:g,...l,ref:t,onMouseDown:T(a.onMouseDown,d=>{!s&&d.button===0&&d.ctrlKey===!1?o.onValueChange(n):d.preventDefault()}),onKeyDown:T(a.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&o.onValueChange(n)}),onFocus:T(a.onFocus,()=>{const d=o.activationMode!=="manual";!i&&!s&&d&&o.onValueChange(n)})})})});z.displayName=G;var K="TabsContent",U=m.forwardRef((a,t)=>{const{__scopeTabs:r,value:n,forceMount:s,children:l,...o}=a,u=L(K,r),g=O(u.baseId,n),b=q(u.baseId,n),i=n===u.value,d=m.useRef(i);return m.useEffect(()=>{const p=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(p)},[]),e.jsx(Z,{present:s||i,children:({present:p})=>e.jsx(x.div,{"data-state":i?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":g,hidden:!p,id:b,tabIndex:0,...o,ref:t,style:{...a.style,animationDuration:d.current?"0s":void 0},children:p&&l})})});U.displayName=K;function O(a,t){return`${a}-trigger-${t}`}function q(a,t){return`${a}-content-${t}`}var oe=$,de=H,ie=z,ce=U;function A({className:a,...t}){return e.jsx(oe,{"data-slot":"tabs",className:c("flex flex-col gap-2",a),...t})}function J({className:a,...t}){return e.jsx(de,{"data-slot":"tabs-list",className:c("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...t})}function F({className:a,...t}){return e.jsx(ie,{"data-slot":"tabs-trigger",className:c("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...t})}function D({className:a,...t}){return e.jsx(ce,{"data-slot":"tabs-content",className:c("flex-1 outline-none",a),...t})}A.__docgenInfo={description:"",methods:[],displayName:"Tabs"};J.__docgenInfo={description:"",methods:[],displayName:"TabsList"};F.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};D.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Ne={title:"Components/UI/Tabs",component:A,tags:["autodocs"],parameters:{layout:"centered"}},h={render:a=>e.jsx("div",{className:"flex w-full max-w-sm flex-col gap-6",children:e.jsxs(A,{defaultValue:"account",...a,children:[e.jsxs(J,{children:[e.jsx(F,{value:"account",children:"Account"}),e.jsx(F,{value:"password",children:"Password"})]}),e.jsx(D,{value:"account",children:e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsx(N,{children:"Account"}),e.jsx(y,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(_,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(f,{htmlFor:"tabs-demo-name",children:"Name"}),e.jsx(v,{id:"tabs-demo-name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(f,{htmlFor:"tabs-demo-username",children:"Username"}),e.jsx(v,{id:"tabs-demo-username",defaultValue:"@peduarte"})]})]}),e.jsx(I,{children:e.jsx(P,{children:"Save changes"})})]})}),e.jsx(D,{value:"password",children:e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsx(N,{children:"Password"}),e.jsx(y,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(_,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(f,{htmlFor:"tabs-demo-current",children:"Current password"}),e.jsx(v,{id:"tabs-demo-current",type:"password"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(f,{htmlFor:"tabs-demo-new",children:"New password"}),e.jsx(v,{id:"tabs-demo-new",type:"password"})]})]}),e.jsx(I,{children:e.jsx(P,{children:"Save password"})})]})})]})})};var R,S,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex w-full max-w-sm flex-col gap-6">
                <Tabs defaultValue="account" {...args}>
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when you&apos;re
                                    done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-name">Name</Label>
                                    <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-username">Username</Label>
                                    <Input id="tabs-demo-username" defaultValue="@peduarte" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you&apos;ll be logged
                                    out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-current">Current password</Label>
                                    <Input id="tabs-demo-current" type="password" />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="tabs-demo-new">New password</Label>
                                    <Input id="tabs-demo-new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>;
  }
}`,...(M=(S=h.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};const ye=["Default"];export{h as Default,ye as __namedExportsOrder,Ne as default};
