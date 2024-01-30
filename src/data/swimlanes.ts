export type SwimlaneRecord = {
	name: string;
	cards: string[]
}

export type SwimlaneDetail = {
	[key: string]: SwimlaneRecord
}

export const swimlaneDetails: SwimlaneDetail = {
	'f813fb24-1770-4440-aa64-25a2232f7739': {
		name: 'Design',
		cards: [
			'69241110-9238-4c3b-9ac6-6ecae113654f',
			'a52f6c46-ae92-4030-bef8-44e564d6d5ef',
			'0fc4802c-45c2-45f3-bddb-17b92cfe11a2',
		]
	},
	'c87d5181-1f60-4475-8c79-bad108dbc363': {
		name: 'Prototip',
		cards: [
			'ca868f2f-daf6-4b7e-8d13-b44a9526ec08',
			'bd7b00c2-fb43-4108-a0bc-8289e0b6ef43',
			'8b0a86eb-a544-4eaa-98a3-70897a8f51f2',
		]
	},
	'b241c879-452d-48d3-a8c1-ad04d09d1e56': {
		name: 'Trello',
		cards: [
			'545a54a7-58cf-4dc0-942d-ac2976b9ee23',
			'0c2a4aea-f4cf-4628-af92-0593beea31a7',
		]
	},
	'f195719d-7832-4f3a-8866-f8feea04f9c0': {
		name: 'Test',
		cards: [
			'319166b4-b00d-432d-9ee1-31946839857c',
			'bee900e8-3328-44de-a98e-7236173a4bc0',
			'a1fcf597-f6e7-4df3-a707-2cc0a35e5b9a',
			'4c81a55d-cc19-43b6-80fe-1d78a2dd8239',
		]
	},
	'ce40cfe0-5273-4395-99a9-c480e8bc2135': {
		name: 'Final',
		cards: [
			'2cabc92c-1c6d-4c15-95cf-06a881ef9fb3',
			'b67f2833-b871-41dc-9ea1-4108898993cc',
			'321b5bd1-82cd-41a9-90a6-48c1f1847a9e',
		]
	}
}