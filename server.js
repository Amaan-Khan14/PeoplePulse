const express = require("express");
const routes = require("./routes/contactsRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config()
const connectDb = require("./config/dbconnection")

const app = express();

const port = process.env.PORT || 3001;

connectDb();

app.use(express.json());
app.use("/api/contacts", routes);
app.use("/api/users",require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(port, () => {
    console.log(`The server is running on port:${port}`)
})