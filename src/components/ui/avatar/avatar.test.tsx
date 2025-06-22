import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./avatar";

import "@testing-library/jest-dom/vitest";

describe("Avatar", () => {
	it("renders correctly with default props", () => {
		const { container } = render(<Avatar />);
		const avatarElement = container.querySelector('[data-slot="avatar"]');
		expect(avatarElement).toBeInTheDocument();
		expect(avatarElement).toHaveClass(
			"relative flex size-8 shrink-0 overflow-hidden rounded-full",
		);
	});

	it("applies additional class names", () => {
		const { container } = render(<Avatar className="custom-class" />);
		const avatarElement = container.querySelector('[data-slot="avatar"]');
		expect(avatarElement).toHaveClass("custom-class");
	});

	it("passes additional props to the root element", () => {
		const { container } = render(<Avatar data-testid="avatar-test" />);
		const avatarElement = container.querySelector('[data-slot="avatar"]');
		expect(avatarElement).toHaveAttribute("data-testid", "avatar-test");
	});
});
