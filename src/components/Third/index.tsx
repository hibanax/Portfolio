import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Third: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const thirdX = useTransform(
    scrollYProgress,
    [0.7, 0.89 ],
    ['-250vh', '0vh']
  );


  return (
    <Container
      style={{
        x: thirdX
      }}
    />
  )
}

export default Third;