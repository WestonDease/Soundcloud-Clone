const express= require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require('./routes/api-routes.js')(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://<user>:<password1>@ds141464.mlab.com:41464/heroku_9wbwl2v4");

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});