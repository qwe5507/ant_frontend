import React from "react"
import { Div, Text} from "atomize"

function UserPanel() {
    return (
        <div>
            <Div p={{ t: { xs: "6rem", md: "1rem" } }}>
            <Text m={{ xs: "0.2rem", md: "0.5rem" }}
                textAlign="right"
                textSize="display1"
                textWeight="800"
                fontFamily="ko"
              >
                Chat Room
              </Text>
              <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="heading"
                textWeight="800"
                fontFamily="ko"
              >
                신영
              </Text>
            
            </Div>
          
           
        </div>
    )
}

export default UserPanel;