import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedin, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"


import { Container } from './styles';

import styles from './mystyle.module.css';

const Footer: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const footerY = useTransform(
    scrollYProgress,
    [0.898, 0.988 ],
    ['200%', '0%']
  );

  return (
    

    <Container
      style={{
        y: footerY
      }}>
    <div className={styles.footercontent}>
      <h3>code opacity</h3>
      <p>lorem ipsum dolor sit, amet consectetur</p>
      <ul className="socials" style={{

      }}>
        <li>
          
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faLinkedinIn} />

        </li>
      </ul>
    </div>

    <div className="footer-bottom" style={{

    }}>
      <p>copyright &copy;  HibanaX. Designed by Krystian Gałeczka</p>
    </div>
    
    </Container>
  )
}

export default Footer;