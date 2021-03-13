import React, { useEffect, useState } from "react"
import { Paper, Tag, Text, Div, Icon, Anchor, Button, Input, Col, Row, Label } from "atomize"
import ListItem from '@material-ui/core/ListItem';
import NewsApiService from "../../../api/NewsApi";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NewsKeywordDelete from "../NewsKeywordDelete";
import NewsKeyWordAdd from "../NewsKeyWordAdd";
import '../css/Loading.css';
function NewsForm2(){
  const userId = useSelector(state => state.user.userid);
  let [result, result변경] = useState();
  let [keyword, keywordChange] = useState();
  let [updatekeyword, updatekeywordChange] = useState();
  let history = useHistory();
  let [commentdeleteModal,commentdeleteModal변경] = useState(false);
  let [commentaddModal,commentaddModal변경] = useState(false);

  console.log('유저아이디',userId)
  function handleClick(keyword){
    history.push('/SearchResult/'+keyword)
  }

  function commentdelete(userId, data) {
    commentdeleteModal변경(true)
    updatekeywordChange(data)
  }

  function commentadd() {
    commentaddModal변경(true)
  }

  function keywordList(){
    NewsApiService.selectKeywordByUserId(userId)
      .then(response => {
        result = response.data
        console.log(result)
        keywordChange(result['keyword'].split(',').sort())
        console.log(keyword)
      })
      .catch(error => {
        console.log("NewsApiService ", error)
      });
  
  }

  useEffect(() => {
    keywordList();
  }, [userId]);

  return(
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

  h="27rem"
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
          키워드 뉴스
    </Text>
      </Col>
      <Col size="7">
        <Label
          m={{ l: "8rem" }}
          align="center"
          textWeight="600"
        >
          <Icon 
          name="Add" 
          size="30px"
          onClick={()=> commentadd() }
          />
        </Label>
      </Col>
    </Row>
  </Div>
    
  { keyword && keyword.map(function(data){
    return(
      <ListItem>
      <Div
        bg="white"
        d="flex"
        align="center"
        p="0.7rem"
        m={{
          l: '-1rem',
        }}
        w="30rem"
        cursor="pointer"
        onClick={ () => handleClick(data)}
      >
        # {data}

      </Div>
      <Icon 
        name="Cross"
        cursor="pointer"
        color="black"
        onClick={ () => commentdelete(userId, data) } 
        size="20px" />
      </ListItem>
    )
  })}

 
<NewsKeywordDelete
      keyword={updatekeyword}
      isOpen={commentdeleteModal}
      wordlist={() => keywordList() }
      // 게시판삭제실패 = {() => 키워드삭제실패변경(true)}
      onClose={() => commentdeleteModal변경(false)}
>
</NewsKeywordDelete>

<NewsKeyWordAdd
      isOpen={commentaddModal}
      wordlist={() => keywordList() }
      onClose={() => commentaddModal변경(false)}
>

</NewsKeyWordAdd>
 

</Div>


)
}

 


export default NewsForm2
