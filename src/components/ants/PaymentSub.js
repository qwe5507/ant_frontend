import React from "react"
import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"
import { Link} from 'react-router-dom';
function Payment() {
    return (
        <div>
             <>
            <Div 
                tag="section" 
                p={{ t: { xs: "6rem", md: "10rem" } }}
            >
                <Container 
                    d="flex" 
                    flexDir="column" 
                    align="center">
                        <Text
                            tag="h1"
                            textWeight="800"
                            textAlign="center"
                            textSize="display2"
                            m={{ b: "1rem" }}
                            fontFamily='ko'
                        >
                            고객님은 구독회원입니다
                        </Text>
                        <Text
                            tag="h2"
                            textWeight="400"
                            maxW="36rem"
                            textSize="subheader"
                            textAlign="center"
                            fontFamily="secondary"
                            textColor="medium"
                            m={{ b: "2.5rem" }}
                            fontFamily='ko'
                        >
                           계량투자의 핵심 중 핵심, 백테스트를 체험해봅시다
                        </Text>
                        <Link to="/Backtest">
                            <Button
                                h="3rem"
                                w={{ xs: "100%", sm: "11rem" }}
                                bg="info700"
                                hoverBg="info600"
                                rounded="lg"                              
                                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                                <Text
                                    textSize="subheader"
                                    textWeight="800"
                                    fontFamily='ko'
                                >백테스트 하러가기
                                </Text>
                            </Button>
                            </Link>
                
                   
                </Container>
            </Div>



        </>
        </div>
    )
}

export default Payment;