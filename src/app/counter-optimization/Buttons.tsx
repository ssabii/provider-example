import React from 'react'
import useCounterActions from './useCounterActions'
import Button from '@/components/Button';
import { styled } from 'styled-components';

function Buttons() {
  const { increase, decrease } = useCounterActions();
  console.log('Buttons');
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