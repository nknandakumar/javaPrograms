import { useState } from "react";
import { Cprograms } from "./constants/c"; // Assuming the file is named cPrograms.js

const CProgramList = () => {
  const [copiedProgramId, setCopiedProgramId] = useState(null);

  const handleCopy = (program) => {
    navigator.clipboard.writeText(program.code);
    setCopiedProgramId(program.id);
    setTimeout(() => setCopiedProgramId(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">c-DS</h1>
      <div className="flex flex-wrap justify-between">
        {Cprograms.map((program) => (
          <div
            key={program.id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 m-2 w-1/4 cursor-pointer"
            onClick={() => handleCopy(program)} // Handle click to copy
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono">{program.name}</h3>
              {copiedProgramId === program.id && (
                <span className="text-red-400 ml-2">Error to open!❌ </span> // Show copied message
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CProgramList;
