import './globals.scss'

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
        <body className='flex items-center justify-center'>
        {children}
        </body>
        </html>
    )
}
