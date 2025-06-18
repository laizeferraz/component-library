import type { Meta, StoryObj } from "@storybook/react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { Label } from "../label/label";

const meta: Meta<typeof Card> = {
	title: "Components/ui/Card",
	component: Card,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		children: { control: "text" },
	},
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: (args) => {
		return (
			<Card {...args} className="w-full min-w-sm">
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
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
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
			</Card>
		);
	},
};
