import clsx from 'clsx'
import { FC, ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'primary' | 'secondary'
	children: ReactNode
	invertOnDark?: boolean
}

const Button: FC<ButtonProps> = ({ variant = 'none', invertOnDark, className, children }) => {
	// Primary and secondary switch for dark mode

	return (
		<button
			className={clsx(
				'flex items-center gap-2 whitespace-nowrap rounded-button px-6 py-3 font-bold transition-all duration-500',
				variant === 'primary'
					? invertOnDark
						? 'border-gradient shadow-gradient dark:button-shadow bg-black text-[#C2C2C2] dark:bg-[#D8D8D8] dark:text-black dark:hover:bg-gradient-to-r dark:hover:from-[#fc540c] dark:hover:to-[#f5c57a] dark:hover:text-white'
						: 'border-gradient shadow-gradient button-shadow bg-white text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white'
					: '',
				variant === 'secondary'
					? invertOnDark
						? 'button-shadow dark:border-gradient dark:shadow-gradient bg-white text-black hover:bg-gradient-to-r hover:from-[#fc540c] hover:to-[#f5c57a] hover:text-white dark:bg-black dark:text-[#C2C2C2] dark:hover:bg-none'
						: 'button-shadow border-gradient shadow-gradient bg-black text-[#C2C2C2] hover:bg-none'
					: '',
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
