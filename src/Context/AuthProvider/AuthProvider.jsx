import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const user = {}
    const information = {
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext value={information}>
            {
                children
            }
        </AuthContext>
    );
};

export default AuthProvider;