import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "./card";

import "@testing-library/jest-dom/vitest";

describe("Card", () => {
	it("renders a div with data-slot='card'", () => {
		const { getByTestId } = render(<Card data-testid="card">Content</Card>);
		const card = getByTestId("card");
		expect(card).toBeInTheDocument();
		expect(card).toHaveAttribute("data-slot", "card");
	});

	it("applies default classes", () => {
		const { getByTestId } = render(<Card data-testid="card">Content</Card>);
		const card = getByTestId("card");
		expect(card.className).toContain("bg-card");
		expect(card.className).toContain("text-card-foreground");
		expect(card.className).toContain("flex");
		expect(card.className).toContain("flex-col");
		expect(card.className).toContain("gap-6");
		expect(card.className).toContain("rounded-xl");
		expect(card.className).toContain("border");
		expect(card.className).toContain("py-6");
		expect(card.className).toContain("shadow-sm");
	});

	it("merges custom className with default classes", () => {
		const { getByTestId } = render(
			<Card className="custom-class" data-testid="card">
				Content
			</Card>,
		);
		const card = getByTestId("card");
		expect(card.className).toContain("custom-class");
		expect(card.className).toContain("bg-card");
	});

	it("spreads additional props onto the div", () => {
		const { getByTestId } = render(
			<Card id="test-id" aria-label="card" data-testid="card">
				Content
			</Card>,
		);
		const card = getByTestId("card");
		expect(card).toHaveAttribute("id", "test-id");
		expect(card).toHaveAttribute("aria-label", "card");
	});

	it("renders children", () => {
		const { getByText } = render(<Card>Card Content</Card>);
		expect(getByText("Card Content")).toBeInTheDocument();
	});
});
