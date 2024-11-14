import { useEffect,  useRef } from "react";

export default function useEventListener(event, callback, element = window) {
  const callbackRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])  

  useEffect(() => {
    const handler = (e) => callbackRef.current(e)
    element.addEventListener(event, handler)
    return () => element.removeEventListener(event, handler)
  }, [event, element])
}