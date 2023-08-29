import { useEffect } from "react";
import styled from "styled-components";
import logo from '../../../img/logo.png';


export const Header =()=> {
    return(
        <Container>
            <Title>
                <PopupText>
                    <p1>
                        Zer0
                    </p1>
                    <p2>
                        's
                    </p2>
                    <p3>
                        &nbsp;World
                    </p3>
                </PopupText>
            </Title>
            <HideBox />
            <LogoImg>
                <RotImg rotSec="2s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="3s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="5s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="15s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="5s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="3s">
                    <div>
                        <img src={logo} />
                    </div>
                </RotImg>
                <RotImg rotSec="2s">
                    <div>
                        <img src={logo} />
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
    height:100vh;
    font-size:5vh;
    color:#FAF9F9;
    font-weight:700;
    background-color: #041540;
`;

const HideBox = styled.div`
    margin-top:1vh;
    display:flex;
    justify-content:center;
    width:30vh;
    height:100%;
    z-index:50;
    background-color:#ffffff;
    animation: fadeout 1.2s linear 1;
    animation-delay: 0.1s;

    @keyframes fadeout {
        from {
            border-top: 3px solid #5D5D76;
        }
        to {
            border-top: 0px solid #5D5D76;
        }
    }
`;

const PopupText = styled.div`
    display:flex;
    position:absolute;
    p1 {
        animation: popup 1s linear 1;
        animation-delay: 0.1s;
    }
    p2 {
        animation: popup 1s linear 1;
        animation-delay: 0.5s;
    }
    p3 {
        animation: popup 1s linear 1;
        animation-delay: 1s;
    }

    @keyframes popup {
        from {
            padding-top:3vh;
        }
        to {
            padding-top:0vh;
        }
    }

    @keyframes fadein {
        from {
            color:#ffffff;
        }
        to {
            color:#ffffff;
        }
    }
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