import { Button, Stack, Typography } from "@mui/material"
import TaskCard from "./TaskCard"
import DraggableItem from "../../../components/dnd/Draggable"

type SwimlaneColumnProps = {
	cards: string[],
	swimlaneId: string
}




const SwimlaneColumn = ({ cards, swimlaneId }: SwimlaneColumnProps) => {

	return (
		<Stack
			component='ul'
			sx={{
				gap: '16px',
				paddingBottom: '20px',
				height: '100%'
			}}
		>
			{cards.map((cardId) => (
				<DraggableItem
					key={cardId}
					id={cardId}
					data={{
						swimlaneId
					}}
				>
					<TaskCard cardId={cardId} />
				</DraggableItem>
			))}
			<Button
				variant="outlined"
				sx={{
					minHeight: '160px',
					justifyContent: 'center',
					alignItems: 'center',
					textTransform: 'none',
					borderStyle: 'dashed',
					borderColor: 'rgba(0, 0, 0, 0.2)',
					borderRadius: '16px'
				}}
			>
				<Typography>
					+ Add new card
				</Typography>
			</Button>
			{/*<DragOverlay>
        { activeId && cards.some(card => card.id === activeId) ? <TaskCard card={cards.find(card => card.id === activeId)!} /> : null }
      </DragOverlay>*/}
		</Stack>
	)
}

export default SwimlaneColumn
