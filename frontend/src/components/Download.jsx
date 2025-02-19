/* eslint-disable react/prop-types */
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Download = ({ previewRef }) => {
    const handleDownload = () => {
        html2canvas(previewRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
            pdf.save("event-invitation.pdf");
        });
    };

    return (
        <button
            onClick={handleDownload}
            className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold tracking-wide shadow-lg hover:opacity-90 transition-all duration-300"
        >
            Download as PDF
        </button>
    );
};

export default Download;
