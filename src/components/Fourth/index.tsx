import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Fourth: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const fourthX = useTransform(
    scrollYProgress,
    [0.75, 0.95 ],
    ['250vh', '0vh']
  );


  return (
    <Container
      style={{
        x: fourthX
      }}
    />
  )
}

export default Fourth;