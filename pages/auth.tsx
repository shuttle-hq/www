import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'

export default function Auth() {
	const { user } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (user) {
			router.push('/dashboard')
		}
	}, [user, router])

	return (
		<div className='flex h-screen w-screen items-center justify-center bg-black'>
			<p className='text-[#BEBEBE]'>Authenticating...</p>
		</div>
	)
}

export const getServerSideProps = withPageAuthRequired()

Auth.getLayout = (children: ReactNode) => <>{children} </>
