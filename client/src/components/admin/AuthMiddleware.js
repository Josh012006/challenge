import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';


const AuthMiddleware = () => {
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.auth.isAuth);

    if (location.pathname !== '/admin/login' && !isAuthenticated) {
        // Redirige vers /admin/login si l'utilisateur n'est pas authentifié
        return <Navigate to="/admin/login" />;
    }

    // Rend les routes enfants uniquement si authentifié
    return (
        <Outlet />
    );
};

export default AuthMiddleware;
