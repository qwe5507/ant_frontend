

import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import { Line } from 'react-chartjs-2';

function BacktestResult2(props) {

    let [chartData, chartDataChange] = useState([]);

    useEffect(() => {
      const temp2 = JSON.parse(props.result.replaceAll("'", '"'));
        var dataArr = [];
        let labeleurusd = []
        let charteurusd = []
        for (var i = 0; i < temp2.length/2 ; i++){
          labeleurusd.push(temp2[i]) 
        }
    
        for (var i = (temp2.length/2); i < temp2.length ; i++){
          charteurusd.push(temp2[i]) 
        }
        
            var dataSet = {
                labels: labeleurusd,
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
                        data: charteurusd
                    }
                ]
            }

            dataArr.push(dataSet);
        

        chartDataChange(dataArr);

    }, [props]);

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
                        )
                    })}
                </Div>

            </Div>
        </Div>
    )
}

export default BacktestResult2;