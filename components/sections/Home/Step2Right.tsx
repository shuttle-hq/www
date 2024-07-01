import CustomServiceIcon from 'components/svgs/CustomServiceIcon'
import DatabaseIcon from 'components/svgs/DatabaseIcon'
import MetadataIcon from 'components/svgs/MetadataIcon'
import SecretsIcon from 'components/svgs/SecretsIcon'

const services = [
	{ name: 'Database', icon: <DatabaseIcon /> },
	{ name: 'Secrets', icon: <SecretsIcon /> },
	{ name: 'Metadata', icon: <MetadataIcon /> },
	{ name: 'Custom Service', icon: <CustomServiceIcon /> },
]

function getBorder(idx: number) {
	if (idx === 0) return 'rounded-tl-3xl border-b border-r'
	if (idx === 1) return 'rounded-tr-3xl border-b'
	if (idx === 2) return 'rounded-bl-3xl border-r'
	if (idx === 3) return 'rounded-br-3xl'

	return ''
}

export default function Step2Right({
	id,
	className,
	style,
}: {
	id?: string
	className?: string
	style?: React.SVGAttributes<SVGSVGElement>['style']
}) {
	return (
		<div
			id={id}
			className={`z-10 grid w-full grid-cols-2 rounded-3xl border border-[#525150] backdrop-blur-sm sm:w-max ${className}`}
			style={style}
		>
			{services.map((service, idx) => (
				<div
					key={service.name}
					className={`w-full border-[#525150] p-4 sm:w-52 2xl:p-7 ${getBorder(idx)}`}
				>
					<div className='mr-4'>{service.icon}</div>
					<div>{service.name}</div>
				</div>
			))}
		</div>
	)
}
