import React, { useState, useEffect, useRef } from "react"
import TradingViewWidget, { Themes, symbol } from 'react-tradingview-widget';
import { Div, Text } from "atomize"
import { useParams } from 'react-router-dom';

    //참고사이트
    //https://github.com/rafaelklaessen/react-tradingview-widget



function Stocks() {

    let { stocksId } = useParams();
    console.log(stocksId)
    return (
 
        <Div
        p={{ t: { xs: "3rem", md: "rem"} }}
    
        >
        <Text tag="h1" textSize="display1" m={{ b: "4rem", y:"10rem"}} textAlign="center">
            종목 번호 : {stocksId} 
        </Text>  
        <div>
        <TradingViewWidget
        //  interval = '5'
         width="100%"
         height="600"
         symbol={stocksId} 
         theme={Themes.DARK}
         locale="kr"        
         allow_symbol_change={false}
     />
        </div>
        </Div>

    )
}

export default Stocks;