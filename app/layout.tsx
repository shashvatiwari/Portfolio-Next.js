import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shashvat Tiwari - Full Stack Software Engineer | Portfolio',
description:
  'Professional Full Stack Developer portfolio showcasing expertise in backend development, API design, and modern web technologies including Node.js, NestJS, React.js, Next.js, MySQL, PostgreSQL, and MongoDB.',
keywords:
  'full stack developer, backend engineer, Node.js, NestJS, React.js, Next.js, MySQL, PostgreSQL, MongoDB, JavaScript, software engineer, Shashvat Tiwari, Shashwat Tiwari',
authors: [{ name: 'Shashvat Tiwari' }],
openGraph: {
  title: 'Shashvat Tiwari - Full Stack Software Engineer',
  description:
    'Explore Shashvat’s professional portfolio highlighting projects and experiences in full stack web development using modern frameworks and technologies.',
  type: 'website',
  locale: 'en_US',
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-cyan-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}