import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import drawing from './assets/drawing.png';
import TopBanner from './components/TopBanner';
import leftArrow from './assets/leftarrow.png';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <TopBanner/>
      <Header/>
      <main>
        <h2>WELCOME TO AGRICULTURE FARM</h2>
        <h1>Agriculture <img src={drawing} alt="" /> & Eco Farming</h1>
        <p>There are many of passages of lorem Ipsum, but the majori have suffered alteration in some form </p>
        <button>Discover More</button>
      </main>
    </div>
  )
}

export default App
