import { useEffect, useState } from "react";

const RSVPList = () => {
    const [rsvps, setRsvps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRSVPs = async () => {
            try {
                const response = await fetch("https://eventcrafter-backend.onrender.com");
                if (!response.ok) throw new Error("Failed to fetch RSVPs.");
                const data = await response.json();
                setRsvps(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRSVPs();
    }, []);

    if (loading) {
        return <div className="text-white text-center text-lg">Loading RSVPs...</div>;
    }

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-8 rounded-2xl w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold text-white text-center mb-6">RSVP List</h2>
            {error && <div className="text-red-500 text-center font-bold mb-4">{error}</div>}
            <ul className="list-none p-0 space-y-3">
                {rsvps.length === 0 ? (
                    <li className="text-white/70 text-lg italic bg-white/20 p-4 rounded-lg text-center">
                        No RSVPs yet!
                    </li>
                ) : (
                    rsvps.map((rsvp) => (
                        <li
                            key={rsvp._id}
                            className="p-4 bg-white/20 text-white rounded-lg flex justify-between items-center transition hover:bg-white/30"
                        >
                            <span>{rsvp.name}</span>
                            <span
                                className={
                                    rsvp.attending === "Attending"
                                        ? "text-green-400 font-bold"
                                        : "text-red-400 font-bold"
                                }
                            >
                                {rsvp.attending}
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default RSVPList;
