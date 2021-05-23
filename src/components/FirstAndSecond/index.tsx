import { faOdnoklassniki } from '@fortawesome/free-brands-svg-icons';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import { Sticky } from '../../styles';
import Third from '../Third';
import Video from '../Video/video';
import photo from './photo.png';


const FirstAndSecond: React.FC = () => {


  const { scrollYProgress } = useViewportScroll()

  const frameOpacity = useTransform(
    scrollYProgress,
    [0.196, 0.198],
    [0, 1]
  );

  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  )

  


  // const firstX = useTransform(
  //   scrollYProgress,
  //   [0.627, 0.730, 0.8],
  //   ["0%", "-30%", "-70%"]
  // );
   
  return (
    <Sticky className="second">
      <First />
      

      
      <motion.div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 0,
        height: '100vh',
        borderRadius: '4px',
        border: '4px solid #fff',
        opacity: frameOpacity,
        scale: frameScale,
        // x: firstX,

      }}>
        <Video />
         </motion.div>
    </Sticky>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useViewportScroll()

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.547],
    [1, 0.511, 0.511, 1]
  );

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh']
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511],
  )

  const rightSideX = useTransform(
    scrollYProgress,
    [0.037, 0.093],
    ['55vw', '0vh'],
  )

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%']
  )



  return (

    <Sticky
      className="first"
      style={{
        scale: firstScale,
        borderRadius: firstRadius,
      }}>
      <motion.div
        className="offset"
        style={{
          y: offsetY,
        }}>

        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}>
              <div className="row">
                <div className="col">
                  <h1>Hey!</h1>
                  <p>I am Christian Gałeczka nice to meet you</p>
                </div>
                <button type="button">Let's go!</button>
                <div className="col">

                </div>
              </div>

          </motion.div>

          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                x: rightSideX,
                scale: rightSideScale,
              }}>
                <img src={photo} className="photo" />
              </motion.div>
        </div>
      </div>

            <div className="b"><Third /></div>


            <div className="c">
            
            </div>
      </motion.div>
      



      </Sticky>
  )
  }


export default FirstAndSecond;
