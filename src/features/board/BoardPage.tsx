import KanbanBoard from "./components/KanbanBoard"
import BoardHeader from "./components/BoardHeader"
import { Stack } from "@mui/material"
import { useBoardDetailQuery } from "../../data/react-query/query"

const BoardPage = () => {
	const { data } = useBoardDetailQuery('6233e3a7-e8c6-4fde-adc9-a0218e5e82d9')

	return (
		<Stack
			padding={{
				xs: '16px',
				md: '30px 30px 0'
			}}
			gap={2}
		>
			{data && data.data && (
				<>
					<BoardHeader name={data.data['name']} />
					<KanbanBoard swimlanes={data.data['swimlanes']} />
				</>
			)}
		</Stack>
	)
}

export default BoardPage
