interface ValueCardProps {
  emoji: string
  title: string
  subtitle: string
}

export default function CompanyValueCard({
  emoji,
  title,
  subtitle,
}: ValueCardProps) {
  return (
    <article className="h-full w-full" role="listitem">
      <div className="flex flex-col h-full gap-1 p-8 bg-black border border-solid border-white border-opacity-30 rounded-[32px]">
        <div className="text-2xl">{emoji}</div>
        <h4 className="font-atkinson font-normal text-xl leading-8 tracking-1 text-grey100">
          {title}
        </h4>
        <p className="font-atkinson font-normal text-base leading-6 tracking-1 text-body">
          {subtitle}
        </p>
      </div>
    </article>
  )
}
