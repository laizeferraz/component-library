import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../card/card";
import { Label } from "../label/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

const meta: Meta<typeof Tabs> = {
	title: "Components/UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: (args) => {
		return (
			<div className="flex w-full max-w-sm flex-col gap-6">
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
			</div>
		);
	},
};
