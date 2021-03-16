import React, {useState, useEffect, useRef,  useCallback } from "react"
import { Text, Div, Button, Container, Icon, Input, Modal } from "atomize";
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IndApi from "../../../../../api/IndApi";
import AlignStartModal from "./AlignStartModal";

function CommentUsdkrw() {
  let history = useHistory();
  const loginid = useSelector(state => state.user.userid);
  const loginname = useSelector(state => state.user.nickname);
  const symbolname = "usdkrw"
  let [showModal, showModalb ] = useState(false);
 
    let [comment, commentbyun] = useState("");
    let [commentlist, commentlistbyun] = useState([]);
   
 function commentloading() {
      IndApi.firstCommentsByIndID(symbolname)
          .then(res => {
              commentlistbyun(res.data)
          })
          .catch(err => {
              console.log('댓글 원/달러 리스트 error:', err);
    });
    }

  function links(){  
    history.push("/CommentUsdkrw2/usdkrw/2");    
  }

    useEffect(() => {
      commentloading();
     }, []);

    function addComment(){
      showModalb(true)
      let comm = {
        userId : {loginid},
        nickName : {loginname},
        symbolname : "usdkrw",
        comment_content : {comment}
      }
      
    }

    return (     
      
      <div align = "center" >
        
    <Container m ="0">
    <Text
      textAlign="left"
      textSize="title"
      m={{ t: "2rem", b: "0rem" }}
      textWeight="800"
      fontFamily="ko"
    >
      개미's 이야기
      </Text>      
      </Container>
                 
  <Div
    m={{ t: "0.5rem" }}
    h="6rem"
    w="70rem"
    d="inline-block" align="center"
    >
    <Input
      placeholder="댓글을 남겨주세요."
      p={{ x: "2.5rem" }}
      m={{ t: "0.5rem" }}
      h="5rem"
      w={{ xs: "25rem", md: "500rem" }}
      name="commnet_content"
      value={comment}
      onChange={(e) => { commentbyun(e.target.value) }}
    suffix={
        <Button
        pos={{ xs: "static", md: "absolute" }}
        bg="warning800"
        hoverBg="warning600"
        w={{ xs: "3rem", md: "6rem" }}
        h={{ xs: "5rem", md: "2.5rem" }}
        bottom="0"
        right="0"
        rounded="md"
        onClick={addComment}
        >
        등록
     </Button>
 }
    /></Div>  
   
  
    {commentlist.map(comment=>(
<Div 
       p={{ x: "2.5rem", t: "0.7rem" }}
      m={{ t: "0.5rem" }}
      h="7.5rem"
      w={{ xs: "25rem", md: "70rem" }}
       border={{ t: "1px solid", b: "1px solid" }}
       borderColor="gray400"
       d="flex"
       bg="gray200"
      justify="space-between"
      >
      <Div
      w={{ xs: "20rem", md: "auto" }}
       >
      <Div
       textWeight="300"
       textColor="gray"
       d = "flex"
      m ={{ t: "0.3rem" }}
        >
      <Text>
      {comment.nickName}
      </Text>
      </Div>
      <Div 
      textAlign="left"
      m={{ t: "0.3rem" }}
      >
      <Text
       textWeight="600"
       textSize="subheader"
       w={{ xs: "40rem", md: "70rem" }}
      >
       {comment.comment_content}
      </Text>
      </Div>
      <Div d="flex" align="center"
       m={{ t: "0.4rem" }}
       >
      <Icon
        transition
        name="Timestamp"
        color="gray"
        size="15px"
        m={{ r: "0.4rem" }}
        />
      <Text
        textAlign="left"
        textSize="Typography"
        textWeight="600"
        fontFamily="secondary"
        textColor="gray"
         m={{ r: "1rem" }}
         >
        {comment.comment_createData.substring(0,10)}
      </Text>
      <Icon
        transition
        name= "Heart"
        color= "gray"
         size="15px"
        cursor="pointer"
         m={{ r: "0.4rem" }}
        />
        <Text
        textAlign="left"
        textSize="Typography"
         textWeight="600"
         fontFamily="secondary"
         m={{ r: "1rem" }}
         textColor="gray"
        >{comment.comment_LikeNum}</Text>
        <Icon name="Delete" size="20px"
      cursor="pointer"
      /> 
      </Div>
</Div>
</Div>

))} 

<nav aria-label="Page navigation example" class="nav justify-content-center">
<ul className="pagination" align="center">
  <li className="page-item" align="center"><button onClick={ () => links()}>Next</button></li>
</ul>
</nav>

        <AlignStartModal
          userid = {loginid}
          nickname = {loginname}
          symbolname = "usdkrw"
          content = {comment}
          isOpen={showModal}
          onClose={() =>  showModalb(false)}
        />
</div>

     
    )
}


export default CommentUsdkrw;