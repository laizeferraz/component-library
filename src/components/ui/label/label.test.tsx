import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./label";

import "@testing-library/jest-dom/vitest";

describe("Label", () => {
	it("renders children", () => {
		render(<Label>Test Label</Label>);
		expect(screen.getByText("Test Label")).toBeInTheDocument();
	});

	it("applies custom className", () => {
		render(<Label className="custom-class">Label</Label>);
		const label = screen.getByText("Label");
		expect(label).toHaveClass("custom-class");
	});

	it("applies default classes", () => {
		render(<Label>Label</Label>);
		const label = screen.getByText("Label");
		expect(label.className).toContain("flex");
		expect(label.className).toContain("items-center");
		expect(label.className).toContain("text-sm");
	});

	it("passes props to the underlying element", () => {
		render(<Label htmlFor="input-id">Label</Label>);
		const label = screen.getByText("Label");
		expect(label).toHaveAttribute("for", "input-id");
	});

	it("sets data-slot attribute", () => {
		render(<Label>Label</Label>);
		const label = screen.getByText("Label");
		expect(label).toHaveAttribute("data-slot", "label");
	});
});
