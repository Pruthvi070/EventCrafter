/* eslint-disable react/prop-types */
const Preview = ({ formData, theme }) => {
    return (
        <div
            className={`p-8 rounded-2xl shadow-2xl max-w-lg mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-3xl ${theme}`}
            style={{
                background: "rgba(255, 255, 255, 0.1)", // Glassmorphic effect
                backdropFilter: "blur(15px)", // Background blur effect
                WebkitBackdropFilter: "blur(15px)", // Safari compatibility
                border: "1px solid rgba(255, 255, 255, 0.3)", // Soft border
            }}
        >
            {/* Event Title with modern gradient */}
            <h2 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                {formData.title || "Event Title"}
            </h2>

            {/* Date & Time in a soft glassy pill */}
            <div className="mt-3 flex justify-center">
                <span className="px-4 py-2 bg-white/20 text-white rounded-full text-lg font-medium shadow-md">
                    {formData.date || "Date"} | {formData.time || "Time"}
                </span>
            </div>

            {/* Location emphasized with spacing */}
            <p className="mt-3 text-lg text-white font-medium text-center">
                📍 {formData.location || "Location"}
            </p>

            {/* Animated description */}
            <p className="mt-5 text-white text-base text-center opacity-90 transition-opacity duration-500">
                {formData.description || "Event Description"}
            </p>
        </div>
    );
};

export default Preview;
