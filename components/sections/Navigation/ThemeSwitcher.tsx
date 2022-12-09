import { useLocalStorage, useMedia } from 'react-use'
import { FC, useEffect } from 'react'
import { Lightbulb, Moon } from 'components/svgs'
import clsx from 'clsx'

type StorageTheme = 'dark' | 'light' | 'system'

interface ThemeSwitcherProps {
	className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
	const osTheme = useMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'
	const [storageTheme, setStorageTheme] = useLocalStorage<StorageTheme>('app-theme', 'system')
	const theme = storageTheme === 'system' ? osTheme : storageTheme
	const isDarkTheme = theme === 'dark'

	function updateTheme(theme: 'dark' | 'light') {
		setStorageTheme(theme === osTheme ? 'system' : theme)
	}

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
				'border-gradient-h group relative flex items-center justify-center gap-3 rounded-button after:rounded-[0.875rem] dark:bg-black'
			)}
			onClick={() => {
				updateTheme(theme === 'dark' ? 'light' : 'dark')
			}}
		>
			{theme === 'dark' ? <Lightbulb className='p-3' /> : <Moon className='p-3' />}
			<span className='lg:hidden'>Switch Theme</span>
		</button>
	)
}

export default ThemeSwitcher
