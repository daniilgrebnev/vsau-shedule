const WaitTextAnimate = () => {
	return (
		<div>
			<div className='container-animation'>
				<svg className='svg-anim' viewBox='0 0 960 300'>
					<symbol id='s-text'>
						<text text-anchor='middle' x='50%' y='80%'>
							Загрузка
						</text>
					</symbol>

					<g className='g-ants'>
						<use xlinkHref='#s-text' className='text-copy'></use>
						<use xlinkHref='#s-text' className='text-copy'></use>
						<use xlinkHref='#s-text' className='text-copy'></use>
						<use xlinkHref='#s-text' className='text-copy'></use>
						<use xlinkHref='#s-text' className='text-copy'></use>
					</g>
				</svg>
			</div>
		</div>
	)
}

export default WaitTextAnimate
