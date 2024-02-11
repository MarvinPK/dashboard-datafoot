import { Link} from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav>
          <div className='title'>
            <img src="public/logo.png" alt="logo dashboarding data football" width="60px" height="60px"/>
            <h2>DASHBOARD - DATA FOOTBALL</h2>
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
    )
}