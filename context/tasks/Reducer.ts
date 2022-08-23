import { TaskState } from "../../interfaces/task/State";
import { Task } from "../../interfaces/task/Task";

type ACTIONTYPE = { type: "ADD_TASK"; payload: Task } | { type: "UPDATE_TASK"; payload: Task } | { type: "LOAD_TASKS"; payload: Task[] };

export const TaskReducer = (state: TaskState, action: ACTIONTYPE): TaskState => {
	switch (action.type) {
		case "ADD_TASK":
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		case "UPDATE_TASK":
			return {
				...state,
				tasks: state.tasks.map((task) => {
					if (task._id === action.payload._id) {
						return action.payload;
					}

					return task;
				}),
			};

		case "LOAD_TASKS":
			return {
				...state,
				tasks: [...action.payload],
			};
		default:
			return state;
	}
};
