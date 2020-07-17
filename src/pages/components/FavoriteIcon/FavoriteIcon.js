import styled from 'styled-components'
import { FiHeart } from 'react-icons/fi'


const FavoriteIcon =  styled( FiHeart )`
    
    margin: 0;
    padding: 0;
    font-size: 40pt;
    color: var(--_2-color);
    fill: ${ props => ( props?.enable === 'true' ) ? '#a00' : '#0000' };
    
    :hover {
        cursor: pointer;
        fill: var(--_2-color);
    }
`

export default FavoriteIcon