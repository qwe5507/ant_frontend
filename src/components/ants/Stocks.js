import React, { useState, useEffect, useRef } from "react"
import TradingViewWidget, { Themes, symbol } from 'react-tradingview-widget';
import { Container, Div, Text, Icon } from "atomize"
import { useParams, Link } from 'react-router-dom';
import NewsApiService from "../../api/NewsApi";
import StockAPI from "../../api/StockApi";
import axios from "axios";
//참고사이트 https://github.com/rafaelklaessen/react-tradingview-widget

function Stocks() {

    let { stockId } = useParams();
    let [stockIdTV, stockIdTVChange] = useState();
    let [stockInfo, stockInfoChange] = useState();
    let [stockName, stockNameChange] = useState();
    let [keywords, keywordsChange] = useState();
    let [hits, hits변경] = useState();


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

    function searchmatchphrase() {
        NewsApiService.searchmatchphrase(stockName)
          .then(response => {
            let result = response.data
            let hits2 = result['hits']['hits']
            hits변경(hits2)
          })
          .catch(error => {
            console.log(error);
          });
    }

    useEffect(() => {

        stockIdTVChange("KRX:" + stockId);

        // 개별 종목 정보 가져오기
        StockAPI.selectByStockId(stockId)
            .then(res => {
                stockInfoChange(res.data);
                stockNameChange(res.data['name'])
            })
            .catch(err => {
                console.log('Stocks.js 개별 종목 정보 가져오기 에러', err);
            });

    }, []);


    useEffect(() => {
        searchmatchphrase();
    }, [stockName]);

    useEffect(() => {
        
        console.log("으잉?")
        if (hits) {
            var searchResult = "";
      
            for (var i = 0; i < hits.length; i++) {
              searchResult += hits[i]['_source']['news_id'] + ",";
            }
      
            NewsApiService.selectKeywordByNewsId(searchResult)
              .then(res => {
                keywordsChange(res.data);
                console.log(res.data)
              })
              .catch(err => {
                console.log('***** SearchResult.js selectKeywordByNewsId error:', err);
              });
          }

    }, [hits]);
    return (
        <Div
            tag="section"
            w="100vw"
            p={{ t: { xs: "6rem", md: "8rem" } }}
            overflow="hidden"
        >
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


                        {stockInfo ?
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
                                        textSize={{ xs: "heading", md: "display1" }}
                                        textWeight="800"
                                        fontFamily="ko"
                                        m={{ b: "0.1rem" }}
                                    >
                                        {stockInfo.name}
                                    </Text>
                                    <Div
                                        d="flex"
                                        align="center"
                                        m={{ b: "1rem" }}
                                    >
                                        <Text
                                            m={{ r: "0.5rem" }}
                                            textSize={{ xs: "title", md: "heading" }}
                                            textWeight="800"
                                            fontFamily="ko"
                                            bg="warning500"
                                            rounded="circle"
                                            p={{ l: "1rem", r: "1rem", b: "0.1rem" }}
                                            m={{ r: "0.5rem" }}
                                        >
                                            {stockInfo.market}
                                        </Text>
                                        <Text
                                            textAlign="left"
                                            textSize={{ xs: "title", md: "heading" }}
                                            textWeight="800"
                                            fontFamily="ko"
                                        >
                                            {stockId}
                                        </Text>
                                    </Div>
                                    {/* <Div
                                        width="80%"
                                        align="center"
                                        m={{ b: "1rem" }}
                                    > */}
                                        <TradingViewWidget
                                            width="100%"
                                            // width="500"
                                            height="500"
                                            symbol={stockIdTV}
                                            theme={Themes.LIGHT}
                                            locale="kr"
                                            allow_symbol_change={false}
                                        />
                                    {/* </Div> */}

                                    {/* 타이틀바 */}
                                    <Div
                                        w={{ xs: "100%", md: "60rem" }}
                                        p={{ t: "0.5rem" }}
                                        d="flex"
                                        align="center"
                                        flexDir="row"
                                        justify="space-between"
                                    >
                                        <Text
                                            textSize="display1"
                                            textWeight="800"
                                            fontFamily="ko"
                                            p={{ l: "0.5rem" }}
                                            m={{ r: "1.5rem", b: "1rem" }}
                                        >
                                            뉴스
                                        </Text>
                                    </Div>

                                    {/* 뉴스 목록 */}
                                    {hits && keywords && hits.map(function (data, idx) {
                                        return (
                                    <Div
                                        border="1px solid"
                                        borderColor="gray200"
                                        w={{ xs: "100%", md: "60rem" }}
                                        m={{ b: { xs: "1rem", md: "1rem" } }}
                                        maxW="100%"
                                        // h="100%"
                                        flexDir="column"
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
                                    >
                                       <Link to={"/NewsDetail/" + data['_source']['news_id']}
                                                    style={{ color: '#000' }}
                                                >
                                        <Div
                                            flexGrow="1"
                                        >
                                            <Text
                                                textAlign="left"
                                                textSize={{ xs: "title", md: "title" }}
                                                textWeight="800"
                                                fontFamily="ko"
                                                m={{ b: "0.5rem" }}
                                            >
                                        
                                            {data['_source']['news_title']}
                                            </Text>
                                            <Div
                                                d="flex"
                                                align="center"
                                                m={{ b: "0.5rem" }}
                                            >
                                                <Text
                                                    textWeight="800"
                                                    textAlign="left"
                                                    fontFamily="ko"
                                                    p={{ r: "0.5rem", b: "0.1rem" }}
                                                >
                                                  
                                                 {data['_source']['news_source']}
                                                </Text>

                                                {/* 키워드 반복 함수 */}
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
                                                {a.keyword}
                                                </Text>
                                                )
                                                            })}
                                                {/* 키워드 반복 함수 끝 */}

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
                                                    {timecal(data['_source']['news_date'])}
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
                                        </Link>
                                    </Div>

                                   
                                    )})}

                                </Div>
                            </Div>
                            :
                            ""
                        } {/* 끝 */}
                    </Div>
                </Div>

            </Container>
        </Div>
    )
}

export default Stocks;