import React, { useState } from 'react'
import useRenderCount from './useRenderCount'

export default function RenderCountComponent() {
  const [boolean, setBoolean] = useState(false)
  const renderCount = useRenderCount()

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={() => setBoolean(b => !b)}>Toggle</button>
    </>
  )
}
