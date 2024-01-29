import { Card } from "../../../data/constants"
import { Avatar, AvatarGroup, Box, Button, Stack, Typography } from "@mui/material"
import { ChatDotsIcon, HeartOutlineIcon, PaperClipIcon, PlusIcon } from "../../../components/icons"

type SwimlaneColumnProps = {
  cards: Card[]
}


const SwimlaneColumn = ({ cards }: SwimlaneColumnProps) => {

  return (
    <Stack
      component='ul'
      sx={{
        gap: '16px',
        paddingBottom: '20px'
      }}
    >
      {cards.map((card, idx) => (
        <Stack
          key={`card-${idx}`}
          component='li'
          borderRadius='16px'
          gap={2}
          padding='16px'
          bgcolor='#f4f4f4'
          draggable='true'
        >
          {card.coverImage && <Box
            sx={{
              width: '100%',
              height: '170px',
              overflow: 'hidden',
              borderRadius: '8px'
            }}
          >
            <img
              src={card.coverImage}
              style={{
                objectFit: 'cover',
                width: '100%',
              }}
            />
          </Box>}
          <Stack direction='row' flexWrap='wrap' gap='8px'>
            {card.tags.map((color, idx) => (
              <Box
                key={`tags-${idx}`}
                sx={{
                  bgcolor: color,
                  width: '60px',
                  height: '8px',
                  borderRadius: '10px'
                }}
              />
            ))}

          </Stack>
          <Stack>
            <Typography>
              {card.title}
            </Typography>
            <Typography
              sx={{
                opacity: 0.4
              }}
              variant="body2"
            >
              {card.description}
            </Typography>
          </Stack>

          <Stack
            direction='row'
            justifyContent='space-between'
          >
            <Stack
              direction='row'
              alignItems='center'
            >
              <AvatarGroup
                total={card.members}
                max={4}
                renderSurplus={_ => <></>}
                sx={{
                  '& .MuiAvatar-colorDefault': {
                    display: 'none'
                  }
                }}
                spacing={16}
              >
                {[...Array(card.members)].map((_, idx) => (
                  <Avatar
                    key={`member-${idx}`}
                    src={`/people/image-${idx + 1}.png`}
                    sx={{
                      zIndex: idx,
                      width: 30,
                      height: 30
                    }}
                  />
                ))}

              </AvatarGroup>
              <Avatar
                sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  fontSize: 20,
                  width: 30,
                  height: 30,
                  marginLeft: card.members > 0 ? '-16px' : 0,
                  zIndex: card.members + 1
                }}
              >
                <PlusIcon sx={{ fill: '#fff', width: 16 }} />
              </Avatar>
            </Stack>
            <Stack
              direction='row'
              gap='20px'
            >
              {['comments', 'likes', 'attachments'].map((count, idx) => (
                <Stack
                  direction='row'
                  alignItems='center'
                  gap='4px'
                  key={`counter-${idx}`}
                >
                  <Typography sx={{ opacity: 0.2 }}>{Object(card)[count]}</Typography>
                  {count === 'comments' && <ChatDotsIcon sx={{ width: 20, height: 20, opacity: 0.2 }} />}
                  {count === 'likes' && <HeartOutlineIcon sx={{ width: 20, height: 20, opacity: 0.2 }} />}
                  {count === 'attachments' && <PaperClipIcon sx={{ width: 20, height: 20, opacity: 0.2 }} />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      ))}
      <Button
        variant="outlined"
        sx={{
          height: '160px',
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
    </Stack>
  )
}

export default SwimlaneColumn
