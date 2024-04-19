import Checkbox from 'react-custom-checkbox'
import CheckIcon from './CheckIcon'

export default function TemplateFilterGroup({
	title,
	items,
	selectedItems,
	setSelectedItems,
}: {
	title: string
	items: string[]
	selectedItems: string[]
	setSelectedItems: (items: string[]) => void
}) {
	const isChecked = (item: string) => selectedItems.includes(item)

	return (
		<div className='mb-9 text-[#7A7A7A]'>
			<span className='uppercase'>{title}</span>
			<fieldset>
				{items.map((item) => (
					<div key={item}>
						<Checkbox
							checked={selectedItems.includes(item)}
							icon={<CheckIcon />}
							className={`${
								isChecked(item) ? 'border-[#FC540C]' : 'border-[#1A1A1A]'
							} transition-all hover:border-[#FC540C]`}
							style={{
								overflow: 'hidden',
								backgroundColor: isChecked(item) ? '#FC540C' : 'transparent',
							}}
							size={20}
							labelClassName=' ml-[10px] transition-all'
							labelStyle={{ color: isChecked(item) ? '#fff' : '#C8C8C8' }}
							label={item}
							onChange={(value: boolean) => {
								setSelectedItems(
									value ? [...selectedItems, item] : selectedItems.filter((t) => t !== item)
								)
							}}
						/>
					</div>
				))}
			</fieldset>
		</div>
	)
}
