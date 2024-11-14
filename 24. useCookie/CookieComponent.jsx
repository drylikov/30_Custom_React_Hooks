import React from 'react'
import useCookie from './useCookie'

export default function CookieComponent() {
  const [value, update, remove] = useCookie("name", "John")

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update(value === "Saly" ? "John" : "Saly")}>Change name</button>
      <button onClick={remove}>Delete name</button>
    </>
  )
}
