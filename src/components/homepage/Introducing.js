import React, { useState, useEffect } from "react"
import { Div, Text, Row, Col, Container, Tag, Icon } from "atomize"
import { Link } from 'react-router-dom';

import BoardApiService from "../../api/BoardApi";
import "../ants/CommunityIntroducing.css";
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';

function Intoducing() {

  let [board, boardChange] = useState([]);
  const userlikedboardtemp = useSelector(state => state.user.likedBaords);

  useEffect(() => {
    BoardApiService.fetchBoardsLiked()
      .then(res => {
        boardChange(res.data.slice(0, 4));
      })
      .catch(err => {
        console.log('[ Introducing.js ] fetchBoardsLiked Error:', err);
      });
  }, []);

  return (
    <Div tag="section" id="features" p={{ t: "4rem" }} >
      <Container>
        <Tag
          bg="black"
          textColor="white"
          h="2rem"
          p={{ x: "1rem" }}
          rounded="circle"
          m={{ b: "2rem" }}
          fontFamily="ko"
          textSize="subheader"
          textWeight="800"
        >
          커뮤니티
          </Tag>
        <Text
          textSize="display1"
          textWeight="800"
          fontFamily="ko"
          m={{ b: "1rem" }}
        >
          오늘의 추천 글
          </Text>
        <Text
          textSize="subheader"
          textColor="medium"
          maxW="50rem"
          m={{ b: "3rem" }}
        >
          지난 하루 동안 가장 많은 추천을 받은 글입니다. 다른 투자자의 노하우를 참고해보세요.
          </Text>
        <Div
          p={{ b: "6rem" }}
          border={{ b: "1px solid" }}
          borderColor="gray300"
        >
          <Row>
            {board.map((data) => (
              <Col size={{ xs: 12, sm: 6, lg: 3 }}>
                <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                  <Div
                    border="1px solid"
                    borderColor="gray200"
                    h="100%"
                    d="flex"
                    flexDir="column"
                    p="2rem"
                    shadow="3"
                    rounded="xl"
                    
                  >
                    <Link to={"/Community/" + data['board_id']} style={{ color: '#000' }}>
                      <Div flexGrow="1"  flexWrap="wrap" overflow = "hidden">
                        <Text
                          textSize="heading"
                          textWeight="800"
                          fontFamily="ko"
                          m={{ b: "1rem" }}
                          // maxH = "2rem"
                          h = "2.2rem"
                          overflow="hidden"
                        >
                          {data['board_title']}
                         
                        </Text>
                        <Text
                          h="8.5rem"
                          textSize="heading"
                          textWeight="600"
                          fontFamily="ko"
                          m={{ b: "2rem" }}
                          
                        >
                          {/* {data['board_content'].length > 77 ? data['board_content'].substring(0, 70) + "..." : data['board_content']} */}
                          {/* <div
                                    className="boardcon"
                                    // style={{ width: "100%", height: "100%" }}
                                    // dangerouslySetInnerHTML={{ __html: (data['board_content'].length > 77 ? data['board_content'].substring(0,70)+"..." :data['board_content'] ) }}>
                                    dangerouslySetInnerHTML={{ __html: data['board_content'] }} >
                            </div> */}
                            <div className = "introduceimg">
                            {ReactHtmlParser(data['board_content'])}
                            </div>
                        </Text>
                      </Div>

                      {/* 메인화면 오늘의 추천 글 아래 조회 / 좋아요 / 댓글 수 표시 */}
                      <Div 
                       m = {{t : "2rem"}}
                        d="flex" align="center" justify="space-between">
                        <Div d="inline-block" align="center">
                          <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="900"
                            fontFamily="ko"
                            m={{ b: "0.2rem" }}
                          >
                            {data['nickname']}
                          </Text>
                          <Div d="flex" align="center">
                            <Icon
                              transition
                              name="Eye"
                              color="black"
                              size="18px"
                              m={{ r: "0.4rem" }}
                            />
                            <Text
                              textAlign="left"
                              textSize="body"
                              textWeight="450"
                              fontFamily="secondary"
                              m={{ r: "1rem" }}
                            >
                              {data['board_viewnum']}
                            </Text>
                            <Icon
                              transition
                              name={userlikedboardtemp.includes(String(data['board_id'])) ? "HeartSolid" : "Heart"}
                              color={userlikedboardtemp.includes(String(data['board_id']))  ? "danger700" : "black"}
                              size="18px"
                              m={{ r: "0.4rem" }}
                            />
                            <Text
                              textAlign="left"
                              textSize="body"
                              textWeight="450"
                              fontFamily="secondary"
                              m={{ r: "1rem" }}
                            >
                              {data['board_LikeNum']}
                            </Text>
                            <Icon
                              transition
                              name="Message"
                              color="black"
                              size="18px"
                              m={{ r: "0.4rem" }}
                            />
                            <Text
                              textAlign="left"
                              textSize="body"
                              textWeight="450"
                              fontFamily="secondary"
                              m={{ r: "1rem" }}
                            >
                               {data['board_count']}
                            </Text>
                          </Div>
                        </Div>
                      </Div>

                    </Link>
                  </Div>

                </Div>
              </Col>
            ))}
          </Row>
        </Div>
      </Container>
    </Div >
  )
}

export default Intoducing
