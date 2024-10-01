import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import FilterIcon from './FilterIcon'
import SearchIcon from './SearchIcon'
import TemplateFilterGroup from './TemplateFilterGroup'

export default function FilterMobile({
	search,
	setSearch,
	setSelectedTags,
	setSelectedUseCases,
	types,
	selectedTypes,
	setSelectedTypes,
	tags,
	useCases,
	selectedUseCases,
	selectedTags,
}: {
	search: string
	setSearch: (search: string) => void
	setSelectedTags: (tags: string[]) => void
	setSelectedUseCases: (useCases: string[]) => void
	types: string[]
	selectedTypes: string[]
	setSelectedTypes: (types: string[]) => void
	tags: string[]
	useCases: string[]
	selectedUseCases: string[]
	selectedTags: string[]
}) {
	const shrunkHeight = 0
	const [height, setHeight] = useState<'auto' | number>(shrunkHeight)
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	return (
		<div className='col-span-3 block md:hidden'>
			<div className='flex items-center justify-between px-5'>
				<div
					className='rounded-[14px] bg-[linear-gradient(84.16deg,_#F4292933_-7.25%,_#FFD76F0B_35.45%,_#38D4E933_97%)] p-[1px]'
					style={{
						display: isSearchOpen ? 'none' : 'block',
					}}
				>
					<button className='w-full rounded-[14px] border border-[#FFFFFF1A] bg-black px-6 py-3 text-center text-white'>
						Contribute
					</button>
				</div>

				<div className='flex items-center gap-2'>
					<div
						className='cursor-pointer rounded-xl bg-[#0F0F0F] p-3'
						onClick={() => {
							setIsSearchOpen(true)
						}}
						style={{
							display: isSearchOpen ? 'none' : 'block',
						}}
					>
						<SearchIcon />
					</div>

					<div
						className='cursor-pointer rounded-xl bg-[#0F0F0F] p-3'
						onClick={() => setHeight(height === shrunkHeight ? 'auto' : shrunkHeight)}
						style={{
							display: isSearchOpen ? 'none' : 'block',
						}}
					>
						<FilterIcon />
					</div>
				</div>

				<fieldset
					className='relative w-full'
					style={{
						display: isSearchOpen ? 'block' : 'none',
					}}
				>
					<input
						type='text'
						placeholder='Search'
						className='w-full rounded-[14px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] px-5 py-3 text-[#C2C2C266]'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>

					<button
						className='absolute right-5 top-[15%] cursor-pointer text-2xl text-[#C2C2C266] transition-all hover:text-white'
						onClick={() => {
							setIsSearchOpen(false)
						}}
					>
						x
					</button>
				</fieldset>
			</div>

			<AnimateHeight
				id='filter'
				duration={300}
				height={height}
				style={{
					boxShadow: '0px 0px 36px 0px #FF8A3F80',
				}}
				className='my-[22px] rounded-3xl'
			>
				<div aria-expanded={height !== shrunkHeight} aria-controls='filter' className='p-[25px]'>
					<div className='mb-7 flex w-full justify-between'>
						<span className='text-md'>Filter</span>

						<button
							className='rounded-[23px] bg-[#FFFFFF1A] px-3 py-[2px] text-[#7A7A7A]'
							onClick={() => {
								setSelectedTags([])
								setSelectedUseCases([])
								setSearch('')
							}}
						>
							Clear
						</button>
					</div>

					<TemplateFilterGroup
						items={types}
						selectedItems={selectedTypes}
						setSelectedItems={setSelectedTypes}
						title='Types'
					/>

					<TemplateFilterGroup
						items={useCases}
						selectedItems={selectedUseCases}
						setSelectedItems={setSelectedUseCases}
						title='Use Case'
					/>

					<TemplateFilterGroup
						items={tags}
						selectedItems={selectedTags}
						setSelectedItems={setSelectedTags}
						title='Tags'
					/>
				</div>
			</AnimateHeight>
		</div>
	)
}
