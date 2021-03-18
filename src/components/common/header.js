import React, { useState, useEffect } from "react"
import { Div, Image, Container, Anchor, Button, Text } from "atomize"
import logo from "../../images/logo-title.svg"
import girl from "../../images/avatar/girl.png"
import { Link, useLocation } from 'react-router-dom';

import PropTypes from "prop-types"
import { useSelector } from 'react-redux';

function Header() {
  const loginstate = useSelector(state => state.user.loginstate);
  const nickname = useSelector(state => state.user.nickname);
  const location = useLocation();

  let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);

  let [currentLocation, currentLocationChange] = useState();

  useEffect(() => {
    var temp = location.pathname;
    currentLocationChange(temp);
  }, [location]);

  function toggleHeaderMenu(value) {
    showMobileHeaderMenuChange(value);

    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400);
  };

  const menuLink = ['/News', '/Indicators', '/Community', '/Backtest'];
  const menuName = ['뉴스', '지표', '커뮤니티', '백테스트'];

  const profileLink = ['/ChatPage', '/PaymentFirst', '/Profile', '/Logout'];
  const profileName = ["채팅", "구독", "마이페이지", "로그아웃"];

  return (
    <>
      <Div
        tag="header"
        pos="fixed"
        top="0"
        // transition
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
        <Container
          d="flex"
          align="center"
          justify="space-between"
        >

          <Link to="/">
            <Image
              src={logo}
              h="24px"
              w="auto"
            />
          </Link>

          <Div
            d="flex"
            align="center"
            justify="space-between"
          >

            {/* Icon For Mobile */}
            <Div
              d={{ xs: "flex", md: "none" }}
              order={{ xs: 3, md: 2 }}
              flexDir="column"
              cursor="pointer"
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
                t: { xs: "4rem", md: "0" },
                b: { xs: "0.5rem", md: "0" },
                x: { xs: "1.5rem", md: "0" },
              }}
              top="0"
              left="0"
              right="0"
              zIndex={{ xs: "-1", md: "0" }}
              shadow={{ xs: "2", md: "0" }}
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

              {currentLocation && menuName.map(
                (name, index) => (
                  <Link
                    to={menuLink[index]}
                  >
                    <Anchor
                      // target="_blank"
                      // transform={{
                      //   xs: `translateY("-100%")`
                      // }}
                      // transition
                      d="block"
                      p={{ y: "0.25rem" }}
                      m={{ r: "1rem", b: { xs: "0.2rem", md: "0" } }}
                      textSize="title"
                      textWeight="800"
                      textColor={menuLink[index] == currentLocation ? "black" : "medium"}
                      hoverTextColor="black"
                      fontFamily="ko"
                      border={{ b: { md: menuLink[index] == currentLocation ? "4px solid" : "0" } }}
                      borderColor="black"

                      hoverBorderColor="black"
                    >
                      {name}
                    </Anchor>
                  </Link>
                )
              )}

              {loginstate && currentLocation && profileName.map(
                (name, index) => (
                  <Link
                    to={profileLink[index]}
                  >
                    <Anchor
                      // target="_blank"
                      // transform={{
                      //   xs: `translateY("-100%")`
                      // }}
                      // transition
                      d="block"
                      p={{ y: "0.25rem" }}
                      m={{ r: "1rem", b: { xs: "0.2rem", md: "0" } }}
                      textSize="title"
                      textWeight="800"
                      textColor={profileLink[index] == currentLocation ? "black" : "medium"}
                      hoverTextColor="black"
                      fontFamily="ko"
                      border={{ b: { md: profileLink[index] == currentLocation ? "4px solid" : "0" } }}
                      borderColor="black"
                      hoverBorderColor="black"
                    >
                      {name}
                    </Anchor>
                  </Link>
                )
              )}
            </Div>

            <Div
              order={{ xs: 2, md: 3 }}
            >
              {loginstate ?
                <Link
                  to="/profile"
                >
                  <Anchor
                    target="_blank"
                    m={{ r: "1rem", b: { xs: "0", md: "0" } }}
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
                    <Text
                      textSize="title"
                      textWeight="800"
                      textColor="medium"
                      hoverTextColor="black"
                      fontFamily="ko"
                    >
                      {nickname}
                    </Text>
                  </Anchor>
                </Link>
                :
                <Link
                  to="/Login"
                >
                  <Button
                    h="2rem"
                    w={{ xs: "5rem", sm: "7rem", md: "7rem" }}
                    bg="black"
                    rounded="lg"
                    m={{ r: "1.5rem", b: { xs: "0", sm: "0", md: "0" } }}
                  >
                    <Text
                      textSize={{ xs: "body", sm:"subheader" }}
                      textWeight="1000"
                      fontFamily="ko"
                    >로그인
                  </Text>
                  </Button>
                </Link>
              }
            </Div>

          </Div>

        </Container>
      </Div>
    </>
  )
}

export default Header;