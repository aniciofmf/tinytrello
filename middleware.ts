import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	if (req.nextUrl.pathname.startsWith("/api/tasks/")) {
		const id = req.nextUrl.pathname.replace("/api/tasks/", "");
		const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");
		if (!checkMongoIDRegExp.test(id)) {
			const url = req.nextUrl.clone();
			url.pathname = "/api/invalidReq";
			url.search = `?message=${id} not a valid ID`;
			return NextResponse.rewrite(url);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/api/tasks/:path"],
};
