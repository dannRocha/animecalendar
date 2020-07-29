import styled from 'styled-components'


const Main = styled.main`
    
    background: var(--_1-color);
    width: 100%;
    overflow-y: auto;

    header {
        position: relative;
        display: grid;
        justify-content: center;
        align-items: center;
        background: var(--_1-color);
        font-size: 30pt;
        color: #FFF;

    }

    @media only screen and (max-width: 400px) {
        header {
            font-size: 18pt;
        }

    }

`
export const Icon = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	color: #FFF;
	font-size: 50pt;
`

export default Main
