import  { useState } from "react";
import { javaPrograms } from "./constants/index"; // Import the array

const JavaProgramList = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Java Programs</h1>
      <ul className="list-disc">
        {javaPrograms.map((program) => (
          <li key={program.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{program.name}</span>
              <button
                onClick={() => handleCopy(program.code, program.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {copied === program.id ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JavaProgramList;
