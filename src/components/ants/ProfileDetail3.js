import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import Paper from '@material-ui/core/Paper';
const ProfileDetail3 = () => (
    <Div
        border="1px solid"
        borderColor="gray200"
        w={{ xs: "100%", md: "19.5rem" }}
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
                게시물
            </Text>
            <Paper>

            <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
            textSize="subtitle"
            >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
            </Text>
        <Text
        fontFamily="ko"
        textWeight="650"
        >
        원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
    </Text>
    <Text
    textColor="gray900"
    >이데일리 | 2021-02-19 08:08</Text>

    </Paper>
        </Div>
    </Div>
)

export default ProfileDetail3;
