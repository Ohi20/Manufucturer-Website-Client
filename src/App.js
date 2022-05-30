import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Appointment/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase" element={<Purchase></Purchase>} />
        
      </Routes>
    </div>
  );
}

export default App;
