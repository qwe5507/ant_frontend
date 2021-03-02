import React, {useState, useEffect, useRef } from "react"
import { Text, Div,  Button, Input, Container} from "atomize";
import { useParams } from 'react-router-dom';
import ChartIndi2 from "../chart/ChartIndi2"
import Table from '@material-ui/core/Table'

import TableCell from '@material-ui/core/TableCell'

import TableRow from '@material-ui/core/TableRow'
import IndApi from "../../../../../api/IndApi";

function IndicatorDetail2(props) {
    console.log('시작')
    let [nums, numsbyun] = useState('')
    let [dates, datesbyun] = useState('')
    let [title, titlebyun] = useState('')
    let [chart1, chartShow1 ] = useState(true);
    let [chart2, chartShow2 ] = useState(false);
    let [chart3, chartShow3 ] = useState(false);
    let {tableName} = useParams();
    
    useEffect(() => {
      window.scrollTo(0, 0)
      
      if(tableName == 'wti')
      {
        titlebyun("WTI")
      }
      if(tableName == 'goldfor')
      {
        titlebyun("국제 금")
      }
     
      console.log("제목변경",title)
      IndApi.indicators1(tableName, 1)
      .then(res =>{
       
        numsbyun(res.data[0]["price"])
        datesbyun(res.data[0]["dates"].substring(0,10))
       
      }
      )
      .catch(err => {
        console.error('1일 수치 확인 오류(국내환율)', err);
      
        })
    }, []);

  
    return (     
      
      <div align = "center">
       <Container d="flex" flexDir="column" m={{ x: { xs: '0', md: '0' }, y: { xs: '5.5rem', md: '5.5rem' }}} >
       
       <Text
               textAlign="left"
               textSize="title"
               m={{ t: "0.5rem", b: "0.5rem" }}
               textWeight="800"
               fontFamily="ko"
               >                
               {title}
             </Text>
         
         <Div  d="flex" flexDir="row ">
         <Text
              textAlign="left"
               textSize="title"
               m={{ t: "0", b: "1rem" }}
               textWeight="800"
               fontFamily="ko"
               textColor="info700"
             >
               {nums}
         </Text>  
         <Text
             textAlign="left"
              textSize="caption"
             m={{ t: "0.5rem", b: "0.5rem" }}
             textWeight="800"
             fontFamily="ko"
             textColor="white"
       
         >
         ((
         </Text> 
         <Text
             textAlign="left"
              textSize="caption"
             m={{ t: "0.5rem", b: "0.5rem" }}
             textWeight="800"
             fontFamily="ko"
             textColor="light"
       
         >
         ({dates} 기준)
         </Text> 
         </Div>
          <Container d="flex" flexDir="row ">
        <Button onClick={() => {chartShow1(true); chartShow2(false); chartShow3(false);} } 
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            1개월
          </Button>
          <Button onClick={() => {chartShow2(true); chartShow1(false); chartShow3(false);} } 
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            3개월 
          </Button>
          <Button onClick={() => {chartShow3(true); chartShow1(false); chartShow2(false);} }
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            6개월
          </Button>
        
          </Container>

          {
            chart1 === true
            ? <ChartIndi2 num={30} tableName={tableName}/>
            : null
          }
          {
            chart2 === true
            ? <ChartIndi2 num={90} tableName={tableName}/>
            : null
          }
          {
            chart3 === true
            ? <ChartIndi2 num={180} tableName={tableName}/>
            : null
          }
         

          <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                뉴스 목록
              </Text>
          
          <Table style={{margin : '0px'}}>

            <TableRow>
              <TableCell align="left" >
              <Text
                textAlign="left"
                textSize="subheader"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
              textColor="black800"
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데... 
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
               
                </TableCell>
             
            </TableRow>
              
            <TableRow>
              <TableCell align="left" >
              <Text
                textAlign="left"
                textSize="subheader"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
              textColor="black800"
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데... 
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
               
                </TableCell>
             
            </TableRow>
            <TableRow>
              <TableCell align="left" >
              <Text
                textAlign="left"
                textSize="subheader"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
              <Text
              textColor="black800"
              >
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데... 
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다. 미국 고용 지표 악화와 인플레이션 우려에 위험자산 선호 심리가 약해졌다. 이런 가운데...
              </Text>
              <Text
              textColor="gray900"
              >이데일리 | 2021-02-19 08:08</Text>
               
                </TableCell>
             
            </TableRow>

        </Table>
        </Container>
          
      </div>
      
    )

}

export default IndicatorDetail2;