import React from "react"

import './css/Loading.css';

import { Div } from "atomize";

function NewsCardShimmer() {

    return (
        <Div
            w="100%"
            h="6rem"    
            bg="white"
            shadow="2"
            rounded="xl"
            p={{ t: "0.5rem", l: "0.7rem", r: "0.7rem" }}
            m={{ b: "0.5rem" }}
        >
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

export default NewsCardShimmer;