import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import BacktestGraph from "./BacktestGraph";
import ProfileDetail2 from "./ProfileDetail2";
import ProfileDetail3 from "./ProfileDetail3";

function BacktestResult() {

    return (
        <Div>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "5rem", md: "8rem" } }}
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
                            justify="center" 
                            flexDir={{ xs: "column", md: "row" }}
                            h={{ xs: "auto", md: "21rem", lg: "20rem" }}
                            pos="relative"
                        >

                            <BacktestGraph />

                        </Div>
                    </Div>
                </Container>
            </Div>
        </Div>
    )
}

export default BacktestResult;