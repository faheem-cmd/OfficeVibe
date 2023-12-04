// importing modules/packages

import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// initialize app
const app = express();
const server = createServer(app); // Create an HTTP server

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", __dirname + "/views");

// Serve static files (optional, for CSS, images, etc.)
app.use(express.static("public"));

// Define a route to render HTML
app.get("/", (req, res) => {
  res.render("index", { title: "Express with EJS" });
});

server.listen(8000, () => {
  console.log(`Server started on port 8000`);
});
