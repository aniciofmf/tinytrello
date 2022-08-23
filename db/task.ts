import { isValidObjectId } from "mongoose";

import { dbConnect, dbDisconnect } from ".";
import { TaskModel } from "../models";
import { TaskOnly } from "../interfaces";

export const getTaskById = async (id: string): Promise<TaskOnly | null> => {
	if (!isValidObjectId(id)) return null;

	await dbConnect;
	const task = await TaskModel.findById(id).lean();
	await dbDisconnect();

	return JSON.parse(JSON.stringify(task));
};
