import React from "react"

import girl2 from "../../../images/avatar/girl2.png"
import cardImg from "../../../images/hero-illustration/card-img.png"
import axios from 'axios';
// import Kakao from 'kakaojs';

import { Button, Text, Div, Icon } from "atomize"

class CardComponent extends React.Component {
  
  constructor(){
    console.log('1');
    super();

    this.state = {
      name : "",
      kakaoid : "",
      liked: false,
      id: "",
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      salary: "",
      message: null
    }
    
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount.window.Kakao.Auth.createLoginButton = this.window.Kakao.Auth.createLoginButton.bind(this);
  }

  render() {
    const { liked } = this.state
    return (
      <Div
        d={{ xs: "none", lg: "block" }}
        border="1px solid"
        borderColor="gray200"
        w="17rem"
        pos="absolute"
        left="21rem"
        top="0"
        rounded="xl"
        bg="white"
        shadow="4"
        overflow="hidden"
      >
        <Text textWeight="500">{this.state.kakaoid}</Text>
        <Text textWeight="500">{this.state.name}</Text>
        <Div
          bgImg={cardImg}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          p={{ b: "84%" }}
        />
        <Div p="1rem" d="flex" align="center" justify="space-between">
          <Div d="flex" align="center">
            <Div
              h="1.5rem"
              w="1.5rem"
              bgImg={girl2}
              bgSize="cover"
              bgPos="center"
              m={{ r: "1rem" }}
              rounded="circle"
            ></Div>
            <Text textWeight="500">{this.state.firstName}</Text>
          </Div>
          <Icon
            transition
            onClick={() => this.setState({ liked: !liked })}
            name={liked ? "HeartSolid" : "Heart"}
            color={liked ? "danger700" : "black"}
            size="18px"
            cursor="pointer"
          />
        </Div>
      </Div>
    )
  }
}

export default CardComponent
