import React, { useEffect, useState } from "react";
import { Div } from "atomize";
import IndApi from "../../../../../api/IndApi";
import { Line } from 'react-chartjs-2';


function ChartIndi1(props) {

  let [chartData, chartDataChange] = useState([]);

  useEffect(() => {
    let datachart = []
    var dataArr = [];
    var  labeleurusd = []
    var charteurusd = []
    IndApi.indicators1(props.tableName, props.num)
    .then(res =>{
      charteurusd = res.data   
      
      for (var i = 0; i < charteurusd.length ; i++){
        labeleurusd.push(charteurusd[i]["dates"].substring(0,10))
      }
     
      for (var i = 0; i < charteurusd.length ; i++){
        datachart.push( charteurusd[i]["price"])
     }
    
     var dataSet ={
       
              labels: labeleurusd,
              datasets: [
                  {
                      datasetStrokeWidth: 10,
                      type: "line",
                      borderCapStyle: "round",
                      borderColor: "rgba(89, 105, 255, 1)",
                      borderWidth: 3,
                      backgroundColor: "rgba(89, 105, 255, 0.3)",
                      pointBackgroundColor: "rgba(89, 105, 255, 0.1)",
                      pointHoverRadius: 0,
                      pointDot: false,
                      pointRadius: 0,
                      pointDotRadius: 0,
                      pointHoverBackgroundColor: "rgba(89, 105, 255, 0.2)",
                      data:datachart
                  }
              ]
          }
          dataArr.push(dataSet);
          chartDataChange(dataArr);
        })
  

  }, [props]);

  return (
    <Div>
                { chartData.map((a, i) => {
                    return(    
                    <Line  width={200} height={350}
                        data={ a }
                        options={{
                            animation: {
                                duration: 2000
                            },
                            responsive: true,
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
                                        display: true,
                                        gridLines: {
                                            display: true,
                                        },
                                        scaleLabel: {
                                            display: true,

                                        },
                                        type: "time",
                                        time: {
                                            unit: "day",
                                            unitStepSize: 7
                                        },
                                    }
                                ],
                                yAxes: [
                                    {
                                        display: true,
                                        gridLines: {
                                            display: true,
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
)
}

export default ChartIndi1;