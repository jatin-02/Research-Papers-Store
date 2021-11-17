import { useEffect, createContext, useState, useContext } from "react";
import { auth, firestore } from "../Firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [paperData, setPaperData] = useState([])
  const [loading, setLoading] = useState(true)
  const [eachPaperData, setEachPaperData] = useState([])

  const getData = async () => {
    const docRef = doc(firestore, "researchPapers", "papers")
    try {
      const doc = await getDoc(docRef)
      setPaperData(doc.data())
      setLoading(false)
    } catch (e) {
      console.log("Error getting cached document:", e)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      setUser(res);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ 
      user, setUser, 
      paperData, loading, setLoading,
      eachPaperData, setEachPaperData
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalContext = ()=>{
  return useContext(AuthContext)
}
export { AuthContext, AuthProvider};
