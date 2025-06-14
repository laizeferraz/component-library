import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs } from "./tabs";

import "@testing-library/jest-dom/vitest";

describe("Tabs", () => {
	it("renders Tabs with default classes and data-slot", () => {
		const { container } = render(<Tabs />);
		const root = container.firstChild as HTMLElement;
		expect(root).toHaveAttribute("data-slot", "tabs");
		expect(root.className).toContain("flex flex-col gap-2");
	});

	it("applies custom className", () => {
		const { container } = render(<Tabs className="custom-class" />);
		const root = container.firstChild as HTMLElement;
		expect(root.className).toContain("custom-class");
	});

	it("spreads additional props", () => {
		const { container } = render(<Tabs data-testid="tabs-root" />);
		const root = container.firstChild as HTMLElement;
		expect(root).toHaveAttribute("data-testid", "tabs-root");
	});

	it("renders children", () => {
		const { getByText } = render(
			<Tabs>
				<div>Tab Content</div>
			</Tabs>,
		);
		expect(getByText("Tab Content")).toBeInTheDocument();
	});
});
