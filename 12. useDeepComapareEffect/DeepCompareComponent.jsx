import React, { useEffect, useRef, useState } from 'react'
import useDeepCompareEffect from './useDeepCompareEffect'

export default function DeepCompareComponent() {
  const [age, setAge] = useState(0)
  const [count, setCount] = useState(0)
  const useEffectCountRef = useRef()
  const useDeepCompareEffectCountRef = useRef()

  const person = { 
    age: age,
    name: "Kyle"
  }

  useEffect(() => {
    useEffectCountRef.current.textContent = parseInt(useEffectCountRef.current.textContent) + 1
  }, [person])

  useDeepCompareEffect(() => {
    useDeepCompareEffectCountRef.current.textContent = parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
  }, [person])

  return (
    <>
      <div>useEffect: <span ref={useEffectCountRef}>0</span></div>
      <div>useDeepCompareEffect <span ref={useDeepCompareEffectCountRef}>0</span></div>
      <div>Other Count: {count}</div>
      <div>{JSON.stringify(person, null, 2)}</div>
      <button onClick={() => setAge(a => a + 1)}>Increment Age</button>
      <button onClick={() => setCount(c => c + 1)}>Increment count</button>
    </>
  )
}
