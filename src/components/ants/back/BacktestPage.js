import React from "react";
import { Link } from 'react-router-dom';
import { Button, Container, Text, Div, Icon } from "atomize";

function BacktestPage(props) {
    
    return (
        <div>
            <>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "6rem", md: "6rem" } }}
                overflow="hidden"
            >
                <Container
                    d="flex"
                    flexDir="column"
                    align="center"
                >
                    <Text
                        tag="h1"
                        textWeight="800"
                        textAlign="center"
                        textSize="display2"
                        m={{ b: "1.5rem" }}
                        fontFamily='ko'
                    >
                        모멘텀 전략 & RSI 전략 백테스트
                        </Text>
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="left"
                            fontFamily="ko"
                        >
                            1. 모멘텀 전략
                        </Text>
                        <Div
                         d="flex"
                         flexDir="row">
                        <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
                        <Text
                        tag="h2"
                        textWeight="800"
                        maxW="36rem"
                        textSize="subheader"
                        textAlign="left"
                        m={{ b: "1rem" }}
                        fontFamily='ko'
                        >
                       모멘텀 전략이란? <br/>최근 일정 기간의 평균 가격보다 오늘 주가가 더 비쌀 경우 매수하고, 반대의 경우(일정 기간의 평균 가격보다 오늘 주가가 더 쌀 경우) 매도하는 전략
                    </Text>
                    </Div>
                    <Div
                         d="flex"
                         flexDir="row">
                    <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
                    <Text
                        tag="h2"
                        textWeight="800"
                        maxW="36rem"
                        textSize="subheader"
                        textAlign="left"
                        m={{ b: "0.5rem" }}
                        fontFamily='ko'
                    >
                         
                     한국 주식을 대상으로, 평균 가격 설정 기간을 20일로 하여 거래했을 때의 결과를 확인해봅시다
                    </Text>
                    </Div>
                    <Link to="/Backtest2"> <Button 
                                h="3rem"
                                w={{ xs: "100%", sm: "20rem" }}
                                bg="info700"
                                hoverBg="info600"
                                rounded="lg"                              
                                m={{ r: "0rem", b: { xs: "1rem", sm: "0" } }}
                            >
                                <Text
                                    textSize="subheader"
                                    textWeight="800"
                                    fontFamily='ko'
                                >모멘텀 전략 백테스트 하러가기
                                </Text>
                            </Button></Link>
                   
                    <Div
                        d="flex"
                        justify="center"
                        flexDir="column"
                        align="center"
                        w="100%"
                        m="1.5rem"
                    >
                        <Text
                            textSize="title"
                            m={{ b: "0.5rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                            2. RSI 전략
                        </Text>
                        <Div
                         d="flex"
                         flexDir="row">
                        <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
                        <Text
                            textSize="subheader"
                            m={{ b: "1rem" }}
                            textWeight="800"
                            textAlign="left"
                            fontFamily="ko"
                        >
                           RSI란?<br/> 우리말로 상대강도지수라고 부르며, 가격의 상승압력과 하락압력간의 상대적인 강도를 나타내는 지표
                        </Text>
                        </Div>
                        <Div
                         d="flex"
                         flexDir="row">
                    <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
                        <Text
                            textSize="subheader"
                            m={{ b: "1rem" }}
                            textWeight="800"
                            textAlign="left"
                            fontFamily="ko"
                        >
                           RSI 계산 공식으로 알아봅시다!<br/> 
                           1) U = 전날 주가보다 오늘 주가가 상승할 떄의 주가 상승폭 <br/>
                           2) D = 전날 주가보다 오늘 주가가 하락할 떄의 주가 상승폭 <br/>
                           3) AU = 일정기간(N일) 동안의 U의 평균값<br/>
                           4) AD = 일정기간(N일) 동안의 D의 평균값<br/>
                           5) RS = AU/AD<br/>
                           6) RSI = AU/(AU+AD) = RS/(1+RS)<br/>
                        </Text>
                        </Div>
                        <Div
                         d="flex"
                         flexDir="row">
                    <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
                        <Text
                            textSize="subheader"
                            m={{ b: "1rem" }}
                            textWeight="800"
                            textAlign="center"
                            fontFamily="ko"
                        >
                           
                           해외 주식을 대상으로, 14일 동안의 AU, AD를 기준으로 계산한 RSI가 30보다 작으면 매수, 70보다 커지면 매도하였을 때의 결과를 확인해봅시다
                        </Text>
                        </Div>
                        <Link to="/Backtest3"><Button 
                                h="3rem"
                                w={{ xs: "100%", sm: "20rem" }}
                                bg="info700"
                                hoverBg="info600"
                                rounded="lg"                              
                                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                                <Text
                                    textSize="subheader"
                                    textWeight="800"
                                    fontFamily='ko'
                                >RSI 전략 백테스트 하러가기
                                </Text>
                            </Button></Link>
                    </Div>
                </Container>

            </Div>
        </>
        </div>
    )
}

export default BacktestPage;