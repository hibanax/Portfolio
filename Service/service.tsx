import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import styles from './mystyle.module.css';
import { faCss3, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"
import { faCloud, faMobileAlt } from '@fortawesome/free-solid-svg-icons'


const Service = () => {

    const { scrollYProgress } = useViewportScroll()

    const cardsOpacity = useTransform(
        scrollYProgress,
        [0.83, 0.86, 0.88],
        [0, 0.4, 1]
      );
    
    return (
    
<motion.div className={styles.parent} style={{
        opacity: cardsOpacity,
    }}>

        
<div className={styles.div1}> <h5>React</h5>
<FontAwesomeIcon className={styles.icon} icon={faReact} />

      <p>Give best from parent to child </p></div>
<div className={styles.div2}> <h5>Javascript</h5>
<FontAwesomeIcon className={styles.icon} icon={faJs} />

<p>Make it more friendly to use</p></div>
<div className={styles.div3}> <h5>HTML + CSS</h5>
<FontAwesomeIcon className={styles.icon} icon={faHtml5} />
<FontAwesomeIcon className={styles.icon} icon={faCss3} />
<p>Build solid structure with finess</p></div>
<div className={styles.div4}> <h5>Firebase</h5>
<FontAwesomeIcon className={styles.icon} icon={faCloud} />

<p>Done in real-time database</p></div>
<div className={styles.div5}> <h5>Node.js</h5>
<FontAwesomeIcon className={styles.icon} icon={faNodeJs} />

<p>Let everything work together</p></div>
<div className={styles.div6}> <h5>React Native</h5>
<FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />

<p>Build mobile react applications</p></div>

<div className={styles.div7}><h3>What I do the most ?</h3></div>
</motion.div>


     
    )
}

export default Service;