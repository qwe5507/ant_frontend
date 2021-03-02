import React, { useState } from "react"
import { Text, Div, Icon, Anchor, Button, Input, Notification } from "atomize"
import { useHistory, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setUserLoginAdd, setUser } from '../../../redux/actions/user_action';

import firebase from "../../../firebase";
import md5 from "md5";

function Register() {

  const dispatch = useDispatch();
  const [isLoading, isLoadingChange] = useState(false)

  let history = useHistory();

  let [nickname, nickname변경] = useState("");
  let [telnumber, telnumber변경] = useState("");
  let [이메일, 이메일변경] = useState("");
  let [비밀번호, 비밀번호변경] = useState("");
  let [비밀번호확인, 비밀번호확인변경] = useState("");

  let [pwdNotMatch, pwdNotMatchChange] = useState(false);
  let [pwdLength, pwdLengthChange] = useState(false);
  let [firebaseError, firebaseErrorChange] = useState(false);

  async function addinfobutton() {
    if (비밀번호 === 비밀번호확인) {
      if (비밀번호.length >= 6) {
        isLoadingChange(true);  // 회원 등록 진행 중 버튼 클릭 비활성화

        // Firebase RegisterPage 대체
        try {
          var userinfo = { loginstate: true, nickname: nickname, phone: telnumber, email: 이메일, pass: 비밀번호 };
          dispatch(setUserLoginAdd(userinfo));

          // 1. Firebase 유저 생성
          let createdUser = await firebase
            .auth()  // auth 서비스 접근 
            .createUserWithEmailAndPassword(이메일, 비밀번호)
            .catch((error) => { // auth 에러 확인
              console.log('Firebase Register Error', error.code);
              console.log('Firebase Register Error', error.message);
            });
          console.log('createdUser', createdUser)

          // 2. Firebase 유저 추가 정보 입력
          await createdUser.user
            .updateProfile({
              displayName: nickname,
              photoURL: `http://gravatar.com/avatar/${md5(
                createdUser.user.email
              )}?d=identicon`
            })

          // 3. Firebase 데이터베이스 저장
          await firebase.database().ref("users").child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            image: createdUser.user.photoURL
            })
            .then(() => {
              // 4. Firebase 유저 정보 Redux State 저장
              firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  dispatch(setUser(user));
                } else {
                  // Firebase만 로그아웃 된 경우 처리 필요
                  // dispatch(clearUser());
                }
              });
            })
            .catch((error) => {
              console.log('Firebase 데이터베이스 에러', error.code);
              console.log('Firebase 데이터베이스 에러', error.message);
            });

          isLoadingChange(false); // 회원 등록 완료 후 버튼 활성화
          history.push('/');
        }
        catch (error) {
          console.log('Firebase RegisterPage 대체 에러', error.message);
          localStorage.removeItem('userid'); // 회원 등록 오류 시 Local Storage의 userid 삭제
          isLoadingChange(false); // 회원 등록 실패 시 버튼 재활성화
          firebaseErrorChange(true);
        }
      }
      else {
        pwdLengthChange(true);
      }
    } else {
      pwdNotMatchChange(true);
    }

  }

  return (
    <Div
      d="flex"
      flexDir="column"
      border="1px solid"
      borderColor="gray200"
      w={{ xs: "100%", md: "30.5rem" }}
      maxW="100%"
      pos={{ xs: "static" }}
      // m={{ xs: "50%", md: "12rem" }}
      m={{ t: "11rem", l: "33%" }}
      align="center"

      // right="50%"
      // top="50%"
      rounded="xl"
      h="38rem"
      bg="white"
      shadow="4"
      p="2rem"
    >
      <Div flexGrow="1">
        <Text
          textAlign="center"
          textSize="title"
          m={{ t: "3rem", b: "0.5rem" }}
          textWeight="500"
          fontFamily="secondary"
        >
          처음이시군요 추가정보를 입력하고
          회원등록을 완료하세요.
      </Text>

        {/* 비밀번호 일치 여부 확인 */}
        <Notification
          bg="warning700"
          isOpen={pwdNotMatch}
          onClose={() => pwdNotMatchChange(false)}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          비밀번호가 일치하지 않습니다.
        </Notification>

        {/* 비밀번호 6자리 이상 확인 */}
        <Notification
          bg="warning700"
          isOpen={pwdLength}
          onClose={() => pwdLengthChange(false)}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          비밀번호는 6자리 이상이어야 합니다.
        </Notification>

        {/* Firebase 등록 에러 발생 시 안내 */}
        <Notification
          bg="warning700"
          isOpen={firebaseError}
          onClose={() => firebaseErrorChange(false)}
          prefix={
            <Icon
              name="AlertSolid"
              color="white"
              size="18px"
              m={{ r: "0.5rem" }}
            />
          }
        >
          서버 에러가 발생했습니다. 잠시 후 다시 시도해주세요.
        </Notification>

        <Text
          m={{ b: "3rem" }}
          textAlign="center">
        </Text>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "0.5rem" }}
          textAlign="center"
          textWeight="500"
        >
          추가정보 입력
      </Text>
        <Input
          placeholder="닉네임을 입력하세요."
          p={{ x: "2.5rem" }}
          onChange={(e) =>
            nickname변경(e.target.value)
          }
          prefix={
            <Icon
              name="UserSolid"
              color="warning800"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Input
          placeholder="전화번호를 입력하세요."
          p={{ x: "2.5rem" }}
          m={{ t: "1.2rem" }}
          onChange={(e) =>
            telnumber변경(e.target.value)
          }
          prefix={
            <Icon
              name="Add"
              color="warning800"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Input
          placeholder="이메일을 입력하세요."
          p={{ x: "2.5rem" }}
          m={{ t: "1.2rem" }}
          onChange={(e) =>
            이메일변경(e.target.value)
          }
          prefix={
            <Icon
              name="Email"
              color="warning800"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Input
          placeholder="정보수정을 위한 비밀번호를 입력하세요."
          p={{ x: "2.5rem" }}
          m={{ t: "1.2rem" }}
          onChange={(e) =>
            비밀번호변경(e.target.value)
          }
          prefix={
            <Icon
              name="EyeSolid"
              color="warning800"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Input
          placeholder="비밀번호를 다시 입력하세요."
          p={{ x: "2.5rem" }}
          m={{ t: "1.2rem" }}
          onChange={(e) =>
            비밀번호확인변경(e.target.value)
          }
          prefix={
            <Icon
              name="Eye"
              color="warning800"
              size="16px"
              cursor="pointer"
              pos="absolute"
              top="50%"
              left="0.75rem"
              transform="translateY(-50%)"
            />
          }
        />
        <Div
          pos="flex"
          m={{ t: "2.7rem", l: "7rem" }}>
          <Button
            prefix={
              <Icon
                name="EyeSolid"
                size="25px"
                color="white"
                m={{ r: "0.5rem" }}
              />
            }
            bg="warning700"
            hoverBg="warning800"
            rounded="circle"
            w="12rem"
            p={{ r: "1.5rem", l: "1rem" }}
            shadow="3"
            hoverShadow="4"
            textWeight="50"
            prefix={
              isLoading ?
                <Icon
                  name="Loading"
                  pos="absolute"
                  top="50%"
                  left="1rem"
                  transform="translateY(-50%)"
                  size="18px"
                  color="white"
                  m={{ r: "0.5rem" }}
                />
                :
                ""
            }
            onClick={() =>
              addinfobutton()
            }
            disabled={isLoading}
          >
            입력완료
                </Button>
        </Div>
        <Text
          textColor="#999"
          textSize="caption"
          m={{ b: "4rem" }}
          textAlign="left"
          textWeight="500"
        >

          <Text
            // textColor="#999"
            textSize="caption"
            // m={{ b: "1rem" }}
            textAlign="right"
          // textWeight="500"
          >

          </Text>
        </Text>

      </Div>
    </Div>
  )
}

export default Register;