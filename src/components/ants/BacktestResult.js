import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import { Line } from 'react-chartjs-2';
import DataTable from 'react-data-table-component';

function BacktestResult(props) {

    let [chartData, chartDataChange] = useState([]);
    let [profit, profitChange] = useState();
    let [win, winChange] = useState();
    let [tdList, tdListChange] = useState();

    const columns = [
        {
            name: '종목코드',
            selector: 'code',
            sortable: true
        },
        {
            name: '진입일',
            selector: 'in',
            sortable: true
        },
        {
            name: '청산일',
            selector: 'out',
            sortable: true
        },
        {
            name: '수익률 %',
            selector: 'profit',
            sortable: true
        },
    ]

    useEffect(() => {

        var len = Object.keys(props.result).length;

        // result 구조 : [ ... 차트 데이터, 전체승률, 매매내역]
        var tradeList = JSON.parse(props.result[len - 1]);
        var winratio = JSON.parse(props.result[len - 2]);

        winChange(winratio.winratio[0]);
        // console.log('==3== 매매내역', tradeList);

        var filteredTradeList = [];
        for (var key in tradeList) {
            for (var item in tradeList[key]) {
                if (tradeList[key][item] != null) {
                    // console.log(key,':',item,':',tradeList[key][item]);
                    var temp = new Object();
                    temp.period = key;
                    temp.code = tradeList[key][item]['종목코드'];
                    temp.in = tradeList[key][item]['진입일'];
                    temp.out = tradeList[key][item]['청산일'];
                    temp.profit = parseFloat(tradeList[key][item]['손익률'].toFixed(2));
                    filteredTradeList.push(temp);
                }
            }
        }

        // console.log('체크체크==', filteredTradeList);
        tdListChange(filteredTradeList);

        // 전체 기간 결과 차트 데이터
        var chart = JSON.parse(props.result[len - 3]);

        var labels = Object.keys(chart['mean']);
        var data = Object.values(chart['mean']);

        profitChange(parseFloat(data[data.length - 1]).toFixed(2));

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
                    pointBackgroundColor: "rgba(179, 218, 255, 0.1)",
                    pointHoverRadius: 0,
                    pointDot: false,
                    pointRadius: 0,
                    pointDotRadius: 0,
                    pointHoverBackgroundColor: "rgba(171, 242, 0, 0.2)",
                    data: data
                }
            ]
        }

        chartDataChange(dataSet);

    }, []);

    return (
        <Div
            d="flex"
            justify="center"
            p={{ b: "10.5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
            w={{ xs: "100%", lg: "59rem" }}
        >
            <Div
                border="1px solid"
                borderColor="gray200"
                w={{ xs: "100%", md: "40rem" }}
                maxW="100%"
                pos={{ xs: "static", md: "relative" }}
                m={{ xs: "1rem", md: "1rem" }}
                top="0"
                p={{
                    x: { xs: "2rem", sm: "1.5rem" },
                    b: { xs: "2rem", sm: "1.5rem" },
                    t: "1.5rem",
                }}
                h="100%"
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
                        백테스트 결과
                    </Text>

                    {/* 결과 요약 */}
                    <Div
                        p="1rem"
                        bg="white"
                        shadow="2"
                        border="1px solid"
                        borderColor="gray200"
                        rounded="xl"
                        w={{ xs: "100%", sm: "100%" }}
                        m={{ b: "0.5rem" }}
                    >
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            [ 결과 요약 ]
                        </Text>
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            수익: {profit}%
                        </Text>
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            거래: 00번
                        </Text>
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            승률: {win}%
                        </Text>
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            MDD: 00%
                        </Text>

                    </Div> {/* 결과 요약 종료 */}

                    {/* 수익률(%) 그래프 */}
                    <Div
                        p="1rem"
                        bg="white"
                        shadow="2"
                        border="1px solid"
                        borderColor="gray200"
                        rounded="xl"
                        w={{ xs: "100%", sm: "100%" }}
                        m={{ b: "1rem" }}
                    >
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            수익률(%) 그래프
                        </Text>
                        <Line
                            data={chartData}
                            options={{
                                animation: {
                                    duration: 2000
                                },
                                responsive: true,
                                maintainAspectRatio: true,
                                tooltips: {
                                    mode: "x",
                                    intersect: false
                                },
                                legend: {
                                    display: false
                                },
                                scales: {
                                    xAxes: [
                                        {
                                            display: true,
                                            gridLines: {
                                                display: false,
                                            },
                                            scaleLabel: {
                                                display: true,

                                            },
                                            type: "time",
                                            time: {
                                                unit: "month",
                                                unitStepSize: 2
                                            },
                                        }
                                    ],
                                    yAxes: [
                                        {
                                            display: true,
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
                    </Div> {/* 수익률(%) 그래프 */}

                    {/* 매매내역 */}
                    <Div
                        p="1rem"
                        bg="white"
                        shadow="2"
                        border="1px solid"
                        borderColor="gray200"
                        rounded="xl"
                        w={{ xs: "100%", sm: "100%" }}
                        m={{ b: "0.5rem" }}
                    >
                        <Text
                            m={{ t: "1rem", b: "0.5rem" }}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            [ 매매내역 ]
                        </Text>
                        {tdList
                            ?
                            <DataTable
                                columns={columns}
                                data={tdList}
                            />
                            :
                            ""
                        }
                    </Div> {/* 매매내역 종료 */}

                    {/* 저장하기 */}
                    <Div
                        d="flex"
                        justify="center"
                    >
                        <Button
                            h="3rem"
                            w={{ xs: "50%", sm: "11rem" }}
                            bg="info700"
                            hoverBg="info600"
                            rounded="lg"
                        >
                            <Text
                                textSize="subheader"
                                textWeight="800"
                                fontFamily='ko'
                            >
                                저장하기
                            </Text>
                        </Button>
                    </Div>

                </Div>

            </Div>
        </Div>
    )
}

export default BacktestResult;