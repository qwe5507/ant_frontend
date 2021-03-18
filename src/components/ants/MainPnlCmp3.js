import React, { useState, useEffect } from "react"
import { Text, Div, Icon, Button } from "atomize"
import NewsCardShimmer from "./NewsCardShimmer";

import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import NewsApiService from "../../api/NewsApi";


function MainPnlCmp3() {

    let [result, result변경] = useState();
    let [hits, hits변경] = useState();
    let [keywords, keywordsChange] = useState();
    let [count, count변경] = useState(0);
    let history = useHistory();
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    if (date < 10) {
        date = '0' + date
    }
    if (month < 10) {
        month = '0' + month
    }

    useEffect(() => {
        searchtodaynews();
    }, []);

    // 검색결과 출력 후 keywords 받아오기
    useEffect(() => {

        if (hits) {
            var searchResult = "";

            for (var i = 0; i < hits.length; i++) {
                searchResult += hits[i]['_source']['news_id'] + ",";
            }

            NewsApiService.selectKeywordByNewsId(searchResult)
                .then(res => {
                    keywordsChange(res.data);
                })
                .catch(err => {
                    console.log('***** SearchResult.js selectKeywordByNewsId error:', err);
                });
        }
    }, [hits]);

    function handleClick(newsid) {
        history.push('/NewsDetail/' + newsid)
    }

    function timecal(data) {
        var nowtime = new Date()
        var boardtime = new Date(data)
        boardtime.setHours(boardtime.getHours() )
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

    function textLengthOverCut(txt, len, lastTxt) {
        if (len == "" || len == null) { // 기본값
            len = 25;
        }
        if (lastTxt == "" || lastTxt == null) { // 기본값
            lastTxt = "...";
        }
        if (txt.length > len) {
            txt = txt.substr(0, len) + lastTxt;
        }
        return txt;
    }

    function searchtodaynews() {
        NewsApiService.searchtodaynews()
            .then(response => {
                result = response.data
                var hits2 = result['hits']['hits']
                let templist = []
                for (let i = 0; i < 3; i++) {
                    templist.push(hits2[i])
                }
                hits변경(templist)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Div
            d="flex"
            align="center"
            justify="center"
            flexDir="column"
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "22rem" }}
            maxW="100%"
            pos={{ xs: "static", md: "relative" }}
            m={{ xs: "1rem", md: "1rem" }}
            top="0"
            p={{
                x: { xs: "0.5rem", sm: "1.5rem" },
                b: { xs: "2rem", sm: "1.5rem" },
                t: "1.5rem",
            }}
            h="auto"
            bg="white"
            shadow="2"
            rounded="xl"
        >
            <Div
                w="100%"
                flexGrow="1"
                textAlign="center"
                p={{
                    x: { xs: "0.5rem", sm: "1.5rem" },
                }}
            >
                <Text
                    m={{ b: "1rem" }}
                    textWeight="800"
                    textSize="title"
                    fontFamily="ko"
                >
                    뉴스
                </Text>

                {/* 뉴스 목록 뜨기 전 로딩 loading shimmer */}
                {hits && keywords ?
                    ""
                    :
                    <Div
                        w="100%"
                    >
                        <NewsCardShimmer />
                        <NewsCardShimmer />
                        <NewsCardShimmer />
                    </Div>
                }

                {/* 뉴스 반복 블록 */}
                {hits && keywords && hits.map(function (data, idx) {
                    return (
                        <Div
                            w="100%"
                            h="6rem"
                            bg="white"
                            shadow="2"
                            rounded="xl"
                            p={{ t: "0.5rem", l: "0.7rem", r: "0.7rem", b: "0.5rem" }}
                            m={{ b: "0.5rem" }}
                        >
                            <Link to={"/NewsDetail/" + data['_source']['news_id']}
                                style={{ color: '#000' }}
                            >
                                <Div
                                    d="flex"
                                    justify="space-between"
                                >
                                    <Text
                                        textWeight="800"
                                        fontFamily="ko"
                                        textAlign="left"
                                    >
                                        [{data['_source']['news_source']}]
                                    </Text>
                                    <Text
                                        textWeight="800"
                                        fontFamily="ko"
                                        textAlign="right"
                                    >
                                        {timecal(data['_source']['news_date'])}
                                    </Text>
                                </Div>
                                <Text
                                    textWeight="800"
                                    textAlign="left"
                                    fontFamily="ko"
                                    onClick={() => handleClick(data['_source']['news_id'])}
                                    h="1.5rem"
                                    overflow="hidden"
                                    m={{ b: "0.2rem" }}
                                >
                                    {textLengthOverCut(data['_source']['news_title'])}
                                </Text>

                                {/* 키워드 반복 함수 */}
                                <Div
                                    d="flex"
                                    flexDir="row"
                                    flexWrap="wrap"
                                    h={{ md: "1.65rem" }}
                                    overflow="hidden"
                                >
                                    {hits && keywords && keywords[idx].map(function (a, seq) {
                                        return (
                                            <Text
                                                textWeight="800"
                                                fontFamily="ko"
                                                bg="gray400"
                                                rounded="circle"
                                                textColor="black600"
                                                p={{ l: "0.5rem", r: "0.5rem", b: "0.1rem" }}
                                                m={{ r: "0.5rem" }}
                                            >
                                                #{ a.keyword}
                                            </Text>
                                        )
                                    })}
                                </Div>
                                {/* 키워드 반복 함수 끝 */}

                                {/* <Text
                                    textWeight="800"
                                    fontFamily="ko"
                                    textColor="danger700"
                                >
                                    삼성전자 +1.2%
                                </Text> */}
                            </Link>
                        </Div>
                    )
                })}

                {/* 뉴스 더보기 버튼 */}
                <Link to="/News">
                    <Text
                        textWeight="800"
                        textSize="subheader"
                        fontFamily="ko"
                        m={{ t: "1rem" }}
                    >
                        뉴스 더보기 →
                </Text>
                </Link>

            </Div>
        </Div>
    )
}

export default MainPnlCmp3;
