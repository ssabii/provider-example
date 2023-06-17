"use client";

import React from 'react'
import useCounter from './useCounter'

function Value() {
  const { counter } = useCounter();

  return (
    <h1>{counter}</h1>
  )
}

export default Value