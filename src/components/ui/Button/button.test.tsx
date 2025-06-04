import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./button";
import "@testing-library/jest-dom/vitest";

describe("Button", () => {
	it("renders a button with provided child text", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText("Click me")).toBeInTheDocument();
	});

	it("calls onClick when clicked", () => {
		const handleClick = vi.fn();
		const { getByRole } = render(<Button onClick={handleClick}>Click</Button>);
		fireEvent.click(getByRole("button"));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("is disabled when disabled prop is true", () => {
		render(<Button disabled>Disabled</Button>);
		expect(screen.getByRole("button")).toHaveProperty("disabled", true);
	});

	it("applies custom className", () => {
		const { getByRole } = render(
			<Button className="custom-class">Test</Button>,
		);
		expect(getByRole("button").className).toContain("custom-class");
	});

	it('renders as a different element if "asChild" prop is provided', () => {
		render(
			<Button asChild>
				<a data-testid="about-page-link" href="#">
					Link
				</a>
			</Button>,
		);
		const element = screen.getByTestId("about-page-link");
		expect(element).toBeInTheDocument();
		expect(element.tagName.toLowerCase()).toBe("a");
	});

	it("does not call onClick when disabled", () => {
		const handleClick = vi.fn();
		const { getByRole } = render(
			<Button onClick={handleClick} disabled>
				Disabled
			</Button>,
		);
		fireEvent.click(getByRole("button"));
		expect(handleClick).not.toHaveBeenCalled();
	});

	it("applies the correct variant and size classes", () => {
		const { getByRole } = render(
			<Button variant="destructive" size="lg">
				Delete
			</Button>,
		);
		const btn = getByRole("button");
		expect(btn.className).toMatch(/bg-destructive/);
		expect(btn.className).toMatch(/h-10/);
	});

	it("renders with default variant and size when none are provided", () => {
		const { getByRole } = render(<Button>Default</Button>);
		const btn = getByRole("button");
		expect(btn.className).toMatch(/bg-primary/);
		expect(btn.className).toMatch(/h-9/);
	});

	it("forwards additional props to the underlying element", () => {
		const { getByRole } = render(
			<Button aria-label="custom-label" tabIndex={2}>
				Labelled
			</Button>,
		);
		const btn = getByRole("button");
		expect(btn).toHaveAttribute("aria-label", "custom-label");
		expect(btn).toHaveAttribute("tabindex", "2");
	});

	it("renders children when asChild is true", () => {
		render(
			<Button asChild>
				<span data-testid="child-span">Child</span>
			</Button>,
		);
		expect(screen.getByTestId("child-span")).toBeInTheDocument();
	});

	it("spreads props to custom element when asChild is true", () => {
		render(
			<Button asChild>
				<a data-testid="custom-link" href="#" aria-label="link" />
			</Button>,
		);
		const link = screen.getByTestId("custom-link");
		expect(link).toHaveAttribute("aria-label", "link");
	});
});
