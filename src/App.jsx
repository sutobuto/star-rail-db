import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Characters from '/src/pages/Characters/Characters';
import Home from "./pages/Characters/Home";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isCollapsed, setCollapse] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isCollapsed={isCollapsed} setCollapse={setCollapse}/>}/>
        <Route path='/characters' element={<Characters isCollapsed={isCollapsed} setCollapse={setCollapse}/>} />
        {/* <Route path='/lightcones' element={<Lightcones isCollapsed={isCollapsed} setCollapse={setCollapse}/>} />
        <Route path='/relics' element={<Relics isCollapsed={isCollapsed} setCollapse={setCollapse}/>} />
        <Route path='/bosses' element={<Bosses isCollapsed={isCollapsed} setCollapse={setCollapse}/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
