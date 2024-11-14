import { useState } from "react";

export default function useToggle(defaulValue) {
  const [value, setValue] = useState(defaulValue)
  
  function toggleValue(value){
    setValue(curr => {
      typeof value === "boolean" ? value : !curr
    })
  }

  return [value, toggleValue]
}