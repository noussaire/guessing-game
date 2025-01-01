import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ConfirmationPage = () => {
  const { id } = useParams(); // Récupère l'ID de la chambre réservée
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /// HNA 9lb 3la chambre b id dyalha ou bdl liha etas dyalha ou ajoute had date de depar ou finish f data
    alert('Réservation confirmée pour la chambre ' + id + ' !');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Réserver la chambre {id}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Date d'arrivée</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) =>
              setBookingData({ ...bookingData, checkIn: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label>Date de départ</label>
          <input
            type="date"
            className="form-control"
            onChange={(e) =>
              setBookingData({ ...bookingData, checkOut: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label>Nombre de personnes</label>
          <input
            type="number"
            min="1"
            className="form-control"
            onChange={(e) =>
              setBookingData({ ...bookingData, guests: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label>Demandes spéciales</label>
          <textarea
            className="form-control"
            onChange={(e) =>
              setBookingData({
                ...bookingData,
                specialRequests: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirmer la réservation
        </button>
      </form>
    </div>
  );
};

export default ConfirmationPage;
