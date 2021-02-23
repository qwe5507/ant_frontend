import React, { useEffect, useState } from "react"

import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import axios from 'axios';
// import styled from 'styled-components';
// import KaKaoLogin from 'react-kakao-login';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import UserApiService from "../../API/UserApi";

function FirstLogin(props) {
  let history = useHistory();
  let [nickname,nickname변경] = useState("");
  let [telnumber,telnumber변경] = useState("");
  
  function addinfobutton() {
    props.dispatch({ type: 'loginadd', payload: { nickname : nickname ,phone : telnumber} })
    history.push('/')
  }

  return (
    <Div
      d="flex"
      flexDir="column"
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "30.5rem" }}
      maxW="100%"
      pos={{ xs: "static" }}
      // m={{ xs: "50%", md: "12rem" }}
      m={{ t: "13rem", l: "33%" }}
      align="center"

      // right="50%"
      // top="50%"
      rounded="xl"
      h= "26rem"
      bg="white"
      shadow="4"
      p="2rem"
    >
      <Div flexGrow="1">
        <Text
          textAlign="center"
          textSize="title"
          m={{ t: "3rem", b: "0.5rem" }}
          textWeight="500"
          fontFamily="secondary"
        >
          처음이시군요 추가정보를 입력하고      
          회원등록을 완료하세요.
      </Text>

        <Text
          m={{ b: "3rem" }}
          textAlign="center">
        </Text>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "0.5rem" }}
          textAlign="center"
          textWeight="500"
        >
          추가정보 입력 
      </Text>
              <Input
              placeholder="닉네임을 입력하세요."
              p={{ x: "2.5rem" }}
              onChange={(e) =>
                nickname변경(e.target.value)
              }
              prefix={
                <Icon
                  name="UserSolid"
                  color="warning800"
                  size="16px"
                  cursor="pointer"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              />
             <Input
              placeholder="전화번호를 입력하세요."
              p={{  x: "2.5rem" }}
              m = {{ t : "1.2rem"}}
              onChange={(e) =>
                telnumber변경(e.target.value)
              }
              prefix={
                <Icon
                  name="Add"
                  color="warning800"
                  size="16px"
                  cursor="pointer"
                  pos="absolute"
                  top="50%"
                  left="0.75rem"
                  transform="translateY(-50%)"
                />
              }
              />
              <Div
              pos = "flex"
              m={{ t: "2rem" ,l : "7rem"   }}>
                <Button
                  prefix={
                    <Icon
                      name="EyeSolid"
                      size="25px"
                      color="white"
                      m={{ r: "0.5rem"   }}
                    />
                  }
                  bg="warning700"
                  hoverBg="warning800"
                  rounded="circle"
                  w = "12rem"
                  p={{ r: "1.5rem", l: "1rem" }}
                  shadow="3"
                  hoverShadow="4"
                  textWeight= "50"
                  onClick={() =>
                    addinfobutton()      
                  }
                >
                  입력완료
                </Button>
              </Div>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "4rem" }}
          textAlign="left"
          textWeight="500"
        >
          
          <Text
            // textColor="#999"
            textSize="caption"
            // m={{ b: "1rem" }}
            textAlign="right"
          // textWeight="500"
          >

          </Text>
        </Text>

      </Div>
    </Div>
  )
}

function userStateToProps(state) {
  console.log(state)
  return {
    userinfo: state.reducer
  }
}

export default connect(userStateToProps)(FirstLogin)
