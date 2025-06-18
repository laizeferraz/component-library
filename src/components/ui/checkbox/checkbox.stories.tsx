import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "../label/label";
import { Checkbox } from "./checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Components/ui/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	render: (args) => {
		return (
			<div className="flex items-center space-x-2">
				<Checkbox id="terms" {...args} />
				<Label htmlFor="terms">Accept terms and conditions</Label>
			</div>
		);
	},
};
