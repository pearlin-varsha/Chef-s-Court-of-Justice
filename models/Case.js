const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  title: String,
  description: String,
  submittedBy: String, // email of the defendant/plaintiff
  role: { type: String, enum: ["defendant", "plaintiff"] },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Case", CaseSchema);