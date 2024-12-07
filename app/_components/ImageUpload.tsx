import { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function ImageUpload({ onUpload }: { onUpload: (image: string) => void }) {
  const [dragging, setDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(true)
  }

  const handleDragLeave = () => {
    setDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    handleFile(file)
  }

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result
        if (typeof result === 'string') {
          onUpload(result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Upload Your Image</h2>
      <div
        className={`border-4 border-dashed p-8 text-center rounded-lg ${
          dragging ? 'border-green-500 bg-green-100' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="mx-auto text-6xl text-green-500 mb-4" />
        <p className="mb-4 text-green-800">Drag and drop an image here, or click to select</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="bg-green-500 text-white px-6 py-3 rounded-full cursor-pointer hover:bg-green-600 transition-colors duration-300 inline-block"
        >
          Select Image
        </label>
      </div>
    </div>
  )
}

