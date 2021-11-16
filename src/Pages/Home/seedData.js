
import {default as asub1} from "../../Data/Astronomy/sub1";
import {default as asub2} from "../../Data/Astronomy/sub2";

import {default as bsub1} from '../../Data/Biology/sub1'
import {default as bsub2} from '../../Data/Biology/sub2'
import {default as bsub3} from '../../Data/Biology/sub3'

import {default as csub1} from '../../Data/Chemistry/sub1'
import {default as csub2} from '../../Data/Chemistry/sub2'
import {default as csub3} from '../../Data/Chemistry/sub3'

import {default as msub1} from '../../Data/Maths/sub1'
import {default as msub2} from '../../Data/Maths/sub2'
import {default as msub3} from '../../Data/Maths/sub3'

import {default as psub1} from '../../Data/Physics/sub1'
import {default as psub2} from '../../Data/Physics/sub2'
import {default as psub3} from '../../Data/Physics/sub3'

import {default as cssub1} from '../../Data/ComputerScience/sub1'
import {default as cssub2} from '../../Data/ComputerScience/sub2'
import {default as cssub3} from '../../Data/ComputerScience/sub3'

// importing firebase
import { collection, doc, setDoc} from "firebase/firestore";
import { firestore } from "../../Firebase/config";

export const seedData = async()=>{
    console.log("seeding data")
    const docRef = collection(firestore, "researchPapers");
    await setDoc(doc(docRef, "papers"), {
      astronomy: [...asub1, ...asub2],
      biology: [...bsub1, ...bsub2, ...bsub3],
      chemistry: [...csub1, ...csub2, ...csub3],
      computerScience: [...cssub1, ...cssub2, ...cssub3],
      maths: [...msub1, ...msub2, ...msub3],
      physics: [...psub1, ...psub2, ...psub3],
    });
}
