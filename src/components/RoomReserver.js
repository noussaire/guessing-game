import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Reserver() {
  // Simuler l'utilisateur connecté
  const currentUser = { id: 1, name: "Utilisateur 1" };

  // Liste des chambres réservées avec l'ID de l'utilisateur qui les a réservées
  const [roomsReserved, setRoomsReserved] = useState([
    { id: 1, name: "Chambre 101", status: "Réservée", userId: 1 },
    { id: 2, name: "Chambre 102", status: "Réservée", userId: 2 },
    { id: 3, name: "Chambre 103", status: "Disponible", userId: 1 },
    { id: 4, name: "Chambre 104", status: "Réservée", userId: 1 },
  ]);

  // Fonction pour annuler la réservation
  const cancelReservation = (roomId) => {
    setRoomsReserved((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId ? { ...room, status: "Disponible", userId: null } : room
      )
    );
  };

  // Filtrer les chambres réservées par l'utilisateur connecté
  const userRooms = roomsReserved.filter(room => room.userId === currentUser.id && room.status === "Réservée");

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">À propos</h1>
      <p className="lead text-center">Bienvenue sur la page À propos les chambres. Découvrez vos chambres réservées ci-dessous.</p>

      <h2 className="mt-5">Mes Chambres Réservées</h2>
      <ul className="list-group mt-3">
        {userRooms.length > 0 ? (
          userRooms.map((room) => (
            <li key={room.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{room.name}</span>
              <div>
                <span className="badge bg-success me-2">{room.status}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => cancelReservation(room.id)}
                >
                  Annuler
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item text-center">Aucune chambre réservée.</li>
        )}
      </ul>
    </div>
  );
}

const RoomReserver = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mon hôtel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                onClick={() => navigate('/rooms')}
                className="nav-link active">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a 
                onClick={() => navigate('/roomsreserver')}
                className="nav-link">
                  À propos les chambres
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Reserver />
    </div>
  );
};

export default RoomReserver;
