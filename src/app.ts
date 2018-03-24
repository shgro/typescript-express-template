import express from "express";
import sassMw from "node-sass-middleware";
import path from "path";
import { HelloWorld } from "./helloWorld";

export const app: express.Application = express();

app.set("views", path.join(__dirname, "..", "views", "pug"));
app.set("view engine", "pug");

const sassPath = path.join(__dirname, "..", "views", "sass");
const cssPath = path.join(__dirname, "..", "public", "css");
const cssPrefix = "/css";

app.use(
  sassMw({
    debug: true,
    dest: cssPath,
    indentedSyntax: true,
    prefix: cssPrefix,
    src: sassPath,
  }),
);

app.use(cssPrefix, express.static(cssPath));

app.get("/", (_, res) => {
  res.status(200);
  res.render("index", {
    message: HelloWorld.hello(),
    title: "index",
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
