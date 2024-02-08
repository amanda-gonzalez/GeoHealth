import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('This is on');
});

app.listen(4000, () => {
    console.log("Connected!");
})