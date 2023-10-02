import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages';
import Person from './pages/Person';
import Clock from './pages/Clock';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route path='personal' element={<Person/>} />
        <Route path='clock' element={<Clock/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
