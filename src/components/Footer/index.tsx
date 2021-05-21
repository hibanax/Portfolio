import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons"


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
    <div className={styles.footer__content}>
      <h3>Contact ?</h3>
      <p>Feel free to meet me on... !</p>
      <div className={styles.footer__socials}>
      <a href={"https://www.facebook.com/people/Krystian-Ga%C5%82eczka/100003072214090"}><FontAwesomeIcon className={styles.footer__icon} icon={faFacebookF} /></a>
      <a href={"https://www.instagram.com/chris_hib05/"}><FontAwesomeIcon className={styles.footer__icon} icon={faInstagram} /></a>
        <a href={"https://github.com/hibanax"}><FontAwesomeIcon className={styles.footer__icon} icon={faGithub} /></a>
        <a href={"https://www.youtube.com/channel/UCUTgRVxTbh29zrAxkTBNdpw"}><FontAwesomeIcon className={styles.footer__icon} icon={faYoutube} /></a>
        <a href={"https://www.linkedin.com/in/krystian-ga%C5%82eczka-671703209/"}><FontAwesomeIcon className={styles.footer__icon} icon={faLinkedinIn} /></a>
      </div>
    </div>
    
    <div className={styles.footer__bottom}>
      <p>copyright &copy;  HibanaX. Designed by Krystian Gałeczka</p>
    </div>
    
    </Container>
  )
}

export default Footer;