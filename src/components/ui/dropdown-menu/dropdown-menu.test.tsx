import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "./dropdown-menu";

import "@testing-library/jest-dom/vitest";

// Mock the dropdown menu components
vi.mock("./dropdown-menu", () => {
	const MockDropdownMenu = ({ children }: any) => <div>{children}</div>;
	const MockDropdownMenuTrigger = ({ children }: any) => (
		<button>{children}</button>
	);
	const MockDropdownMenuContent = ({ children }: any) => <div>{children}</div>;
	// We'll pass the selected value via context for the radio group
	const RadioGroupContext = React.createContext<string | undefined>(undefined);

	const MockDropdownMenuRadioGroup = ({ value, children }: any) => (
		<RadioGroupContext.Provider value={value}>
			{children}
		</RadioGroupContext.Provider>
	);

	const MockDropdownMenuRadioItem = ({
		children,
		className,
		value,
		...props
	}: any) => {
		const selectedValue = React.useContext(RadioGroupContext);
		return (
			<div className={className} {...props}>
				{value === selectedValue && <span data-testid="indicator" />}
				{children}
			</div>
		);
	};
	return {
		__esModule: true,
		DropdownMenu: MockDropdownMenu,
		DropdownMenuTrigger: MockDropdownMenuTrigger,
		DropdownMenuContent: MockDropdownMenuContent,
		DropdownMenuRadioGroup: MockDropdownMenuRadioGroup,
		DropdownMenuRadioItem: MockDropdownMenuRadioItem,
	};
});

describe("DropdownMenuRadioItem", () => {
	it("renders with children", () => {
		render(
			<DropdownMenu>
				<DropdownMenuTrigger>Open</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuRadioGroup value="a">
						<DropdownMenuRadioItem value="a">Option A</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="b">Option B</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>,
		);
		// Open the menu
		userEvent.click(screen.getByText("Open"));
		expect(screen.getByText("Option A")).toBeInTheDocument();
		expect(screen.getByText("Option B")).toBeInTheDocument();
	});

	it("applies className prop", () => {
		render(
			<DropdownMenuRadioItem value="x" className="test-class">
				Test
			</DropdownMenuRadioItem>,
		);
		const item = screen.getByText("Test");
		expect(item.className).toContain("test-class");
	});

	it("renders the indicator when selected", () => {
		render(
			<DropdownMenuRadioGroup value="selected">
				<DropdownMenuRadioItem value="selected">Selected</DropdownMenuRadioItem>
				<DropdownMenuRadioItem value="not-selected">
					Not Selected
				</DropdownMenuRadioItem>
			</DropdownMenuRadioGroup>,
		);
		// The selected item should have the indicator (CircleIcon)
		const selected = screen.getByText("Selected");

		expect(
			selected.querySelector('[data-testid="indicator"]'),
		).toBeInTheDocument();
	});
});
