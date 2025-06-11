import { Button } from "@/components/ui/Button/button";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";
const meta: Meta<typeof Dialog> = {
	title: "Components/ui/Dialog",
	component: Dialog,
	subcomponents: { Button: Button as React.ComponentType<any> },
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		open: {
			control: "boolean",
			description: "Open the dialog",
		},
	},
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
	render: (args) => {
		return (
			<Dialog {...args}>
				<DialogTrigger asChild>
					<Button variant="outline">Open Dialog</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>My Dialog Title</DialogTitle>
					<p>This is the content of the dialog.</p>
				</DialogContent>
			</Dialog>
		);
	},
};
