import React from "react"

import girl2 from "../../../images/avatar/girl2.png"
import cardImg from "../../../images/hero-illustration/card-img.png"
import axios from 'axios';
// import Kakao from 'kakaojs';

import { Button, Text, Div, Icon } from "atomize"

class CardComponent extends React.Component {
  
  constructor(){
    console.log('1');
    super();

    this.state = {
      name : "",
      kakaoid : "",
      liked: false,
      id: "",
      username: "",
      firstName: "",
      lastName: "",
      age: "",
      salary: "",
      message: null
    }
    
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidMount.window.Kakao.Auth.createLoginButton = this.window.Kakao.Auth.createLoginButton.bind(this);
  }
  componentDidMount() { //렌더링 될때 실행되는함수, useEffect랑 비슷한기능
    console.log('2');
    // window.Kakao.init('0198e284181270821795f41b8741e202'); //REST API 키 
    window.Kakao.init('fb58ebd76f41eecb94267d2c08ceb73a'); //JS 키 
    let ids ;
    console.log(window.Kakao.isInitialized());
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {

        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function(res) {
                // alert(JSON.stringify(res)); //<---- kakao.api.request 에서 불러온 결과값 json형태로 출력
                // alert(JSON.stringify(authObj)); //<----Kakao.Auth.createLoginButton에서 불러온 결과값 json형태로 출력
                console.log('id : ',res.id);//<---- 콘솔 로그에 id 정보 출력(id는 res안에 있기 때문에  res.id 로 불러온다)
                ids = res.id;
                //console.log(res.kaccount_email);//<---- 콘솔 로그에 email 정보 출력 (어딨는지 알겠죠?)
                console.log(res.kakao_account);
                console.log(res.kakao_account['email']);
                console.log(res.properties);
                console.log(res.properties['nickname']);//<---- 콘솔 로그에 닉네임 출력(properties에 있는 nickname 접근 
                // console.log(res.properties.nickname ) // 으로도 접근 가능
                console.log(authObj.access_token);//<---- 콘솔 로그에 토큰값 출력
                let userdata = {
                  id: res.id,
                  name: res.properties['nickname'],
                }

                  axios.post("http://192.168.0.56:8000/user",userdata)
                    .then( res => {
                      alert('회원 등록성공')

                    })
                    .catch(err => {
                      alert('등록된 회원입니다.')
                      console.log('kakao user 등록 에러', err);

                    });
                    console.log("http://192.168.0.56:8000/user/"+userdata['id'])
                    
                    // this.kakaologin(userdata);
                    
              }
            })
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });

    
    this.reloadUserList();
    console.log('토근'+window.Kakao.Auth.getAccessToken());
    if (window.Kakao.Auth.getAccessToken()){
      axios.get("http://192.168.0.56:8000/user/1625408104")
      .then( res => {
        let user = res.data;
        console.log(user)
        console.log('성공!!!')
        this.setState({
          kakaoid : user.id,
          name : user.name
        })
      })
      .catch(err => {
        console.log('실패!!', err);
      });
    }

  }

  // kakaologin = (userdata) => {
    

  // }
    // window.Kakao.Auth.createLoginButton({ container: '#kakao-login-btn', success: function(authObj) { alert(JSON.stringify(authObj)); }, fail: function(err) { alert(JSON.stringify(err)); } });
/**
* 카카오톡 로그아웃
**/

  logoutWithKakao = () => {
    if (window.Kakao.Auth.getAccessToken()) {
      console.log('카카오 인증 액세스 토큰이 존재합니다.', window.Kakao.Auth.getAccessToken())
      window.Kakao.Auth.logout(() => {
        console.log('로그아웃 되었습니다', window.Kakao.Auth.getAccessToken());
        // this.setState({
          // isLogin: false
        // })        
      });
    }else{
      console.log('토큰없음')
    }
  }
  reloadUserList = () => {
    axios.get("http://192.168.0.56:8000/users/2")
      .then( res => {
        console.log('성공')
        let user = res.data;
        this.setState({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          salary: user.salary
        })
      })
      .catch(err => {
        console.log('loadUser() 에러', err);
      });


  }

  render() {
    const { liked } = this.state
    return (
      <Div
        d={{ xs: "none", lg: "block" }}
        border="1px solid"
        borderColor="gray200"
        w="17rem"
        pos="absolute"
        left="21rem"
        top="0"
        rounded="xl"
        bg="white"
        shadow="4"
        overflow="hidden"
      >
        <a id="kakao-login-btn"></a>
        <br/>
        <a href="https://kauth.kakao.com/oauth/logout?client_id=0198e284181270821795f41b8741e202&logout_redirect_uri=http://localhost:3000">로그아웃</a>
        <button onClick = {this.logoutWithKakao } >로그아웃</button>
        <Text textWeight="500">{this.state.kakaoid}</Text>
        <Text textWeight="500">{this.state.name}</Text>
        <Div
          bgImg={cardImg}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          p={{ b: "84%" }}
        />
        <Div p="1rem" d="flex" align="center" justify="space-between">
          <Div d="flex" align="center">
            <Div
              h="1.5rem"
              w="1.5rem"
              bgImg={girl2}
              bgSize="cover"
              bgPos="center"
              m={{ r: "1rem" }}
              rounded="circle"
            ></Div>
            <Text textWeight="500">{this.state.firstName}</Text>
          </Div>
          <Icon
            transition
            onClick={() => this.setState({ liked: !liked })}
            name={liked ? "HeartSolid" : "Heart"}
            color={liked ? "danger700" : "black"}
            size="18px"
            cursor="pointer"
          />
        </Div>
      </Div>
    )
  }
}

export default CardComponent
