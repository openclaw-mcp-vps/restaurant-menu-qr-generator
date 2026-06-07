import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuQR — Generate QR Code Menus with Analytics',
  description: 'Create QR code menus, track scan analytics, and switch seasonal menus instantly. Built for restaurant owners.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2f3cb8f7-86cf-42bc-9b50-755832a50b4d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
