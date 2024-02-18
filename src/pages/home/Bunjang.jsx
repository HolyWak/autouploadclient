import styled from 'styled-components'


let Box = styled.div`
    padding: 30px;
    text-align: center;
`

let Area = styled.input`
    padding: 10px;
    width: 80%;
    height: 100px;
    background-color: #96c596;
    border: none;
    font-size: 20;
    
`;

function Bunjang() {
    return (

        <Box>
            <Area value='번개장터 영역' ></Area>
        </Box>


    )
}

export default Bunjang;