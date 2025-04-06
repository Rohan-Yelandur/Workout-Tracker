const express = require("express")
const router = express.Router()

// GET all workouts
router.get("/", (req, res) => {
    res.json({mssg: "GET all workouts"})
})

// GET a single workout
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single workout"})
})

// CREATE a new workout
router.post("/", (req, res) => {
    res.json({mssg: "CREATE a new workout"})
})

// DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a workout"})
})

// EDIT a workout
router.patch("/:id", (req, res) => {
    res.json({mssg: "EDIT a workout"})
})

module.exports = router