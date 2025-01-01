import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HotelRooms from './components/HotelRooms';
import RoomReserver from './components/RoomReserver';
import ConfirmationPage from './components/confirmation';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Définir la page Login comme page par défaut */}
          <Route path="/" element={<LoginPage />} />
          {/* Page d'enregistrement */}
          <Route path="/register" element={<RegisterPage />} />
          {/* Page des chambres */}
          <Route path="/rooms" element={<HotelRooms />} />
          {/* Page des chambres RESERVER */}
          <Route path="/roomsreserver" element={<RoomReserver />} />
          {/* Page des chambres confirmation */}
          <Route path="/confirmation/:id" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
