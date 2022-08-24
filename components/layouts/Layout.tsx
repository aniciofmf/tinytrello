import Head from "next/head";
import { FC } from "react";
import { Box } from "@mui/material";

import { Navbar } from "../ui";
import { Props } from "../../interfaces/Props";

export const Layout: FC<Props> = ({ title = "", children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>

			<Navbar />

			<Box sx={{ padding: "10px 20px" }}>{children}</Box>
		</Box>
	);
};
