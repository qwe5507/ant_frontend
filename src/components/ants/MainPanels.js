import React, { useState, Component } from "react";

import MainPnlCmp1 from "./MainPnlCmp1";
import MainPnlCmp2 from "./MainPnlCmp2";
import MainPnlCmp3 from "./MainPnlCmp3";

import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { Tag, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";

function MainPanels() {

    let history = useHistory();

    return (
        <Div>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "3rem", md: "8rem" } }}
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

                            {/* Form Component */}
                            <MainPnlCmp1 />
                            <MainPnlCmp2 />
                            <MainPnlCmp3 />

                        </Div>
                    </Div>
                </Container>
            </Div>
        </Div>
    )
}

export default MainPanels;