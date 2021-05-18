import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

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
      }}
    />
  )
}

export default Footer;