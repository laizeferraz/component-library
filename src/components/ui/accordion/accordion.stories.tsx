import type { Meta, StoryObj } from "@storybook/react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
	title: "Components/ui/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
	argTypes: {
		type: {
			control: { type: "select" },
			options: ["single", "multiple"],
			description:
				"Set the type prop to multiple to enable opening multiple items at once or single to allow only one item to be open at a time.",
		},
		collapsible: {
			control: { type: "boolean" },
			description: "Use the collapsible prop to allow all items to close",
		},
		defaultValue: {
			control: { type: "text" },
			description:
				"Set the defaultValue prop to the value of the item you want to be open by default",
		},
		className: {
			control: { type: "text" },
			description: "Additional CSS classes for styling",
		},
	},
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
	render: (args) => {
		return (
			<div className="w-full max-w-md">
				<Accordion {...args}>
					<AccordionItem value="item-1">
						<AccordionTrigger>Product Information</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								Our flagship product combines cutting-edge technology with sleek
								design. Built with premium materials, it offers unparalleled
								performance and reliability.
							</p>
							<p>
								Key features include advanced processing capabilities, and an
								intuitive user interface designed for both beginners and
								experts.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Shipping Details</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								We offer worldwide shipping through trusted courier partners.
								Standard delivery takes 3-5 business days, while express
								shipping ensures delivery within 1-2 business days.
							</p>
							<p>
								All orders are carefully packaged and fully insured. Track your
								shipment in real-time through our dedicated tracking portal.
							</p>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Return Policy</AccordionTrigger>
						<AccordionContent className="flex flex-col gap-4 text-balance">
							<p>
								We stand behind our products with a comprehensive 30-day return
								policy. If you&apos;re not completely satisfied, simply return
								the item in its original condition.
							</p>
							<p>
								Our hassle-free return process includes free return shipping and
								full refunds processed within 48 hours of receiving the returned
								item.
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		);
	},
	args: {
		type: "single",
		defaultValue: "item-1",
		className: "w-full min-w-md",
		collapsible: true,
	},
};
