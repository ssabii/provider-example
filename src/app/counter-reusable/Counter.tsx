import React from 'react'
import CounterProvider, { CounterProviderProps } from './CounterProvider'
import Value from './Value'
import Buttons from './Buttons'

type CounterProps = Pick<CounterProviderProps, 'value'>

function Counter({ value }: CounterProps) {
  return (
    <CounterProvider value={value}>
      <Value />
      <Buttons />
    </CounterProvider>
  )
}

export default Counter