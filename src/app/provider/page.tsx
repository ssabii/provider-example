"use client";

import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext('');

export default function Home() {
  const [data] = useState('Hello Frontend!');

  return (
    <DataContext.Provider value={data}>
      <Child1 />
    </DataContext.Provider>
  )
}

function Child1() {
  return <Child2 />
}

function Child2() {
  return <Child3 />
}

function Child3() {
  const data = useContext(DataContext);

  return <div>{data}</div>
}