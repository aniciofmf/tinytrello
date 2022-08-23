import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

import { Layout } from "../components/layouts";
import { TaskList } from "../components/ui";
import { NewTask } from "../components/ui/";

const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="To Do" />
						<CardContent>
							<NewTask />
							<TaskList status="todo" />
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Doing"></CardHeader>
						<CardContent>
							<TaskList status="progress" />
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Done"></CardHeader>
						<CardContent>
							<TaskList status="completed" />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Home;
