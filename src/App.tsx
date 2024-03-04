import { useState } from 'react';
import Header from './components/header';
import Button from '@mui/material/Button';
import logo from './assets/blhub-logo.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header />
    <img src={logo} />
    <Button variant="contained" onClick={() => setCount(count + 1)}>Counter: {count}</Button>
  </>;
}

export default App