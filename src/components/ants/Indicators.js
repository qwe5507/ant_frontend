import React, {useState}  from "react"
import { Text, Div, Link, Button, Input, Container, Row, footerLinks, Col,  mediaLinks } from "atomize";
import IndicatorForm1 from "./IndicatorCompo/IndicatorForm1"
import IndicatorForm2 from "./IndicatorCompo/IndicatorForm2"
import IndicatorForm3 from "./IndicatorCompo/IndicatorForm3"
import IndiTable1 from "./IndicatorCompo/IndiTable1"
import IndiTable2 from "./IndicatorCompo/IndiTable2"
import IndiTable3 from "./IndicatorCompo/IndiTable3"
import IndiTable4 from "./IndicatorCompo/IndiTable4"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function Indicators() {

  let [indi1, indiShow1 ] = useState(true);
  let [indi2, indiShow2 ] = useState(false);
  let [indi3, indiShow3 ] = useState(false);
  let [indi4, indiShow4 ] = useState(false);

    console.log('IndiPage Start')
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
              minW={{ xs: "100%", md: "44rem", lg: "70rem" }}
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

          <Container d="flex" 
          flexDir= {{ xs: "column", md: "row" }}
          align="center"
          m={{ xs: "-8.5rem", md: "-3.5rem" }}
          >  
          <Button onClick={() => {indiShow1(true); indiShow2(false); indiShow3(false); indiShow4(false);} } 
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"
                m={{ r: "1rem", b: { xs: "1rem", sm: "0.5rem" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >전체보기
                  </Text>
           </Button>
           <Button onClick={() => {indiShow2(true); indiShow1(false); indiShow3(false); indiShow4(false); } }
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0.5rem" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >환율
                  </Text>
           </Button>
           <Button onClick={() => { indiShow3(true); indiShow1(false); indiShow2(false); indiShow4(false); }}
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0.5rem" } }}
                            >
                     <Text
                        textSize="subheader"
                          textWeight="800"
                          fontFamily='ko'
                     >유가·금시세
                  </Text>
           </Button>
           <Button onClick={() => {  indiShow4(true); indiShow1(false); indiShow2(false);  indiShow3(false);} } 
              h="3rem"
                w={{ xs: "100%", sm: "11rem" }}
                    bg="info700"
                       hoverBg="info600"
                          rounded="lg"                           
                m={{ r: "1rem", b: { xs: "1rem", sm: "0.5rem" } }}
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
      {
        indi1 === true
        ? <IndiTable1/>
        : null
      }
      {
        indi2 === true
        ? <IndiTable2/>
        : null
      }
      {
        indi3 === true
        ? <IndiTable3/>
        : null
      }
      {
        indi4 === true
        ? <IndiTable4/>
        : null
      }
      </Container>
    </Div>
      </div>
      
    )

}

export default Indicators;