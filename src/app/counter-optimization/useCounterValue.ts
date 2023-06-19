import { useContext } from "react"
import { CounterValueContext } from "./CounterProvider"

function useCounterValue() {
  const value = useContext(CounterValueContext)

  if(value === undefined) {
    throw new Error('useCounterValue must be used within CounterProvider');
  }

  return value;
}

export default useCounterValue;