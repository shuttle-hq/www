import clsx from 'clsx'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { CONTACT_US_URI } from '../../lib/constants'

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary' | 'tertiary'
	children: ReactNode
	invertOnDark?: boolean
}

interface ButtonProps extends CommonButtonProps {
	href?: string
}

const Button: FC<ButtonProps> = ({ variant = 'none', invertOnDark, className, children, href }) => {
	// Primary and secondary switch for dark mode

	const classNames = clsx(
		'flex items-center gap-2 whitespace-nowrap rounded-button px-6 py-3 font-bold transition-all duration-500',
		variant === 'primary'
			? invertOnDark
				? 'border-gradient shadow-gradient dark:button-shadow bg-black text-[#C2C2C2] dark:bg-[#D8D8D8] dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-[#fc540c] dark:hover:to-[#f5c57a] dark:hover:text-white'
				: 'border-gradient shadow-gradient button-shadow bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white'
			: '',
		variant === 'secondary'
			? invertOnDark
				? 'button-shadow dark:border-gradient dark:shadow-gradient bg-[#E9E9E9] text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-[#C2C2C2] dark:hover:bg-none'
				: 'button-shadow border-gradient shadow-gradient bg-black text-[#C2C2C2] hover:bg-none'
			: '',
		variant === 'tertiary' && 'button-shadow shadow-gradient text-black',
		className
	)

	const tertBg = {
		backgroundImage:
			'linear-gradient(73deg, #FC540C -7.95%, rgba(255, 215, 111, 0.72) 45.94%, #38D4E9 116.73%',
	}

	children = (
		<button className={classNames} style={variant === 'tertiary' ? tertBg : {}}>
			{children}
		</button>
	)

	if (href)
		if (href.startsWith('/')) children = <Link href={href}>{children}</Link>
		else
			children = (
				<a href={href} target='_blank' rel='noreferrer'>
					{children}
				</a>
			)

	return children
}

export const LoginButton: FC<CommonButtonProps> = ({ children, ...inner }) => {
	const { user } = useUser()
	const consoleBaseUrl = user ? 'https://console.shuttle.rs' : 'https://console.shuttle.rs/login'
	return (
		<Button href={consoleBaseUrl} {...inner}>
			{children}
		</Button>
	)
}

export const ContactUsButton: FC<CommonButtonProps> = ({ children, ...inner }) => {
	return (
		<Button href={CONTACT_US_URI} {...inner}>
			{children}
		</Button>
	)
}

export default Button
