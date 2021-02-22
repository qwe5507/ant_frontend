import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function CommunityBoard() {
 let [liked,likedchange] = useState(false);

    return (
<>
    <Div  
         m={{t :{ md : "5%"}, l :{ md : "-78%"}}}
         w = {{xs: "90vw", md : "248%"}}
          align="center" justify="space-between"
         d={{ xs: "flex", md: "flex" }}
         >
               <Div
                //   shadow="4"
                //   border="1px solid"
                //   borderColor="gray200"
                  bg="white"
                //   rounded="lg"
                  d="inline-block" align="center"
                >
                        <Div
                        // h="10rem"
                        h = {{ xs: "11rem", md: "11rem" }}
                        w = {{ xs: "25rem", md: "47rem" }}
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        border={{ b: "1px solid" }}
                        borderColor="gray400"
                        pos = "flex"
                        d={{ xs: "inline-block", md: "inline-block" }}
                        
                        >   
                            <Div
                            align="flex-start"
                            // pos= "absolute"
                            // bottom = "35rem"
                            >
                                <Text
                                textAlign="left"
                                textSize="title"
                                textWeight="750"
                                fontFamily="secondary"
                                justify="flex-start"
                                // m={{ b: "1rem" }}
                                m={{ b: "2rem" }}
                                pos= {{xs:"absolute",md: "static"}}
                                bottom = "32rem"
                                >
                                kakao mang hera kakao mang herakakao mangra kakao mang herakakao mangra kakao mang herakakao mang
                                </Text>
                            </Div>
                            <Div
                            justify="space-between"
                            align="center"
                            pos= "absolute"
                            bottom = "32rem"
                           >
                                <Text
                                // textAlign="left"
                                textSize="title"
                                textWeight="400"
                                fontFamily="secondary"
                                textAlign="justify"
                                justify="flex-end"
                                m={{ b: "1rem" }}
                                
                                >
                                맘마단 
                                </Text>    
                            </Div>   
                            <Div
                            align=""
                            h="10rem"
                            w="10rem"
                            justify="space-around"
                            // bg="black"
                            // rounded="md"
                            // border="1px solid"
                            // borderColor="gray200"
                            pos= "absolute"
                            // bottom = "340px"
                            bottom = "22rem"
                            >
                                <Div d="flex" align="center">
                                <Icon
                                    transition
                                    name= "Timestamp"
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
                                         
                        
                        </Div>
                      <Div
                        h="20rem"
                        w = {{ xs: "25rem", md: "47rem" }}
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        border={{ b: "1px solid" }}

                        borderColor="gray400"
                        >내용</Div>
                        <Div
                        h="10rem"
                        w="10rem"
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        >댓글</Div>
                
                
                
                
                </Div>

                <Div
                //   shadow="4"
                //   border="1px solid"
                //   borderColor="gray200"
                  bg="white"
                //   rounded="lg"
                  d="inline-block" align="center"
                >
                    <Div
                        shadow="4"
                        h="25rem"
                        w="20rem"
                        border="1px solid"
                        borderColor="gray400"
                        d={{ xs: "none", md: "flex" }}
                        bg="white"
                        rounded="lg"
                       
                        >추천글</Div>
                    {/* <Div
                        shadow="4"
                        h="25rem"
                        w="20rem"
                        border="1px solid"
                        borderColor="gray200"
                        d={{ xs: "none", md: "flex" }}
                        bg="white"
                        rounded="lg"
                        >추천 컨텐츠</Div> */}
                </Div>
            {/* <Row>
              <Col size={{ xs: 12, md: 9 }} pos="relative"
                border="1px solid"
                d= "flex"
                borderColor="gray200">
                    asdasd
                </Col>
            <Col size={{ xs: "none", md: 3}} pos="relative"
               d={{ xs: "none", md: "flex" }}
               h="3rem"
            
                border="1px solid"
                borderColor="gray200">
                    asdasd
            </Col>
            </Row> */}


      </Div>
    </>
  )
}


export default CommunityBoard;