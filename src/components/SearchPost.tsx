import { Link } from "phosphor-react";
import type React from "react";
import { agent } from "../../lib/api";
import type { PostData } from "../post";
import { useSearch } from "../stores/useSearchPost";

export interface PostRequest {
	data: PostData;
	headers: Headers;
	success: boolean;
}

const parseUrl = (url: string) => {
	const [, , handle, , postId] = url.split("https://").join("").split("/");
	return { handle, postId };
};

const resolveHandle = async (handle: string) => {
	return agent.com.atproto.identity.resolveHandle({
		handle,
	});
};

const resolvePost = async (handle: string, postId: string) => {
	const identity = await resolveHandle(handle);
	return agent?.api.app.bsky.feed.getPostThread({
		uri: `at://${identity.data.did}/app.bsky.feed.post/${postId}`,
	});
};

const SearchPost: React.FC = () => {
	const { createPost } = useSearch();

	const handleSearchInputEvent = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (!event.target.value) return;
		const url = event.target.value;

		const { handle, postId } = parseUrl(url);
		if (!handle || !postId) return;

		try {
			const data = await resolvePost(handle, postId);

			if (data.success === false) return;

			const postData = data as unknown as PostRequest;
			createPost(postData.data);
		} catch (error) {
			console.table(error);
		}
	};

	return (
		<form className="w-full relative max-w-2xl">
			<fieldset className="w-full relative">
				<legend className="sr-only">Search post</legend>
				<input
					type="text"
					onChange={handleSearchInputEvent}
					placeholder="Search post"
					className="bg-gray-200 outline-4 outline-white dark:outline-primary outline-none focus:outline-4 focus:outline-offset-0  focus:outline-sky-600 w-full px-4 py-4 rounded-md text-primary dark:text-white dark:bg-gray-700 transition-all focus:px-2 focus:border-none"
				/>
				<Link
					size={22}
					className="absolute top-1/2 right-4 transition-all transform -translate-y-1/2 text-primary dark:text-white"
				/>
			</fieldset>
		</form>
	);
};

export default SearchPost;
