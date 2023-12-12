
import type { Metadata } from 'next'

import { Poppins} from 'next/font/google'
import './globals.css'

import ThemeProvider from '@/providers/theme.providers'

import LayoutClient from './layoutClient'
import { getCurrentUser } from '@/actions/getCurrentUser'


const poppins = Poppins({ subsets: ['latin'] ,weight:['300','600']})

export const metadata: Metadata = {
  title: 'E~Learning',
  description: 'e-learning app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  console.log("currentUres",currentUser);
  return (
    <html lang="en">
      <ThemeProvider >
      <body className={`${poppins.className} relative`}>
       <LayoutClient user={currentUser}>
       {children}
       </LayoutClient>
      </body>
      </ThemeProvider>
    </html>
  )
}
