import React, { Component } from "react"
import { Div, Text, Container} from "atomize"
import { connect } from 'react-redux';


export class ChatRooms extends Component {
    render() {
        return (
            <div>

                <br/>
            <Text
                textAlign="right"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
              >
                CHAT ROOMS(5)
              </Text>
              <Text
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                첫째방
              </Text>
              <Text
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                둘째방
              </Text>
              <Text
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