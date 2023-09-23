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
          <meta name="theme-color" content="#111827" />

            <meta name="msapplication-TileColor" content="#111827"/>
            <meta name="msapplication-navbutton-color" content="#111827"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#111827"/>
        </Head>
        <body className='flex items-center justify-center'>
        {children}
        </body>
        </html>
    )
}
