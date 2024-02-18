import './home.css'
export const Home = () => {
    return (
        <div id="home">  
            <div className='cover-background'>
                <article>                 
                    <main className="all-cards">
                        <a href={`/championnats`}>
                            <div className="card championnat"/>
                        </a>
                        <a href={`/equipes`}>
                            <div className="card equipe"/>
                        </a>
                        <a href={`/joueurs`}>
                            <div className="card"/>  
                        </a>           
                    </main>      
                </article>      
            </div>
        </div>
    )
  }
  
  export default Home