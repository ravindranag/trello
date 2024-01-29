import { Avatar, IconButton, Stack, Typography, AvatarGroup } from "@mui/material"
import { GlobeOutlineIcon, HardDriveIcon, HeartOutlineIcon } from "../../../components/icons"
import VerticalDivider from "../../../components/ui/VerticalDivider"

const BoardHeader = () => {
  return (
    <Stack
        direction={{
          xs: 'column',
          md: 'row'
        }}
        alignItems={{
          xs: 'start',
          md: 'center'
        }}
        flexGrow={1}
        gap={2}
      >
        <Typography variant="h5" fontWeight={500} fontFamily='PoppinsMedium'>Brackets</Typography>
        <Stack
          direction='row'
          flexGrow={1}
          justifyContent='space-between'
          alignItems='center'
          width='100%'
        >
          <Stack
            direction='row'
            gap={{
              xs: '6px',
              md: '10px'
            }}
            alignItems='center'
            flexGrow={1}
          >
            <IconButton sx={{ p: 0 }}>
              <HeartOutlineIcon sx={{ opacity: 0.2, width: 20, height: 20 }} />
            </IconButton>
            <VerticalDivider />
            <Stack direction='row' gap='4px' alignItems='center'>
              <GlobeOutlineIcon sx={{ opacity: 0.2, width: 20, height: 20 }} />
              <Typography sx={{ opacity: 0.2 }}>Public</Typography>
            </Stack>
            <VerticalDivider />
            <IconButton sx={{ p: 0 }}>

              <HardDriveIcon sx={{ width: 20, height: 20 }} />
            </IconButton>

          </Stack>
          <Stack direction='row' alignItems='center' gap={2}>

            <AvatarGroup total={49} max={5} spacing={20} sx={{}} renderSurplus={(surplus) => (
              <Avatar sx={{
                bgcolor: '#000',
                zIndex: 50
              }}>
                <Typography variant="caption" color='#fff'>+{surplus}</Typography>
              </Avatar>
            )}>
              {[...Array(44)].map((_, idx) => <Avatar key={idx} src={`/people/image-${idx + 1}.png`} sx={{ zIndex: idx }} />)}
            </AvatarGroup>
            <Typography>
              Menu
            </Typography>
          </Stack>
        </Stack>
      </Stack>
  )
}

export default BoardHeader
