import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

const ref = collection(db, "shoppingList")

export const addItem = async (item) => {
  await addDoc(ref, item)
}

export const getItems = async () => {
  const snapshot = await getDocs(ref)
  return snapshot.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

export const removeItem = async (id) => {
  await deleteDoc(doc(db, "shoppingList", id))
}