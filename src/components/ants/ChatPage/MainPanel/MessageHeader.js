import React from "react"

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon, Col, Row } from "atomize"

function MessageHeader() {
    return (
        <div>
            <Div p={{ t: { xs: 0, md: 0 } }}>
            <Row>
                <Col><Text
                textAlign="left"
                textSize="display1"
                textWeight="800"
                fontFamily="ko"
                m={{ b: "1rem" }}
              >
                홍길동
              </Text></Col>
              <Col>
              <Input
            placeholder="Search"
            suffix={
                <Icon
                name="Search"
                size="20px"
                cursor="pointer"
                onClick={() => console.log("clicked")}
                pos="absolute"
                top="50%"
                right="1rem"
                transform="translateY(-50%)"
                />
            }
             />
             </Col>
            </Row>
            
            
            </Div>


        </div>
    )
}

export default MessageHeader;