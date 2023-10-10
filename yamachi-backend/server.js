const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const PORT = 8000;
const mongoose = require("mongoose");
require("dotenv").config();

//データベースと接続
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DBと接続中...");
    }).catch((err) => {
        console.log(err);
    });

//ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT || PORT, () => console.log("サーバーが起動しました"))

