import React from 'react'
import useArray from '../hooks/useArray'

export default function ArrayComponent() {
  const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])
  return (
    <>
      <span>{array.join(", ")}</span>
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Set the second element to 9</button>
      <button onClick={() => remove(1)}>Remove second element</button>
      <button onClick={() => filter(n => n < 3)}>Keep numbers less than 4</button>
      <button onClick={() => set([1, 2])}>Set 1 and 2</button>
      <button onClick={clear}>Clear</button>
    </>
  )
}
