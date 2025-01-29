import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("#E6E6FA");

  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: bgColor }}
      >
        {/* Buttons in a single row */}
        <div className="flex flex-row flex-wrap gap-4 justify-center">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setBgColor("red")}
          >
            RED
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setBgColor("green")}
          >
            GREEN
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setBgColor("blue")}
          >
            BLUE
          </button>
          <button
            className="px-4 py-2 bg-purple-300 text-black rounded"
            onClick={() => setBgColor("#E6E6FA")}
          >
            LAVENDER
          </button>
          <button
            className="px-4 py-2 bg-sky-400 text-white rounded"
            onClick={() => setBgColor("#38BDF8")}
          >
            SKY BLUE
          </button>
          <button
            className="px-4 py-2 bg-rose-400 text-white rounded"
            onClick={() => setBgColor("#F87171")}
          >
            CORAL
          </button>
          <button
            className="px-4 py-2 bg-teal-300 text-black rounded"
            onClick={() => setBgColor("#5EEAD4")}
          >
            MINT GREEN
          </button>
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded"
            onClick={() => setBgColor("#FACC15")}
          >
            SUNFLOWER YELLOW
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
