import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

type CardProps = {
	color: string;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const Card: React.FC<CardProps> = ({ color }: any) => {
	return (
		<div
			style={{
				backgroundImage: color,
			}}
			className="w-full h-auto py-10 px-10 flex items-center justify-center max-w-2xl rounded-md"
		>
			<blockquote
				className="p-4 rounded-md z-10 w-full relative shadow-2xl backdrop-blur-3xl text-primary dark:text-white"
				data-bluesky-uri="at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q"
			>
				<div className="absolute pointer-events-none z-20 mix-blend-multiply dark:mix-blend-lighten top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(255,255,255,1)] to-[rgba(255,255,255,.4)] to-80% dark:from-[rgba(0,0,0,1)] dark:to-[rgba(0,0,0,.6)] rounded-md" />
				<PostHeader />
				<PostContent />
				<PostFooter />
			</blockquote>
		</div>
	);
};

export default Card;
