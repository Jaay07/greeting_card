'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import TemplateSelection from '../_components/TemplateSelection'
import ImageUpload from '../_components/ImageUpload'
import TextEditingPanel from '../_components/TextEditingPanel'
import ShareDownloadButtons from '../_components/ShareDownloadButtons'
import BackButton from '../_components/BackButton'

// Dynamically import Canvas with SSR disabled andproper loading state
const Canvas = dynamic(() => import('../_components/Canvas'), { 
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />
})

// Add type for template
type Template = {
  src: string;
}

// Define a type for text blocks
export type TextBlock = {
  id: number;
  text: string;
  font: string;
  color: string;
  size: number;
  x: number;
  y: number;
};

export default function Design() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [textBlocks, setTextBlocks] = useState<TextBlock[]>([])

  const handleBack = () => {
    if (uploadedImage) {
      setUploadedImage(null)
    } else if (selectedTemplate) {
      setSelectedTemplate(null)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {(selectedTemplate || uploadedImage) && (
        <BackButton onClick={handleBack} className="mb-4 lg:mb-0" />
      )}
      <div className="lg:w-1/3">
        {!selectedTemplate && (
          <TemplateSelection onSelect={setSelectedTemplate} />
        )}
        {selectedTemplate && !uploadedImage && (
          <ImageUpload onUpload={setUploadedImage} />
        )}
        {selectedTemplate && uploadedImage && (
          <TextEditingPanel
            textBlocks={textBlocks}
            setTextBlocks={setTextBlocks}
          />
        )}
      </div>
      <div className="lg:w-2/3">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <Suspense fallback={<div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />}>
            <Canvas
              template={selectedTemplate!}
              uploadedImage={uploadedImage}
              textBlocks={textBlocks}
              setTextBlocks={setTextBlocks}
            />
          </Suspense>
          <ShareDownloadButtons />
        </div>
      </div>
    </div>
  )
}

