import React from "react"
import { Text, Div, Icon, Anchor, Button, Input, Container, Row, footerLinks, Col,  mediaLinks } from "atomize";
import IndicatorForm1 from "./IndicatorCompo/IndicatorForm1"
import IndicatorForm2 from "./IndicatorCompo/IndicatorForm2"
import IndicatorForm3 from "./IndicatorCompo/IndicatorForm3"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function Indicators() {
    console.log('asdasd')
    return (     
      
      <div align = "center" >
        <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "8rem" } }}
        overflow="hidden"
        
      >
        <Container
        
        >
          <Div
            d="flex"
            justify="center"
            p={{ b: "10.5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
            
          >
            <Div
              minW={{ xs: "100%", md: "44rem", lg: "59rem" }}
              d="flex"
              align="center"
              flexDir="column"
              h={{ xs: "auto", md: "21rem", lg: "20rem" }}
              pos="relative"
            >
          
              {/* Form Component */}
              <IndicatorForm1 />
              <IndicatorForm2 />
              <IndicatorForm3 />

            </Div>
          </Div>
        </Container>
      </Div>
       
          <Container d="flex" flexDir="row" align="center"
          m={{ xs: "1rem", md: "-3.5rem" }}
          >
         
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
      <Table style={{margin : '90px'}}>
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