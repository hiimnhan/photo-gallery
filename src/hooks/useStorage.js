import { useState, useEffect } from 'react'
import {
  firebaseStorage,
  firebaseFirestore,
  timestamp,
} from '../firebase/config'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = firebaseStorage.ref(file.name)
    const collectionRef = firebaseFirestore.collection('images')
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (error) => {
        setError(error)
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        const createAt = timestamp()
        collectionRef.add({ url, createAt })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, error, url }
}

export default useStorage
