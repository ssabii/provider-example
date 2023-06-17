"use client";

import React from 'react'
import useCounter from './useCounter'
import Button from '@/components/Button';
import { styled } from 'styled-components';

function Buttons() {
  const { increase, decrease } = useCounter();
  return (
    <ButtonsBlock>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </ButtonsBlock>
  )
}

const ButtonsBlock = styled.div`
  display: flex;
  gap: 4px;
`

export default Buttons