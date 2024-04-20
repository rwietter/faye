import DOMPurify from "dompurify";
import { useSearch } from "../../stores/useSearchPost";

const PostContent = () => {
	const { post } = useSearch();

	if (!post) return <span />;

	const {
		thread: {
			post: { embed, record },
		},
	} = post;

	const markupText = (text: string) => {
		const html = text.replace(/(?:\r\n|\r|\n)/g, '<p class="py-1" />');

		const linkedText = html.replace(
			/((https?|ftp):\/\/[^\s/$.?#].[^\s]*)|((www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\S*))/g,
			(_match, p1, _p2, p3) => {
				const url = p1 || `http://${p3}`;
				return `<a href="${url}" class="text-blue-600 pointer-events-none" target="_blank" rel="noopener noreferrer">${url}</a>`;
			},
		);

		return DOMPurify.sanitize(linkedText);
	};

	return (
		<section lang="pt" className="dark:text-white max-w-lg pt-4">
			<p
				className="text-wrap font-normal font-sans text-primary dark:text-white text-xl break-words whitespace-pre-line leading-7"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: markupText(record.text) }}
			/>

			{embed?.external ? (
				<img
					className="w-full h-auto object-cover rounded-md pt-2 pointer-events-none"
					src={embed.external.thumb}
					alt=""
				/>
			) : (
				<div />
			)}
			{embed?.images && embed?.images.length > 0 ? (
				<img
					className="w-full h-auto object-cover rounded-md pt-2 pointer-events-none"
					src={embed?.images[0]?.thumb}
					alt={embed?.images[0]?.alt}
				/>
			) : (
				<div />
			)}
		</section>
	);
};

export default PostContent;
