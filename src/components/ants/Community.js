import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';

import CommunityBoard from './CommunityBoard';
import CommunityMain from './CommunityMain';
import CommunityMainLiked from './CommunityMainLiked';

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
            
            <Link to="/Community">
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

            <Link to="/Community">
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
            <Link to="/Community">
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

            {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) ?
            null :
            <Switch
                checked={selectedSwitchValue}
                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />}
            {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) ?
            null :
            selectedSwitchValue ? 
            <Text>추천순</Text> : <Text>최신순</Text>}
            </Label>

          </Div>

         {/* 게시판시작부분 */}
         {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) ?
         <CommunityBoard></CommunityBoard>: selectedSwitchValue ? 
         <CommunityMainLiked></CommunityMainLiked> : <CommunityMain></CommunityMain> }
         
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