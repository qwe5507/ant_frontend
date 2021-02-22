import React from "react"
import LineChartIn2 from "./LineChartIn2"
import { Text, Div, Icon, Anchor, Button, Input } from "atomize"

const IndicatorForm = () => (
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    w={{ xs: "100%", md: "23rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "-2rem" }}
    //left="0"
    //right="0"
    top="0"
    rounded="xl"
    h={{ lg: "24rem" }}
    bg="white"
    shadow="4"
    p="2rem"
  >
    <Div flexGrow="1">
      <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="800"
        fontFamily="ko"
      >
        한국 USD/원
      </Text>
      <Text
        textAlign="center"
        textSize="title"
        m={{ t: "0.5rem", b: "0.5rem" }}
        textWeight="500"
        textWeight="800"
        fontFamily="ko"
        textColor="info700"
        
      >
        1,107
      </Text>
      <br/>
      <LineChartIn2/>
      </Div>    
  </Div>
)

export default  IndicatorForm 
