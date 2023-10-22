import React from 'react'
import './works.css'
import works1 from '../../assets/portfolio-1.png'
import works2 from '../../assets/portfolio-2.png'
import works3 from '../../assets/portfolio-3.png'
import works4 from '../../assets/portfolio-4.png'
import works5 from '../../assets/portfolio-5.png'
import works6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="workTilte">
          My portfolio
        </h2>
        <span className="worksDescription">
          I take pride in paying attention to smallest details and making sure that my work is pixel
          perfect. I am excited to ring my skills and experience to help business achieve 
          theire goals and create a strong online presence.
        </span>
        <div className="worksImgs">
          <img src={works1} alt="" className="worksImg" />
          <img src={works2} alt="" className="worksImg" />
          <img src={works3} alt="" className="worksImg" />
          <img src={works4} alt="" className="worksImg" />
          <img src={works5} alt="" className="worksImg" />
          <img src={works6} alt="" className="worksImg" />
        </div>
        <button className="workBtn">See more</button>
    </section>
  )
}

export default Works
