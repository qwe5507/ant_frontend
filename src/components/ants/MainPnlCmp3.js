import React from "react"

import { Text, Div } from "atomize"
import { Link } from 'react-router-dom';

const MainPnlCmp3 = () => (
    <Div
        border="1px solid"
        borderColor="gray200"
        w={{ xs: "100%", md: "22rem" }}
        maxW="100%"
        pos={{ xs: "static", md: "relative" }}
        m={{ xs: "1rem", md: "1rem" }}
        top="0"
        p={{
            x: { xs: "2rem", sm: "1.5rem" },
            b: { xs: "2rem", sm: "1.5rem" },
            t: "1.5rem",
        }}
        h="28rem"
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
                뉴스
            </Text>

            {/* 뉴스 반복 블록 */}
            <Div
                p="1rem"
                bg="white"
                shadow="2"
                rounded="xl"
                m={{ b: "0.5rem" }}
            >
                <Div
                    d="flex"
                    align="center"
                    justify="space-between"
                    pos="relative"
                    flexDir="row"
                >
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                        textAlign="left"
                    >
                        [연합뉴스] 위험자산 선호 심리 둔화 속 미중 갈등..1100원 중반대 전망
                    </Text>
                </Div>
            </Div>

            {/* 뉴스 더보기 버튼 */}
            <Link to="/News">
                <Text
                    textWeight="800"
                    textSize="subheader"
                    fontFamily="ko"
                >
                    뉴스 더보기 →
                </Text>
            </Link>

        </Div>
    </Div>
)

export default MainPnlCmp3;
