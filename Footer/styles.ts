import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.footer)`
    width: auto;
    height: 300px;
    background: #000512;

    position: fixed;
    bottom: 0;
    z-index: 99999;
    font-family: 'Open Sans';
    padding-top: 30px;

`;
