import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact, Input, Notification } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import { Divider } from "@material-ui/core"
import BoardApiService from "../../api/BoardApi";
import CommentApiService from "../../api/CommentApi";
import UserApiService from "../../api/UserApi";
import { useDispatch, useSelector } from 'react-redux';
import { setLikedComments } from '../../redux/actions/user_action';
import Communitydeclare from './Communitydeclare';
import CommunityCommentInsert from './CommunityCommentInsert';
import "./CommunityBoard.css";

function CommunityBoard() {
    const loginid = useSelector(state => state.user.userid);
    let [liked, likedchange] = useState(false);
    let [commentliked, commentlikedchange] = useState(false);
    // let [userlikecomment,userlikecomment변경] = useState([]);
    let [showModal, showModal변경] = useState(false);
    let [commentaddModal, commentaddModal변경] = useState(false);
    let [successDark, successDark변경] = useState(false);
    let [commentinput, commentinput변경] = useState();
    let [문자열빈값, 문자열빈값변경] = useState(false);
    let [문자열등록성공알람, 문자열등록성공알람변경] = useState(false);
    let [댓글삭제실패, 댓글삭제실패변경] = useState(false);
    let [신고할데이터, 신고할데이터변경] = useState();

    let alerttext = ['빈 글자는 등록할수 없습니다.', '댓글이 등록되었습니다.', '해당 글은 신고 접수되어 삭제할 수 없습니다. 관리자에게 문의하세요.']
    console.log('게시판로딩')

    const dispatch = useDispatch();

    let [board, board변경] = useState({});

    let [commentlist, commentlist변경] = useState([]);

    let { boardid } = useParams();
    const LikedCommentsList = useSelector(state => state.user.likedComments);

    function likedClick(board) {
        // 눌려져있을떄  
        if (liked) {
            likedchange(!liked);
            console.log(board['board_LikeNum']);
            board['board_LikeNum'] = board['board_LikeNum'] - 1;
            BoardApiService.editBoard(board);
            let UserLikeBoard = {
                board_id: board['board_id'],
                userid: loginid
            }
            BoardApiService.deleteLikedUserBoard(UserLikeBoard);
            // BoardApiService.deleteLikedUserBoard(UserLikeBoard);

        } // 안 눌려져있을떄 
        else {
            likedchange(!liked);
            board['board_LikeNum'] = board['board_LikeNum'] + 1;
            BoardApiService.editBoard(board);

            let UserLikeBoard = {
                board_id: board['board_id'],
                userid: loginid
            }
            BoardApiService.addLikedUserBoard(UserLikeBoard);
        }

    }

    function boardlikedcheck(UserLikeBoard) {
        console.log("게시물 좋아요 체크 요청 ")
        console.log(UserLikeBoard.board_id)
        console.log(UserLikeBoard.userid)
        BoardApiService.fetchLikeUserBoardCheck(UserLikeBoard)
            .then(res => {
                console.log(res.data)
                if (res.data == 1) {
                    likedchange(true);
                } else {
                    likedchange(false);
                }
            })
            .catch(err => {
                console.log('***** Community fetchLikeUserBoardCheck error:', err);
            });
    }

    function timecal(data) {
        var nowtime = new Date()
        var boardtime = new Date(data)
        var elapsedtime = nowtime.getTime() - boardtime.getTime()
        let elapsedMin = elapsedtime / 1000 / 60; // 150.0666...
        let elapsedHour = elapsedtime / 1000 / 60 / 60; // 2.501111...
        let elapsedDay = elapsedtime / 1000 / 60 / 60 / 24;
        var resulttime;
        if (elapsedMin < 10) {
            resulttime = "now"
        } else if (elapsedMin >= 10 && elapsedMin < 60) {
            resulttime = String(Math.floor(elapsedMin)) + "분"
        } else if (elapsedMin >= 60 && elapsedHour < 24) {
            resulttime = String(Math.floor(elapsedHour)) + "시간"
        } else if (elapsedHour >= 24 && elapsedHour < 48) {
            resulttime = "어제"
        } else if (elapsedHour >= 48 && elapsedDay < 30) {
            resulttime = String(Math.floor(elapsedDay)) + "일"
        } else if (elapsedDay >= 30) {
            resulttime = String(boardtime.getMonth() + 1) + "." + String(boardtime.getDate())
        }
        return resulttime;
    }

    function commentlikedClick(comment) {

        if (!LikedCommentsList.includes(String(comment.comment_id))) {
            // var temp = {...comment}
            comment.comment_LikeNum += 1
            CommentApiService.editComment(comment);
            // commentlikedchange(!commentliked);

            UserApiService.editUserLikedComment(loginid, comment.comment_id)

            var temp = [...LikedCommentsList]
            temp.push(String(comment.comment_id))
            var data = { likedComments: temp };
            dispatch(setLikedComments(data));

        } else {
            // var temp = {...comment}
            comment.comment_LikeNum -= 1
            CommentApiService.editComment(comment);
            // commentlikedchange(!commentliked);

            UserApiService.editUserLikedComment(loginid, comment.comment_id)

            var temp = [...LikedCommentsList]
            temp.splice(temp.indexOf(String(comment.comment_id)), 1);
            var data = { likedComments: temp };
            dispatch(setLikedComments(data));

        }
    }

    useEffect(() => {
        console.log('게시판로딩2')
        let listtemp = sessionStorage.getItem('boardviewlist');
        if (listtemp == null) {  // 세션스토리지에 list가 없을떄 
            sessionStorage.setItem('boardviewlist', JSON.stringify([boardid]));
            BoardApiService.fetchBoardByID(boardid + "/count")
                .then(res => {
                    board변경(res.data);
                    let UserLikeBoard = {
                        board_id: res.data['board_id'],
                        userid: loginid
                    }
                    boardlikedcheck(UserLikeBoard);
                })
                .catch(err => {
                    console.log('***** Community fetchBoardByID error:', err);
                });
        } else {
            let viewedBoardList = JSON.parse(listtemp)
            if (viewedBoardList.includes(boardid) === false) {
                console.log('세션 스토리지에 게시물 번호가 포함 되어있지 않음.')
                viewedBoardList.push(boardid);
                sessionStorage.setItem('boardviewlist', JSON.stringify(viewedBoardList));
                BoardApiService.fetchBoardByID(boardid + "/count")
                    .then(res => {
                        board변경(res.data);
                        let UserLikeBoard = {
                            board_id: res.data['board_id'],
                            userid: loginid
                        }
                        boardlikedcheck(UserLikeBoard);
                    })
                    .catch(err => {
                        console.log('***** Community fetchBoardByID error:', err);
                    });
            } else {
                console.log('세션 스토리지에 게시물 번호가 포함되어 있음')
                BoardApiService.fetchBoardByID(boardid)
                    .then(res => {
                        board변경(res.data);
                        // console.log('asdasdadadads');
                        let UserLikeBoard = {
                            board_id: res.data.board_id,
                            userid: loginid
                        }
                        boardlikedcheck(UserLikeBoard);


                    })
                    .catch(err => {
                        console.log('***** Community fetchBoardByID error:', err);
                    });
            }
        }
    }, [loginid]);
    useEffect(() => {


        commentloading();
    }, [문자열등록성공알람]);

    function commentloading() {
        console.log('댓글로딩')
        CommentApiService.fetchCommentsByBoardID(boardid)
            .then(res => {
                commentlist변경(res.data);
            })
            .catch(err => {
                console.log('***** Community fetchCommentsByBoardID error:', err);
            });
    }
    function commentdelete(comment) {
        var result = window.confirm("해당 댓글을 삭제 하시겠습니까?");
        if (result) {
            CommentApiService.deleteComment(comment.comment_id)
                .then(res => {
                    console.log("deleteComment 성공");
                    commentloading();
                })
                .catch(err => {
                    console.log('***** Community deleteComment error:', err);
                    댓글삭제실패변경(true);
                });
        }
    }
    function 신고하기클릭(data) {
        신고할데이터변경(data)
        showModal변경(true)
    }
    return (
        <>
            <Div
                m={{ t: { md: "5%" }, l: { md: "-78%" } }}
                w={{ xs: "90vw", md: "248%" }}
                align="center" justify="space-between"
                d={{ xs: "flex", md: "flex" }}
            >
                <Div
                    bg="white"
                    d="inline-block" align="center"
                >
                    <Div
                        // h="10rem"
                        h={{ xs: "11rem", md: "9rem" }}
                        w={{ xs: "25rem", md: "47rem" }}
                        border={{ b: "1px solid" }}
                        borderColor="gray400"
                        pos="flex"
                        d={{ xs: "inline-block", md: "inline-block" }}

                    >
                        <Div
                            align="flex-start"
                            // pos= "absolute"
                            // bottom = "35rem"
                            h={{ xs: "7rem", md: "auto" }}
                        >
                            <Text
                                textAlign="left"
                                textSize="heading"
                                textWeight="750"
                                fontFamily="secondary"
                                justify="flex-start"
                                // m={{ b: "1rem" }}
                                m={{ b: "2rem" }}
                                pos={{ xs: "absolute", md: "static" }}
                            // bottom = "32rem"
                            >
                                {/* kakao mang hera kakao mang herakakao mangrang herakakao mangr */}
                                {board['board_title']}
                            </Text>
                        </Div>
                        <Div
                            justify="space-between"
                            align="center"
                            // pos= "absolute"
                            pos={{ xs: "static", md: "static" }}
                        // bottom = "32rem"
                        >
                            <Text
                                // textAlign="left"
                                textSize="subheader"
                                textWeight="550"
                                textColor="gray"
                                fontFamily="secondary"
                                textAlign="justify"
                                justify="flex-end"
                                m={{ l: "0.2rem" }}

                            >
                                {board['nickname']}
                            </Text>
                        </Div>
                        <Div
                            // align=""
                            // h="19rem"
                            w="15rem"
                            justify="space-around"
                            // bg="black"
                            // rounded="md"
                            // border="1px solid"
                            // borderColor="gray200"
                            // pos= "absolute"
                            pos={{ xs: "absolute", md: "static" }}
                            // bottom = "340px"
                            // bottom = "22rem"
                            m="3px"

                        >
                            <Div d="flex" align="center">
                                <Icon
                                    transition
                                    name="Timestamp"
                                    color="gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{ r: "0.4rem" }}
                                />
                                <Text
                                    textAlign="left"
                                    textSize="body"
                                    textWeight="600"
                                    fontFamily="secondary"
                                    textColor="gray"
                                    m={{ r: "1rem" }}

                                >
                                    {timecal(board['board_createdata'])}
                                </Text>
                                <Icon
                                    transition
                                    name="Eye"
                                    color="gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{ r: "0.4rem" }}
                                />
                                <Text
                                    textAlign="left"
                                    textSize="body"
                                    textWeight="600"
                                    fontFamily="secondary"
                                    m={{ r: "1rem" }}
                                    textColor="gray"
                                >
                                    {board['board_viewnum']}
                                </Text>
                                <Icon
                                    transition
                                    name="Message"
                                    color="gray"
                                    size="18px"
                                    cursor="pointer"
                                    m={{ r: "0.4rem" }}
                                />
                                <Text
                                    textAlign="left"
                                    textSize="body"
                                    textWeight="600"
                                    fontFamily="secondary"
                                    textColor="gray"
                                    m={{ r: "1rem" }}
                                >
                                    {commentlist.length}
                                </Text>
                            </Div>

                        </Div>

                    </Div>
                    <Div
                        h={{ xs: "22rem", md: "auto" }}
                        w={{ xs: "25rem", md: "47rem" }}
                        // bg="black"
                        // rounded="md"
                        // border="1px solid"
                        // borderColor="gray200"
                        // m = {{
                        //     b : {xs : "2rem"}
                        // }}
                        border={{ b: "1px solid" }}
                        borderColor="gray400"

                    // p={{
                    //     b: { xs : '1rem' }
                    // }}
                    >
                        <Text
                            // textAlign="left"
                            textSize="title"
                            textWeight="400"
                            fontFamily="secondary"
                            textAlign="justify"
                            justify="flex-end"
                            m={{ b: "1rem" }}
                            p={{ t: "3rem", b: "2rem" }}
                            w={{ xs: "auto", md: "40rem" }}
                            textAlign="left"
                        >

                            <div

                                style={{ width: "100%", height: "100%" }}
                                dangerouslySetInnerHTML={{ __html: board['board_content'] }}>
                            </div>

                            {/* {board['board_content']} */}
                        </Text>
                        <Div d="flex" align="center"
                            // border="1px solid"
                            // borderColor="gray200"
                            p={{ b: "20px" }}
                            d={{ xs: "none", md: "flex" }}
                            h="3rem"
                        >
                            <Icon
                                transition
                                onClick={() => likedClick(board)}
                                name={liked ? "HeartSolid" : "Heart"}
                                color={liked ? "danger700" : "black"}
                                size="23px"
                                cursor="pointer"
                                m={{ r: "0.4rem" }}
                            ></Icon>
                            <Text
                                textAlign="left"
                                textSize="subheader"
                                textWeight="600"
                                fontFamily="secondary"
                                textColor="black"
                                m={{ r: "1rem" }}

                            >
                                좋아요
                                        </Text>
                            <Icon
                                transition
                                name="Message"
                                color="black"
                                size="23px"
                                // cursor="pointer"
                                m={{ r: "0.4rem" }}
                            />
                            <Text
                                textAlign="left"
                                textSize="subheader"
                                textWeight="600"
                                fontFamily="secondary"
                                textColor="black"
                                m={{ r: "1rem" }}
                            >
                                {commentlist.length}
                            </Text>
                        </Div>
                    </Div>
                    <Div
                        m={{ t: "0.5rem" }}
                        h="10rem"
                        w="47rem"
                        d="inline-block" align="center"
                    >
                        <Input
                            placeholder="댓글을 남겨주세요."
                            p={{ x: "2.5rem" }}
                            m={{ t: "0.5rem" }}
                            h="5rem"
                            w={{ xs: "25rem", md: "500rem" }}
                            // value = {commentinput}
                            onChange={(e) => { commentinput변경(e.target.value) }}
                            value={commentinput}
                            prefix={
                                <Icon
                                    name="Camera"
                                    color="warning800"
                                    size="16px"
                                    cursor="pointer"
                                    pos="absolute"
                                    top="50%"
                                    left="0.75rem"
                                    transform="translateY(-50%)"
                                />
                            }
                            suffix={
                                <Button
                                    pos={{ xs: "static", md: "absolute" }}
                                    onClick={() => commentaddModal변경(true)}
                                    bg="warning800"
                                    hoverBg="warning600"
                                    w={{ xs: "3rem", md: "6rem" }}
                                    h={{ xs: "5rem", md: "2.5rem" }}
                                    bottom="0"
                                    right="0"
                                    rounded="md"
                                >
                                    등록
                                    </Button>
                            }
                        />
                        <Notification
                            m={{ t: "5rem" }}
                            bg="warning700"
                            isOpen={문자열빈값}
                            onClose={() => 문자열빈값변경(false)}
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
                            isOpen={문자열등록성공알람}
                            onClose={() => 문자열등록성공알람변경(false)}
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
                        <Notification
                            m={{ t: "5rem" }}
                            bg="warning700"
                            isOpen={댓글삭제실패}
                            onClose={() => 댓글삭제실패변경(false)}
                            prefix={
                                <Icon
                                    name="Success"
                                    color="white"
                                    size="18px"
                                    m={{ r: "0.5rem" }}
                                />
                            }
                        >
                            {alerttext[2]}
                        </Notification>
                        <CommunityCommentInsert
                            boardid={board['board_id']}
                            comment_content={commentinput}
                            isOpen={commentaddModal}
                            문자열alert={() => 문자열빈값변경(true)}
                            문자열등록성공={() => 문자열등록성공알람변경(true)}
                            문자열등록성공시초기화={() => commentinput변경("")}
                            onClose={() => commentaddModal변경(false)}></CommunityCommentInsert>

                        {/* 댓글부분시작 */}
                        {commentlist.map(function (datas, i) {
                            return (
                                <Div
                                    p={{ x: "2.5rem", t: "0.7rem" }}
                                    m={{ t: "0.5rem" }}
                                    h="7rem"
                                    w={{ xs: "25rem", md: "auto" }}
                                    border={{ t: "1px solid", b: "1px solid" }}
                                    borderColor="gray400"
                                    d="flex"
                                    bg={i % 2 != 0 ? "gray200" : null}
                                    justify="space-between"
                                >
                                    <Div
                                        w={{ xs: "20rem", md: "auto" }}
                                    >
                                        <Div
                                            textWeight="300"
                                            textColor="gray"
                                        >
                                            <Text>
                                                {datas.nickname}
                                            </Text>
                                        </Div>
                                        <Div
                                            m={{ t: "0.3rem" }}
                                        >
                                            <Text
                                                textWeight="600"
                                                textSize="subheader"
                                                w={{ xs: "40rem", md: "40rem" }}
                                            >
                                                {datas.comment_content}
                                            </Text>
                                        </Div>

                                        <Div d="flex" align="center"
                                            m={{ t: "0.4rem" }}
                                        >
                                            <Icon
                                                transition
                                                name="Timestamp"
                                                color="gray"
                                                size="15px"
                                                // cursor="pointer"
                                                m={{ r: "0.4rem" }}
                                            />
                                            <Text
                                                textAlign="left"
                                                textSize="Typography"
                                                textWeight="600"
                                                fontFamily="secondary"
                                                textColor="gray"
                                                m={{ r: "1rem" }}

                                            >
                                                {timecal(datas['comment_createdata'])}
                                            </Text>
                                            <Icon
                                                transition
                                                // name= "Heart"
                                                // color= "gray"
                                                size="15px"
                                                cursor="pointer"
                                                m={{ r: "0.4rem" }}
                                                onClick={() => commentlikedClick(datas)}
                                                name={LikedCommentsList.includes(String(datas['comment_id'])) ? "HeartSolid" : "Heart"}
                                                color={LikedCommentsList.includes(String(datas['comment_id'])) ? "danger700" : "black"}
                                            />
                                            <Text
                                                textAlign="left"
                                                textSize="Typography"
                                                textWeight="600"
                                                fontFamily="secondary"
                                                m={{ r: "1rem" }}
                                                textColor="gray"
                                            >
                                                {datas.comment_LikeNum}
                                            </Text>
                                        </Div>
                                    </Div>
                                    <Div
                                        // m={{
                                        //     l: { xs: '7rem', md: '30rem' },
                                        // }}
                                        m={{

                                            r: { xs: '+10rem', md: "0.4rem" }
                                        }}
                                    >
                                        {datas.userid == loginid ?
                                            <Icon name="Delete" size="20px"
                                                cursor="pointer"
                                                onClick={() => commentdelete(datas)}
                                            /> :
                                            <Icon name="Info" size="20px"
                                                cursor="pointer"
                                                onClick={() => 신고하기클릭(datas)}
                                            // onClick={() => commentdeclare(data)}
                                            />
                                        }
                                    </Div>

                                </Div>
                            )
                        }
                        )}


                        {/* 댓글 끝 */}

                        <Communitydeclare
                            commentdata={신고할데이터}
                            isOpen={showModal}
                            successDardChange={successDark변경}
                            onClose={() => showModal변경(false)}
                        />
                        <Notification
                            m={{ t: "5rem" }}
                            bg="warning700"
                            isOpen={successDark}
                            onClose={() => successDark변경(false)}
                            prefix={
                                <Icon
                                    name="Success"
                                    color="white"
                                    size="18px"
                                    m={{ r: "0.5rem" }}
                                />
                            }
                        >
                            신고가 접수되었습니다.
                                </Notification>
                    </Div>

                </Div>

                <Div
                    bg="white"
                    //   rounded="lg"
                    d="inline-block" align="center"
                >
                    <Div
                        shadow="4"
                        h="25rem"
                        w="20rem"
                        border="1px solid"
                        borderColor="gray400"
                        d={{ xs: "none", md: "flex" }}
                        bg="white"
                        rounded="lg"
                    >추천글</Div>
                </Div>
            </Div>
        </>
    )
}


export default CommunityBoard;