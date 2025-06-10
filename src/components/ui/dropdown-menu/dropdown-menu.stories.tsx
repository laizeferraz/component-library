import { Button } from "@/components/ui/Button/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu";

const meta: Meta<typeof DropdownMenu> = {
	title: "Components/ui/DropdownMenu",
	component: DropdownMenu,
	subcomponents: { Button: Button as React.ComponentType<any> },
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		open: {
			control: "boolean",
			description: "Open the dropdown menu",
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<DropdownMenu {...args}>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open Menu</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem>New File</DropdownMenuItem>
						<DropdownMenuItem>Open File</DropdownMenuItem>
						<DropdownMenuItem>Save File</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Settings</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	},
};
