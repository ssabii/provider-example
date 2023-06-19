import { createContext, useMemo, useState } from "react";

export interface CounterValueProps {
  counter: number;
}

export const CounterValueContext = createContext<CounterValueProps | undefined>(undefined);

export interface CounterActionsProps {
  increase: () => void;
  decrease: () => void;
}

export const CounterActionsContext = createContext<CounterActionsProps | undefined>(undefined);

interface CounterProviderProps {
  children: React.ReactNode;
}

function CounterProvider({ children }: CounterProviderProps) {
  const [counter, setCounter] = useState(1);

  const actions = useMemo(() => ({
    increase: () => setCounter((prev) => prev + 1),
    decrease: () => setCounter((prev) => prev - 1),
  }), []);

  return (
    <CounterActionsContext.Provider value={actions}>
      <CounterValueContext.Provider value={{ counter }}>
        {children}
      </CounterValueContext.Provider>
    </CounterActionsContext.Provider >
  )
}

export default CounterProvider;