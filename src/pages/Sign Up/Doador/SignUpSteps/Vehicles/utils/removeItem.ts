import { MouseEvent, MouseEventHandler } from "react"

export const removeItem: MouseEventHandler = (e: MouseEvent) => {
    e.currentTarget.parentElement?.parentElement?.remove()
}