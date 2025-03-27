export interface HiringStepProps {
  number: string
  title: string
  description: string
}

export default function HiringListItem({
  number,
  title,
  description,
}: HiringStepProps) {
  return (
    <div className="border-b border-grey700 py-5">
      <div className="flex flex-wrap gap-5 items-start mobileM:flex-nowrap">
        <div className="font-normal text-xl leading-8 tracking-wide text-body">
          {number}
        </div>
        <div className="font-normal text-xl leading-8 tracking-wide text-grey100 w-full mobileM:w-[300px] mobileM:min-w-[300px] mobileM:flex-shrink-0">
          {title}
        </div>
        <div className="font-normal text-xl leading-8 tracking-wide text-body w-full mobileM:w-auto">
          {description}
        </div>
      </div>
    </div>
  )
}
