import { collection, query, getDocs } from 'firebase/firestore/lite';
import db from '@/config/firebase.config'

export async function getPets() {
  const q = query(collection(db, 'pets'))
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => doc.data())
}


export default getPets

