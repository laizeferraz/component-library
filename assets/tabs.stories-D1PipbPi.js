import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as D}from"./button-D5HxiAm4.js";import{I as f}from"./input-BsDiV6-p.js";import{r as p}from"./iframe-BKeR4iXb.js";import{c as i}from"./utils-bRKmu4jq.js";import{L as x}from"./label-J4IRE8dB.js";import{u as J,c as Q,P as h,a as T}from"./index-Dr-K-JK6.js";import{c as V,R as W,I as X}from"./index-DNVZFDX7.js";import{P as Y}from"./index-BCa8wbHl.js";import{u as Z}from"./index-rWQ7JLWf.js";import{u as ee}from"./index-DVOhWQhm.js";import"./index-CNUSPDEb.js";import"./index-rpYc1FoL.js";import"./index-D0pofOnn.js";function j({className:a,...t}){return e.jsx("div",{"data-slot":"card",className:i("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...t})}function w({className:a,...t}){return e.jsx("div",{"data-slot":"card-header",className:i("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",a),...t})}function N({className:a,...t}){return e.jsx("div",{"data-slot":"card-title",className:i("leading-none font-semibold",a),...t})}function y({className:a,...t}){return e.jsx("div",{"data-slot":"card-description",className:i("text-muted-foreground text-sm",a),...t})}function _({className:a,...t}){return e.jsx("div",{"data-slot":"card-content",className:i("px-6",a),...t})}function I({className:a,...t}){return e.jsx("div",{"data-slot":"card-footer",className:i("flex items-center px-6 [.border-t]:pt-6",a),...t})}j.__docgenInfo={description:"",methods:[],displayName:"Card"};w.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};I.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};N.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};y.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};_.__docgenInfo={description:"",methods:[],displayName:"CardContent"};var C="Tabs",[ae,Te]=Q(C,[V]),E=V(),[te,L]=ae(C),M=p.forwardRef((a,t)=>{const{__scopeTabs:c,value:r,onValueChange:o,defaultValue:l,orientation:s="horizontal",dir:u,activationMode:g="automatic",...b}=a,d=Z(u),[n,m]=J({prop:r,onChange:o,defaultProp:l??"",caller:C});return e.jsx(te,{scope:c,baseId:ee(),value:n,onValueChange:m,orientation:s,dir:d,activationMode:g,children:e.jsx(h.div,{dir:d,"data-orientation":s,...b,ref:t})})});M.displayName=C;var B="TabsList",$=p.forwardRef((a,t)=>{const{__scopeTabs:c,loop:r=!0,...o}=a,l=L(B,c),s=E(c);return e.jsx(W,{asChild:!0,...s,orientation:l.orientation,dir:l.dir,loop:r,children:e.jsx(h.div,{role:"tablist","aria-orientation":l.orientation,...o,ref:t})})});$.displayName=B;var H="TabsTrigger",G=p.forwardRef((a,t)=>{const{__scopeTabs:c,value:r,disabled:o=!1,...l}=a,s=L(H,c),u=E(c),g=U(s.baseId,r),b=O(s.baseId,r),d=r===s.value;return e.jsx(X,{asChild:!0,...u,focusable:!o,active:d,children:e.jsx(h.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":b,"data-state":d?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:g,...l,ref:t,onMouseDown:T(a.onMouseDown,n=>{!o&&n.button===0&&n.ctrlKey===!1?s.onValueChange(r):n.preventDefault()}),onKeyDown:T(a.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&s.onValueChange(r)}),onFocus:T(a.onFocus,()=>{const n=s.activationMode!=="manual";!d&&!o&&n&&s.onValueChange(r)})})})});G.displayName=H;var z="TabsContent",K=p.forwardRef((a,t)=>{const{__scopeTabs:c,value:r,forceMount:o,children:l,...s}=a,u=L(z,c),g=U(u.baseId,r),b=O(u.baseId,r),d=r===u.value,n=p.useRef(d);return p.useEffect(()=>{const m=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(Y,{present:o||d,children:({present:m})=>e.jsx(h.div,{"data-state":d?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":g,hidden:!m,id:b,tabIndex:0,...s,ref:t,style:{...a.style,animationDuration:n.current?"0s":void 0},children:m&&l})})});K.displayName=z;function U(a,t){return`${a}-trigger-${t}`}function O(a,t){return`${a}-content-${t}`}var re=M,se=$,ne=G,oe=K;function P({className:a,...t}){return e.jsx(re,{"data-slot":"tabs",className:i("flex flex-col gap-2",a),...t})}function q({className:a,...t}){return e.jsx(se,{"data-slot":"tabs-list",className:i("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...t})}function F({className:a,...t}){return e.jsx(ne,{"data-slot":"tabs-trigger",className:i("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...t})}function A({className:a,...t}){return e.jsx(oe,{"data-slot":"tabs-content",className:i("flex-1 outline-none",a),...t})}P.__docgenInfo={description:"",methods:[],displayName:"Tabs"};q.__docgenInfo={description:"",methods:[],displayName:"TabsList"};F.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};A.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const je={title:"Components/UI/Tabs",component:P,tags:["autodocs"],parameters:{layout:"centered"}},v={render:a=>e.jsx("div",{className:"flex w-full max-w-sm flex-col gap-6",children:e.jsxs(P,{defaultValue:"account",...a,children:[e.jsxs(q,{children:[e.jsx(F,{value:"account",children:"Account"}),e.jsx(F,{value:"password",children:"Password"})]}),e.jsx(A,{value:"account",children:e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsx(N,{children:"Account"}),e.jsx(y,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(_,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(x,{htmlFor:"tabs-demo-name",children:"Name"}),e.jsx(f,{id:"tabs-demo-name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(x,{htmlFor:"tabs-demo-username",children:"Username"}),e.jsx(f,{id:"tabs-demo-username",defaultValue:"@peduarte"})]})]}),e.jsx(I,{children:e.jsx(D,{children:"Save changes"})})]})}),e.jsx(A,{value:"password",children:e.jsxs(j,{children:[e.jsxs(w,{children:[e.jsx(N,{children:"Password"}),e.jsx(y,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(_,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(x,{htmlFor:"tabs-demo-current",children:"Current password"}),e.jsx(f,{id:"tabs-demo-current",type:"password"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(x,{htmlFor:"tabs-demo-new",children:"New password"}),e.jsx(f,{id:"tabs-demo-new",type:"password"})]})]}),e.jsx(I,{children:e.jsx(D,{children:"Save password"})})]})})]})})};var S,R,k;v.parameters={...v.parameters,docs:{...(S=v.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(R=v.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const we=["Default"];export{v as Default,we as __namedExportsOrder,je as default};
