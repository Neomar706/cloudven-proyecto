import { Contact } from './pages/Contact';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import Plans from './pages/Plans';
import { AboutUs } from './pages/AboutUs';
import { ProgrammingServices } from './pages/ProgrammingService';
import { AdminLogin } from './pages/AdminLogin';
import { Admin } from './pages/Admin';
import { PrivateRoute } from './components/PrivateRoute';
import { useState } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <div className="h-screen w-full bg-gray-100">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/programming-service" element={<ProgrammingServices />} />
            <Route path="/admin-login" element={<AdminLogin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />

            <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Routes>

          <Footer />
        </div>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  )
}