import Delete from '@/entities/icons/Delete'
import Link from 'next/link'
import { useState } from 'react'

const Feedback = () => {
	const [open, setOpen] = useState<boolean>(false)
	return (
		<div className=' duration-200 bg-red-reset p-3 text-center rounded-full'>
			{!open ? (
				<div
					className='w-4 h-4 flex items-center justify-center transition-all text-xl aspect-square text-center'
					onClick={() => setOpen(true)}
				>
					!
				</div>
			) : (
				<div>
					<div className='w-full h-6 flex items-center justify-center gap-2'>
						<Link href='https://t.me/vsau_unofficial/4 '>
							Сообщить о проблеме
						</Link>
						<p onClick={() => setOpen(false)}>
							<Delete fill='white' width={20} />
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Feedback
