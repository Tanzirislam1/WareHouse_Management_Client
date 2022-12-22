import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const RequiredAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className='spiner_container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img className='spiner_gif' style={{ height: '200px', width: 'auto' }} src="https://i.ibb.co/HV59wsq/giphy.gif" alt="spiner" />
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/login' state={{ form: location }}></Navigate>
    }

    return children;
};

export default RequiredAuth;