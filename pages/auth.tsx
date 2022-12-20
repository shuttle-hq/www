import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
import { useMount } from 'react-use'
import Home from '.'
// import { useApiKeyModalState } from '../components/ApiKeyModal'

export default function Auth() {
	const { user } = useUser()
	const router = useRouter()

	useEffect(() => {
		if (user) {
			router.push('/dashboard')
		}
	}, [user])

	return (
		<div className='flex h-screen w-screen items-center justify-center bg-black'>
			<p className='text-[#7A7A7A]'>Authenticating...</p>
		</div>
	)
}

export const getServerSideProps = withPageAuthRequired()

Auth.getLayout = (children: ReactNode) => <>{children} </>
