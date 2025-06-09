import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import * as React from "react";
import { Switch } from "./switch";

import "@testing-library/jest-dom/vitest";

// Mock @radix-ui/react-switch
vi.mock("@radix-ui/react-switch", () => {
	return {
		__esModule: true,
		Root: React.forwardRef<HTMLButtonElement, any>((props, ref) => (
			<button ref={ref} {...props}>
				{props.children}
			</button>
		)),
		Thumb: React.forwardRef<HTMLSpanElement, any>((props, ref) => (
			<span ref={ref} {...props} />
		)),
	};
});

describe("Switch", () => {
	it("renders without crashing", () => {
		const { getByRole } = render(<Switch />);
		expect(getByRole("button")).toBeInTheDocument();
	});

	it("applies custom className", () => {
		const { getByRole } = render(<Switch className="custom-class" />);
		expect(getByRole("button")).toHaveClass("custom-class");
	});

	it("passes props to the root element", () => {
		const { getByRole } = render(
			<Switch aria-label="toggle" data-testid="switch" />,
		);
		const button = getByRole("button");
		expect(button).toHaveAttribute("aria-label", "toggle");
		expect(button).toHaveAttribute("data-testid", "switch");
	});

	it("renders the thumb", () => {
		const { getByRole } = render(<Switch data-testid="switch-root" />);
		// The thumb is a span inside the button
		const thumb = getByRole("button").querySelector(
			'[data-slot="switch-thumb"]',
		);
		expect(thumb).toBeInTheDocument();
	});

	it("calls onClick handler", () => {
		const handleClick = vi.fn();
		const { getByRole } = render(<Switch onClick={handleClick} />);
		fireEvent.click(getByRole("button"));
		expect(handleClick).toHaveBeenCalled();
	});

	it("is disabled when disabled prop is set", () => {
		const { getByRole } = render(<Switch disabled />);
		expect(getByRole("button")).toBeDisabled();
	});
});
