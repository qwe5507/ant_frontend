import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"

const ProfileDetail2 = () => (
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
                개인정보수정
            </Text>
            <Div
            d="flex"
            flexDir="row">
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
               별명
             </Text>
            <Input
            w={{ xs: "100%", sm: "10rem" }}
            m={{ b: "1.5rem" }}
            fontFamily='ko'
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row">
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                비밀번호
             </Text>
            <Input
            w={{ xs: "100%", sm: "10rem" }}
            m={{ b: "1.5rem" }}
            fontFamily='ko'
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row">
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                전화번호
             </Text>
            <Input
            w={{ xs: "100%", sm: "10rem" }}
            m={{ b: "1.5rem" }}
            fontFamily='ko'
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row">
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                EMAIL
             </Text>
            <Input
            w={{ xs: "100%", sm: "10rem" }}
            m={{ b: "1.5rem" }}
            fontFamily='ko'
            />    
            </Div>
            <div align="center">
            <Button
            
            h="2.5rem"
            w="8rem"
            bg="black"
            rounded="circle"
            m={{ r: "1rem" }}
            shadow="2"
            hoverShadow="4"
            >
            정보 수정
        </Button>
        </div>

        </Div>
    </Div>
)

export default ProfileDetail2;
