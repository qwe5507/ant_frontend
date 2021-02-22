import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import FollowCard from "../homepage/uicomponents/FollowCard"
import UserEdit from "../homepage/uicomponents/UserEdit"
import Buttons from "../homepage/uicomponents/Buttons"
import CardComponent from "../homepage/uicomponents/CardComponent"
import LoginForm from "../homepage/uicomponents/LoginForm"

function BacktestResult() {

    return (
        <>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "3rem", md: "6rem" } }}
                overflow="hidden"
            >
                <Container>
                    <Div
                        d="flex"
                        justify="center"
                        p={{ b: "10.5rem" }}
                        border={{ b: "1px solid" }}
                        borderColor="gray300"
                    >
                        <Div
                            minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
                            d="flex"
                            align="center"
                            flexDir="column"
                            h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                            pos="relative"
                        >

                            본 결과는 투자자의 투자를 돕기 위해 작성된 저작물로서 어떠한 경우에도 본 사이트 외 복사, 배포, 전송, 변형, 대여될 수 없습니다. 본 자료를 근거로 투자하는 것은 본인 판단과 책임에 따르며 투자 결과에 대한 법적 책임소재에 대한 증빙자료로 사용할 수 없습니다.

                            {/* Follow Component */}
                            <FollowCard />

                            {/* Card Component */}
                            <CardComponent />

                            {/* Notification Component */}
                            {/* <Notification /> */}

                            {/* Form Component */}
                            <LoginForm />

                            {/* User Component */}
                            <UserEdit />
                        </Div>
                    </Div>
                </Container>
            </Div>
        </>
    )
}

export default BacktestResult;