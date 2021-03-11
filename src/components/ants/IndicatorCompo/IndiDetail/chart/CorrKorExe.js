import React, {useState, useEffect, useRef } from "react";
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


const CorrKorExe = (props) => {
  let datachart = []
  const chartContainer = useRef(null);
  let [co, cobyun] = useState([]);

  const reloadJipyoList = () => {
    console.log(props.symbol)
    console.log(props.nums)
    cobyun(props.nums, props.symbol)
    console.log("넘어온것 확인", [props.nums, props.symbol] )
    
    IndApi.corrExe([props.nums, props.symbol])
    .then(res=>{
      console.log("장고에서",res.data.data.replaceAll("'", '"'))
      
      const temp = JSON.parse(res.data.data.replaceAll("'", '"'));
      datachart = [temp[0], temp[1], temp[2], temp[3], temp[4], temp[5], temp[6], temp[7], temp[8], temp[9]]
      console.log(datachart)
      let ctx = chartContainer.current.getContext("2d");
      new Chartjs(ctx, {
        type: 'bar',
        data: {
            labels: [temp[10], temp[11], temp[12], temp[13], temp[14], temp[15], temp[16], temp[17], temp[18], temp[19]],
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

export default CorrKorExe;
