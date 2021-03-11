import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Chartjs from "chart.js";
import { Text, Icon, Div } from "atomize";
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
@media all and (min-width: 550px){
  width: 380px;
  
  }

@media all and (min-width: 700px){
  width: 500px;
 
  }
 
@media all and (min-width:1000px){
  width: 600px;
  
  }
 
  @media all and (min-width:1140px){
    width: 900px;
   
  }

  @media all and (min-width:1300px){
    width: 1140px;
    
  }
  
  display: flex;
 justify-content: center;
  align-items: center;
  
  height: 350px;
`;


const CorrKor = (props) => {
  let datachart = []
  const chartContainer = useRef(null);

  const reloadJipyoList = () => {
    IndApi.corrAbs2(props.nums)
    .then(res=>{
      console.log("데이터 확인", res.data["data"])
      const temp = JSON.parse(res.data.data);
      console.log("파싱작업", temp)
      datachart = temp
      console.log(datachart)
      let ctx = chartContainer.current.getContext("2d");
      new Chartjs(ctx, {
        type: 'bar',
        data: {
            labels: ["비트코인", "미 10년 채권수익률", "미 2년 채권수익률", "달러인덱스", "국제 금", "WTI", "달러/유로", "엔/달러", "파운드/달러", "위안/달러"],
            datasets: [{
                //label: '# of Votes',
                data: datachart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
            maintainAspectRatio: true, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },
            legend: {
              display: false
            },
        }
    });
    })
    .catch(err => {
      console.error('상관계수리스트 오류', err);
      alert('조회오류');
    })
}
     useEffect(() => {
    
      reloadJipyoList();
    
     }, [chartContainer]);

  return (
    
    <Section>
      
      <Container >
      <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
                >
                {
                  (props.nums == 30) 
                  ?
                  (
                    "1개월"
                  ) : (
                    (props.nums == 90) 
                    ?
                    (
                      "3개월"
                    ) : (
                      (props.nums == 180) 
                      ?
                      (
                        "6개월"
                      ) :
                      ''
                    )
                  )
                 
                }
                간의 지표별 상관계수
      </Text>
      <Div d="flex" flexDir="row">
      <Icon name="Checked" size="20px"  m={{ t: "0.5rem", b: "1rem" }}/>
        <Text
            fontColor="dark"
            textAlign="left"
            textSize="subheader"
            m={{ t: "0.5rem", b: "1rem" }}
            textWeight="600"
            fontFamily="ko"
         >
          상관계수는 1에 가까울수록 비례 관계를, -1에 가까울수록 반비례 관계를 보입니다.
        </Text>
        </Div>
        <Canvas>
        
          <canvas ref={chartContainer} width="1140px" height="250px"/>
        </Canvas>
        
      </Container>
    </Section>
  );
};

export default CorrKor;
