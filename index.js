const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const app = express();

var server = require("http").Server(app);

const { SERVER_PORT = 80 } = process.env;

app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "3mb", extended: false }));

// parse application/json
app.use(bodyParser.json({ limit: "3mb" }));

app.set("trust proxy", true);
app.use(express.static("site"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "site", "index.html"));
});

server.listen(process.env.PORT || SERVER_PORT, () =>
  console.log(
    `Holonext babylon previewer web server listening on ${
      process.env.PORT || SERVER_PORT
    }!`
  )
);
