import React from "react"

import './css/Loading.css';

import { Div } from "atomize";

function MainPnlIndShimmer() {
    
    return (
        <Div
            p="1rem"
            bg="white"
            shadow="2"
            rounded="xl"
            m={{ b: "0.5rem" }}
        >
            <div class="mainPnlIndCard br animate"></div>
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

export default MainPnlIndShimmer;