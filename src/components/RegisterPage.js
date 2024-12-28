import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@mui/material'; // Correction: pas de CardTitle
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }
    // Ajoutez ici la logique pour enregistrer les informations dans la base de données
    navigate('/');

///////////////////////////////////////////////////////////////////////////////////
/////POUR AHMED : HNA FI TATSIF LES INFO B  REQUET LL BACKE END 


    // try {
    //   // Envoyer les données au backend avec une requête POST
    //   const response = await fetch('http://localhost:5000/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   });
  
    //   const data = await response.json();
    //   if (response.ok) {
    //     // Si l'inscription réussie, rediriger l'utilisateur vers la page de login
    //     navigate('/login');
    //   } else {
    //     // Sinon, afficher l'erreur
    //     setError(data.error || 'Une erreur s\'est produite');
    //   }
    // } catch (error) {
    //   setError('Erreur lors de l\'enregistrement');
    //   console.error(error);
    // }
  };
///////////////////////////////////////////////////////////////

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader title="Créer un compte" /> {/* Utilisation de CardHeader pour afficher un titre */}
        <CardContent>
          {error && (
            <Alert severity="error" className="mb-4">
              <AlertTitle>Erreur</AlertTitle>
              {error}
            </Alert>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <TextField
                label="Nom complet"
                variant="outlined"
                fullWidth
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <br/>
            <div className="space-y-2">
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <br/>
            <div className="space-y-2">
              <TextField
                label="Mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>
            <br/>
            <div className="space-y-2">
              <TextField
                label="Confirmer le mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
              />
            </div>
            <br/>
            <Button type="submit" variant="contained" color="primary" fullWidth >
              S'inscrire
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Déjà un compte ?{' '}
                <button
                  onClick={() => navigate('/')}
                  className="text-blue-600 hover:underline"
                >
                  Se connecter
                </button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
