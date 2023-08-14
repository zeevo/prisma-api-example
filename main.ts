import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";

const prisma = new PrismaClient();

const app = express();

app.use(bodyParser.json());

app.get("/animals", async (req, res) => {
  const animals = await prisma.animal.findMany();
  res.json(animals);
});

app.post("/animals", async (req, res) => {
  const animal = await prisma.animal.create({
    data: req.body,
  });
  res.json(animal);
});

app.listen(3001, () => {
  console.log("listening on http://localhost:3001");
});
