import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    //creatingUserWithEmail and Password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signInWithEmailAndPassword
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //googleSignIn
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // handling the signOut Button 
    const logOut = () => {
        return signOut(auth);
    }
    //setting up the observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        };
    }, [])
    //? Setting up the context for the information
    const information = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut
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