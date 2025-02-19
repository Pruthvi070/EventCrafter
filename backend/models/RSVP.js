import mongoose from "mongoose";

const RSVPschema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  attending: { type: String, required: true },
}, { timestamps: true });

const RSVP = mongoose.model("RSVP", RSVPschema);

export default RSVP;
