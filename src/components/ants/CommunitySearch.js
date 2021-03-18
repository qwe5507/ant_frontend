import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact,Tag } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import NewsApiService from "../../api/NewsApi";
import axios from 'axios';

import CommunityShimmer from "./CommunityShimmer";
import LoginRequireModal from './LoginRequireModal';

import ReactHtmlParser from 'react-html-parser';

import { setSavedBoards } from '../../redux/actions/user_action';
import "./CommunityMain.css";

function CommunitySearch(props) {
  let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);
  let [selectedSwitchValue, selectedSwitchValueChange] = useState(false);
  let [liked, likedchange] = useState(false);
  let [savedboard, savedboardChange] = useState();

  let [showLoginRequireModal,showLoginRequireModal변경] = useState(false);

  const savedboardtemp = useSelector(state => state.user.savedBoards);

  // let [saved,savedchange] = useState(false);
  let { searchkeyword } = useParams();

  let [boardlist, boardlist변경] = useState();

  function searchboard() {
    NewsApiService.searchboardmatchpharse(searchkeyword)
        .then(response => {
            boardlist변경(response.data.hits.hits)
        })
        .catch(error => {
            console.log(error);
        });
  
  }
  useEffect(() => {
    console.log(searchkeyword)
    console.log("욕하지말자 진현아")
    searchboard(searchkeyword);

  },[searchkeyword]);
  useEffect(() => {
    savedboardChange(savedboardtemp);
    // console.log('22')
    // console.log(props.saved);
  });
  return (
    <>
      <Div pos="relative"
        m={{ t: { md: "5%" }, l: { md: "-80%" } }}
        w={{ xs: "100%", md: "250%" }}>

      
          <Row>
            {/* 커뮤니티 목록 뜨기 전 로딩 loading shimmer */}
            {/* {boardlist  ?
              null
              :
              loadingtemp2.map(function () {
                return (
                  <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                    <Div
                      shadow="2"
                      border="1px solid"
                      borderColor="gray200"
                      rounded="lg"
                      p="2rem"
                      m={{ b: { xs: "2rem", md: "1rem" } }}
                      h="20rem"
                    >
                      <CommunityShimmer />
                    </Div>
                  </Col>
                )
              }
              )
          } */}
              
          </Row>
          <Row>
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
            h = "3rem">
              <Text
            textSize="title"
            textWeight="800"
            fontFamily="ko">
              {"'"+searchkeyword + "' 로 검색한 내용입니다. "}
              </Text>
            </Div>
            </Col>
          </Row>
              <Row>
              
              {
                boardlist && boardlist.map(function (data,i) {
                  var nowtime = new Date()
                  var boardtime = new Date(data['_source']['board_createdata'])
                  var elapsedtime = nowtime.getTime() - boardtime.getTime()
                  let elapsedMin = elapsedtime / 1000 / 60; // 150.0666...
                  let elapsedHour = elapsedtime / 1000 / 60 / 60; // 2.501111...
                  let elapsedDay = elapsedtime / 1000 / 60 / 60 / 24;
                  var resulttime;
                  if (elapsedMin < 10) {
                    resulttime = "now"
                  } else if (elapsedMin >= 10 && elapsedMin < 60) {
                    resulttime = String(Math.floor(elapsedMin)) + "분"
                  } else if (elapsedMin >= 60 && elapsedHour < 24) {
                    resulttime = String(Math.floor(elapsedHour)) + "시간"
                  } else if (elapsedHour >= 24 && elapsedHour < 48) {
                    resulttime = "어제"
                  } else if (elapsedHour >= 48 && elapsedDay < 30) {
                    resulttime = String(Math.floor(elapsedDay)) + "일"
                  } else if (elapsedDay >= 30) {
                    resulttime = String(boardtime.getMonth() + 1) + "." + String(boardtime.getDate())
                  }

                  return (
                    <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                      <Div
                        shadow="2"
                        border="1px solid"
                        borderColor="gray200"
                        rounded="lg"
                        p="2rem"
                        m={{ b: { xs: "2rem", md: "1rem" } }}
                        h="20rem"
                      >
                        <Div p="1rem" d="flex" align="center" justify="space-between">
                          <Div d="inline-block" align="center" justify="space-between"
                            overflow="hidden" >

                            <Div d="flex"
                              justify="space-between"
                            // maxW = "100%"
                            // w = "100re"
                            >
                              <Link to={"/Community/" + data['_source']['board_id']}
                                style={{ color: '#000' }}
                                textDecor="none"
                              >
                                
                                <Text
                                  justify="flex-start"
                                  textAlign="left"
                                  textSize="title"
                                  textWeight="1000"
                                  fontFamily="ko"
                                  m={{ b: "1rem" }}
                                // textDecor="underline"
                                >

                                  {data['_source']['board_title']} 
                                </Text>
                              </Link>
                              
                              <Div
                                pos={{ xs: 'absolute', sm: 'absolute', md: 'static' }}
                                right="2rem">
                                <Icon name="Bookmark" size="20px"
                                  // cursor="pointer"
                                  // onClick={loginid ?() => savedClick(savedboard.includes(String(data['board_id'])), data):() =>  {showLoginRequireModal변경(true)}}
                                  color={savedboard.includes(String(data['_source']['board_id'])) ? "danger700" : "black"}
                                />
                              </Div>
                            </Div>

                            <Link to={"/Community/" + data['_source']['board_id']} style={{ color: '#000' }}>
                              <Div d="flex" justify="space-between">
                                <Text
                                  textAlign="left"
                                  textSize="subheader"
                                  textWeight="600"
                                  fontFamily="ko"
                                  h="5rem"
                                  m={{ b: "1rem" }}
                                >
                                  <div className="boardcon">
                                  {ReactHtmlParser(data['_source']['board_content'])}
                                  </div>
                                </Text>
                                <Div
                                  // m={{t :{ md : "5%"}, l :{ md : "-80%"}}}
                                  // pos = {{ xs : "absolute"}}
                                  // pos={{ xs: 'static', lg: 'static' }}
                                  pos={{ xs: 'absolute', sm: 'absolute', md: 'static' }}
                                  right="2rem"
                                >
                                  <div
                                  className="boardconimg">
                                  {ReactHtmlParser(data['_source']['board_content'].indexOf("<img") == -1 ? '<div class="boardconimg"></div>' : data['_source']['board_content'].substring(data['_source']['board_content'].indexOf("<img"), data['_source']['board_content'].indexOf('">') + 2))}
                                  </div>
                                </Div>
                              </Div>
                            </Link>
                          </Div>

                        </Div>

                        <Div p="1rem" d="flex" align="center" justify="space-between">
                          <Div d="inline-block" align="center">
                            <Text
                              textAlign="left"
                              textSize="subheader"
                              textWeight="800"
                              fontFamily="ko"
                              m={{ b: "0.2rem" }}
                            >
                              {data['_source']['nickname']}
                            </Text>
                            {/* <Div d="flex" align="center">
                              <Icon
                                transition
                                name="Eye"
                                color="black"
                                size="18px"
                                // cursor="pointer"
                                m={{ r: "0.4rem" }}
                              />
                              <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="450"
                                fontFamily="ko"
                                m={{ r: "1rem" }}
                              >
                                {data['_source']['board_viewnum']}
                              </Text>
                              <Icon
                                transition
                                // onClick={() => likedchange(!liked)}
                                name={userlikedboardtemp.includes(String(data['_source']['board_id'])) ? "HeartSolid" : "Heart"}
                                // name="Heart"
                                color={userlikedboardtemp.includes(String(data['_source']['board_id']))  ? "danger700" : "black"}
                                // color="black"
                                size="18px"
                                // cursor="pointer"
                                m={{ r: "0.4rem" }}
                              />
                              <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="450"
                                fontFamily="ko"
                                m={{ r: "1rem" }}
                              >
                                {data['_source']['board_likenum']}
                              </Text>
                              <Icon
                                transition
                                name="Message"
                                color="black"
                                size="18px"
                                // cursor="pointer"
                                m={{ r: "0.4rem" }}
                              />
                              <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="450"
                                fontFamily="ko"
                                m={{ r: "1rem" }}
                              >
                                {data['_source']['board_count'] == null ?  0 :data['_source']['board_count'] }
                              </Text>
                            </Div> */}
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
                            <Text textWeight="650"
                              textSize="subheader"
                              fontFamily="ko">
                              {resulttime}
                            </Text>
                          </Div>
                        </Div>
                        {/* 끝 */}
                      </Div>
                    </Col>
                  )
                })
          }
        </Row>
        <LoginRequireModal
            isOpen={showLoginRequireModal}
            onClose={() => showLoginRequireModal변경(false)}>

          </LoginRequireModal>
      </Div>

    </>
  )
}

export default CommunitySearch;