import { useEffect, createContext, useState, useContext } from "react";
import { auth, firestore } from "../Firebase/config";
import { onAuthStateChanged } from "@firebase/auth";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      setUser(res)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ 
      user, setUser, 
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = ()=>{
  return useContext(AuthContext)
}
export { AuthContext, AuthProvider};
