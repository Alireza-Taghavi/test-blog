// stores/useDrawingStore.ts
import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

interface DrawingState {
  drawingData: string
  setDrawingData: (data: string) => void
}

type DrawingPersist = (
  config: StateCreator<DrawingState>,
  options: PersistOptions<DrawingState>
) => StateCreator<DrawingState>

const useDrawingStore = create<DrawingState>(
  (persist as DrawingPersist)(
    (set) => ({
      drawingData: '',
      setDrawingData: (data: string) => set({ drawingData: data }),
    }),
    {
      name: 'drawing-storage',
      getStorage: () => localStorage,
    }
  )
)

export default useDrawingStore
