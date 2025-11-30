import { create } from 'zustand'

export const useStore = create((set) => ({
    currentSection: null,
    setSection: (section) => set({ currentSection: section }),
}))
