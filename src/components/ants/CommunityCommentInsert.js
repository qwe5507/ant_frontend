import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import DeclareApiService from "../../api/DeclareApi";
import CommentApiService from "../../api/CommentApi";


function CommunityCommentInsert(props){ 
    const loginid = useSelector(state => state.user.userid);
    // let [isOpens,isOpens변경] = useState(false);
    // let [onCloses,onCloses변경] = useState(false);
    // let [hovername,hovername변경] = useState("욕설");/
    

      function commentinsert(boardid,comment_content){
       if(!(((typeof comment_content != "undefined") && (typeof comment_content.valueOf() == "string")) && (comment_content.length > 0))){
          props.문자열alert();
          console.log("문자열비어있음.")
          props.onClose();
       }else{
        console.log(boardid)
        console.log(comment_content)
        console.log(typeof comment_content)
        let commentata = {
          board_id : boardid,
          userid : loginid,
          comment_content : comment_content
          }
        CommentApiService.addComment(commentata)
        props.문자열등록성공();
        props.문자열등록성공시초기화();
        props.onClose();
       }
       
      }
  return (
    <Modal
      isOpen={props.isOpen}
      onClose= {props.onClose}
      m={{ y: "4rem", x: { xs: "1rem", lg: "auto" },t: "6rem" }}
      rounded="md"
    >
      <Icon
        name="Cross"
        pos="absolute"
        top="1rem"
        right="1rem"
        size="16px"
        onClick={props.onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          댓글을 등록하시겠습니까?
        </Text>

      </Div>
      <Div>
    </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={props.onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={() => commentinsert(props.boardid,props.comment_content)} bg="info700">
          Yes, Submit
        </Button>
      </Div>

    </Modal>
  );
};

export default CommunityCommentInsert;