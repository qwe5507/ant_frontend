import React, { useState, useEffect, useRef } from "react"
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { Div, Text } from "atomize"
    //참고사이트
    //https://github.com/rafaelklaessen/react-tradingview-widget
function Stucks() {
    return (
 
        <Div
        p={{ t: { xs: "3rem", md: "8rem" } }}
        >
        <Text tag="h1" textSize="display1" m={{ b: "4rem" }} textAlign="center">
            종목 차트
        </Text>  
        <div>
        <TradingViewWidget
         symbol="KOSPI" 
         theme={Themes.DARK}
         locale="fr"
         />
        </div>
        </Div>

    )
}

export default Stucks;