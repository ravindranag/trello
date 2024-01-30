import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";
import { CSSProperties, PropsWithChildren } from "react";

type DraggableItemProps = {
  id: string;
  data?: UseDraggableArguments['data']
}

const DraggableItem = ({ id, children, data }: PropsWithChildren<DraggableItemProps>) => {
  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
    data,
  })

  const style: CSSProperties | undefined = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  )
}

export default DraggableItem
