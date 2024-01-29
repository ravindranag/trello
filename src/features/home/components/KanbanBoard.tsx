import { Stack } from "@mui/material"
import { useBoardDetailQuery } from "../../../data/react-query/query"
import SwimlaneContainer from "./SwimlaneContainer"

const KanbanBoard = () => {
  const { data } = useBoardDetailQuery('Brackets')
  console.log(data)
  return (
    <>
     {data && data.data && <SwimlaneContainer swimlanes={data.data.swimlanes} /> } 
    </> 
  )
}

export default KanbanBoard
