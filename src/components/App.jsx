import React, { Component } from 'react';
import FloatingMenu from './FloatingMenu/FloatingMenu';

// sections
import Cover from './Cover/Cover';
import About from './About/About';
import Interest from './Interest/Interest';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Works from './Works/Works';
import Services from './Services/Services';
import Prices from './Prices/Prices';
import Contact from './Contact/Contact';

// styles
import styles from './App.module.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    }

    this.refsArray = [];

    for (let index = 0; index < 10; index++) {
      this.refsArray.push(React.createRef());
    }
  }

  render = () => {
    return (
      <div id="frame" className={styles.frame}>
        {/* Floating Menu */}
        <FloatingMenu refsArray={this.refsArray} id="floatingMenu" />

        {/* Cover */}
        <Cover sectionRef={this.refsArray[0]} id="cover" className={styles.section} />

        {/* About me */}
        <About sectionRef={this.refsArray[1]} id="about" className={styles.section} />

        {/* Interest */}
        <Interest sectionRef={this.refsArray[2]} id="interest" className={styles.section} />

        {/* Skills */}
        <Skills sectionRef={this.refsArray[3]} id="skills" className={styles.section} />

        {/* Education */}
        <Education sectionRef={this.refsArray[4]} id="education" className={styles.section} />

        {/* Experience */}
        <Experience sectionRef={this.refsArray[5]} id="experience" className={styles.section} />

        {/* Portfolio / Works */}
        <Works sectionRef={this.refsArray[6]} id="works" className={styles.section} />

        {/* Services */}
        <Services sectionRef={this.refsArray[7]} id="services" className={styles.section} />

        {/* Prices */}
        <Prices sectionRef={this.refsArray[8]} id="prices" className={styles.section} />

        {/* Contact */}
        <Contact sectionRef={this.refsArray[9]} id="contact" className={styles.section} />
      </div>
    )
  }
}
