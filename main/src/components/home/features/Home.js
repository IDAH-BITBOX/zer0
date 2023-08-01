import { useEffect } from "react";
import styled from "styled-components";


export const Home =()=> {

    const linkURL =(url)=> {
        window.open(url);
    };
    
    return(
        <Container>
            <Top>
                <Content>
                    <h3>
                        <PopupText>
                            <p4>
                                기본 프로필
                            </p4>
                        </PopupText>
                    </h3>
                    <p1>
                        - 경희대학교 물리학과 학사 졸업
                    </p1>
                    <p1>
                        - 경희대학교 복잡계 정보물리 석사 졸업
                    </p1>
                    <p2 onClick={()=>linkURL("http://www.riss.kr/link?id=T16385602")}>
                        - 석사 연구 주제: 신기록 통계 (Record statistics)
                    </p2>
                </Content>
                <Content>
                    <h3>
                        <PopupText>
                            <p4>
                                기술 스택
                            </p4>
                        </PopupText>
                    </h3>
                    <p1>
                        - Python: numpy, numba, pandas, bokeh, fastapi 
                    </p1>
                    <p1>
                        - React: react-table, styled-component, date-fns
                    </p1>
                    <p1>
                        - ETC: diskless-server, linux, docker, AWS
                    </p1>
                </Content>
            </Top>
            <Bottom>
                <Content>
                    <h3>
                        <PopupText>
                            <p5>
                                경력
                            </p5>
                        </PopupText>
                    </h3>
                    <p1>
                        - 키키아이: 1년 (2022.08 ~ 2023.08)
                    </p1>
                    <p1>
                        -- 데이터 직무: 버스기사 휴게시간 분석, 대시보드
                    </p1>
                    <p1>
                        -- 웹 직무: 스마트운수솔루션 전반 개발
                    </p1>
                </Content>
                <Content>
                    <h3>
                        <PopupText>
                            <p5>
                                취미
                            </p5>
                        </PopupText>
                    </h3>
                    <p1>
                        - 노래 부르기, 초보적인 작곡
                    </p1>
                    <p1>
                        - 탁구, 테니스, 캐치볼
                    </p1>
                    <p1>
                        - PC 게임, 보드게임
                    </p1>
                </Content>
            </Bottom>
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height:100%;
`;

const Top = styled.div`
    margin:1%;
    width:100%;
    height:40%;
    display:flex;
    justify-content:center;
`;

const Bottom = styled.div`
    margin:1%;
    width:100%;
    height:40%;
    display:flex;
    justify-content:center;
`;

const Content = styled.div`
    margin:1%;
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color:#B8D8E0;
    border-radius: 25px;
    h3 {
        margin-left:5%;
        margin-top:0%;
        margin-bottom:2%;
        height:3vh;
        font-size:3vh;
        line-height:3vh;
        color:#8C8C99;
    }
    p1 {
        margin-left:7%;
        text-align:left;
        vertical-align:middle;
        font-size:1.5vh;
        line-height:2vh;
        color:#4F4F4F;
        white-space: pre-wrap;
    }
    p2 {
        margin-left:7%;
        text-align:left;
        vertical-align:middle;
        font-size:1.5vh;
        line-height:2vh;
        color:#4F4F4F;
        cursor:pointer;
        white-space: pre-wrap;
    }
    p2:hover{
        color:#8585EB;
        font-size:1.8vh;
        font-weight: 600;
    }
`;

const PopupText = styled.div`
    display:flex;
    position:absolute;
    p4 {
        animation: popup2 0.5s linear 1;
        animation-delay: 1.25s;
    }

    p5 {
        animation: popup2 0.5s linear 1;
        animation-delay: 1.75s;
    }

    @keyframes popup2 {
        from {
            margin-top:-2vh;
        }
        to {
            margin-top:0vh;
        }
    }

    @keyframes fadein2 {
        from {
            color:#B8D8E0;
        }
        to {
            color:#B8D8E0;
        }
    }
`;

const HideBox = styled.div`
    margin-top:-3vh;
    display:flex;
    justify-content:center;
    width:17vh;
    height:3vh;
    z-index:50;
    background-color:#ffffff;
    animation: fadeout2 1.2s linear 1;
    animation-delay: 1.2s;

    @keyframes fadeout2 {
        from {
            border-bottom: 3px solid #5D5D76;
        }
        to {
            border-bottom: 0px solid #5D5D76;
        }
    }
`;