import React, { useEffect, useState } from "react";

import { Button, Container, Text, Div, Icon, Input, Anchor } from "atomize";

import { Line } from 'react-chartjs-2';
import IndApi from "../../../api/IndApi";
function LineChartIn3(props) {

    let [chartData, chartDataChange] = useState([]);

    useEffect(() => {
      IndApi.indicators1("wti", 7)
     .then(res =>{
      var dataArr = [];
      let labeleurusd = [res.data[0]["dates"].substring(0,10), res.data[1]["dates"].substring(0,10), res.data[2]["dates"].substring(0,10), res.data[3]["dates"].substring(0,10), res.data[4]["dates"].substring(0,10), res.data[5]["dates"].substring(0,10), res.data[6]["dates"].substring(0,10)]

      let charteurusd = [ res.data[0]["price"],  res.data[1]["price"],  res.data[2]["price"],
      res.data[3]["price"],  res.data[4]["price"],  res.data[5]["price"], res.data[6]["price"]]
          var dataSet = {
              labels: labeleurusd,
              datasets: [
                  {
                      datasetStrokeWidth: 10,
                      type: "line",
                      borderCapStyle: "butt",
                      borderColor: "rgba(255, 145, 36, 1)",
                      borderWidth: 3,
                      backgroundColor: "rgba(255, 145, 36, 0.3)",
                      pointBackgroundColor: "rgba(255, 145, 36, 0.1)",
                      pointHoverRadius: 0,
                      pointDot: false,
                      pointRadius: 2,
                      pointDotRadius: 0,
                      pointHoverBackgroundColor: "rgba(255, 145, 36, 0.2)",
                      data: charteurusd,
                      lineTension: 0
                  }
              ]
          }

          dataArr.push(dataSet);
      

      chartDataChange(dataArr);

    })
        
    }, [props]);

    return (
      <Div
      d="flex"
      justify="center"
      w={{ xs: "100%", lg: "100%" }}
  >
      <Div
          w={{ xs: "100%", md: "-23rem" }}
          maxW="120%"
          maxH="120%"
          pos={{ xs: "static", md: "static" }}
          m={{ xs: "1rem", md: "0" }}
          top="0"
         
          h="12rem"
          
      >
          <Div
              flexGrow="1"
              textAlign="center"
          >
            <div style={{height:"225px"}}>
                    { chartData.map((a, i) => {
                        return(    
                        <Line
                        
                            data={ a }
                            options={{
                                animation: {
                                    duration: 2000
                                },
                                responsive: true,
                             //   maintainAspectRatio: true,
                                maintainAspectRatio: false,
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
                                            display: false,
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
                        )
                    })}
                    </div>
                </Div>
                </Div>
                </Div>
       
    )
}

export default LineChartIn3;