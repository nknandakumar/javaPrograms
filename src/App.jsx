import { BrowserRouter , Routes ,Route } from "react-router-dom";
import JavaProgramList from "./JavaProgramList";
import CProgramList from "./Cprograms";


function App() {
  return (
     <BrowserRouter>
       
         <Routes>
             <Route path="/c" element={<JavaProgramList />} />
             <Route path="/" element={<CProgramList />} />
             {/* Add more routes as needed */}
         </Routes>
     </BrowserRouter>
  );
}

export default App;


