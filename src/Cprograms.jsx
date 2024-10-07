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
      <h1 className="text-3xl font-bold mb-6">Turbo C++ Programs</h1>
      <div className="flex flex-wrap justify-between">
        {Cprograms.map((program) => (
          <div key={program.id} className="bg-gray-800 rounded-lg shadow-lg p-4 m-2 w-1/4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono">{program.name}</h3>
              <button
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  copiedProgramId === program.id
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
                onClick={() => handleCopy(program)}
              >
                {copiedProgramId === program.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CProgramList;
