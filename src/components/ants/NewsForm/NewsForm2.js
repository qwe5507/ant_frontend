import React from "react"
import { Paper, Tag, Text, Div, Icon, Anchor, Button, Input, Col, Row, Label } from "atomize"
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { FixedSizeList } from 'react-window';

const Column = () => {
  // props의 구조는 { data, style, index, isScrolling }으로 되어있다.

  return (
  <div>
   <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  금융
</Div>

      </ListItem>
      <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  부동산
</Div>

      </ListItem>
  

      <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  코스닥
</Div>

      </ListItem>
  
      <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  코스피
</Div>

      </ListItem>

  
      <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  나스닥
</Div>

      </ListItem>
  


      <ListItem> 
<Div
  bg="gray200"
  d="flex"
  align="center"
  p="0.7rem"
  m={{
    l: '-1rem',
  }}
  w="70rem"
  
>
  다우
</Div>

      </ListItem>
    </div>
  );
};

const NewsForm2 = () => (
  <Div
    d="flex"
    flexDir="column"
    border="1px solid"
    borderColor="gray200"
    w={{ xs: "100%", md: "23rem" }}
    maxW="100%"
    pos={{ xs: "static", md: "absolute" }}
    m={{ xs: "1rem", md: "-2rem" }}
    top="0"
    rounded="xl"
    h={{ lg: "24rem" }}
    bg="white"
    shadow="4"
    p="2rem"
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
      키워드 뉴스
      </Text>
      </Col>
      <Col size="7">
      <Label
             m={{ l: "8rem" }}
          
            align="center"
            textWeight="600"
            >
      <Icon name="Add" size="30px" />
      </Label>
      </Col>
      </Row>
     </Div>  

     <FixedSizeList height={290} width={"100%"} itemSize={46} itemCount={1}>
    {Column}
    </FixedSizeList>

  </Div>
)

export default  NewsForm2
