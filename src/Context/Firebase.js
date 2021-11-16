import { useEffect, createContext, useState } from "react";
import { auth, firestore } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      setUser(res);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthContext, AuthProvider};
