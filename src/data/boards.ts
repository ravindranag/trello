export type BoardDetail = {
	[key: string]: {
		name: string;
		swimlanes: string[]
	}
}

export const boardDetails: BoardDetail = {
	'6233e3a7-e8c6-4fde-adc9-a0218e5e82d9': {
		name: 'Brackets',
		swimlanes: [
			'f813fb24-1770-4440-aa64-25a2232f7739',
			'c87d5181-1f60-4475-8c79-bad108dbc363',
			'b241c879-452d-48d3-a8c1-ad04d09d1e56',
			'f195719d-7832-4f3a-8866-f8feea04f9c0',
			'ce40cfe0-5273-4395-99a9-c480e8bc2135',
		]
	}
}
