import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
	title: "Components/ui/Switch",
	component: Switch,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Whether the switch is disabled",
		},
		onCheckedChange: {
			action: "checked changed",
			description: "Function to call when the switch state changes",
		},
		className: {
			control: "text",
			description:
				"Additional Tailwind CSS classes to overwrite or extra styling. Internal styles like background color or spacing are not affected by this on Storybook.",
		},
		checked: {
			control: "boolean",
			description: "Whether the switch is checked",
		},
	},
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		disabled: false,
		className: "",
	},
};

export const Checked: Story = {
	args: {
		disabled: false,
		className: "",
		checked: true,
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		className: "",
		checked: false,
	},
};
