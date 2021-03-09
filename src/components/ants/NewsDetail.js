import React, { useState, useEffect } from "react"

import { Container, Div, Text, Icon } from "atomize";

import NewsApiService from "../../api/NewsApi";

import { useParams } from 'react-router-dom';

function NewsDetail() {

    let { newsId } = useParams();

    let [newsData, newsDataChange] = useState();

    useEffect(() => {
        NewsApiService.selectByNewsId(newsId)
            .then(res => {
                console.log('NewsDetail 결과', res.data);
                newsDataChange(res.data);
                console.log(newsData[0].news_id);
            })
            .catch(err => {
                console.log('***** NewsDetail.js selectByNewsId error:', err);
            });

    }, []);

    function timecal(data) {
        var nowtime = new Date()
        var boardtime = new Date(data)
        boardtime.setHours(boardtime.getHours() - 9)
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
                { newsData ? 
                
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
                                hoverBg="info200"
                                cursor="pointer"
                            // onClick={() => { moveHref(data['_source']['news_url']) }}
                            >
                                <Div
                                    flexGrow="1"
                                >
                                    <Text
                                        textAlign="left"
                                        textSize={{ xs: "title", md: "heading" }}
                                        textWeight="750"
                                        fontFamily="ko"
                                        m={{ b: "0rem" }}
                                    >
                                        { newsData[0].news_title }
                                    </Text>
                                    <Div
                                        d="flex"
                                        align="center"
                                    >
                                        <Text
                                            textWeight="800"
                                            textAlign="left"
                                            fontFamily="ko"
                                            p={{ r: "0.5rem", b: "0.1rem" }}
                                        >
                                            { newsData[0].news_source }

                                        </Text>
                                        <Text
                                            textWeight="800"
                                            fontFamily="ko"
                                            bg="gray400"
                                            rounded="circle"
                                            textColor="black600"
                                            p={{ l: "0.5rem", r: "0.5rem", b: "0.1rem" }}
                                        >
                                            #키워드
                                        </Text>
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
                                            { timecal(newsData[0].news_date) }
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