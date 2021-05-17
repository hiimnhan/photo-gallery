import React, { useState } from 'react'
import ProgressBar from '../../ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg']

  const changeImageHandler = (e) => {
    let selected = e.target.files[0]

    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form className='mt-7 mb-3 mx-auto text-center'>
      <label className='block w-8 h-8 rounded-full my-3 mx-auto border border-solid border-primary leading-6 text-primary font-bold text-3xl hover:bg-primary hover:text-white cursor-pointer'>
        <input
          className='w-0 h-0 opacity-0'
          type='file'
          onChange={changeImageHandler}
        />
        <span>+</span>
      </label>
      <div className='h-16 text-sm'>
        {error && <div className='text-error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
