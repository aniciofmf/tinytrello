import { FC, useContext } from "react";
import { Drawer, List, Typography, Box, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import { UIContext } from "../../context/ui/Context";

const items: string[] = ["Inbox", "Starred", "Send Email", "Draft"];

export const SideBar: FC = () => {
	const { menuOpen, closeMenu } = useContext(UIContext);

	return (
		<Drawer anchor="left" open={menuOpen} onClose={closeMenu}>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: "5px 5px" }}>
					<Typography variant="h6" style={{ marginTop: "10px" }}>
						Menu
					</Typography>
				</Box>

				<List>
					{items.map((item, index) => (
						<ListItem button key={item}>
							<ListItemIcon>{index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}</ListItemIcon>
							<ListItemText primary={item} />
						</ListItem>
					))}
				</List>
			</Box>

			<Divider></Divider>
		</Drawer>
	);
};
