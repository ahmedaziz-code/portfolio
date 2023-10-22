import React from 'react'
import './contact.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'

const Contact = () => {
  return (
    <section className="contactPage">
        <div id="clients">
            <h2>My Clients</h2>
            <span className="description">
                I have had the opportunity to work with a diverse group
                of companies.  Some of the notable companies I have worked with include 
            </span>
            <div className="companies">
                <img src={walmart} alt="" className='clinetImg'/>
                <img src={adobe} alt="" className='clinetImg'/>
                <img src={microsoft} alt="" className='clinetImg'/>
                <img src={facebook} alt="" className='clinetImg'/>
            </div>
        </div>
        <div className="contact">

        </div>
    </section>
  )
}

export default Contact
