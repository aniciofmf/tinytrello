import { Task } from "./Task";

export interface TaskContextProps {
	tasks: Task[];
	addTask: (description: string) => void;
	updateTask: (task: Task, showSnackBar: boolean) => void;
}
