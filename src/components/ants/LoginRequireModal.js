import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button,Modal, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';

import CommunityBoard from './CommunityBoard';
import CommunityMain from './CommunityMain';
import CommunityMainSaved from './CommunityMainSaved';

import CommunityRegister from './CommunityRegister';
import CommunityBoardUpdate from './CommunityBoardUpdate';
import { useDispatch, useSelector } from 'react-redux';

function LoginRequireModal(props){
    let history = useHistory();
    return (
      <Modal isOpen={props.isOpen} onClose={props.onClose} align="center" rounded="md">
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
            로그인이 필요한 기능입니다.  <br/>
            로그인페이지로 이동 하시겠습니까?
          </Text>
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
          <Button onClick={() => { history.push('/Login')}} bg="info700">
            로그인페이지로 이동
          </Button>
        </Div>
      </Modal>
    );
  };


  export default LoginRequireModal;