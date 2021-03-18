import React, { useEffect, useState } from "react"

import { Text, Div, Image, Radiobox, Label } from "atomize"

import flagKo from "../../images/flags/ko.png"
import flagUs from "../../images/flags/us.png"

import { Link, useHistory } from 'react-router-dom';

import { Line } from 'react-chartjs-2';

function MainPnlIndCard(props) {

    let history = useHistory();

    function handleClick(stockId) {
        history.push('/Stocks/' + stockId)
    }
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

                <Text
                    textWeight="1000"
                    fontFamily="ko"
                    textSize="body"
                    textAlign="left"
                    w="8.4rem"
                    cursor="pointer"
                    onClick={() => handleClick(props.stocksData.code)}
                >
                    {props.stocksData.name}
                </Text>
                <Text
                    textWeight="800"
                    fontFamily="ko"
                    textAlign="center"
                    w="6rem"
                >
                    {props.stocksData.price}
                </Text>
                <Text
                    textWeight="800"
                    fontFamily="ko"
                    textColor={props.stocksData.change > 0 ? "danger700" : "info700"}
                    textAlign="center"
                    w="8rem"
                >
                    {props.stocksData.change > 0 ? '+' : ''}{props.stocksData.change} %
                </Text>
                <Div
                    w="2rem"
                    overflow="hidden"
                >
                    <Line
                        data={props.stocksData.dataSet}
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
    )

}

export default MainPnlIndCard;