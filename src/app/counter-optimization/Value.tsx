"use client";

import React from 'react'
import useCounterValue from './useCounterValue'

function Value() {
  const counter = useCounterValue();
  console.log(`counter ${counter}`);
  return (
    <h1>{counter}</h1>
  )
}

export default Value