import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, Switch, useHistory } from 'react-router-dom';

function Header() {

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


          <a href="/">
            <Image
              src={logo}
              h="18px"
              w="auto"
            />
          </a>


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
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                뉴스
              </Anchor>
            </Link>

            <Link to="/Community">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                커뮤니티
              </Anchor>
            </Link>

            <Link to="/Backtest">
              <Anchor
                target="_blank"
                m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                백테스트
              </Anchor>
            </Link>

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

            {/* <Anchor
              m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
              textWeight="800"
              textColor="medium"
              hoverTextColor="black"
              transition
              fontFamily="ko"
              onClick={() => scrollTo("#features")}
            >
              테스트
              </Anchor> */}

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

export default Header