import React from "react";
import { useSelector } from 'react-redux';
import ProfileDetail2 from "./ProfileDetail2";
import ProfileDetail3 from "./ProfileDetail3";
import { Div, Text, Container } from "atomize";

function Profile() {
   const nickname = useSelector(state => state.user.nickname);
    
    return (
        <div>
        <>
       <Div 
           tag="section" 
           p={{ t: { xs: "6rem", md: "10rem" } }}
       >
           <Container 
               d="flex" 
               flexDir="column" 
               align="center">
                   <Text
                       tag="h1"
                       textWeight="800"
                       textAlign="center"
                       textSize="display2"
                       m={{ b: "1rem" }}
                       fontFamily='ko'
                   >
                       {nickname}님의 마이페이지입니다
                   </Text>
                   <Text
                       tag="h2"
                       textWeight="800"
                       maxW="36rem"
                       textSize="subheader"
                       textAlign="center"
                       m={{ b: "2.5rem" }}
                       fontFamily='ko'
                   >
                     오늘도 똑똑한 개미들과 함께 기분좋은 하루 되세요
                   </Text>
                   <Div d ="flex" d="flex" flexDir={{ xs:"column",md:"row" }}>
                   <ProfileDetail2 />
                   <ProfileDetail3 />
                   </Div>   
               </Container>
             </Div>
   </>
   </div>
    )
}

export default Profile;