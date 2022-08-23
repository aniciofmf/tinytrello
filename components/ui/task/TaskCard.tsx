import { DragEvent, FC, useContext } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

import { Task } from "../../../interfaces";
import { UIContext } from "../../../context/ui/Context";
import { useRouter } from "next/router";

interface Props {
	task: Task;
}

export const TaskCard: FC<Props> = ({ task }) => {
	const router = useRouter();
	const { setDragging } = useContext(UIContext);

	const dragStart = (event: DragEvent) => {
		event.dataTransfer.setData("id", task._id);
		setDragging(true);
	};

	const dragEnd = () => {
		setDragging(false);
	};

	return (
		<Card
			sx={{ marginBottom: 2, bgcolor: "#252e4a", boxShadow: "rgb(0 0 0 / 10%) 0px 4px 12px" }}
			elevation={0}
			draggable={true}
			onDragStart={dragStart}
			onDragEnd={dragEnd}
			onClick={() => router.push(`/tasks/${task._id}`)}
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: "pre-line", fontSize: "14px" }}>{task.description}</Typography>
				</CardContent>

				<CardActions sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}>
					<Typography sx={{ fontSize: "12px" }}>created 1hr ago</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
