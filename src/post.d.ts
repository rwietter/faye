interface Author {
	did: string;
	handle: string;
	displayName: string;
	avatar: string;
}

interface ExternalEmbed {
	description: string;
	thumb: string;
	title: string;
	uri: string;
}

interface Image {
	alt: string;
	aspectRatio: {
		height: number;
		width: number;
	};
	image?: Array<{
		ref: {
			$link: string;
		};
		mimeType: string;
		size: number;
	}>;
}

interface Facet {
	features: Array<{
		uri: string;
	}>;
	index: {
		byteEnd: number;
		byteStart: number;
	};
}

interface PostRecord {
	createdAt: string;
	embed: {
		external: ExternalEmbed;
		images: Image[];
	};
	facets?: Facet[];
	langs?: string[];
	text: string;
}

interface InternalEmbed {
	uri: string;
	title: string;
	description: string;
	thumb: string;
}

interface Post {
	uri: string;
	cid: string;
	author: Author;
	record: PostRecord;
	embed?: {
		external?: ExternalEmbed;
		images?: Array<{
			thumb: string;
			fullsize: string;
			alt: string;
			aspectRatio: {
				height: number;
				width: number;
			};
		}>;
	};
	replyCount: number;
	repostCount: number;
	likeCount: number;
}

interface Thread {
	post: Post;
}

export interface PostData {
	thread: Thread;
}
