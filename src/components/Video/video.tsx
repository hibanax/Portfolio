import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import './video.css';
import foodclipm from './food.mp4';
import foodclipw from './food.webm';
import todoclipm from './todo.mp4';
import todoclipw from './todo.webm';


const Video = () => {

    const { scrollYProgress } = useViewportScroll()

    const cardsOpacity = useTransform(
        scrollYProgress,
        [0.56, 0.68],
        [0, 1]
      );
    
    return (
        <div className="allcontainer">
    <motion.div className='videoContainer' style={{
        opacity: cardsOpacity,
    }}>
        

        

        <div className='vidContain'>
    <div className='vid vid1'>
        <video className="vidI" autoPlay loop muted playsInline >
            <source id="mp4" src={foodclipm} type="video/mp4"/>
            <source id="webm" src={foodclipw} type="video/webm"/>
            <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        <div className='content'>
        <h5>Instagram Clone</h5>
        <p>Instagram clone with Firebase server done with React.js</p>
        </div>
    </div>
    </div>

    <div className='vidContain'>
    <div className='vid vid2'>
        <video className="vidF" autoPlay loop muted playsInline >
        <source id="mp4" src={foodclipm} type="video/mp4"/>
            <source id="webm" src={foodclipw} type="video/webm"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        <div className='content'>
        <h5>Food App</h5>
        <p>Created Food App UI in React-Native</p> 
        </div>
    </div>
    </div>

    <div className='vidContain'>
    <div className='vid3'>
        <video className='vidC' autoPlay loop muted playsInline >
            <source id="mp4" src={todoclipm} type="video/mp4"/>
            <source id="webm" src={todoclipw} type="video/webm"/>
            <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        <div className='content'>
        <h5>CryptoCurrency App</h5>
        <p>Cryptocurrency app which get cryptocoin data api and shows it as a list</p> 
        </div>
    </div>
    </div>

    <div className='vidContain'>
    <div className='vid4'>
        <video className="vidT" autoPlay loop muted playsInline >
            <source id="mp4" src={todoclipm} type="video/mp4"/>
            <source id="webm" src={todoclipw} type="video/webm"/>
            <source id="ogv" src="http://media.w3.org/2010/05/sintel/trailer.ogv" type="video/ogg"/>
            <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
        <div className='content'>
        <h5>Todo list</h5>
        <p>Todo list app made with React.js</p> 
            
        </div>
    </div>
    </div>



    </motion.div>      
    </div>
    )
}

export default Video

{/* <motion.div className="col__cards" style={{ opacity: cardsOpacity, }}>
      <div className="card">
        <h5>Instagram Clone</h5>
        <p>Instagram clone with Firebase server done with React</p>
        </div>
    
      <div className="card">
      
        <h5>Food App</h5>
        <p>Created Food App UI in React-Native</p>
        
      </div>
      <div className="card">
        <h5>CryptoCurrency App</h5>
        <p>Cryptocurrency app which get cryptocoin data api and shows it as a list in web browser</p>

      </div>
      <div className="card">
        <h5>Todo list</h5>
        <p>Todo list app made with React</p>

      </div>

    </motion.div> */}