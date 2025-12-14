const express = require("express");
const router = express.Router();
const Case = require("../models/Case");

// POST /case/submit
router.post("/submit", async (req, res) => {
  const { title, description, submittedBy, role } = req.body;

  try {
    const newCase = new Case({
      title,
      description,
      submittedBy,
      role
    });

    await newCase.save();
    res.status(201).json({ message: "Case submitted successfully", case: newCase });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

// GET /case/all
router.get("/all", async (req, res) => {
  try {
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PATCH /case/edit/:id  (Judge)
router.patch("/edit/:id", async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedCase) {
      return res.status(404).json({ message: "Case not found" });
    }

    res.status(200).json({ message: "Case updated successfully", case: updatedCase });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// DELETE /case/delete/:id  (Judge)
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);

    if (!deletedCase) {
      return res.status(404).json({ message: "Case not found" });
    }

    res.status(200).json({ message: "Case deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});