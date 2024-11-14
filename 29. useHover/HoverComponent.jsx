import React, { useRef } from 'react'
import useHover from './useHover'

export default function HoverComponent() {
  const ref = useRef()
  const hovered = useHover(ref)
  return (
    <div ref={ref} style={{
      backgroundColor: hovered ? "blue" : "red",
      width: "350px",
      height: "350px",
      position: "absolute",
      top: "calc(50% - 175px)",
      left: "calc(50% - 175px)"
    }}></div>
  )
}
