import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import styles from './mystyle.module.css';

import foodclipm from './foodclipm.mp4';
import foodclipw from './foodclipw.webm';

import todoclipm from './todom.mp4';
import todoclipw from './todow.webm';

import clip1m from './clip1m.mp4';
import clip1w from './clip1w.webm';


import cryptom from './cryptom.mp4';
import cryptow from './cryptow.webm';

import { faCircle as farFaCircle } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';


const Projects = () => {
    library.add(farFaCircle)

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

        
<div className={styles.div1}> <h5>Instagram Clone</h5>
<video className={styles.objectfitcover} autoPlay loop muted playsInline >
            <source id="mp4" src={clip1m} type="video/mp4"/>
            <source id="webm" src={clip1w} type="video/webm"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>

                <FontAwesomeIcon className={styles.icon} icon={farFaCircle} />
                </div>



      <div className={styles.div2}> <h5>Food app React Native</h5>
<video className={styles.objectfitcover} autoPlay loop muted playsInline >
            <source id="mp4" src={foodclipm} type="video/mp4"/>
            <source id="webm" src={foodclipw} type="video/webm"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>

        <FontAwesomeIcon className={styles.icon} icon={farFaCircle} />

      </div>



      <div className={styles.div3}> <h5>To-do list</h5>
<video className={styles.objectfitcover} autoPlay loop muted playsInline >
            <source id="mp4" src={todoclipm} type="video/mp4"/>
            <source id="webm" src={todoclipw} type="video/webm"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>

        <FontAwesomeIcon className={styles.icon} icon={farFaCircle} />
      </div>



      <div className={styles.div4}> <h5>Cryptocurrency API</h5>
<video className={styles.objectfitcover} autoPlay loop muted playsInline >
            <source id="mp4" src={cryptom} type="video/mp4"/>
            <source id="webm" src={cryptow} type="video/webm"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>

        <FontAwesomeIcon className={styles.icon} icon={farFaCircle} />
    
      </div>
<div className={styles.div5}><h1>PROJECTS</h1></div>

   
</motion.div>


     
    )
}

export default Projects;