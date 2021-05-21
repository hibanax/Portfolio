import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Main = styled.main`


    .first {
        background: #F73458;
        overflow: hidden;
        

    .offset {
        width: 100%;
        height: 100%;
    }

    .a {
        background: #F9F5DE;
        height: 100%;
        display: flex;
        align-items: flex-end;

        .left-side {
            width: 50%;
            height: 100%;
            background: #F73458
        }
        
        .right-side {
            width: 50vw;
            height: 100vh;

                
            }

            .photo {
                margin-top: 10vh;
                


@media (max-width:960px) { 
        transform: translateX(-20%) translateY(4.4%); 
        width: 80vw;      

} //nothing with screen size bigger than 960px

@media (min-width:960px) {       
    min-width: 45vw;
    max-width: 45vw;
    min-height: 60vw;
    max-height: 60vh; 
  
 } //nothing with screen size smaller than 960px
            }
            
        }
        
    }

    .b {
        background: #F75334;
        width: 100%;
        height: 100%
    }

    .c {
        background: #2B96C5;
        width: 100%;
        height: 100%;
    }
}

.second {
    background: #3FB775;
    
}

`;

export const Section = styled.div`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;