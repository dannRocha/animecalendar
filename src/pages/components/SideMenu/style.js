import styled from 'styled-components'


export default styled.aside`

    top: 0px;
    position: fixed;
    background: var(--_3-color);
    transition: .5s;
    left: ${ ({ visible }) => ( visible )? 0: -200 }px;
    width: 200px;
    height: 100vh;
    z-index: 1;
    text-align: left;
    color: var(--_1-color);
   
    ul {

        margin: 0;
        padding: 0;
        list-style: none;

        li {
            margin-left: 20px;
        }
    }


    svg {
        color: var(--_1-color );
    }
    
    nav {
        height: 100vh;
        display: grid;
        grid-template-rows: 40px auto;
         
        header{

            width: 100%;
            transition: .3s;

            svg {
                position: absolute;
                right: ${(( { visible } ) => (visible) ? 10: -40 )}px;
                font-size: 30pt;
                color: ${(( { visible } ) => 
                    (visible) 
                    ? 'var(--_2-color)'
                    : 'var(--_3-color)' )};

                
                :hover {
                    cursor: pointer;
                }
            }
        }

        section {

            p {
                display: flex;
                justify-content: space-between;
                font-size: 20pt;

                :hover {
                    cursor: pointer;
                }
            }

            a {
                color: var(--_1-color);
            }

            li {
                display: grid;
                grid-template-columns: 20% 80%;
                align-items: center;
                transition: .2s;

                
                :hover {
                    background: var(--_1-color);
                    color: var(--_3-color);
                    padding-left: 20px;
                    
                    svg {
                        transition: .2s;
                        color: var(--_3-color);
                    }
                } 
            }

            li.enable {
                    background: var(--_1-color);
                    color: var(--_3-color);
                    padding-left: 20px;
                    
                    svg {
                        transition: .2s;
                        color: var(--_3-color);
                    }
                    
            }

            svg {
                font-size: 30px;
                color: var(--_2-color);
            }
        }
    }

`