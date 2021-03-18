import React, { useState, useEffect } from "react"

import { Container, Div, Text, Icon, Button, Input } from "atomize";

import NewsApiService from "../../api/NewsApi";

import { useParams, useHistory } from 'react-router-dom';

function NewsDetail() {

    let history = useHistory();

    let { newsId } = useParams();

    let [newsData, newsDataChange] = useState();
    let [keywords, keywordsChange] = useState();

    useEffect(() => {
        console.log(newsId)
        NewsApiService.selectByNewsId(newsId)
            .then(res => {
                console.log('NewsDetail 결과2', res.data);
                newsDataChange(res.data);
            })
            .catch(err => {
                console.log('***** NewsDetail.js selectByNewsId error:', err);
            });

        
    }, []);

    useEffect(() => {
        if(newsData){
        NewsApiService.selectKeywordByNewsId(newsId)
            .then(res => {
                keywordsChange(res.data);
                
            })
            .catch(err => {
                console.log('***** SearchResult.js selectKeywordByNewsId error:', err);
            });
        }
    },[newsData]);

    function handleClick(keyword){
        history.push('/SearchResult/'+keyword)
    }

    function moveHref(url) {
        window.open(url); // 클릭 시 별도 창 오픈
    }

    function timecal(data) {
        var nowtime = new Date()
        var boardtime = new Date(data)
        boardtime.setHours(boardtime.getHours())
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
        return resulttime;
    }

    return (
        <Div>
            <Div
                tag="section"
                w="100vw"
                p={{ t: { xs: "3rem", md: "8rem" } }}
                overflow="hidden"
            >
                {newsData ?

                    <Container>
                        <Div
                            d="flex"
                            justify="center"
                            p={{ b: "10.5rem" }}
                            border={{ b: "1px solid" }}
                            borderColor="gray300"
                        >
                            <Div
                                minW={{ xs: "100%", md: "80rem" }}
                                d="flex"
                                align="center"
                                flexDir="column"
                                h="auto"
                            >
                                <Div
                                    border="1px solid"
                                    borderColor="gray200"
                                    w={{ xs: "100%", md: "60rem" }}
                                    maxW="100%"
                                    h="100%"
                                    flexDir="column"
                                    m={{ xs: "1rem", md: "1rem" }}
                                    top="0"
                                    p={{
                                        x: { xs: "2rem", sm: "1.5rem" },
                                        b: { xs: "2rem", sm: "1.5rem" },
                                        t: "1rem",
                                    }}
                                    bg="white"
                                    shadow="2"
                                    rounded="xl"
                                    d="flex"
                                >
                                    <Div
                                        flexGrow="1"
                                    >
                                        <Text
                                            textAlign="left"
                                            textSize={{ xs: "title", md: "heading" }}
                                            textWeight="800"
                                            fontFamily="ko"
                                            m={{ b: "0rem" }}
                                        >
                                            {newsData[0].news_title}
                                        </Text>
                                        <Div
                                            d="flex"
                                            align="center"
                                            m={{ b: "0.5rem" }}
                                        >
                                            <Text
                                                textWeight="800"
                                                textAlign="left"
                                                textSize="subheader"
                                                fontFamily="ko"
                                                p={{ r: "0.5rem", b: "0.1rem" }}
                                            >
                                                {newsData[0].news_source}

                                            </Text>
                                        </Div>
                                        <Div
                                            d="flex"
                                            align="center"
                                            justify="center"
                                            m={{ b: "0.5rem" }}
                                        >
                                            <Button
                                                m={{ b: "0.5rem" }}
                                                textSize="subheader"
                                                fontFamily="ko"
                                                onClick={() => { moveHref(newsData[0].news_url) }}
                                            >
                                                본문 보기
                                        </Button>
                                        </Div>
                                        <Div
                                            d="flex"
                                            align="center"
                                            m={{ b: "0.5rem" }}
                                        >
                                        { newsData && keywords && keywords[0].map(function(data){
                                                 return(
                                                    <Text
                                                        textWeight="800"
                                                        fontFamily="ko"
                                                        textColor="black600"
                                                        bg="gray400"
                                                        hoverTextColor="white"
                                                        hoverBg="info700"
                                                        rounded="circle"
                                                        p={{ l: "0.5rem", r: "0.5rem", b: "0.1rem" }}
                                                        m={{ r: "0.5rem" }}
                                                        cursor="pointer"
                                                        onClick={ () => handleClick(data.keyword)}
                                                    >
                                                        #{data.keyword}
                                                </Text> 
                                        )})}
                                      
                                       
                                        </Div>
                                        <Div
                                            d="flex"
                                            align="center"
                                        >
                                            <Icon
                                                transition
                                                name="Timestamp"
                                                color="gray"
                                                size="18px"
                                                m={{ r: "0.4rem" }}
                                            />
                                            <Text
                                                textAlign="left"
                                                textSize="body"
                                                textWeight="600"
                                                fontFamily="ko"
                                                textColor="gray"
                                                m={{ r: "1rem" }}
                                            >
                                                {timecal(newsData[0].news_date)}
                                            </Text>
                                            <Icon
                                                transition
                                                name="Eye"
                                                color="gray"
                                                size="18px"
                                                fontFamily="ko"
                                                m={{ r: "0.4rem" }}
                                            />
                                            <Text
                                                textAlign="left"
                                                textSize="body"
                                                textWeight="600"
                                                fontFamily="ko"
                                                m={{ r: "1rem" }}
                                                textColor="gray"
                                            >
                                                0
                                        </Text>
                                            <Icon
                                                transition
                                                name="Message"
                                                color="gray"
                                                size="18px"
                                                m={{ r: "0.4rem" }}
                                            />
                                            <Text
                                                textAlign="left"
                                                textSize="body"
                                                textWeight="600"
                                                fontFamily="ko"
                                                textColor="gray"
                                                m={{ r: "1rem" }}
                                            >
                                                0
                                        </Text>
                                        </Div>
                                    </Div>

                                

                                <Input
                                    textSize="subheader"
                                    fontFamily="ko"
                                    placeholder="댓글을 작성하세요."
                                    p={{ x: "2.5rem" }}
                                    m={{ t: "0.5rem" }}
                                    h="5rem"
                                    w={{ xs: "100%", md: "500rem" }}
                                    // value = {commentinput}
                                    // onChange={(e) => { commentinput변경(e.target.value) }}
                                    // value={commentinput}
                                    suffix={
                                        <Button
                                            pos={{ xs: "static", md: "absolute" }}
                                            // onClick={() => commentaddModal변경(true)}
                                            bg="white"
                                            hoverBg="info700"
                                            textWeight="600"
                                            textSize="subheader"
                                            fontFamily="ko"
                                            textColor="info600"
                                            hoverTextColor="white"
                                            border="1px solid"
                                            borderColor="gray500"
                                            w={{ xs: "5rem", md: "6rem" }}
                                            h={{ xs: "5rem", md: "5rem" }}
                                            top="0"
                                            right="0"
                                        >
                                            등록
                                    </Button>
                                    }
                                />

                            </Div>
                            </Div>
                        </Div>
                    </Container>
                    :
                    ''
                }
            </Div>
        </Div>
    )
}

export default NewsDetail;