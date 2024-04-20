import { create } from "zustand";
import type { PostData } from "../post";

type State = {
	post: PostData | null;
	createPost: (url: PostData) => void;
};

const FakePost: PostData = {
	thread: {
		post: {
			author: {
				avatar: "https://avatars.dicebear.com/api/avataaars/bsky.svg",
				displayName: "Jens Jørgensen",
				handle: "jesen.bsky.social",
				did: "did:plc:0x1b2",
			},
			cid: "",
			uri: "at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q",
			likeCount: 102645,
			replyCount: 12467,
			repostCount: 25532,
			record: {
				createdAt: "2021-09-07T00:00:00Z",
				embed: {
					external: {
						description: "A description",
						thumb: "https://via.placeholder.com/150",
						title: "A title",
						uri: "https://example.com",
					},
					images: [
						{
							alt: "An image",
							aspectRatio: {
								height: 1,
								width: 1,
							},
							image: [
								{
									ref: {
										$link: "https://example.com",
									},
									mimeType: "image/jpeg",
									size: 1,
								},
							],
						},
					],
				},
				langs: ["en"],
				text: "“Fear is the mind-killer. Fear is the little death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past me I will turn to see fear’s path. Where the fear has gone there will be nothing. Only I will remain.” \n\n― Frank Herbert, Dune",
			},
		},
	},
};

const useSearch = create<State>((set) => ({
	post: FakePost,
	createPost: (post: PostData) => set({ post }),
}));

export { useSearch };
