import { doc, getDoc, collection, query, where, getDocs, collectionGroup ,  onSnapshot, FieldPath } from "firebase/firestore"
import { IoMdBook } from "react-icons/io"
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

export const getPaperById = async(id, category)=>{
    const docRef = doc(firestore, "researchPapers", category)

    let fieldPath = new FieldPath(category, 'id');

    const data = docRef.where(fieldPath, '==', id).get().then(snapshot => {
    snapshot.forEach(document => {
        // console.log(`Document contains {'f.o.o' : {'bar' : 42}}`);
        return document
    })
    })
    return data
}
