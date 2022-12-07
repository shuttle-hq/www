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
			className={clsx(className, 'text-black dark:text-white')}
			onClick={() => {
				updateTheme(theme === 'dark' ? 'light' : 'dark')
			}}
		>
			{theme === 'dark' ? <Lightbulb /> : <Moon />}
			<span className='lg:hidden'>Switch Theme</span>
		</button>
	)
}

export default ThemeSwitcher
