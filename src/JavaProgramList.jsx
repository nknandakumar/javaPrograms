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
        postfix[j] = '\0';
    }

    int main() {
        char infix[100], postfix[100];
        clrscr();
        printf("Enter the valid infix expression: ");
        scanf("%s", infix);
        infix_postfix(infix, postfix);
        printf("Postfix expression is: ");
        printf("%s\n", postfix);
        getch();
        return 0;
    }
    




*/

    
