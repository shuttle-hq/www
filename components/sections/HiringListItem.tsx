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
      <div className="flex flex-wrap gap-5 items-start lg:flex-nowrap">
        <div className="font-normal text-xl leading-8 tracking-wide text-body">
          {number}
        </div>
        <div className="font-normal text-xl leading-8 tracking-wide text-grey100 w-full sm:w-full md:w-full lg:w-[300px] lg:min-w-[300px] lg:flex-shrink-0">
          {title}
        </div>
        <div className="font-normal text-xl leading-8 tracking-wide text-body w-full sm:w-full md:w-full lg:w-auto">
          {description}
        </div>
      </div>
    </div>
  )
}
