require("dotenv").config();
const express = require("express");
const app = express();
const voiceRoutes = require("./routes/voice");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/voice", voiceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
