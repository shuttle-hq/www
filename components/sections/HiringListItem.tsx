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
      <div className="flex gap-5 items-start">
        <div className="text-base leading-6 font-normal sm:text-xl sm:leading-8 sm:tracking-1 text-body">
          {number}
        </div>
        <div className="flex gap-2 flex-col sm:flex-row sm:gap-5 w-full">
          <h2 className="text-base leading-6 font-normal sm:text-xl sm:leading-8 sm:tracking-1 text-grey100 sm:min-w-72 sm:flex-shrink-0">
            {title}
          </h2>
          <p className="text-base leading-6 font-normal sm:text-xl sm:leading-8 sm:tracking-1 text-body w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
