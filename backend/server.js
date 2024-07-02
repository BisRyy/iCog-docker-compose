const express = require("express");
const app = express();

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Backend!" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
