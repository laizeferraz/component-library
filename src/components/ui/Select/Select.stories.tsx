import type { Meta, StoryObj } from "@storybook/react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "./select";

const meta: Meta<typeof Select> = {
	title: "Components/ui/Select",
	component: Select,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Disable the Select",
		},
		open: {
			control: "boolean",
			description: "Open the Select dropdown",
		},
	},
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => {
		return (
			<Select {...args}>
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	},
	args: {
		disabled: false,
	},
};

export const Scrollable: Story = {
	render: (args) => {
		return (
			<Select {...args}>
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Vegetables</SelectLabel>
						<SelectItem value="broccoli">Broccoli</SelectItem>
						<SelectItem value="pumpkin">Pumpkin</SelectItem>
						<SelectItem value="cauliflower">Cauliflower</SelectItem>
						<SelectItem value="carrots">Carrots</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Leaves</SelectLabel>
						<SelectItem value="spinach">Spinach</SelectItem>
						<SelectItem value="cabage">Cabage</SelectItem>
						<SelectItem value="kale">Kale</SelectItem>
						<SelectItem value="lettuce">Lettuce</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	},
	args: {
		disabled: false,
	},
};

export const WithSeparator: Story = {
	render: (args) => {
		return (
			<Select {...args}>
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectSeparator />
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Vegetables</SelectLabel>
						<SelectItem value="broccoli">Broccoli</SelectItem>
						<SelectItem value="pumpkin">Pumpkin</SelectItem>
						<SelectItem value="cauliflower">Cauliflower</SelectItem>
						<SelectItem value="carrots">Carrots</SelectItem>
						<SelectSeparator />
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Leaves</SelectLabel>
						<SelectItem value="spinach">Spinach</SelectItem>
						<SelectItem value="cabage">Cabage</SelectItem>
						<SelectItem value="kale">Kale</SelectItem>
						<SelectItem value="lettuce">Lettuce</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	},
	args: {
		disabled: false,
	},
};
