import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact,Input } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import { Divider } from "@material-ui/core"

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
                            h = {{xs : "7rem" ,md : "auto"}}
                            >
                                <Text
                                textAlign="left"
                                textSize="heading"
                                textWeight="750"
                                fontFamily="secondary"
                                justify="flex-start"
                                // m={{ b: "1rem" }}
                                m={{ b: "2rem" }}
                                pos= {{xs:"absolute",md: "static"}}
                                // bottom = "32rem"
                                >
                                kakao mang hera kakao mang herakakao mangrang herakakao mangr
                                </Text>
                            </Div>
                            <Div
                            justify="space-between"
                            align="center"
                            // pos= "absolute"
                            pos =  {{xs:"static",md: "static"}}
                            // bottom = "32rem"
                           >
                                <Text
                                // textAlign="left"
                                textSize="title"
                                textWeight="400"
                                fontFamily="secondary"
                                textAlign="justify"
                                justify="flex-end"
                                // m={{ b: "1rem" }}
                                
                                >
                                맘마단 
                                </Text>    
                            </Div>   
                            <Div
                            // align=""
                            // h="19rem"
                            w="15rem"
                            justify="space-around"
                            // bg="black"
                            // rounded="md"
                            // border="1px solid"
                            // borderColor="gray200"
                            // pos= "absolute"
                            pos =  {{xs:"absolute",md: "static"}}
                            // bottom = "340px"
                            // bottom = "22rem"
                            m = "3px"
                            
                            >
                                <Div d="flex" align="center">
                                <Icon
                                    transition
                                    name= "Timestamp"
                                    color= "gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{r : "0.4rem"}}
                                />
                                <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="600"
                                fontFamily="secondary"
                                textColor = "gray"
                                m={{r : "1rem"}}
                                
                                >
                                14시간
                                </Text>
                                <Icon
                                    transition
                                    name= "Eye"
                                    color= "gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{r : "0.4rem"}}
                                />
                                <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="600"
                                fontFamily="secondary"
                                m={{r : "1rem"}}
                                textColor = "gray"
                                >
                                4572
                                </Text>

                                <Icon
                                    transition
                                    name= "Message"
                                    color= "gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{r : "0.4rem"}}
                                />
                                <Text
                                textAlign="left"
                                textSize="body"
                                textWeight="600"
                                fontFamily="secondary"
                                textColor = "gray"
                                m={{r : "1rem"}}
                                >
                                121
                                </Text>
                                {/* <Div 
                                // pos="relative"
                                // top="0"
                                // m={{l : "30rem"}}
                                m={{
                                    l: { xs: '7rem', md: '22rem' }
                                }}
                                >
                                <Icon name="Options" size="20px" />
                                </Div> */}
                            </Div>    
                            
                            </Div>
                                         
                        
                        </Div>
                        <Div
                            h= {{ xs: "22rem", md: "auto" }}
                            w = {{ xs: "25rem", md: "47rem" }}
                            // bg="black"
                            // rounded="md"
                            // border="1px solid"
                            // borderColor="gray200"
                            // m = {{
                            //     b : {xs : "2rem"}
                            // }}
                            border={{ b: "1px solid" }}
                            borderColor="gray400"
                            // p={{
                            //     b: { xs : '1rem' }
                            // }}
                            >
                                <Text
                                    // textAlign="left"
                                    textSize="title"
                                    textWeight="400"
                                    fontFamily="secondary"
                                    textAlign="justify"
                                    justify="flex-end"
                                    m={{ b: "1rem" }}
                                    p={{ t: "3rem", b : "2rem" }}
                                    w = {{xs: "auto", md: "40rem"}}
                                    textAlign="left"
                                    // border= "1px solid"
                                    // borderColor="gray400"
                                    >
                                    오늘 백화점 갔다가 폭스헤드 예뻐서 입어보고 왔는데
                                    XS은 따악 맞는 느낌이고
                                    S는 약간 낭낭해서 안에 셔츠나 티를 입고 입어도 괜찮을 거 같아서 고민이야..
                                    사이즈가 사실 나한테 애매한데 색깔이나 촉감이 넘 좋아서 하나 장만하려구 하는데
                                    다들 어떤 핏으로 샀엉 ? 블로그 하루종일 뒤져도 다 제각각이라 결정이 안서! 내일 가서 살건데ㅠㅠ
                                    
                                </Text>
                                    <Div d="flex" align="center"
                                        // border="1px solid"
                                        // borderColor="gray200"
                                        p = {{b : "20px"}}
                                        d = {{ xs : "none" ,md: "flex"}}
                                        h = "3rem"
                                    >
                                        <Icon
                                            transition
                                            name= "Heart"
                                            color= "black"
                                            size="23px"
                                            cursor="pointer"
                                            m={{r : "0.4rem"}}
                                        />
                                        <Text
                                        textAlign="left"
                                        textSize="subheader"
                                        textWeight="600"
                                        fontFamily="secondary"
                                        textColor = "black"
                                        m={{r : "1rem"}}
                                        
                                        >
                                        좋아요
                                        </Text>
                                        <Icon
                                            transition
                                            name= "Message"
                                            color= "black"
                                            size="23px"
                                            cursor="pointer"
                                            m={{r : "0.4rem"}}
                                        />
                                        <Text
                                        textAlign="left"
                                        textSize="subheader"
                                        textWeight="600"
                                        fontFamily="secondary"
                                        textColor = "black"
                                        m={{r : "1rem"}}
                                        >
                                        121
                                        </Text>
                                    </Div>
                        </Div>  
                        <Div
                        m={{t : "0.5rem"}}
                        h="10rem"
                        w="47rem"
                        // d = "flex"
                        d="inline-block" align="center"
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        >
                            <Text
                            textAlign="left"
                            textSize="subheader"
                            textWeight="600"
                            fontFamily="secondary"
                            textColor = "black"
                            
                            m={{r : "1rem"}}
                            >
                                댓글 21
                            </Text>
                            <Input
                                placeholder="User Name"
                                p={{ x: "2.5rem" }}
                                m={{t : "0.5rem"}}
                                h = "5rem"
                                w = {{xs : "25rem", md : "500rem"}}
                                prefix={
                                    <Icon
                                    name="Camera"
                                    color="warning800"
                                    size="16px"
                                    cursor="pointer"
                                    pos="absolute"
                                    top="50%"
                                    left="0.75rem"
                                    transform="translateY(-50%)"
                                    />
                                }
                                />
                                {/* 댓글부분시작 */}
                               <Div
                                p={{ x: "2.5rem", t :"0.7rem"}}
                                m={{ t : "0.5rem"}}
                                h = "7rem"
                                w = {{xs : "25rem", md : "auto"}}
                                border= {{t : "1px solid", b :"1px solid"}}
                                borderColor="gray400"
                                d = "flex"
                                
                                >
                                    <Div
                                    // p={{ x: "2.5rem", t :"1rem"}}
                                    // m={{ t : "0.5rem"}}
                                    // h = "7rem"
                                    w = {{xs : "25rem", md : "auto"}}
                                    d = "inline-block"
                                    >
                                        <Div
                                            textWeight="300"
                                            textColor = "gray"
                                            >
                                            <Text>
                                            이진강
                                            </Text>
                                        </Div>
                                        <Div
                                        m={{ t : "0.3rem"}}
                                            >
                                            <Text
                                            textWeight="600"
                                            textSize="subheader"
                                            >
                                            css의 지옥
                                            </Text>
                                        </Div>

                                        <Div d="flex" align="center"
                                        m={{t : "0.4rem"}}
                                        >
                                            <Icon
                                                transition
                                                name= "Timestamp"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            textColor = "gray"
                                            m={{r : "1rem"}}
                                            
                                            >
                                            14시간
                                            </Text>
                                            <Icon
                                                transition
                                                name= "Heart"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            m={{r : "1rem"}}
                                            textColor = "gray"
                                            >
                                            3
                                            </Text>
                                            <Icon
                                                transition
                                                name= "Message"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            textColor = "gray"
                                            m={{r : "1rem"}}
                                            >
                                            1
                                            </Text>
                                            <Div 
                                            // pos="relative"
                                            // top="0"
                                            // m={{l : "30rem"}}
                                            m={{
                                                l: { xs: '7rem', md: '30rem' }
                                            }}
                                            >
                                            <Icon name="Options" size="20px" />
                                            </Div>

                                        </Div>    
                                    </Div>
                                </Div>
                                <Div
                                p={{ x: "3.3rem", t :"0.7rem" }}
                                bg = "gray200"
                                // m={{t : "0.5rem"}}
                                h = "7rem"
                                w = {{xs : "25rem", md : "auto"}}
                                border= {{t : "1px solid", b :"1px solid"}}
                                borderColor="gray400"
                                >
                                    <Div
                                    // p={{ x: "2.5rem", t :"1rem"}}
                                    // m={{ t : "0.5rem"}}
                                    // h = "7rem"
                                    w = {{xs : "20rem", md : "43rem"}}
                                    d = "inline-block"
                                    >
                                        <Div
                                            textWeight="300"
                                            textColor = "gray"
                                            >
                                            <Text>
                                            이진소프트
                                            </Text>
                                        </Div>
                                        <Div
                                        m={{ t : "0.3rem"}}
                                            >
                                            <Text
                                            textWeight="600"
                                            textSize="subheader"
                                            >
                                            카카오의 지옥
                                            </Text>
                                        </Div>

                                        <Div d="flex" align="center"
                                        m={{t : "0.4rem"}}
                                        >
                                            <Icon
                                                transition
                                                name= "Timestamp"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            textColor = "gray"
                                            m={{r : "1rem"}}
                                            
                                            >
                                            오천만년전
                                            </Text>
                                            <Icon
                                                transition
                                                name= "Heart"
                                                color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{r : "0.4rem"}}
                                            />
                                            <Text
                                            textAlign="left"
                                            textSize="Typography"
                                            textWeight="600"
                                            fontFamily="secondary"
                                            m={{r : "1rem"}}
                                            textColor = "gray"
                                            >
                                            18
                                            </Text>
                                            <Div 
                                            // pos="relative"
                                            // top="0"
                                            // m={{l : "30rem"}}
                                            m={{
                                                l: { xs: '7rem', md: '30rem' }
                                            }}
                                            >
                                            <Icon name="Options" size="20px" />
                                            </Div>
                                        </Div>    
                                    </Div>

                                </Div>
                                <Div
                                p={{ x: "2.5rem" }}
                                // m={{t : "0.5rem"}}
                                h = "7rem"
                                w = {{xs : "25rem", md : "auto"}}
                                border= {{t : "1px solid", b :"1px solid"}}
                                borderColor="gray400"
                                >
                                    이런 ㅜ..
                                </Div>
                                <Div
                                bg = "gray200"
                                p={{ x: "2.5rem" }}
                                // m={{t : "0.5rem"}}
                                h = "7rem"
                                w = {{xs : "25rem", md : "auto"}}
                                border= {{t : "1px solid", b :"1px solid"}}
                                borderColor="gray400"
                                >
                                    후아..
                                </Div>
                                {/* 댓글 끝 */}
                        </Div>
                
                
                
                
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