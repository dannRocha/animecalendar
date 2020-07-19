import styled from 'styled-components'
import { Link } from 'react-router-dom'


const  CardStyle = styled( Link )`

    text-decoration: none;
    color: var(--_3-color);
    background: var(--_1-color);
    border: 1px solid var(--_2-color);;
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 10px 0;
    box-sizing: border-box;   

    main {
        
        display: grid;
        grid-template-rows: 80% 20%;
        padding: 15px;

        header {

            font-size: 15pt;

            .tag {
                
                background: var(--_2-color);
                margin: 2px;
                font-size: 12pt;
                display: inline-block;
            }
        }

        section {
            
            background: var(--_2-color);
            text-align: center;
            color: var(--_3-color);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 15pt;
        }
    }

    
    figure {

        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
     

        img {

            width: 100%;
            height: 100%;
            min-height: 280px;
            object-fit: cover;
        }

        figcaption {                
            
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: var(--_0-color);
            opacity: 1;
            text-align: center;
            position: absolute;
            font-size: 15pt;
            width: 100%;
            height: 100%;
            transition: .3s;
            box-sizing: border-box;
   			text-overflow: ellipsis;
			word-break: break-all;

            svg {
                color: ${
                    ({ favoriteEnable }) => 
                        (favoriteEnable === 'true' ) 
                            ? 'var(--_2-color)' 
                            : 'var(--_0-color)'
                    };
                z-index: 999;
            }
            
            :nth-child(2){
                font-weight: bold;
            }

            :hover {
                background: #000a;
                color: var(--_3-color);
            }

            :hover svg {
                color: var(--_2-color);
            }
        
        }
    }
`

export default CardStyle;
