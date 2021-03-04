import React from "react"
import { Text, Div, Image, Icon, Anchor, Button, Input } from "atomize"
import girl from "../../images/avatar/girl.png"
import flagKo from "../../images/flags/ko.png"
import flagUs from "../../images/flags/us.png"

const MainPnlCmp1 = () => (
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
        h="24rem"
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
                지난 1일간 시황
            </Text>

            <Div
                p="1rem"
                bg="white"
                shadow="2"
                rounded="xl"
                m={{ b: "0.5rem"}}
            >
                <Div
                    d="flex"
                    align="center"
                    justify="space-between"
                    pos="relative"
                    flexDir="row"
                >
                    <Image
                        src={flagUs}
                        rounded="circle"
                        h="1.5rem"
                        w="1.5rem"
                    />
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                    >
                        Nasdaq
                    </Text>
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                    >
                        13,192.35
                    </Text>
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                        bg="info700"
                        rounded="circle"
                        textColor="success100"
                        p={{ l:"0.3rem", r:"0.3rem", b:"0.1rem" }}
                    >
                        +3.50%
                    </Text>
                </Div>
            </Div>

            <Div
                p="1rem"
                bg="white"
                shadow="2"
                rounded="xl"
                m={{ b: "0.5rem"}}
            >
                <Div
                    d="flex"
                    align="center"
                    justify="space-between"
                    pos="relative"
                    flexDir="row"
                >
                    <Image
                        src={flagKo}
                        rounded="circle"
                        h="1.5rem"
                        w="1.5rem"
                    />
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                    >
                        Kospi
                    </Text>
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                    >
                        3,012.95
                    </Text>
                    <Text
                        textWeight="800"
                        fontFamily="ko"
                        bg="danger700"
                        rounded="circle"
                        textColor="success100"
                        p={{ l:"0.3rem", r:"0.3rem", b:"0.1rem" }}
                    >
                        -2.80%
                    </Text>
                </Div>
            </Div>

        </Div>
    </Div>
)

export default MainPnlCmp1;
