import { memo } from "react";

const PostHeader = ({ post }: any) => (
	<div className="flex items-center pb-3">
		<img
			src={post?.data?.thread?.post?.author?.avatar}
			className="inline object-cover rounded-full transition-all duration-150 w-12 h-12"
			alt=""
		/>
		<div className="whitespace-nowrap pl-4">
			<p className="text-primary dark:text-white font-bold">
				{post?.data?.thread?.post?.author?.displayName}
			</p>
			<p className="font-light text-sm">
				@{post?.data?.thread?.post?.author?.handle}
			</p>
		</div>
	</div>
);

export default memo(PostHeader);
