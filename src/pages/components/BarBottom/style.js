import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'


const BarBottom = styled.footer`
    
    width: 100%;
    border-top: 1px solid #ccc;

    
    nav {

        display: grid;
        grid-template-columns: 50% 50%;
        height: 100%;
        
        a {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            color: var(--_3-color);
            font-weight: bold;
            text-decoration: none;
        }
    }
`

const Link = styled( LinkRouter )`   
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--_1-color);
    
    :hover {
        transition: 500ms;
        background: #111;

        svg {
            color: var(--_2-color);
        }
    }

    svg {
        color: white;
        font-size: 20pt;
    }
`

export default BarBottom
export { Link }