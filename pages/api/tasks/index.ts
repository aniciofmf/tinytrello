import type { NextApiRequest, NextApiResponse } from "next";

import { dbConnect, dbDisconnect } from "../../../db";
import { TaskModel } from "../../../models";
import { TaskOnly } from "../../../interfaces";

type ResponseData = { msg: string } | TaskOnly[] | TaskOnly;

const getTasks = async (res: NextApiResponse<ResponseData>) => {
	try {
		await dbConnect();

		const tasks = await TaskModel.find().select("-__v").sort({ createdAt: "ascending" });

		await dbDisconnect();

		return res.status(200).json(tasks);
	} catch (error) {
		await dbDisconnect();
		return res.status(500).json({ msg: "There was an error, try again later." });
	}
};

const addTask = async (req: NextApiRequest, res: NextApiResponse) => {
	const { description = "" } = req.body;

	const newTask = new TaskModel({
		description,
		createdAt: Date.now(),
	});

	try {
		await dbConnect();
		await newTask.save();
		await dbDisconnect();

		return res.status(201).json(newTask);
	} catch (error) {
		await dbDisconnect();
		return res.status(500).json({ msg: "There was an error, try again later." });
	}
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	switch (req.method) {
		case "GET":
			return getTasks(res);
		case "POST":
			return addTask(req, res);
		case "PUT":

		default:
			return res.status(400).json({ msg: "Invalid Route" });
	}
}
