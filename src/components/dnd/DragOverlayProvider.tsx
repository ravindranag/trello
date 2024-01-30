import { PropsWithChildren, useState } from "react"
import { DragOverlayContext } from "../../context/DragOverlayContext"

const DragOverlayProvider = ({ children }: PropsWithChildren) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  return (
    <DragOverlayContext.Provider
      value={{
        activeId,
        setActiveId
      }}
    >
      {children}
    </DragOverlayContext.Provider>
  )
}

export default DragOverlayProvider
