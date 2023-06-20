import { createContext, useMemo, useState } from "react";

export interface CounterProps {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

export const CounterContext = createContext<CounterProps | undefined>(undefined);

export interface CounterProviderProps {
  value?: number;
  children: React.ReactNode;
}

function CounterProvider({ value = 0, children }: CounterProviderProps) {
  const [counter, setCounter] = useState(value);

  const memoizedValue = useMemo(() => ({
    counter,
    increase: () => setCounter((prev) => prev + 1),
    decrease: () => setCounter((prev) => prev - 1),
  }), [counter]);

  return (
    <CounterContext.Provider value={memoizedValue}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider;