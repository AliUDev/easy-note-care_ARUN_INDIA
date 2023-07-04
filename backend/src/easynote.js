const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()

// const { errorHandler } = require("./middlewares/errorMiddleware");
const authRouter = require('./routes/auth.routes.js');
const userRouter = require("./routes/user.routes");

const app = express();

//middleware bodyparser
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// app.use(errorHandler);

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err.message))

app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);

const port = process.env.PORT || 4122;

app.listen(port, () => console.log(`Server running on port ${port}`));


// uJqHnHZ8Oixh2gQm