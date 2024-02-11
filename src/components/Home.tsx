import { Navigation } from './Navigation'
import './home.css'
export const Home = () => {
    return (
        <div id="home">  
            <div className='cover-background'>
                <Navigation/> 
                <article>                 
                    <main className="all-cards">
                        <div className="card championnat">
                            <div className='cover-card'>
                            <div className="title-card">CHAMPIONNATS</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="title-card">Equipes</div>
                        </div>
                        <div className="card">
                            <div className="title-card">Joueurs</div>
                        </div>             
                    </main>      
                </article>      
            </div>
        </div>
    )
  }
  
  export default Home