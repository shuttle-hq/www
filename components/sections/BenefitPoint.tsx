interface BenefitPointProps {
  title: string
  description: string
  iconSrc: string
}

export default function BenefitPoint({
  title,
  description,
  iconSrc,
}: BenefitPointProps) {
  return (
    <div className="flex gap-5 py-8 items-center w-full">
      <div className="flex-shrink-0 w-10 h-10">
        <img
          src={iconSrc}
          alt={`${title} icon`}
          className="object-contain"
          width={40}
          height={40}
        />
      </div>
      <div>
        <h3 className="font-normal text-xl leading-7 tracking-wide text-grey100 mb-1">
          {title}
        </h3>
        <p className="font-normal text-base leading-6 tracking-wide text-body">
          {description}
        </p>
      </div>
    </div>
  )
}
