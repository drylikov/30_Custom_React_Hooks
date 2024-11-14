import React, { useRef } from 'react'
import useLongPress from './useLongPress'

export default function LongPressComponent() {
  const ref = useRef()
  useLongPress(ref, () => alert("Long Press"), { delay: 300})

  return (
    <div ref={ref} style={{
      backgroundColor: "blue",
      width: "350px",
      height: "350px",
      position: "absolute",
      top: "calc(50% - 175px)",
      left: "calc(50% - 175px)"
    }}></div>
  )
}
