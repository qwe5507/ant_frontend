import React, { Component } from "react"
import { Text, Div, Icon, Anchor, Button,  Notification } from "atomize"
import UserApiService from "../../api/UserApi";
import $ from 'jquery';
import TextField from '@material-ui/core/TextField'
import firebase from "../../firebase";
import { connect } from 'react-redux';
import { setName } from "../../redux/actions/user_action";

class ProfileDetail2 extends Component{
  
    constructor(props){
        super(props);
    
        this.state = {

        userid : '',
        email : '',
        pass : '',
        currentPassword : '',
        currentEmail : '',
        kakaoname : '',
        nickname : '',
        phone : '',
        userdate : '',
        subscripstat : '',
        managestat : '',
        commentlist : '',
        message : null,
        showPassword: false,
        coInputError : false,
        coDuplicateError : false,
        coPassError : false,
        coPassLenError : false,
        coNameError : false,
        coPhoneError : false,
        chatUserRef: firebase.database().ref("currentUser")
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
          phone: user.phone,
          currentPassword : user.pass,
          currentEmail : user.email
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

      byunPass =  async(e)  => {
        e.preventDefault();
        if( $.trim($('#pass').val()).length == 0 || $.trim($ ('#passCon').val()).length == 0)
        {
              this.setState({
                coInputError : true
              })
         }
      if( $('#pass').val() != $('#passCon').val())
    {
      this.setState({
        coDuplicateError : true
      })
    }
    else if( $.trim($('#pass').val()).length < 6)
    {
      this.setState({
        coPassLenError : true
      })
    }
    else{
      
        let user ={
         userid: this.state.userid,
          pass : this.state.pass
        }
        
     
        await UserApiService.passwordEdit( user)
          .then( res  =>{

            alert("고객님의 비밀번호가 수정되었습니다")
          console.log(this.state.message)    
        })
        .catch(err => {
          console.log('마이페이지비밀번호-수정 오류', err);
        });
       
       await firebase.auth()
        .signInWithEmailAndPassword(this.state.currentEmail, this.state.currentPassword)
        .then(function(userCredential) {
          userCredential.user.updatePassword(user.pass)
         })


        }
      }
  
      
      saveUser =  (e) =>{
        e.preventDefault();
        
   if( $.trim($('#nickname').val()).length == 0 ||$.trim($('#phone').val()).length == 0 )
    {
          this.setState({
            coInputError : true
          })
        }
  else if(  $.trim($('#nickname').val()).length < 2)
        {
          this.setState({
            coNameError : true
          })
      }   
    
    else if( isNaN( $('#phone').val()))
    {
      this.setState({
        coPhoneError : true
      })
    }  
        else{

          let user ={
            userid: this.state.userid,
            nickname : this.state.nickname,
            phone : this.state.phone,
          }
        
          UserApiService.profileEdit( user)
          .then( res  =>{
        
            this.setState({
              message : "수정되었습니다"
            })
            console.log(this.state.message);
  
            window.location.reload()
            alert("고객님의 회원정보가 수정되었습니다")

          })
          .catch(err => {
            console.log('마이페이지-수정 오류', err);
          });

        
          this.props.dispatch(setName(user.nickname))
              
            firebase.database().ref("users")
            .child(firebase.auth().currentUser.uid)
            .update({ name: user.nickname })
           
          firebase.auth().currentUser
          .updateProfile({displayName: user.nickname }).then(
    
          )

        }
     
      }
  

render(){
    const { coInputError } = this.state;
    const { showPassword } = this.state;
    const { coDuplicateError } = this.state;
    const { coNameError } = this.state;
    const { coPhoneError } = this.state;
    const { coPassLenError } = this.state;
  
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
        <Notification
              bg="info700"
              isOpen={coInputError}
              onClose={() => this.setState({ coInputError: false })}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
          작성란을 입력해주세요        
          </Notification>

          <Notification
              bg="info700"
              isOpen={coDuplicateError}
              onClose={() => this.setState({ coDuplicateError: false })}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
          비밀번호와 확인란이 동일하지 않습니다        
          </Notification>

          <Notification
              bg="info700"
              isOpen={coNameError}
              onClose={() => this.setState({ coNameError: false })}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
          별명은 최소 2자 이상으로 입력해주세요       
          </Notification>

          <Notification
              bg="info700"
              isOpen={coPhoneError}
              onClose={() => this.setState({ coPhoneError: false })}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
          전화번호는 숫자로만 입력해주세요       
          </Notification>

          <Notification
              bg="info700"
              isOpen={coPassLenError}
              onClose={() => this.setState({ coPassLenError: false })}
                    prefix={
                        <Icon
                            name="AlertSolid"
                            color="white"
                            size="18px"
                            m={{ r: "0.5rem" }}
                        />
                    }
                >
          비밀번호는 6자 이상으로 입력해주세요     
          </Notification>

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
                회원정보수정
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
            id = "nickname"
            />    
            </Div>
          
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "0.5rem" }}>
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
            id = "phone"
            />    
            </Div>
           
            <div align="center">
            <Button
            
            h="2rem"
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
        <Text
                m={{ t: "1rem", b: "0.5rem" }}
                textWeight="800"
                textSize="title"
                fontFamily="ko"
            >
                비밀번호수정
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
                비밀번호
             </Text>
             <TextField type="password"
            value={this.state.pass}
            type={showPassword ? "text" : "password"}
            onChange={this.onChange}
            name="pass"
            id = "pass"
            />    
            </Div>
            <Div
            d="flex"
            flexDir="row"
            m={{ b: "0.5rem" }}>
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
        <Button
            
            h="2rem"
            w="8rem"
            bg="black"
            rounded="circle"
            m={{ r: "1rem" }}
            shadow="2"
            hoverShadow="4"
            onClick={this.byunPass}
            >
            비밀번호변경
        </Button>
        </div>
        
        </Div>
        </form>
    </Div>
    )
}
}

export default connect()(ProfileDetail2);