import type { Metadata } from 'next'
import { AuthProvider } from '@/context/AuthContext'
import { DemoAccountsInitializer } from '@/components/DemoAccountsInitializer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Study Skills Support App',
  description: 'Master your study habits and achieve academic success with AI-powered insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <DemoAccountsInitializer>
            {children}
          </DemoAccountsInitializer>
        </AuthProvider>
      </body>
    </html>
  )
}