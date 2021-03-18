import { Div, Button, Modal, Icon, Input, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import NewsApiService from "../../api/NewsApi";
import { Link, Route, useHistory, useParams } from 'react-router-dom';

function NewsKeyWordAdd(props){ 
    const userid = useSelector(state => state.user.userid);
    let [keyword, keywordChange] = useState();
    const onChange = e => {
        keywordChange(e.target.value)
        console.log(e.target.value)
    }

    const onKeyPress = (e) => {
        if (e.key == 'Enter') {
            onClick();
        }
    }

    const onClick = (boardModalClose) => {
        let list = {
            userId: userid,
            keyword: keyword
        }
        console.log(list)
        NewsApiService.updateKeywordByUserId(list)
          .then(res => {
          props.wordlist();
          props.onClose();
          })
          .catch(err => {
              console.log('***** updateKeywordByUserId error:', err);
          }); 
          
         
    };
 

       
      
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
        // onClick={props.onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
    <Input
    placeholder="키워드 입력"
    m={{
        l: '0.2rem',
      }}
    w={{ xs: 'auto', md: '26vw' }}
    onChange={onChange}
    onKeyPress={onKeyPress}
    />


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
        <Button onClick={onClick} bg="info700">
          확인
        </Button>
      </Div>

    </Modal>
  );
};

export default NewsKeyWordAdd;