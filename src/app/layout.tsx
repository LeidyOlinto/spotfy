import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to music',
}
export interface Props {
  onNewNote: (title: string, text: string) => void;
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
