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