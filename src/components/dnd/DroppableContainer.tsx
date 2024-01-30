import { useDroppable } from "@dnd-kit/core"
import { PropsWithChildren } from "react"

type DroppableContainerProps = {
  id: string;
}

const DroppableContainer = (props: PropsWithChildren<DroppableContainerProps>) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })

  return (
    <div
      ref={setNodeRef}
      style={{
        outline: isOver ? '1px solid lime' : 'none',
        height: 'max-content',
        flexGrow: 1,
		background: isOver ? '#32cd3250' : 'transparent',

      }}
    >
      {props.children}
    </div>
  )
}

export default DroppableContainer
