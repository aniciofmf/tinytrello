import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { darkTheme } from "../themes/";
import { UIProvider } from "../context/ui";
import { TaskProvider } from "../context/tasks/Provider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<TaskProvider>
			<UIProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</TaskProvider>
	);
}

export default MyApp;
