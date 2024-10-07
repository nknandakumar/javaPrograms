import { BrowserRouter , Routes ,Route } from "react-router-dom";
import JavaProgramList from "./JavaProgramList";
import CProgramList from "./Cprograms";
import Nav from "./Nav";


function App() {
  return (
     <BrowserRouter>
          <Nav/>
         <Routes>
             <Route path="/" element={<JavaProgramList />} />
             <Route path="/c" element={<CProgramList />} />
             {/* Add more routes as needed */}
         </Routes>
     </BrowserRouter>
  );
}

export default App;


