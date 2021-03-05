import React, { useEffect, useState } from "react"

import { Text, Div, Image, Radiobox, Label } from "atomize"

import { nanoid } from 'nanoid';

import flagKo from "../../images/flags/ko.png"
import flagUs from "../../images/flags/us.png"

import TestApi from "../../api/TestApi";

import { Link } from 'react-router-dom';

import { Line } from 'react-chartjs-2';

import MainPnlIndCard from './MainPnlIndCard';

function MainPnlInd() {

  let [chartData, chartDataChange] = useState();
  let [sortNews, sortNewsChange] = useState('상승순');

  useEffect(() => {

    // 경제 지표 하루 변동률 목록 가져오기
    TestApi.indicatorRank()
      .then(res => {
        var temp = res.data;
        console.log(temp);

        var tempChartData = [];

        for (var i = 0; i < temp.length; i++) {

          var labels = [];
          var data = [];

          // 값 저장
          for (var j = 0; j < temp.length; j++) {
            labels.push(temp[i][j]['dates']);
            data.push(temp[i][j]['price']);
          }
          // 날짜 전처리
          for (var j = 0; j < labels.length; j++) {
            labels[j] = labels[j].substring(0, 10)
          }

          console.log(temp[i][0]['changedate']);

          var dataSet = {
            labels: labels,
            datasets: [
              {
                datasetStrokeWidth: 10,
                type: "line",
                borderCapStyle: "round",
                borderColor: temp[i][0]['changedate'] > 0 ? "rgba(244, 84, 29, 1)" : "rgba(2, 132, 254, 1)",
                borderWidth: 3,
                backgroundColor: temp[i][0]['changedate'] > 0 ? "rgba(251, 207, 208, 1)" : "rgba(179, 218, 255, 1)",
                pointHoverRadius: 0,
                pointDot: false,
                pointRadius: 0,
                pointDotRadius: 0,
                data: data
              }
            ]
          }

          var changeDateCalc = Math.round(temp[i][0]['changedate'] * 100) / 100

          var wholeData = {
            name: temp[i][0]['tableName'],
            price: temp[i][0]['price'],
            changedate: changeDateCalc,
            dataSet: dataSet
          }
          tempChartData.push(wholeData);
        }
        chartDataChange(tempChartData);
      })
      .catch(err => {
        console.log('경제 지표 하루 변동률 목록 가져오기 에러', err);
      });
  }, []);

  // JSON Value 정렬
  function sortByValue(jsonObj) {
    var sortedArray = [];
    for (var i in jsonObj) { // Push each JSON Object entry in array by [key, value]
      sortedArray.push([jsonObj[i], i]);
    }
    return sortedArray.sort(); // Value 를 역순 정렬 (오름차순)
  }

  // 동기 지연
  // function sleep(ms) {
  //   const wakeUpTime = Date.now() + ms
  //   while (Date.now() < wakeUpTime) {}
  // }

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
        t: "1.5rem",
      }}
      h="28rem"
      bg="white"
      shadow="4"
      rounded="xl"

    >
      <Div
        d="flex"
        align="center"
        justify="space-between"
        flexDir="row"
      >
        <Text
          m={{ t: "1rem", b: "0.5rem" }}
          textWeight="800"
          textSize="title"
          fontFamily="ko"
        >
          경제 지표
        </Text>
        <Div
          d="flex"
          flexDir="row"
        >
          <Label
            align="center"
            textWeight="500"
            fontFamily="ko"
            m={{ t: "0.4rem", r: "0.5rem" }}
          >
            <Radiobox
              onChange={() => sortNewsChange('상승순')}
              checked={sortNews === '상승순'}
              name="count"
            />
                상승순
            </Label>
          <Label
            align="center"
            textWeight="500"
            fontFamily="ko"
            m={{ t: "0.4rem" }}
          >
            <Radiobox
              onChange={() => sortNewsChange('하락순')}
              checked={sortNews === '하락순'}
              name="count"
            />
                하락순
            </Label>
        </Div>
      </Div>
      <Div
        flexGrow="1"
        textAlign="center"
      >
        <Text
          m={{ b: "0.5rem" }}
          textWeight="800"
          fontFamily="ko"
          textAlign="left"
          m={{ b: "1rem" }}
        >
          지난 하루 변동폭이 큰 지표입니다. (오전 9시 기준)
        </Text>

        {/* 반복문 */}
        {chartData && chartData.map((a, i) => {
          return (
            <Div>
              <MainPnlIndCard key={nanoid()} chartData={ a } />
            </Div>
          )
        })
        }

        {/* 지표 더보기 버튼 */}
        <Link to="/Indicators">
          <Text
            textWeight="800"
            textSize="subheader"
            fontFamily="ko"
            m={{ t: "1.5rem" }}
          >
            지표 더보기 →
          </Text>
        </Link>

      </Div>
    </Div>
  )
}

export default MainPnlInd;
