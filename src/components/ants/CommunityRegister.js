import PropTypes from "prop-types"
import React, { useState, useEffect, useRef } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact, Input, Notification } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import BoardApiService from "../../api/BoardApi";
import CommentApiService from "../../api/CommentApi";
import { AddAlarmSharp } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux';
import CommunityBoardInsert from './CommunityBoardInsert';

import { setSavedBoards } from '../../redux/actions/user_action';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

import 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

window.jQuery = $;

require('bootstrap');

function CommunityRegister(props) {
  const loginid = useSelector(state => state.user.userid);
  let [summerTitle, summerTitle변경] = useState("");
  let [summerContent, summerContent변경] = useState("");

  let [notificationboard, notificationboard변경] = useState(false);
  let [notification, notification변경] = useState(false);
  let [boardaddModal, boardaddModal변경] = useState(false);

  let alerttext = ['내용을 입력해주세요.', '게시물이 등록되었습니다.']

  const summerNoteDom = useRef(null);

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


  return (
    <>
      <Div pos="relative"
        m={{ t: { xs: "3%", md: "3%" }, l: { md: "-80%" } }}
        w={{ xs: "100%", md: "250%" }}
      >
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
                p={{ b: "0.5rem", l: "2rem" }}
                border={{ b: "1px solid" }}
                borderColor="gray400"
                fontFamily="ko"
              >
                글쓰기
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
                textWeight="1000"
                textSize="title"
                bg="black900"
                hoverBg="black300"
                rounded="md"
                shadow="3"
                hoverShadow="4"
                w="10rem"
                h="3rem"
                fontFamily="ko"
                onClick={() => { BoardRegit(summerTitle, summerContent) }}
              >
                등록
                  </Button>
            </Div>
          </Col>
        </Row>

        <Row
          p={{ b: "0.5rem" }}
        >
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
            >
              <Input
                textSize="heading"
                placeholder="제목을 입력해주세요."
                fontFamily="ko"
                m={{ t: "0.5rem" }}
                h="3.7rem"
                // w = {{xs : "25rem", md : "500rem"}}
                w={{ xs: "80vw", sm: "85vw", md: "70rem" }}
                onChange={(e) => { summerTitle변경(e.target.value) }}
              />
            </Div>
          </Col>
        </Row>

        <Row
          p={{ b: "0.5rem" }}>
          <Col size={{ xs: 12, md: 12, lg: 12 }} pos="relative">
            <Div
              border="1px solid"
              borderColor="gray400"
              h={{ xs: "28.5rem", md: "27.4rem" }}
            >
              <ReactSummernote
                value="내용을 입력하세요. 욕설 및 부적절한 내용은 신고대상이 될수 있습니다."
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

        <CommunityBoardInsert
          isOpen={boardaddModal}
          summerTitle={summerTitle}
          summerContent={summerContent}
          notificationboard변경={() => notificationboard변경(true)}
          onClose={() => boardaddModal변경(false)}></CommunityBoardInsert>
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

export default CommunityRegister;