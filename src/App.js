import { useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import UploadForm from './components/Title/UploadForm'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default App
