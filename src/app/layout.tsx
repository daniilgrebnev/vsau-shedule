'use client'
import './globals.scss'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<head>
				<link rel='manifest' href='/manifest.json' />
				<title>Расписание</title>
				<link rel='apple-touch-icon' href='/logo192.png' />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta name='theme-color' content='#212121' />
				<meta name='msapplication-TileColor' content='#212121' />
				<meta name='description' content='Расписание ВГАУ' />
				<meta name='msapplication-navbutton-color' content='#212121' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#212121' />
			</head>
			<body className='flex  left-0 top-0 max-w-[550px] items-center justify-center bg-bg-header'>
				{children}
			</body>
		</html>
	)
}
