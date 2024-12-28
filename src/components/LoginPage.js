import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Données JSON locales simulant une base de données d'utilisateurs
  const users = [
    { email: 'admin@hotel.com', password: 'admin', role: 'admin' },
    { email: 'user1@hotel.com', password: 'user1', role: 'user' },
    { email: 'user2@hotel.com', password: 'user2', role: 'user' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Trouver l'utilisateur correspondant
    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      // Rediriger en fonction du rôle
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/rooms');
      }
    } else {
      setError('Email ou mot de passe incorrect');
    }


    //////////////////////////////////////////////////////////////

    //////////// POUR AHMED ET BADRE : HNA FIN TATGIB INFO D LES UTILATION BACH TCHEAKIHOM


    // try {
    //     const response = await fetch('https://api.example.com/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         email: credentials.email,
    //         password: credentials.password,
    //       }),
    //     });
  
    //     const data = await response.json();
  
    //     if (data.success) {
    //       // Si la connexion réussit, rediriger en fonction du rôle
    //       if (data.role === 'admin') {
    //         navigate('/admin');
    //       } else {
    //         navigate('/rooms');
    //       }
    //     } else {
    //       setError('Email ou mot de passe incorrect');
    //     }
    //   } catch (error) {
    //     setError('Une erreur est survenue lors de la connexion');
    //   }
      //////////////////////////////////////////////////////////////////
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Card style={{ width: '100%', maxWidth: 400, padding: '20px' }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Connexion à HotelStar
          </Typography>
          
          {error && (
            <Alert severity="error" style={{ marginBottom: '20px' }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <TextField
                label="Mot de passe"
                type="password"
                fullWidth
                variant="outlined"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginBottom: '20px' }}
            >
              Se connecter
            </Button>
          </form>

          <Typography variant="body2" align="center">
            Pas encore de compte ?{' '}
            <Button
              color="secondary"
              onClick={() => navigate('/register')}
              style={{ textTransform: 'none' }}
            >
              S'inscrire
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
