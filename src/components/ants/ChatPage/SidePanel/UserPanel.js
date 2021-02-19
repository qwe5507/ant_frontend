import React from "react"
import { Div, Text} from "atomize"

function UserPanel() {
    return (
        <div>
            <Div p={{ t: { xs: "6rem", md: "5em" } }}>
            <Text
                textAlign="right"
                textSize="display1"
                textWeight="800"
                fontFamily="ko"
              >
                Chat Room
              </Text>
              <Text
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