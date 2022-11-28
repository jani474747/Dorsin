import './Home.css'
// import Banner from '../Images/bg-home.jpg';

function Home(){
    
    return (
        <section id="home">
            <div className="home-sub">
                <div className="home-sub-one">
                    <div className="home-content-1">
                        <h1>We help startups launch their products</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at a euismod mus luctus quam.
                            Lorem ipsum dolor sit amet, consectetur adipisicing eli.</p>
                        <a href="#">Get Started <i class="fas fa-arrow-alt-right"></i></a>
                          
                    </div>
                    <div className="home-content-2">
                        <div className="home-content-2-sub">
                            {/* <img src={Banner} alt="banner" /> */}
                        </div>

                    </div>
                </div>
                
            </div>
           
            
        </section>
    )
}
export default Home