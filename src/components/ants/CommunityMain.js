import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text,Radiobox, Label,Switch,Row,Col,logoSketch,logoReact } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import BoardApiService from "../../api/BoardApi";
import CommentApiService from "../../api/CommentApi";
import { AddAlarmSharp } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux';

import { setSavedBoards } from '../../redux/actions/user_action';
import "./CommunityMain.css";

function CommunityMain(props) {
  let [showMobileHeaderMenu, showMobileHeaderMenuChange] = useState(false);
  let [selectedSwitchValue,selectedSwitchValueChange] = useState(false);
  let [liked,likedchange] = useState(false);
  let [savedboard,savedboardChange] = useState();

  const loginid = useSelector(state => state.user.userid);
  const savedboardtemp = useSelector(state => state.user.savedBoards);
  const loginstate = useSelector(state => state.user.loginstate);

  // let [saved,savedchange] = useState(false);
  let { die } = useParams();

  const dispatch = useDispatch();
  
  let [boardlist ,boardlist변경] = useState(); 



  // [{board_content : ""}]
  // selectedSwitchValueChange(props.orderswitch);
  function toggleHeaderMenu(value) {
    showMobileHeaderMenuChange(value);
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 1)
    }, 400);
  };

  function savedClick(savetruefalse,board){
    if(savetruefalse){ // 저장 되있을때 클릭
      var result = window.confirm("저장한 게시물을 취소 하시겠습니까?");
      if(result){
        let UserSavedBoard = {
          board_id : board['board_id'],
          userid : loginid
          }
          BoardApiService.deleteSaveddUserBoard(UserSavedBoard);
          let templist = [...savedboard]
          console.log(templist);
          console.log(String(board['board_id']));
          templist.splice(templist.indexOf(String(board['board_id'])),1);
          console.log(templist);
          var data = { savedBoards: templist };
          dispatch(setSavedBoards(data));
          console.log('Comm.js dispatch');
        }
    }else{ // 저장 안되있을때 
      // savedchange(!saved);
      var result = window.confirm("해당 게시물을 저장 하시겠습니까?");
      if(result){
        console.log(board);
        let UserSavedBoard = {
          board_id : board['board_id'],
          userid : loginid
          }
        BoardApiService.addSaveddUserBoard(UserSavedBoard);
        let templist = [...savedboard]
        templist.push(String(board['board_id']));
        var data = { savedBoards: templist };
        dispatch(setSavedBoards(data));
        console.log('Comm.js dispatch');
        }
      }

  }
  
  function boardtotalget(){
    if(!props.ordered && !props.saved){ // 최신순 게시물 가져오기 && 전체
      BoardApiService.fetchBoards()
      .then(res => {
        boardlist변경(res.data);
        console.log('641111');
      })
      .catch(err => {
        console.log('***** Community fetchBoards error:', err);
      }); 
      }else if(props.ordered && !props.saved){   // 추천순 게시물 가져오기 && 전체
      BoardApiService.fetchBoardsLiked()
      .then(res => {
        boardlist변경(res.data);
        console.log('87');
  
      })
      .catch(err => {
        console.log('***** Community fetchBoards error:', err);
      }); 
      }
  }

  useEffect(() => {
    console.log('333333');
    // boardlist변경([]);
    boardtotalget()
  },[props.ordered]);

  useEffect(() => {
    // boardlist변경([]);
    if(props.saved){ // 게시물 가져오기 
    BoardApiService.fetchSavedUserBoard(loginid)
    .then(res => {
      boardlist변경(res.data);
      console.log(res.data)
      console.log('64222');
    })
    .catch(err => {
      console.log('***** Community fetchBoards error:', err);
    }); 
    }else{
      boardtotalget();
    }
  },[props.saved]);


    // 아래코드 있으니 새로고침 해도 저장한글이 표시됨.
    useEffect(() => {
        savedboardChange(savedboardtemp);
        console.log('22')
      console.log(props.saved);
    });

    return (
<>
<Div pos = "relative" 
         m={{t :{ md : "5%"}, l :{ md : "-80%"}}}
         w = {{xs: "100%", md : "250%"}}>
             
            <Row>
           {
            boardlist && savedboard && boardlist.map(function(data){
              var nowtime = new Date()
              var boardtime = new Date(data['board_createdata'])
              var elapsedtime = nowtime.getTime() - boardtime.getTime()
              let elapsedMin = elapsedtime / 1000 / 60; // 150.0666...
              let elapsedHour = elapsedtime / 1000 / 60 / 60; // 2.501111...
              let elapsedDay = elapsedtime / 1000 / 60 / 60 / 24;
              var resulttime;
              if(elapsedMin < 10){
                resulttime = "now"
              }else if (elapsedMin >= 10 && elapsedMin < 60 ){
                resulttime = String(Math.floor(elapsedMin))+"분" 
              }else if (elapsedMin >= 60 && elapsedHour < 24){
                resulttime = String(Math.floor(elapsedHour))+"시간" 
              }else if (elapsedHour >= 24 && elapsedHour < 48){
                resulttime = "어제"
              }else if (elapsedHour >= 48 && elapsedDay < 30){
                resulttime = String(Math.floor(elapsedDay))+"일" 
              }else if (elapsedDay >= 30){
                resulttime = String(boardtime.getMonth()+1)+"."+String(boardtime.getDate())
              }
              
              return(
                        <Col size={{ xs: 12, md: 6, lg: 6 }} pos="relative">
                        <Div
                          shadow="4"
                          border="1px solid"
                          borderColor="gray200"
                          rounded="lg"
                          p="2rem"
                          m={{ b: { xs: "2rem", md: "1rem" } }}
                        >
                        <Div p="1rem" d="flex" align="center" justify="space-between">
                          <Div d="inline-block" align="center" justify="space-between" >
                            <Div d="flex"
                            justify="space-between"
                            >
                              <Link to={"/Community/"+data['board_id']}  style={{ color: '#000' }}>
                                    <Text
                                    justify="flex-start"
                                    textAlign="left"
                                    textSize="title"
                                    textWeight="700"
                                    fontFamily="secondary"
                                    m={{ b: "1rem" }}
                                    >
                                    {data['board_title']}
                                    </Text>
                                  </Link>
                              <Div>
                                <Icon name="Bookmark" size="20px" 
                                cursor="pointer"
                                onClick={() => savedClick(savedboard.includes(String(data['board_id'])),data)}
                                color={ savedboard.includes(String(data['board_id'])) ? "danger700" : "black"}
                                />
                              </Div>
                            </Div>

                              <Link to={"/Community/"+data['board_id']}  style={{ color: '#000' }}>
                                <Div d = "flex" justify="space-between">
                                  <Text
                                  textAlign="left"
                                  textSize="body"
                                  textWeight="500"
                                  fontFamily="secondary"
                                  m={{ b: "1rem" }}
                                  >
                                    <div
                                      className = "boardcon"
                                    // style={{ width: "100%", height: "100%" }}
                                    // dangerouslySetInnerHTML={{ __html: (data['board_content'].length > 77 ? data['board_content'].substring(0,70)+"..." :data['board_content'] ) }}>
                                    dangerouslySetInnerHTML={{ __html: data['board_content'] }} > 
                                    </div>
                                
                                  </Text>
                                  {/* {data['board_content']} */}
                                  <Div 
                                  // m={{t :{ md : "5%"}, l :{ md : "-80%"}}}
                                  // pos = {{ xs : "absolute"}}
                                  pos={{ xs: 'absolute', lg: 'static' }}
                                  right = "5rem"
                                  righ
                                  >
                                  {/* {data['board_content'].indexOf("<img") ==-1 ? null :data['board_content'].substring(data['board_content'].indexOf("<img"),data['board_content'].indexOf("px;")+5)} */}
                                  <div
                                      className = "boardconimg"
                                    // style={{ width: "100%", height: "100%" }}
                                    // dangerouslySetInnerHTML={{ __html: (data['board_content'].length > 77 ? data['board_content'].substring(0,70)+"..." :data['board_content'] ) }}>
                                    dangerouslySetInnerHTML={{ __html: data['board_content'].indexOf("<img") ==-1 ? '<div class="boardconimg"></div>' :data['board_content'].substring(data['board_content'].indexOf("<img"),data['board_content'].indexOf('">')+2) }} > 
                                  </div> 
                                  </Div>
                              </Div>
                              </Link>
                          </Div>

                        </Div>

                        <Div p="1rem" d="flex" align="center" justify="space-between">
                            <Div d="inline-block" align="center">
                        <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="700"
                            fontFamily="secondary"
                            m={{ b: "0.2rem" }}
                            >
                            {data['nickname']}
                        </Text>
                        <Div d="flex" align="center">
                            <Icon
                                transition
                                name= "Eye"
                                color= "black"
                                size="18px"
                                // cursor="pointer"
                                m={{r : "0.4rem"}}
                            />
                            <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="450"
                            fontFamily="secondary"
                            m={{r : "1rem"}}
                            >
                            {data['board_viewnum']}
                            </Text>
                            <Icon
                                transition
                                // onClick={() => likedchange(!liked)}
                                // name={liked ? "HeartSolid" : "Heart"}
                                name= "HeartSolid"
                                // color={liked ? "danger700" : "black"}
                                color= "danger700"
                                size="18px"
                                // cursor="pointer"
                                m={{r : "0.4rem"}}
                            />
                            <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="450"
                            fontFamily="secondary"
                            m={{r : "1rem"}}
                            >
                              {data['board_LikeNum']}
                            </Text>
                            <Icon
                                transition
                                name= "Message"
                                color= "black"
                                size="18px"
                                // cursor="pointer"
                                m={{r : "0.4rem"}}
                            />
                            <Text
                            textAlign="left"
                            textSize="body"
                            textWeight="450"
                            fontFamily="secondary"
                            m={{r : "1rem"}}
                            >
                            {data['board_count']}
                            </Text>
                              </Div>
                          </Div>
                        <Div d="flex" align="center">
                          <Div
                            h="1.5rem"
                            w="1.5rem"
                          //   bgImg={girl2}
                            bgSize="cover"
                            bgPos="center"
                            m={{ r: "1rem" }}
                            rounded="circle"
                          ></Div>
                          <Text textWeight="500">
                            {resulttime}
                          </Text>
                        </Div>
                      </Div>
                            {/* 끝 */}
                        </Div>
                      </Col>
              )
            })
            }
            </Row>
          </Div>
        
    </>
  )
}

export default CommunityMain;