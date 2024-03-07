const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3001;

const aboutRoute = require("./routes/about.route.js");
const bookRoute = require("./routes/book.route.js");
const serviceRoute = require("./routes/service.route.js");
const eventRoute = require("./routes/event.route.js");
const userRoute = require("./routes/user.route.js");
const errorHandler = require("./middleware/errorHandler.js");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// ---- ALL ROUTES -----
// Home page route
app.get("/", (req, res) => {
  res.send("Getting from the home page");
});

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
app.post("/api/media", (req, res) => {
  res.send("Data on media sent successfully");
});
app.put("/api/media/:id", (req, res) => {
  res.send("Data on media updated Successfully");
});
app.get("/api/media", (req, res) => {
  res.send("Media data retrieved Successfully");
});
app.get("/api/media/:id", (req, res) => {
  res.send("Single media data retrieved Successfully");
});

mongoose
  .connect(
    "mongodb+srv://kiddie_admin:3twf5cCQw3S2FWu6@kiddiesbackend.igqsiwu.mongodb.net/kiddiesAPI?retryWrites=true&w=majority&appName=kiddiesBackend"
  )
  .then(() => {
    console.log("Connected to the mongo DB");
  })
  .catch(() => {
    console.log("Could not connect to database");
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
