import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@chromatic-com/storybook",
		"@storybook/addon-vitest",
		"@storybook/addon-themes",
		"@storybook/addon-docs",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: (config) => {
		config.resolve = config.resolve || {};
		config.resolve.alias = [
			...(Array.isArray(config.resolve.alias)
				? config.resolve.alias
				: config.resolve.alias
					? [config.resolve.alias]
					: []),
			{ find: "@", replacement: path.resolve(__dirname, "../src") },
		];
		return config;
	},
};
export default config;
