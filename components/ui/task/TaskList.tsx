import { DragEvent, FC, useContext, useMemo } from "react";
import { Paper, List } from "@mui/material";

import { TaskCard } from "./TaskCard";
import { Task, TaskStatus } from "../../../interfaces/";
import { TaskContext } from "../../../context/tasks/Context";
import { UIContext } from "../../../context/ui/Context";

import styles from "../../../styles/TaskList.module.css";

interface Props {
	status: TaskStatus;
}

export const TaskList: FC<Props> = ({ status }) => {
	const { tasks, updateTask } = useContext(TaskContext);
	const { isDragging, setDragging } = useContext(UIContext);

	const tasksByStatus = useMemo(() => tasks.filter((task: Task) => task.status === status), [tasks]);

	const onDrop = (event: DragEvent<HTMLDivElement>) => {
		const taskId = event.dataTransfer.getData("id");
		const task = tasks.find((task) => task._id === taskId)!;

		task.status = status;
		updateTask(task);
		setDragging(false);
	};

	const elementDrop = (event: DragEvent) => {
		event.preventDefault();
	};

	return (
		<div onDrop={onDrop} onDragOver={elementDrop} className={isDragging ? styles.dragging : ""}>
			<Paper elevation={0} sx={{ height: "calc(100vh - 250px)", overflow: "auto", padding: "1px 3px", bgcolor: "transparent" }}>
				<List sx={{ opacity: isDragging ? 0.3 : 1, transition: "all .3s" }}>
					{tasksByStatus.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</List>
			</Paper>
		</div>
	);
};
