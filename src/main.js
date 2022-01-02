const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

app.set('port', process.env.PORT || 5000);

// Middlewares
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

// ??
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require("./routes"));

app.listen(app.get('port'), function () {
    console.log("Server listening on port", app.get('port'));
});