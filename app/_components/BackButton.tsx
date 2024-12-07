import { FaArrowLeft } from 'react-icons/fa'

interface BackButtonProps {
  onClick: () => void
  className?: string
}

export default function BackButton({ onClick, className = '' }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center ${className}`}
    >
      <FaArrowLeft className="mr-2" /> Back
    </button>
  )
}

