import { createContext, useContext } from "react";

type DragOverlayContextValue = {
  activeId: string | null;
  setActiveId: (id: string | null) => void
}

export const DragOverlayContext = createContext<DragOverlayContextValue>({
  activeId: null,
  setActiveId: (_) => {}
})

export const useDragOverlayContext = () => useContext(DragOverlayContext)


