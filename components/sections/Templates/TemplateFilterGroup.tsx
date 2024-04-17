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
	return (
		<div className='mb-9 text-[#7A7A7A]'>
			<span className='uppercase'>{title}</span>
			<fieldset>
				{items.map((item) => (
					<div key={item}>
						<input
							type='checkbox'
							name={item}
							id={item}
							className='mr-[10px] accent-[#FC540C]'
							checked={selectedItems.includes(item)}
							onChange={(e) => {
								setSelectedItems(
									e.target.checked
										? [...selectedItems, item]
										: selectedItems.filter((t) => t !== item)
								)
							}}
						/>
						<label className='capitalize text-[#C8C8C8]' htmlFor={item}>
							{item}
						</label>
					</div>
				))}
			</fieldset>
		</div>
	)
}
