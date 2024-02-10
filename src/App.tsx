import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import './App.css'

function App() {
  return (
    <Router>
      <div className='app'>
        <nav>
          <div className='title'>
            <img src="public/logo.png" alt="logo dashboarding data football" width="60px" height="60px"/>
            <h2>Dashboard Data Football</h2>
          </div>
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
