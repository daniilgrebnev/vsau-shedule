'use client'
import ResetIcon from '@/entities/icons/ResetIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Settings = () => {
	const [resetAlert, setResetAlert] = useState(false)
	const router = useRouter()
	const resetApp = () => {
		router.back()
		localStorage.clear()
	}

	const resetPopup = (bool: boolean) => {
		setResetAlert(bool)
	}
	return (
		<div className='w-[524px] h-[100dvh]  bg-bg-main text-white overflow-hidden p-5'>
			<div className=''>
				<div className='px-0  py-2 w-1/3 text-white text-left font-semibold rounded-lg'>
					<Link href='/'>&#8592; Назад</Link>
				</div>

				<p className='mt-14 mb-4 text-center text-3xl'>Настройки</p>
				<div className='mx-10'>
					<div className=''>
						<div className=''>
							<div className='text-xl font-semibold flex items-center justify-between text-center py-2 pb-10 rounded-lg'>
								<p>Сброс приложения</p>
								<div
									className='bg-red-reset text-white rounded-lg p-3 mx-4'
									onClick={() => resetPopup(true)}
								>
									<ResetIcon fill={`white`} width={20} />
								</div>
							</div>
							<div className='absolute bottom-3 w-full flex items-center justify-center'>
								<Link
									href='https://t.me/vsau_unofficial/4'
									className='w-7/12 text-center mx-auto bg-red-reset rounded-lg px-6 py-2'
								>
									Сообщить о проблеме
								</Link>
							</div>
						</div>
					</div>
				</div>
				{resetAlert ? (
					<div className='absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full flex items-center justify-center '>
						<div className='w-9/12 h-1/4 bg-bg-header text-lg  rounded-lg relative overflow-hidden'>
							<div className=''></div>
							<p className='w-full h-full text-center flex items-center justify-center text-white'>
								Вы уверены что хотите полностью сбросить данные приложения?
							</p>

							<div className='absolute w-full text-center bottom-0 h-10 grid grid-cols-2'>
								<div
									className='text-red-reset font-semibold h-full flex items-center justify-center'
									onClick={resetApp}
								>
									Да
								</div>

								<div
									className='text-green-reset font-semibold h-full flex items-center justify-center'
									onClick={() => resetPopup(false)}
								>
									Нет
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
export default Settings
