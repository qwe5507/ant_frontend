import React, { useState, useEffect } from "react"
import { Text, Div, Icon, Anchor, Button, Input, Col, Row, Switch, Label } from "atomize"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';;


const Column = () => {
  // props의 구조는 { data, style, index, isScrolling }으로 되어있다.
  return (
    <div>
      <ListItem>
        <Paper>

          <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
          >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
          <Text
            fontFamily="ko"
            textWeight="650"
          >
            원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
              </Text>
          <Text
            textColor="gray900"
          >이데일리 | 2021-02-19 08:08</Text>

        </Paper>
      </ListItem>
      <ListItem>
        <Paper>

          <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
          >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
          <Text
            fontFamily="ko"
            textWeight="650"
          >
            원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
              </Text>
          <Text
            textColor="gray900"
          >이데일리 | 2021-02-19 08:08</Text>

        </Paper>
      </ListItem>
      <ListItem>
        <Paper>

          <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
          >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
          <Text
            fontFamily="ko"
            textWeight="650"
          >
            원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
              </Text>
          <Text
            textColor="gray900"
          >이데일리 | 2021-02-19 08:08</Text>

        </Paper>
      </ListItem>
      <ListItem>
        <Paper>

          <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
          >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
          <Text
            fontFamily="ko"
            textWeight="650"
          >
            원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
              </Text>
          <Text
            textColor="gray900"
          >이데일리 | 2021-02-19 08:08</Text>

        </Paper>
      </ListItem>
      <ListItem>
        <Paper>

          <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
          >
            [외환브리핑]위험자산 선호 심리 둔화 속 美中 갈등..1100원 중반대 전망
              </Text>
          <Text
            fontFamily="ko"
            textWeight="650"
          >
            원·달러 환율이 1100원 중반대에서 지지부진한 흐름을 이어갈 전망이다.
              </Text>
          <Text
            textColor="gray900"
          >이데일리 | 2021-02-19 08:08</Text>

        </Paper>
      </ListItem>


    </div>
  );
};

const NewsForm3 = () => (
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
    <Div flexGrow="1">
      <Row>
        <Col size="5">
          <Text
            textAlign="center"
            textSize="title"
            m={{ t: "0", b: "0" }}
            textWeight="800"
            fontFamily="ko"
          >
            구독한 뉴스
      </Text>
        </Col>
        <Col size="7">
          <Label
            m={{ l: "8rem" }}

            align="center"
            textWeight="600"
          // m={{ b: "1rem" }}
          >
            <Icon name="BookmarkSolid" size="30px" />
          </Label>
        </Col>
      </Row>
      <FixedSizeList height={290} width={275} itemSize={46} itemCount={1}>
        {Column}
      </FixedSizeList>
    </Div>


  </Div>

)

export default NewsForm3
