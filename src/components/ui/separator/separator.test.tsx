import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./separator";

import "@testing-library/jest-dom/vitest";

describe("Separator", () => {
	it("renders with default props", () => {
		const { container } = render(<Separator />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toBeInTheDocument();
		expect(separator).toHaveAttribute("data-orientation", "horizontal");
		// expect(separator).toHaveAttribute("aria-hidden", "true"); //Check this later: TODO
	});

	it("renders with vertical orientation", () => {
		const { container } = render(<Separator orientation="vertical" />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("data-orientation", "vertical");
	});

	it("renders as non-decorative", () => {
		const { container } = render(<Separator decorative={false} />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).not.toHaveAttribute("aria-hidden");
	});

	it("applies custom className", () => {
		const { container } = render(<Separator className="custom-class" />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveClass("custom-class");
	});

	it("passes additional props", () => {
		const { container } = render(<Separator data-test="test-prop" />);
		const separator = container.querySelector("[data-slot='separator']");
		expect(separator).toHaveAttribute("data-test", "test-prop");
	});
});
