import { FC } from 'react'

interface SwitchProps {
	checked: boolean
	setChecked: (checked: boolean) => void
}

const Switch: FC<SwitchProps> = ({ checked, setChecked }) => {
	return (
		<label className='input-border-gradient dark:border-gradient always-visible relative h-[32px] w-[77px] cursor-pointer rounded-3xl bg-[#E9E9E9] after:rounded-3xl after:opacity-100 dark:bg-black'>
			<input
				type='checkbox'
				className='peer hidden'
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<div className='absolute left-[3px] top-[3px] h-[26px] w-[26px] rounded-full bg-[#525151] shadow-[0px_0px_16px_rgba(252,84,12,1)] transition-all peer-checked:left-[48px] dark:bg-[#C2C2C2]' />
		</label>
	)
}

export default Switch
