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
                        기본 프로필
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
                        기술 스택
                    </h3>
                    <p1>
                        - Python: numpy, numba, pandas, bokeh, fastapi, ... 
                    </p1>
                    <p1>
                        - React: react-table, styled-component, date-fns, ...
                    </p1>
                    <p1>
                        - ETC: diskless-server, linux, docker, AWS, ...
                    </p1>
                </Content>
            </Top>
            <Bottom>
                <Content>
                    <h3>
                        경력
                    </h3>
                    <p1>
                        - 키키아이: 1년 (2022.08 ~ 2023.08)
                    </p1>
                    <p1>
                        -- 데이터 직무: 버스기사 휴게시간 분석, ...
                    </p1>
                    <p1>
                        -- 웹 직무: 스마트운수솔루션 전반 개발
                    </p1>
                </Content>
                <Content>
                    <h3>
                        취미
                    </h3>
                    <p1>
                        - 코인노래방, 초보적인 작곡, ...
                    </p1>
                    <p1>
                        - 탁구, 테니스(잠정 휴식), 캐치볼, 볼링, ...
                    </p1>
                    <p1>
                        - PC 게임, 보드게임, ...
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
        height:2vh;
        line-height:2vh;
        color:#4F4F4F;
    }
    p2 {
        margin-left:7%;
        text-align:left;
        vertical-align:middle;
        font-size:1.5vh;
        line-height:2vh;
        height:2vh;
        color:#4F4F4F;
        cursor:pointer;
    }
    p2:hover{
        color:#8585EB;
        font-size:1.8vh;
        font-weight: 600;
    }
`;