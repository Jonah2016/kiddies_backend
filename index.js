const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection.js");
const errorHandler = require("./middleware/errorHandler.js");

connectDb(); // Trigger connection to mongo db
const app = express();
const port = process.env.PORT || 5000;

const aboutRoute = require("./routes/about.route.js");
const bookRoute = require("./routes/book.route.js");
const serviceRoute = require("./routes/service.route.js");
const eventRoute = require("./routes/event.route.js");
const userRoute = require("./routes/user.route.js");
// const mediaRoute = require("./routes/media.route.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---- ALL ROUTES -----
// About routes
app.use("/api/about", aboutRoute);
app.use("/api/about:id", aboutRoute);

// Book route
app.use("/api/book", bookRoute);
app.use("/api/book/:id", bookRoute);

// Service route
app.use("/api/service", serviceRoute);
app.use("/api/service/:id", serviceRoute);

// Event route
app.use("/api/event", eventRoute);
app.use("/api/event/:id", eventRoute);
app.use("/api/event/register", eventRoute);

// User route
app.use("/api/user", userRoute);
app.use("/api/user/:id", userRoute);

// Media route
// app.use("/api/media", mediaRoute);
// app.use("/api/media/:id", mediaRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
