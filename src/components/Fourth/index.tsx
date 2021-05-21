import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';
import styles from './mystyle.module.css';

const Fourth: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const fourthX = useTransform(
    scrollYProgress,
    [0.75, 0.95],
    ['250vh', '0vh']
  );


  return (
    <Container
      style={{
        x: fourthX
      }}>
       
      <div className={styles.quote}>
        <q>“It does not matter how slowly you go as long as you do not stop.” ―Confucius</q>
      </div>
    
    </Container>

  )
}

export default Fourth;