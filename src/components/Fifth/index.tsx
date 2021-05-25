import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';


import { Container } from './styles';
import Turtle from './turtle.svg';
import styles from './mystyle.module.css';

const Fifth: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const fifthX = useTransform(
    scrollYProgress,
    [0.75, 0.85],
    ['-250vh', '0vh']
  );

  const svgY = useTransform(
    scrollYProgress,
    [0.82, 0.99],
    ['100vh', '0vh']
  );

  const svgOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.88, 0.95, 0.99, 1],
    [0, 0.2, 0.42, 0.6, 0.93]
  );

  const svgScale = useTransform(
    scrollYProgress,
    [0.82, 1],
    [0.111, 1]
  )




  return (
    <Container
      style={{
        x: fifthX
      }}>

      <motion.div
        className={styles.logo}
        style={{
          y: svgY, 
          opacity: svgOpacity,
          scale: svgScale,
        }}>
      <img src={Turtle} className={styles.svg} alt="turtle"
            />
      </motion.div>

    </Container >


  )
}

export default Fifth;