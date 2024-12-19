'use client'

import { useState } from 'react'
import Header from './_components/Header'
import ImageUpload from './_components/ImageUpload'
import TemplateSelection from './_components/TemplateSelection'
import CustomizationPanel from './_components/CustomizationPanel'
import LoadingAnimation from './_components/LoadingAnimation'
import Preview from './_components/Preview'
import DownloadShare from './_components/DownloadShare'
export default function ChristmasCardGenerator() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [customText, setCustomText] = useState('')
  const [textColor, setTextColor] = useState('#ffffff')
  const [fontSize, setFontSize] = useState(20)
  const [isLoading, setIsLoading] = useState(false)
  const [finalCard, setFinalCard] = useState<string | null>(null)

  const handleImageUpload = (file: File) => {
    setUploadedImage(file)
  }

  const handleTemplateSelection = (template: string) => {
    setSelectedTemplate(template)
  }

  const handleCustomization = (text: string, color: string, size: number) => {
    setCustomText(text)
    setTextColor(color)
    setFontSize(size)
  }

  const handleGenerateCard = () => {
    setIsLoading(true)
    // Simulating AI processing time
    setTimeout(() => {
      setIsLoading(false)
      setFinalCard('path/to/generated/card.jpg')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ImageUpload onUpload={handleImageUpload} />
            <TemplateSelection onSelect={handleTemplateSelection} />
            <CustomizationPanel
              onCustomize={handleCustomization}
              onGenerate={handleGenerateCard}
            />
          </div>
          <div className="space-y-8">
            <Preview
              image={uploadedImage}
              template={selectedTemplate}
              customText={customText}
              textColor={textColor}
              fontSize={fontSize}
            />
            {isLoading && <LoadingAnimation />}
            {finalCard && <DownloadShare cardUrl={finalCard} />}
          </div>
        </div>
      </main>
    </div>
  )
}

