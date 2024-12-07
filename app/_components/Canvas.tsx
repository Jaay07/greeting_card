'use client'

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import KonvaWrapper from './KonvaWrapper'

export default function Canvas({ template, uploadedImage, textBlocks, setTextBlocks }) {
  const stageRef = useRef(null)
  const [selectedId, selectShape] = useState(null)
  const [images, setImages] = useState({
    template: null,
    uploaded: null,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (template && mounted && typeof window !== 'undefined') {
      const img = new window.Image()
      img.src = template.src
      img.onload = () => setImages(prev => ({ ...prev, template: img }))
    }
  }, [template, mounted])

  useEffect(() => {
    if (uploadedImage && mounted && typeof window !== 'undefined') {
      const img = new window.Image()
      img.src = uploadedImage
      img.onload = () => setImages(prev => ({ ...prev, uploaded: img }))
    }
  }, [uploadedImage, mounted])

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage()
    if (clickedOnEmpty) {
      selectShape(null)
    }
  }

  const handleDragEnd = (e, id) => {
    const updatedBlocks = textBlocks.map((block) =>
      block.id === id ? { ...block, x: e.target.x(), y: e.target.y() } : block
    )
    setTextBlocks(updatedBlocks)
  }

  const handleDeleteText = (id) => {
    setTextBlocks(textBlocks.filter(block => block.id !== id))
  }

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-[400px] bg-gray-100 rounded-lg animate-pulse" />
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <KonvaWrapper>
        {({ Stage, Layer, Image, Text, Group }) => (
          <Stage
            width={600}
            height={400}
            ref={stageRef}
            onMouseDown={checkDeselect}
            onTouchStart={checkDeselect}
          >
            <Layer>
              {images.uploaded && (
                <Image
                  image={images.uploaded}
                  width={600}
                  height={400}
                />
              )}
              {images.template && (
                <Image
                  image={images.template}
                  width={600}
                  height={400}
                />
              )}
              {textBlocks.map((block) => (
                <Group 
                  key={block.id} 
                  draggable 
                  onDragEnd={(e) => handleDragEnd(e, block.id)}
                  x={block.x}
                  y={block.y}
                >
                  <Text
                    text={block.text}
                    fontSize={block.size}
                    fontFamily={block.font}
                    fill={block.color}
                    onClick={() => selectShape(block.id)}
                    onTap={() => selectShape(block.id)}
                  />
                  {selectedId === block.id && (
                    <Text
                      text="✕"
                      x={5}
                      y={-20}
                      fontSize={16}
                      fill="red"
                      onClick={() => handleDeleteText(block.id)}
                      onTap={() => handleDeleteText(block.id)}
                    />
                  )}
                </Group>
              ))}
            </Layer>
          </Stage>
        )}
      </KonvaWrapper>
    </div>
  )
}

