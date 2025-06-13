import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Toaster } from "./sonner";
import "@testing-library/jest-dom/vitest";

// Mock the sonner Toaster
vi.mock("sonner", () => ({
	Toaster: (props: any) => <div data-testid="sonner-toaster" {...props} />,
}));

// Mock next-themes at the module level
vi.mock("next-themes", () => ({
	useTheme: vi.fn(() => ({ theme: undefined })),
}));

// Import after mocking
import { useTheme } from "next-themes";

afterEach(() => {
	vi.clearAllMocks();
	vi.resetAllMocks();
});

describe("Toaster", () => {
	it("renders with default theme", () => {
		(useTheme as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
			theme: undefined,
		});

		const { getByTestId } = render(<Toaster />);
		const toaster = getByTestId("sonner-toaster");

		expect(toaster).toBeInTheDocument();
		expect(toaster).toHaveClass("toaster group");
		expect(toaster.getAttribute("theme")).toBe("system");
		expect(toaster.style.getPropertyValue("--normal-bg")).toBe(
			"var(--popover)",
		);
	});

	it("renders with custom theme", () => {
		(useTheme as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
			theme: "dark",
		});

		const { getByTestId } = render(<Toaster />);
		const toaster = getByTestId("sonner-toaster");

		expect(toaster.getAttribute("theme")).toBe("dark");
	});

	it("forwards additional props", () => {
		(useTheme as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
			theme: "light",
		});

		const { getByTestId } = render(<Toaster data-custom="test" />);
		const toaster = getByTestId("sonner-toaster");

		expect(toaster.getAttribute("data-custom")).toBe("test");
	});
});
