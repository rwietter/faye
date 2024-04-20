import { memo } from "react";
import { useSearch } from "../../stores/useSearchPost";

const PostHeader = () => {
	const { post } = useSearch();

	if (!post) return <span />;

	const {
		thread: {
			post: { author },
		},
	} = post;

	return (
		<div className="flex items-center">
			<img
				src={author?.avatar}
				className="inline object-cover rounded-full transition-all duration-150 w-12 h-12"
				alt=""
			/>
			<div className="pl-4">
				<p className="text-primary dark:text-white font-bold">
					{author?.displayName}
				</p>
				<p className="font-light text-lg">@{author?.handle}</p>
			</div>
		</div>
	);
};

export default memo(PostHeader);
