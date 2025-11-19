import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return <Navigate
        state={location?.pathname} to={'/login'}>
    </Navigate>
};

export default PrivateRoute;