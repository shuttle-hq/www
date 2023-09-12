import Image from 'next/image'

const BenefitCards = () => (
	<div className='relative hidden sm:block'>
		<Image
			src='/images/pages/pricing/benefitBg1.png'
			alt='bg img'
			fill
			className='absolute h-auto w-[839px] -translate-y-[40%] '
		/>
		<Image
			src='/images/pages/pricing/benefitBg2.png'
			alt='bg img'
			fill
			className='absolute ml-auto h-auto w-[1244px] -translate-y-[40%] '
		/>
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10'>
			<h1 className='mb-12 text-center font-gradual text-4xl font-bold text-[#C2C2C2]'>
				{' '}
				Included in all plans{' '}
			</h1>
			<div className='grid gap-8 lg:grid-cols-3'>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='32'
						height='33'
						viewBox='0 0 32 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path
							d='M1.33594 17.5043V15.2821H9.15817V17.5043H1.33594ZM10.3582 12.3043L7.64704 9.59323L9.2026 8.03766L11.9137 10.7488L10.3582 12.3043ZM14.8915 9.5488V1.72656H17.1137V9.5488H14.8915ZM21.647 12.3043L20.0915 10.7488L22.8026 8.03766L24.3582 9.59323L21.647 12.3043ZM22.847 17.5043V15.2821H30.6693V17.5043H22.847ZM16.0026 19.9932C15.0026 19.9932 14.1526 19.6432 13.4526 18.9432C12.7526 18.2432 12.4026 17.3932 12.4026 16.3932C12.4026 15.3932 12.7526 14.5432 13.4526 13.8432C14.1526 13.1432 15.0026 12.7932 16.0026 12.7932C17.0026 12.7932 17.8526 13.1432 18.5526 13.8432C19.2526 14.5432 19.6026 15.3932 19.6026 16.3932C19.6026 17.3932 19.2526 18.2432 18.5526 18.9432C17.8526 19.6432 17.0026 19.9932 16.0026 19.9932ZM22.9137 24.8599L20.0915 22.0377L21.647 20.4821L24.4693 23.3044L22.9137 24.8599ZM9.09147 24.8599L7.53594 23.3044L10.3582 20.4821L11.9137 22.0377L9.09147 24.8599ZM14.8915 31.0599V23.2377H17.1137V31.0599H14.8915Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>Rust, made simple</h1>
					<p className='text-[#ffffff8f]'>
						Effortless database connections, built-in logging, extensive docs, and cross-framework
						compatibility.
					</p>
				</div>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='33'
						height='33'
						viewBox='0 0 33 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path
							d='M13.0248 21.037L14.6248 19.4259L11.5915 16.3926L14.6026 13.3815L13.0026 11.7703L8.38037 16.3926L13.0248 21.037ZM19.647 21.037L24.2915 16.3926L19.647 11.7481L18.0471 13.3592L21.0804 16.3926L18.0471 19.4259L19.647 21.037ZM6.55814 28.3926C5.95814 28.3926 5.43777 28.1722 4.99704 27.7315C4.5563 27.2907 4.33594 26.7704 4.33594 26.1704V6.61478C4.33594 6.01478 4.5563 5.49441 4.99704 5.05368C5.43777 4.61295 5.95814 4.39258 6.55814 4.39258H26.1137C26.7137 4.39258 27.2341 4.61295 27.6748 5.05368C28.1156 5.49441 28.3359 6.01478 28.3359 6.61478V26.1704C28.3359 26.7704 28.1156 27.2907 27.6748 27.7315C27.2341 28.1722 26.7137 28.3926 26.1137 28.3926H6.55814Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>Infrastructure from Code</h1>
					<p className='text-[#ffffff8f]'>
						Get your entire infrastructure configured without writing any infrastructure config
					</p>
				</div>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='33'
						height='33'
						viewBox='0 0 33 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path d='M4 25V7L15.6063 16L4 25ZM17.3937 25V7L29 16L17.3937 25Z' fill='#D8D8D8' />
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>Bypass DevOps</h1>
					<p className='text-[#ffffff8f]'>
						Leapfrog traditional DevOps with our &apos;Infrastructure from Code&apos; approach.
					</p>
				</div>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='32'
						height='33'
						viewBox='0 0 32 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path
							d='M3.96048 6.59129C3.96048 5.99017 4.18303 5.46679 4.62813 5.02116C5.07376 4.57606 5.59714 4.35351 6.19826 4.35351L12.6431 4.35351L12.6431 6.5913L6.19826 6.5913L6.19826 26.1607L25.8349 26.1607L25.8349 6.5913L19.3228 6.5913L19.3228 4.35352L25.8349 4.35352C26.4361 4.35352 26.9536 4.57606 27.3874 5.02116C27.8219 5.4668 28.0391 5.99017 28.0391 6.5913L28.0391 26.1607C28.0391 26.7618 27.8219 27.2852 27.3874 27.7308C26.9536 28.1759 26.4361 28.3984 25.8349 28.3984L6.19826 28.3984C5.59714 28.3984 5.07376 28.1759 4.62813 27.7308C4.18303 27.2852 3.96048 26.7618 3.96048 26.1607L3.96048 6.59129ZM9.47077 14.2055L11.1074 12.6025L14.8809 16.3423L14.8809 4.35352L17.085 4.35352L17.085 16.3423L20.8584 12.6025L22.4951 14.2055L15.9829 20.7505L9.47077 14.2055Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>Compile-time Insurance</h1>
					<p className='text-[#ffffff8f]'>
						Be confident that you are getting the resources you need at compile time. No surprises.
					</p>
				</div>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='33'
						height='33'
						viewBox='0 0 33 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path
							d='M5.2336 27.0594C4.6336 27.0594 4.11147 26.8372 3.6672 26.393C3.2224 25.9487 3 25.4266 3 24.8266V7.95936C3 7.35936 3.2224 6.83723 3.6672 6.39296C4.11147 5.9487 4.6336 5.72656 5.2336 5.72656H27.4336C28.0336 5.72656 28.5557 5.9487 29 6.39296C29.4448 6.83723 29.6672 7.35936 29.6672 7.95936V24.8266C29.6672 25.4266 29.4448 25.9487 29 26.393C28.5557 26.8372 28.0336 27.0594 27.4336 27.0594H5.2336ZM5.2336 24.8266H27.4336V10.693H5.2336V24.8266ZM10.3336 22.793L8.7672 21.2266L12.2 17.7594L8.7336 14.293L10.3336 12.7594L15.3672 17.7594L10.3336 22.793ZM16.5672 22.893V20.6594H24.1V22.893H16.5672Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>
						Build fast, redeploy instantly
					</h1>
					<p className='text-[#ffffff8f]'>
						Shuttle always uses the cache from previous builds to give you lightning-speed redeploys.
					</p>
				</div>
				<div
					style={{
						backdropFilter: 'blur(30px)',
					}}
					className='flex flex-col items-start justify-start gap-2 rounded-[20px] border-[1px] border-solid border-[#ffffff12] bg-[#0000004D] p-6'
				>
					<svg
						width='33'
						height='33'
						viewBox='0 0 33 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='text-[#C2C2C2]'
					>
						<path
							d='M15.5504 19.0586H17.7726V14.8364H21.9948V12.6142H17.7726V8.39193H15.5504V12.6142H11.3281V14.8364H15.5504V19.0586ZM3.32812 29.7253V5.28079C3.32812 4.68079 3.54849 4.16043 3.98923 3.71969C4.42996 3.27896 4.95033 3.05859 5.55033 3.05859H27.7726C28.3726 3.05859 28.893 3.27896 29.3337 3.71969C29.7744 4.16043 29.9948 4.68079 29.9948 5.28079V22.1697C29.9948 22.7697 29.7744 23.2901 29.3337 23.7308C28.893 24.1716 28.3726 24.3919 27.7726 24.3919H8.66146L3.32812 29.7253Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1 className='font-gradual text-2xl font-bold text-[#C2C2C2] '>
						Got something you&apos;d like to see here?
					</h1>
					<p className='cursor-pointer text-[#ffffff8f] underline'>Request a feature</p>
				</div>
			</div>
		</div>
	</div>
)

export default BenefitCards
