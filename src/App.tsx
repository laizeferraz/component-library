import { ThemeProvider } from "@/components/ui/theme/theme-provider";
import { Button } from "./components/ui/button/button";
import { ModeToggle } from "./components/ui/theme/theme-button";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="flex justify-end m-4">
				<ModeToggle />
			</div>
			<div className="flex h-screen w-screen items-center justify-center bg-background">
				<Button>Click me </Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
