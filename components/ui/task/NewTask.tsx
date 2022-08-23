import { FC, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { TaskContext } from "../../../context/tasks/Context";
import { UIContext } from "../../../context/ui/Context";

export const NewTask: FC = () => {
	const [taskValue, setTaskValue] = useState("");
	const [inFocus, setInFocus] = useState(false);
	const { addTask } = useContext(TaskContext);
	const { showAdd, setShowAdd } = useContext(UIContext);

	const save = () => {
		if (taskValue.length === 0) return;

		addTask(taskValue);

		reset();
	};

	const reset = () => {
		setInFocus(false);
		setTaskValue("");
	};

	return (
		<Box sx={{ marginBottom: 1, paddingX: 1 }}>
			{!showAdd ? (
				<Button startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth color="primary" variant="outlined" onClick={() => setShowAdd(true)}>
					Add Task
				</Button>
			) : (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 1, marginBottom: 1 }}
						placeholder="This is my first task..."
						autoFocus
						multiline
						label="New Task"
						error={taskValue.length === 0 && inFocus}
						value={taskValue}
						onChange={(e) => setTaskValue(e.target.value)}
						onBlur={() => setInFocus(true)}
					></TextField>

					<Box display="flex" justifyContent="space-between" sx={{ marginBottom: 2 }}>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => {
								setShowAdd(false);
								reset();
							}}
						>
							Cancel
						</Button>
						<Button variant="outlined" color="primary" startIcon={<SaveOutlinedIcon />} onClick={save}>
							Save
						</Button>
					</Box>
				</>
			)}
		</Box>
	);
};
