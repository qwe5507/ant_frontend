import React from "react"
import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"

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
                            구독회원 등록
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
                            한달 ￦8,900 으로 황금개미가 되어보세요
                        </Text>
          
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
                                >등록하기
                                </Text>
                            </Button>
                
                   
                </Container>
            </Div>



        </>
        </div>
    )
}

export default Payment;