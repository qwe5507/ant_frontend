import React, { Component } from "react"
import { Div, Text, Container} from "atomize"
import { connect } from 'react-redux';


export class DirectMessages extends Component {
    render() {
        return (
            <div>
              
                <br/>
            <Text
            m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="subheader"
                textWeight="800"
                fontFamily="ko"
              >
                DIRECT MESSAGES (4)
              </Text>
              <Text  m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                첫째
              </Text>
              <Text  m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                둘째
              </Text>
              <Text  m={{ xs: "0.2rem", md: "0.3rem" }}
                textAlign="right"
                textSize="body"
                textWeight="800"
                fontFamily="ko"
              >
                셋째
              </Text>

             
            </div>
        )
    }
}

export default connect()(DirectMessages);