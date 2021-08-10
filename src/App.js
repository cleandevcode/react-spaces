import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import SpaceSnippet from "./components/space.snippet";

function App() {
  const [space, setSpace] = useState("");
  const [spaces, setSpaces] = useState([]);

  const handleChangeText = (e) => {
    setSpace(e.target.value);
  };

  const handleGenerate = () => {
    let _spaces = space.replace(/,\s*$/, "").split(",");
    setSpaces(_spaces);
  };

  console.log("spaces>>>", spaces);

  return (
    <div className={`mt-4 w-screen `}>
      <div className="flex items-center justify-center">
        <Input
          id="space"
          placeholder="Enter the space name..."
          label="space"
          onChange={handleChangeText}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 px-4 rounded"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
      <div className="p-10">
        {spaces.map((item, idx) => (
          <div key={idx}>
            <SpaceSnippet name={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
