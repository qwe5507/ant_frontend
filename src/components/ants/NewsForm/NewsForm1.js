import React, { useState, useEffect } from "react"
import { Text, Div, Col, Row, Icon, Label, Radiobox } from "atomize"
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';

const Column = () => {
  return (
    <ListItem>
      <Div
        p="1rem"
        bg="white"
        shadow="2"
        rounded="xl"
        m={{ b: "0.5rem" }}
      >
        <Div
          d="flex"
          justify="space-between"
        >
          <Text
            textWeight="800"
            fontFamily="ko"
            textAlign="left"
          >
            [연합] 9시간전
          </Text>
          <Icon
            name="Options"
            size="20px"
            color="black300"
            cursor="pointer"
          />
        </Div>
        <Text
          textWeight="800"
          fontFamily="ko"
        >
          위험자산 선호 심리 둔화 속 미중 갈등..1100원 중반대 전망
          </Text>
        <Text
          textWeight="800"
          fontFamily="ko"
          textColor="danger700"
        >
          삼성전자 +1.2%
          </Text>
      </Div>
    </ListItem>
  );
};

function NewsForm1() {

  let [selectedSwitchValue, selectedSwitchValueChange] = useState(false);
  let [sortNews, sortNewsChange] = useState('최신순');

  return (
    <Div
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "22rem" }}
      maxW="100%"
      pos={{ xs: "static", md: "relative" }}
      m={{ xs: "1rem", md: "1rem" }}
      top="0"
      p={{
        x: { xs: "2rem", sm: "1.5rem" },
        b: { xs: "2rem", sm: "1.5rem" },
        t: "1.5rem",
      }}

      h="24rem"
      bg="white"
      shadow="4"
      rounded="xl"
    >
      <Row>
        <Col size="5">
          <Text
            textAlign="center"
            textSize="title"
            textWeight="800"
            fontFamily="ko"
          >
            오늘의 뉴스
          </Text>
        </Col>
        <Col size="7">
          <Div
            d="flex"
            justify="flex-end"
          >
            <Label
              align="center"
              textWeight="500"
              fontFamily="ko"
              m={{ t: "0.4rem", r: "0.5rem" }}
            >
              <Radiobox
                onChange={() => sortNewsChange('관련도순')}
                checked={sortNews === '관련도순'}
                name="count"
              />
                관련도순
            </Label>
            <Label
              align="center"
              textWeight="500"
              fontFamily="ko"
              m={{ t: "0.4rem" }}
            >
              <Radiobox
                onChange={() => sortNewsChange('최신순')}
                checked={sortNews === '최신순'}
                name="count"
              />
                최신순
            </Label>
          </Div>
        </Col>
      </Row>
      <FixedSizeList
        height={290}
        width="100%"
        itemSize={46}
        itemCount={1}
      >
        {Column}
      </FixedSizeList>
    </Div>

  )
}

export default NewsForm1