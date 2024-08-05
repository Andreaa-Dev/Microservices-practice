import express from "express";

const app = express();

app.get("/", async (_, response) => {
  const res = await fetch("http://service-b").then((res) => res.json());

  response.json({ message: "This is service a" + res.message });
});

app.listen(5000, () => {
  console.log("service a is running");
});
