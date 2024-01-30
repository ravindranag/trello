import { IconButton, Stack, Theme, Typography, useMediaQuery } from "@mui/material"
import { DotsThreeIcon } from "../../../components/icons"
import SwimlaneColumn from "./SwimlaneColumn"
import { useRef } from "react"
import DroppableContainer from "../../../components/dnd/DroppableContainer"
import { useSwimlaneDetailQuery } from "../../../data/react-query/query"

type SwimlaneContainerProps = {
	swimlanes: string[]
}

type SwimlaneProps = {
	swimlaneId: string
}

const Swimlane = ({ swimlaneId }: SwimlaneProps) => {
	const { data } = useSwimlaneDetailQuery(swimlaneId)
	const cards = data?.data.cards

	if (!cards) return null
	return (
		<Stack
			sx={{
				minWidth: '362px',
				height: '100%',
				// maxWidth: '362px',
				width: {
					xs: 'calc(100vw - 32px)',
					sm: '362px'
				},
				gap: '16px'
			}}
		>
			<Stack
				direction='row'
				justifyContent='space-between'
				gap={2}
				padding='14px 20px'
				bgcolor='#f4f4f4'
				borderRadius='10px'
				sx={{
					position: 'sticky',
					top: '0px',
					zIndex: 20,
				}}
			>
				<Typography
					fontFamily='PoppinsMedium'
				>
					{data?.data.name}
				</Typography>
				<IconButton sx={{ p: 0 }}>
					<DotsThreeIcon sx={{ width: 24, fill: '#cdccca' }} />
				</IconButton>
			</Stack>


			<SwimlaneColumn cards={data?.data.cards} swimlaneId={swimlaneId} />
		</Stack>
	)
}

const SwimlaneContainer = ({ swimlanes }: SwimlaneContainerProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const isLtMd = useMediaQuery(theme => (theme as Theme).breakpoints.down('md'))


	return (
		<Stack
			ref={containerRef}
			direction='row'
			height={`calc(100vh - ${isLtMd ? 200 : 166}px)`}
			gap='30px'
			sx={{
				display: {
					xs: '-webkit-box',
					md: 'flex'
				},
				overflowX: 'auto',
				alignItems: 'stretch'
			}}
		>
			{swimlanes.map((swimlaneId) => (
				<DroppableContainer
					key={swimlaneId}
					id={swimlaneId}

				>
					<Swimlane swimlaneId={swimlaneId} />
				</DroppableContainer>
			))}
		</Stack>
	)
}

export default SwimlaneContainer
