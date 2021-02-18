import React from "react"
import { Text, Div, Icon, Anchor, Button, Input, Container, Row, footerLinks, Col,  mediaLinks } from "atomize";
import LineChartIn from "./LineChartIn"
import LineChartIn2 from "./LineChartIn2"
import LineChartIn3 from "./LineChartIn3"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

function Indicators() {
    console.log('asdasd')
    return (     
      
      <div align = "center" >
        <Container d="flex" flexDir="row" align="center">
        <Div 
            d="flex"
            flexDir="column"
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "19.5rem" }}
            maxW="100%"
          
            m={{ xs: "0rem", md: "5" }}
            
            top="0"
            rounded="xl"
            h={{ lg: "24rem" }}
          
            bg="white"
            shadow="4"
            p="2rem"
            
          >
            <Div flexGrow="1">
              <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                미국USD/원
              </Text>
              <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
                textColor="info700"

              >
                1,107
              </Text>
              
            </Div>
            <LineChartIn/>
          </Div>
          <Div
            d="flex"
            flexDir="column"
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "19.5rem" }}
            maxW="100%"
           
            m={{ xs: "5rem", md: "50" }}
            
            top="0"
            rounded="xl"
            h={{ lg: "24rem" }}
          
            bg="white"
            shadow="4"
            p="2rem"
            
          >
            <Div flexGrow="1">
            <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                미국USD/원
              </Text>
              <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
                textColor="info700"

              >
                1,107
              </Text>
             
            </Div>
            <LineChartIn2/>
          </Div>
                  <Div 
            d="flex"
            flexDir="column"
            border="1px solid"
            borderColor="gray200"
            w={{ xs: "100%", md: "19.5rem" }}
            maxW="100%"
          
            m={{ xs: "0rem", md: "10" }}
            
            top="0"
            rounded="xl"
            h={{ lg: "24rem" }}
          
            bg="white"
            shadow="4"
            p="2rem"
            
          >
            <Div flexGrow="1">
            <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
              >
                미국USD/원
              </Text>
              <Text
                textAlign="center"
                textSize="title"
                m={{ t: "0.5rem", b: "0.5rem" }}
                textWeight="800"
                fontFamily="ko"
                textColor="info700"

              >
                1,107
              </Text>
              
              
            </Div>
            <LineChartIn3/>
          </Div>
          </Container>
          <Container d="flex" flexDir="row" align="center">
          <Button
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >환전고시 환율
                  </Text>
           </Button>
           <Button
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >국제시장 환율
                  </Text>
           </Button>
           <Button
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >유가·금시세
                  </Text>
           </Button>
           <Button
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >유가·금시세
                  </Text>
           </Button>
           <Button
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >국내 시장 금리
                  </Text>
           </Button>
           </Container>
           <Div>

      <Container>
      <Table style={{margin : '60px'}}>
          <TableHead>
            <TableRow>
              <TableCell align="center">FistName</TableCell>
              <TableCell align="center">FistName</TableCell>
              <TableCell align="center">LastName</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
              <TableRow>
                <TableCell></TableCell>
                <TableCell ></TableCell>
                <TableCell ></TableCell>

              </TableRow>
        
          </TableBody>
        </Table>
   
      </Container>
    </Div>
      </div>
      
    )

}

export default Indicators;