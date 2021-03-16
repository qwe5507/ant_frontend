import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import IndApi from "../../../../../api/IndApi";

function AlignStartModal(props){
  function inputComment(){
    let comm = {
      indiName : props.symbolname,
      userId : props.userid,
      nickName : props.nickname,
      comment_content : props.content
    }
    IndApi.insertIndicator(comm).then(
      props.onClose
      
    )
    window.location.reload()
 //   props.onClose
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
            댓글을 남기시겠습니까
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
          <Button onClick={inputComment}  bg="info700">
           네!
          </Button>
        </Div>
      </Modal> </div>
  
  );
};

export default AlignStartModal;