import { memo } from "react";

function roundedLikes(likes: number) {
	if (likes < 1000) return likes;
	if (likes < 1000000) return `${Math.round(likes / 100) / 10}k`;
	return `${Math.round(likes / 100000) / 10}m`;
}

const PostFooter = ({ post }: any) => (
	<section className="pt-6">
		<p className="font-light text-sm text-secondary dark:text-white">
			{new Intl.DateTimeFormat(
				post?.data?.thread?.post?.record.langs[0] || "en-us",
				{
					dateStyle: "medium",
					timeStyle: "short",
				},
			).format(new Date(post?.data?.thread?.post?.record.createdAt))}
		</p>
		<section className="flex space-x-2 pt-3 font-light">
			<p className="text-secondary dark:text-white">
				<strong className="font-bold text-sm text-primary dark:text-white">
					{/* {post?.data.thread.post.likeCount} */}
					{roundedLikes(+post?.data.thread.post.likeCount)}
				</strong>{" "}
				likes
			</p>
			<p className="text-secondary dark:text-white">
				<strong className="font-bold text-sm text-primary dark:text-white">
					{roundedLikes(post?.data.thread.post.replyCount)}
				</strong>{" "}
				replies
			</p>
			<p className="text-secondary dark:text-white">
				<strong className="font-bold text-sm text-primary dark:text-white">
					{roundedLikes(post?.data.thread.post.repostCount)}
				</strong>{" "}
				reposts
			</p>
		</section>
	</section>
);

export default memo(PostFooter);
