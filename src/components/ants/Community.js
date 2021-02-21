import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function Community() {
    let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);
    let [selectedSwitchValue,selectedSwitchValueChange] = useState(false);
    let [liked,likedchange] = useState(false);

    let { boardid } = useParams();

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
        zIndex="1"
        w="80%"
        align = "space-between"
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
        <Container w="30.5rem" d="static" align="center" justify="center" >

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
              rounded="md"
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
            m={{ l : { xs: '5rem', md: '-80%' },
               t : { xs: '5rem', md: '20%' }
            }}

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
                textWeight="800"
                textColor="medium"
                hoverTextColor="black"
                transition
                fontFamily="ko"
              >
                    <Text
                        textSize="title"
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
         w = {{xs: "100%", md : "250%"}}>
             
            <Row>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">

                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  rounded="lg"
                  p="2rem"
                  m={{ b: { xs: "2rem", md: "1rem" } }}
                >
                    {/* 시작 */}

        <Div p="1rem" d="flex" align="center" justify="space-between">
          <Div d="inline-block" align="center" >

                    <Text
                    textAlign="left"
                    textSize="title"
                    textWeight="500"
                    fontFamily="secondary"
                    m={{ b: "1rem" }}
                    >
                    Why use Atomize React?Why use Atomize React?
                    </Text>
                    <Text
                    textAlign="left"
                    textSize="body"
                    textWeight="500"
                    fontFamily="secondary"
                    m={{ b: "1rem" }}
                    >
                    Why use Atomize React?Why use Atomize React?
                    </Text>
          </Div>

        </Div>

        <Div p="1rem" d="flex" align="center" justify="space-between">
            <Div d="inline-block" align="center">
                 <Text
                    textAlign="left"
                    textSize="body"
                    textWeight="700"
                    fontFamily="secondary"
                    m={{ b: "0.2rem" }}
                    >
                    Lee Jin Gang
                </Text>
                <Div d="flex" align="center">
                    <Icon
                        transition
                        name= "Eye"
                        color= "black"
                        size="18px"
                        cursor="pointer"
                        m={{r : "0.4rem"}}
                    />
                    <Text
                    textAlign="left"
                    textSize="body"
                    textWeight="450"
                    fontFamily="secondary"
                    m={{r : "1rem"}}
                    >
                    4572
                    </Text>
                    <Icon
                        transition
                        onClick={() => likedchange(!liked)}
                        name={liked ? "HeartSolid" : "Heart"}
                        color={liked ? "danger700" : "black"}
                        size="18px"
                        cursor="pointer"
                        m={{r : "0.4rem"}}
                    />
                    <Text
                    textAlign="left"
                    textSize="body"
                    textWeight="450"
                    fontFamily="secondary"
                    m={{r : "1rem"}}
                    >
                    121
                    </Text>
                    <Icon
                        transition
                        name= "Message"
                        color= "black"
                        size="18px"
                        cursor="pointer"
                        m={{r : "0.4rem"}}
                    />
                    <Text
                    textAlign="left"
                    textSize="body"
                    textWeight="450"
                    fontFamily="secondary"
                    m={{r : "1rem"}}
                    >
                    121
                    </Text>
                </Div>
            </Div>
          <Div d="flex" align="center">
            <Div
              h="1.5rem"
              w="1.5rem"
            //   bgImg={girl2}
              bgSize="cover"
              bgPos="center"
              m={{ r: "1rem" }}
              rounded="circle"
            ></Div>
            <Text textWeight="500">11시간전</Text>
          </Div>
        </Div>
                    {/* 끝 */}

                </Div>

              </Col>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">

<Div
  shadow="4"
  border="1px solid"
  borderColor="gray200"
  rounded="lg"
  p="2rem"
  m={{ b: { xs: "2rem", md: "1rem" } }}
>
            {/* 시작 */}

        <Div p="1rem" d="flex" align="center" justify="space-between">
        <Div d="inline-block" align="center" >

            <Text
            textAlign="left"
            textSize="title"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
            >
            kakao mang hera kakao mang herakakao mang herakakao mang hera
            </Text>
            <Text
            textAlign="left"
            textSize="body"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
            >
            why KaKao SiBal Nom ? 
            </Text>
        </Div>

        </Div>

        <Div p="1rem" d="flex" align="center" justify="space-between">
        <Div d="inline-block" align="center">
        <Text
            textAlign="left"
            textSize="body"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "0.2rem" }}
            >
            Lee Jin Soft
        </Text>
        <Div d="flex" align="center">
            <Icon
                transition
                name= "Eye"
                color= "black"
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            4572
            </Text>
            <Icon
                transition
                onClick={() => likedchange(!liked)}
                name={liked ? "HeartSolid" : "Heart"}
                color={liked ? "danger700" : "black"}
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            121
            </Text>
            <Icon
                transition
                name= "Message"
                color= "black"
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            121
            </Text>
        </Div>
        </Div>
        <Div d="flex" align="center">
        <Div
        h="1.5rem"
        w="1.5rem"
        //   bgImg={girl2}
        bgSize="cover"
        bgPos="center"
        m={{ r: "1rem" }}
        rounded="circle"
        ></Div>
        <Text textWeight="500">백년 전</Text>
        </Div>
        </Div>
            {/* 끝 */}


        </Div>

        </Col>
              
        <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">

<Div
  shadow="4"
  border="1px solid"
  borderColor="gray200"
  rounded="lg"
  p="2rem"
  m={{ b: { xs: "2rem", md: "1rem" } }}
>
            {/* 시작 */}
            {/* <Div
        //   bgImg={cardImg}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        p={{ b: "84%" }}
        /> */}
        <Div p="1rem" d="flex" align="center" justify="space-between">
        <Div d="inline-block" align="center" >
        {/* <Div
        h="1.5rem"
        w="1.5rem"
        //   bgImg={girl2}
        bgSize="cover"
        bgPos="center"
        m={{ r: "1rem" }}
        rounded="circle"
        ></Div> */}
            <Text
            textAlign="left"
            textSize="title"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
            >
            kakao mang hera kakao mang herakakao mang herakakao mang hera
            </Text>
            <Text
            textAlign="left"
            textSize="body"
            textWeight="500"
            fontFamily="secondary"
            m={{ b: "1rem" }}
            >
            why KaKao SiBal Nom ? 
            </Text>
        </Div>

        </Div>

        <Div p="1rem" d="flex" align="center" justify="space-between">
        <Div d="inline-block" align="center">
        <Text
            textAlign="left"
            textSize="body"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "0.2rem" }}
            >
            Lee Jin Soft
        </Text>
        <Div d="flex" align="center">
            <Icon
                transition
                name= "Eye"
                color= "black"
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            4572
            </Text>
            <Icon
                transition
                onClick={() => likedchange(!liked)}
                name={liked ? "HeartSolid" : "Heart"}
                color={liked ? "danger700" : "black"}
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            121
            </Text>
            <Icon
                transition
                name= "Message"
                color= "black"
                size="18px"
                cursor="pointer"
                m={{r : "0.4rem"}}
            />
            <Text
            textAlign="left"
            textSize="body"
            textWeight="450"
            fontFamily="secondary"
            m={{r : "1rem"}}
            >
            121
            </Text>
        </Div>
        </Div>
        <Div d="flex" align="center">
        <Div
        h="1.5rem"
        w="1.5rem"
        //   bgImg={girl2}
        bgSize="cover"
        bgPos="center"
        m={{ r: "1rem" }}
        rounded="circle"
        ></Div>
        <Text textWeight="500">백년 전</Text>
        </Div>
        </Div>
            {/* 끝 */}
        {/* <Image
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
        </Text> */}

        </Div>

        </Col>
              <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                <Div
                  shadow="4"
                  border="1px solid"
                  borderColor="gray200"
                  bg="white"
                  rounded="lg"
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
                  rounded="lg"
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
                  rounded="lg"
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