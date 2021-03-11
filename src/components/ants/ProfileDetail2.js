import React, { Component } from "react"
import { Text, Div, Icon, Anchor, Button, Input } from "atomize"
import UserApiService from "../../api/UserApi";

import TextField from '@material-ui/core/TextField'
class ProfileDetail2 extends Component{

    constructor(props){
        super(props);
    
        this.state = {

        userid : '',
        email : '',
        pass : '',
        kakaoname : '',
        nickname : '',
        phone : '',
        userdate : '',
        subscripstat : '',
        managestat : '',
        commentlist : '',
        message : null,
        showPassword: false
        }
      }

      componentDidMount(){
        this.loadUser();
      }

      loadUser = () => {
        UserApiService.profileShow(window.localStorage.getItem("userid"))
        .then(res => {
        let user = res.data;
        this.setState({
          userid: user.userid,
          email: user.email,
          pass: user.pass,
          nickname: user.nickname,
          phone: user.phone
        })
        })
        .catch(err => {
          console.log('load에러',err)
        })
      }

      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      saveUser = (e) =>{
        e.preventDefault();
  
        let user ={
          userid: this.state.userid,
          email : this.state.email,
          pass : this.state.pass,
          nickname : this.state.nickname,
          phone : this.state.phone,
        }
        
        UserApiService.profileEdit( user)
        .then( res =>{
          this.setState({
            message : "수정되었습니다"
          })
          console.log(this.state.message);
          
          window.location.reload()
          alert("고객님의 회원정보가 수정되었습니다")
          //this.props.history.push('/Profile');
        })
        .catch(err => {
          console.log('마이페이지-수정 오류', err);
        });
      }
  

render(){
    const { showPassword } = this.state;
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
        <form>
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
                개인정보수정
            </Text>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "1rem" }}
            >
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
               별명
             </Text>
             <TextField type="text"
            value={this.state.nickname}
            onChange={this.onChange}
            name="nickname"
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "1rem" }}
            >
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                비밀번호
             </Text>
             <TextField type="password"
            value={this.state.pass}
            type={showPassword ? "text" : "password"}
            onChange={this.onChange}
            name="pass"
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "1rem" }}>
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
                
            >
                확인
             </Text>
             <TextField type="password"
            id = "passCon"
            type={showPassword ? "text" : "password"}
            onChange={this.onChange}
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "1rem" }}>
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                전화번호
             </Text>
             <TextField type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "1rem" }}>
            <Text
                w={{ xs: "20%", sm: "5rem" }}
                p={{ t: "0.3rem" }}
                textSize="subheader"
                textWeight="800"
                textAlign="center"
                fontFamily="ko"
            >
                EMAIL
             </Text>
            <TextField type="text"
           name="email"
            value={this.state.email}
            onChange={this.onChange}
            />    
            </Div>
            <div align="center">
            <Button
            
            h="2.5rem"
            w="8rem"
            bg="black"
            rounded="circle"
            m={{ r: "1rem" }}
            shadow="2"
            hoverShadow="4"
            onClick={this.saveUser}
            >
            정보 수정
        </Button>
        </div>
        
        </Div>
        </form>
    </Div>
    )
}
}



export default ProfileDetail2;
