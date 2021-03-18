import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Modal, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, Input, logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import CommunityBoard from './CommunityBoard';
import CommunityMain from './CommunityMain';
import CommunityMainSaved from './CommunityMainSaved';
import CommunitySearch from './CommunitySearch';

import CommunityRegister from './CommunityRegister';
import CommunityBoardUpdate from './CommunityBoardUpdate';
import { useDispatch, useSelector } from 'react-redux';
import LoginRequireModal from './LoginRequireModal';

function Community() {
  let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);
  let [selectedSwitchValue, selectedSwitchValueChange] = useState(false);
  let [liked, likedchange] = useState(false);
  let [saveBoardstate, saveBoardstateChange] = useState(false);
  let [showLoginRequireModal, showLoginRequireModal변경] = useState(false);

  let [search, searchChange] = useState("");

  let history = useHistory();
  const loginid = useSelector(state => state.user.userid);

  let { boardid } = useParams();
  let { updateboardid } = useParams();
  let { searchkeyword } = useParams();


  function toggleHeaderMenu(value) {
    showMobileHeaderMenuChange(value);

    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400);
  };
  function saveBoardChangeClick(data) {
    saveBoardstateChange(data);
  }

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClick();
    }
  }

  const onClick = () => {
    history.push("/Community/search/" + search)
  };

  function searchboardmatchpharse() {
    axios.get("http://localhost:8000/news/searchboardmatchpharse", { params: { id: search } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

  }
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('event', 'page_view', { 'page_path': window.location.pathname + window.location.hash });

  }, []);
  return (
    <>
      <Div>
        <Div
          tag="section"
          pos={{ xs: 'relative', md: 'relative' }}
          top="0"
          transition
          left={{ xs: "0%", md: "10%" }}
          right="0"
          zIndex="1"
          w={{ xs: "100vw",sm:"100vw", md: "80vw" }}
          align="space-between"
          p={{ t: { xs: "1.4rem",sm:"1rem", md: "1rem" }}}
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
          <Container w={{ xs: "100%", sm: "100%", md: "30.5rem" }} d="static" align="center" justify="center" >

            {/* Icon For Mobile */}
            {/* 모바일일때 생기는탭 */}
            {/* <Div
            d={{ xs: "flex", md: "none" }}
            flexDir="column"
            cursor="pointer"
            // onClick={() => toggleHeaderMenu(!showMobileHeaderMenu)}
            m={{ t: "6rem" }}
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
          </Div> */}

            <Label
              d={{ xs: "flex", md: "none" }}
              m={{ l: "85%", t: "-1rem" }}
              onClick={() =>
                selectedSwitchValueChange(!selectedSwitchValue)
              }
              align="center"
              textWeight="600"
            >
              {boardid == "registe" || (typeof updateboardid != "undefined") ?
                null
                :
                <Switch
                  checked={selectedSwitchValue}
                  inactiveColor="black100"
                  activeColor="black900"
                  activeShadow="5"
                />}
              {boardid == "registe" || (typeof updateboardid != "undefined") ?
                null
                : selectedSwitchValue ? <Text>추천순</Text> : <Text>최신순</Text>}
            </Label>

            {/* Links for Desktop */}
            <Div
              d="flex"
              bg={{ xs: "white", md: "transparent" }}
              align={{ xs: "strech", md: "flex-start" }}
              flexDir={{ xs: "column", md: "row" }}
              pos={{ xs: "relative", md: "relative" }}
              w="1100px"
              justify="space-between"
              p={{
                t: { xs: "4rem", md: "0" },
                b: { xs: "2rem", md: "5%" },
                x: { xs: "0rem", md: "0" },
              }}
              w={{ xs: "100%", md: "1100px" }}
              h={{ xs: "8rem", md: "auto" }}

              //마진
              m={{
                l: { xs: '0%', md: '-80%' },
                t: { xs: '0%', md: '20%' }
              }}
              shadow={{ xs: "2", md: "2" }}
              transition
              border={{ b: "1px solid" }}
              borderColor="gray400"
            >
              <Div
                d="flex"
                justify="space-between"
              >
                <Div d="flex">
                  <Link to="/Community">
                    <Anchor
                      textWeight="800"
                      textColor="medium"
                      hoverTextColor="black"
                      transition
                    >
                      <Text
                        textSize={{xs: "subheader", md: "title"}}
                        onClick={() => saveBoardChangeClick(false)}
                        m={{ b: "0.25rem", r: "1rem", l: "1rem" }}
                        w = {{  xs: "2rem",sm:"3rem", md: "5rem" }}
                        textWeight="1000"
                        textAlign="center"
                        fontFamily="ko"
                      >
                        전체
                      </Text>
                    </Anchor>
                  </Link>

                  {/* <Link to="/Community">
                    <Anchor
                      target="_blank"
                      textWeight="800"
                      textColor="medium"
                      hoverTextColor="black"
                      transition
                    // fontFamily="ko"
                    >
                      <Text
                        textSize="title"
                        textWeight="1000"
                        textAlign="center"
                        m={{ b: "0.25rem", r: "2.5rem" }}
                      >
                        팔로워
                      </Text>
                    </Anchor>
                  </Link> */}
                  <Link to="/Community/saved">
                    <Anchor
                      target="_blank"
                      textWeight="1000"
                      textColor="medium"
                      hoverTextColor="black"
                    >
                      {loginid ?
                        <Text
                          onClick={() => saveBoardChangeClick(true)}
                          textSize={{xs: "subheader", md: "title"}}
                          m={{ b: "0.25rem" }}
                          textWeight="1200"
                          textAlign="center"
                          fontFamily="ko"
                          w = {{  xs: "6rem",sm:"6rem", md: "6rem" }}
                        >
                          저장한 글
                    </Text>
                        :
                        null
                      }
                    </Anchor>
                  </Link>
                </Div>
                {/* 추가한 부분 */}
                <Div d={{ xs: "flex", md: "none" }}
                m={{ b: "0.5rem" }}
                p={{ t : "-2rem",b: "0.5rem" }}
                
                >
                
                  <Div
                  p = {{ l : "0.5rem"}}d = "flex">
                  <Label
                    m={{ l: "0rem", r: "1rem" }}
                    onClick={() =>
                      selectedSwitchValueChange(!selectedSwitchValue)
                    }
                    align="center"
                    textWeight="700"
                    fontFamily="ko"
                  >
                    {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) || saveBoardstate || (typeof updateboardid != "undefined") ?
                      null :
                      <Switch
                        checked={selectedSwitchValue}
                        inactiveColor="black100"
                        activeColor="black900"
                        activeShadow="5"
                        fontFamily="ko"
                      />}
                    {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) || saveBoardstate || (typeof updateboardid != "undefined") ?
                      null :
                      selectedSwitchValue ?
                        <Text fontFamily="ko">추천순</Text> : <Text fontFamily="ko">최신순</Text>}
                  </Label>
                  </Div>
                  {boardid == "registe" || (typeof updateboardid != "undefined") ?
                    null
                    :
                    <Anchor
                      target="_blank"
                      textWeight="800"
                      textColor="medium"
                      hoverTextColor="black"
                    >

                      <Button
                        prefix={
                          <Icon
                            name="Edit"
                            size="22px"
                            color="white"
                            m={{ r: "0.5rem" }}
                          />
                        }
                        textWeight="900"
                        textSize="subheader"
                        bg="black"
                        hoverBg="black400"
                        rounded="md"
                        fontFamily="ko"
                        m={{ r: "0.5rem" ,b : "0.5rem"}}
                        w = {{  xs: "8rem",sm:"8rem", md: "6rem" }}
                        h = "3rem"
                        shadow="3"
                        hoverShadow="4"
                        onClick={loginid ? () => { history.push("/Community/registe") } : () => { showLoginRequireModal변경(true) }}
                      >
                        글 작성
                    </Button>
                    </Anchor>
                  }
                </Div>
              </Div>
              <Div>
                <Input
                  placeholder="관심있는 내용을 검색해보세요."
                  w={{ xs: "12rem", md: "22rem" }}
                  h={{ xs: "3rem", md: "3rem" }}
                  onChange={(e) => { searchChange(e.target.value) }}
                  onKeyPress={onKeyPress}
                  pos="relative"
                  textSize="title"
                  d={{ xs: "none", md: "flex" }}
                  textWeight="500"
                  fontFamily="ko"
                  textColor="medium"
                  border="2px solid"
                  foucsBorderColor="black800"
                  focusTextColor="black800"
                  suffix={
                    <Icon
                      name="Search"
                      size="20px"
                      cursor="pointer"
                      pos="absolute"
                      top="50%"
                      right="1rem"
                      transform="translateY(-50%)"
                      onClick={onClick}
                    />
                  }
                />
              </Div>
              <Div d={{ xs: "none", md: "flex" }} 
              p = {{t : "0.3rem"}}
              w = "25rem"
              justify="space-between"
              >

                <Label
                  m={{ l: "5rem", r: "2rem" ,t : "0.7rem"}}
                  onClick={() =>
                    selectedSwitchValueChange(!selectedSwitchValue)
                  }
                  align="center"
                  textWeight="600"
                >
                  {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) || saveBoardstate || (typeof updateboardid != "undefined") ?
                    null :
                    <Switch
                      checked={selectedSwitchValue}
                      inactiveColor="black100"
                      activeColor="black900"
                      activeShadow="5"
                      fontFamily="ko"
                    />}
                  {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) || saveBoardstate || (typeof updateboardid != "undefined") ?
                    null :
                    selectedSwitchValue ?
                      <Text  fontFamily="ko">추천순</Text> : <Text  fontFamily="ko">최신순</Text>}
                </Label>
                {boardid == "registe" || (typeof updateboardid != "undefined") ?
                  null
                  :
                  <Anchor
                    target="_blank"
                    textWeight="800"
                    textColor="medium"
                    hoverTextColor="black"
                  >

                    <Button
                      prefix={
                        <Icon
                          name="Edit"
                          size="22px"
                          color="white"
                          m={{ r: "0.5rem" }}
                        />
                      }
                      textWeight="1000"
                      textSize="title"
                      fontFamily="ko"
                      bg="black"
                      hoverBg="black400"
                      rounded="md"
                      m={{ r: "1rem" }}
                      p={{ r: "1.5rem", l: "1rem" }}
                      w = "10rem"
                      h = "3rem"
                      shadow="3"
                      hoverShadow="4"
                      onClick={loginid ? () => { history.push("/Community/registe") } : () => { showLoginRequireModal변경(true) }}
                    >
                      글 작성
                    </Button>
                  </Anchor>
                }

              </Div>
            </Div>
            {/* 게시판시작부분 */}

            {((typeof boardid != "undefined") && (typeof boardid.valueOf() == "string")) && (boardid.length > 0) && boardid != "search" ?
              boardid == "saved" ? <CommunityMain ordered={selectedSwitchValue} saved={true}></CommunityMain> : boardid == "registe" ?
                <CommunityRegister></CommunityRegister> : <CommunityBoard></CommunityBoard> : ((typeof updateboardid != "undefined") && (typeof updateboardid.valueOf() == "string")) && (updateboardid.length > 0) ?
                <CommunityBoardUpdate></CommunityBoardUpdate> : searchkeyword ? <CommunitySearch></CommunitySearch> : <CommunityMain ordered={selectedSwitchValue} saved={saveBoardstate}></CommunityMain>

            }

            {/* 게시판끝부분 */}

          </Container>
          <LoginRequireModal
            isOpen={showLoginRequireModal}
            onClose={() => showLoginRequireModal변경(false)}>

          </LoginRequireModal>
        </Div>
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