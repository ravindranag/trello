import { Dashboard } from './constants'

export const data = {
	boards: [
		{
			title: "Brackets",
			members: 49,
			swimlanes: [
				{
					title: "Design",
					cards: [
						{
							title: "Old fashioned recipe for preventing allergies and chemical sensitivities",
							tags: ["yellow"],
							members: 1,
							comments: 34,
							likes: 14,
							attachments: 34
						},
						{
							title: "Home business advertising ideas",
							description: 'Successful businesses know the importance of building and maintaining good working.',
							tags: ["blue", 'red', 'purple', 'lime'],
							members: 1,
							comments: 34,
							likes: 14,
							attachments: 34
						},
						{
							title: "Cosmetic surgery abroad making the right choice",
							tags: ["skyblue"],
							members: 1,
							comments: 34,
							likes: 14,
							attachments: 34,
							coverImage: '/image-1.png'
						},
					]
				},
				{
					title: 'Prototip',
					cards: [
						{
							title: 'Home business advertising ideas',
							description: "Successful businesses know the importance of building and maintaining good working.",
							tags: ['blue', 'red', 'purple'],
							members: 0,
							likes: 21,
							comments: 3,
							attachments: 42
						},
						{
							title: 'Unmatched toner cartridge quality 20 less than oem price',
							description: "Why read motivational sayings? For motivation! You might need a bit, if you can use last year's list of goals this year because it's as good as new.",
							tags: ['skyblue', 'yellow'],
							members: 0,
							likes: 21,
							comments: 3,
							attachments: 42,
							coverImage: '/image-2.png'
						},
						{
							title: 'How to look up',
							description: "Are you considering buying a compatible inkjet cartridge for your printer?",
							tags: ['lime'],
							members: 0,
							likes: 21,
							comments: 3,
							attachments: 42,
							coverImage: '/image-3.png'
						},
					]
				},
				{
					title: "Trello",
					cards: [
						{
							title: "Types of paper in catalog painting",
							description: "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
							tags: ['purple', 'red', 'skyblue'],
							members: 3,
							likes: 65,
							comments: 23,
							attachments: 65,
							coverImage: '/image-3.png'
						},
						{
							title: "There is no competition",
							description: "This article is floated online with an aim to help you find the best dvd printing solution.",
							tags: ['purple', 'lime'],
							members: 3,
							likes: 65,
							comments: 23,
							attachments: 65,
							coverImage: '/image-4.png'
						},
					]
				},
				{
					title: 'Test',
					cards: [
						{
							title: 'Linux or windows which it is',
							description: 'Saving money - is something we would all like.',
							tags: ['skyblue', 'red'],
							members: 5,
							likes: 56,
							comments: 22,
							attachments: 2,
						},
						{
							title: 'Be single minded',
							description: 'Create a list with all possible keywords that fit to your product, service or business field.',
							tags: ['skyblue', 'red', 'purple'],
							members: 5,
							likes: 56,
							comments: 22,
							attachments: 2,
							coverImage: '/image-5.png'
						},
						{
							title: 'Linux or windows which it is',
							description: 'Saving money - is something we would all like.',
							tags: ['skyblue', 'red'],
							members: 5,
							likes: 56,
							comments: 22,
							attachments: 2,
						},
						{
							title: 'Dna the future of nutrition',
							description: '“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.',
							tags: ['blue', 'lime'],
							members: 5,
							likes: 56,
							comments: 22,
							attachments: 2,
						},
					]
				},
				{
					title: 'Final',
					cards: [
						{
							title: 'At home treatments or beauty on a budget',
							description: 'The holidays bring with them thoughts of carving and serving delicious turkey dinners to your family and friends. Tradition has its fans, but perhaps this year you’d like to try a twist to your turkey recipe.',
							tags: ['yellow', 'red', 'purple'],
							members: 0,
							likes: 23,
							comments: 65,
							attachments: 12,
						},
						{
							title: 'Home business advertising ideas',
							description: 'Successful businesses know the importance of building and maintaining good working.',
							tags: ['purple', 'lime'],
							members: 0,
							likes: 23,
							comments: 65,
							attachments: 12,
						},
						{
							title: 'Tips for choosing the perfect gloss for your lips',
							description: 'With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.',
							tags: ['skyblue', 'yellow'],
							members: 0,
							likes: 23,
							comments: 65,
							attachments: 12,
							coverImage: '/image-6.png'
						},
					]
				}
			]
		}
	]
} satisfies Dashboard
