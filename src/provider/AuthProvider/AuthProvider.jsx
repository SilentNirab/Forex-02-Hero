/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config.js"

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth)
    }
    const resetpass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
           return unsubscribe
        }
    },[auth])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        resetpass
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;