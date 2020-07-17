import styled from 'styled-components'


const BookmarkList = styled.section`
    display: flex;
    background: var(--_1-color);
    justify-content: center;
    align-items: center;
`

const EmptyStyle = styled.section`
    
    display: flex;
    background: var(--_1-color);
    justify-content: center;
    align-items: center;
    color: var(--_3-color);
    flex-direction: column;
    
    svg {
        font-size: 80pt;
    }
    
`

export default BookmarkList
export { EmptyStyle }