import styled from 'styled-components'


let Box = styled.div`
    padding: 30px;
    text-align: center;
`

let Area = styled.input`
    padding: 10px;
    width: 80%;
    height: 100px;
    background-color: #8686ea;
    border: none;
    font-size: 20;
    
`;

function Cafe24() {
    return (

        <Box>
            <Area value='카페24 영역' ></Area>
        </Box>


    )
}

export default Cafe24;