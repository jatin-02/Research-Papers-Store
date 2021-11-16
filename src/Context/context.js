
import { useEffect, createContext, useState, useContext } from "react"
import { auth, firestore } from "../Firebase/config"
import { doc, getDoc } from "firebase/firestore"

const AppContext = createContext()
const AppProvider = ({children})=>{
  const [paperData, setPaperData] = useState([])

  const getData = async () => {
    const docRef = doc(firestore, "researchPapers", "papers")
    try {
      const doc = await getDoc(docRef)
      setPaperData(()=>doc.data())
    } catch (e) {
      console.log("Error getting cached document:", e)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return(
    <AppContext value = {{
      paperData
    }}>
      {children}
    </AppContext>
  )
}

export const useGlobalContext = ()=>{
  return useContext(AppContext)
}
export {AppContext, AppProvider}