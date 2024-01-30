import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core"
import SwimlaneContainer from "./SwimlaneContainer"
import { queryClient } from "../../../data/react-query/client"
import { SwimlaneRecord } from "../../../data/swimlanes"

type KanbanBoardProps = {
	swimlanes: string[]
}


const KanbanBoard = ({ swimlanes }: KanbanBoardProps) => {

	const handleDragEnd = (event: DragEndEvent) => {
		const cardId = event.active.id;
		const swimlaneId = event.over?.id
		const prevSwimlaneId = event.active.data.current!['swimlaneId'] as UniqueIdentifier
		if (!swimlaneId || !prevSwimlaneId || swimlaneId === prevSwimlaneId) return;

		queryClient.setQueryData(['swimlane', 'detail', swimlaneId], (old: never) => {
			const data = old['data'] as SwimlaneRecord
			const newCards = [...data.cards]
			newCards.push(cardId.toString())
			// console.log(newCards, 'new cards')
			return {
				data: {
					...data,
					cards: newCards
				}
			}
		})

		queryClient.setQueryData(['swimlane', 'detail', prevSwimlaneId], (old: never) => {
			const data = old['data'] as SwimlaneRecord
			// const newCards = [...data.cards]

			return {
				data: {
					...data,
					cards: data.cards.filter(cId => cId !== cardId)
				}
			}
		})

		// console.log(event.active.data)
		// console.log(`card ${cardId} dropped on swimlane ${swimlaneId}`)
	}

	return (
		<DndContext
			onDragEnd={handleDragEnd}
			// onDragStart={(event) => {
			// 	console.log(event, 'drag start')
			// }}
		>
			{swimlanes && <SwimlaneContainer swimlanes={swimlanes} />}
		</DndContext>
	)
}

export default KanbanBoard
