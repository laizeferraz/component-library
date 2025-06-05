import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "./input";
import "@testing-library/jest-dom/vitest";

describe("Input", () => {
	it("renders an input element", () => {
		render(<Input />);
		const input = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("applies the provided className", () => {
		render(<Input className="custom-class" />);
		const input = screen.getByRole("textbox");
		expect(input).toHaveClass("custom-class");
	});

	it("sets the input type", () => {
		render(<Input type="email" />);
		const input = screen.getByRole("textbox");
		expect(input).toHaveAttribute("type", "email");
	});

	it("spreads additional props", () => {
		render(<Input data-testid="my-input" aria-label="my input" />);
		const input = screen.getByTestId("my-input");
		expect(input).toHaveAttribute("aria-label", "my input");
	});

	it("has data-slot attribute", () => {
		render(<Input />);
		const input = screen.getByRole("textbox");
		expect(input).toHaveAttribute("data-slot", "input");
	});

	it("applies disabled attributes and classes", () => {
		render(<Input disabled />);
		const input = screen.getByRole("textbox");
		expect(input).toBeDisabled();
		expect(input).toHaveClass("disabled:pointer-events-none");
	});
});
