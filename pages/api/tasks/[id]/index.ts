import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

import { dbConnect, dbDisconnect } from "../../../../db";
import { TaskModel } from "../../../../models";
import { TaskOnly } from "../../../../interfaces";

type ResponseData = { msg: string } | TaskOnly;

const updateTask = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	const { id } = req.query;

	await dbConnect();

	const task = await TaskModel.findById(id);

	if (!task) {
		await dbDisconnect();
		return res.status(400).json({ msg: "Invalid Task" });
	}

	const { description = task.description, status = task.status } = req.body;

	try {
		const taskUpdt = await TaskModel.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true }).select("-__v");

		await dbDisconnect();

		return res.status(200).json(taskUpdt!);
	} catch (error) {
		await dbDisconnect();
		return res.status(400).json({ msg: "There was an error validating the entity" });
	}
};

const getTask = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	await dbConnect();
	const task = await TaskModel.findById(id).select("-__v");
	await dbDisconnect();

	if (!task) {
		return res.status(400).json({ msg: "Invalid Task" });
	}

	return res.status(200).json(task);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	const { id } = req.query;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).json({ msg: "Invalid id" });
	}

	switch (req.method) {
		case "PUT":
			return updateTask(req, res);

		case "GET":
			return getTask(req, res);

		default:
			return res.status(400).json({ msg: "Invalid Route" });
	}
}
