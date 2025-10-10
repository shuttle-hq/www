interface YouTubeEmbedProps {
	videoId: string
	title: string
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
	return (
		<div className="relative w-full pb-[56.25%] h-0 my-8">
			<iframe
				className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
				src={`https://www.youtube.com/embed/${videoId}`}
				title={title}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	)
}
