import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/client";

const AuthContext = createContext ({})

export const useAuth = () => useContext (AuthContext)

export const AuthContextProvider = ( ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    //Use Effect sets up the user in the context in case it exists
    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, ((user) => {
            if (user){
                setUser({
                    uid: user.uid,
                    email: user.email,
                })
            }
            else {
                setUser(null)
            }
        setLoading(false)
        }))
        return () => unsubscribe()
    }, [])

     const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
     const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
     const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, login, logout, signUp}}>{loading ? null : children}</AuthContext.Provider>
    )
})


