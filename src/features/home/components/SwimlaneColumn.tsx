import { useState } from "react"
import { Card } from "../../../data/constants"
import { Reorder } from "framer-motion"
import { Avatar, AvatarGroup, Box, Stack, Typography } from "@mui/material"
import { ChatDotsIcon, HeartOutlineIcon, PaperClipIcon, PlusIcon } from "../../../components/icons"

type SwimlaneColumnProps = {
  cards: Card[]
}


const SwimlaneColumn = ({ cards }: SwimlaneColumnProps) => {
  const [items, setItems] = useState(cards)

  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={setItems}
      style={{
        padding: '16px 0',
        // display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
      layout
      layoutRoot
    >
      {items.map((card, idx) => (
        <Reorder.Item
          key={`card-${idx}`}
          value={card}
        >
          <Stack
            borderRadius='10px'
            gap={2}
            padding='16px'
            bgcolor='#f4f4f4'
            marginTop='16px'
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
                    {count === 'likes' && <HeartOutlineIcon sx={{ width: 20, height: 20 , opacity: 0.2 }}/>}
                    {count === 'attachments' && <PaperClipIcon sx={{ width: 20, height: 20, opacity: 0.2  }}/>}
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}

export default SwimlaneColumn
