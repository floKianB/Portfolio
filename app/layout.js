import './globals.css'
import { Inter } from 'next/font/google'

import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kian Baban',
  description: "Kian Baban's Portfolio Website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main className='pt-24 lg:w-1/2 lg:py-24'>
              {children}
            </main>
          </div>
        </div>
          
      </body>
    </html>
  )
}