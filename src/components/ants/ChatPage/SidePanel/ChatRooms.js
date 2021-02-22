import React, { Component } from "react"
import { Div, Text, Container} from "atomize"
import { connect } from 'react-redux';


export class ChatRooms extends Component {
    render() {
        return (
            <div>

                <br/>
            <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
              >
                CHAT ROOMS(5)
              </Text>
              <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                첫째방
              </Text>
              <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                둘째방
              </Text>
              <Text m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                셋째방
              </Text>

             
            </div>
        )
    }
}

export default connect()(ChatRooms);