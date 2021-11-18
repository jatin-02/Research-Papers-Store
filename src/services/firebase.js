import { doc, getDoc, collection, query, where, getDocs, collectionGroup  } from "firebase/firestore"
import { firestore } from "../Firebase/config"
export const getPaperByCategory = async (category)=>{
    const docRef = doc(firestore, "researchPapers", category)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
        let paperData
        const data = docSnap.data()
        for(let p in data){
            paperData = data[p]
          }
        return paperData
    } else {
        return new Error('Not Found!')
    }
}
