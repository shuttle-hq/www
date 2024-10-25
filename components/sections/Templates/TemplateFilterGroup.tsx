import React, { useState } from 'react'
import Checkbox from 'react-custom-checkbox'
import CheckIcon from './CheckIcon'

const MAX_VISIBLE_ITEMS = 5;

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
  const [showAll, setShowAll] = useState(false);
  const isChecked = (item: string) => selectedItems.includes(item)
  
  const visibleItems = showAll ? items : items.slice(0, MAX_VISIBLE_ITEMS);

  return (
    <div className='ny mb-9 text-[#7A7A7A]'>
      <span className='uppercase'>{title}</span>
      <fieldset>
        {visibleItems.map((item) => (
          <div key={item} className='py-2.5'>
            <Checkbox
              checked={selectedItems.includes(item)}
              icon={<CheckIcon />}
              className={`${
                isChecked(item) ? 'border-[#FC540C] text-[#D8D8D8]' : 'border-[#1A1A1A]'
              } transition-all hover:border-[#FC540C]`}
              style={{
                overflow: 'hidden',
                backgroundColor: isChecked(item) ? '#FC540C' : 'transparent',
              }}
              size={20}
              labelClassName='ml-[10px] transition-all capitalize'
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
      {items.length > MAX_VISIBLE_ITEMS && (
        <button
          className="mt-2 text-sm text-[#FC540C] hover:text-[#FF7A3F] transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'See Less' : `See ${items.length - MAX_VISIBLE_ITEMS} More`}
        </button>
      )}
    </div>
  )
}