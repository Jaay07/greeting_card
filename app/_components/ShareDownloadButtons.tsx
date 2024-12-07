import { FaWhatsapp, FaInstagram, FaTwitter, FaDownload } from 'react-icons/fa'

export default function ShareDownloadButtons() {
  const handleShare = (platform: string) => {
    // Implement sharing logic here
    console.log(`Sharing to ${platform}`)
  }

  const handleDownload = () => {
    // Implement download logic here
    console.log('Downloading image')
  }

  return (
    <div className="flex justify-end space-x-4 mt-6">
      <button
        onClick={() => handleShare('whatsapp')}
        className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300 shadow-md"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </button>
      <button
        onClick={() => handleShare('instagram')}
        className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-md"
        aria-label="Share on Instagram"
      >
        <FaInstagram size={24} />
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 shadow-md"
        aria-label="Share on Twitter"
      >
        <FaTwitter size={24} />
      </button>
      <button
        onClick={handleDownload}
        className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-300 shadow-md"
        aria-label="Download image"
      >
        <FaDownload size={24} />
      </button>
    </div>
  )
}

