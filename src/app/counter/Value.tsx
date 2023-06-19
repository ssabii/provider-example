import React from 'react'
import useCounter from './useCounter'

function Value() {
  const { counter } = useCounter();
  console.log(`counter ${counter}`);
  return (
    <h1>{counter}</h1>
  )
}

export default Value