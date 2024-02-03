/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const axiosPublic =useAxiosPublic()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        return signOut(auth)
    }
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup (auth,githubProvider)
    }
    const profileUpdate = (name,photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/api/v1/jwt',userInfo)
                .then(res=> {
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
       return () => unsubscribe;
    },[axiosPublic])

    const authInfo = { user, loading,createUser,login,logout,googleLogin,githubLogin,profileUpdate }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;