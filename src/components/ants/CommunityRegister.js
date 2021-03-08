import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Div, Image, Container, Button, Anchor, scrollTo, Icon, Text, Radiobox, Label, Switch, Row, Col, logoSketch, logoReact,Input } from "atomize"
import logo from "../../images/logo.svg"
import producthunt from "../../images/logo-producthunt.svg"
import { Link, Route, useHistory, useParams } from 'react-router-dom';
import BoardApiService from "../../api/BoardApi";
import CommentApiService from "../../api/CommentApi";
import { AddAlarmSharp } from "@material-ui/icons"
import { useDispatch, useSelector } from 'react-redux';

import { setSavedBoards } from '../../redux/actions/user_action';

function CommunityRegister(props) {


  // 아래코드 있으니 새로고침 해도 저장한글이 표시됨.
  useEffect(() => {
  });

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
                      w = "9rem"
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
              h = "30rem"
              >

              </Div>
          </Col>
        </Row>


      </Div>

    </>
  )
}

export default CommunityRegister;