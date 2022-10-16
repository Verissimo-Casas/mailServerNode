import express, { request } from "express";
import UseController from "./controlles/UseController";

const app = express();

app.use(express.json());

app.get("/users", UseController.findAll);

app.post("/create", UseController.create)

app.get("/user", (request, response) => {
  request.body = {
    name: "Noia",
    email: "noia@noia.com",
  }

  return UseController.create(request, response);
});

app.listen(3333, () => {
  console.log("http://localhost:3333");
});