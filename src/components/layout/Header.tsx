import { AppBar, Avatar, Box, Divider, IconButton, Stack, TextField, Theme, Typography, useMediaQuery } from "@mui/material"
import { BellOutlineIcon, PlusCircleIcon, SearchIcon, TrelloBoardIcon, WarningCircleIcon } from "../icons"
import VerticalDivider from "../ui/VerticalDivider"
import { randomAvatar } from "../../utils/avatar"

const SearchField = () => {
  return (
    <TextField
      sx={{
        '& .MuiFilledInput-root': {
          bgcolor: '#f4f4f4',
          borderRadius: 100,
          alignItems: 'center',
          width: '100%',
          maxWidth: '512px'
        },
        '& .MuiFilledInput-input': {
          padding: '7px 8px',
          fontSize: '16px'
        },
        flexGrow: 1
      }}
      InputProps={{
        endAdornment: <SearchIcon sx={{ width: '15px', height: '15px' }} />,
        disableUnderline: true
      }}
      variant="filled"

    />
  )
}

const Header = () => {
  const isLtMd = useMediaQuery(theme => (theme as Theme).breakpoints.down('md'))

  return (
    <AppBar
      position="sticky"
      elevation={0}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        padding={{
          xs: '16px',
          md: '16px 30px'
        }}
        sx={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
        }}
      >
        <Stack direction='row' gap='20px' flexGrow={1}>
          <Box component='img' src="/logo.svg" sx={{ width: 75, display: { xs: 'none', md: 'block' } }} />
          <VerticalDivider sx={{ display: { xs: 'none', md: 'flex'} }}/>
          <Stack
            direction='row'
            alignItems='center'
            gap='5px'
          >
            <TrelloBoardIcon sx={{ width: 30, height: 30 }} />
            <Typography sx={{ display: { xs: 'none', md: 'block' } }}>Boards</Typography>
          </Stack>
          <VerticalDivider sx={{ display: { xs: 'none', md: 'flex'} }} />
          {isLtMd ? (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ) : (
            <SearchField />
          )}
        </Stack>
        <Stack
          direction='row'
          gap={{
            xs: '10px',
            md: '30px'
          }}
        >
          <Stack
            direction='row'
            alignItems='center'
            gap={{
              xs: '10px',
              md: '20px'
            }}
          >
            <PlusCircleIcon sx={{ opacity: 0.2, width: 20, height: 20, fill: '#000' }} />
            <WarningCircleIcon sx={{ opacity: 0.2, width: 20, height: 20 }} />
            <BellOutlineIcon sx={{ opacity: 0.2, width: 20, height: 20 }} />
          </Stack>
          <Avatar
            alt="John Doe"
            src='/people/image-1.png'
          />
        </Stack>
      </Stack>
    </AppBar>
  )
}

export default Header
