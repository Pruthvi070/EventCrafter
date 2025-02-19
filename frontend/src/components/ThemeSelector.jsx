/* eslint-disable react/prop-types */
import { useState } from "react";

const ThemeSelector = ({ setTheme }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const handleThemeChange = (theme) => {
    setTheme(theme);
    setSelectedTheme(theme);
  };

  return (
    <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white text-center mb-4">Select Theme</h2>
      <div className="flex justify-center gap-3">
        <button
          onClick={() => handleThemeChange("bg-blue-500")}
          className={`p-3 rounded-lg transition-all duration-300 ${selectedTheme === "bg-blue-500" ? "bg-blue-500 text-white" : "bg-blue-300 hover:bg-blue-400 text-black"}`}
        >
          Blue
        </button>
        <button
          onClick={() => handleThemeChange("bg-green-500")}
          className={`p-3 rounded-lg transition-all duration-300 ${selectedTheme === "bg-green-500" ? "bg-green-500 text-white" : "bg-green-300 hover:bg-green-400 text-black"}`}
        >
          Green
        </button>
        <button
          onClick={() => handleThemeChange("bg-red-500")}
          className={`p-3 rounded-lg transition-all duration-300 ${selectedTheme === "bg-red-500" ? "bg-red-500 text-white" : "bg-red-300 hover:bg-red-400 text-black"}`}
        >
          Red
        </button>
      </div>
    </div>
  );
};

export default ThemeSelector;
