'use client'
import store from '@/store'
import 'moment/locale/ru'

import LogoIcon from '@/entities/icons/LogoIcon'
import MainPage from '@/widgets/MainPage'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import packages from '../../package.json'

export default function Home() {
	const [domLoaded, setDomLoaded] = useState(false)
	const version = packages.version

	useEffect(() => {
		let timeFunc = setTimeout(() => {
			setDomLoaded(true)
		}, 1500)

		return () => {
			clearTimeout(timeFunc)
		}
	}, [])

	return (
		<Provider store={store}>
			{domLoaded ? (
				<main className='w-[524px] h-[100dvh] relative bg-bg-main text-white overflow-hidden '>
					<MainPage />
				</main>
			) : (
				<div className='w-[524px] relative h-[100dvh] bg-bg-header flex items-center justify-center'>
					<div className='absolute bottom-0 left-0 text-white text-sm p-4'>
						Version: v{version}
					</div>
					<div className=' flex items-center flex-col justify-between h-8/12 '>
						<div className='animate-bounce'>
							<LogoIcon fill={`white`} width={150} />
						</div>
						<p className='text-white px-6 rounded-lg py-3 my-10  font-semibold text-2xl text-center'>
							Загрузка расписания...
						</p>
					</div>
				</div>
			)}
		</Provider>
	)
}
