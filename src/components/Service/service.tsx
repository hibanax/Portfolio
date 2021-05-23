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
        [0.56, 0.68],
        [0, 1]
      );
    
    return (
    
<motion.div className={styles.parent} style={{
        opacity: cardsOpacity,
    }}>
<div className={styles.div1}> <h5>React</h5>
<FontAwesomeIcon className={styles.icon} icon={faReact} />
      <p>Instagram clone with Firebase server done with React.js</p></div>
<div className={styles.div2}> <h5>Javascript</h5>
<FontAwesomeIcon className={styles.icon} icon={faJs} />

<p>Instagram clone with Firebase server done with React.js</p></div>
<div className={styles.div3}> <h5>HTML + CSS</h5>
<FontAwesomeIcon className={styles.icon} icon={faHtml5} />
<FontAwesomeIcon className={styles.icon} icon={faCss3} />
<p>Instagram clone with Firebase server done with React.js</p></div>
<div className={styles.div4}> <h5>Firebase</h5>
<FontAwesomeIcon className={styles.icon} icon={faCloud} />

<p>Instagram clone with Firebase server done with React.js</p></div>
<div className={styles.div5}> <h5>Node.js</h5>
<FontAwesomeIcon className={styles.icon} icon={faNodeJs} />

<p>Instagram clone with Firebase server done with React.js</p></div>
<div className={styles.div6}> <h5>React Native</h5>
<FontAwesomeIcon className={styles.icon} icon={faMobileAlt} />

<p>Instagram clone with Firebase server done with React.js</p></div>
</motion.div>


     
    )
}

export default Service;