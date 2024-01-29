import { IconButton, Stack, Typography } from "@mui/material"
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
          boxShadow: '0 1px 16px 1px rgba(0, 0, 0, 0.1)'
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

  useEffect(() => {
    console.log(containerRef.current?.scrollWidth)
  })

  return (
    <Stack
      ref={containerRef}
      direction='row'  
      height='calc(100vh - 166px)' 
      gap='30px'
      sx={{
        display: {
          xs: '-webkit-box',
          md: 'flex'
        },
        overflowX: 'scroll',
      }}
    >
      {swimlanes.map((swimlane, idx) => <Swimlane key={`swimlane-${idx}`} swimlane={swimlane}  /> )}
    </Stack>
  )
}

export default SwimlaneContainer
