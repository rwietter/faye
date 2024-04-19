import { Copy, Download, Moon, Sun, Swatches } from "phosphor-react";
import { useEffect, useState } from "react";
import { agent } from "../lib/api";

const gradients = [
	"linear-gradient(150deg, rgb(0, 224, 245), rgb(31, 158, 255), rgb(51, 85, 255))",
	"linear-gradient(150deg, rgb(0, 176, 158), rgb(19, 77, 93), rgb(16, 23, 31))",
	"linear-gradient(160deg, rgb(204, 251, 252), rgb(197, 234, 254), rgb(189, 211, 255))",
];

function App() {
	const [post, setPost] = useState<any>(null);
	const [isModal, setModal] = useState<boolean>(false);
	const [color, setColor] = useState(gradients[0]);

	useEffect(() => {
		(async () => {
			// const aturi = new AtUri(
			// 	"at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q",
			// );
			// at://did:plc:vjug55kidv6sye7ykr5faxxn/app.bsky.feed.post/3jzn6g7ixgq2y
			// at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q
			try {
				const data = await agent?.api.app.bsky.feed.getPostThread({
					uri: "at://did:plc:vjug55kidv6sye7ykr5faxxn/app.bsky.feed.post/3jzn6g7ixgq2y",
				});
				setPost(data);
			} catch (error) {
				console.table(error);
			}
		})();
	}, []);

	if (!post) return <div>Loading...</div>;

	const handleModalColorSelect = () => {
		setModal((modal) => !modal);
	};

	const handleSetColor = (color: string) => {
		setColor(color);
	};

	return (
		<div className="grid grid-rows-5 min-h-lvh h-full">
			<header className="flex w-full justify-between p-4">
				<div>
					<p>Poet.so</p>
				</div>
				<nav className="flex">
					<p>?</p>
					<Moon size={22} />
					<Sun size={22} />
				</nav>
			</header>

			<main className="row-span-3 flex items-center justify-center ">
				<div
					style={{
						backgroundImage: color,
					}}
					className="w-full min-h-96 h-auto flex items-center justify-center max-w-3xl rounded-md"
				>
					<blockquote
						className="w-auto p-4 rounded-md z-10 relative shadow-2xl mobile-scaling pointer-events-none backdrop-blur-sm backdrop-filter text-primary"
						data-bluesky-uri="at://did:plc:f5vtmdun7jt7rgyidzidrqya/app.bsky.feed.post/3kqifuur3w62q"
						data-bluesky-cid="bafyreihh4rd26oump4t5lbagdm3jcpdoy65v45h2c463xlte25aanohsea"
						style={{
							background:
								"linear-gradient(150deg,rgba(255,255,255,1),rgba(255,255,255,.4) 80%)",
						}}
					>
						<div className="flex items-center pb-3">
							<img
								src={post?.data?.thread?.post?.author?.avatar}
								className="inline object-cover rounded-full transition-all duration-150 w-12 h-12"
								alt=""
							/>
							<div className="whitespace-nowrap pl-4">
								<p className="text-primary font-bold">
									{post?.data?.thread?.post?.author?.displayName}
								</p>
								<p className="font-light text-sm">
									@{post?.data?.thread?.post?.author?.handle}
								</p>
							</div>
						</div>
						<p lang="pt" className="text-primary">
							{post?.data.thread.post.record.text}
							<br />
							<br />
							{post?.data?.thread?.post?.embed?.external ? (
								<a href="https://bsky.app/profile/did:plc:f5vtmdun7jt7rgyidzidrqya/post/3kqifuur3w62q?ref_src=embed">
									<img
										src={post?.data?.thread.post.embed.external.thumb}
										alt=""
									/>
								</a>
							) : (
								<div />
							)}
						</p>

						<section>
							<p className="font-light text-sm text-secondary">
								{new Intl.DateTimeFormat(
									post?.data?.thread?.post?.record.langs[0] || "en-us",
									{
										dateStyle: "medium",
										timeStyle: "short",
									},
								).format(new Date(post?.data?.thread?.post?.record.createdAt))}
							</p>
							<section className="flex space-x-2 pt-2 font-light">
								<p className="text-secondary">
									<strong className="font-bold text-sm text-primary">
										{post?.data.thread.post.likeCount}
									</strong>{" "}
									likes
								</p>
								<p className="text-secondary">
									<strong className="font-bold text-sm text-primary">
										{post?.data.thread.post.replyCount}
									</strong>{" "}
									replies
								</p>
								<p className="text-secondary">
									<strong className="font-bold text-sm text-primary">
										{post?.data.thread.post.repostCount}
									</strong>{" "}
									reposts
								</p>
							</section>
						</section>
					</blockquote>
				</div>
			</main>

			<footer className="flex items-center justify-center">
				<section className="flex justify-evenly rounded-md w-full max-w-lg p-4 backdrop-blur-lg backdrop-filter bg-white/30 shadow-2xl mobile-scaling">
					<Swatches
						size={32}
						className="cursor-pointer"
						onClick={handleModalColorSelect}
					/>
					{isModal && (
						<div className="fixed inset-0 -top-20 w-min h-min bg-white/30 backdrop-blur-xl backdrop-contrast-200 backdrop-filter p-2 rounded-md bg-opacity-50 flex space-x-2 ">
							{gradients.map((gradient: string) => (
								<div
									key={gradient}
									style={{ backgroundImage: gradient }}
									onClick={() => handleSetColor(gradient)}
									onKeyUp={() => handleSetColor(gradient)}
									className="w-12 h-12 rounded-md border-2 border-white cursor-pointer hover:shadow-lg transition-all duration-150"
								/>
							))}
						</div>
					)}
					<Copy size={32} />
					<Download size={32} />
				</section>
			</footer>
		</div>
	);
}

export default App;
