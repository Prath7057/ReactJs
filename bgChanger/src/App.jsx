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
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "red" }}
            onClick={() => setBgColor("red")}
          >
            RED
          </button>
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "green" }}
            onClick={() => setBgColor("green")}
          >
            GREEN
          </button>
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "blue" }}
            onClick={() => setBgColor("blue")}
          >
            BLUE
          </button>
          <button
            className="px-4 py-2 text-black rounded"
            style={{ backgroundColor: "#FBBF24" }}
            onClick={() => setBgColor("#E6E6FA")}
          >
            LAVENDER
          </button>
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#38BDF8" }}
            onClick={() => setBgColor("#38BDF8")}
          >
            SKY BLUE
          </button>
          <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: "#F87171" }}
            onClick={() => setBgColor("#F87171")}
          >
            CORAL
          </button>
          <button
            className="px-4 py-2 text-black rounded"
            style={{ backgroundColor: "#5EEAD4" }}
            onClick={() => setBgColor("#5EEAD4")}
          >
            MINT GREEN
          </button>
          <button
            className="px-4 py-2 text-black rounded"
            style={{ backgroundColor: "#FACC15" }} 
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
