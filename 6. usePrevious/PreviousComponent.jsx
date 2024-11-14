import usePrevious from './usePrevious'
import React, { useState } from 'react'

export default function PreviousComponent() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("John")
  const previousCount = usePrevious(count)


  return (
    <>
      <div>{count} - {previousCount}</div>
      <div>{name}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setName(n => n === "John" ? "Kyle" : "John")}>Change Name</button>
    </>
  )
}
