import * as React from 'react';
import TextField from '@mui/material/TextField';
import Loader from '../../components/Loader';
import ErrorAlert from '../../components/ErrorAlert';
import SuccessAlert from '../../components/SuccessAlert';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/features/authSlice';


function LoginPage() {

    const dispatch = useDispatch();

    // A state to manage errors
    const [error, setError] = React.useState('');
    // A state to manage loading
    const [loading, setLoading] = React.useState(false);
    // A state to manage success
    const [success, setSuccess] = React.useState(false);

    // Function to log the admin in
    const handleLogin = async (e) => {
        try {
            // Reinitializing every value
            e.preventDefault();
            setLoading(true);
            setError(false);
            setSuccess(false);


            window.location.replace('/admin/login#title');

            const form = e.target;
            const formData = new FormData(form);

            const email = formData.get('email');
            const password = formData.get('password');

            const response = await fetch('/api/user/verify',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            const data = await response.json();

            if (response.status === 200) {
                console.log(data);

                dispatch(login(data));
                
                setTimeout(() => {
                    setLoading(false);
                    setSuccess(true);
                    window.location.replace('/admin');
                }, 2000);
            }
            else if(response.status === 404) {
                console.log(data);
                throw new Error('Email ou mot de passe invalide!');
            }
            else {
                console.log(data);
                throw new Error('Un problème est intervenu lors de la connexion. Veuillez réessayer plus tard.');
            }

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center py-32">
            <h1 className="text-center text-2xl lg:text-3xl font-bold my-3" id="title">Se connecter</h1>
            {error && <ErrorAlert>{error}</ErrorAlert>}
            {loading && <Loader size={40} color="#18181b" />}
            {success && <SuccessAlert>Connexion réussie!</SuccessAlert>}
            <form id="loginForm" className='my-11 min-h-96 p-2 lg:p-5 w-3/4 lg:w-1/4 bg-white rounded-lg flex flex-col' onSubmit={handleLogin}>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="example@gmail.com"
                    name='email'
                    style={{margin: '30px'}}
                />
                <TextField
                    id="outlined-password-input"
                    label="Mot de passe"
                    type="password"
                    placeholder='Mot de passe'
                    name="password"
                    style={{margin: '30px'}}
                />
                <button className='p-3 rounded-lg bg-black text-white' type="submit" form="loginForm" style={{marginTop: '20px', marginBottom: '10px', marginLeft:'60px', marginRight:'60px'}}>Soumettre</button>
            </form>
        </div>
    );
}

export default LoginPage;