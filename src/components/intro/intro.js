import React from 'react'
import './intro.css';
import bg from '../../assets/azizImage.png';
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="intoName">Aziz</span> <br />Website Designer</span>
        <p className="introPara">I'm a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hire me" className='btnImage'/>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro;
