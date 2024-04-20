import { memo } from "react";

const PostContent = ({ post }: any) => (
	<section lang="pt" className="text-primary dark:text-white max-w-lg">
		<p className="text-wrap">{post?.data.thread.post.record.text}</p>
		{post?.data?.thread?.post?.embed?.external ? (
			<img
				className="w-full h-auto object-cover rounded-md pt-2"
				src={post?.data?.thread.post.embed.external.thumb}
				alt=""
			/>
		) : (
			<div />
		)}
		{post?.data.thread.post?.embed?.images?.length > 0 ? (
			<img
				className="w-full h-auto object-cover rounded-md pt-2"
				src={post?.data.thread.post?.embed?.images[0]?.thumb}
				alt={post?.data.thread.post?.embed?.images[0]?.alt}
			/>
		) : (
			<div />
		)}
	</section>
);

export default memo(PostContent);
