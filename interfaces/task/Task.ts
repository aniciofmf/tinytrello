export type TaskStatus = "todo" | "progress" | "completed";

export interface Task {
	_id: string;
	description: string;
	createdAt: number;
	status: TaskStatus;
}

export interface TaskOnly {
	description: string;
	createdAt: number;
	status: TaskStatus;
}
