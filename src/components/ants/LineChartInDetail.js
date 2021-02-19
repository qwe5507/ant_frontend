
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chartjs from "chart.js";

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

const LineChartInDetail = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    let ctx = chartContainer.current.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(82, 62, 152, 0.3)");
    gradient.addColorStop(1, "rgba(82, 62, 152, 0.1)");
    new Chartjs(ctx, {
      type: "line",
      data: {
        labels: ["1960", "1970", "1980", "1990", "2000", "2010", "2020"],
        datasets: [
          {
            type: "line",         
            borderCapStyle: "round",
            borderColor: "rgba(82, 62, 152, 0.2)",
            backgroundColor: gradient,
            pointBackgroundColor: "rgba(82, 62, 152, 0.2)",        
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "rgba(82, 62, 152, 0.2)",
            data: [
              { x: "1960", y: 1047 },
              { x: "1970", y: 1048 },
              { x: "1980", y: 1101 },
              { x: "1990", y: 1102 }, 
              { x: "2000", y: 1104 },
              { x: "2010", y: 1095 },
              { x: "2019", y: 1094 },
              { x: "2020", y: 1093 }
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
                unit: "year",
                unitStepSize: 10
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
                display: true,              
              },
              ticks: {
                fontSize: 9,
                beginAtZero: true,
                callback: function (value, index, values) {
                  return value;
                }
              }
            }
          ]
        }
      }
    });
  }, [chartContainer]);

  return (

      <Container>
        
        <Canvas>
          <canvas ref={chartContainer} />
        </Canvas>
      </Container>

  );
};

export default LineChartInDetail;
