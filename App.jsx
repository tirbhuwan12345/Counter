import React from 'react'
import './App.css'
import CouterStore from './components/CouterStore'
import Counter from './components/Counter'

function App() {
  return (
    <>
     <CouterStore>
        <Counter/>
     </CouterStore>
    </>
  )
}

export default App
