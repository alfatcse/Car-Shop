import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            console.log(currentuser);
            setUser(currentuser);
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authinfo = {
        user,
        loading,
        createUser,

    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;