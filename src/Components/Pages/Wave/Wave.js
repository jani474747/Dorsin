import React from 'react'
import wave from "../Images/bg-pattern.png"
// import './Wave.css'
import "../../../index.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Wave = () => {
  return (
            <div className="team2-five">
                <div className="team2-five-sub">
                    <div className="team2-five-sub-context">
                        <h2>Let's Get Started</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the<br/> blind texts.</p>
                        <AnchorLink value= "i" href="#">Get Started <i className="far fa-arrow-right"></i></AnchorLink>
                    </div>
                    
                </div>
                <div className="wave">
                    <img src= {wave} alt="song" />

                </div>
        </div>
  )
}

export default Wave