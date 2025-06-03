import "../src/index.css"; // Import global styles
import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { Renderer } from "storybook/internal/types";

const preview: Preview = {
	parameters: {
		darkMode: {
			classTarget: "html",
			darkClass: "dark",
			lightClass: "light",
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withThemeByClassName<Renderer>({
			themes: {
				light: "light",
				dark: "dark",
			},
			defaultTheme: "light",
		}),
	],
};

export default preview;
