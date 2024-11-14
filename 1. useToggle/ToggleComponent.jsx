import React, { useState } from 'react'
import useToggle from "./useToggle"

export default function ToggleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <>
      <span>{value.toString()}</span>
      <br />
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Set true</button>
      <button onClick={() => toggleValue(false)}>Set false</button>
    </>  
  )
}
