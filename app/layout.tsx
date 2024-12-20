import { Quicksand } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const quicksand = Quicksand({ subsets: ['latin'] })
const aquatico = localFont({ 
  src: './fonts/Aquatico-Regular.otf',
  variable: '--font-aquatico'
})

export const metadata = {
  title: 'SeaWorld Blog',
  description: 'Discover the wonders of the ocean',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${aquatico.variable}`}>{children}</body>
    </html>
  )
}