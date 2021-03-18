
import React, { useEffect, useState } from "react";
import {HorizontalBar, Bar} from 'react-chartjs-2';
import IndApi from "../../../../../api/IndApi";
function CorrKorExe(props){

  let [chartData, chartDataChange] = useState([]);

  useEffect(() => {
  
        var dataArr = [];
        let datachart = []
        var dataSet = []
        IndApi.corrExe([props.nums, props.symbol])
    .then(res=>{
      const temp = JSON.parse(res.data.data.replaceAll("'", '"'));
      datachart = [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9]]

      chartDataChange({
        labels:  [temp[10], temp[11], temp[12], temp[13], temp[14], temp[15], temp[16], temp[17], temp[18], temp[19]],

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

export default  CorrKorExe; 
