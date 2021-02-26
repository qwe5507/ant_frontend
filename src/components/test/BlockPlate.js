import React from "react"
import { Button, Text, Div, Icon } from "atomize"

import { useDispatch, useSelector } from 'react-redux';

function BlockPlate() {
  const userinfo = useSelector(state => state.user);


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
      h="24rem"
      bg="white"
      shadow="4"
      rounded="xl"
    // left={{ md: "2rem", lg: "0" }}

    >
      <Div 
        flexGrow="1" 
        d="flex" 
        justify="center" 
        align="center" 
        flexDir="column">
        <Div
          h="4.5rem"
          w="4.5rem"
          bg="gray300"
          rounded="circle"
          pos="relative"
          m={{ b: "1rem" }}
        >
          <Div
            pos="absolute"
            rounded="circle"
            right="0.25rem"
            bottom="0.25rem"
            bg="white"
            shadow="2"
            h="0.5rem"
            w="0.5rem"
            p="1px"
          >
            <Div bg="success800" rounded="circle" h="6px" w="6px" />
          </Div>
        </Div>
        <Text
          textSize="title"
          m={{ b: "0.25rem" }}
          textWeight="500"
          textAlign="center"
        >
          {/* Meagan Fisher */}
          {userinfo.nickname}
        </Text>
        <Text
          textSize="caption"
          textColor="light"
          m={{ b: "2.5rem" }}
          textAlign="center"
        >
          {/* {userinfo.email} */}
        </Text>
      </Div>
    </Div>
  )
}

export default BlockPlate;
