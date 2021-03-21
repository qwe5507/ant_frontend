import PropTypes from "prop-types"
import React, { useState, useEffect ,useRef} from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact, Input, Notification } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import BoardApiService from "../../api/BoardApi";
import CommentApiService from "../../api/CommentApi";
import { AddAlarmSharp } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux';
import CommunityBoardUpdateAlert from './CommunityBoardUpdateAlert';

import { setSavedBoards } from '../../redux/actions/user_action';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

import 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

function CommunityBoardUpdate(props){ 
  const loginid = useSelector(state => state.user.userid);
  let [summerTitle,summerTitle변경] = useState("");
  let [summerContent,summerContent변경] = useState("");
  
  let [notificationboard,notificationboard변경] = useState(false);
  let [notification,notification변경] = useState(false);
  let [boardaddModal,boardaddModal변경] = useState(false);

  let alerttext = ['내용을 입력해주세요.', '게시물이 수정되었습니다.']

  let { updateboardid } = useParams();

  const summerNoteDom = useRef(null);
  let [board, board변경] = useState({});

  function onChangea(content) {
    summerContent변경(content);
  }

  function onImageUpload(images, insertImage) {
    for (var i = images.length - 1; i >= 0; i--) {
      sendFile(images[i], insertImage);
    }
  };

  function BoardRegit(title, content) {
    if (((typeof title != "undefined") && (typeof title.valueOf() == "string")) && (title.length > 0) && ((typeof content != "undefined") && (typeof content.valueOf() == "string")) && (content.length > 0)) {
      console.log("통과")
      boardaddModal변경(true);
    } else {
      notification변경(true);
    }
  }

  function sendFile(file, insertImage) {
    var form_data = new FormData();
    form_data.append('file', file);

    BoardApiService.addImage(form_data)
      .then(url => {
        insertImage(url.data);
      })
      .catch(error => {
        console.log("이미지 업로드 실패", error);
      });
  }

  // let [summerContent,summerContentChange] = useState("");
  // 아래코드 있으니 새로고침 해도 저장한글이 표시됨.
  useEffect(() => {
    BoardApiService.fetchBoardByID(updateboardid)
    .then(res => {
      board변경(res.data)
      summerTitle변경(res.data.board_title)
      summerContent변경(res.data.board_content)
      
    })
    .catch(err => {
        console.log('***** Community fetchBoardByID error:', err);
    });
  },[]);

  function BoardRegit(title,content){
    if(((typeof title != "undefined") && (typeof title.valueOf() == "string")) && (title.length > 0) && ((typeof content != "undefined") && (typeof content.valueOf() == "string")) && (content.length > 0)){
      console.log("통과")
      boardaddModal변경(true);
    }else{
      notification변경(true);
    }

  }

  return (
    <>
      <Div pos="relative"
        m={{ t: { md: "3%" }, l: { md: "-80%" } }}
        w={{ xs: "100%", md: "250%" }}>
        <Row>
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
            justify="space-between"
            d={{ xs: "flex", md: "flex" }}
            >
            <Text
              textAlign="left"
              textSize="heading"
              textWeight="700"
              fontFamily="secondary"
              p={{ b: "0.5rem",l: "2rem" }}
              // m={{ l: "2rem" }}
              border={{ b: "1px solid" }}
              borderColor="gray400"
              >
              게시글 수정
              </Text>
              <Button
                  prefix={
                    <Icon
                      name="Edit"
                      size="22px"
                      color="white"
                      m={{ r: "0.5rem" }}
                    />
                  }
                      textWeight="900"
                      textSize="title"
                      bg="warning700"
                      hoverBg="warning800"
                      rounded="md"
                      m={{ r: "1rem" }}
                      p={{ r: "1.5rem", l: "1rem" }}
                      shadow="3"
                      hoverShadow="4"
                      w = "12rem"
                      onClick = {() => { BoardRegit(summerTitle,summerContent)}}
                    >
                      수정하기
                  </Button>
                </Div>
          </Col>
        </Row>
        {/* <Row
        p={{ b: "0.5rem"}}>
          <Col size={{ xs: 8, md: 8, lg: 8 }} pos="relative">
            <Div
              border= "1px solid" 
              borderColor="gray400"
              h = "3rem"
              >
              </Div>
          </Col>
          <Col size={{ xs: 4, md: 4, lg: 4 }} pos="relative">
            <Div
            border="1px solid" 
            borderColor="gray400"
            h = "3rem"
            >
            </Div>
          </Col>
        </Row> */}

        <Row 
        p={{ b: "0.5rem"}}
        >
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
              // border= "1px solid" 
              // borderColor="gray400"
              // h = "3rem"
              >
                  <Input
                  textSize="heading"
                  placeholder="제목을 입력해주세요."
                  // p={{ x: "2.5rem" }}
                  m={{t : "0.5rem"}}
                  h = "3.7rem"
                  w = {{xs : "25rem", md : "500rem"}}
                  onChange = {(e) => {summerTitle변경(e.target.value)}}
                  value = {summerTitle}
                  ></Input>
              </Div>
          </Col>
        </Row>

        <Row 
        p={{ b: "0.5rem"}}>
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
              border= "1px solid" 
              borderColor="gray400"
              h = {{ xs: "28.5rem", md: "27.4rem" }}
              >
                <ReactSummernote
                  value= {summerContent}
                  options={{
                    lang: 'ko-RU',
                    height: 380,
                    dialogsInBody: true,
                    disableResize: true,
                    disableResizeEditor: true,
                    toolbar: [
                      ['insert', ['link', 'picture']]
                    ]
                  }}
                  onChange={(e) => { onChangea(e) }}
                  onImageUpload={(e, insertImage) => { onImageUpload(e, insertImage) }}
                />
              </Div>
          </Col>
        </Row>

        <CommunityBoardUpdateAlert
          // boardid={board['board_id']}
          // comment_content={commentinput}
          isOpen={boardaddModal}
          summerTitle = {summerTitle}
          summerContent = {summerContent}
          notificationboard변경 = {() => notificationboard변경(true)}
          boarddata = {board}
          onClose={() => boardaddModal변경(false)}></CommunityBoardUpdateAlert>
              <Notification
                m={{ t: "5rem" }}
                bg="warning700"
                isOpen={notification}
                onClose={() => notification변경(false)}
                prefix={
                    <Icon
                        name="Success"
                        color="white"
                        size="18px"
                        m={{ r: "0.5rem" }}
                    />
                }
            >
              {alerttext[0]}
            </Notification>
            <Notification
                m={{ t: "5rem" }}
                bg="warning700"
                isOpen={notificationboard}
                onClose={() => notificationboard변경(false)}
                prefix={
                    <Icon
                        name="Success"
                        color="white"
                        size="18px"
                        m={{ r: "0.5rem" }}
                    />
                }
            >
              {alerttext[1]}
            </Notification>
      </Div>

    </>
  )
}

export default CommunityBoardUpdate;