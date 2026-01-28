import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Счетчик: {count}</h1>
      <button onClick={increment}>Увеличение</button>
      <button onClick={decrement} style={{ marginLeft: '10px'}}>Уменьшение</button>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  )
}

export default App
