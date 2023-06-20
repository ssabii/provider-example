"use client";

import React from 'react'
import { styled } from 'styled-components'
import Counter from './Counter';

function CounterPage() {
  return (
    <CounterBlock>
      <Counter />
      <Counter value={10} />
      <Counter value={100} />
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