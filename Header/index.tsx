import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';
import styles from './mystyle.module.css';
import logo from './logo.png';


const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(
    scrollYProgress,
    [0.188, 0.198],
    ['0%', '-100%']
  );


  return (
    <Container
      style={{
        y: headerY
      }}
    >
      <div className={styles.header}>
        <div className={styles.header__content}>
        <img src={logo} className={styles.logo} alt="Logo" />
          <nav>
            <ul>
            
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>

    </Container>
  )
}

export default Header;