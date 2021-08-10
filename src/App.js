import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import SpaceSnippet from "./components/space.snippet";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      spaces,
      result.source.index,
      result.destination.index
    );

    setSpaces(items);
  };

  const Space = ({ space, index }) => {
    return (
      <Draggable draggableId={space} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <SpaceSnippet name={space} />
          </div>
        )}
      </Draggable>
    );
  };

  const SpacesList = React.memo(function SpacesList({ spaces }) {
    return spaces.map((space, index) => (
      <Space space={space} index={index} key={space} />
    ));
  });

  const handleDownload = () => {
    const _htmlContent = document.getElementById("root");
    console.log("html>>>>", _htmlContent);
  };

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
        {spaces && spaces.length > 0 && (
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-3 py-2 px-4 rounded"
              onClick={handleDownload}
            >
              Download
            </button>
          </div>
        )}

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <SpacesList spaces={spaces} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
