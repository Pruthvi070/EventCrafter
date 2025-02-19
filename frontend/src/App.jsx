import { useState, useRef } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import ThemeSelector from "./components/ThemeSelector";
import Download from "./components/Download";
import RSVPForm from "./components/RSVPForm";
import RSVPList from "./components/RSVPList";

const App = () => {
  const [formData, setFormData] = useState({});
  const [theme, setTheme] = useState("bg-gradient-to-br from-blue-500 to-purple-600");
  const previewRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-8">
      <h1 className="text-5xl font-extrabold text-white mb-10 tracking-wide">
      EventCrafter
      </h1>

      {/* RSVP Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <RSVPForm />
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <RSVPList />
        </div>
      </div>

      {/* Invitation Form & Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
          <Form onChange={setFormData} />
        </div>
        <div ref={previewRef} className={`p-8 rounded-2xl shadow-xl border border-white/20 ${theme}`}>
          <Preview formData={formData} theme={theme} />
        </div>
      </div>

      {/* Theme Selector & Download */}
      <div className="mt-12 flex flex-col items-center">
        <ThemeSelector setTheme={setTheme} />
        <Download previewRef={previewRef} />
      </div>
    </div>
  );
};

export default App;
