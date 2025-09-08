import React from 'react'
import Calculator from './components/Calculator'
import History from './components/History'

export default function App() {
  return (
    <div style={{padding: '2rem', fontFamily: 'Arial'}}>
      <h1>Gold Purity Calculator</h1>
      <Calculator />
      <hr />
      <History />
    </div>
  )
}
