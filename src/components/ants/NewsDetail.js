import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Input, Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import axios from "axios";


function NewsDetail(props){

    let { searchName } = useParams();

    function searchmatchparse(){
      axios.get("http://localhost:8000/news/searchmatchparse", { params : { id : searchName }})
      .then(response =>{
        console.log(response.data);
      })
      .catch(error=>{
        console.log(error);
      });
    }

    searchmatchparse();

    console.log("detail"+searchName);
    return (
      <div>


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
 
            m={{ t: "5rem"}}
          >
            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="md"
            ></Div>
            <Div
              h="2px"
              w="1rem"
              bg="black"
              rounded="lg"
            ></Div>
          </Div>

          <Label
             d={{ xs: "flex", md: "none" }}
             m={{ l: "85%" ,t : "-1rem" }}

            align="center"
            textWeight="600"
            >
            <Switch

                inactiveColor="success400"
                activeColor="success700"
                activeShadow="5"
            />
          
            </Label>

          {/* Links for Desktop */}
          <Div
            d="flex"

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

              md: "1",
            }}
            transform={{
         
              md: "none"
            }}
            transition
            border={{ b: "1px solid" }}
            borderColor="black"
          >
            
            <Link to="/NewsDetail/핫이슈">
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
                        핫이슈
                    </Text>
              </Anchor>
            </Link>

            <Link to="/NewsDetail/정치">
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
                        정치
                    </Text>
              </Anchor>
            </Link>

            
            <Link to="/NewsDetail/경제">
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
                        경제
                    </Text>
              </Anchor>
            </Link>
         
            <Link to="/NewsDetail/IT과학">
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
                        IT과학
                    </Text>
              </Anchor>
            </Link>


            <Link to="/NewsDetail/금융">
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
                        금융
                    </Text>
              </Anchor>
            </Link>

            <Link to="/NewsDetail/부동산">
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
                        부동산
                    </Text>
              </Anchor>
            </Link>

            
            {/* <Label
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
            </Label> */}



          </Div>

  
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
                        h = {{ xs: "11rem", md: "9rem" }}
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
                                m={{ b: "0rem" }}
                                pos= {{xs:"absolute",md: "static"}}
                                // bottom = "32rem"
                                >
                                {/* kakao mang hera kakao mang herakakao mangrang herakakao mangr */}
                                으으으으으윽으으으으으윽으으으으으윽으으으
                                </Text>
                                <Text
                                 m={{ b: "1rem" }}
                                >뉴스 | 코스모경제 | 20분전</Text>  
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
                               가나다라마바사아자차카타파하카타파차카자아사바마라나다으으으으으으으
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
                                1000
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
                               500
                                </Text>
                                <Icon
                                    transition
                                    name= "Message"
                                    color= "gray"
                                    size="33px"
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
                     </Div>
                     
                     </Div>
                  
                  
                 
        </Container>
               
       
  
      </Div>


    </div>

        
    )

}


export default NewsDetail;