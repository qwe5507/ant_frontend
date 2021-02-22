import React from "react"
import NewsForm1 from "./NewsForm/NewsForm1"
import NewsForm2 from "./NewsForm/NewsForm2"
import NewsForm3 from "./NewsForm/NewsForm3"
import { Switch, Label, Example, Div, Br, Text, Container, Anchor, Input, Icon, Button, props, girl, rest, boy } from "atomize";

function News() {
    return (
        
        <Div>
        <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "6rem", md: "6rem" } }}
        overflow="hidden"
        d="flex"
        justify="center"
        // border="1px solid"
        // borderColor="info700"
        >
         <Input
        placeholder="Search"
        // p={{ x: "30.5rem" }}
        w = {{ xs: "38rem", md: "20rem" } }
        h = {{ xs: "3rem", md: "3rem" } }
        
        // border="1px solid"
        // borderColor="info700"
        pos = "static"
        suffix={
         <Icon
         name="Search"
         size="20px"
         cursor="pointer"
         onClick={() => console.log("clicked")}
         pos="absolute"
        
         top="50%"
         right="1rem"
         transform="translateY(-50%)"
         />
     }
      />
        </Div>
        <Div
        tag="section"
        w="100vw"
        p={{ t: { xs: "3rem", md: "8rem" } }}
        overflow="hidden"
       
      >
        <Container>
          <Div
            d="flex"
            justify="center"
            p={{ b: "10.5rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
            
          >
            <Div
              minW={{ xs: "100%", md: "44rem", lg: "70rem" }}
              d="flex"
              align="center"
              flexDir="column"
              h={{ xs: "auto", md: "21rem", lg: "20rem" }}
              pos="relative"
            >
          
              {/* Form Component */}
              <NewsForm1 />
              <NewsForm2 />
              <NewsForm3 />

            </Div>
          </Div>
        </Container>
      </Div>

      
  </Div>

                  
    )
}

export default News;