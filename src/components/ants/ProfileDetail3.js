import React, { Component } from "react"
import UserApiService from "../../api/UserApi";
import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
class ProfileDetail3 extends Component{

    constructor(props){
       // console.log('constro run');
        super(props);
        this.state ={
          boards : [],
          message : null
        };
      }

     

      componentDidMount(){
       // console.log('comdid run');
        this.reloadBoardList();
      }

    reloadBoardList = () => {
        UserApiService.boardShow(window.localStorage.getItem("userid"))
          .then(res =>{
            this.setState({boards: res.data})
          
          })
          .catch(err => {
            console.error('게시글 조회 오류', err);
            alert('조회 오류입니다. 관리자에게 문의 부탁드립니다.');
        })
    }

    componentWillUnmount(){
    
    }   

    render(){
    return(
        
    <Div
        border="1px solid"
        borderColor="gray200"
        w={{ xs: "100%", md: "19.5rem" }}
        maxW="100%"
        pos={{ xs: "static", md: "relative" }}
        m={{ xs: "1rem", md: "1rem" }}
        top="0"
        p={{
            x: { xs: "2rem", sm: "1.5rem" },
            b: { xs: "2rem", sm: "1.5rem" },
            t: "1.5rem",
        }}
        h="25rem"
        bg="white"
        shadow="4"
        rounded="xl"

    >
        
        <Div
            flexGrow="1"
            textAlign="center"
        >
            <Text
                m={{ t: "1rem", b: "0.5rem" }}
                textWeight="800"
                textSize="title"
                fontFamily="ko"
            >
                게시물
            </Text>
            {this.state.boards.map(board => 
            <Link to={`/Community/${board.board_id}`} >
            <Paper>

            <Text
            textAlign="left"
            m={{ t: "0.5rem", b: "0.5rem" }}
            textWeight="600"
            textSize="subheader"
            fontFamily="ko"
            >
            {board.board_title.substring(0,15)}
            </Text>
        <Text
        textColor="gray900"
        textAlign="right"
        m={{ t: "0.5rem", b: "0.5rem" }}
        fontFamily="ko"
        >{board.board_createdata.substring(0,19)}</Text>

    </Paper>
    </Link>)}
        </Div>
    </Div>
        )
    }
}

export default  ProfileDetail3;
