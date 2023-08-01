import styled from "styled-components";
import { Home } from "../features/Home";

export const HomePage =()=> {
    return(
        <Container>
            <Top>

            </Top>
            <Middle>
                <Home />
            </Middle>
            <Bottom>

            </Bottom>
        </Container>
    );
};

const Container = styled.div`
    width:100vw;
    height:100vh;
`;
const Top = styled.div`
    height:20vh;
    display:flex;
    justify-content:space-between;
`;
const Middle = styled.div`
    height:50vh;
    display:flex;
    justify-content:space-between;
`;
const Bottom = styled.div`
    height:30vh;
    display:flex;
    justify-content:space-between;
`;