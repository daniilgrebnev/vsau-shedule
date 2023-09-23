import './globals.scss'
import Head from "next/head";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <Head>
          <link rel="manifest" href="../../public/manifest.json" />
          <link rel="apple-touch-icon" href="../../public/logo192.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className='flex items-center justify-center'>
        {children}
        </body>
        </html>
    )
}
