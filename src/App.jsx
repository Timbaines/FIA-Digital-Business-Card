import Header from './components/Header';
// import DarkModeToggle from "./components/DarkModeToggle.jsx";
import Hero from './components/Hero';
import Bio from './components/Bio';
import Card from "./components/Card.jsx";
import Modal from './components/Modal.jsx';
import data from './data.js';

import './App.css'

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

  return (
    <>
        <Header />
        <Hero />
        <div className="card-container">
            {cards}
        </div>
        <Bio/>
        <Modal />
    </>
  )
}

export default App
