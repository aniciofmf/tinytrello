import { TaskOnly } from "../../interfaces/";

interface DataTask {
	tasks: TaskOnly[];
}

export const data: DataTask = {
	tasks: [
		{
			description: "Proident dolor duis elit sunt qui dolor laborum veniam ea laboris qui consequat.",
			status: "progress",
			createdAt: Date.now(),
		},
		{
			description: "Pariatur veniam sit nostrud eu aute.",
			status: "progress",
			createdAt: Date.now() - 30000,
		},
		{
			description: "Veniam in cupidatat adipisicing Lorem sunt est est ex cillum laboris fugiat officia fugiat.",
			status: "todo",
			createdAt: Date.now() - 1000000,
		},
		{
			description: "Dolor culpa esse pariatur ea eiusmod culpa qui nostrud nisi voluptate cillum labore velit ipsum.",
			status: "todo",
			createdAt: Date.now() - 10000,
		},
		{
			description: "Ullamco nisi officia cillum exercitation deserunt commodo sunt ex laboris ullamco.",
			status: "todo",
			createdAt: Date.now() - 20000,
		},
		{
			description: "Commodo veniam aliqua tempor officia officia non laborum.",
			status: "completed",
			createdAt: Date.now() - 300000,
		},
		{
			description: "Do ex nostrud consequat eu aute.",
			status: "progress",
			createdAt: Date.now() - 300000,
		},
	],
};
