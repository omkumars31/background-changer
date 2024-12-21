import { useState, useEffect } from "react";


//If you want the background color to persist after refreshing, 
// you can use local storage or a similar persistent storage mechanism.
//Here’s how you can modify your code to use localStorage:

function App() {
  // Retrieve the initial color from localStorage or default to "Olive"
  const [color, setColor] = useState(() => {
    return localStorage.getItem("backgroundColor") || "Olive";
  });

  // Update localStorage whenever the color changes
  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("grey")}
              className="outline-none px-6 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
