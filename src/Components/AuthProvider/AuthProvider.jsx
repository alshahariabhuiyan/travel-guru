import React, { createContext,useEffect,useState } from 'react';
import { FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    
useEffect(() => {
    fetch('area.json')
    .then(res => res.json())
    .then(data => setData(data))
},[])
const [data,setData] = useState([]) 
const auth  = getAuth(app)
const provider = new GoogleAuthProvider();
const FbProvider = new FacebookAuthProvider()
const [loading, setLoading] = useState(true)
const [user,setUser] = useState(null)  
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
const Signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email,password)
}
const googleSignUp = () => {
    setLoading(true)
   return signInWithPopup(auth, provider)
}
const FbSignUp = () => {
    setLoading(true)
    return signInWithPopup(auth ,FbProvider )
}
const logout = ()=> {
    return signOut(auth)
}

useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentuser => {
        setUser(currentuser)
        setLoading(false)
        
    })
    return () => {
        unsuscribe()
    }
},[])
const authInfo = {
    user,
    loading,
    createUser,
    Signin,
    googleSignUp,
    FbSignUp,
    logout,
data,

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;