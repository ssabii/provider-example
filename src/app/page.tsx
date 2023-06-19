"use client";

import React, { useState } from 'react';

export default function Home() {
  const [data] = useState('Hello Frontend!');

  return (
    <Child1 data={data} />
  )
}

interface Props {
  data: string;
}

function Child1({ data }: Props) {
  return <Child2 data={data} />
}

function Child2({ data }: Props) {
  return <Child3 data={data} />
}

function Child3({ data }: Props) {
  return <div>{data}</div>
}