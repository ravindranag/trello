import { UseDraggableArguments, useDraggable } from "@dnd-kit/core";
import { CSSProperties, PropsWithChildren } from "react";

type DraggableItemProps = {
	id: string;
	data?: UseDraggableArguments['data']
}

const DraggableItem = ({ id, children, data }: PropsWithChildren<DraggableItemProps>) => {
	const { setNodeRef, attributes, listeners, transform, isDragging } = useDraggable({
		id,
		data,
		// disabled: !isTouchDevice
	})

	const style: CSSProperties | undefined = transform ? {
		transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
	} : undefined

	return (
		<div
			ref={setNodeRef}
			style={{
				...style,
				cursor: isDragging ? 'grabbing' : 'grab',
				touchAction: 'none',

			}}
			{...listeners}
			{...attributes}
		>
			{children}
		</div>
	)
}

export default DraggableItem
