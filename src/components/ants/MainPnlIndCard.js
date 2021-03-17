import React, { useEffect, useState } from "react"

import { Text, Div, Image, Radiobox, Label } from "atomize"

import flagKo from "../../images/flags/ko.png"
import flagUs from "../../images/flags/us.png"

import { Link } from 'react-router-dom';

import { Line } from 'react-chartjs-2';

function MainPnlIndCard(props) {

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
                    textSize="body"
                    textAlign="left"
                    w="4.4rem"
                >
                    {props.chartData.name}
                </Text>
                <Text
                    textWeight="800"
                    fontFamily="ko"
                    textAlign="left"
                    w="3rem"
                >
                    {props.chartData.price}
                </Text>
                <Text
                    textWeight="800"
                    fontFamily="ko"
                    textColor={props.chartData.changedate > 0 ? "danger700" : "info700"}
                    textAlign="left"
                    w="3rem"
                >
                    {props.chartData.changedate > 0 ? '+' : ''}{props.chartData.changedate} %
                </Text>
                <Div
                    w="2rem"
                    overflow="hidden"
                >
                    <Line
                        data={props.chartData.dataSet}
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