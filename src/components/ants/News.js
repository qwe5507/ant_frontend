import React, { useState } from "react"
import NewsForm1 from "./NewsForm/NewsForm1"
import NewsForm2 from "./NewsForm/NewsForm2"
import NewsForm3 from "./NewsForm/NewsForm3"
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { Switch, Label, Example, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";
import axios from "axios";

function News() {

  return (
    <Div>
      <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "3rem" },
        }}
        m={{ t: { xs: "5rem", md: "5rem" } }}
        overflow="hidden"
      >
        <Container>
          <Div
            d="flex"
            justify="center"
            p={{ b: "15rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Div
              minW={{ xs: "100%", md: "80rem" }}
              d="flex"
              justify="center"
              flexDir={{ xs: "column", md: "row" }}
              h={{ xs: "auto", md: "21rem", lg: "20rem" }}
              pos="relative"
            >

              {/* Form Component */}
              <NewsForm1 />
              <NewsForm2 />
              {/* <NewsForm3 /> */}

            </Div>
          </Div>
        </Container>
      </Div>


    </Div>


  )
}



export default News;