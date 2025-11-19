import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    //googleSignIn
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const information = {
        user,
        setUser,
        loading,
        setLoading,
        signInWithGoogle
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