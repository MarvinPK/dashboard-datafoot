import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { Navigation } from './components/Navigation';
import './App.css'
import Equipes from './components/equipe/Equipes';

function App() {
  return (
    <Router>
      <div className='app'>
      <Navigation/> 
        <Routes>
          <Route path="/joueurs" element={<h1>Joueurs</h1>}>
          </Route>
          <Route path="/equipes" element={<Equipes/>}>            
          </Route>
          <Route path="/championnats" element={<h1>Championnats</h1>}>            
          </Route>
          <Route path="/" element={<Home />}>            
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
