// import './Home.css'
import "../../../index.css"
import wave from '../Images/bg-pattern.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Home(){
    
    return (
        <section id="home">
            <div className="home-sub">
                <div className="home-sub-one">
                    <div className="home-content-1">
                        <h1>We help startups launch their products</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                        <AnchorLink href="#home">Get Started <i className="fas fa-arrow-alt-right"></i></AnchorLink>
                          
                    </div>
                    <div className="home-content-2">
                        <div className="home-content-2-sub">
                            {/* <img src={Banner} alt="banner" /> */}
                        </div>

                    </div>
                </div>
                <div className="wave">
                    <img src= {wave} alt="song" />

                </div>
                
            </div>
           
            
        </section>
    )
}
export default Home