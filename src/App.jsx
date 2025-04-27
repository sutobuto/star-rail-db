import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from '/src/pages/Characters/Characters';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Characters />}/>
        <Route path='/characters' element={<Characters />}/>
      </Routes>
    </Router>
  )
}

export default App
