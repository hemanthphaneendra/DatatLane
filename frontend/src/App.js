import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from "./hooks/useAuthContext";
import './App.css';
import Navbar from './components/Navbar';
import SupportWork from './pages/SupportWork';
import Training from './pages/Training';
import Projects from './pages/Projects';
import POC from './pages/POC';
import ProjectPostings from './pages/ProjectPostings';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import OtpForm from './pages/OtpForm';

function App() {
  const { user } = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
        <Routes>
            <Route path = "/" element={ user ? <SupportWork /> : <Navigate to="/login" /> }/>
            <Route path = "/training" element={ user ? <Training /> : <Navigate to="/login" /> }/>
            <Route path = "/project" element={ user ? <Projects /> : <Navigate to="/login" /> }/>
            <Route path = "/poc" element={ user ? <POC /> : <Navigate to="/login" /> }/>
            <Route path = "/postings" element={ user ? <ProjectPostings /> : <Navigate to="/login" /> }/>
            <Route path = "/chat" element={ user ? <Chat /> : <Navigate to="/login" /> }/>
            <Route path = "/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path = "/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path = "/sendEmail" element={!user ? <OtpForm /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
