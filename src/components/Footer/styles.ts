import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.footer)`
    width: 100%;
    height: 300px;
    background: black;

    position: fixed;
    bottom: 0;
    z-index: 99999;

`;