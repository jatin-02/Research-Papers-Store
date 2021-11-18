import { doc, getDoc, collection, query, where, getDocs  } from "firebase/firestore"
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

export const getPaperById = async(id)=>{
  
    const q = query(collection(firestore, "researchPapers"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    return doc.data()
    });
}