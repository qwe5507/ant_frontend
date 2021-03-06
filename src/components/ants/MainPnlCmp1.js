import React, { useEffect, useState } from "react"
import { Text, Div, Label, Radiobox } from "atomize"
import { Link } from 'react-router-dom';
import TestApi from "../../api/TestApi";
import MainPnlIndShimmer from "./MainPnlIndShimmer";
import MainPnlIndCard2 from './MainPnlIndCard2';
function MainPnlCmp1() {

  let [sortStocks, sortStocksChange] = useState("상승순");
  let [stocksData, stocksDataChange] = useState();

  useEffect(() => {
    TestApi.stockRank(sortStocks)
      .then(res => {
        var temp = res.data;
        var tempData = [];

        for (var i = 0; i < temp.length; i++) {

          var dataSet = {
            datasets: [
              {
                datasetStrokeWidth: 10,
                type: "line",
                borderCapStyle: "round",
                borderColor: temp[i]['change'] > 0 ? "rgba(244, 84, 29, 1)" : "rgba(2, 132, 254, 1)",
                borderWidth: 3,
                backgroundColor: temp[i]['change'] > 0 ? "rgba(251, 207, 208, 1)" : "rgba(179, 218, 255, 1)",
                pointHoverRadius: 0,
                pointDot: false,
                pointRadius: 0,
                pointDotRadius: 0,
              }
            ]
          }


          var wholeData = {
            code: temp[i]['code'],
            name: temp[i]['name'],
            price: temp[i]['price'],
            change: temp[i]['change'],
            dataSet: dataSet
          }
          tempData.push(wholeData);
          console.log(tempData)
        }
        stocksDataChange(tempData);


      })
      .catch(error => {
        console.log(error);
      })
  }, [sortStocks]);

  return (
    <Div
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "25rem" }}
      maxW="100%"
      pos={{ xs: "static", md: "relative" }}
      m={{ xs: "1rem", md: "1rem" }}
      top="0"
      p={{
        x: { xs: "0.5rem", sm: "1.5rem" },
        b: { xs: "2rem", sm: "1.5rem" },
        t: "1.5rem",
      }}
      h={{ xs: "auto", md: "27rem" }}
      bg="white"
      shadow="2"
      rounded="xl"

    >
      <Div
        d="flex"
        align="center"
        justify="space-between"
        flexDir="row"
        p={{
          x: { xs: "0.5rem", sm: "1.5rem" },
        }}
      >
        <Text
          m={{ b: "0.5rem" }}
          textWeight="1000"
          textSize="title"
          fontFamily="ko"
        >
          어제 시황
            </Text>
        <Div
          d="flex"
          flexDir="row"
        >
          <Label
            align="center"
            textWeight="800"
            fontFamily="ko"
            m={{ t: "0.4rem", r: "0.5rem" }}
          >
            <Radiobox
              onChange={() => sortStocksChange('상승순')}
              checked={sortStocks === '상승순'}
              name="count"
            />
                상승순
            </Label>
          <Label
            align="center"
            textWeight="800"
            fontFamily="ko"
            m={{ t: "0.4rem" }}
          >
            <Radiobox
              onChange={() => sortStocksChange('하락순')}
              checked={sortStocks === '하락순'}
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
          textWeight="800"
          fontFamily="ko"
          textAlign="left"
          m={{ b: "1rem" }}
          p={{
            x: { xs: "0.5rem", sm: "1.5rem" },
          }}
        >
          지난 하루 변동폭이 큰 종목입니다. (오후 4시 기준)
        </Text>
        {stocksData ?
          "" :
          <Div>
            <MainPnlIndShimmer />
            <MainPnlIndShimmer />
            <MainPnlIndShimmer />
            <MainPnlIndShimmer />
          </Div>
        }

        {stocksData && stocksData.map((a, i) => {
          return (
            <Div>
              <MainPnlIndCard2 stocksData={a} />
            </Div>
          )

        })}

        <Link to="/StocksList">
          <Text
            textWeight="800"
            textSize="subheader"
            fontFamily="ko"
            m={{ t: "1.8rem" }}
          >
            종목 더보기 →
                </Text>
        </Link>
      </Div>
    </Div>
  )
}

export default MainPnlCmp1;
