import express from "express";
import RSVP from "../models/RSVP.js";

const router = express.Router();

// Existing code for POST
router.post("/", async (req, res) => {
    try {
      const { name, email, attending } = req.body;
  
      if (!name || !email || !attending) {
        return res.status(400).json({ error: "All fields are required!" });
      }
  
      const newRSVP = new RSVP({ name, email, attending });
      await newRSVP.save();
  
      res.status(201).json({ message: "RSVP submitted successfully!" });
    } catch (error) {
      console.error("RSVP Error:", error);
      res.status(500).json({ error: "Failed to submit RSVP" });
    }
  });
  
  // Add GET method to retrieve RSVPs
  router.get("/", async (req, res) => {
    try {
      const rsvps = await RSVP.find();
      res.status(200).json(rsvps);
    } catch (error) {
      console.error("Error fetching RSVPs:", error);
      res.status(500).json({ error: "Failed to fetch RSVPs" });
    }
  });
  
  export default router;
  