import { useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import Service from '../Service/service';
import Video from '../Video/video';

import { Container } from './styles';

const Third: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const thirdX = useTransform(
    scrollYProgress,
    [0.7, 0.85 ],
    ['-250vh', '0vh']
  );


  return (
    <Container
      style={{
        x: thirdX
      }}>
          <Service />
      </Container>
  )
}

export default Third;