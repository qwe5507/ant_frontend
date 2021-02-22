import React, { useState, useEffect } from "react"

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon } from "atomize"

import FollowCard from "../homepage/uicomponents/FollowCard"
import UserEdit from "../homepage/uicomponents/UserEdit"
import Buttons from "../homepage/uicomponents/Buttons"
import CardComponent from "../homepage/uicomponents/CardComponent"
import LoginForm from "../homepage/uicomponents/LoginForm"
import { Link } from 'react-router-dom';
// import Notification from './uicomponents/Notification'
function BacktestCondition() {

    let [showDropdown, showDropdownChange] = useState(false);
    let [coSelected, coSelectedChange] = useState('조건을 선택하세요');

    const testCondition = (
        <Div>
            {['PER', 'PBR', 'PCR', 'POR', 'PSR', 'PEG'].map((name, index) => (
                <Anchor
                    d="block"
                    p={{ y: "0.25rem", l: "0.75rem" }}
                    onClick={() => dropboxSelected(name) }
                    >
                    {name}
                </Anchor>
            ))}
        </Div>
    );
    
    function dropboxSelected(name){
        coSelectedChange(name)
        showDropdownChange(!showDropdown)
    }

    useEffect(() => {
        console.log('dropbox : ',coSelected);
    });

    return (
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
                        한국주식 백테스트
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
                        설정한 재무제표 지표 조건에 따라 매매한 과거 성과를 확인하고 공유해보세요.
                        </Text>

                    {/* 백테스트 조건 Dropdown */}

                    <Div
                        d="flex"
                        w="100%"
                        justify="center"
                        flexDir={{ xs: "column", sm: "row" }}
                    >

                        <Dropdown
                            w={{ xs: "100%", sm: "11rem" }}
                            m={{ b: "2.5rem", r: "1rem" }}
                            isOpen={showDropdown}
                            onClick={() =>
                                showDropdownChange(!showDropdown)
                            }
                            menu={testCondition}
                        >
                            {coSelected}
                        </Dropdown>

                        <Input
                            w={{ xs: "100%", sm: "11rem" }}
                            m={{ b: "2.5rem", r: "1rem" }}
                            fontFamily='ko'
                            placeholder="값 입력" />

                        <Icon
                            name="Add"
                            color="info700"
                            size="40px"
                            cursor="pointer" />

                    </Div>

                    <Div
                        d="flex"
                        w="100%"
                        justify="center"
                        flexDir={{ xs: "column", sm: "row" }}
                    >

                        <Link to="/">
                            <Button
                                h="3rem"
                                w={{ xs: "100%", sm: "11rem" }}
                                bg="info700"
                                hoverBg="info600"
                                rounded="lg"
                                // maxW="calc(50% - 0.5rem)"
                                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                                <Text
                                    textSize="subheader"
                                    textWeight="800"
                                    fontFamily='ko'
                                >백테스트
                                </Text>
                            </Button>
                        </Link>
                    </Div>
                </Container>
            </Div>



        </>
    )
}


export default BacktestCondition
