import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  return (
    
    <div
      className="w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className=" text-4xl  text-center">Change background Color Clicking Buttons</h1>
      <h3 className=" text-6xl  text-center text-green-600 mt-7" >Your Welcome</h3>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-2 py-2
        rounded-2xl"
        >
          <button
           onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
          onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "yellow" }}
          >
          Yellow
          </button>

          <button
          onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
          onClick={()=>setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
          onClick={()=>setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
          onClick={()=>setColor("black")}

            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
          onClick={()=>setColor("coral")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>
          <button
          onClick={()=>setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
          onClick={()=>setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  
  );
}

export default App;
