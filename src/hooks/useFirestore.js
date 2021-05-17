import { useState, useEffect } from 'react'
import { firebaseFirestore } from '../firebase/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])
  console.log('docs', docs)
  useEffect(() => {
    const unsub = firebaseFirestore
      .collection(collection)
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        })
        setDocs(documents)
      })

    return () => unsub()
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection])

  return { docs }
}

export default useFirestore
