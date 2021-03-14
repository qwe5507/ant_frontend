import { Div, Button, Modal, Icon, Text, Dropdown, Anchor ,Notification } from "atomize";
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import DeclareApiService from "../../api/DeclareApi";
import { setUserLoginCheck, setUserLogout, setUser, setSavedBoards, setLikedComments, setLikedBoards, setDeclareData } from '../../redux/actions/user_action';



function Communitydeclare(props){ 
  const dispatch = useDispatch();
    const loginid = useSelector(state => state.user.userid);
    // let [isOpens,isOpens변경] = useState(false);
    // let [onCloses,onCloses변경] = useState(false);
    let [hovername,hovername변경] = useState("욕설");
    

    const menuList = (
        <Div p={{ x: "1rem", y: "0.5rem" }}>
          {["욕설", "부적절인 내용", "기타"].map((name, index) => (
            <Anchor d="block" p={{ y: "0.25rem" }} onClick = {()=>{hovername변경(name)}}>
              {name}
              {/* {props.commentdata.comment_id} */}
            </Anchor>
          ))}
        </Div>
      );

      function declareSubmit(data,props_commentdata_comment_id,props_boarddata_board_id){
        console.log("들어온데이터")
        console.log(typeof props_commentdata_comment_id)
        console.log(typeof props_boarddata_board_id)
        let declaredata = null
        if (props_commentdata_comment_id){
         declaredata = {
            comment_id : props_commentdata_comment_id,
            userid : loginid,
            declared_type : data
            }
        }else{
          declaredata = {
            board_id : props_boarddata_board_id,
            userid : loginid,
            declared_type : data
            }
        }

        DeclareApiService.addDeclare(declaredata)
        .then(res => {
            console.log("신고하기 접수 성공")
            
            props.successDardChange(true);

                    // 신고한 데이터리스트 가져오기 
                    DeclareApiService.fetchDeclaredByID(loginid)
                    .then(res => {
                      console.log(res.data)
                      let tempcommentlist = [];
                      let tempboardlist = [];
                      for(var i =0;i<res.data.length;i++){
                        tempcommentlist.push(res.data[i]['comment_id'])
                        tempboardlist.push(res.data[i]['board_id'])
                      }
                      
                    var data = { declarecomment: tempcommentlist,
                              declareboard : tempboardlist};
                    
                    dispatch(setDeclareData(data));
                    })
                    .catch(err => {
                    console.log('***** Community fetchDeclaredByID error:', err);
                    });
        })
        .catch(err => {
            console.log('***** Community addDeclare error:', err);
        }); 
        props.onClose();
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
        onClick={props.onClose}
        cursor="pointer"
      />
      <Div d="flex" m={{ b: "2rem" }}>
        <Icon
          name="AlertSolid"
          color="warning700"
          m={{ t: "0.35rem", r: "0.5rem" }}
        />
        <Text p={{ l: "0.5rem", t: "0.25rem" }} textSize="subheader">
          신고유형을 선택해주세요.
        </Text>

      </Div>
      <Div>
      <Dropdown targetHover menu={menuList}
      m={{ b: "2rem" }}
      >
          {hovername}
        </Dropdown>
    </Div>
      <Div d="flex" justify="flex-end">
        <Button
          onClick={props.onClose}
          bg="gray200"
          textColor="medium"
          m={{ r: "1rem" }}
        >
          Cancel
        </Button>
        <Button onClick={() => declareSubmit(hovername,props.commentdata.comment_id,props.boarddata.board_id)} bg="info700">
          Yes, Submit
        </Button>
      </Div>

    </Modal>
  );
};

export default Communitydeclare;