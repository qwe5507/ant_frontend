import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon } from "atomize"
import logo from "../../images/logo-title.svg"
import girl from "../../images/avatar/girl.png"
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const loginstate = useSelector(state => state.user.loginstate);
  const nickname = useSelector(state => state.user.nickname);

  let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);

  function toggleHeaderMenu(value) {
    showMobileHeaderMenuChange(value);

    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400);
  };

  return (
    <>
      <Div
        tag="header"
        pos="fixed"
        top="0"
        transition
        left="0"
        right="0"
        zIndex="100"
        p={{ y: { xs: "1.5rem", md: "1rem" } }}
      >
        <Div
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="white"
          opacity="1"
          zIndex="-1"
        ></Div>
        <Container d="flex" align="center" justify="space-between">


          <Link to="/">
            <Image
              src={logo}
              h="24px"
              w="auto"
            />
          </Link>


          {/* Icon For Mobile */}

          <Div
            d={{ xs: "flex", md: "none" }}
            flexDir="column"
            onClick={() => toggleHeaderMenu(!showMobileHeaderMenu)}
          >
            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="lg"
              style={{
                transform: `translateY(${showMobileHeaderMenu ? "1" : "-2"
                  }px)rotate(${showMobileHeaderMenu ? "135" : "0"}deg)`,
              }}
              transition
            ></Div>
            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="lg"
              style={{
                transform: `translateY(${showMobileHeaderMenu ? "-1" : "2"
                  }px)rotate(${showMobileHeaderMenu ? "45" : "0"}deg)`,
              }}
              transition
            ></Div>
          </Div>

          {/* Links for Desktop */}
          <Div
            d="flex"
            onClick={() => toggleHeaderMenu(false)}
            bg={{ xs: "white", md: "transparent" }}
            align={{ xs: "strech", md: "center" }}
            flexDir={{ xs: "column", md: "row" }}
            pos={{ xs: "absolute", md: "static" }}
            p={{
              t: { xs: "6rem", md: "0" },
              b: { xs: "2rem", md: "0" },
              x: { xs: "1.5rem", md: "0" },
            }}
            top="0"
            left="0"
            right="0"
            zIndex={{ xs: "-1", md: "0" }}
            shadow={{ xs: "4", md: "0" }}
            opacity={{
              xs: showMobileHeaderMenu ? "1" : "0",
              md: "1",
            }}
            transform={{
              xs: `translateY(${showMobileHeaderMenu ? "0" : "-100%"})`,
              md: "none",
            }}
            transition
          >

            <Link to="/News">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textSize="title"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                뉴스
              </Anchor>
            </Link>

            <Link to="/Indicators">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textSize="title"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                지표
              </Anchor>
            </Link>

            <Link to="/Community">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textSize="title"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                커뮤니티
              </Anchor>
            </Link>

            {loginstate
              ?
              <Link to="/PaymentFirst">
                <Anchor
                  target="_blank"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textSize="title"
                  textWeight="800"
                  textColor="medium"
                  hoverTextColor="black"
                  transition
                  fontFamily="ko"
                >
                  구독
              </Anchor>
              </Link>
              :
              ' '
            }

            <Link to="/Backtest">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textSize="title"
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                백테스트
              </Anchor>
            </Link>

            {loginstate
              ?
              <Link to="/ChatPage">
                <Anchor
                  target="_blank"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textSize="title"
                  textWeight="800"
                  textColor="medium"
                  hoverTextColor="black"
                  transition
                  fontFamily="ko"
                >
                  채팅
              </Anchor>
              </Link>
              :
              ' '
            }

            {/* {loginstate
              ?
              <Link to="/">
                <Anchor
                  target="_blank"
                  m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                  textWeight="800"
                  textColor="medium"
                  hoverTextColor="black"
                  transition
                  fontFamily="ko"
                >
                  마이페이지
              </Anchor>
              </Link>
              :
              ' '
            } */}

            {loginstate
              ?
              <Link to="/Profile">
                <Anchor
                  target="_blank"
                  m={{ r: "1rem", b: { xs: "1rem", md: "0" } }}
                  textSize="title"
                  textWeight="800"
                  textColor="medium"
                  hoverTextColor="black"
                  transition
                  fontFamily="ko"
                  d="flex"
                  flexDir="row"
                >
                  <Div
                    h="2rem"
                    w="2rem"
                    bg="gray300"
                    rounded="circle"
                    pos="relative"
                    bgImg={girl}
                    bgSize="cover"
                    bgPos="center"
                    m={{ r: "0.5rem" }}
                  />
                  {nickname}
                </Anchor>
              </Link>
              :
              ' '
            }

            {/* <Anchor
              m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
              textWeight="800"
              textColor="medium"
              hoverTextColor="black"
              transition
              fontFamily="ko"
              onClick={() => scrollTo("#features")}
            >
              클릭시 해당 아이디로 이동 앵커
              </Anchor> */}

            <Icon name="Notification" size="20px" />

          </Div>
        </Container>
      </Div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;