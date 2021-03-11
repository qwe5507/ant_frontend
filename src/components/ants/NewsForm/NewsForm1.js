import React, { useState, useEffect } from "react"
import { Text, Div, Col, Row, Icon, Label, Radiobox } from "atomize"
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import axios from "axios";
import { useHistory } from 'react-router-dom';

function NewsForm1() {

  let [selectedSwitchValue, selectedSwitchValueChange] = useState(false);
  let [sortNews, sortNewsChange] = useState('최신순');
  let [result, result변경] = useState();
  let [hits, hits변경] = useState();
  let [totalhits, totalhits변경] = useState();
  let [pageCount, pageCount변경] = useState(2);
  let [count, count변경] = useState(1);
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

  function handleClick(newsid){
    history.push('/NewsDetail/'+newsid)
  }

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
    axios.get("http://localhost:8000/news/searchtodaynews")
      .then(response => {
        result = response.data
        var hits2 = result['hits']['hits']
        console.log(hits2)
        totalhits변경(hits2)
        let templist = []
        for(let i=0; i<3; i++){
          templist.push(hits2[i])
        }
        hits변경(templist)
        console.log(hits)
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  // function newsList(idx){
    

  //   if(idx<=8){
  //     pageCount변경(idx)
  //     let templist2 = []
  //     for(let i=idx-2; i<=idx; i++){
  //       templist2.push(totalhits[i])
  //     }
  //     hits변경(templist2)
  //   }
  //   else{
  //     alert('뉴스 초과')
  //   }

    
  //   console.log(hits)
  // }
  function countCheck(){
//012345678
      let tempcount = count
      let templist2 = []
      for(var i =tempcount*3;i<=(tempcount*3)+2;i++){
        templist2.push(totalhits[i])
      }
      hits변경(templist2)
      if(tempcount == 2){
        count변경(0)
      }else{

        count변경(count+1);
      }

  }
  useEffect(() => {
    searchtodaynews();
  }, []);
  return (
    <Div
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "22rem" }}
      maxW="100%"
      pos={{ xs: "static", md: "relative" }}
      m={{ xs: "1rem", md: "1rem" }}
      top="0"
      p={{
        x: { xs: "2rem", sm: "1.5rem" },
        b: { xs: "2rem", sm: "1.5rem" },
        t: "4.5rem"
      }}

      h="31rem"
      bg="white"
      shadow="4"
      rounded="xl"
    >
      <Row>
        <Col size="5">
          <Text
            textAlign="center"
            textSize="title"
            textWeight="800"
            fontFamily="ko"
          >
            오늘의 뉴스
          </Text>
        </Col>
        <Col size="7">
          <Div
            d="flex"
            justify="flex-end"
          >
            {/* <Label
              align="center"
              textWeight="500"
              fontFamily="ko"
              m={{ t: "0.4rem", r: "0.5rem" }}
            >
              <Radiobox
                onChange={() => sortNewsChange('관련도순')}
                checked={sortNews === '관련도순'}
                name="count"
              />
                관련도순
            </Label>
            <Label
              align="center"
              textWeight="500"
              fontFamily="ko"
              m={{ t: "0.4rem" }}
            >
              <Radiobox
                onChange={() => sortNewsChange('최신순')}
                checked={sortNews === '최신순'}
                name="count"
              />
                최신순
            </Label> */}
          </Div>
        </Col>
      </Row>

        
     
      { hits && hits.map(function(data){
        return(
          <div>
        <Div
        p="1rem"
        bg="white"
        shadow="2"
        rounded="xl"
        m={{ b: "0.5rem" }}
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
            [{data['_source']['news_source']}] {timecal(data['_source']['news_date'])}
          </Text>
          <Icon
            name="Options"
            size="20px"
            color="black300"
            cursor="pointer"
          />
        </Div>
        <Text
          textWeight="800"
          fontFamily="ko"
          onClick={() => handleClick(data['_source']['news_id']) }
        >
          {textLengthOverCut(data['_source']['news_title'])}
          </Text>
        <Text
          textWeight="800"
          fontFamily="ko"
          textColor="danger700"
        >
          삼성전자 +1.2%
          </Text>
      </Div>
     
    
      </div>

    )})}
      <Icon 
     position="absolute"
     name="Add" 
     size="30px" 
     m={{ l: '8rem', r: '3rem', t:'0.5rem' }}
     cursor="pointer"
     onClick={() => countCheck() }
     />
 

    </Div>


  )
}

export default NewsForm1