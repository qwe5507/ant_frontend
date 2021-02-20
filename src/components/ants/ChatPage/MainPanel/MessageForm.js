import React from "react"
import { Textarea, Button,  Text, Row, Col } from "atomize"


function MessageForm() {
    return (
        <div align="center">
         <Textarea
         m={{ xs: '0.5rem', md: '0.5rem' }}
         />
         <Row>
             <Col>
         <Button
            h="3rem"
             w={{ xs: "100%", sm: "40rem" }}
             bg="info700"
             hoverBg="info600"
              rounded="lg"
            
            m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
             <Text
                  textSize="subheader"
                   textWeight="800"
                   fontFamily='ko'
                  >SEND
              </Text>
        </Button>
        </Col>
        <Col>
        <Button
            h="3rem"
             w={{ xs: "100%", sm: "40rem" }}
             bg="info700"
             hoverBg="info600"
              rounded="lg"
            
            m={{ r: "1rem", b: { xs: "1rem", sm: "0" } }}
                            >
             <Text
                  textSize="subheader"
                   textWeight="800"
                   fontFamily='ko'
                  >UPLOAD
              </Text>
        </Button>
        </Col>
        </Row>

        </div>
    )
}

export default MessageForm;