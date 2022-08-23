import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, dbDisconnect, data } from "../../db";
import { TaskModel } from "../../models";

type ResponseData = {
	msg: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	await dbConnect();

	await TaskModel.deleteMany();
	await TaskModel.insertMany(data.tasks);

	await dbDisconnect();

	return res.status(200).json({ msg: "Data loaded" });
}
