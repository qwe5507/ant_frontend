import React from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize";

import { useDispatch, useSelector } from 'react-redux';

function ProfileDetail1(props) {

    const nickname = useSelector(state => state.user.nickname);

    return (
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
                d="flex"
                justify="center"
                align="center"
                flexDir="column"
            >
                <Div
                    h="7rem"
                    w="7rem"
                    bg="gray300"
                    rounded="circle"
                    pos="relative"
                    m={{ b: "1rem" }}
                >
                    <Div
                        pos="absolute"
                        rounded="circle"
                        right="0.9rem"
                        bottom="0.9rem"
                        bg="white"
                        shadow="2"
                        h="0.5rem"
                        w="0.5rem"
                    >
                        <Div
                            bg="success800"
                            rounded="circle"
                            h="1rem"
                            w="1rem"
                        />
                    </Div>
                </Div>
                
                <Text
                    textSize="title"
                    m={{ b: "1rem" }}
                    textWeight="800"
                    textAlign="center"
                    fontFamily="ko"
                >
                    {nickname}
                </Text>

                <Text
                    textSize="caption"
                    textColor="light"
                    textWeight="500"
                    textAlign="center"
                    fontFamily="ko"
                >
                    관심분야: 한국주식
                </Text>

                <Text
                    textSize="subheader"
                    m={{ b: "1rem" }}
                    textWeight="500"
                    textAlign="center"
                    fontFamily="ko"
                >
                    내일은 백만장자
                </Text>

                <Div 
                    d="flex" 
                    w="100%"
                    m={{ b: "1rem" }}
                    >
                    <Text
                        justify="space-between"
                        flexGrow="1"
                        textSize="subheader"
                        textWeight="500"
                        textAlign="center"
                        fontFamily="ko"
                    >
                        게시물 29
                    </Text>
                    <Text
                        justify="space-between"
                        flexGrow="1"
                        textSize="subheader"
                        textWeight="500"
                        textAlign="center"
                        fontFamily="ko"
                    >
                        팔로워 100
                    </Text>
                    <Text
                        justify="space-between"
                        flexGrow="1"
                        textSize="subheader"
                        textWeight="500"
                        textAlign="center"
                        fontFamily="ko"
                    >
                        팔로우 130
                    </Text>
                </Div>

                <Div 
                    d="flex" 
                    w="100%"
                    m={{ b: "1rem" }}
                    >
                    <Button
                        bg="white"
                        hoverBg="gray300"
                        border="1px solid"
                        borderColor="gray500"
                        textColor="medium"
                        justify="space-between"
                        flexGrow="1"
                        maxW="calc(50% - 0.5rem)"
                        rounded="circle"
                        m={{ r: "1rem" }}
                        // suffix={
                        //     <Icon
                        //         name="Plus"
                        //         size="18px"
                        //         textColor="medium"
                        //     />}
                        onClick={()=>{props.editProfileChange(true)}}
                        disabled={props.editProfile}
                    >
                        Edit Profile
                    </Button>
                    {/* <Button
                        bg="info700"
                        hoverBg="info800"
                        justify="space-between"
                        flexGrow="1"
                        maxW="calc(50% - 0.5rem)"
                        rounded="circle"
                        m={{ r: "1rem" }}
                        suffix={<Icon name="Plus" size="18px" color="white" />}
                    >
                        Follow
                    </Button> */}
                    <Button
                        bg="white"
                        hoverBg="gray300"
                        border="1px solid"
                        borderColor="gray500"
                        textColor="medium"
                        justify="space-between"
                        flexGrow="1"
                        maxW="calc(50% - 0.5rem)"
                        rounded="circle"
                        suffix={<Icon name="Bookmark" size="18px" color="black400" />}
                    >
                        Saved
                    </Button>
                    {/* <Button
                        bg="white"
                        hoverBg="gray300"
                        border="1px solid"
                        borderColor="gray500"
                        textColor="medium"
                        justify="space-between"
                        flexGrow="1"
                        maxW="calc(50% - 0.5rem)"
                        rounded="circle"
                        suffix={<Icon name="Message" size="18px" color="black400" />}
                    >
                        Message
                    </Button> */}
                </Div>

            </Div>
        </Div>

    )

}

export default ProfileDetail1;
