import { memo } from "react";
import { useSearch } from "../../stores/useSearchPost";

function roundedLikes(likes: number) {
	if (likes < 1000) return likes;
	if (likes < 1000000) return `${Math.round(likes / 100) / 10}k`;
	return `${Math.round(likes / 100000) / 10}m`;
}

const PostFooter = () => {
	const { post } = useSearch();

	if (!post) return <span />;

	const { thread } = post;

	return (
		<section className="pt-6">
			<p className="font-sans text-md text-secondary dark:text-white">
				{new Intl.DateTimeFormat(
					thread?.post?.record.langs ? thread?.post?.record.langs[0] : "en-us",
					{
						dateStyle: "medium",
						timeStyle: "short",
					},
				).format(new Date(thread?.post?.record.createdAt))}
			</p>
			<section className="flex space-x-2 pt-3">
				<p className="text-secondary dark:text-white font-sans text-md">
					<strong className="font-bold text-primary dark:text-white">
						{roundedLikes(+thread.post.likeCount)}
					</strong>{" "}
					likes
				</p>
				<p className="text-secondary dark:text-white font-sans text-md">
					<strong className="font-bold text-primary dark:text-white">
						{roundedLikes(thread.post.replyCount)}
					</strong>{" "}
					replies
				</p>
				<p className="text-secondary dark:text-white font-sans text-md">
					<strong className="font-bold text-primary dark:text-white">
						{roundedLikes(thread.post.repostCount)}
					</strong>{" "}
					reposts
				</p>
			</section>
		</section>
	);
};

export default memo(PostFooter);
