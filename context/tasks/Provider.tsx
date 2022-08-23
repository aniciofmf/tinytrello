import { FC, ReactNode, useEffect, useReducer } from "react";
import { useSnackbar } from "notistack";

import { TaskContext, TaskReducer } from "./";
import { Task, TaskState } from "../../interfaces";
import { taskApi } from "../../api";

const INITIAL_STATE: TaskState = {
	tasks: [],
};

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(TaskReducer, INITIAL_STATE);
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	useEffect(() => {
		getTasks();
	}, []);

	const getTasks = async () => {
		const { data } = await taskApi.get<Task[]>("/tasks");

		dispatch({ type: "LOAD_TASKS", payload: data });
	};

	const addTask = async (description: string) => {
		const { data } = await taskApi.post<Task>("/tasks", { description });

		dispatch({ type: "ADD_TASK", payload: data });
	};

	const updateTask = async (task: Task, showSnackBar: boolean = false) => {
		try {
			const { data } = await taskApi.put<Task>(`/tasks/${task._id}`, { description: task.description, status: task.status });

			dispatch({ type: "UPDATE_TASK", payload: data });

			if (showSnackBar) {
				enqueueSnackbar("Task updated!", {
					variant: "success",
					autoHideDuration: 2000,
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
				});
			}
		} catch (error) {}
	};

	return (
		<TaskContext.Provider
			value={{
				...state,
				addTask,
				updateTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};
