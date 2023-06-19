import React, { useContext } from 'react'
import { CounterActionsContext } from './CounterProvider';

function useCounterActions() {
  const value = useContext(CounterActionsContext);

  if(value === undefined) {
    throw new Error('useCounterActions must be used within CounterProvider');
  }

  return value;
}

export default useCounterActions