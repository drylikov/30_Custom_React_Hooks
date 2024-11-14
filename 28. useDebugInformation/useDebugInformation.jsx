import { useEffect, useRef } from "react";
import useRenderCount from "../27. useRenderCount/useRenderCount";

export default function useDebugInformation(componentName, props) {
  const count = useRenderCount()
  const changedProps = useRef({})
  const previousProps = useRef(props)
  const lastRenderTime = useRef(Date.now())
  const propsKeys = Object.keys({ ...props, ...previousProps })

  changedProps.current = propsKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj
    return { ...obj, [key]: { previous: previousProps.current[key], current: props[key] }}
  }) 

  const info = { 
    count, 
    changedProps: changedProps.current, 
    timeSinceLastRender: Date.now() - lastRenderTime.current, 
    lastRenderTime: lastRenderTime.current
  }

  useEffect(() => {
    previousProps.current = props
    lastRenderTime.current = Date.now()
    console.debug("[debug-info]", componentName, info)
  })

  return info
}