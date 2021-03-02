import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import { Line } from 'react-chartjs-2';

function BacktestResult(props) {

    let [chartDataLen, chartDataLenChange] = useState('');
    let [chartData, chartDataChange] = useState([]);

    useEffect(() => {

        var len = Object.keys(props.result).length;
        chartDataLenChange(len);

        var dataArr = [];

        for (var i = 0; i < len; i++) {
            const temp = JSON.parse(props.result[i]);

            console.log(temp);

            var labels = Object.keys(temp['mean']);
            var data = Object.values(temp['mean']);

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

            dataArr.push(dataSet);
        }

        console.log(typeof (dataArr));
        console.log(dataArr);

        chartDataChange(dataArr);

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
                h="100rem"
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

                    <Text
                        m={{ t: "1rem", b: "0.5rem" }}
                        textWeight="800"
                        textSize="title"
                        fontFamily="ko"
                    >
                        수익률
                    </Text>

                    { chartData.map((a, i) => {
                        return(    
                        <Line
                            data={ a }
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
                                                unit: "day",
                                                unitStepSize: 1
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
                        )
                    })}
                </Div>

            </Div>
        </Div>
    )
}

export default BacktestResult;