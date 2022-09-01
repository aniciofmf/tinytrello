import { FC } from "react";
import NextLink from "next/link";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

export const Navbar: FC = () => {
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
