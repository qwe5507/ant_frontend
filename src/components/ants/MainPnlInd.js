import React, { useEffect, useState } from "react"

import { Text, Div, Image } from "atomize"
import flagKo from "../../images/flags/ko.png"
import flagUs from "../../images/flags/us.png"

import TestApi from "../../api/TestApi";

import { Link } from 'react-router-dom';

import { Line } from 'react-chartjs-2';

function MainPnlInd() {

  let [chartData, chartDataChange] = useState([]);

  useEffect(() => {

    // 경제 지표 하루 변동률 목록 가져오기
    TestApi.indicatorRank()
      .then(res => {
        var temp = res.data[0];
        delete temp.dates;
        var sortedTemp = sortByValue(temp);

        // var tableList = [];
        // for (var i = sortedTemp.length - 1; i > sortedTemp.length - 4; i--) {
        //   tableList.push(sortedTemp[i][1]);
        // }

        // console.log(tableList);

        // TestApi.mainIndicatorCall(tableList)
        //   .then(res => {

        //   })
        //   .catch(err => {
        //     console.log('경제 지표 하루 변동률 목록 가져오기 에러', err);
        //   });

        var tempChartData = [];

          for (var i = sortedTemp.length - 1; i > sortedTemp.length - 4; i--) {
            TestApi.mainIndicatorCall(sortedTemp[i][1])
              .then(res => {

                const temp = res.data;
                var labels = [];
                var data = [];

                // 값 저장
                for (var i = 0; i < temp.length; i++) {
                  labels.push(temp[i]['dates']);
                  data.push(temp[i]['price']);
                }
                // 날짜 전처리
                for (var j = 0; j < labels.length; j++) {
                  labels[j] = labels[j].substring(0, 10)
                }

                var dataSet = {
                  labels: labels,
                  datasets: [
                    {
                      datasetStrokeWidth: 10,
                      type: "line",
                      borderCapStyle: "round",
                      borderColor: "rgba(2, 132, 254, 1)",
                      borderWidth: 3,
                      backgroundColor: "rgba(179, 218, 255, 1)",
                      pointHoverRadius: 0,
                      pointDot: false,
                      pointRadius: 0,
                      pointDotRadius: 0,
                      data: data
                    }
                  ]
                }

                tempChartData.push(dataSet);
                console.log(tempChartData);

                chartDataChange(tempChartData);
                console.log(chartData);
              })
              .catch(err => {
                console.log('mainIndicatorCall ERROR', err);
              })
          }
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
      h="24rem"
      bg="white"
      shadow="4"
      rounded="xl"

    >
      <Div
        flexGrow="1"
        textAlign="center"
      >
        <Text
          m={{ t: "1rem", b: "0.5rem" }}
          textWeight="800"
          textSize="title"
          fontFamily="ko"
        >
          경제 지표
            </Text>
        <Text
          m={{ b: "0.5rem" }}
          textWeight="800"
          fontFamily="ko"
        >
          하루동안 상승률이 높은 지표입니다. (실시간 아님)
        </Text>

        {/* 반복문 */}
        {chartData.map((a, i) => {
          return (
            <Div
              p="1rem"
              bg="white"
              shadow="2"
              rounded="xl"
              m={{ b: "0.5rem" }}
            >
              <Div
                d="flex"
                align="center"
                justify="space-between"
                pos="relative"
                flexDir="row"
              >
                <Image
                  src={flagUs}
                  rounded="circle"
                  h="1.5rem"
                  w="1.5rem"
                />
                <Text
                  textWeight="800"
                  fontFamily="ko"
                >
                  EUR/USD
                    </Text>
                <Text
                  textWeight="800"
                  fontFamily="ko"
                >
                  {/* { today } */}
                </Text>

                <Text
                  textWeight="800"
                  fontFamily="ko"
                  textColor="info700"
                >
                  +3.50%
                    </Text>
                <Div
                  w="2rem"
                  overflow="hidden"
                >
                  <Line
                    data={a}
                    options={{
                      animation: {
                        duration: 2000
                      },
                      responsive: true,
                      maintainAspectRatio: true,
                      legend: {
                        display: false
                      },
                      scales: {
                        xAxes: [
                          {
                            display: false,
                            gridLines: {
                              display: false,
                            },
                            scaleLabel: {
                              display: false,
                            },
                            type: "time",
                            time: {
                              unit: "day",
                              unitStepSize: 1
                            },
                          }
                        ],
                        yAxes: [
                          {
                            display: false,
                            gridLines: {
                              display: false,
                            },
                            scaleLabel: {
                              display: false,
                            },
                          }
                        ]
                      }
                    }}
                  />
                </Div>
              </Div>
            </Div>
          );
        })}

        {/* 지표 더보기 버튼 */}
        <Link to="/Indicators">
          <Text
            textWeight="800"
            textSize="subheader"
            fontFamily="ko"
          >
            지표 더보기 →
          </Text>
        </Link>

      </Div>
    </Div>
  )
}

export default MainPnlInd;
