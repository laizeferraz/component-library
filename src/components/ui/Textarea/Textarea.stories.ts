import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
	title: "Components/ui/Textarea",
	component: Textarea,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Whether the textarea is disabled",
		},
		onChange: {
			action: "changed",
			description: "Function to call when the textarea value changes",
		},
		value: {
			control: "text",
			description: "Value of the textarea",
		},
		className: {
			control: "text",
			description: "Additional Tailwind CSS classes for styling",
		},
	},
};
export default meta;

type Story = StoryObj<typeof Textarea>;
export const Default: Story = {
	args: {
		disabled: false,
		value: "",
		className: "border-purple-500",
		placeholder: "Type your message here...",
	},
};
