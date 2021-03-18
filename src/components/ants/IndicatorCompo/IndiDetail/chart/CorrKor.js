
import React, { useEffect, useState } from "react";
import {HorizontalBar, Bar} from 'react-chartjs-2';
import IndApi from "../../../../../api/IndApi";
function CorrKor(props){

  let [chartData, chartDataChange] = useState([]);

  useEffect(() => {
  
        var dataArr = [];
        let datachart = []
        var dataSet = []
  IndApi.corrAbs2(props.nums)
    .then(res=>{
      console.log(res.data)
      const temp = JSON.parse(res.data.data);
      console.log("파싱작업", temp)
      datachart = temp
      chartDataChange({
        labels: ["비트코인", "미 10년 채권수익률", "미 2년 채권수익률", "달러인덱스", "국제 금", "WTI", "달러/유로", "엔/달러", "파운드/달러", "위안/달러"],
        datasets: [
          {
           // legend: false,
            label: '상관관계',
            backgroundColor:[
              'rgba(50, 116, 161, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(50, 116, 161, 1)',
                      'rgba(0, 0, 255, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)'
            ],
            borderColor: [
              'rgba(50, 116, 161, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(50, 116, 161, 1)',
                      'rgba(0, 0, 255, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)'
            ],
            borderWidth: 1,
            hoverBackgroundColor:[
              'rgba(50, 116, 161, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(50, 116, 161, 1)',
                      'rgba(0, 0, 255, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)'
            ],
            hoverBorderColor: [
              'rgba(50, 116, 161, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(50, 116, 161, 1)',
                      'rgba(0, 0, 255, 1)',
                      'rgba(255, 0, 0, 1)',
                      'rgba(192, 61, 62, 1)',
                      'rgba(225, 129, 44, 1)',
                      'rgba(58, 146, 58, 1)'
            ],
            data: datachart,
             maintainAspectRatio: false,
            responsive: true
          }
        ]
      })
    })
    dataArr.push(dataSet);
    chartDataChange(dataArr);
   
   }, []);

 
    return (
      <div>
       
        <HorizontalBar data={chartData} width={10} height={330} options={{ maintainAspectRatio: false }}/>
      </div>
    );
  }

export default  CorrKor; 
