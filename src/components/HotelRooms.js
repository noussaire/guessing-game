import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Données initiales des chambres
const rooms = [
  {
    id: 101,
    title: "Chambre 101",
    available: true,
    price: 80,
    details: "Chambre Standard - Vue sur jardin",
    image: "data:image/jpeg;base64,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", // Remplacez par l'URL réelle de l'image
        surface: "25m²",
        type: "Chambre Standard",
        lits: "1 lit double",
        vue: "Vue sur jardin",
        equipements: ["WiFi", "TV", "Climatisation", "Mini-bar"]
    },
  {
    id: 102,
    title: "Chambre 102",
    available: true,
    price: 100,
    details: "Chambre Supérieure - Vue sur piscine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbCTM_i8wW41rYmyV_eBEqZIZWaJZF9gw9Jon4c74QI96w6dRLWjphapOgJ3yzRrmtfs&usqp=CAU", // Remplacez par l'URL réelle de l'image
    
        surface: "30m²",
        type: "Chambre Supérieure",
        lits: "2 lits simples",
        vue: "Vue sur piscine",
},
  {
    id: 103,
    title: "Chambre 103",
    available: false,
    price: 300,
    details: "Chambre Supérieure - deux personne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZya6RjRh-Fq0DIZzOmQZesbVRNTm-QCI9-D7wbHdUtyx0UTtOOX447UcDQ5Y6to7-vZ0&usqp=CAU",
    
        surface: "35m²",
        type: "Suite Junior",
        lits: "1 lit king-size",
        vue: "Vue sur mer",
    },
];

const RoomList = () => {

    //liaison avec mongodb cette partie pour ahmed est badre 
    // const [rooms, setRooms] = useState([]);  

    // // Charger les chambres depuis le back-end (API)
    // useEffect(() => {
    //   fetch('http://localhost:5000/api/rooms') 
    //     .then(response => response.json())
    //     .then(data => setRooms(data));
    // }, []);

    // const handleReservation = (id) => {
    //     fetch(`http://localhost:5000/api/rooms/${id}/reserve`, {
    //       method: 'PUT',  // Utilise PUT pour mettre à jour la chambre (réservation)
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data.room) {
    //           // Si la réservation est réussie, on met à jour l'état local pour refléter les changements
    //           setRooms(prevRooms =>
    //             prevRooms.map(room =>
    //               room.id === id ? { ...room, available: false } : room
    //             )
    //           );
    //         } else {
    //           alert(data.message);  // Afficher un message si la chambre ne peut pas être réservée
    //         }
    //       });
    //   };


/////////////////////////////////////////////////////////////////

  const navigate = useNavigate();
  const [roomsState, setRoomsState] = useState(rooms);

  // Fonction pour gérer la réservation de la chambre
  const handleReservation = (id) => {
    const room = roomsState.find((room) => room.id === id); // Trouve la chambre par ID
    if (room) {
      navigate(`/confirmation/${id}`)
    }
  };
  
        const [isVisible, setIsVisible] = useState(null); // Etat pour contrôler l'affichage du détail

  
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Nos Chambres</h1>
      <div className="row">
        {roomsState.map((room) => (
          <div className="col-md-4 mb-4" key={room.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={room.image}
                className="card-img-top"
                alt={room.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{room.title}</h5>
                <p className="card-text text-muted">{room.details}</p>
                <p>
                  <strong>{room.price}€ / nuit</strong>{" "}
                  <span
                    className={`badge ${
                      room.available ? "bg-success" : "bg-danger"
                    } ms-2`}
                  >
                    {room.available ? "Disponible" : "Occupée"}
                  </span>
                </p>
                <div className="mt-auto">
                  {room.available ? (
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleReservation(room.id)}
                    >
                      Réserver
                    </button>
                  ) : (
                    <button className="btn btn-secondary" disabled>
                      Réservée
                    </button>
                  )}
                  <button className="btn btn-secondary"
                   onClick={() => setIsVisible(room.id === isVisible ? null : room.id)}
                  >
                    {room.id === isVisible ? 'Masquer détails' : 'Afficher détails'}
                  </button>
                  {room.id === isVisible && (
                 <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                 <h3 className="font-bold mb-2">{room.type}</h3>
                 <ul className="space-y-2 text-sm">
                   <li>• Surface: {room.surface}</li>
                   <li>• Lits: {room.lits}</li>
                   <li>• Vue: {room.vue}</li>
                 </ul>
               </div>
            )}        
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mon hotel
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
                  À propos les chambre
                </a>
              </li>
              <li className="nav-item">
          <button 
                onClick={() => navigate('/')} 
              className="btn btn-danger nav-link"
             >
         log out 
        </button>
        </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header 
  className="text-white text-center py-5" 
  style={{
    backgroundImage: 'url(https://static1.squarespace.com/static/66156579a7ea021aab9c4620/t/671a26c76fa22b2d6e67a715/1729767112138/Copie+de+Copie+de+horizontal+blog+-+2024-10-22T202924.023.jpg)', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
      height: '50vh'
  }}
>
  <div>
    <h1>Bienvenue sur HOTELSTAR</h1>
    <p className="lead">Un espace pour reservation des chambres</p>
  </div>
</header>

      {/* Chambre List */}
      <RoomList />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">&copy; 2024 Mon Blog - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default BlogPage;
