import React from "react"

import './css/Loading.css';

import { Div } from "atomize";

function SearchShimmer() {
    
    return (
        <Div
            // border="1px solid"
            // borderColor="gray200"
            w={{ xs: "100%", md: "60rem" }}
            m={{ b: { xs: "1rem", md: "1rem" } }}
            maxW="100%"
            h="100%"
            flexDir="column"
            top="0"
            p={{
                x: { xs: "2rem", sm: "1.5rem" },
                b: { xs: "2rem", sm: "1.5rem" },
                t: "1rem",
            }}
            bg="white"
            shadow="2"
            rounded="xl"
            d="flex"
            hoverBg="info200"
            cursor="pointer"
        >
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
            <div class="comment br animate"></div>
        </Div>
        // <div class="card br">
        //   <div class="wrapper">
        //     {/* <div class="profilePic animate"></div> */}
        //     <div class="comment br animate w80"></div>
        //     <div class="comment br animate"></div>
        //     <div class="comment br animate"></div>
        //   </div>
        // </div>
    )
}

export default SearchShimmer;