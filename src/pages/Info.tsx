import Image from 'next/image'
import React from 'react'

function Info() {
	return (

		<>
			<div className='  w-full px-24 py-12  relative '>
				<h2 className='z-10 text-center  py-6'>Region:</h2>
				<div className=' *:z-10 grid grid-cols-1 gap-12	  '>
					<div className=' h-[250px] w-full rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380]  group	 '>

						<Image className='absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  brightness-[0.45] h-full opacity-40' src={'/assets/img/zaunBg.png'} width={1920} height={1080} alt="" />

						<Image className='group-hover:scale-110 transition-all duration-300 ease-in-out drop-shadow-2xl	 w-fit h-fit' src={'/assets/img/zaun_emblem.png'} width={100} height={100} alt="" />
						<p className='z-10  text-2xl text-[#66a832]'>Zaun</p>
					</div>

				</div>
				<h2 className=' z-10 text-center py-6'>Weapons</h2>
				<div className=' *:z-10 grid *:border *:border-[#262626]   grid-cols-4	 gap-12  hover:	  '>
					<div className='aspect-[4/3] h-[250px] w-[250px] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380]'>
						<video
							className='  absolute top-0 left-0 z-0 object-cover object-center rounded-xl h-full transform transition-transform duration-300 ease-in-out  shadow-[inset_0_4px_6px_rgba(0,0,0,99.5)]'
							src="/assets/video/pow-pow.mp4"
							autoPlay
							loop
							muted
						></video>
						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] -hue-rotate-60 ' src={'/assets/img/blow3.webp'} width={160} height={140} alt="" />
						<Image className='absolute top-2/3 left-0 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[60deg] -hue-rotate-90 ' src={'/assets/img/blow1.webp'} width={100} height={140} alt="" />
						<Image className='absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[60deg] -hue-rotate-90 ' src={'/assets/img/blow2.webp'} width={120} height={140} alt="" />
					</div>

					<div className='aspect-[4/3] h-[250px] w-[250px] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380] 	 '>


						<video className='absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full transform transition-transform duration-300 ease-in-out ' src="/assets/video/chomper.mp4" autoPlay loop muted></video>
						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] ' src={'/assets/img/blow2.webp'} width={85} height={140} alt="" />
						<Image className='absolute top-0 left-0 -translate-x-1/2   z-0 ' src={'/assets/img/blow1.webp'} width={115} height={140} alt="" />

					</div>
					<div className=' aspect-[4/3] h-[250px] w-[250px] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380] 	 '>


						<Image className=' transform transition-transform duration-300 ease-in-out  absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full w-full ' src="/assets/img/fishbones.jpg" alt='' width={250} height={250} />

						<Image className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  z-0 rotate-[20deg] -hue-rotate-90 ' src={'/assets/img/blow4.webp'} width={115} height={140} alt="" />
						<Image className='absolute top-2/3 left-0 -translate-x-1/2 -translate-y-1/2  z-0 rotate-[150deg] -hue-rotate-60 ' src={'/assets/img/blow2.webp'} width={90} height={140} alt="" />

					</div>
					<div className=' aspect-[4/3] h-[250px] w-[250px] rounded-xl p-12 relative flex justify-center items-center flex-col bg-[#23232380] 	 '>


						<Image className='absolute top-0 left-0 z-0 object-cover object-center  rounded-xl  h-full w-full transform transition-transform duration-300 ease-in-out  ' src="/assets/img/sherif.jfif" alt='' width={250} height={250} />

						<Image className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  z-0 rotate-[20deg] ' src={'/assets/img/heart.webp'} width={130} height={140} alt="" />
						<Image className='absolute top-2/3 right-1/2 -translate-x-1/3 -translate-y-1/2 -hue-rotate-180 z-0 rotate-[20deg] ' src={'/assets/img/blow1.webp'} width={155} height={140} alt="" />
						<Image className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  z-0 rotate-[40deg] ' src={'/assets/img/blow2.webp'} width={115} height={140} alt="" />

					</div>

				</div>

				{/* <Image className='absolute top-0 left-0 z-[-1] rounded-xl  brightness-[0.3] h-full w-full  blur-[10px]  opacity-100' src={'/assets/img/zaunGIF.gif'} width={1920} height={1080} alt="" /> */}
				<video
					className='  absolute top-0 left-0 z-0 object-cover object-center rounded-xl h-full  blur-[10px] -hue-rotate-[320deg]	 opacity-40'
					src="/assets/video/sky.mp4"
					autoPlay
					loop
					muted
					disablePictureInPicture
				></video>
			</div>
		</>
	)
}

export default Info