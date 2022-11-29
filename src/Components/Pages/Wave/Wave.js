import React from 'react'
import wave from "../Images/bg-pattern.png"
import './Wave.css'

const Wave = () => {
  return (
            <div className="team2-five">
                <div className="team2-five-sub">
                    <div className="team2-five-sub-context">
                        <h2>Let's Get Started</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the<br/> blind texts.</p>
                        <a href="#">Get Started <i className="far fa-arrow-right"></i></a>
                    </div>
                    
                </div>
                <div className="wave">
                    <img src= {wave} alt="song" />

                </div>
        </div>
  )
}

export default Wave