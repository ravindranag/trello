import { IconButton, Stack, Theme, Typography, useMediaQuery } from "@mui/material"
import { Swimlane } from "../../../data/constants"
import { DotsThreeIcon } from "../../../components/icons"
import SwimlaneColumn from "./SwimlaneColumn"
import { useEffect, useRef } from "react"

type SwimlaneContainerProps = {
  swimlanes: Swimlane[]
}

type SwimlaneProps = {
  swimlane: Swimlane
}

const Swimlane = ({ swimlane }: SwimlaneProps) => {
  return (
    <Stack
      sx={{
        minWidth: '362px',
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
          {swimlane.title}
        </Typography>
        <IconButton sx={{ p: 0 }}>
          <DotsThreeIcon sx={{ width: 24, fill: '#cdccca' }}  />
        </IconButton>
      </Stack>


      <SwimlaneColumn cards={swimlane.cards}/> 
    </Stack>
  )
}

const SwimlaneContainer = ({ swimlanes }: SwimlaneContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isLtMd = useMediaQuery(theme => (theme as Theme).breakpoints.down('md'))
  useEffect(() => {
    console.log(containerRef.current?.scrollWidth)
  })

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
      }}
    >
      {swimlanes.map((swimlane, idx) => <Swimlane key={`swimlane-${idx}`} swimlane={swimlane}  /> )}
    </Stack>
  )
}

export default SwimlaneContainer
