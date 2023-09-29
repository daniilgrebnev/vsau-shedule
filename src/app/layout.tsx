'use client'
import './globals.scss'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <head>
            <link rel="manifest" href="/manifest.json"/>

            <link rel="apple-touch-icon" href="/logo192.png"/>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
            <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
            <meta name="theme-color" content="#000"/>
            <meta name="msapplication-TileColor" content="#000"/>
            <meta name="msapplication-navbutton-color" content="#000"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#000"/>
        </head>
        <body className='flex items-center justify-center bg-gray-900'>

        {children}

        </body>
        </html>
    )
}
