import express from "express";
import loginRoutes from "./routes/login.js";
import regiRoutes from "./routes/register.js";
import authRoutes from "./routes/auth.js";

import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());


app.use("/api/login", loginRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/register", regiRoutes);


app.get('/', (req, res) => {
    res.send('This is on');
});

app.listen(
    4000, () => {
    console.log("Connected!");
})