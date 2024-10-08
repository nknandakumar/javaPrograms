import { useState } from "react";
import { javaPrograms } from "./constants/index"; // Import the array

const JavaProgramList = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">JP</h1>
      <div className="flex flex-wrap justify-between">
        {javaPrograms.map((program) => (
          <div key={program.id} className="bg-gray-800 rounded-lg shadow-lg p-4 m-2 w-1/4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-mono">{program.name}</span>
              <button
                onClick={() => handleCopy(program.code, program.id)}
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  copied === program.id
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {copied === program.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JavaProgramList;






