import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory } from 'react-router-dom';

function Community() {
    let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);
    let [selectedSwitchValue,selectedSwitchValueChange] = useState(false);

    function toggleHeaderMenu(value) {
      showMobileHeaderMenuChange(value);
      
      setTimeout(() => {
        window.scrollTo(0, window.scrollY + 1)
      }, 400);
    };

    return (
<>
      <Div
        tag="section"
        pos={{ xs: 'relative', md: 'relative' }}
        top="0"
        transition
        left="10%"
        right="0"
        zIndex="100"
        w="85%"
        // p={{ y: { xs: "4.5rem", md: "1rem" } }}

        align = "space-between"
        // m={{ l : { xs: '5rem', md: '0%' },
        // t : { xs: '5rem', md: '0%' }
        // }}
        // p ={{ l : { xs: '5rem', md: '0%' },
        // t : { xs: '5rem', md: '0%' }
        // }}
      >
        <Div
          pos="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          w="0rem"
          bg="white"
          opacity="1"
          zIndex="-1"
          
        ></Div>
        <Container w="30rem" d="static" align="center" justify="center" >
           

          {/* <Link to="/">
            <Image
              src={logo}
              h="18px"
              w="auto"
            />
          </Link> */}


          {/* Icon For Mobile */}
         {/* 모바일일때 생기는탭 */}
          <Div
            d={{ xs: "flex", md: "none" }}
            flexDir="column"
            onClick={() => toggleHeaderMenu(!showMobileHeaderMenu)}
            m={{ t: "5rem"}}
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

          <Label
             d={{ xs: "flex", md: "none" }}
             m={{ l: "85%" ,t : "-1rem" }}
            onClick={() =>
                selectedSwitchValueChange( !selectedSwitchValue)
            }
            align="center"
            textWeight="600"
            // m={{ b: "1rem" }}
            >
            <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />
            {selectedSwitchValue ? <Text>추천순</Text> : <Text>최신순</Text>}
            </Label>


          {/* Links for Desktop */}
          <Div
            d="flex"
            onClick={() => toggleHeaderMenu(false)}
            bg={{ xs: "white", md: "transparent" }}
            align={{ xs: "strech", md: "flex-start" }}
            flexDir={{ xs: "column", md: "row" }}
            pos={{ xs: "absolute", md: "relative" }}
            w = "1100px"
            p={{
              t: { xs: "6rem", md: "0" },
              b: { xs: "2rem", md: "5%" },
              x: { xs: "1.5rem", md: "0" },
            }}
            //마진
            // m={{  xs: '5rem', md: '15%' }}
            m={{ l : { xs: '5rem', md: '-80%' },
               t : { xs: '5rem', md: '20%' }
            }}
            // top="20rem"
            // left="10%"
            // right="0"
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
            border={{ b: "1px solid" }}
            borderColor="black"
          >
            
            <Link to="/News">
              <Anchor
                target="_blank"
                // m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        m={{ b: "0.25rem" ,r : "2.5rem" , l : "2.5rem" }}
                        textWeight="1000"
                        textAlign="center"
                    >
                        전체
                    </Text>
              </Anchor>
            </Link>

            <Link to="/Indicators">
              <Anchor
                target="_blank"
                // m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        // m={{ b: "0.25rem" }}
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem" ,r : "2.5rem" }}
                    >
                        팔로워
                    </Text>
              </Anchor>
            </Link>
            <Link to="/Indicators">
              <Anchor
                target="_blank"
                // m={{ r: "2rem", b: { xs: "1rem", md: "0" } }}
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
                        m={{ b: "0.25rem" }}
                        textWeight="1000"
                        textAlign="center"
                    >
                        저장한 글
                    </Text>
              </Anchor>
            </Link>

            <Label
             m={{ l: "40rem" ,t : "0.2rem" }}
            onClick={() =>
                selectedSwitchValueChange( !selectedSwitchValue)
            }
            align="center"
            textWeight="600"
            // m={{ b: "1rem" }}
            >
            <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />
            {selectedSwitchValue ? <Text>추천순</Text> : <Text>최신순</Text>}
            </Label>

          </Div>
          


         {/* 게시판시작부분 */}
         <Div pos = "relative" 
         m={{t :{ md : "5%"}, l :{ md : "-80%"}}}
        //  m={{ b: { xs: "2rem", md: "2rem" } }}
         w = {{xs: "100%", md : "250%"}}>
             
            <Row>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "1rem" } }}
                >
                  <Image
                    src={logoSketch}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text 
                  align = "top"
                  m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    게시글1
                  </Text>

                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용1~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="xl"
                  p="2rem"
                >
                  <Image
                    src={logoReact}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                        게시글2
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용2~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>
              
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "1rem" } }}
                >
                  <Image
                    src={logoSketch}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    게시글3
                  </Text>

                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용3~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="xl"
                  p="2rem"
                >
                  <Image
                    src={logoReact}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    게시글4
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용4~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>

              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="xl"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "2rem" } }}
                >
                  <Image
                    src={logoSketch}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    게시글5
                  </Text>

                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용5~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="xl"
                  p="2rem"
                >
                  <Image
                    src={logoReact}
                    h="2.5rem"
                    w="auto"
                    m={{ b: "1rem" }}
                  />
                  <Text m={{ b: "0.5rem" }} textSize="heading" textWeight="500">
                    게시글6
                  </Text>
                  <Text
                    textSize="subheader"
                    textColor="medium"
                    p={{ r: "1rem" }}
                    m={{ b: "1.5rem" }}
                  >
                    게시글 내용6~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </Text>
                </Div>
              </Col>
            </Row>
          </Div>

       {/* 게시판끝부분 */}

        </Container>
      </Div>
    </>
  )
}

Community.propTypes = {
  siteTitle: PropTypes.string,
}

Community.defaultProps = {
  siteTitle: ``,
}


export default Community;