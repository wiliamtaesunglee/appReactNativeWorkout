var express = require("express");

var routes = express.Router();

router.get("/hello", function() => {
	res.json("olá pessoal!");
});

var indexRouter = require("./routes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
