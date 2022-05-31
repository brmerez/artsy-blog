import express, { Express } from "express";
import postRouter from "./routes/PostRoutes";

const app: Express = express();
const port = process.env.PORT || 3004;

app.use(express.json());

app.use("/api/posts", postRouter);

app.listen(port, () => {
  console.log(`Server is listening on http://192.168.0.16:${port}`);
});

