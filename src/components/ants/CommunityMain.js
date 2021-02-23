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
  let [boardlist ,boardlist변경] = useState([{board_content : ""}]); 

  function toggleHeaderMenu(value) {
    showMobileHeaderMenuChange(value);
    
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400);
  };

  useEffect(() => {
    // boardListGet();
    BoardApiService.fetchBoards()
    .then(res => {
      boardlist변경(res.data);
      // console.log('asdasdadadads');
    })
    .catch(err => {
      console.log('***** Community fetchBoards error:', err);
    }); 

  },[]);

    return (
<>
<Div pos = "relative" 
         m={{t :{ md : "5%"}, l :{ md : "-80%"}}}
         w = {{xs: "100%", md : "250%"}}>
             
            <Row>
           {
            boardlist.map(function(data){
              return(
                        <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                        <Div
                          shadow="4"
                          border="1px solid"
                          borderColor="gray200"
                          rounded="lg"
                          p="2rem"
                          m={{ b: { xs: "2rem", md: "1rem" } }}
                        >
                        <Div p="1rem" d="flex" align="center" justify="space-between">
                          <Div d="inline-block" align="center" >

                            <Text
                            textAlign="left"
                            textSize="title"
                            textWeight="500"
                            fontFamily="secondary"
                            m={{ b: "1rem" }}
                            >
                            {data['board_title']}
                            </Text>
                            <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="500"
                            fontFamily="secondary"
                            m={{ b: "1rem" }}
                            >
                          {data['board_content'].length > 77 ? data['board_content'].substring(0,70)+"..." :data['board_content'] }
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
                            {data['userid']}
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
                          <Text textWeight="500">
                            {}
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
          </Div>
        
    </>
  )
}

export default CommunityMain;