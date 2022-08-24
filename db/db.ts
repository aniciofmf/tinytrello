import mongoose from "mongoose";

const dbConn = {
	connected: 0,
};

export const dbConnect = async () => {
	if (dbConn.connected) {
		return;
	}

	if (mongoose.connections.length > 0) {
		dbConn.connected = mongoose.connections[0].readyState;

		if (dbConn.connected === 1) {
			return;
		}

		await mongoose.disconnect();
	}

	await mongoose.connect(process.env.MOGODB_URI || "");
	dbConn.connected = 1;
};

export const dbDisconnect = async () => {
	if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") return;

	if (dbConn.connected === 0) return;

	await mongoose.disconnect();
	dbConn.connected = 0;
};
