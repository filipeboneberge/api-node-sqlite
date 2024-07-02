import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server listening on port 3030!" });
});

app.listen(3030, () => console.log("Server listening on port 3030!"));
