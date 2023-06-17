"use client";

import React from 'react'
import { styled } from 'styled-components'
import CounterProvider from './CounterProvider'
import Value from './Value'
import Buttons from './Buttons'

function CounterPage() {
  return (
    <CounterBlock>
      <CounterProvider>
        <Value />
        <Buttons />
      </CounterProvider>
    </CounterBlock>
  )
}

const CounterBlock = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CounterPage