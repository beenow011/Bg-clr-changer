import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <span className="flex text-white justify-center m-auto py-8 font-bold ">
        Background changer
      </span>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-5 py-5 text-white ">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-7 py-3 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-7 py-3 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-7 py-3 rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-7 py-3 rounded-full"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
