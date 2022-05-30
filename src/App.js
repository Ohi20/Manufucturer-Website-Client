import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Appointment/Purchase';
import Dashboard from './Pages/Dashboard';
import NotFound from './Pages/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Requireauth from './Pages/Login/Requireauth';
import { ToastContainer  } from 'react-toastify';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/purchase" element={<Requireauth><Purchase></Purchase></Requireauth>} />
        <Route path="/dashboard" element={<Requireauth><Dashboard></Dashboard></Requireauth>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="*" element={<NotFound></NotFound>} />
        
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
