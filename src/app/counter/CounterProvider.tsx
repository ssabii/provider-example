"use client";

import { createContext, useMemo, useState } from "react";

export interface CounterProps {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

export const CounterContext = createContext<CounterProps | undefined>(undefined);

interface CounterProviderProps {
  children: React.ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const [counter, setCounter] = useState(1);

  const value = useMemo(() => ({
    counter,
    increase: () => setCounter((prev) => prev + 1),
    decrease: () => setCounter((prev) => prev - 1),
  }), [counter]);

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider;