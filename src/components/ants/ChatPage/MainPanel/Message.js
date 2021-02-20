import React from "react"
import MessageHeader from './MessageHeader';

import { Button, Container, Text, Div, Dropdown, Anchor, Input, Icon, Row, Col } from "atomize"

function MainPanel() {
    return (
        <div>
        <Div flexDir="column" 
        bg="gray200"
        d="flex"
        align="left"
        p="1rem"
        >
       <Row>
        
        <Text
        textAlign="left"
        textSize="subheader"
        textWeight="800"
        fontFamily="ko"
       // m={{ xs: '0.5rem', md: '0.5rem' }}
        >
        홍길동
        </Text>
        <Text
        textAlign="left"
        textSize="tiny"
        textWeight="800"
        fontFamily="ko"
        m={{ xs: '0.5rem', md: '0.5rem' }}
        >
        6hours ago
        </Text>
        
        </Row>

        <Row>
        <Col>
        <Text
        textAlign="left"
        textSize="subheader"
        textWeight="500"
        fontFamily="ko"
        m={{ xs: 0, md: 0 }}
        >
        안녕하세요
        </Text>
        </Col>
        </Row>
        </Div>
        </div>
    )
}

export default MainPanel;