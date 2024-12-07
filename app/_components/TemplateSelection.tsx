import Image from 'next/image'

const templates = [
  { id: 1, name: 'Snowy Tree', src: '/templates/template1.jpg' },
  { id: 2, name: 'Festive Ornaments', src: '/templates/template2.jpg' },
  { id: 3, name: 'Cozy Fireplace', src: '/templates/template3.jpg' },
  { id: 4, name: 'Winter Wonderland', src: '/templates/template4.jpg' },
]

export default function TemplateSelection({ onSelect }) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Choose a Template</h2>
      <div className="grid grid-cols-2 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            className="cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            onClick={() => onSelect(template)}
          >
            <Image
              src={template.src}
              alt={template.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <p className="text-center mt-2 text-green-800 font-semibold">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

