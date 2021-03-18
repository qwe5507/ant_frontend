import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import NewsApiService from "../../api/NewsApi";
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function NewsKeywordDelete(props){ 
    const userid = useSelector(state => state.user.userid);

      function commentdelete(boardModalClose){
        let list = {
            userId: userid,
            keyword: props.keyword
        }
        NewsApiService.deleteKeywordByUserId(list)
          .then(res => {
          props.wordlist();

          })
          .catch(err => {
              console.log('***** deleteKeywordByUserId error:', err);
              props.키워드삭제실패()
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
        // onClick={props.onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
          onClick={props.onClose}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          키워드를 삭제하시겠습니까?
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
          취소
        </Button>
        <Button onClick={() => commentdelete(props.onClose)} bg="info700">
          확인
        </Button>
      </Div>

    </Modal>
  );
};

export default NewsKeywordDelete;