import { useEffect } from "react";
import styled from "styled-components";


export const Header =()=> {
    return(
        <Container>
            <Title>
                Zer0's World
            </Title>
            <LogoImg>
                <RotImg rotSec="2s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="3s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="5s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="15s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="5s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="3s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
                <RotImg rotSec="2s">
                    <div>
                        <img src={"/img/logo.png"} />
                    </div>
                </RotImg>
            </LogoImg>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`;

const Title = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
    height:100%;
    font-size:5vh;
    color:#5D5D76;
    font-weight:700;
`;

const LogoImg = styled.div`
    display:flex;
    justify-content:center;
    height:100%;
    width:100%;
`;

const RotImg = styled.div`
    width:10vh;
    div {
        animation: rotate-axis2 ${(props)=>props.rotSec || '5s'} linear infinite;
    }
    img {
        width:5vh;
        animation: rotate-axis ${(props)=>props.rotSec || '5s'} linear infinite;
    }
    @keyframes rotate-axis {
        from {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
    @keyframes rotate-axis2 {
        from {
            transform: rotateX(0deg);
        }
        to {
            transform: rotateX(360deg);
        }
    }
`;