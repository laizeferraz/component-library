import { Button } from "@/components/ui/Button/button";
import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
const meta: Meta<typeof Tooltip> = {
	title: "Components/ui/Tooltip",
	component: Tooltip,
	subcomponents: { Button: Button as React.ComponentType<any> },
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		delayDuration: {
			control: "number",
			description: "Delay before the tooltip appears in milliseconds",
		},
		open: {
			control: "boolean",
			description: "Open the tooltip",
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: (args) => {
		return (
			<Tooltip {...args}>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover me</Button>
				</TooltipTrigger>
				<TooltipContent sideOffset={5}>This is a tooltip</TooltipContent>
			</Tooltip>
		);
	},
};
