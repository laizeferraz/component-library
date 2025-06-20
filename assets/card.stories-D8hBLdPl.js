import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as i,a as m,b as c,c as p,d as u,e as x,f}from"./card-BZoLnFMY.js";import{B as a}from"./button-CTlKfA5h.js";import{I as n}from"./input-CRrinzjT.js";import{L as o}from"./label-DNskh3eN.js";import"./iframe-BQNo2YGR.js";import"./utils-bRKmu4jq.js";import"./index-DnSux5Rs.js";import"./index-u7_osF02.js";import"./index-B1ZjdfU3.js";import"./index-0s_swjKB.js";const B={title:"Components/ui/Card",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text"}}},r={render:d=>e.jsxs(i,{...d,className:"w-full min-w-sm",children:[e.jsxs(m,{children:[e.jsx(c,{children:"Login to your account"}),e.jsx(p,{children:"Enter your email below to login to your account"}),e.jsx(u,{children:e.jsx(a,{variant:"link",children:"Sign Up"})})]}),e.jsx(x,{children:e.jsx("form",{children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(o,{htmlFor:"email",children:"Email"}),e.jsx(n,{id:"email",type:"email",placeholder:"m@example.com",required:!0})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(o,{htmlFor:"password",children:"Password"}),e.jsx("a",{href:"#",className:"ml-auto inline-block text-sm underline-offset-4 hover:underline",children:"Forgot your password?"})]}),e.jsx(n,{id:"password",type:"password",required:!0})]})]})})}),e.jsxs(f,{className:"flex-col gap-2",children:[e.jsx(a,{type:"submit",className:"w-full",children:"Login"}),e.jsx(a,{variant:"outline",className:"w-full",children:"Login with Google"})]})]})};var s,t,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    return <Card {...args} className="w-full min-w-sm">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" required />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </Card>;
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const E=["Default"];export{r as Default,E as __namedExportsOrder,B as default};
