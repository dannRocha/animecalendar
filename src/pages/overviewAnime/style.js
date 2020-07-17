import styled from 'styled-components'
import FavoriteIcon from '../components/FavoriteIcon/FavoriteIcon.js'


const OverViewAnime =  styled.main`
    
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto;
    overflow-y: auto;
    
    figure {

        position: relative;
        margin: 0;
        display: flex;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        figcaption {
            
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--_1-color);
            width: 100%;
            height: 100%;
            opacity: 0;
            color: var(--_3-color);
            font-size: 20pt;
            transition: .3s;


            :hover {
                cursor: crosshair;
                opacity: 0.7;
            }
        }
    }

    section {
        background: var(--_1-color);

        header {
            h1 {
                font-size: 20pt;
                color: var(--_3-color);
            }
        }

        section {

            border-top: 2px solid var(--_3-color);
            color: var(--_3-color);

            ul {
                li.topics {
                    font-weight: bold;
                    .tag {
                        margin: 0 2px;
                        background: var(--_2-color);
                    }
                }
                border-bottom: 2px solid var(--_3-color);
                margin: 0;
                padding: 10px 30px;

            }

            details {
            
                cursor: pointer;
                background: var(--_2-color);
                padding: 10px 0;
                color: var(--_3-color);

                summary {
                    font-weight: bold;
                }
                
                p {
                    text-indent: 20pt;
                    text-align: justify;
                    padding: 0 10pt;
                }
            }
        }
    }
`

const CustomFavoriteIcon = styled( FavoriteIcon )`
    position: fixed;
    top: 20%;
    right: 8%;
`

export default OverViewAnime
export { CustomFavoriteIcon }