import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";

import { darkTheme } from "../themes/";
import { UIProvider } from "../context/ui";
import { TaskProvider } from "../context/tasks/Provider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider maxSnack={3}>
			<TaskProvider>
				<UIProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</UIProvider>
			</TaskProvider>
		</SnackbarProvider>
	);
}

export default MyApp;
