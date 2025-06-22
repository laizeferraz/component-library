import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator";

const meta: Meta<typeof Separator> = {
	title: "Components/ui/Separator",
	component: Separator,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		orientation: {
			control: { type: "select" },
			options: ["horizontal", "vertical"],
		},
		decorative: {
			control: { type: "boolean" },
		},
		className: {
			control: { type: "text" },
		},
	},
};
export default meta;
type Story = StoryObj<typeof Separator>;
export const Default: Story = {
	render: (args) => (
		<>
			<div className="space-y-1">
				<h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
				<p className="text-muted-foreground text-sm">
					An open-source UI component library.
				</p>
			</div>
			<Separator {...args} className="my-4" />
		</>
	),
	args: {
		orientation: "horizontal",
		decorative: true,
		className: "",
	},
};
export const Vertical: Story = {
	render: (args) => (
		<div className="flex h-5 items-center space-x-4 text-sm">
			<div>Blog</div>
			<Separator {...args} orientation="vertical" />
			<div>Docs</div>
			<Separator {...args} orientation="vertical" />
			<div>Source</div>
		</div>
	),
	args: {
		orientation: "vertical",
		decorative: true,
		className: "",
	},
};

export const CustomClass: Story = {
	render: (args) => (
		<>
			<div className="space-y-1">
				<h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
				<p className="text-muted-foreground text-sm">
					An open-source UI component library.
				</p>
			</div>
			<Separator {...args} />
		</>
	),
	args: {
		orientation: "horizontal",
		decorative: true,
		className: "my-4 bg-indigo-500",
	},
};
