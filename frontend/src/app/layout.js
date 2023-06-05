import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'Visie teste',
  description: 'Um teste para fazer um frontend para a api criada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}



