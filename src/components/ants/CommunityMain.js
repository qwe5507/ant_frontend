import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import BoardApiService from "../../API/BoardApi";

function CommunityMain() {
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
                    Why use Atomize React?Why use Atomize React?ㄴㄴ
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
        
    </>
  )
}


export default CommunityMain;