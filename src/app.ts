import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";
import cors from "cors";
import bookRouter from "./book/bookRouter";

const app = express();
app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json())
app.get("/", (req, res) => {
  res.json({ message: "welcome to ebook store" });
});

app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);

app.use(globalErrorHandler);

export default app;
