import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Textarea } from "./textarea";
import "@testing-library/jest-dom/vitest";

describe("Textarea", () => {
	it("renders a textarea element", () => {
		render(<Textarea />);
		const textarea = screen.getByRole("textbox");
		expect(textarea.tagName).toBe("TEXTAREA");
	});

	it("applies the data-slot attribute", () => {
		render(<Textarea />);
		const textarea = screen.getByRole("textbox");
		expect(textarea).toHaveAttribute("data-slot", "textarea");
	});

	it("applies custom className", () => {
		render(<Textarea className="custom-class" />);
		const textarea = screen.getByRole("textbox");
		expect(textarea).toHaveClass("custom-class");
	});

	it("forwards props to the textarea element", () => {
		render(<Textarea id="my-textarea" aria-label="My Textarea" />);
		const textarea = screen.getByLabelText("My Textarea");
		expect(textarea).toHaveAttribute("id", "my-textarea");
	});

	it("renders children as value", () => {
		render(<Textarea defaultValue="Hello world" />);
		const textarea = screen.getByDisplayValue("Hello world");
		expect(textarea).toBeInTheDocument();
	});

	it("applies disabled prop", () => {
		render(<Textarea disabled />);
		const textarea = screen.getByRole("textbox");
		expect(textarea).toBeDisabled();
	});
});
