import styled from "styled-components"
// css의 네이밍 중복을 방지
// css in js (이 외 style-jsx)
const Container = styled.div`
     display: flex;

     @media screen and (max-width:768){
        display:block;
     }
`

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color || "black"}
`
export default function StyledComponents () {
    return (
        <>
        <Container>
            <Box color="red"/>
            <Box color="orange"/>         
            <Box color="yellow"/>
            <Box color="green"/>    
            <Box color="blue"/>
            <Box color="purple"/>
        </Container>
        </>
    )
}