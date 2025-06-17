import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../checkbox/checkbox";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
	title: "Components/ui/Label",
	component: Label,
	tags: ["autodocs"],
	argTypes: {
		children: { control: "text" },
	},
};
export default meta;
type Story = StoryObj<typeof Label>;
export const Default: Story = {
	render: (args) => {
		return (
			<Label {...args}>
				<Checkbox id="checkbox" />
				<span>Label Text</span>
			</Label>
		);
	},
};
