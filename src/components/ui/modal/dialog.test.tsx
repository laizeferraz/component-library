import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Dialog, DialogTitle } from "./dialog";
import "@testing-library/jest-dom/vitest";

describe("DialogTitle", () => {
	it("renders children correctly", () => {
		const { getByText } = render(
			<Dialog>
				<DialogTitle>My Dialog Title</DialogTitle>
			</Dialog>,
		);
		expect(getByText("My Dialog Title")).toBeInTheDocument();
	});

	it("applies the default class names", () => {
		const { getByText } = render(
			<Dialog>
				<DialogTitle>Title</DialogTitle>
			</Dialog>,
		);
		const title = getByText("Title");
		expect(title).toHaveClass("text-lg");
		expect(title).toHaveClass("leading-none");
		expect(title).toHaveClass("font-semibold");
	});

	it("merges custom className with defaults", () => {
		const { getByText } = render(
			<Dialog>
				<DialogTitle className="custom-class">Title</DialogTitle>
			</Dialog>,
		);
		expect(getByText("Title")).toHaveClass("custom-class");
		expect(getByText("Title")).toHaveClass("text-lg");
	});

	it("spreads additional props", () => {
		const { getByText } = render(
			<Dialog>
				<DialogTitle data-testid="dialog-title">Title</DialogTitle>
			</Dialog>,
		);
		expect(getByText("Title")).toHaveAttribute("data-testid", "dialog-title");
	});

	it("sets data-slot attribute", () => {
		const { getByText } = render(
			<Dialog>
				<DialogTitle>Title</DialogTitle>
			</Dialog>,
		);
		expect(getByText("Title")).toHaveAttribute("data-slot", "dialog-title");
	});
});
