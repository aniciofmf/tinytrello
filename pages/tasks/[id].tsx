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

import { Layout } from "../../components/layouts";
import { Task, TaskStatus } from "../../interfaces/";
import { TaskContext } from "../../context/tasks";

const statusList: TaskStatus[] = ["todo", "progress", "completed"];

const TaskPage: FC<any> = ({ task }) => {
	const [taskValue, setTaskValue] = useState("");
	const [statusOption, setStatus] = useState<TaskStatus>("todo");
	const [inFocus, setInFocus] = useState(false);
	const { updateTask } = useContext(TaskContext);

	return (
		<Layout title="Edit Task">
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title="Task Title" subheader="Task subheader"></CardHeader>
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
								onClick={() => {}}
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
	return {
		props: {},
	};
};

export default TaskPage;
