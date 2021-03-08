import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Input, Div, Image, Container, Button, Anchor, Dropdown, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
//import Modal from 'react-modal';
import axios from "axios";
function SearchResult() {

  let { search } = useParams();
  let [result, result변경] = useState("");
  let [hits, hits변경] = useState([]);


  let [sortResultSel, sortResultSelChange] = useState('정렬');
  let [sortPeriodSel, sortPeriodSelChange] = useState('기간');
  let [showsortResult, showsortResultChange] = useState(false);
  let [showsortPeriod, showsortPeriodChange] = useState(false);

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

  let now = year + '-' + month + "-" + date;
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  function moveHref(url) {
    console.log("moveHref호출")
    window.location.href = url;
  }

  const sortResult = (
    <Div
    >
      {['최신순', '추천순'].map((name, index) => (
        <Anchor
          d="block"
          p={{ y: "0.25rem", l: "0.75rem" }}

          onClick={() => sortPeriodClicked(name)}
        >
          {name}
        </Anchor>
      ))}
    </Div>
  );

  const sortPeriod = (
    <Div
    >
      {['1주일', '1개월', '3개월', '6개월', '1년'].map((name, index) => (
        <Anchor
          d="block"
          p={{ y: "0.25rem", l: "0.75rem" }}

          onClick={() => sortPeriodClicked(name)}
        >
          {name}
        </Anchor>
      ))}
    </Div>
  );

  function sortPeriodClicked(name) {
    if (name == "1주일") {
      searchmatchparsedate("7")
      sortPeriodSelChange(name)
      showsortPeriodChange(!showsortPeriod)
    } else if (name == "1개월") {
      searchmatchparsedate("30")
      sortPeriodSelChange(name)
      showsortPeriodChange(!showsortPeriod)
    } else if (name == "3개월") {
      searchmatchparsedate("90")
      sortPeriodSelChange(name)
      showsortPeriodChange(!showsortPeriod)
    } else if (name == "6개월") {
      searchmatchparsedate("180")
      sortPeriodSelChange(name)
      showsortPeriodChange(!showsortPeriod)
    } else if (name == "1년") {
      sortPeriodSelChange(name)
      searchmatchparsedate("365")
      showsortPeriodChange(!showsortPeriod)
    } else if (name == "최신순") {
      searchSort()
      sortResultSelChange(name)
      showsortResultChange(!showsortResult)
    }
    else if (name == "추천순") {
      // 함수 추가 예정
      sortResultSelChange(name)
      showsortResultChange(!showsortResult)
    }

  }
  function searchGroup(group) {
    axios.get("http://localhost:8000/news/searchgroupmatchphrase", { params: { id: group } })
      .then(response => {
        console.log('그룹', group)
        result = response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error => {
        console.log(error);
      })
  }

  function searchSort() {
    console.log(search)
    axios.get("http://localhost:8000/news/searchmatchparsesort", { params: { id: search } })
      .then(response => {
        result = response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error => {
        console.log(error);
      });
  }

  function searchmatchparsedate(date) {
    console.log(date, search)
    axios.get("http://localhost:8000/news/searchmatchparsedate", { params: { id: search, id2: date } })
      .then(response => {
        result = response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error => {
        console.log(error);
      });
  }

  function searchmatchparse() {
    axios.get("http://localhost:8000/news/searchmatchparse", { params: { id: search } })
      .then(response => {
        result = response.data
        var hits2 = result['hits']['hits']
        hits변경(hits2)
        console.log(hits2)
      })
      .catch(error => {
        console.log(error);
      });
  }


  console.log("test")
  useEffect(() => {
    searchmatchparse()

  }, [])

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

  function textLengthOverCut(txt, len, lastTxt) {
    if (len == "" || len == null) { // 기본값
      len = 78;
    }
    if (lastTxt == "" || lastTxt == null) { // 기본값
      lastTxt = "...";
    }
    if (txt.length > len) {
      txt = txt.substr(0, len) + lastTxt;
    }
    return txt;
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };


  return (
    <Div>
      <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "8rem" } }}
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
              pos="relative"
            >
              <Div
                d="flex"
                align="right"
              >
                <Dropdown
                  w={{ xs: "90%", sm: "8rem" }}
                  m={{ b: "1.5rem", r: "1.5rem" }}
                  isOpen={showsortResult}
                  onClick={() =>
                    showsortResultChange(!showsortResult)
                  }
                  menu={sortResult}
                >
                  {sortResultSel}
                </Dropdown>
                <Dropdown
                  w={{ xs: "90%", sm: "8rem" }}
                  m={{ b: "1.5rem" }}
                  isOpen={showsortPeriod}
                  onClick={() =>
                    showsortPeriodChange(!showsortPeriod)
                  }
                  menu={sortPeriod}
                >
                  {sortPeriodSel}
                </Dropdown>
              </Div>
              {hits.map(function (data) {
                return (
                  <Div
                    border="1px solid"
                    borderColor="gray200"
                    w={{ xs: "100%", md: "60rem" }}
                    maxW="100%"
                    pos={{ xs: "static", md: "relative" }}
                    m={{ xs: "1rem", md: "1rem" }}
                    top="0"
                    p={{
                      x: { xs: "2rem", sm: "1.5rem" },
                      b: { xs: "2rem", sm: "1.5rem" },
                      t: "1.5rem",
                    }}
                    bg="white"
                    shadow="4"
                    rounded="xl"
                  >
                    <Div
                      flexGrow="1"
                      textAlign="center"
                    >
                      <Text
                        textAlign="left"
                        cursor="pointer"
                        textSize="heading"
                        textWeight="750"
                        fontFamily="secondary"
                        justify="flex-start"
                        m={{ b: "0rem" }}
                        pos={{ xs: "absolute", md: "static" }}
                        onClick={() => { moveHref(data['_source']['news_url']) }}
                      >
                        {data['_source']['news_title']}
                      </Text>
                      <Text
                        m={{ b: "1rem" }}
                      >
                        {data['_source']['news_group']} | {data['_source']['news_source']}
                      </Text>

                      <Div d="flex" align="center">

                        <Icon
                          transition
                          name="Timestamp"
                          color="gray"
                          size="18px"
                          cursor="pointer"
                          m={{ r: "0.4rem" }}
                        />
                        <Text
                          textAlign="left"
                          textSize="body"
                          textWeight="600"
                          fontFamily="secondary"
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
                          cursor="pointer"
                          m={{ r: "0.4rem" }}
                        />
                        <Text
                          textAlign="left"
                          textSize="body"
                          textWeight="600"
                          fontFamily="secondary"
                          m={{ r: "1rem" }}
                          textColor="gray"
                        >
                          0
                        </Text>
                        <Icon
                          transition
                          name="Message"
                          color="gray"
                          size="33px"
                          cursor="pointer"
                          m={{ r: "0.4rem" }}
                        />
                        <Text
                          textAlign="left"
                          textSize="body"
                          textWeight="600"
                          fontFamily="secondary"
                          textColor="gray"
                          m={{ r: "1rem" }}
                        >
                          0
                        </Text>
                      </Div>
                    </Div>
                  </Div>
                )
              })}
            </Div>
          </Div>
        </Container>
      </Div>
    </Div>
  )
}

export default SearchResult;