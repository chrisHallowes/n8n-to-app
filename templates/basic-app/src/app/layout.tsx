import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'n8n App',
  description: 'Generated from n8n workflow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
