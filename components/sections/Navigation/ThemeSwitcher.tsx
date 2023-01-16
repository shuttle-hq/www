import { useLocalStorage, useMedia } from 'react-use'
import { FC, useEffect } from 'react'
import { Lightbulb, Moon } from 'components/svgs'
import clsx from 'clsx'

type StorageTheme = 'dark' | 'light' | 'system'

interface ThemeSwitcherProps {
	className?: string
	hidden?: boolean
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, hidden }) => {
	const [theme, setTheme] = useLocalStorage<StorageTheme>('app-theme', 'dark')
	const isDarkTheme = false

	useEffect(() => {
		if (isDarkTheme) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [isDarkTheme])

	return (
		<button
			type='button'
			className={clsx(
				className,
				'lg:border-gradient group relative flex items-center justify-center gap-3 rounded-button after:rounded-[0.875rem] dark:bg-black lg:bg-[#E9E9E9]',
				hidden && '!hidden'
			)}
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark')
			}}
		>
			{theme === 'dark' ? <Lightbulb className='lg:p-3' /> : <Moon className='lg:p-3' />}
			<span className='whitespace-nowrap lg:hidden'>Switch Theme</span>
		</button>
	)
}

export default ThemeSwitcher
