import { useEffect } from "react";
import { agent } from "../../../lib/api";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

type CardProps = {
	post: any;
	color: string;
	setPost: any;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Card: React.FC<CardProps> = ({ post, color, setPost }: any) => {
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		(async () => {
			try {
				const identity = await agent.com.atproto.identity.resolveHandle({
					handle: "rwietter.dev",
				});

				const data = await agent?.api.app.bsky.feed.getPostThread({
					uri: `at://${identity.data.did}/app.bsky.feed.post/3kqh7tesirs2b`,
				});
				setPost(data);
			} catch (error) {
				console.table(error);
			}
		})();
	}, []);

	if (!post) return <div>Loading...</div>;

	console.log(post);

	return (
		<div
			style={{
				backgroundImage: color,
			}}
			className="w-full h-auto py-20 px-20 flex items-center justify-center max-w-2xl rounded-md"
		>
			<blockquote
				className="p-4 rounded-md z-10 w-full relative shadow-2xl backdrop-blur-3xl text-primary dark:text-white"
				data-bluesky-uri="at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q"
				data-bluesky-cid="bafyreihh4rd26oump4t5lbagdm3jcpdoy65v45h2c463xlte25aanohsea"
			>
				<div className="absolute z-20 mix-blend-multiply dark:mix-blend-lighten top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(255,255,255,.4)] to-80% dark:from-[rgba(0,0,0,1)] dark:to-[rgba(0,0,0,.6)] rounded-md" />
				<PostHeader post={post} />
				<PostContent post={post} />
				<PostFooter post={post} />
			</blockquote>
		</div>
	);
};

export default Card;
