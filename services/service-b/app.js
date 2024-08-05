import express from "express";

const app = express();

app.get("/", (_, response) => {
  response.json({ message: "This is service b" });
});

app.listen(5000, () => {
  console.log("service b is running");
});
