/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onChange }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        time: "",
        location: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        let updatedValue = value;

        // Convert 24-hour time to 12-hour format with AM/PM
        if (name === "time") {
            const [hours, minutes] = value.split(":");
            const date = new Date();
            date.setHours(hours, minutes);
            updatedValue = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
        }

        const updatedFormData = { ...formData, [name]: updatedValue };
        setFormData(updatedFormData);
        onChange(updatedFormData);
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 rounded-2xl w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-white text-center mb-6">Event Details</h2>
            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-white/30 bg-white/20 text-white rounded-lg outline-none focus:border-white/50"
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-white/30 bg-white/20 text-white rounded-lg outline-none focus:border-white/50"
            />
            <input
                type="time"
                name="time"
                value={formData.time.replace(/AM|PM/, "")} // Prevents showing AM/PM in input field
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-white/30 bg-white/20 text-white rounded-lg outline-none focus:border-white/50"
            />
            <p className="text-white text-center mb-3">{formData.time && `Selected Time: ${formData.time}`}</p>
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 mb-3 border border-white/30 bg-white/20 text-white rounded-lg outline-none focus:border-white/50"
            />
            <textarea
                name="description"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border border-white/30 bg-white/20 text-white rounded-lg outline-none focus:border-white/50"
            />
        </div>
    );
};

export default Form;
