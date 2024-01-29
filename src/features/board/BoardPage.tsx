import KanbanBoard from "./components/KanbanBoard"
import BoardHeader from "./components/BoardHeader"
import { Stack } from "@mui/material"

const BoardPage = () => {
  return (
    <Stack
      padding={{
        xs: '16px',
        md: '30px 30px 0'
      }}
      gap={2}
    >
      <BoardHeader /> 
      <KanbanBoard />
    </Stack>
  )
}

export default BoardPage
