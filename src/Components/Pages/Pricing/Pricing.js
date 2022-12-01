import React from 'react'
// import './pricing.css'
import "../../../index.css"

const Pricing = () => {
  return (
    <section>
      <div className='pricing'>
        <div className='pricing-one'>
          <div className='pricing-one-content'>
            <h1>OUR PRICING</h1>
            <hr className='horzclass'/>
            <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>
          </div>
        </div>
        <div className='pricing-two'>
          <div className='pricing-two-1'>
            <h4>ECONOMY</h4>
            <h1>$9.90</h1>
            <h6>BILLING PER MONTH</h6>
            <hr className='horzclass'/>
            <p className="p1">Bandwidth: <b>1GB</b></p>
            <p className="p2">Onlinespace : <b>50MB</b></p>
            <p className="p3">Support: <b>No</b></p>
            <p className="p4">Domain: <b>1</b></p>
            <p className="p5">Hidden Fees: <b>No</b></p>
            <a href="#">Join Now</a>
          </div>
          <div className='pricing-two-2'>
            <h4>ECONOMY</h4>
            <h1>$19.90</h1>
            <h6>BILLING PER MONTH</h6>
            <hr className='horzclass'/>
            <p className="p10">Bandwidth: <b>10GB</b></p>
            <p className="p10">Onlinespace : <b>500MB</b></p>
            <p className="p10">Support: <b>Yes</b></p>
            <p className="p10">Domain: <b>10</b></p>
            <p className="p10">Hidden Fees: <b>No</b></p>
            <a href="#">Join Now</a>
          </div>
          <div className='pricing-two-2'>
            <h4>ECONOMY</h4>
            <h1>$29.90</h1>
            <h6>BILLING PER MONTH</h6>
            <hr className='horzclass'/>
            <p className="p10">Bandwidth: <b>100GB</b></p>
            <p className="p10">Onlinespace : <b>2GB</b></p>
            <p className="p10">Support: <b>Yes</b></p>
            <p className="p10">Domain: <b>unlimited</b></p>
            <p className="p10">Hidden Fees: <b>No</b></p>
            <a className ="a10" href="#">Join Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing