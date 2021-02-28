
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chartjs from "chart.js";
import IndApi from "../../../api/IndApi";

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
  width: 100%;
  height: 210px;
`;

const LineChartIn = () => {
  let labeleurusd = []
  let charteurusd = []
  const chartContainer = useRef(null);

  const reloadJipyoList = () => {
    let temp = []
    IndApi.labelDalAllList()
     .then(res =>{
        
        charteurusd = res.data
         console.log("확인1")
         console.log(charteurusd[6]["dates"])
         labeleurusd = [charteurusd[0]["dates"], charteurusd[1]["dates"], charteurusd[2]["dates"], charteurusd[3]["dates"], charteurusd[4]["dates"], charteurusd[5]["dates"], charteurusd[6]["dates"]]
          console.log("마지막 확인")
        //  console.log(jipyos2)  

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
                data: [
                  { x: labeleurusd[0].substring(0,10), y: charteurusd[0]["rates"]},
                  { x: labeleurusd[1].substring(0,10), y: charteurusd[1]["rates"] },
                  { x: labeleurusd[2].substring(0,10), y: charteurusd[2]["rates"]  },
                  { x: labeleurusd[3].substring(0,10), y: charteurusd[3]["rates"]  }, 
                  { x: labeleurusd[4].substring(0,10), y: charteurusd[4]["rates"]  },
                  { x: labeleurusd[5].substring(0,10), y: charteurusd[5]["rates"]  },
                  { x: labeleurusd[6].substring(0,10), y: charteurusd[6]["rates"]  }
                
                ]
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
                    unitStepSize: 1
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
       // console.log(typeof res.data)
       // jipyos = res.data
        // this.setState({jipyos: res.data});
         })        
         .catch(err => {
         console.error('지표리스트 오류', err);
         alert('조회오류');
         })
    //   jipyos = ["1960", "1970", "1980", "1990", "2000", "2010", "2020"];
    //  jipyos = temp
     
     }
 
     useEffect(() => {
    
   
      // let gradient = ctx.createLinearGradient(0, 0, 0, 300);
      // gradient.addColorStop(0, "rgba(19, 96, 96, 0.3)");
      // gradient.addColorStop(1, "rgba(19, 96, 96, 0.1)");
      
     
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

export default LineChartIn;
