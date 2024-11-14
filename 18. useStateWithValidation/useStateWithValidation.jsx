import { useCallback, useState } from "react";

export default function useStateWithValidation(validationFunc, intitialValue) {
  const [state, setState] = useState(intitialValue)
  const [isValid, setIsValid] = useState(() => validationFunc(state))  

  const onChange = useCallback((nextState) => {
    const value = typeof nextState === "function" ? nextState() : nextState
    setState(value)
    setIsValid(validationFunc(value))
  }, [validationFunc])

  return [state, onChange, isValid]
}