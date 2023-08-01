import styled from "styled-components";
import { Home } from "../features/Home";
import { Header } from "../../header/features/Header";
import { Footer } from "../../footer/features/Footer";

export const HomePage =()=> {
    return(
        <Container>
            <Top>
                <Header />
            </Top>
            <Middle>
                <Home />
            </Middle>
            <Bottom>
                <Footer />
            </Bottom>
        </Container>
    );
};

const Container = styled.div`
    width:95vw;
    height:95vh;
`;
const Top = styled.div`
    height:20%;
    display:flex;
    justify-content:space-between;
`;
const Middle = styled.div`
    height:70%;
    display:flex;
    justify-content:space-between;
`;
const Bottom = styled.div`
    height:10%;
    display:flex;
    justify-content:space-between;
`;