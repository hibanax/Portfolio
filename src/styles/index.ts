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

        .row {
            height: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            margin-left: 10%;

        }

        .col {
            margin-top: 20%;
            flex-basis:50%;
        }

        .col h1 {
            max-width:2vw;
            color: #F9F5DE;
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 2vh;
        }

        p { 
            font-size: 20px;
            line-height: 30px;
            color: #F9F5DE;
            
        }

        button { 
            width: 50px;
            height: 300px;
            color: #F73458;
            font-size: 12px;
            padding: 12px 0;
            background: #F9F5DE;
            border: 0;
            border-radius: 20px;
            outline: none;
            margin-top: 25%;
            margin-left: 25%;

            -webkit-box-shadow: 0px 0px 5px 0.5px #F9F5DE; 
box-shadow: 0px 0px 5px 0.5px #F9F5DE;
        }
        
        .right-side {
            width: 50vw;
            height: 100vh;

                
            }

            .photo {
                margin-top: 12vh;
                


@media (max-width:960px) { 
        transform: translateX(-20%) translateY(100%); 
        width: 150%;    
          

} //nothing with screen size bigger than 960px

@media (min-width:960px) {       
    width: 42vw;
    max-width: 50vw;
    height: auto;
 } 
            } 
        } 
    }

    .b {
        background: #F75334;
        width: 100%;
        height: 100%
    }

    .c {
        background: #2bb6f2;
        width: 100%;
        height: 100%;
    }

    .col__cards {
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100%;
        
    }

    .card {
        width: 200px;
        height: 230px;
        border-radius: 10px;
        padding: 15px 25px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 10px 27px;

        justify-content: center;
        display: inline-block;
        -webkit-box-shadow: 0px 0px 5px 0.5px #F9F5DE; 
        box-shadow: 0px 0px 20px 0.2px #F9F5DE;
        transition: transform 0.6s;

    }

    .card:hover {
        transform: translateY(-10px);
    }


.second {
    background: #3FB775;

    .parent {
display: grid;
grid-template-columns: 1fr 0.2fr 0.3fr 0.75fr repeat(2, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 3 / 2 / 6 / 3; }
.div2 { grid-area: 3 / 4 / 6 / 6; }
    
}
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