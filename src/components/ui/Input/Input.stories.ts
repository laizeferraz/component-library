import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
	title: "Components/ui/Input",
	component: Input,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: "select",
			description: "The type of the input",
			options: ["text", "email", "password", "number", "search"],
		},
		disabled: {
			control: "boolean",
			description: "Whether the input is disabled",
		},
		onChange: {
			action: "changed",
			description: "Function to call when the input value changes",
		},
		value: {
			control: "text",
			description: "Value of the input",
		},
		className: {
			control: "text",
			description:
				"Additional Tailwind CSS classes for styling the outer container. Internal styles like background color or spacing are not affected by this.",
		},
	},
};
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		type: "email",
		disabled: false,
		value: "",
		className: "",
		placeholder: "Email",
	},
};
