
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chartjs from "chart.js";
import IndApi from "../../../../../api/IndApi";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Canvas = styled.div`
  justify-content: center;
  align-items: center;
  width: 1140px;
  height: 350px;
`;

const ChartKor = (props) => {
  let labeleurusd = []
  let charteurusd = []
  let datachart = []
  const chartContainer = useRef(null);

  const reloadJipyoList = () => {
    let temp = []
    //var num = 90
    IndApi.chartIndi(props.nums)
     .then(res =>{
 
        charteurusd = res.data      
            
        for (var i = 0; i < charteurusd.length ; i++){
          labeleurusd.push(charteurusd[i]["dates"])
        }

        for (var i = 0; i < charteurusd.length ; i++){
          datachart.push( { x: labeleurusd[i].substring(0,10), y: charteurusd[i]["rates"]},)
       }

         let ctx = chartContainer.current.getContext("2d");
         let gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(171, 242, 0, 0.3)");
        gradient.addColorStop(1, "rgba(171, 242, 0, 0.1)");
         
        new Chartjs(ctx, {
          type: "line",
          data: {
            labels: labeleurusd,
            datasets: [
              {
                datasetStrokeWidth : 10,
                type: "line",         
                borderCapStyle: "round",
                borderColor: "rgba(171, 242, 0, 1)",
                borderWidth : 3,
                backgroundColor: gradient,
                pointBackgroundColor: "rgba(171, 242, 0, 0.2)",        
                pointHoverRadius: 0,
                pointDot : false,
                pointRadius: 0,
                pointDotRadius: 0,
                pointHoverBackgroundColor: "rgba(171, 242, 0, 0.2)",
                data : datachart
              }
            ]
          },
          options: {
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
                  scaleLabel: {
                    display: true,
                   
                  },
                  type: "time",
                  time: {
                    unit: "day",
                    unitStepSize: 7
                  },
                  ticks: {
                    fontSize: 10
                  }
                }
              ],
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: false,              
                  },
                  ticks: {
                    fontSize: 9,
                    beginAtZero: false,
                    callback: function (value, index, values) {
                      return value;
                    }
                  }
                }
              ]
            }
          }
        });
      
         })        
         .catch(err => {
         console.error('지표리스트 오류', err);
         alert('조회오류');
         })
    //   jipyos = ["1960", "1970", "1980", "1990", "2000", "2010", "2020"];
    //  jipyos = temp
     
     }
 
     useEffect(() => {
    
      reloadJipyoList();
    
     }, [chartContainer]);

  return (
    <Section>
      <Container>
        
        <Canvas>
          <canvas ref={chartContainer} />
        </Canvas>
      </Container>
    </Section>
  );
};

export default ChartKor;
