import { useState } from "react";

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        attending: "Attending",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://eventcrafter-backend.onrender.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error);
            alert("RSVP Submitted Successfully!");
        } catch (error) {
            console.error("RSVP Submission Error:", error);
            alert(error.message);
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 rounded-2xl w-full max-w-md">
            <h2 className="text-2xl font-semibold text-white text-center mb-6">RSVP Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/20 text-white border border-white/30 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                    <option value="Attending">Attending</option>
                    <option value="Not Attending">Not Attending</option>
                    <option value="Maybe">Maybe</option>
                </select>
                <button
                    type="submit"
                    className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-80 transition"
                >
                    Submit RSVP
                </button>
            </form>
        </div>
    );
};

export default RSVPForm;
