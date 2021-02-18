import React from "react"
import { Text, Div, Icon, Anchor, Button, Input, Container, Row, footerLinks, Col,  mediaLinks, Tag } from "atomize";
import LineChartIn from "./LineChartIn"
import LineChartIn2 from "./LineChartIn2"
import LineChartIn3 from "./LineChartIn3"
import LineChartInDetail from "./LineChartInDetail"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

function IndicatorDetail() {
    console.log('asdasd')
    return (     
      
      <div align = "center" >
        <Container d="flex" flexDir="column" m={{ x: { xs: '0', md: 0 }, y: { xs: 0, md: '6rem' }}} >
       
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
            h={{ xs: '0.5rem', md: '2rem' }}
            w={{ xs: '2rem', md: '5rem' }}
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
            h={{ xs: '0.5rem', md: '2rem' }}
            w={{ xs: '2rem', md: '5rem' }}
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
            h={{ xs: '0.5rem', md: '2rem' }}
            w={{ xs: '2rem', md: '5rem' }}
            m='0.5rem'
            shadow="3"
            hoverShadow="4"
          >
            1년
          </Button>
          </Container>
      

              <LineChartInDetail/>
          </Container>
          
                  
      
    
    
      </div>
      
    )

}

export default IndicatorDetail;