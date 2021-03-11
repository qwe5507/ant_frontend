import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import DeclareApiService from "../../api/DeclareApi";
import CommentApiService from "../../api/CommentApi";
import BoardApiService from "../../api/BoardApi";
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function CommunityBoardInsert(props){ 
    const loginid = useSelector(state => state.user.userid);

    let history = useHistory();
    // let [isOpens,isOpens변경] = useState(false);
    // let [onCloses,onCloses변경] = useState(false);
    // let [hovername,hovername변경] = useState("욕설");/
    

      function commentinsert(boardModalClose,title,content){
        
          let Boarddata = {
            userid : loginid,
            board_title : title,
            board_content : content
          }
          BoardApiService.addBoard(Boarddata)
          .then(res => {
            console.log("게시판 추가 성공")
            
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
          게시물을 등록하시겠습니까?
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
        <Button onClick={() => commentinsert(props.onClose,props.summerTitle,props.summerContent)} bg="info700">
          Yes, Submit
        </Button>
      </Div>

    </Modal>
  );
};

export default CommunityBoardInsert;