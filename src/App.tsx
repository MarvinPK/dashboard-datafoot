import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/joueurs">Joueurs</Link>
            </li>
            <li>
              <Link to="/equipes">Équipes</Link>
            </li>
            <li>
              <Link to="/championnats">Championnats</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/joueurs" element={<h1>Joueurs</h1>}>
          </Route>
          <Route path="/equipes" element={<h1>Equipes</h1>}>            
          </Route>
          <Route path="/championnats" element={<h1>Equipes</h1>}>            
          </Route>
          <Route path="/" element={<Home />}>            
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
