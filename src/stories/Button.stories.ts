import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		variant: {
			control: "select",
			description: "The variant of the button",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: "select",
			description: "The size of the button",
			options: ["default", "sm", "lg", "icon"],
		},
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled",
		},
		onClick: {
			action: "clicked",
			description: "Function to call when the button is clicked",
		},
		children: {
			control: "text",
			description: "Content of the button",
		},
		className: {
			control: "text",
			description: "Additional Tailwind CSS classes for styling",
		},
		asChild: {
			control: "boolean",
			description: "Render as a child component (Slot)",
		},
	},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: "default",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Default button",
		className: "shadow-lg",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Destructive button",
		className: "shadow-lg",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Outline button",
		className: "shadow-lg",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Secondary button",
		className: "shadow-lg",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Ghost button",
		className: "shadow-lg",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		size: "sm",
		disabled: false,
		onClick: action("clicked"),
		children: "Link button",
		className: "shadow-lg",
	},
};
