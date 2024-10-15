import React from 'react'
import BgGlow from './BgGlow'
import TemplateFilterGroup from './TemplateFilterGroup'

export default function FilterDesktop({
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
  const openTypeform = () => {
    window.open('https://shuttlerust.typeform.com/to/eN22tJYY', '_blank');
  };

  return (
    <div className='col-span-1 hidden md:block'>
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
      <input
        type='text'
        placeholder='Search'
        className='mb-5 w-full rounded-[14px] border border-[#FFFFFF1A] bg-[#FFFFFF0D] px-5 py-3 text-[#C2C2C266] outline-none'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='relative mb-6 rounded-[14px] bg-[linear-gradient(84.16deg,_#F4292933_-7.25%,_#FFD76F0B_35.45%,_#38D4E933_97%)] p-[1px]'>
        <button
          className='w-full rounded-[14px] border border-[#FFFFFF1A] bg-black px-6 py-3 text-center'
          onClick={openTypeform}
        >
          Contribute
        </button>
        <BgGlow className='absolute -top-8 left-1 -z-10 w-full' />
      </div>
      <hr className='mb-6 border-[#FFFFFF1A]' />
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
  )
}