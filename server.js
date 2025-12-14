const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
const authRoutes=require("./routes/auth");
app.use("/auth",authRoutes);

const caseRoutes = require("./routes/case");
app.use("/case",caseRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/chefCourtDB")
.then(() => {
  console.log("MongoDB connected successfully");
}).catch(err => {
  console.log("MongoDB connection error:", err);
});

app.get("/", (req, res) => {
  res.send("Chef Court Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});