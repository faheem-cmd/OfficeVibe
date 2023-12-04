// importing modules/packages

import express from "express";
import { createServer } from "http";

// initialize app
const app = express();
const server = createServer(app); // Create an HTTP server

server.listen(8000, () => {
  console.log(`Server started on port 8000`);
});
