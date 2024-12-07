import { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import { FaFont, FaPalette, FaTextHeight, FaPlus } from 'react-icons/fa'
import { TextBlock } from '../design/page'

const fonts = [
  { name: 'Cursive', value: 'cursive' },
  { name: 'Bold', value: 'bold' },
  { name: 'Handwritten', value: 'Brush Script MT, cursive' },
  { name: 'Festive', value: 'Papyrus, fantasy' },
]

export default function TextEditingPanel({ textBlocks, setTextBlocks }: { textBlocks: TextBlock[], setTextBlocks: (textBlocks: TextBlock[]) => void }) {
  const [text, setText] = useState('')
  const [font, setFont] = useState(fonts[0].value)
  const [color, setColor] = useState('#000000')
  const [size, setSize] = useState(16)
  const [showColorPicker, setShowColorPicker] = useState(false)

  const handleAddText = () => {
    if (text.trim()) {
      setTextBlocks([
        ...textBlocks,
        { id: Date.now(), text, font, color, size, x: 50, y: 50 },
      ])
      setText('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Text Editor</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
            placeholder="Enter your text here"
          />
        </div>
        <div>
          <label htmlFor="font" className="block text-sm font-medium text-gray-700 mb-1">
            <FaFont className="inline mr-2" /> Font
          </label>
          <select
            id="font"
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-green-500 focus:border-green-500"
          >
            {fonts.map((f) => (
              <option key={f.value} value={f.value}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            <FaPalette className="inline mr-2" /> Color
          </label>
          <div className="flex items-center">
            <div
              className="w-10 h-10 rounded-md border border-gray-300 cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => setShowColorPicker(!showColorPicker)}
            ></div>
            <span className="ml-2">{color}</span>
          </div>
          {showColorPicker && (
            <div className="absolute mt-2 z-10">
              <ChromePicker color={color} onChange={(c: ColorResult) => setColor(c.hex)} />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            <FaTextHeight className="inline mr-2" /> Size
          </label>
          <input
            type="range"
            id="size"
            min="8"
            max="72"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-500">{size}px</span>
        </div>
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Preview</h3>
          <div
            className="border rounded-md p-4 min-h-[60px] flex items-center justify-center"
            style={{ fontFamily: font, fontSize: `${size}px`, color: color }}
          >
            {text || 'Preview Text'}
          </div>
        </div>
        <button
          onClick={handleAddText}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        >
          <FaPlus className="mr-2" /> Add Text
        </button>
      </div>
    </div>
  )
}

