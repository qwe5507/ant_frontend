import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import boy from "../../images/avatar/boy.png";
import cardImg from "../../images/hero-illustration/card-img.png";
import FollowCard from "./uicomponents/FollowCard";
import UserEdit from "./uicomponents/UserEdit";
import Buttons from "./uicomponents/Buttons";
import CardComponent from "./uicomponents/CardComponent";
import LoginForm from "./uicomponents/LoginForm";
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import Notification from './uicomponents/Notification';

function HeroSection(props) {

  let [loginchk, loginchkChange] = useState(localStorage.getItem('loginstate'));

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a');
  };

  function logoutWithKakao() {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout(() => {
        localStorage.removeItem('loginstate');
        localStorage.removeItem('userid');
        props.dispatch({ type: '로그아웃' });

        // var result = getCookieValue('kd_lang');
        console.log('result : ', document.cookie);
      });
    }
  };

  const getCookieValue = (key) => {
    let cookieKey = key + "="; 
    let result = "";
    const cookieArr = document.cookie.split(";");
  }
    
    useEffect(()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      loginchkChange(localStorage.getItem('loginstate'));
    });
  

    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Design System for React JS
            </Text>
          <Text
            tag="h2"
            textWeight="400"
            maxW="36rem"
            textSize="subheader"
            textAlign="center"
            fontFamily="secondary"
            textColor="medium"
            m={{ b: "2.5rem" }}
          >
            Atomize React is a UI framework that helps developers collaborate
            with designers and build consistent user interfaces effortlessly.
            </Text>

          <Div
            d="flex"
            w="100%"
            justify="center"
            flexDir={{ xs: "column", sm: "row" }}
          >
            {/* { props.userinfo.loginstate == false ?  */}
            {/* { localStorage.getItem('loginstate') == 'login' ? */}

            { loginchk ?
                          //     <Anchor
              //   href="https://kauth.kakao.com/oauth/logout?client_id=0198e284181270821795f41b8741e202&logout_redirect_uri=http://localhost:3000"
              //   target="_blank"
              // >
              <Button
                h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                bg="transparent"
                hoverBg="gray200"
                border="1px solid"
                borderColor="gray400"
                hoverBorderColor="gray600"
                rounded="lg"
                p={{ l: "0.5rem", r: "1rem" }}
                textColor="medium"
                prefix={
                  <Icon
                    name="Play"
                    size="18px"
                    m={{ r: "0.5rem" }}
                    color="black400"
                  />
                }
                onClick={() => { logoutWithKakao(); }}
              >
                {/* <a href="https://kauth.kakao.com/oauth/logout?client_id=0198e284181270821795f41b8741e202&logout_redirect_uri=http://localhost:3000">로그아웃</a> */}
             로그아웃
            </Button>
              // </Anchor>
              :
              <Link to="/Login">
                <Button
                  h="3rem"
                  w={{ xs: "100%", sm: "11rem" }}
                  bg="info700"
                  hoverBg="info600"
                  rounded="lg"
                  // maxW="calc(50% - 0.5rem)"
                  m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                >
                  <Text
                    textSize="subheader"
                    textWeight="800"
                  >로그인
                  </Text>
                </Button>
              </Link>

            }

          </Div>

        </Container>
      </Div>
      <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "6rem" } }}
        overflow="hidden"
      >
        <Container>
          <Div
            d="flex"
            justify="center"
            p={{ b: "10.5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Div
              minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
              d="flex"
              align="center"
              flexDir="column"
              h={{ xs: "auto", md: "21rem", lg: "20rem" }}
              pos="relative"
            >
              {/* Button Components */}
              <Buttons />

              {/* Follow Component */}
              <FollowCard />

              {/* Card Component */}
              <CardComponent />

              {/* Notification Component */}
              {/* <Notification /> */}

              {/* Form Component */}
              <LoginForm />

              {/* User Component */}
              <UserEdit />
            </Div>
          </Div>
        </Container>
      </Div>
    </>
  )
}

function userStateToProps(state) {

  return {
    userinfo: state
  }
}

export default connect(userStateToProps)(HeroSection)