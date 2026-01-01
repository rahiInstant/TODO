import express from "express";
import { routes } from "./boot/routes";

async function start() {
  const app = express();
  const port = 3000;
  app.use(express.json());
  app.use(routes);
  app.listen(port, () => {
    console.log("app started.");
  });
}

start();
