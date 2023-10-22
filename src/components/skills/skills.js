import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png';
import WEBDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a passionate and creative website designer, 
        dedicated to transforming ideas into visually stunning and user-friendly 
        online experiences. With a keen eye for design, I specialize in crafting 
        responsive, modern, and interactive websites that not only meet clients' needs but 
        also engage and captivate their audience. From sleek and elegant corporate sites 
        to vibrant and dynamic e-commerce platforms, I bring your digital vision to life 
        with a blend of aesthetics and functionality. Let's collaborate to turn your web dreams 
        into reality</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo tex</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WEBDesign} alt="WEBDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo tex</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo tex</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
