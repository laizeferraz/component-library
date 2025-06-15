import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Accordion, AccordionItem } from "./accordion";

import "@testing-library/jest-dom/vitest";

describe("AccordionItem", () => {
	it("renders with default classes and data-slot", () => {
		const { getByTestId } = render(
			<Accordion type="single">
				<AccordionItem data-testid="accordion-item" value="test-value" />
			</Accordion>,
		);
		const item = getByTestId("accordion-item");
		expect(item).toHaveClass("border-b");
		expect(item).toHaveAttribute("data-slot", "accordion-item");
	});

	it("applies custom className", () => {
		const { getByTestId } = render(
			<Accordion type="single">
				<AccordionItem
					data-testid="accordion-item"
					value="test-value"
					className="custom-class"
				/>
			</Accordion>,
		);
		const item = getByTestId("accordion-item");
		expect(item).toHaveClass("custom-class");
	});

	it("forwards additional props", () => {
		const { getByTestId } = render(
			<Accordion type="single">
				<AccordionItem
					data-testid="accordion-item"
					value="test-value"
					aria-label="test-label"
				/>
			</Accordion>,
		);
		const item = getByTestId("accordion-item");
		expect(item).toHaveAttribute("aria-label", "test-label");
	});

	it("renders children", () => {
		const { getByText } = render(
			<Accordion type="single">
				<AccordionItem value="test-value">Accordion Content</AccordionItem>
			</Accordion>,
		);
		expect(getByText("Accordion Content")).toBeInTheDocument();
	});
});
