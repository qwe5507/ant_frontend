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
import CommunityBoardInsert from './CommunityBoardInsert';

import { setSavedBoards } from '../../redux/actions/user_action';

import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
import 'react-summernote/lang/summernote-ru-RU'; // you can import any other locale

import 'bootstrap';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
// Bootstrap JS relies on a global varaible.
// In ES6, all imports are hoisted to the top of the file
// so if we used `import` to import Bootstrap, it would
// execute earlier than we have assigned the global
// variable. This is why we have to use CommonJS require()
// here since it doesn't have the hoisting behavior.
window.jQuery = $;

require('bootstrap');

// Import bootstrap(v3 or v4) dependencies
// import 'bootstrap/js/modal';
// import 'bootstrap/js/dropdown';
// import 'bootstrap/js/tooltip';
// import 'bootstrap/dist/css/bootstrap.css';

function CommunityRegister(props) {
  const loginid = useSelector(state => state.user.userid);
  let [summerTitle,summerTitle변경] = useState("");
  let [summerContent,summerContent변경] = useState("");
  
  let [notificationboard,notificationboard변경] = useState(false);
  let [notification,notification변경] = useState(false);
  let [boardaddModal,boardaddModal변경] = useState(false);

  let alerttext = ['내용을 입력해주세요.', '게시물이 등록되었습니다.']

  const summerNoteDom = useRef(null);

  function onChangea(content){
    console.log('onChange',content);
    console.log('onChange',typeof content);
    
    summerContent변경(content);

  }

  function onImageUpload(images,insertImage){
    console.log(images)
    for (let i = 0; i < images.length; i++) {
      const reader = new FileReader();

      reader.onloadend = () => {
        console.log(reader)
        insertImage(reader.result);
      };

      reader.readAsDataURL(images[i]);
    }
  };

  // let [summerContent,summerContentChange] = useState("");
  // 아래코드 있으니 새로고침 해도 저장한글이 표시됨.
  useEffect(() => {
  });

  function BoardRegit(title,content){
    if(((typeof title != "undefined") && (typeof title.valueOf() == "string")) && (title.length > 0) && ((typeof content != "undefined") && (typeof content.valueOf() == "string")) && (content.length > 0)){
      console.log("통과")
      boardaddModal변경(true);
    }else{
      notification변경(true);
    }

  }

  function uploadSummernoteImageFile(file) {
    // summerNoteDom.current.focus();

    let data = new FormData();
    data.append("file", file);
    console.log(file);
    console.log(summerNoteDom);
    
    // $.ajax({
    //     data : data,
    //     type : "POST",
    //     url : "/uploadSummernoteImageFile",
    //     contentType : false,
    //     processData : false,
    //     success : function(data) {
    //         //항상 업로드된 파일의 url이 있어야 한다.
    //         $(editor).summernote('insertImage', data.url);
    //     }
    // });
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
                      등록
                  </Button>
                </Div>
          </Col>
        </Row>
        <Row
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
        </Row>

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
                  />
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
                  value="내용을 입력하세요. 욕설 및 부적절한 내용은 신고대상이 될수 있습니다."
                  options={{
                    lang: 'ko-RU',
                    height: 380,
                    dialogsInBody: true,
                    disableResize: true, 
                    disableResizeEditor: true,
                    toolbar: [
                      ['style', ['style']],
                      ['font', ['bold', 'underline', 'clear']],
                      ['fontname', ['fontname']],
                      ['para', ['ul', 'ol', 'paragraph']],
                      ['table', ['table']],
                      ['color', ['color']],
                      ['insert', ['link', 'picture']],
                      ['view', ['fullscreen', 'codeview']]
                    ]
                  }}
                  onChange={(e) => {onChangea(e)}}
                  onImageUpload={(e,insertImage) => {onImageUpload(e,insertImage)}}
                  // onImageUpload = {(files) =>
                  //        uploadSummernoteImageFile(files[0])
                  //    }
                />
              </Div>
          </Col>
        </Row>

        <CommunityBoardInsert
          // boardid={board['board_id']}
          // comment_content={commentinput}
          isOpen={boardaddModal}
          summerTitle = {summerTitle}
          summerContent = {summerContent}
          notificationboard변경 = {() => notificationboard변경(true)}
          // 문자열alert={() => 문자열빈값변경(true)}
          // 문자열등록성공={() => 문자열등록성공알람변경(true)}
          // 문자열등록성공시초기화={() => commentinput변경("")}
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