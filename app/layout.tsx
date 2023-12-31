import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from './Menu'
import ThemeRegistry from './_theme/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>輔仁大學資訊管理學系</h1>
        <ThemeRegistry>
          <Menu />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}