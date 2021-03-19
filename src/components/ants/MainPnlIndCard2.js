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


    function textLengthOverCut(txt, len, lastTxt) {
        if (len == "" || len == null) { // 기본값
            len = 7;
        }
        if (lastTxt == "" || lastTxt == null) { // 기본값
            lastTxt = "...";
        }
        if (txt.length > len) {
            txt = txt.substr(0, len) + lastTxt;
        }
        return txt;
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
                    {textLengthOverCut(props.stocksData.name)}
                </Text>
                <Text
                    fontFamily="ko"
                    textAlign="left"
                    w="3rem"
                >
                    {props.stocksData.price}
                </Text>
                <Text
                    fontFamily="ko"
                    textColor={props.stocksData.change > 0 ? "danger700" : "info700"}
                    textAlign="left"
                    w="4rem"
                >
                    {props.stocksData.change > 0 ? '+' : ''}{props.stocksData.change} %
                </Text>
            </Div>
        </Div>
    )

}

export default MainPnlIndCard;