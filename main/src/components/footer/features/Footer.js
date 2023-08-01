import { useEffect } from "react";
import styled from "styled-components";


export const Footer =()=> {
    return(
        <Container>
            <Title>
                Contact: bitbox77@naver.com
            </Title>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    width:100%;
    height:100%;
`;

const Title = styled.div`
    margin-top:10%;
    display:flex;
    justify-content: center;
    width:100%;
    height:100%;
    font-size:2vh;
    color:#5D5D76;
`;