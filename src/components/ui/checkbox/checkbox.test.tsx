import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Checkbox } from "./checkbox";

import "@testing-library/jest-dom/vitest";

describe("Checkbox", () => {
	it("renders without crashing", () => {
		const { getByRole } = render(<Checkbox />);
		expect(getByRole("checkbox")).toBeInTheDocument();
	});

	it("applies custom className", () => {
		const { getByRole } = render(<Checkbox className="custom-class" />);
		expect(getByRole("checkbox")).toHaveClass("custom-class");
	});

	it("renders the indicator icon", () => {
		const { getByTestId } = render(
			<Checkbox checked data-testid="checkbox-root" />,
		);
		// The indicator is always rendered, but only visible when checked
		expect(
			getByTestId("checkbox-root").querySelector(
				'[data-slot="checkbox-indicator"]',
			),
		).toBeInTheDocument();
	});

	it("can be checked and unchecked", () => {
		const { getByRole } = render(<Checkbox />);
		const checkbox = getByRole("checkbox") as HTMLButtonElement;
		expect(checkbox.getAttribute("data-state")).toBe("unchecked");
		fireEvent.click(checkbox);
		expect(checkbox.getAttribute("data-state")).toBe("checked");
		fireEvent.click(checkbox);
		expect(checkbox.getAttribute("data-state")).toBe("unchecked");
	});

	it("calls onCheckedChange when clicked", () => {
		const handleChange = vi.fn();
		const { getByRole } = render(<Checkbox onCheckedChange={handleChange} />);
		const checkbox = getByRole("checkbox");
		fireEvent.click(checkbox);
		expect(handleChange).toHaveBeenCalled();
	});

	it("is disabled when disabled prop is set", () => {
		const { getByRole } = render(<Checkbox disabled />);
		const checkbox = getByRole("checkbox");
		expect(checkbox).toBeDisabled();
	});
});
