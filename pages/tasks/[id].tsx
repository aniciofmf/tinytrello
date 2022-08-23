import React, { useState, useContext, FC } from "react";
import { GetServerSideProps } from "next";
import {
	capitalize,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	TextField,
	IconButton,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { getTaskById } from "../../db/task";
import { Task, TaskStatus } from "../../interfaces/";
import { TaskContext } from "../../context/tasks";
import { Layout } from "../../components/layouts";
import { dateHelper } from "../../helpers";

const statusList: TaskStatus[] = ["todo", "progress", "completed"];

const TaskPage: FC<{ task: Task }> = ({ task }) => {
	const [taskValue, setTaskValue] = useState(task.description);
	const [statusOption, setStatus] = useState<TaskStatus>(task.status);
	const [inFocus, setInFocus] = useState(false);
	const { updateTask } = useContext(TaskContext);

	const update = async () => {
		if (taskValue.trim().length === 0) return;

		const updatedTask = {
			...task,
			description: taskValue,
			status: statusOption,
		};

		updateTask(updatedTask, true);
	};

	return (
		<Layout title="Edit Task">
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title="Task Update" subheader={`${dateHelper.getFormatDistanceToNow(task.createdAt)}`}></CardHeader>
						<CardContent>
							<TextField
								error={taskValue.length === 0 && inFocus}
								value={taskValue}
								onChange={(e) => setTaskValue(e.target.value)}
								onBlur={() => setInFocus(true)}
								sx={{ marginTop: 2, marginBottom: 1 }}
								placeholder="This is my first task..."
								fullWidth
								multiline
								autoFocus
							/>
						</CardContent>

						<FormControl>
							<FormLabel sx={{ marginLeft: 2 }}>Status:</FormLabel>
							<RadioGroup sx={{ marginLeft: 2 }} row={true} value={statusOption} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
								{statusList.map((status) => (
									<FormControlLabel key={status} value={status} control={<Radio />} label={capitalize(status)}></FormControlLabel>
								))}
							</RadioGroup>
						</FormControl>
						<CardActions>
							<Button
								disabled={taskValue.length <= 0}
								onClick={update}
								startIcon={<SaveOutlinedIcon />}
								variant="outlined"
								color="primary"
								fullWidth
							>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<IconButton sx={{ position: "fixed", width: "50px", height: "50px", bottom: 30, right: 30, backgroundColor: "error.dark" }}>
				<DeleteOutlineOutlinedIcon fontSize="medium" />
			</IconButton>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };
	const task = await getTaskById(id);

	if (!task) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	return {
		props: {
			task,
		},
	};
};

export default TaskPage;
