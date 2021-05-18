import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

const Fifth: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const fifthX = useTransform(
    scrollYProgress,
    [0.75, 0.85 ],
    ['-250vh', '0vh']
  );


  return (
    <Container
      style={{
        x: fifthX
      }}
    />
  )
}

export default Fifth;