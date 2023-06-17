"use client";

import React from 'react'
import useCounterValue from './useCounterValue'

function Value() {
  const counter = useCounterValue();

  return (
    <h1>{counter}</h1>
  )
}

export default Value