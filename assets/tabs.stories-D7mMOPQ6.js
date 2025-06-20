import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as I}from"./button-CTlKfA5h.js";import{I as b}from"./input-CRrinzjT.js";import{C as _,a as F,b as A,c as L,e as P,f as D}from"./card-BZoLnFMY.js";import{L as v}from"./label-DNskh3eN.js";import{r as m}from"./iframe-BQNo2YGR.js";import{u as J,c as Q,a as T}from"./index-edAiyJvz.js";import{c as V,R as W,I as X}from"./index-D4I_O5IR.js";import{P as Y}from"./index-DRprarYK.js";import{P as x}from"./index-u7_osF02.js";import{u as Z}from"./index-BIoIjI_W.js";import{u as ee}from"./index-BJODelN3.js";import{c as h}from"./utils-bRKmu4jq.js";import"./index-DnSux5Rs.js";import"./index-B50IG0Pn.js";import"./index-B1ZjdfU3.js";import"./index-0s_swjKB.js";var C="Tabs",[ae,Ne]=Q(C,[V]),E=V(),[te,N]=ae(C),M=m.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,onValueChange:o,defaultValue:c,orientation:s="horizontal",dir:l,activationMode:p="automatic",...g}=a,i=Z(l),[n,u]=J({prop:r,onChange:o,defaultProp:c??"",caller:C});return e.jsx(te,{scope:d,baseId:ee(),value:n,onValueChange:u,orientation:s,dir:i,activationMode:p,children:e.jsx(x.div,{dir:i,"data-orientation":s,...g,ref:t})})});M.displayName=C;var B="TabsList",$=m.forwardRef((a,t)=>{const{__scopeTabs:d,loop:r=!0,...o}=a,c=N(B,d),s=E(d);return e.jsx(W,{asChild:!0,...s,orientation:c.orientation,dir:c.dir,loop:r,children:e.jsx(x.div,{role:"tablist","aria-orientation":c.orientation,...o,ref:t})})});$.displayName=B;var G="TabsTrigger",H=m.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,disabled:o=!1,...c}=a,s=N(G,d),l=E(d),p=U(s.baseId,r),g=O(s.baseId,r),i=r===s.value;return e.jsx(X,{asChild:!0,...l,focusable:!o,active:i,children:e.jsx(x.button,{type:"button",role:"tab","aria-selected":i,"aria-controls":g,"data-state":i?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...c,ref:t,onMouseDown:T(a.onMouseDown,n=>{!o&&n.button===0&&n.ctrlKey===!1?s.onValueChange(r):n.preventDefault()}),onKeyDown:T(a.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&s.onValueChange(r)}),onFocus:T(a.onFocus,()=>{const n=s.activationMode!=="manual";!i&&!o&&n&&s.onValueChange(r)})})})});H.displayName=G;var z="TabsContent",K=m.forwardRef((a,t)=>{const{__scopeTabs:d,value:r,forceMount:o,children:c,...s}=a,l=N(z,d),p=U(l.baseId,r),g=O(l.baseId,r),i=r===l.value,n=m.useRef(i);return m.useEffect(()=>{const u=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(u)},[]),e.jsx(Y,{present:o||i,children:({present:u})=>e.jsx(x.div,{"data-state":i?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":p,hidden:!u,id:g,tabIndex:0,...s,ref:t,style:{...a.style,animationDuration:n.current?"0s":void 0},children:u&&c})})});K.displayName=z;function U(a,t){return`${a}-trigger-${t}`}function O(a,t){return`${a}-content-${t}`}var re=M,se=$,ne=H,oe=K;function y({className:a,...t}){return e.jsx(re,{"data-slot":"tabs",className:h("flex flex-col gap-2",a),...t})}function q({className:a,...t}){return e.jsx(se,{"data-slot":"tabs-list",className:h("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",a),...t})}function j({className:a,...t}){return e.jsx(ne,{"data-slot":"tabs-trigger",className:h("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...t})}function w({className:a,...t}){return e.jsx(oe,{"data-slot":"tabs-content",className:h("flex-1 outline-none",a),...t})}y.__docgenInfo={description:"",methods:[],displayName:"Tabs"};q.__docgenInfo={description:"",methods:[],displayName:"TabsList"};j.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};w.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const ye={title:"Components/UI/Tabs",component:y,tags:["autodocs"],parameters:{layout:"centered"}},f={render:a=>e.jsx("div",{className:"flex w-full min-w-sm flex-col gap-6",children:e.jsxs(y,{defaultValue:"account",...a,children:[e.jsxs(q,{children:[e.jsx(j,{value:"account",children:"Account"}),e.jsx(j,{value:"password",children:"Password"})]}),e.jsx(w,{value:"account",children:e.jsxs(_,{children:[e.jsxs(F,{children:[e.jsx(A,{children:"Account"}),e.jsx(L,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(P,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(v,{htmlFor:"tabs-demo-name",children:"Name"}),e.jsx(b,{id:"tabs-demo-name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(v,{htmlFor:"tabs-demo-username",children:"Username"}),e.jsx(b,{id:"tabs-demo-username",defaultValue:"@peduarte"})]})]}),e.jsx(D,{children:e.jsx(I,{children:"Save changes"})})]})}),e.jsx(w,{value:"password",children:e.jsxs(_,{children:[e.jsxs(F,{children:[e.jsx(A,{children:"Password"}),e.jsx(L,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(P,{className:"grid gap-6",children:[e.jsxs("div",{className:"grid gap-3",children:[e.jsx(v,{htmlFor:"tabs-demo-current",children:"Current password"}),e.jsx(b,{id:"tabs-demo-current",type:"password"})]}),e.jsxs("div",{className:"grid gap-3",children:[e.jsx(v,{htmlFor:"tabs-demo-new",children:"New password"}),e.jsx(b,{id:"tabs-demo-new",type:"password"})]})]}),e.jsx(D,{children:e.jsx(I,{children:"Save password"})})]})})]})})};var S,R,k;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    return <div className="flex w-full min-w-sm flex-col gap-6">
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
}`,...(k=(R=f.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const Ie=["Default"];export{f as Default,Ie as __namedExportsOrder,ye as default};
