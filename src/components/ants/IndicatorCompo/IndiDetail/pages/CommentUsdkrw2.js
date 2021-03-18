import React, {useState, useEffect, useRef,  useCallback } from "react"
import { Text, Div, Button, Container, Icon, Input, Modal } from "atomize";
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IndApi from "../../../../../api/IndApi";
import AlignStartModal from "./AlignStartModal";
import AlignStartModal2 from "./AlignStartModal2";

function CommentUsdkrw2(props) {
  const loginid = useSelector(state => state.user.userid);
  const loginname = useSelector(state => state.user.nickname);
  const symbolname = "usdkrw"
  let [showModal, showModalb ] = useState(false);
  let [showModala, showModalab ] = useState(false);

    let [comment, commentbyun] = useState("");
    let [commentid, commentidbyun] = useState("");
    let [commentlist, commentlistbyun] = useState([]);
   
    let {tableName} = useParams();  
    let {num} = useParams();

    let [next, nextbyun] = useState(2)
    let [su, subyun] = useState(0)

    const commentloading = () => {
   
     IndApi.fetchCommentsByIndID(props.tableName, next)
          .then(res => {
            nextbyun(props.num)
              commentlistbyun(res.data)
          })
          .catch(err => {
              console.log('댓글 원/달러 리스트 error:', err);
    })
   
    }
  
    function links(symbol, next){
      if (next == 0  || next == 1 || next == 2 ){
      nextbyun(3)
      IndApi.fetchCommentsByIndID(symbol, 3)
      .then(res => {
          commentlistbyun(res.data)
      })
      .catch(err => {
          console.log('댓글 원/달러 리스트 error:', err);
        });
      }
    else
    {
      console.log("초기확인1",next)
      IndApi.fetchCommentsByIndID(symbol, next+1)
    .then(res => {
      if(res.data[0] != null){
        commentlistbyun(res.data)
        nextbyun(next+1)
      }
    })
    .catch(err => {
        console.log('댓글 원/달러 리스트 error:', err);});
    }
  }
    
  function links2(symbol, next){
    if (next == 0  || next == 1 || next == 2 ){
    nextbyun(2)
    IndApi.fetchCommentsByIndID(symbol, 2)
    .then(res => {
        commentlistbyun(res.data)
    })
    .catch(err => {
        console.log('댓글 원/달러 리스트 error:', err);
      });
    }
  
  else
  {
    
    console.log("초기확인1",next)
    IndApi.fetchCommentsByIndID(symbol, next-1)
  .then(res => {
      
      commentlistbyun(res.data)
     
      nextbyun(next-1)
  })
  .catch(err => {
      console.log('댓글 원/달러 리스트 error:', err);});
  }
}

    useEffect(() => {
      commentloading()
      
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
  
    function delComment(comment_id){
      alert("해당 게시물을 삭제하시겠습니까?")
      IndApi.deleteComment(comment_id).then(
        window.location.reload(0, 3000)
        
      )

    }

    return (     
      
      <div align = "center" >
        
   
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
      h={{ xs: "6rem", md: "5rem" }}
      w={{ xs: "23rem", md: "28rem" }}
      name="commnet_content"
      value={comment}
      onChange={(e) => { commentbyun(e.target.value) }}
   
    />
    <Button
        pos={{ xs: "static", md: "absolute" }}
        bg="info700"
        hoverBg="info600"
        w={{ xs: "3rem", md: "6rem" }}
        h={{ xs: "5rem", md: "2.5rem" }}
        m={{ x: { xs: '1rem', md: '1.5rem' }, y: { xs: '2rem', md: '-1.5rem' }}}
     
        right="0"
        rounded="md"
        onClick={addComment}
        >
        등록
     </Button></Div>  
   
  
    {commentlist.map(comment=>(
<Div 
       p={{ x: "2.5rem", t: "0.7rem" }}
     // m={{ t: "0.5rem" }}
     m={{ x: { xs: '0.5rem', md: '0.5rem' }, y: { xs: '0.5rem', md: '0.5rem' }}}
      h="7.5rem"
      w={{ xs: "22rem", md: "28rem" }}
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
      {comment.userId == loginid ?
        <Icon name="Delete" size="20px"
      cursor="pointer" onClick={() => delComment(comment.comment_id)}
      /> :null}
       
      </Div>
</Div>
</Div>

))} 
<Div  m={{ x: { xs: '1rem', md: '1.5rem' }, y: { xs: '1rem', md: '0.5rem' }}} >
  <div align-items= "center"  >
<button style={{backgroundColor: '#0284fe'}}  color="white"onClick={ () => links2("usdkrw", next)}>
<Text
        textAlign="left"
        textSize="Typography"
        textWeight="600"
        fontFamily="secondary"
        textColor="white"
         >
  ◀
  </Text>
  </button>&nbsp;
<button style={{backgroundColor: '#0284fe'}} onClick={ () => links("usdkrw", next)}>
<Text
        textAlign="left"
        textSize="Typography"
        textWeight="600"
        fontFamily="secondary"
        textColor="white"
         >

  ▶
</Text>  
  </button>

</div>

</Div> 
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


export default CommentUsdkrw2;