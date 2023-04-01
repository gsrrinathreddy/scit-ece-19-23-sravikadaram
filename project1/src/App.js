import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Aboutus from './pages/Aboutus';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element ={<Aboutus/>}/>
        <Route path="Experience" element ={<Experience/>}/>
        <Route path="Hobbies" element ={<Hobbies/>}/>
        <Route path="Qualifications" element ={<Qualifications/>}/>
        <Route path="Skills" element ={<Skills/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
