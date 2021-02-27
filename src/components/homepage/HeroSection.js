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

import { useDispatch, useSelector } from 'react-redux';
import { setUserLogout } from '../../redux/actions/user_action';

import firebase from "../../firebase";

function HeroSection() {
  const dispatch = useDispatch();
  const loginstate = useSelector(state => state.user.loginstate);

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a');
  };

  function logoutWithKakao() {
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout(() => {
        localStorage.removeItem('loginstate');
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        
        dispatch(setUserLogout());

        // Firebase 로그아웃
        firebase.auth().signOut().then(() => {
          console.log('Firebase Logout 완료');
        }).catch((error) => {
          console.log('Firebase Logout 에러', error.message);
        });

      });
    }
  };

    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "10rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="800"
              textAlign="center"
              textSize="display3"
              fontFamily="ko"
              m={{ b: "1rem" }}
            >
              개인투자자만을 위한 공간
            </Text>
          <Text
            tag="h2"
            textWeight="800"
            maxW="36rem"
            textSize="subheader"
            textAlign="center"
            fontFamily="ko"
            textColor="medium"
            m={{ b: "2.5rem" }}
          >
            오직 개인투자자만을 위한 똑똑한 개미들의 서비스와 커뮤니티를 경험해보세요!
            </Text>

          <Div
            d="flex"
            w="100%"
            justify="center"
            flexDir={{ xs: "column", sm: "row" }}
          >

            { loginstate ?
              <Button
                h="3rem"
                w={{ xs: "50%", sm: "11rem" }}
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
             로그아웃
            </Button>
              :
              <Link to="/Login">
                <Button
                  h="3rem"
                  w={{ xs: "50%", sm: "11rem" }}
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
    </>
  )
}

export default HeroSection