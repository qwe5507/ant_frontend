import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize";

import { useDispatch, useSelector } from 'react-redux';

function BacktestGraph() {

    const nickname = useSelector(state => state.user.nickname);

    return (
        <Div
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "40rem" }}
            maxW="100%"
            pos={{ xs: "static", md: "relative" }}
            m={{ xs: "1rem", md: "1rem" }}
            top="0"
            p={{
                x: { xs: "2rem", sm: "1.5rem" },
                b: { xs: "2rem", sm: "1.5rem" },
                t: "1.5rem",
            }}
            h="25rem"
            bg="white"
            shadow="4"
            rounded="xl"

        >
            <Div
                flexGrow="1"
                textAlign="center"
            >
                <Text
                    m={{ t: "1rem", b: "0.5rem" }}
                    textWeight="800"
                    textSize="title"
                    fontFamily="ko"
                >
                    백테스트 결과
                </Text>
            </Div>
        </Div>

    )

}

export default BacktestGraph;
