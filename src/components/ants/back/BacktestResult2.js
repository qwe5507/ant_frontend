import React, { useEffect, useState } from "react";

import { Text, Div } from "atomize";

import { Line } from 'react-chartjs-2';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

function BacktestResult2(props) {

    let [chartData, chartDataChange] = useState([]);
    let [tableData, tableDataChange] = useState([]);
    let [finalData, finalDataChange] = useState('');
    let [finalData2, finalData2Change] = useState('');
   
    useEffect(() => {
      const temp2 = JSON.parse(props.result.replaceAll("'", '"'));
        var dataArr = [];
        let labeleurusd = []
        let charteurusd = []
        var data = []
           
        for (var i = 0; i < temp2.length/2 ; i++){
          labeleurusd.push(temp2[i]) 
        }
    
        for (var i = (temp2.length/2); i < temp2.length ; i++){
          charteurusd.push(temp2[i]) 
        }
        
        for (var i = 0; i <  labeleurusd.length ; i++){
            data.push({id: i+1, name: labeleurusd[i], value:  charteurusd[i] })
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
        tableDataChange(data)
        finalDataChange(charteurusd[charteurusd.length-1]*100000)
       
    }, [props]);

    useEffect(() => {
        finalData2Change(Math.round(finalData)/1000)

    }, [finalData])
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
                            100만원을 투자금으로 하였을 시 손익은 {finalData2}만원이며, 최종 수익률은 {finalData2}%입니다.
                        </Text>

                    </Div> {/* 결과 요약 종료 */}
                    <Text
                            m={{ x: { xs: '1rem', md: '1rem' }, y: { xs: '1rem', md: '1rem' }}}
                            textAlign="left"
                            textWeight="800"
                            textSize="subheader"
                            fontFamily="ko"
                        >
                            [ 수익률(%) 그래프 ]
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
                        <Table size="small" style={{margin:"8px"}}>
                       
          <TableRow>
          <TableCell align="center"><b>구분</b></TableCell>
            <TableCell align="center"><b>실행일</b></TableCell>          
            <TableCell align="center"><b>손익률</b></TableCell>
          </TableRow>
     
        <TableBody>
        {tableData.map(d => 
            <TableRow>
              <TableCell align="center">
                  {
                      d["id"] % 2 == 1 
                   ? "매수" : "매도"
                }
                </TableCell>
              <TableCell align="center">{d["name"]}</TableCell>
              <TableCell align="center">{Math.round(d["value"]*10000)/100}</TableCell>
             
            </TableRow>      
        )}   
          </TableBody>
        </Table>
        
                    </Div> {/* 매매내역 종료 */}      
                    </Div>
            </Div>
        </Div>
    )
}

export default BacktestResult2;