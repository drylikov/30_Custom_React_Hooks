import React from 'react'
import { useLocalStorage } from './useStorage'

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <>
      <div>{name} - {age}</div>
      <button onClick={() => setName(name === "Kyle" ? "John" : "Kyle")}>Change Name</button>
      <button onClick={() => setAge(a => a + 1)}>Increment Age</button>
      <button onClick={() => setAge(a => a - 1)}>Decrement Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </>
  )
}
