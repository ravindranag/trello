export type CardRecord = {
	title: string;
	tags: string[];
	members: number;
	comments: number;
	likes: number;
	attachments: number;
	description?: string;
	coverImage?: string;
}

export type CardDetail = {
	[key: string]: CardRecord
}

export const cardDetails: CardDetail = {
	'69241110-9238-4c3b-9ac6-6ecae113654f': {
		title: "Old fashioned recipe for preventing allergies and chemical sensitivities",
		tags: ["yellow"],
		members: 1,
		comments: 34,
		likes: 14,
		attachments: 34,
	},
	'a52f6c46-ae92-4030-bef8-44e564d6d5ef': {
		title: "Home business advertising ideas",
		description: 'Successful businesses know the importance of building and maintaining good working.',
		tags: ["blue", 'red', 'purple', 'lime'],
		members: 1,
		comments: 34,
		likes: 14,
		attachments: 34,
	},
	'0fc4802c-45c2-45f3-bddb-17b92cfe11a2': {
		title: "Cosmetic surgery abroad making the right choice",
		tags: ["skyblue"],
		members: 1,
		comments: 34,
		likes: 14,
		attachments: 34,
		coverImage: '/image-1.png',
	},
	'ca868f2f-daf6-4b7e-8d13-b44a9526ec08': {
		title: 'Home business advertising ideas',
		description: "Successful businesses know the importance of building and maintaining good working.",
		tags: ['blue', 'red', 'purple'],
		members: 0,
		likes: 21,
		comments: 3,
		attachments: 42,
	},
	'bd7b00c2-fb43-4108-a0bc-8289e0b6ef43': {
		title: 'Unmatched toner cartridge quality 20 less than oem price',
		description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year's list of goals this year because it's as good as new.",
		tags: ['skyblue', 'yellow'],
		members: 0,
		likes: 21,
		comments: 3,
		attachments: 42,
		coverImage: '/image-2.png',
	},
	'8b0a86eb-a544-4eaa-98a3-70897a8f51f2': {
		title: 'How to look up',
		description: "Are you considering buying a compatible inkjet cartridge for your printer?",
		tags: ['lime'],
		members: 0,
		likes: 21,
		comments: 3,
		attachments: 42,
		coverImage: '/image-3.png',
	},
	'545a54a7-58cf-4dc0-942d-ac2976b9ee23': {
		title: "Types of paper in catalog painting",
		description: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
		tags: ['purple', 'red', 'skyblue'],
		members: 3,
		likes: 65,
		comments: 23,
		attachments: 65,
		coverImage: '/image-3.png',
	},
	'0c2a4aea-f4cf-4628-af92-0593beea31a7': {
		title: "There is no competition",
		description: "This article is floated online with an aim to help you find the best dvd printing solution.",
		tags: ['purple', 'lime'],
		members: 3,
		likes: 65,
		comments: 23,
		attachments: 65,
		coverImage: '/image-4.png',
	},
	'319166b4-b00d-432d-9ee1-31946839857c': {
		title: 'Linux or windows which it is',
		description: 'Saving money - is something we would all like.',
		tags: ['skyblue', 'red'],
		members: 5,
		likes: 56,
		comments: 22,
		attachments: 2,
	},
	'bee900e8-3328-44de-a98e-7236173a4bc0': {
		title: 'Be single minded',
		description: 'Create a list with all possible keywords that fit to your product, service or business field.',
		tags: ['skyblue', 'red', 'purple'],
		members: 5,
		likes: 56,
		comments: 22,
		attachments: 2,
		coverImage: '/image-5.png',
	},
	'a1fcf597-f6e7-4df3-a707-2cc0a35e5b9a': {
		title: 'Linux or windows which it is',
		description: 'Saving money - is something we would all like.',
		tags: ['skyblue', 'red'],
		members: 5,
		likes: 56,
		comments: 22,
		attachments: 2,
	},
	'4c81a55d-cc19-43b6-80fe-1d78a2dd8239': {
		title: 'Dna the future of nutrition',
		description: '“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.',
		tags: ['blue', 'lime'],
		members: 5,
		likes: 56,
		comments: 22,
		attachments: 2,
	},
	'2cabc92c-1c6d-4c15-95cf-06a881ef9fb3': {
		title: 'At home treatments or beauty on a budget',
		description: 'The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.',
		tags: ['yellow', 'red', 'purple'],
		members: 0,
		likes: 23,
		comments: 65,
		attachments: 12,
	},
	'b67f2833-b871-41dc-9ea1-4108898993cc': {
		title: 'Home business advertising ideas',
		description: 'Successful businesses know the importance of building and maintaining good working.',
		tags: ['purple', 'lime'],
		members: 0,
		likes: 23,
		comments: 65,
		attachments: 12,
	},
	'321b5bd1-82cd-41a9-90a6-48c1f1847a9e': {
		title: 'Tips for choosing the perfect gloss for your lips',
		description: 'With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.',
		tags: ['skyblue', 'yellow'],
		members: 0,
		likes: 23,
		comments: 65,
		attachments: 12,
		coverImage: '/image-6.png',
	},
}