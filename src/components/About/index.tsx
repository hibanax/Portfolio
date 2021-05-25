import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import styles from './mystyle.module.css';



const About = () => {

    const { scrollYProgress } = useViewportScroll()



    const aboutScale = useTransform(
        scrollYProgress,
        [0.46, 0.50],
        [1, 0]
    )

    const aboutScaleBack = useTransform(
        scrollYProgress,
        [0.3, 0.42],
        [0.111, 0.9]
    )





    const aboutOpacity = useTransform(
        scrollYProgress,
        [0.20, 0.24, 0.37, 0.38, 0.42],
        [0, 0.42, 0.6, 0.7, 0.93]
    );


    return (

        <motion.div className={styles.about} style={{
            opacity: aboutOpacity,


            scale: aboutScaleBack,
        }}>

            <motion.div className={styles.parent} style={{
                scale: aboutScale,
            }}>
                <div className={styles.div1}> <h2>A</h2></div>
                <div className={styles.div2}> <h2>B</h2></div>
                <div className={styles.div3}> <h2>OUT</h2></div>
                <div className={styles.div4}> <h2>ME</h2></div>
                <div className={styles.div5}> <h2>IS</h2></div>
                <div className={styles.div6}> <h2>QUITE QUITE QUITE</h2></div>
                <div className={styles.div7}> <div className={styles.div71}><h2>SIMPLY</h2></div><div className={styles.div72}><h2>DIFFICULT</h2></div></div>
                <div className={styles.div8}> <div className={styles.div8x}><h2>„BECAUSE I WANT TO BE MAYBE ? ONE OF THE BEST DEVELOPERS IN THIS ENTIRE WORLD!”</h2></div>
                </div></motion.div>

        </motion.div>

    )
}

export default About;