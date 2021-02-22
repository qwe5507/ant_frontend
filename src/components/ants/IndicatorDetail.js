import React from "react"
import { Text, Div, Icon, Anchor, Button, Input, Container, Row, footerLinks, Col,  mediaLinks, Tag } from "atomize";
import LineChartInDetail from "./LineChartInDetail"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function IndicatorDetail() {
    console.log('asdasd')
    return (     
      
      <div align = "center" >
        <Container d="flex" flexDir="column" m={{ x: { xs: '0', md: '0' }, y: { xs: '5.5rem', md: '5.5rem' }}} >
       
        <Text
                textAlign="left"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                미국USD/원
              </Text>
          
        
          <Text
               textAlign="left"
                textSize="title"
                m={{ t: "0", b: "1rem" }}
                textWeight="800"
                fontFamily="ko"
                textColor="info700"
              >
                1,107
          </Text>   
          <Container d="flex" flexDir="row ">
        <Button
            
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
          <Button
            
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
          <Button
            
            bg="info700"
            hoverBg="info800"
            rounded="circle"
            h={{ xs: '2rem', md: '2rem' }}
            w={{ xs: '5rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            1년
          </Button>
        
          </Container>
      
          <LineChartInDetail/>
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

export default IndicatorDetail;