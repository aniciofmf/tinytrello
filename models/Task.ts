import mongoose, { Model, Schema } from "mongoose";
import { Task } from "../interfaces";

interface EntryTask extends Task {}

const taskSchema = new Schema({
	description: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Number,
	},
	status: {
		type: String,
		enum: {
			values: ["todo", "progress", "completed"],
		},
		default: "todo",
	},
});

export const TaskModel: Model<EntryTask> = mongoose.models.Task || mongoose.model("Task", taskSchema);
