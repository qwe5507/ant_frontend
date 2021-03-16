import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import IndApi from "../../../../../api/IndApi";

function AlignStartModal2(props){
  function delComment(){
    IndApi.deleteComment(props.commentid).then(
      props.onClose
      
    )
    window.location.reload()
    
  }   
  
  return (
    <div> 
      <Modal isOpen={props.isOpen} onClose={props.onClose} align="start" rounded="md">
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={props.onClose}
          cursor="pointer"
        />
        <Div d="flex" m={{ b: "4rem" }}>
          <Icon
            name="AlertSolid"
            color="warning700"
            m={{ t: "0.35rem", r: "0.5rem" }}
          />
          <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
            댓글을 삭제하시겠습니까{props.commentid}
          </Text>
        </Div>
        <Div d="flex" justify="flex-end">
          <Button
            onClick={props.onClose}
            bg="gray200"
            textColor="medium"
            m={{ r: "1rem" }}
          >
            아니요
          </Button>
          <Button onClick={delComment}  bg="info700">
           네!
          </Button>
        </Div>
      </Modal> </div>
  
  );
};

export default AlignStartModal2;