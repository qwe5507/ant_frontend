import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import DeclareApiService from "../../api/DeclareApi";
import CommentApiService from "../../api/CommentApi";
import BoardApiService from "../../api/BoardApi";
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function CommunityBoardDelete(props){ 
    const loginid = useSelector(state => state.user.userid);

    let history = useHistory();
      function commentdelete(boardModalClose){
        
          BoardApiService.deleteBoard(props.boardid)
          .then(res => {
            console.log("게시판 삭제 성공")
            
            var deldata = {
              "query": {
                 "match": { "board_id": props.boardid }
              }
            }
            axios.post("boards/_doc/_delete_by_query" ,deldata)
            .then(res => {
              console.log("search 데이터 삭제 성공")
            })
            .catch(err => {
              console.log('***** search 데이터 삭제 error:', err);
            }); 
            history.push('/Community');
            
          })
          .catch(err => {
              console.log('***** Community addBoard error:', err);
              props.게시판삭제실패()
          }); 

          boardModalClose()
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
          게시물을 삭제하시겠습니까?
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
        <Button onClick={() => commentdelete(props.onClose)} bg="info700">
          Yes, Submit
        </Button>
      </Div>

    </Modal>
  );
};

export default CommunityBoardDelete;