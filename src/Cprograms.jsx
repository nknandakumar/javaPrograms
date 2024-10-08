import { useState } from "react";
import { Cprograms } from "./constants/c"; // Assuming the file is named cPrograms.js

const CProgramList = () => {
  const [copiedProgramId, setCopiedProgramId] = useState(null);

  const handleCopy = (program) => {
    navigator.clipboard.writeText(program.code);
    setCopiedProgramId(program.id);
    setTimeout(() => setCopiedProgramId(null), 2000); // Reset copied state after 2 seconds
  };

  const specialProgram = {
    id: 999, // Unique ID for the special program
    name: "-2 Box",
    code: `
    #include <stdio.h>
    #include <string.h>

    int f(char sym) {
        switch (sym) {
            case '+':
            case '-':
                return 2;
            case '*':
            case '/':
                return 4;
            case '^':
            case '$':
                return 5;
            case '(':
                return 0;
            case '#':
                return -1;
            default:
                return 8;
        }
    }

    int g(char sym) {
        switch (sym) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 3;
            case '^':
            case '$':
                return 6;
            case '(':
                return 9;
            case ')':
                return 0;
            default:
                return 7;
        }
    }

    void infix_postfix(char infix[], char postfix[]) {
        int i, j = 0, top = -1;
        char sym, s[20];
        s[++top] = '#';

        for (i = 0; i < strlen(infix); i++) {
            sym = infix[i];

            while (f(s[top]) > g(sym)) {
                postfix[j++] = s[top--];
            }
            if (f(s[top]) != g(sym)) {
                s[++top] = sym;
            } else {
                top--;
            }
        }

        while (s[top] != '#') {
            postfix[j++] = s[top--];
        }
        postfix[j] = '\\0';
    }

    int main() {
        char infix[100], postfix[100];
        clrscr();
        printf("Enter the valid infix expression: ");
        scanf("%s", infix);
        infix_postfix(infix, postfix);
        printf("Postfix expression is: ");
        printf("%s\\n", postfix);
        getch();
        return 0;
    }
    `
  };

  return (
    <div className="h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h1 className="text-3xl text-center font-bold mb-6">Box-Blast💥 </h1>
      <div className="flex flex-wrap justify-between">
        {/* Other C programs */}
        {Cprograms.map((program) => (
          <div
            key={program.id}
            className="bg-gray-800 rounded-lg shadow-lg p-4 m-2 w-1/4 cursor-pointer"
            onClick={() => handleCopy(program)} // Handle click to copy
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-mono">{program.name}</h3>
              {copiedProgramId === program.id && (
                <span className="text-red-400 ml-2">Error to open!! </span> // Show copied message
              )}
            </div>
          </div>
        ))}

        {/* Special program box */}
        <div
          key={specialProgram.id}
          className="bg-gray-800 rounded-lg shadow-lg p-4 m-2 w-1/4 cursor-pointer"
          onClick={() => handleCopy(specialProgram)} // Handle click to copy
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-mono">{specialProgram.name}</h3>
            {copiedProgramId === specialProgram.id && (
              <span className="text-red-400 ml-2">Error to open !!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CProgramList;
