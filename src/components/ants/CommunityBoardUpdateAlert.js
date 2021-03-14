import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import DeclareApiService from "../../api/DeclareApi";
import CommentApiService from "../../api/CommentApi";
import BoardApiService from "../../api/BoardApi";
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function CommunityBoardUpdateAlert(props){ 
    const loginid = useSelector(state => state.user.userid);
    let history = useHistory();
    let { updateboardid } = useParams();
    

      function commentinsert(boardModalClose,title,content,boarddata){
        var tempcontent1 = content.replace("&nbsp","")
        // var tempcontent2 = tempcontent1.replace("&nbsp;","")
        // var tempcontent = tempcontent2.replace("/g","")
        // var tempcontent2 = tempcontent1.replace(/\s/gi,"");//공백제거 
        var tempcontent3 = tempcontent1.replace(/&nbsp;/gi,"");//공백제거 
        var tempcontent = tempcontent3.replace(";","");// 
        var result = tempcontent.split(/<[^<>]*>/);
        console.log(result)
        var search_content = result.join(" ")

          let Boarddata = {
            board_id : updateboardid,
            board_title : title,
            board_content : content,
            board_LikeNum : boarddata.board_LikeNum,
            board_viewnum : boarddata.board_viewnum,
            board_search_content : title+" "+search_content
          }
          BoardApiService.editBoard(Boarddata)
          .then(res => {
            console.log("게시판 수정 성공")
            
            props.notificationboard변경()
            history.goBack();
          })
          .catch(err => {
              console.log('***** Community addBoard error:', err);
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
          게시물을 수정하시겠습니까?
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
        <Button onClick={() => commentinsert(props.onClose,props.summerTitle,props.summerContent,props.boarddata)} bg="info700">
          Yes, Update
        </Button>
      </Div>

    </Modal>
  );
};

export default CommunityBoardUpdateAlert;