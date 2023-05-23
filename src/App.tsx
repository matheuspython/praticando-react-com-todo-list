import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div>
        <input type="text" placeholder='fazer café' />
        <button>Adicionar</button>
      </div>
      <Card title="fazer café" />
    </div>
  )
}

export default App
