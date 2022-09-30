const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/evoevent");
// mongoose.connect("mongodb+srv://<credentials>@cluster0.7leeydo.mongodb.net/myFirstDatabase?appName=mongosh+1.5.4");
mongoose.connect("mongodb+srv://admin-ujjwal:TugTUkbjXtGcEPxL@cluster0.7leeydo.mongodb.net/?retryWrites=true&w=majority/test")


// importing routers
const {ContactRouter} = require("./routes/contactForm");
const {EventRouter} = require("./routes/event");
const {AdminRouter} = require("./routes/admin");
const {ParticipantRouter} = require("./routes/participant");


app.use("/contact-form", ContactRouter);
app.use("/api/events", EventRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/participant", ParticipantRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT} at http://localhost:5000/`)
});