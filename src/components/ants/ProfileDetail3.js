import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"

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
        </Div>
    </Div>
)

export default ProfileDetail3;
