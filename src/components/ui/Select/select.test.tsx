import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { SelectContent } from "./select";
import "@testing-library/jest-dom/vitest";

describe("SelectContent", () => {
	it("renders children inside SelectPrimitive.Viewport", () => {
		render(
			<SelectPrimitive.Root open>
				<SelectContent>
					<div data-testid="child">Child</div>
				</SelectContent>
			</SelectPrimitive.Root>,
		);
		expect(screen.getByTestId("child")).toBeInTheDocument();
	});

	it("applies custom className", () => {
		render(
			<SelectPrimitive.Root open>
				<SelectContent className="custom-class">
					<div />
				</SelectContent>
			</SelectPrimitive.Root>,
		);
		const content = screen.getByRole("listbox", { hidden: true });
		expect(content.className).toContain("custom-class");
	});

	it("sets data-slot attribute", () => {
		render(
			<SelectPrimitive.Root open>
				<SelectContent>
					<div />
				</SelectContent>
			</SelectPrimitive.Root>,
		);
		const content = screen.getByRole("listbox");
		expect(content).toHaveAttribute("data-slot", "select-content");
	});

	it("uses default position 'popper' and applies related classes", () => {
		render(
			<SelectPrimitive.Root open>
				<SelectContent>
					<div />
				</SelectContent>
			</SelectPrimitive.Root>,
		);
		const content = screen.getByRole("presentation", { hidden: true });
		expect(content.className).toMatch(
			/h-\[var\(--radix-select-trigger-height\)\]/,
		);
	});

	it("applies correct classes when position is not 'popper'", () => {
		render(
			<SelectPrimitive.Root open>
				<SelectContent position="item-aligned">
					<div />
				</SelectContent>
			</SelectPrimitive.Root>,
		);
		const content = screen.getByRole("presentation", { hidden: true });
		expect(content.className).not.toMatch(
			/h-\[var\(--radix-select-trigger-height\)\]/,
		);
	});
});
