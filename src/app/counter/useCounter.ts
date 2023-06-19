import { useContext } from "react"
import { CounterContext } from "./CounterProvider"

function useCounter() {
  const value = useContext(CounterContext)

  if(value === undefined) {
    throw new Error('useCounter must be used within CounterProvider');
  }

  return value;
}

export default useCounter;