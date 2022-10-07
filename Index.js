const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const userRoute = require("./routes/userRoute");
const artisanRoute = require("./routes/artisanRoute");
const morgan = require("morgan");


const app = express();

connectDB();


//middlewares
app.use(express.json());
app.use("/api/users", userRoute)
app.use("/api/artisans", artisanRoute )
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("<h1>welcome to our artisan scheduler App</h1>")
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});