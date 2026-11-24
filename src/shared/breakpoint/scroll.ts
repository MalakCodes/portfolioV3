import { createContext, useContext, type RefObject } from 'react'

/** The page scrolls inside its own container; reveals and scroll progress read from it. */
export const ScrollRootContext = createContext<RefObject<HTMLDivElement | null> | null>(null)

export function useScrollRoot() {
  return useContext(ScrollRootContext) ?? undefined
}

export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1]