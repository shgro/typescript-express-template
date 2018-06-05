import express from "express";
import sassMw from "node-sass-middleware";
import path from "path";

export const app: express.Application = express();

app.set("views", path.join(__dirname, "..", "views", "pug", "content"));
app.set("view engine", "pug");

const sassPath = path.join(__dirname, "..", "views", "sass");
const cssPath = path.join(__dirname, "..", "public", "css");
const imgPath = path.join(__dirname, "..", "public", "img");

const cssPrefix = "/css";
const imgPrefix = "/img";

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
app.use(imgPrefix, express.static(imgPath));

app.get("/", (_, res) => {
  res.status(200);
  res.render("top", {
    title: "HOME",
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
