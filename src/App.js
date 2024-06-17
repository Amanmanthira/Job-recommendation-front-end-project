import './App.css';
import { BrowserRouter as Router ,Routes, Route,} from 'react-router-dom';
import Mainpage from './Mainpage';
import Signin from './frontend/login/Signin';
import Bestjobs from './frontend/bestjobs/Bestjobs';
import Dashboard from './frontend/dashboard/Dashboard';
import Contact from './frontend/contact/Contact';
import Register from './frontend/signup/Register';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Mainpage/>} />
      <Route path="Login" element={<Signin/>} />
      <Route path="Bestjobs" element={<Bestjobs/>} />
      <Route path="signup" element={<Register/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="contact" element={<Contact/>} />






    </Routes>
  </Router>
  );
}

export default App;
