import { FC, useContext } from "react";
import NextLink from "next/link";
import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { UIContext } from "../../context/ui";

export const Navbar: FC = () => {
	const { openMenu } = useContext(UIContext);

	return (
		<AppBar position="sticky" elevation={1}>
			<Toolbar>
				<NextLink href="/" passHref>
					<Link underline="none" color="white">
						<Typography variant="h6">Tiny Trello</Typography>
					</Link>
				</NextLink>
			</Toolbar>
		</AppBar>
	);
};
