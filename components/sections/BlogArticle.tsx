const BlogArticle = ({ article }) => {
	return (
		<article>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		</article>
	)
}

export default BlogArticle
