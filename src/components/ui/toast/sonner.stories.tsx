import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Button } from "../Button/button";
import { Toaster } from "./sonner";

const meta: Meta<typeof Toaster> = {
	title: "Components/ui/Toaster",
	component: Toaster,
	parameters: {
		layout: "fullscreen",
	},
};
export default meta;
type Story = StoryObj<typeof Toaster>;
export const Default: Story = {
	args: {
		position: "top-right",
		richColors: true,
		closeButton: true,
	},
	render: (args) => (
		<div className="flex flex-col items-center justify-center h-screen">
			<Toaster {...args} />
			<Button
				className="btn"
				onClick={() => {
					// Trigger a toast notification for demonstration purposes
					toast("Event has been created", {
						description: "Sunday, December 03, 2023 at 9:00 AM",
						action: {
							label: "Undo",
							onClick: () => console.log("Undo"),
						},
					});
				}}
			>
				Show Toast
			</Button>
		</div>
	),
};
