import { Lobster } from 'next/font/google'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })


export default function DesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-green-800 to-red-800 text-white p-6 shadow-lg">
        <h1 className={`${lobster.className} text-4xl font-bold text-center`}>Christmas Card Creator</h1>
      </header>
      <main className="flex-grow p-4 md:p-6 container mx-auto">
        {children}
      </main>
      <footer className="bg-gradient-to-r from-green-800 to-red-800 text-white p-4 text-center">
        <p>&copy; 2023 Christmas Card Creator | Spread the Holiday Cheer!</p>
      </footer>
    </div>
  )
}

