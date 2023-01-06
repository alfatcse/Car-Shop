import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendPasswordResetEmail,onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }
    const passReset=(email)=>{
        return sendPasswordResetEmail(auth,email);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log(currentuser);
            setUser(currentuser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authinfo = {
        user,
        loading,
        createUser,
        login,
        loading,
        logOut,
        googleSignin,
        passReset
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;