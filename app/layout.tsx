import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: "--font-open-sans"
});

// export const metadata: Metadata = {
//   title: 'Wisdom Academic Centre | Empowering Minds, Building Futures',
//   description: 'Wisdom Academic Centre in Kochi offers expert coaching for +1, +2 (State/CBSE) in Science, Commerce & Humanities. Also B.COM, BBA, M.COM, MBA. Experienced faculty, concept-based learning, 5.0 rating.',
//   generator: 'v0.app',
//   keywords: ['tuition centre kochi', 'coaching centre kochi', 'plus one tuition', 'plus two tuition', 'CBSE coaching', 'science tuition', 'commerce tuition'],
//   icons: {
//     icon: [
//       {
//         url: '/icon-light-32x32.png',
//         media: '(prefers-color-scheme: light)',
//       },
//       {
//         url: '/icon-dark-32x32.png',
//         media: '(prefers-color-scheme: dark)',
//       },
//       {
//         url: '/icon.svg',
//         type: 'image/svg+xml',
//       },
//     ],
//     apple: '/apple-icon.png',
//   },
// }


export const metadata: Metadata = {
  title: 'Wisdom Academic Centre | Empowering Minds, Building Futures',
  description: 'Wisdom Academic Centre in Kochi offers expert coaching for +1, +2 (State/CBSE) in Science, Commerce & Humanities. Also B.COM, BBA, M.COM, MBA. Experienced faculty, concept-based learning, 5.0 rating.',
  generator: 'v0.app',
  keywords: ['tuition centre kochi', 'coaching centre kochi', 'plus one tuition', 'plus two tuition', 'CBSE coaching', 'science tuition', 'commerce tuition'],
  icons: {
    icon: '/favicon.ico',       // Use the main favicon
    apple: '/apple-touch-icon.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
